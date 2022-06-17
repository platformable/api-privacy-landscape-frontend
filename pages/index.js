import React, { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import HomepageSubcategory from "../components/HomepageSubcategory";
import Modal from '../components/Modal'
import TopBarProgress from "react-topbar-progress-indicator";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";




export default function Homepage({ data }) {




  const router = useRouter();
  const [loading,setLoading]=useState(false)
  const [company, setCompany] = useContext(CompanyContext);


  const lastUpdate = new Date


  const handleLoading = ()=>{
    setLoading(!loading)
  }

  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.name}`);
  };

  


const categories = [
  "DevRegOps & Privacy Engineering Tools",
  "Data Lifecycle and Data Governance",
  "Privacy Workflow and Management",
  "Security for Privacy",
  "Data intermediaries",
  "Consumer Facing Data Privacy Solutions",
  "Data organizations",

];

const subcategories = [
  "DevRegOps",
  "Privacy Engineering Tools",
  "Data Vaults & Sharing",
  "Identity & Consent Manager",
  "Data Subject Access Requests (DSARs)",
  "Website and Mobile Tracker Scanning",
  "Data Discovery, Classification & Mapping",
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

TopBarProgress.config({
barColors: {
"0": "#319ef9",
"1.0": "#319ef9"
},
shadowBlur: 5
});


  const handleForm = (url)=>{

    if(typeof window !== "undefined"){
      window.open(
        url,
        '_blank' 
      );
    }
    
  }

  const getMonth = date => {
    return lastUpdate.toLocaleString("default", {
      month: "long",
    })
  }
  const getDay = date => {
    return lastUpdate.toLocaleString("default", {
      day: "2-digit",
    })
  }

  const getYear = date => {
    return lastUpdate.toLocaleString("default", {
      year: "numeric",
    })
  }

  // Data organizations

  const DataOrganizationsDescription="Organizations with a role to progress data privacy and protection in some way";

   const DataOrganizations = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data organizations")
  );

  console.log("DataOrganizations",DataOrganizations)

  const  DataOrganizationsANDIndependent =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data organizations") &&
      company?.subcategory?.includes("Indepedent data privacy-related organizations") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  DataOrganizationsANDDataProtection =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data organizations") &&
      company?.subcategory?.includes("Data protection authorities") 
  ).sort((a, b) => a.name.localeCompare(b.name))

// DEVS REG OPS

const DevRegOpsPrivacyEngineeringToolsDescription="Tools that enable privacy regulations and oversight to be embedded into, and translate privacy policy into Infrastructure-as-Code"

   const DevRegOpsPrivacyEngineeringTools = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "DevRegOps & Privacy Engineering Tools")
  );

  const  DevRegOpsPrivacyEngineeringToolsANDDevRegOps =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "DevRegOps & Privacy Engineering Tools") &&
      company?.subcategory?.includes("DevRegOps") 
  ).sort((a, b) => a.name.localeCompare(b.name))


  const  DevRegOpsPrivacyEngineeringToolsANDPrivacyEngineeringTools =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "DevRegOps & Privacy Engineering Tools") &&
      company?.subcategory?.includes("Privacy Engineering Tools") 
  ).sort((a, b) => a.name.localeCompare(b.name))



  // Data Lifecycle and Data Governance
  const DataLifecycleAndDataGovernanceDescription="Tools that are used by businesses over the entire data lifecycle and that help them ensure proper handling and processing of data in line with privacy regulations" 
  
  
  const DataLifecycleAndDataGovernance = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("Data Lifecycle and Data Governance"));

     
  const  DataLifecycleandDataGovernanceANDDataVaultsSharing =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data Lifecycle and Data Governance") &&
      company?.subcategory?.includes("Data Vaults & Sharing") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  DataLifecycleandDataGovernanceANDIdentityConsentManager =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data Lifecycle and Data Governance") &&
      company?.subcategory?.includes("Identity & Consent Manager") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  DataLifecycleandDataGovernanceANDDataSubjectAccessRequestsDSARs =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data Lifecycle and Data Governance") &&
      company?.subcategory?.includes("Data Subject Access Requests (DSARs)") 
  ).sort((a, b) => a.name.localeCompare(b.name))


  const  DataLifecycleandDataGovernanceANDWebsiteandMobileTrackerScanning =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data Lifecycle and Data Governance") &&
      company?.subcategory?.includes("Website and Mobile Tracker Scanning") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  DataLifecycleandDataGovernanceANDDataDiscoveryClassificationandMapping =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data Lifecycle and Data Governance") &&
      company?.subcategory?.includes("Data Discovery, Classification & Mapping") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  DataLifecycleandDataGovernanceANDDataRetentionandDeletion =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data Lifecycle and Data Governance") &&
      company?.subcategory?.includes("Data Retention and Deletion") 
  ).sort((a, b) => a.name.localeCompare(b.name))
   


  // Privacy Workflow and Management

  const PrivacyWorkflowandManagemenDescription="Tools that help to assess, improve and manage data in compliance with constantly evolving data regulations including but not limited to deidentification and annonymization"
  const PrivacyWorkflowandManagement= data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Privacy Workflow and Management")
  );

 

  const  PrivacyWorkflowandManagementANDPrivacyInformationMaturity =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Privacy Workflow and Management") &&
      company?.subcategory?.includes("Privacy Information Maturity") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  PrivacyWorkflowandManagementANDDeidentificationPseudonymizationAnonymization =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Privacy Workflow and Management") &&
      company?.subcategory?.includes("Deidentification, Pseudonymization, Anonymization") 
  ).sort((a, b) => a.name.localeCompare(b.name))


    // Security for Privacy

    const SecurityforPrivacyDescription="Security for privacy tools is a category intersecting both cybersecurity and privacy tech"
    const SecurityforPrivacy= data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Security for Privacy")
    );
  

    const  SecurityforPrivacyANDIncidentResponse =  data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Security for Privacy") &&
        company?.subcategory?.includes("Incident Response") 
    ).sort((a, b) => a.name.localeCompare(b.name))

    const  SecurityforPrivacyANDActivityMonitoring =  data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Security for Privacy") &&
        company?.subcategory?.includes("Activity Monitoring") 
    ).sort((a, b) => a.name.localeCompare(b.name))

    const  SecurityforPrivacyANDAssessmentManager =  data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Security for Privacy") &&
        company?.subcategory?.includes("Assessment Manager") 
    ).sort((a, b) => a.name.localeCompare(b.name))

    const  SecurityforPrivacyANDOtherSecurityTools =  data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Security for Privacy") &&
        company?.subcategory?.includes("Other Security Tools") 
    ).sort((a, b) => a.name.localeCompare(b.name))



  // Data intermediaries
  const DataintermediariesDescription="Tools or organizations dealing with or processing data on behalf of another tool or business"

  const Dataintermediaries= data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data intermediaries")
  );

  const  DataintermediariesANDDataInstitutions =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data intermediaries") &&
      company?.subcategory?.includes("Data Institutions") 
  ).sort((a, b) => a.name.localeCompare(b.name))

  const  DataintermediariesANDCentralisedConsentPlatforms =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Data intermediaries") &&
      company?.subcategory?.includes("Centralised Consent Platforms") 
  ).sort((a, b) => a.name.localeCompare(b.name))


    // Consumer Facing Data Privacy Solutions
    const ConsumerFacingDataPrivacySolutionsDescription="Emerging business to customer tech tools that use privacy as code"
    const ConsumerFacingDataPrivacySolutions= data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Consumer Facing Data Privacy Solutions")
    );
  
    const  ConsumerFacingDataPrivacySolutionsANDConsumerFacingDataPrivacySolutions =  data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Consumer Facing Data Privacy Solutions") &&
        company?.subcategory?.includes("Consumer Facing Data Privacy Solutions") 
    ).sort((a, b) => a.name.localeCompare(b.name))
  




/*   const isInitialMount = useRef(true); */

/*   useEffect(() => {
    if (isInitialMount.current) {
      getBusinessANDMessaginApis(data);
      getBusinessANDKYC(data);
      isInitialMount.current = false;
    } else {
    }
  }, []); */

  const [selectedEntity,setSelectedEntity]=useState([])

  const handleEntity = (entity)=>{
    setSelectedEntity(entity)
  }

  const handleLinks = (url) => {
    handleLoading()
    router.push(`/${url}`);
  };

  const totalValues = data.values.filter(items=>items.parentCategorySlug !=="API Standards/Protocols" && items.parentCategorySlug !=="Media/Associations")
 
  

  return (
    <Layout>
      {loading && <TopBarProgress />}
      <div className="">
        <Head>
          <title>Privacy Tech Landscape</title>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
          <meta name="description" content="Privacy Tech Landscape" />
          <meta property="og:url" content="https://privacylandscape.alias.dev/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content="Privacy Tech Landscape" />
          <meta property="og:title" content="Privacy Tech Landscape" />
          <meta property="og:image" content="../privacy_tech_social.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@APIdaysGlobal" />
          <meta name="twitter:title" content="apidays" />
          <meta name="twitter:description" content="apidays" />
          <meta name="twitter:image" content="../privacy_tech_social.png" />
        </Head>

        <main>
          <section className="intro-text py-3">
            <div className="container hero  d-flex justify-content-center  align-items-center">
              {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
              <div className="text-center flex-grow-1">
                <img src="/main-logo.png" alt="" width={120}/>
                <h1 className="text-white text-center py-2 text-white fw-bold">
                Privacy Tech Landscape
                </h1>
                <p className="text-center sm-text text-white">
                  Last Update: {`${getDay()} ${getMonth()} ${getYear()}`}
                </p>
                <h4 className="text-white text-center py-2 text-white">
                A comprehensive view of all privacy technology tools and open source projects
                </h4>
                <button
                  className="btn btn-dark-gray me-1 text-white mb-1"
                  onClick={() =>
                    handleForm("https://airtable.com/shr8wQgbfheqbRKI6")
                  }
                >
                  Add your tool
                </button>
                <button
                  className="btn btn-light-gray  m-0 text-company-color mb-1"
                  onClick={() => handleLinks("companies")}
                >
                  Search
                </button>
                <a
                  className="btn btn-dark-gray me-1 mb-1 text-white"
                  href="../Privacy-Tech-Landscape.png"
                  download="Privacy-Tech-Landscape"
                >
                  Download the map
                </a>
                <button
                  className="btn btn-light-gray   ms-1 mb-1 text-company-color "
                  onClick={() => handleLinks("zoom")}
                >
                  Zoom
                </button>
                {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
                <button className="btn btn-dark-gray ms-1 mb-1 text-white"><a
                  className="text-white"
                  href="https://www.alias.dev/"
                  target="_blank"
                >
                  Find out more
                </a>
                </button>
                {/*      <div className="row">
            <div className="col-md-4"> </div>
              <div className="col-md-4">
              <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2" value={company.inputSearch} onChange={(e)=>setCompany({...company,searchInput:e.target.value})}/>
                <button class="btn btn-dark-gray text-white" type="button" id="button-addon2" onClick={()=>handleSearch(company.searchInput)}>search</button>
              </div>
               {searchResult && <div className="text-center"><span className="text-center sm-text text-white">Company not found</span></div>}
              </div>
              <div className="col-md-4"></div>              
            </div> */}
              </div>

              <div className="mt-5">
                <h3>
                  <span class="badge bg-light text-black shadow d-none d-md-block  mt-5">
                    {totalValues.length}
                  </span>{" "}
                </h3>
                <h3 className="sm-text text-center text-white md-social-share-buttons">
                  Share
                </h3>
                <LinkedinShareButton
                  url="https://privacylandscape.alias.dev/"
                  title="The API Privacy Tech Landscape"
                  source="https://privacylandscape.alias.dev/"
                  summary="The API Privacy Tech Landscape"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton
                  title="Have a look at these privacy technology tools and open source projects:"
                  url="https://privacylandscape.alias.dev/"
                  via="http://alias.dev"
                  hashtags={["api", "landscape","privacy","alias","tech"]}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <EmailShareButton
                  url=""
                  title="The API Privacy Tech Landscape"
                  subject="Have a look at this privacy tech landscape"
                  separator=" "
                  body="A comprehensive view of all privacy technology tools and open source projects by ALIAS (https://privacylandscape.platformable.com/)"
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
              </div>
            </div>
          </section>

          <section className="home-landscape heroBg d-none d-md-block py-1">
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="companyName-tooltip"
            />
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="subcategory-tooltip"
            />
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="category-tooltip"
              place="right"
              className="categoryToolTip"
            />

            {/* <section id="mobile">

<section className="mobile-landscape d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2" data-tip={APILifecyclePlatformsDescription} data-for="category-tooltip">API Lifecycle Platform ({APILifecyclePlatform.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Access and Identity Management"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                handleLoading={handleLoading}
                />
        </div>
        <div className="subcat border-top">
        
                 <HomepageSubcategory 
                subcategoryName="API Management/API Gateway"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Consulting"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Analytics/Monitoring"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Design/Documentation Platforms"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Developer Portals"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Security"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDApiSecurity}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Testing"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDAPITesting}
                />
        </div>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="IoT Platforms/Networks/Devices"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Streaming/Event Architecture"
                handleCompany={handleEntity}
                filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape mt-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Backend Building Tools ({BackendBuildingTools.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Headless CMS"
                handleCompany={handleEntity}
                filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Infrastructure/Cloud/Serverless APIs"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Mobile Backend as a Service"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsANDMobileBackendasaService}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Deployment/Back-end Building"
                handleCompany={handleEntity}
                filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Banking/Finance/Insurance Backends"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Blockchain"
                handleCompany={handleEntity}
                filteredCategory={BackendBuildingToolsANDBlockchain}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape my-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Data"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Data governance/Data management"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Payments"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPayments}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Email/Messaging/Communications Platforms as a Service"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Accounting"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="AI/ML"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="E-commerce"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Identity verification/KYC"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC}
                />
        </div>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Audio/Visual"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Forms"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Human-as-a-service"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Legal/Regulatory"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Search"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Time/Calendar"
                handleCompany={handleEntity}
                filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
                />
        </div>

      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape mt-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Integration Platform <br /> as a Service ({IntegrationPlatformAsAService.length}) </h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="API Aggregators (Finance)"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="API Aggregators (General)"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Automation/Orchestration"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Database-as-a-service"
                handleCompany={handleEntity}
                filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


<section className="mobile-landscape mt-3 d-xs-block d-md-none">
  <div className="container">
    <div className="row">
      <div className="col-md-12 bg-white px-0">
        <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">Vertical API Abstractions ({VerticalAPIAbstractions.length}) </h3>
        <div className="subcat">
        <HomepageSubcategory 
                subcategoryName="Cloud Storage"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Delivery/Transport/Logistics"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Finance"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDFinance}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Healthcare"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Login"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDLogin}
                />
        </div>
        <div className="subcat border-top">
      
                   <HomepageSubcategory 
                subcategoryName="Marketing/Analytics"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                />
        </div>
        <div className="subcat border-top">
        <HomepageSubcategory 
                subcategoryName="Smart Home/Facilities"
                handleCompany={handleEntity}
                filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                />
        </div>
      </div>
    </div>
  </div>
</section> 


</section> */}
            {/* END MOBILE */}

            <div className="container-fluid">
              <div className="row">

                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tip={DevRegOpsPrivacyEngineeringToolsDescription}
                        data-for="category-tooltip"
                      >
                        DevRegOps & Privacy <br /> Engineering Tools {/* (
                        {DevRegOpsPrivacyEngineeringTools.length}) */}
                      </span>
                    </div>
                    <div class="category-container">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="DevRegOps"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DevRegOpsPrivacyEngineeringToolsANDDevRegOps
                              }
                            />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Privacy Engineering Tools"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DevRegOpsPrivacyEngineeringToolsANDPrivacyEngineeringTools
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color2">
                      <span
                        className="text-white"
                        data-tip={DataLifecycleAndDataGovernanceDescription}
                        data-for="category-tooltip"
                      >
                        Data Lifecycle <br /> and Data Governance {/* (
                        {DataLifecycleAndDataGovernance.length}) */}
                      </span>
                    </div>

                    <div className="category-container">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Identity & Consent Manager"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataLifecycleandDataGovernanceANDIdentityConsentManager
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data Subject Access Requests (DSARs)"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataLifecycleandDataGovernanceANDDataSubjectAccessRequestsDSARs
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data Vaults & Sharing"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataLifecycleandDataGovernanceANDDataVaultsSharing
                              }
                            />
                          </div>
                          <div class="landscape-subcategory-box">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Website and Mobile Tracker Scanning"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataLifecycleandDataGovernanceANDWebsiteandMobileTrackerScanning
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                      <div className="landscape-category-container">
                      <div class="landscape-subcategory-box">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data Discovery, Classification and Mapping"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataLifecycleandDataGovernanceANDDataDiscoveryClassificationandMapping
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                         
                          <div class="landscape-subcategory-box">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data Retention and Deletion"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataLifecycleandDataGovernanceANDDataRetentionandDeletion
                              }
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tip={PrivacyWorkflowandManagemenDescription}
                        data-for="category-tooltip"
                      >
                        Privacy Workflow <br /> and Management {/* (
                        {PrivacyWorkflowandManagement.length}) */}
                      </span>
                    </div>
                    <div class="category-container">
                    <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="Privacy Information Maturity"
                              handleCompany={handleEntity}
                              filteredCategory={
                                PrivacyWorkflowandManagementANDPrivacyInformationMaturity
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Deidentification, Pseudonymization, Anonymization"
                              handleCompany={handleEntity}
                              filteredCategory={
                                PrivacyWorkflowandManagementANDDeidentificationPseudonymizationAnonymization
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color2">
                      <span
                        className="text-white"
                        data-tip={SecurityforPrivacyDescription}
                        data-for="category-tooltip"
                      >
                        Security for Privacy {/* (
                        {SecurityforPrivacy.length}) */}
                      </span>
                    </div>
                    <div class="category-container">
                    <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="Incident Response"
                              handleCompany={handleEntity}
                              filteredCategory={
                                SecurityforPrivacyANDIncidentResponse
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Activity Monitoring"
                              handleCompany={handleEntity}
                              filteredCategory={
                                SecurityforPrivacyANDActivityMonitoring
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Assessment Manager"
                              handleCompany={handleEntity}
                              filteredCategory={
                                SecurityforPrivacyANDAssessmentManager
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Other Security Tools"
                              handleCompany={handleEntity}
                              filteredCategory={
                                SecurityforPrivacyANDOtherSecurityTools
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tip={DataintermediariesDescription}
                        data-for="category-tooltip"
                      >
                        Data intermediaries {/* (
                        {Dataintermediaries.length}) */}
                      </span>
                    </div>
                    <div class="category-container">
                    <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="Data Institutions"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataintermediariesANDDataInstitutions
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Centralised Consent Platforms"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataintermediariesANDCentralisedConsentPlatforms
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color2">
                      <span
                        className="text-white"
                        data-tip={DevRegOpsPrivacyEngineeringToolsDescription}
                        data-for="category-tooltip"
                      >
                        Consumer Facing Data <br /> Privacy Solutions {/* (
                        {DevRegOpsPrivacyEngineeringTools.length}) */}
                      </span>
                    </div>
                    <div class="category-container">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="Consumer Facing Data Privacy Solutions"
                              handleCompany={handleEntity}
                              filteredCategory={
                                ConsumerFacingDataPrivacySolutionsANDConsumerFacingDataPrivacySolutions
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tip={DataOrganizationsDescription}
                        data-for="category-tooltip"
                      >
                        Data organizations {/* (
                        {DataOrganizations.length}) */}
                      </span>
                    </div>
                    <div class="category-container">
                    <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="Independent data privacy-related organizations"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataOrganizationsANDIndependent
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data protection authorities"
                              handleCompany={handleEntity}
                              filteredCategory={
                                DataOrganizationsANDDataProtection
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          
              </div>
            </div>
          </section>

       

          <section className="something-to-change py-5 bg-white border-top">
          <div className="container">
                <h3 className="text-center fw-bold my-5 text-company-color">See something you want to change?</h3>
                <div className="something-to-change-container">
                    <div className="change-box text-center px-5">
                    <div className="d-flex justify-content-center mb-2 change-img-box mt-1">
                    <img
                      src="../about-btn1.png"
                      alt=""
                      className="d-block align-self-start mb-2 xd-icon"
                    />
                  </div>
                    <button className="btn-about bg-dark-orange text-white mt-1" 
                    onClick={()=>handleForm("https://airtable.com/shr8wQgbfheqbRKI6")}>Add your tool</button>
                    </div>

                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <div className="change-img-box">
                    <img
                      src="../about-btn2.png"
                      alt=""
                      className="align-self-start mb-3 me-3 xd-icon"
                    />
                    </div>
                    <p className="pt-1 text-company-color">Report a bug including problems with the website or with the data for a specific tool provider</p>
                    </div>
                    <div className="text-center d-flex flex-grow-1 mt-3">
                    <button className="btn-about bg-dark-orange text-white" onClick={()=>handleForm("https://platformable.typeform.com/to/fcJHb1xJ")}>Report a bug</button>
                    </div>
                    </div>


                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <div className="change-img-box">
                  <img
                      src="../about-btn3.png"
                      alt=""
                      className="align-self-start mb-3 me-3 xd-icon"
                    />
                </div>
                    <p className="pt-1 text-company-color">Share a new feature idea, including any additional data points you would like to see </p>
                    </div>
                    <div className="text-center d-flex flex-grow-1 mt-3">
                    <button className="btn-about bg-dark-orange text-white" onClick={()=>handleForm("https://platformable.typeform.com/to/z4zEIFFC")}>New feature idea</button>
                    </div>
                    </div>
                </div>
                </div>
          </section>
        </main>
      </div>
      <Modal selectedEntity={selectedEntity} handleLoading={handleLoading} />
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://api-privacy-landscape-server-qqk79.ondigitalocean.app/` || `http://localhost:5500`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
