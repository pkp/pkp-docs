# Staying found: Ensuring Continuity

Once your journal has developed a loyal readership, and established itself with a variety of indexes, databases, and other venues, you will need to be able to maintain these relationships. One of the fastest ways to undermine confidence in your publication is if your content becomes regularly unavailable, or worse, disappears completely. For print journals, reliable access is helped by the production of many physical copies of the journal, and their widespread distribution. If one copy is lost or misplaced, it can easily be replaced by a copy of another.For online content, there is the danger of there being only a single copy, which is shared electronically among all readers over the internet. If that single copy is lost, it is irreplaceable, and the results can be catastrophic for your project.

In this section we delve into some specific and more technical aspects of running the OJS software. If you’re running your own instance of OJS some of this may be more applicable to technical staff that may be running your OJS software. Having someone working with you who is knowledgeable about web security and systems administration can be of significant benefit to your journal. If possible, it is important to seek out someone with the necessary skills to be able to assist you with these matters.  The section that follows provides a brief overview of different considerations that you should take for hosting and ensuring the ongoing availability of your online journal. For specific, aspects of running OJS in particular, you may wish to consult some of our other [documentation](https://docs.pkp.sfu.ca), and, in particular the [Administrator's guide](https://docs.pkp.sfu.ca/admin-guide/) for more of an in-depth guide.

## Server environment

> Contributed by Roger Gillis

One of the key elements of hosting an online journals, is determining, where it will live, which typically means a web server. Ensuring that your journal is hosted on a secure and reliable server is the first step to providing uninterrupted access to your content. A server is simply a computer that can not only view files on the internet, but can also let others (securely!) see its own files. Every website that you visit is stored (or "hosted") on a computer acting as a web server. Some institutions have their own web servers that you may be able to use, or you may need to investigate the services of a commercial provider. Choosing a high quality web server host is an important step in setting up an online journal, so you will need to ask some hard questions. There are three main criteria to look for in a hosting environment: reliability, speed, technical requirements, space, and support.

First, you’ll want to know if the service is reliable. You will have people wanting to visit your site frequently and at different times of the day. A good host should be able to guarantee 99 - 99.5% uptime, 24 hours a day, 7 days a week. Secondly, does the service have a powerful connection to the backbone of the internet? Ideally, they should be able to provide consistent connectivity. Thirdly, if you’re hosting OJS for your journal, you’ll need to ensure your host can meet the minimum technical requirements for hosting OJS, which are listed in the [Admin Guide](https://docs.pkp.sfu.ca/admin-guide/en/managing-the-environment#system-requirements-and-installation).

Next, you’ll want to consider if your hosting provider will provide sufficient space for hosting your journal. It may not seem important now, but with years of accumulated PDF documents, or possibly even audio or video files, your storage needs may grow. More is better. Find out the cost of increasing your storage space as your needs expand.

And, lastly, you’ll want to consider support, in terms of what type of assistance is provided with your hosting arrangement. Some key considerations when considering prospective hosts for your journal include familiarity with OJS, ability to provide upgrades, and type of support provide (e.g. phone, remote desktop support, email, etc.). There are several hosting arrangements to consider for OJS: self-hosted/hosted solution, shared hosting vs. dedicated server hosting, and library-based hosting.

### Self-hosted vs. Hosted Solution

Like many open source platforms, OJS is undergoing continuous development with new features being added and bugs being fixed. As a part of this, it is necessary to keep on top of upgrading the version of OJS that runs on your server as new versions of OJS get released. Another consideration to take into account is whether or not you have resources and/or expertise at your disposal to be able to carry out upgrades as the software grows. If you are looking to an outside host to host your publication/journal such as a university library, [PKP Publishing Services](https://pkpservices.sfu.ca/), or a commercial host, you should inquire if this is something that they assist with, how often they may upgrade your OJS installation, and if there are any costs involved.

### Shared hosting vs. Dedicated Server Hosting

If you are considering hosting OJS on your own, there are several factors to take into consideration. One key consideration is what type of hosting you are seeking out. Many commercial webhosting operations now offer a variety of webhosting options, and it's important to know what the pros and cons of each are and how they might impact you hosting OJS on your own.

### Shared Hosting

In this arrangement, the server that hosts your website will also be hosting other people’s websites on the same server. This is often the most affordable solution, and while it may be fine if your site is low maintenance and does not use a lot of resources, it may not be suited to high traffic sites or sites where a significant number of resources are required. Access to certain features on the server may be limited in some instances.

### Virtual Private server / Virtual Dedicated Server hosting services

In this hosting arrangement, a virtualized server devoted to your needs is provided. This is a “middle-of-the road” option and can be affordable, but is usually not as cheap as shared hosting. In this hosting environment often different resources can be scaled up and applied should you need them (usually at an additional cost). For example, if your site experiences a rise in traffic, you may be able to pay more to dedicate additional bandwidth for a period of time or on an ongoing basis. Some popular commercial virtual private server hosting include: [Digital Ocean](https://www.digitalocean.com/), [Amazon Web Services](https://aws.amazon.com), and [Linode](https://www.linode.com/), to name a few.

### Dedicated server

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

Ensuring the longevity of your publication involves more than just having appropriate hosting, backups and securing the OJS application. Taking measures to ensure appropriate digital preservation of your journal content is an important step for ensuring the longevity of your journal. The section that follows is not a comprehensive overview of the entirely of digital preservation, and is not intended to replace an overall organizational digital preservation plan or strategy, but instead offers some advice on digital preservation as it relates to online journals and OJS in particular.

### Lots of Copies Keep Stuff Safe (LOCKSS)

> Section contributed by Kevin Stranack

Once your journal is set up on a secure and reliable server, you will still want to make sure you have an emergency preservation strategy in place. Unlike print publishing, where multiple copies are produced, distributed, and maintained by libraries, electronic journals often produce only a single electronic file (or set of files), which are accessed by multiple readers over the Internet. If this single file is lost, due to a system failure or human error, and no reliable backup exists, all of your work, and the work of your collaborators could simply disappear – permanently. To help online journal publishers overcome this potential disaster, Stanford University developed the open source LOCKSS project (Lots of Copies Keeps Stuff Safe). LOCKSS consists of geographically distributed servers maintained by libraries, the traditional experts in information storage and preservation. LOCKSS ensures that multiple copies of your content exists on a network of servers, that all of your latest content is collected and securely stored by a specialized web crawler (similar to those used by search engines), is continually examined for lost or damaged content, and makes any necessary repairs. Further details on how this system works is available on the [LOCKSS website](https://www.lockss.org/).

## Public Knowledge Project Preservation Network (PKP PN)

> Section contributed by Bronwen Sprout

In addition to backing up your journal content, you will also want to plan for long term preservation in the event that your journal ceases publication and your host/publisher no longer provides access to your content. PKP has developed a low barrier preservation option to digitally preserve OJS journals in the form of the [PKP Preservation Network (PKP PN)](https://pkp.sfu.ca/pkp-pn/). The PKP PN provides free preservation services for any OJS journal that meets a few minimum requirements. The PKP PN is a dark archive, meaning that end users will not have access to the preserved content until after a “trigger event” (notification by the journal manager or cessation of deposits into the PN after a period of inactivity). After a trigger event, PKP staff will approve the importing of the preserved content into one or more OJS instances hosted by PKP member institutions. Once loaded into these host OJS instances, the content will be openly accessible.

The PKP PN uses the LOCKSS (Lots of Copies Keep Stuff Safe) program, which offers decentralized and distributed preservation, seamless perpetual access, and preservation of the authentic original version of the content. This open source software is developed at Stanford University Library and enables libraries to preserve selected web journals by regularly polling registered journal websites for newly published content and archiving it. Each archive is continually validated against other library caches, and if content is found to be corrupted or lost, the other caches or the journal are used to restore it.

There are a number of existing ejournal preservation programs in addition to the PKP PN, including the [Global LOCKSS Network](https://www.lockss.org/community/networks/), [CLOCKSS](https://clockss.org/), [Portico](https://www.portico.org/), and various national libraries. Many of these have an associated evaluation component and/or a fee for publisher participation. For example, the Global LOCKSS Network primarily preserves content from larger publishers and vendors. Private LOCKSS Networks are often country-based and preserve small numbers of OJS journals hosted by member libraries.

Because OJS supports the LOCKSS system, it’s very easy to enable the PKP PN plugin, as well as other “flavours” of LOCKSS, from within the OJS interface. Depending on your journal’s arrangements, these alternatives to the PKP PN may or may not be relevant.

## DOAJ and Digital Preservation/Archiving Policy

> Section contributed by Roger Gillis

Having a clear digital preservation and archiving strategy and making this explicit as part of a policy is a key component of the [DOAJ application process](/doaj/) policy and one of the criteria for being awarded the DOAJ Seal. If your journal is using OJS, you should consider enabling the PKP Preservation Network (PKP PN) plugin as noted in the previous section, which will fulfill the archiving component from DOAJ. Also, be sure to document and make your journal’s policy on archiving available. In OJS, this can be done as part of the setup process, and the policy will then appear on your journal’s “About” page.

The following policy from _Current Oncology_ is an example of a clear and concise archiving policy:
> “Following publication in Current Oncology, the full text of each article is available immediately and archived in PubMed Central (PMC), the U.S. National Library of Medicine's digital archive of biomedical and life sciences journal literature. This journal utilizes the LOCKSS system to create a distributed archiving system among participating libraries and permits those libraries to create permanent archives of the journal for purposes of preservation and restoration.”

Source: [Archiving Policy. Current Oncology Journal](https://www.current-oncology.com/index.php/oncology/about)

DOAJ checks the Keepers Registry to confirm that a journal’s archiving arrangements are as stated in its application. The PKP PN provides data about its holdings to the Keepers Registry so your journal will appear in the registry once it has been archived.

**Further Reading:**

[Digital Preservation initiatives](https://en.wikipedia.org/wiki/List_of_digital_preservation_initiatives)

For more information on the DOAJ application process, please see [the DOAJ Application Guide](/doaj/).
