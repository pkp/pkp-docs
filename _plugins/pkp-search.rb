# PKP Search Index
#
# Based on https://github.com/slashdotdash/jekyll-lunr-js-search but this only
# builds the JSON search index

require 'fileutils'
require 'json'

module Jekyll
  module PkpSearch
    class Indexer < Jekyll::Generator
      def initialize(config = {})
        super(config)

        @search_config = {
					'exclude_file_types' => {},
          'exclude_titles' => {},
        }.merge!(config['pkp_search'] || {})

				@exclude_file_types = @search_config['exclude_file_types']
        @exclude_titles = @search_config['exclude_titles']
      end

      # Index all pages except pages matching any value in config['lunr_excludes'] or with date['exclude_from_search']
      # The main content from each page is extracted and saved to disk as json
      def generate(site)
        Jekyll.logger.info "PkpSearch:", 'Creating search index...'

				items = []

				site.pages.each_with_index do |page, index|
					if page.url == '/' or page.url == '/ojs/'
            next
					end

					@exclude = false;
					@exclude_file_types.each do |file_type|
						if File.extname(page.name) == file_type
							@exclude = true
							break
						end
					end
					if @exclude
						next
					end

					@data = page.to_liquid

					if !@data.key?('title')
						@title = @data['content'].lines.first.gsub! '#', ''
						if @title
							@data['title'] = @title.strip
						else
							@data['title'] = ''
						end
					end

					@exclude_titles.each do |title|
						if @data['title'] == title
							@exclude = true
							break
						end
					end
					if @exclude
						next
					end

					items << {
						'id' => index,
						'title' => @data['title'],
						'content' => @data['content'],
						'url' => @data['url']
					}
				end

				Jekyll.logger.info "PkpSearch:", 'Writing search.json...'

				filepath = File.join(site.dest, 'search.json');
				File.open(filepath, "w") { |f| f.write(items.to_json)}

				site.static_files << SearchIndexFile.new(site, site.dest, "/", 'search.json')
      end

    end
  end
end

module Jekyll
  module PkpSearch
    class SearchIndexFile < Jekyll::StaticFile
      # Override write as the index.json index file has already been created
      def write(dest)
        true
      end
    end
  end
end
