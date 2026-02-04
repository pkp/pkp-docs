---
title: OJS and PKP Software as a multimodal platform - Multimodal Publishing
showPageTOC: true
---

# OJS and PKP Software as a multimodal platform

When it comes to multimodal publishing, OJS (and other PKP software) attempts to adhere to platform requirements that lend themselves toward preservation and sustainability over the long term. PKP's software is in an ongoing continuous improvement process with new versions of the software being released, bugs being fixed, and new features being added. PKP strives to use appropriate standards relevant to the publishing community (e.g. standardized metadata, exports to common formats, accessibility standards). A good overview for some of the broader best practices for multimodal scholarship (even beyond OJS) can be found in more detail in the guidelines for preserving [new forms of scholarship](https://preservingnewforms.dlib.nyu.edu/guidelines).

## Planning and Policy

Before implementing multimodal publishing, it's important to understand the impact that your choices may have on journal content in the future. For example, what happens if you rely on an external hosting service to save time and resources and that service is shut down, or your content is removed? If you are going to self-host content, how will you set the scope for the types of content you can manage? Planning for such contingencies can go a long way in helping to make your multimodal content available for the long term.

While it may be tempting to embrace any and all multimedia content, making careful decisions about how it is hosted will increase sustainability and reduce potential frustration.

Consideration should be given to the preservation of both the publication resources themselves and the core intellectual components that are contained within multimodal publications. While a detailed exploration of digital preservation as it relates to scholarly content is outside the scope of this guide, resources from the [Digital Preservation Coalition](https://dpconline.org/handbook/content-specific-preservation/e-journals), Library Publishing Coalition's [digital preservation policy template](https://docs.google.com/document/d/1H-NzUry09o5zNSJld-1vZBnu2or5dJJd93_FVZan6AA/edit?tab=t.0#heading=h.us9k4a26wiq6), and PKP's [Getting Found, Staying Found guide](https://docs.pkp.sfu.ca/getting-found-staying-found/en/getting-found-staying-found) may provide some guidance on preservation-related matters.

## Third Party Hosting

Using external hosting can be a great way to mitigate the technical requirements like storage space, streaming capabilities, and other needs, necessary to display multimodal content, but may also present potential complications.

For example, YouTube is a popular platform for hosting videos, however, it may not be appropriate to allow ads on videos presented in your journal, which is often a feature of YouTube videos being presented to viewers. YouTube also reserves the right to terminate channels at any time due to copyright strikes, suspected hacking, or other reasons, which may make content unavailable in the future. It might be more appropriate to ensure that you have backups of any video content that is being featured as part of articles, and that is being hosted on Youtube, or other third-party hosted streaming services. Consider also having documentation or a plan related to where content could alternatively be hosted, should a third party streaming service not be available.

## Local Hosting

Hosting content locally on a private or institutional server may be a dependable alternative to using third party services. If your journal is affiliated with a post-secondary institution, check to see if the content can be hosted in the institutional repository, which tend to emphasize the preservation and long term availability of material. Multimedia files can also be uploaded directly into OJS using component types (see below). Using a component type set to a Dependent File type means that you can embed the multimedia file (e.g. JPG, MP3, MP4) directly into an HTML galley and have it display in a webpage container.

For example, for embedding videos, and video streaming in particular, it may be feasible to run one's own video streaming service. There are a number of Free/Libre Open Source Software (FLOSS) FLOSS tools for video streaming, that may be able to be used as an alternative to commercial streaming services:

* [Owncast](https://owncast.online/)
* [PeerTube](https://joinpeertube.org/)
* [OpenStreaming    Platform](https://gitlab.com/osp-group/flask-nginx-rtmp-manager)
* [Red5 streamer](https://github.com/Red5/red5-server)
* [LiveGo](https://github.com/gwuhaolin/livego)
* [Restreamer](https://datarhei.com/)

 \
Exploring these individual tools is outside of the scope of this documentation, and this should not be considered an endorsement of these particular tools. Users who rely heavily on video-streaming as part of their content, may wish to consider using these tools in tandem with OJS/PKP software in order to offer effective, more locally controlled video streaming.}
