import {useState} from 'react';
import { Lock, Shield, Share2, Database, UserCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BackToHome from '../components/BackToHome';
import SEO from '../components/SEO';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  // SEO мета-теги
  const seoData = {
    title: "Privacy Policy - NeuroGen Lab | Data Protection Notice",
    description: "Learn how NeuroGen Lab protects and handles your personal data. Detailed information about our privacy practices, data collection, processing, and your rights under GDPR.",
    keywords: "privacy policy, data protection, GDPR, personal data, data processing, privacy rights, data security, cookies, user privacy",
    ogTitle: "Privacy Policy | NeuroGen Lab - Your Data Protection Rights",
    ogDescription: "Comprehensive information about how we collect, process, and protect your personal data. Understanding your privacy rights and our commitment to data protection.",
    ogImage: "",
    ogUrl: "https://neurogenlab.de/privacy",
    twitterTitle: "NeuroGen Lab Privacy Policy - Data Protection Commitment",
    twitterDescription: "Discover how we protect your privacy and handle your personal information. Complete overview of our data protection practices and your rights.",
    twitterImage: "",
    author: "NeuroGen Lab Data Protection Officer",
    canonical: "https://neurogenlab.de/privacy",
    favicon: ""
  };

  const introContent = (
    <div className="mb-8">
      <p className="text-gray-300 leading-relaxed">
        This Privacy Notice for NeuroGen Lab ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
      </p>
      <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
        <li>
          Visit our website at <a href="https://neurogenlab.de/privacy" className="text-emerald-400 hover:underline">https://neurogenlab.de/privacy</a>, or any website of ours that links to this Privacy Notice
        </li>
        <li>
          Engage with us in other related ways, including any sales, marketing, or events
        </li>
      </ul>
      <p className="text-gray-300 leading-relaxed mt-4">
        Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:office@neurogenlab.de" className="text-emerald-400 hover:underline">office@neurogenlab.de</a>.
      </p>
    </div>
  );

  const summaryContent = (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-emerald-400 mb-4">Summary of Key Points</h2>
      <p className="text-gray-300 leading-relaxed">
        This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
      </p>
      <ul className="list-disc list-inside text-gray-300 leading-relaxed mt-4">
        <li>What personal information do we process? We may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#" className="text-emerald-400 hover:underline">personal information you disclose to us</a>.</li>
        <li>Do we process any sensitive personal information? Some of the information may be considered "special" or "sensitive" in certain jurisdictions. Learn more about <a href="#" className="text-emerald-400 hover:underline">sensitive information we process</a>.</li>
        <li>Do we collect any information from third parties? We do not collect any information from third parties.</li>
        <li>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. Learn more about <a href="#" className="text-emerald-400 hover:underline">how we process your information</a>.</li>
        <li>In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties. Learn more about <a href="#" className="text-emerald-400 hover:underline">when and with whom we share your personal information</a>.</li>
        <li>How do we keep your information safe? We have adequate organizational and technical processes and procedures in place to protect your personal information. Learn more about <a href="#" className="text-emerald-400 hover:underline">how we keep your information safe</a>.</li>
        <li>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#" className="text-emerald-400 hover:underline">your privacy rights</a>.</li>
        <li>How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. Learn more about <a href="#" className="text-emerald-400 hover:underline">how to exercise your rights</a>.</li>
      </ul>
      <p className="text-gray-300 leading-relaxed mt-4">
        Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.
      </p>
    </div>
  );

  const sections = [
    {
      title: "1. What Information Do We Collect?",
      icon: <Database className="w-6 h-6" />, 
      content: (
        <div>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <h3 className="text-lg font-semibold mb-2">Personal Information Provided by You</h3>
          <p className="mb-2">
            The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Usernames</li>
            <li>Mailing addresses</li>
            <li>Passwords</li>
            <li>Billing addresses</li>
            <li>Debit/credit card numbers</li>
            <li>Job titles</li>
            <li>Contact preferences</li>
            <li>Contact or authentication data</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Sensitive Information</h3>
          <p className="mb-4">
            When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Financial data</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Payment Data</h3>
          <p className="mb-4">
            We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Stripe. You may find their privacy notice link(s) here: <a href="https://stripe.com/en-de/privacy" className="text-emerald-400 hover:underline">https://stripe.com/en-de/privacy</a>.
          </p>
          <h3 className="text-lg font-semibold mb-2">Social Media Login Data</h3>
          <p className="mb-4">
            We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
          </p>
          <h3 className="text-lg font-semibold mb-2">Information Automatically Collected</h3>
          <p className="mb-4">
            <strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.
          </p>
          <p className="mb-4">
            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.
          </p>
          <p className="mb-4">
            Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <a href="https://neurogenlab.de/cookie-policy" className="text-emerald-400 hover:underline">https://neurogenlab.de/cookie-policy</a>.
          </p>
          <h3 className="text-lg font-semibold mb-2">The Information We Collect Includes:</h3>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Log and Usage Data:</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
            <li><strong>Device Data:</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
            <li><strong>Location Data:</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Google API</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Our use of information received from Google APIs will adhere to <a href="https://policies.google.com/technologies/ads" className="text-emerald-400 hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "2. How Do We Process Your Information?",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
          </p>
          <p className="mb-4">
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
            <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
            <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
            <li><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
            <li><strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
            <li><strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</li>
            <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
          </ul>
        </div>
      )
    },
    {
      title: "3. What Legal Bases Do We Rely On to Process Your Information?",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.
          </p>
          <p className="mb-4">
            The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a href="#" className="text-emerald-400 hover:underline">withdrawing your consent</a></li>
            <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
            <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
            <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
          </ul>
        </div>
      )
    },
    {
      title: "4. When and With Whom Do We Share Your Information?",
      icon: <Share2 className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following categories of third parties.
          </p>
          <p className="mb-4">
            <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.
          </p>
          <p className="mb-4">
            The categories of third parties we may share personal information with are as follows:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>AI Platforms</li>
            <li>Data Analytics Services</li>
            <li>Communication Service Providers</li>
            <li>Finance & Accounting Tools</li>
            <li>Payment Processors</li>
            <li>Social Networks</li>
            <li>Sales & Marketing Tools</li>
            <li>Retargeting Platforms</li>
            <li>User Account Registration & Authentication Services</li>
            <li>Website Hosting Service Providers</li>
          </ul>
          <p className="mb-4">
            We also may need to share your personal information in the following situations:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>Affiliates.</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
            <li><strong>Business Partners.</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
            <li><strong>Other Users.</strong> When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile.</li>
          </ul>
        </div>
      )
    },
    {
      title: "5. Do We Use Cookies and Other Tracking Technologies?",
      icon: <Database className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.
          </p>
          <p className="mb-4">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
          </p>
          <p className="mb-4">
            We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your settings). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which you may see on our Services or on other websites.
          </p>
          <p className="mb-4">
            Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <a href="https://neurogenlab.de/cookie-policy" className="text-emerald-400 hover:underline">https://neurogenlab.de/cookie-policy</a>
          </p>
          <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
          <p className="mb-4">
          We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Remarketing with Google Analytics, Google Analytics Demographics and Interests Reporting and Google Display Network Impressions Reporting. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-emerald-400 hover:underline"> https://tools.google.com/dlpage/gaoptout</a>. You can opt out of Google Analytics Advertising Features through <a href="https://adssettings.google.com/" className="text-emerald-400 hover:underline"> Ads Settings</a> and Ad Settings for mobile apps. Other opt out means include  <a href="http://optout.networkadvertising.org/" className="text-emerald-400 hover:underline">http://optout.networkadvertising.org/</a> and <a href="http://www.networkadvertising.org/mobile-choice" className="text-emerald-400 hover:underline">http://www.networkadvertising.org/mobile-choice</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" className="text-emerald-400 hover:underline"> Google Privacy & Terms page.</a>
          </p>
        </div>
      )
    },
    {
      title: "6. Do We Offer Artificial Intelligence-Based Products?",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
          </p>
          <p className="mb-4">
            As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.
          </p>
          <h3 className="text-lg font-semibold mb-2">Use of AI Technologies</h3>
          <p className="mb-4">
            We provide the AI Products through third-party service providers ("AI Service Providers"), including OpenAI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?". You must use the AI Products in any way that violates the terms or policies of any AI Service Provider.
          </p>
          <h3 className="text-lg font-semibold mb-2">Our AI Products</h3>
          <p className="mb-4">
            Our AI Products are designed for the following functions:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>AI bots</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">How We Process Your Data Using AI</h3>
          <p className="mb-4">
            All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.
          </p>
          <h3 className="text-lg font-semibold mb-2">How to Opt Out</h3>
          <p className="mb-4">
            We believe in giving you the power to decide how your data is used. To opt out, you can:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Contact us using the contact information provided</li>
          </ul>
        </div>
      )
    },
    {
      title: "7. How Do We Handle Your Social Logins?",
      icon: <UserCheck className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.
          </p>
          <p className="mb-4">
            Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X account). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.
          </p>
          <p className="mb-4">
            We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you in the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.
          </p>
        </div>
      )
    },
    {
      title: "8. Is Your Information Transferred Internationally?",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We may transfer, store, and process your information in countries other than your own.
          </p>
          <p className="mb-4">
            Our servers are located in Ukraine and United States. If you are accessing our Services from outside Ukraine and United States, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and by those third parties with whom we may share your personal information (see "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" above), in Ukraine, United States, and other countries.
          </p>
          <p className="mb-4">
            If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.
          </p>
          <h3 className="text-lg font-semibold mb-2">European Commission's Standard Contractual Clauses:</h3>
          <p className="mb-4">
            We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Data Processing Agreements that include Standard Contractual Clauses are available here: <a href="https://keepincrm.com/privacy" className="text-emerald-400 hover:underline">https://keepincrm.com/privacy</a>. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.
          </p>
          <h3 className="text-lg font-semibold mb-2">Binding Corporate Rules:</h3>
          <p className="mb-4">
            These include a set of Binding Corporate Rules ("BCRs") established and implemented by us. Our BCRs have been recognized by EEA and UK data protection authorities as providing an adequate level of protection to the personal information we process internationally. You can find a copy of our BCRs here: <a href="https://keepincrm.com/contract-offer" className="text-emerald-400 hover:underline">https://keepincrm.com/contract-offer</a>.
          </p>
        </div>
      )
    },
    {
      title: "9. How Long Do We Keep Your Information?",
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
          </p>
          <p className="mb-4">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than six (6) months past the start of the idle period of the user's account.
          </p>
          <p className="mb-4">
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
          </p>
        </div>
      )
    },
    {
      title: "10. How Do We Keep Your Information Safe?",
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.
          </p>
          <p className="mb-4">
            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
          </p>
        </div>
      )
    },
    {
      title: "11. Do We Collect Information From Minors?",
      icon: <Database className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.
          </p>
          <p className="mb-4">
            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at office@neurogenlab.de.
          </p>
        </div>
      )
    },
    {
      title: "12. What Are Your Privacy Rights?",
      icon: <UserCheck className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your personal information.
          </p>
          <p className="mb-4">
            In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right: (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </p>
          <p className="mb-4">
            We will consider and act upon any request in accordance with applicable data protection laws.
          </p>
          <p className="mb-4">
            If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.
          </p>
          <p className="mb-4">
            If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.
          </p>
          <h3 className="text-lg font-semibold mb-2">Withdrawing your consent:</h3>
          <p className="mb-4">
            If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </p>
          <p className="mb-4">
            However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
          </p>
          <h3 className="text-lg font-semibold mb-2">Opting out of marketing and promotional communications:</h3>
          <p className="mb-4">
            You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related notices that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.
          </p>
          <h3 className="text-lg font-semibold mb-2">Account Information:</h3>
          <p className="mb-4">
            If you would at any time like to review or change the information in your account or terminate your account, you can:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Log in to your account settings and update your user account.</li>
          </ul>
          <p className="mb-4">
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.
          </p>
          <h3 className="text-lg font-semibold mb-2">Cookies and similar technologies:</h3>
          <p className="mb-4">
            Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: <a href="https://neurogenlab.de/cookie-policy" className="text-emerald-400 hover:underline">https://neurogenlab.de/cookie-policy</a>.
          </p>
          <p className="mb-4">
            If you have questions or comments about your privacy rights, you may email us at office@neurogenlab.de.
          </p>
        </div>
      )
    },
    {
      title: "13. Controls for Do-Not-Track Features",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.
          </p>
        </div>
      )
    },
    {
      title: "14. Do We Make Updates to This Notice?",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            <strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </p>
          <p className="mb-4">
            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
          </p>
        </div>
      )
    },
    {
      title: "15. How Can You Contact Us About This Notice?",
      icon: <Lock className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            If you have questions or comments about this notice, you may email us at office@neurogenlab.de or contact us by post at:
          </p>
          <p className="mb-4">
            NeuroGen Lab<br />
            Gartenweg 2<br />
            Oranienburg 16515<br />
            Germany
          </p>
        </div>
      )
    },
    {
      title: "16. How Can You Review, Update, or Delete the Data We Collect From You?",
      icon: <Database className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a href="#" className="text-emerald-400 hover:underline">data subject access request</a>.
          </p>
        </div>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <SEO {...seoData} />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>
          
          <div className="text-center mb-12">
            <Lock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Notice</h1>
            <p className="text-gray-400">
              Last updated: March 15, 2024
            </p>
          </div>

          {introContent}
          {summaryContent}

          <div className="space-y-6">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="mb-4"
              >
                <button
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-emerald-400">
                      {section.icon}
                    </div>
                    <span className="font-medium text-emerald-400">{section.title}</span>
                  </div>
                  <div className={`transform transition-transform duration-300 ${
                    activeSection === index ? 'rotate-180' : ''
                  }`}>
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                {activeSection === index && (
                  <div className="mt-2 p-4 bg-gray-800/20 rounded-lg">
                    <div className="text-gray-300 leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Privacy;
