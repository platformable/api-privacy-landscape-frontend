export const categories = [
  "Data Lifecycle and Data Governance",
  "Privacy Workflow and Management",
  "Security for Privacy",
  "Data intermediaries",
  "Consumer Facing Data Privacy Solutions",
];

export const subcategories = [
  "DevRegOps",
  "Privacy Engineering Tools",
  "Data Vaults & Sharing",
  "Identity & Consent Manager",
  "Data Subject Access Requests (DSARs)",
  "Website and Mobile Tracker Scanning",
  "Data Discovery, Classification and Mapping",
  "Data Retention and Deletion",
  "Privacy Information Maturity",
  "Deidentification, Pseudonymization, Anonymization",
  "Incident Response",
  "Activity Monitoring",
  "Assessment Manager",
  "Other Security Tools",
  "Data Institutions",
  "Centralised Consent Platforms",
  "Consumer Facing Data Privacy Solutions",
];

export const categoriesWithSubcategories = [
  {
    "name": "DevRegOps & Privacy Engineering Tools",
    "subcategories": [  
      "DevRegOps",
      "Privacy Engineering Tools",],
  },
  {
    "name":"Data Lifecycle and Data Governance",
    "subcategories":[  
      "Data Vaults & Sharing",
      "Identity & Consent Manager",
      "Data Subject Access Requests (DSARs)",
      "Website and Mobile Tracker Scanning",
      "Data Discovery, Classification and Mapping",
      "Data Retention and Deletion",
  ]
  },
  {
    "name":"Privacy Workflow and Management",
    "subcategories":[
      "Privacy Information Maturity",
      "Deidentification, Pseudonymization, Anonymization",
    ,]
  },
  {
    "name":"Security for Privacy",
    "subcategories":[ 
      "Incident Response",
      "Activity Monitoring",
      "Assessment Manager",
      "Other Security Tools"
    ]
  },
  {
    "name":"Data intermediaries",
    "subcategories":[ 
      "Data Institutions",
"Centralised Consent Platforms",
    ]
  },
  {
    "name":"Consumer Facing Data Privacy Solutions",
    "subcategories":[  
    "Consumer Facing Data Privacy Solutions"]
  },



]

export const subcategoriesDescriptions = {
  /* "Access and Identity Management":[{"description":"Ensures the correct people and job roles in an organization can access the necessary tools needed to do their jobs"}],
  "API Analytics/Monitoring":[{"description":"Observation of systems and examining data to draw conclusions about their information"}],
   "API Design/Documentation Platforms":[{"description":"Platforms aiding in the creation of standards enabling developers to create uniform software applications"}],
   "API Developer Portals":[{"description":"The interface containing a developer's API documentation and digital tools"}],
   "API Management/API Gateway":[{"description":"Management is the process of analyzing, controlling, and distributing APIs. The gateway sits between back-end services and the client, accepting all API calls "}],
   "API Consulting":[{"description":"Advisory services educating clients on how best to use API-focused information technology to achieve their business objectives"}],
   "API Testing":[{"description":"Software testing to ensure APIs meet functionality, reliability, performance, and security requirements"}],
   "API Security":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
   "Streaming/Event Architecture":[{"description":"Integration of components to read data in real-time to deliver up-to-date results"}],
   "IoT Platforms/Networks/Devices":[{"description":"Integrates with technology allowing for the management, provision, and automation of connected devices within the Internet of Things"}],
   "API Protocols":[{"description":"API protocols define the standard request response layer and the common transport to be used."}],
   "API Standards":[{"description":"A general agreement of requirements followed by members of a specific industry"}],
   "Accounting":[{"description":"Integrating the measurement, processing, and communication of financial information and non-financial information on entities such as businesses and corporations"}],
   "AI/ML":[{"description":"Artificial intelligence API. Integrates computer systems performing tasks usually performed by a human"}],
   "Audio/Visual":[{"description":"A digital recording"}],
   "Legal/Regulatory":[{"description":"API products, services, and tolling that integrate legal and business decisions into API architectures and workflows "}],
   "Time/Calendar":[{"description":"Products and tools that enable time and date integration via API, and that enable APIs for calendar integrations   "}],
   "Data governance/Data management":[{"description":"Cloud-based software working with data, such as analyzing data with business intelligence or managing data in data warehouse"}],
   "E-commerce":[{"description":"Integration allowing the buying and selling of goods via the internet"}],
   "Data":[{"description":"API providers that enable data to be sold as a product "}],
   "Email/Messaging/Communications Platforms as a Service":[{"description":"Integrates Communications Platforms as a Service, cloud-based model to add video, voice, and messaging to existing business software via APIs "}],
   "Forms":[{"description":"Interactive web page allowing for user input"}],
   "Identity verification/KYC":[{"description":"Know Your Client integration allowing for businesses to perform due diligence within a business relationship "}],
   "Human Resources":[{"description":"Integrates platforms focused on the people who comprise a workforce, often overseeing employment and labor laws"}],
   "Human-as-a-service":[{"description":"Integrates 'gig economy' services where people perform tasks given to them by an online platform"}],
   "Payments":[{"description":"Integrating an API allowing e-commerce businesses to manage their payments"}],
   "Search":[{"description":"The integration of search capabilities for websites and applications"}],
   "API Deployment/Back-end Building":[{"description":"A set of specifications defining the API coupled with tools to prepare it for release"}],
   "Banking/Finance/Insurance Backends":[{"description":"A model allowing the direct connection of digital banks and third-parties to banking systems via API"}],
   "Blockchain":[{"description":"Integrates a list of records linked together with cryptography (P2P data storage)"}],
   "Headless CMS":[{"description":"A back-end only content management system integration primarily used as a content repository"}],
   "Infrastructure/Cloud/Serverless APIs":[{"description":"Integrates a cloud-computing model to dynamically manage the allocation of servers"}],
   "Mobile Backend as a Service":[{"description":"Mobile backend as a service, cloud-computing architecture providing mobile apps with access to servers, storage, databases and other resources"}],
   "API Aggregators (General)":[{"description":"An API providing a single point of implementation layered on top of multiple APIs"}],
    "Automation/Orchestration":[{"description":"Integrates automated tasks meant to execute a larger workflow by streamlining repetitive, frequent processes "}],
    "Database-as-a-service":[{"description":"Software allowing users to set up, scale, and operate databases"}],
    "API Aggregators (Finance)":[{"description":"Tooling and platforms that create an API, or a suite of APIs, as the single point of implementation for multiple source APIs in banking, finance and insurance"}],
    "Cloud Storage":[{"description":"Integrates data storage saved in logical pools known as 'the cloud'"}],
    "Delivery/Transport/Logistics":[{"description":"Shipping functionality integration"}],
    "Healthcare":[{"description":"Medical care given to an individual or community"}],
    "Login":[{"description":"Integration of an API allowing a user to gain access to a computer system via authentication"}],
    "Marketing/Analytics":[{"description":"Study and management of metrics data to determine ROI of marking, such as calls to action, blogs, and channel performance"}],
    "Finance":[{"description":"Products and tooling that enables finance services to be integrated via API"}],
    "Smart Home/Facilities":[{"description":"A home equipped with heating, lighting, and other electronic devices remotely controlled via mobile or computer"}],
    "Media":[{"description":"API-specific news sites, blogs, newsletters, conferences, and related media"}],
    "Associations":[{"description":"Associations and networks that play a specific role in encouraging API adoption or usage"}],
    "OWASP 1":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 2":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 3":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 4":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 5":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 6":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 7":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 8":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 9":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "OWASP 10":[{"description":"Products and services designed to address API security risks and vulnerabilities"}],
    "Vulnerability scanners":[{"description":"Open soyrce projects and other tools to enhance security ops"}], */

    "DevRegOps":[{"description":"Tools that enable privacy regulations and oversight to be embedded into Infrastructure-as-Code approaches"}],
    "Privacy Engineering Tools":[{"description":"Tools that translate privacy rules and requirements into code"}],
    "Data Vaults & Sharing":[{"description":"Data vaults are secure data storage and data sharing systems that allow organizations to interoperate across different systems while minimizing data privacy and security risks"}],
    "Identity & Consent Manager":[{"description":"Notice delivery privacy tech tools inform individuals when their data is being collected or, if notice is required at a later stage of the data lifecycle, when their data is processed for a new purpose or shared with third parties beyond the scope of the original purpose Consent management tools request, store, and enforce individual consent preferences. Identity verification tools are used with authentication solutions to ensure privacy goals"}],
    "Data Subject Access Requests (DSARs)":[{"description":"A Data Subject Access Request (DSAR) is a submission by an individual (data subject) to a business asking to know what personal information of theirs has been collected and stored as well as how it is being used"}],
    "Website and Mobile Tracker Scanning":[{"description":"Web and mobile tracking scanners are tools that give organizations visibility into the trackers on their websites, apps, and other assets"}],
    "Data Discovery, Classification and Mapping":[{"description":"Tools that help businesses discover, classify, label, and map out sensitive data to ensure its proper securement"}],
    "Data Retention and Deletion":[{"description":"Data disposition tools help organizations dispose of personal data, taking into consideration data protection and other regulatory requirements, retention policies, consumer requests, legal holds and legitimate business needs"}],
    "Privacy Information Maturity":[{"description":"Tools that help to assess, improve and manage compliance with constantly evolving data regulations"}],
    "Deidentification, Pseudonymization, Anonymization":[{"description":"De-identification and pseudonymization PETs help render individuals less identifiable, while anonymization PETs render them anonymous. Includes synthetic datasets used for testing and buiulding products without exposing personal data"}],
    "Incident Response":[{"description":"Tools providing aid in the case of cybersecurity threat, including realizing the scope and depth of the issue"}],
    "Activity Monitoring":[{"description":"Activity monitoring tools monitor and track end user behavior on devices, networks, and other company-owned IT resources, implemented to help detect and stop insider threats, whether unintentional or with malicious intent"}],
    "Assessment Manager":[{"description":"Data Access Management is a set of processes and technologies used to control access to application or data"}],
    "Other Security Tools":[{"description":"Tools that specifically secure personal information, including data loss prevention and obfuscation"}],
    "Data Institutions":[{"description":"Data institutions are organisations whose purpose involves stewarding data on behalf of others"}],
    "Centralised Consent Platforms":[{"description":"Centralized consent platforms aggregate consumer consent preferences"}],
    "Consumer Facing Data Privacy Solutions":[{"description":"Consumer facing data privacy solutions privacy tech products including data wallets, DSAR agents, anti-trackers, online pseudonyms, and privacy-first online services"}],
  }


  