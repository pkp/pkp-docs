---
title: Getting Found, Staying Found - Ensuring Continuity
---

# Staying Found: Ensuring Continuity

Once your journal has developed a loyal readership, and established itself with a variety of indexes, databases, and other venues, you will need to be able to maintain these relationships. One of the fastest ways to undermine confidence in your publication is if your content becomes regularly unavailable, or worse, disappears completely. For print journals, reliable access is helped by the production of many physical copies of the journal, and their widespread distribution. If one copy is lost or misplaced, it can easily be replaced by a copy of another.For online content, there is the danger of there being only a single copy, which is shared electronically among all readers over the internet. If that single copy is lost, it is irreplaceable, and the results can be catastrophic for your project.

In this section we delve into some specific and more technical aspects of running the OJS software. If you’re running your own instance of OJS some of this may be more applicable to technical staff that may be running your OJS software. Having someone working with you who is knowledgeable about web security and systems administration can be of significant benefit to your journal. If possible, it is important to seek out someone with the necessary skills to be able to assist you with these matters.  The section that follows provides a brief overview of different considerations that you should take for hosting and ensuring the ongoing availability of your online journal. For specific, aspects of running OJS in particular, you may wish to consult some of our other [documentation](https://docs.pkp.sfu.ca), and, in particular the [Administrator's guide](https://docs.pkp.sfu.ca/admin-guide/) for more of an in-depth guide.

## Server Environment

> Contributed by Roger Gillis

One of the key elements of hosting an online journals, is determining, where it will live, which typically means a web server. Ensuring that your journal is hosted on a secure and reliable server is the first step to providing uninterrupted access to your content. A server is simply a computer that can not only view files on the internet, but can also let others (securely!) see its own files. Every website that you visit is stored (or "hosted") on a computer acting as a web server. Some institutions have their own web servers that you may be able to use, or you may need to investigate the services of a commercial provider. Choosing a high quality web server host is an important step in setting up an online journal, so you will need to ask some hard questions. There are three main criteria to look for in a hosting environment: reliability, speed, technical requirements, space, and support.

First, you’ll want to know if the service is reliable. You will have people wanting to visit your site frequently and at different times of the day. A good host should be able to guarantee 99 - 99.5% uptime, 24 hours a day, 7 days a week. Secondly, does the service have a powerful connection to the backbone of the internet? Ideally, they should be able to provide consistent connectivity. Thirdly, if you’re hosting OJS for your journal, you’ll need to ensure your host can meet the minimum technical requirements for hosting OJS, which are listed in the [Admin Guide](https://docs.pkp.sfu.ca/admin-guide/en/managing-the-environment#system-requirements-and-installation).

Next, you’ll want to consider if your hosting provider will provide sufficient space for hosting your journal. It may not seem important now, but with years of accumulated PDF documents, or possibly even audio or video files, your storage needs may grow. More is better. Find out the cost of increasing your storage space as your needs expand.

And, lastly, you’ll want to consider support, in terms of what type of assistance is provided with your hosting arrangement. Some key considerations when considering prospective hosts for your journal include familiarity with OJS, ability to provide upgrades, and type of support provide (e.g. phone, remote desktop support, email, etc.). There are several hosting arrangements to consider for OJS: self-hosted/hosted solution, shared hosting vs. dedicated server hosting, and library-based hosting.

### Self-hosted vs. Hosted Solution

Like many open source platforms, OJS is undergoing continuous development with new features being added and bugs being fixed. As a part of this, it is necessary to keep on top of upgrading the version of OJS that runs on your server as new versions of OJS get released. Another consideration to take into account is whether or not you have resources and/or expertise at your disposal to be able to carry out upgrades as the software grows. If you are looking to an outside host to host your publication/journal such as a university library, [PKP Publishing Services](https://pkpservices.sfu.ca/), or a commercial host, you should inquire if this is something that they assist with, how often they may upgrade your OJS installation, and if there are any costs involved.

### Shared Hosting vs. Dedicated Server Hosting

If you are considering hosting OJS on your own, there are several factors to take into consideration. One key consideration is what type of hosting you are seeking out. Many commercial webhosting operations now offer a variety of webhosting options, and it's important to know what the pros and cons of each are and how they might impact you hosting OJS on your own.

### Shared Hosting

In this arrangement, the server that hosts your website will also be hosting other people’s websites on the same server. This is often the most affordable solution, and while it may be fine if your site is low maintenance and does not use a lot of resources, it may not be suited to high traffic sites or sites where a significant number of resources are required. Access to certain features on the server may be limited in some instances.

### Virtual Private Server / Virtual Dedicated Server Hosting Services

In this hosting arrangement, a virtualized server devoted to your needs is provided. This is a “middle-of-the road” option and can be affordable, but is usually not as cheap as shared hosting. In this hosting environment often different resources can be scaled up and applied should you need them (usually at an additional cost). For example, if your site experiences a rise in traffic, you may be able to pay more to dedicate additional bandwidth for a period of time or on an ongoing basis. Some popular commercial virtual private server hosting include: [Digital Ocean](https://www.digitalocean.com/), [Amazon Web Services](https://aws.amazon.com), and [Linode](https://www.linode.com/), to name a few.

### Dedicated Server

In this situation, an entire piece of physical hardware (i.e. a server) may be dedicated to your use. This is the most expensive of these three options and idea for very high traffic websites or larger operations that might have more complex needs.

### Backups

A key consideration for any hosting service that you might want to consider is how and at what frequency is the application and the data backed up. Does the service provide daily backups? Weekly backups? Are these backups stored in remote geographical locations (e.g. if something were to happen in one location where your data was located, is there a copy of the data in another location?).  If something happens to your site, you will want to be able to restore it back to where it was before the problem occurred. Is the database also backed up? If you are running OJS or any other database-driven applications, you will want to make sure the database can also be restored in the event of a system failure.

Some additional considerations to take into account include: does the provider have a system in place for their own system failures, such as power loss or server crashes? Will they be able to have your site back online fast after such a crisis?

### Support

Technical support is another important factor to consider. If you need assistance, will there be someone available in a timely manner with the required expertise? Ask some technical questions, and see how long it takes to receive a response. If they can't answer your questions quickly now, will you be able to rely on them when you are facing a system crisis?

Finally, for any hosting services, investigate their current list of customers, and contact some of them to ensure they are satisfied with the service they are receiving. This may all seem like a great deal of effort, but mistakes here can be costly and time consuming in the future. Frequent downtime (or permanently lost content!) undermines the relationship that you are establishing with your collaborators.

### Library-based hosting

A number of university libraries host OJS for journals that are affiliated with their university. Consult with your affiliated library to see if they offer OJS hosting A list of these universities (especially in North America) can be found in the [Library Publishing Coalition Directory](https://librarypublishing.org/directory/). If you are affiliated with a university who offers OJS hosting, it is an option you may wish to consider.

### Public Knowledge Project Publishing Services \(PKP-PS\)

The Public Knowledge Project provides hosting services for journals as part of the [Public Knowledge Project Publishing Services (PKP-PS)](https://pkpservices.sfu.ca/). For an annual fee, PKP-PS installs and maintains OJS on commercial grade servers, provides encryption, as well as daily onsite, and weekly off-site backups. Also included as a part of its hosting packages are free upgrades to ensure that OJS installations keep up with the latest upgrades for the software. As a part of its services, journals hosting with PKP-PS retain full control over their publication and also can enact appropriate policies for their publications \(e.g., copyright, access, peer-review, conflict of interest, etc.\) All data is also retained by the client. As a part of PKP-PS’s services, there are several tiers of service with different features and additional features, which are outlined on the PKP-PS website.

## Digital Preservation

> Section contributed by Emily Zheng, Roger Gillis, and Kevin Stranack

The goal of digital preservation is that information remains accessible to users over a long period of time. This is much longer than the lifetime of storage media, hardware, software, and the formats in which the information is encoded.

The section that follows is not a comprehensive overview of digital preservation, and is not intended to replace an overall organizational digital preservation plan or strategy, but offers some advice on digital preservation as it relates to online journals and those hosted on OJS in particular. It also outlines some preservation service provider options.

### Why Preserve?

Digital preservation is a key part of sustaining and future-proofing your journal, and ensuring it becomes part of the permanent scholarly record. In the event that a journal stops publishing and goes offline, the following options can offer ways to have continued long-term access to published content.

Preservation is also a requirement for initiatives such as the [Directory of Open Access Journals (DOAJ)’s](https://doaj.org/) Seal status, and [Plan S](https://www.coalition-s.org/addendum-to-the-coalition-s-guidance-on-the-implementation-of-plan-s/principles-and-implementation/). It may also be a requirement to apply for certain grants through national funding agencies.

### Have a Digital Preservation or Archiving Policy

Be sure to document and make your journal’s policy on digital preservation available. In OJS, this can be done as part of the setup process, and the policy will then appear on your journal’s “About” page.

The following policy from _Current Oncology_ is an example of a clear and concise archiving policy:

>“Following publication in Current Oncology, the full text of each article is available immediately and archived in PubMed Central (PMC), the U.S. National Library of Medicine's digital archive of biomedical and life sciences journal literature. This journal utilizes the LOCKSS system to create a distributed archiving system among participating libraries and permits those libraries to create permanent archives of the journal for purposes of preservation and restoration.”

Source: [Archiving Policy. Current Oncology Journal](https://www.current-oncology.com/index.php/oncology/about)

### Global LOCKSS Network

Once your journal is set up on a secure and reliable server, you will still want to make sure you have an emergency preservation strategy in place. Unlike print publishing, where multiple copies are produced, distributed, and maintained by libraries, electronic journals often produce only a single electronic file (or set of files), which are accessed by multiple readers over the Internet. If this single file is lost, due to a system failure or human error, and no reliable backup exists, all of your work, and the work of your collaborators could simply disappear – permanently. To help online journal publishers overcome this potential disaster, Stanford University developed the open source LOCKSS project (Lots of Copies Keeps Stuff Safe). 

The Global LOCKSS network consists of geographically distributed servers maintained by libraries, the traditional experts in information storage and preservation. LOCKSS ensures that multiple copies of your content exist on a network of servers, that all of your latest content is collected and securely stored by a specialized web crawler (similar to those used by search engines), is continually examined for lost or damaged content, and that necessary repairs are made. Further details on how this system works is available on the [LOCKSS website](https://www.lockss.org/).

### Choosing a Preservation Service
 
For journal editors, digital preservation can be difficult to navigate. A few factors can help you determine the best option for your journal.

If your journal is associated with an institution, library, or publisher, your journal may already be eligible via an institutional partnership. And if your journal is disseminated through a service such as Scholars Portal or Érudit, your journal may already be preserved through one of them. 

If your journal is using OJS, you should consider [enabling the PKP Preservation Network (PKP PN) plugin](/pkp-pn/en/#installation--configuration). This will fulfill the archiving component from DOAJ once the Keeper's Registry (explained below) shows that archiving in the PKP PN is active and ongoing. 

National regulation may require you to deposit published content into a central library. If you’re publishing in the UK, for example, you need to ensure a copy of your publication is sent to the British Library and other legal deposit libraries. An arrangement between the British Library and [Portico](https://www.portico.org/our-work/services/) may help . 

If any of the above applies to your journal, consider reaching out to a digital preservation specialist, librarian, or publisher contact. You may also be eligible for multiple archiving options, and you should absolutely consider joining more than one. Good practice recommends that content is preserved in three separate services to be considered safe.

Below are some service providers that may be helpful to you.

#### Public Knowledge Project Preservation Network (PKP PN)

The [Public Knowledge Project Preservation Network (PKP PN)](https://pkp.sfu.ca/pkp-pn/#joining) offers a free-of-charge, low-barrier preservation through the global LOCKSS Network for OJS journals. 

The PKP PN deposits content using the LOCKSS Program, which offers decentralized and distributed preservation. This is a free preservation option for journals using OJS 3.1.2 and newer, which are not part of any other digital preservation service (such as CLOCKSS or Portico).

The PKP PN functions as a “dark” archive, meaning that end-users will not have access to the preserved content until after a “trigger event”, such as cessation of publication. After a trigger event, PKP staff will import the preserved content into one or more OJS instances hosted by PKP member institutions. Once loaded into these host OJS instances, the content will be publicly accessible.

Using the PKP PN only requires installing the PKP PN plugin in your OJS journal and agreeing to the terms of service. For information about the PKP PN, visit the [PKP Preservation Network Documentation](/pkp-pn/en/).

#### CLOCKSS 

[CLOCKSS](https://clockss.org/) is a community governed and supported digital preservation archive for scholarly content. It contains more than 46 million journal articles, 260,000 books, plus an array of newer content types and essential metadata such as DOIs.

Its preservation approach is designed to be resilient to threats from potential technological, economic, environmental, and political failures and provides a safe environment for the scholarly record. This network is built with proven LOCKSS open source technology and is a dark archive, meaning that content is not accessible to users unless it would otherwise disappear from the web. In this case it is made available open access under a Creative Commons License to ensure it remains available and openly accessible to
everyone. Mirror preservation nodes at 12 major academic institutions around the world guarantee long-term preservation and access. 

A collaboration between the world’s leading research libraries and academic publishers, CLOCKSS is a financially secure, independent non-profit 501(c)(3) organization, governed by its Board of libraries and publishers.

There is an annual fee for using CLOCKSS, which can be paid by a library or an individual publisher. For further information, refer to [joining CLOCKSS](https://clockss.org/join-clockss/).

#### Internet Archive

[Internet Archive (IA)](https://archive.org/) is a non-profit digital library founded in 1996 with the mission to provide “Universal access to all knowledge.” Internet Archive hosts the [Wayback Machine](https://archive.org/web/), a large web archive providing stable access to captured “snapshots” of web pages from past points in time and the main archive.org site which is a digital library and archiving of millions of books, audio-video, television, software, and other primary sources. 

Internet Archive provides a variety of preservation services, including digitization, web archiving, digital preservation, and basic repository services, at various cost levels from free to one-time, per-terabyte “forever” costs. These costs vary depending on service guarantees. For OJS journals, any of these services may be applicable, including the following:

* **Archive files in archive.org:** Users can manually or programmatically upload archival copies of their content into a collection of their own within archive.org. The service is free and the content will be publicly accessible. See the [IA Help Center](https://help.archive.org/hc/en-us) to learn more.
* **Archive websites in the Wayback Machine:** Users can use “Save Page Now” to add websites or web content to the [Wayback Machine](https://help.archive.org/hc/en-us/articles/360001513491-Save-Pages-in-the-Wayback-Machine). The service is free and material is publicly accessible via the Wayback Machine. Users can also search [IA Scholar’s](https://scholar.archive.org/) metadata catalog [Fatcat](https://fatcat.wiki/) for specific papers and, if no copy has been archived, use the “Save Paper Now” feature to add the online paper to the Wayback Machine and to the IA Scholar discovery service.
* **Use the paid web archiving service, Archive-It:** Archive-It is a full-featured online service, managed by users, for building and managing ongoing web archive collections. Collections in Archive-It can be public or private. Costs are based on the amount of data archived and there are [free, sponsored options](https://archive-it.org/blog/archive-it-sponsored/) for qualifying organizations. See the [Learn More page](https://archive-it.org/blog/learn-more/) or the [Archive-It Help Center](https://support.archive-it.org/hc/en-us) for more information.
* **Use the paid digital preservation service:** [IA’s digital preservation service](https://archive-it.org/blog/files/2021/03/Archive-It_digipres.pdf) is for highly customized digital preservation solutions. Costs are based on the amount of data deposited and collections can be public (via archive.org) or private.

The paid services offered by IA guarantee perpetual preservation and access of deposited content. IA typically maintains a minimum of 4 archival copies, often more, in at least two distinct geographical data centers owned and operated by IA. OJS journals should evaluate various archiving services to understand the pros and cons of each to determine the solution that best serves their needs. Journals can email webservices@archive.org or ait@archive.org with any questions. 

### Verifying Preservation Status

The [Keeper’s Registry](https://keepers.issn.org/) collects data from a [number of participating archiving agencies](https://keepers.issn.org/keepers), including all those mentioned above. 

To determine if your journal has been archived by one or more of the participating archiving agencies, search for the journal by Title or ISSN at the [ISSN Portal](https://portal.issn.org/). Visit the tab “Archival Status” to view the details and extent of coverage.

Services such as the DOAJ may check the Keeper's Registry to confirm a journal’s archiving arrangements.

**Further Reading:**

* [Digital Preservation initiatives](https://en.wikipedia.org/wiki/List_of_digital_preservation_initiatives)
* [Project JASPER](https://doaj.org/preservation/) is a partnership between DOAJ, PKP, CLOCKSS, Internet Archive, and the Keepers Registry to preserve open access journals
* The [DOAJ Application Guide](/doaj/) explains the DOAJ application process and OJS
