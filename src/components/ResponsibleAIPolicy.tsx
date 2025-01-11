import { Scale, FileText, Book, Shield, CreditCard, Users, Brain, Gavel } from "lucide-react";
import BackToHome from "../components/BackToHome";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Divider from "./Divider";
import Navbar from "./Navbar";

const ResponsibleAIPolicy = () => {
  const sections = [
    {
      title: "1. Definitions",
      icon: <Book className="w-6 h-6" />,
      content: `"Client" refers to any individual or entity that purchases or uses our services or products.

"Services" means any IT services, including but not limited to software development, AI solutions, consulting, and support services provided by NeuroGen Lab.

"Products" means any software, applications, or other digital products developed or provided by NeuroGen Lab.

"Content" refers to any information, data, text, software, music, sound, photographs, graphics, video, messages, or other materials.`,
    },
    {
      title: "2. Scope of Application",
      icon: <Shield className="w-6 h-6" />,
      content: `These Terms and Conditions govern all business relationships between NeuroGen Lab and its clients regarding the use of our website, services, and products.

Any deviating, conflicting, or supplementary terms and conditions of the client shall only become part of the contract if and to the extent that we have expressly agreed to their validity in writing.`,
    },
    {
      title: "3. Services and Products",
      icon: <Brain className="w-6 h-6" />,
      content: `3.1 AI Solutions
Custom AI model development, implementation, and integration services tailored to client needs.

3.2 Software Development
Development of custom software solutions, including web applications, mobile apps, and enterprise software.

3.3 Consulting Services
Professional IT consulting, including technology strategy, architecture design, and digital transformation.

3.4 Support and Maintenance
Ongoing technical support, maintenance, and updates for implemented solutions.`,
    },
    {
      title: "4. Payment Terms",
      icon: <CreditCard className="w-6 h-6" />,
      content: `4.1 Payment Processing
All payments are processed securely through Stripe. We accept major credit cards, SEPA direct debit, and bank transfers.

4.2 Payment Terms
Invoices are due within 14 days of issuance unless otherwise agreed in writing. Subscription services are billed in advance on a monthly or annual basis.

4.3 Refund Policy
Refunds for subscription services may be issued on a pro-rata basis within 14 days of purchase. Custom development services are non-refundable once work has commenced.`,
    },
    {
      title: "5. Client Obligations",
      icon: <Users className="w-6 h-6" />,
      content: `The client agrees to:

- Provide accurate and complete information for service delivery
- Make timely payments according to agreed terms
- Use services and products in compliance with applicable laws
- Maintain confidentiality of account credentials
- Cooperate in the implementation of services`,
    },
    {
      title: "6-8. Rights, IP, and Liability",
      icon: <FileText className="w-6 h-6" />,
      content: `6. Company Rights and Obligations
NeuroGen Lab reserves the right to:
- Modify services and products with reasonable notice
- Suspend services in case of payment default
- Update these terms and conditions
- Subcontract services to qualified third parties

7. Intellectual Property Rights
All intellectual property rights in our services and products remain with NeuroGen Lab or our licensors.

Clients receive a non-exclusive, non-transferable license to use the products and services for their intended purpose.

8. Liability and Warranties
NeuroGen Lab shall be liable without limitation for damages resulting from injury to life, body, or health, in case of intent and gross negligence.

For slight negligence, liability is limited to the breach of essential contractual obligations and to the typical, foreseeable damage.`,
    },
    {
      title: "9-11. Legal Matters",
      icon: <Gavel className="w-6 h-6" />,
      content: `9. Dispute Resolution and Jurisdiction
These terms are governed by German law. The exclusive place of jurisdiction for all disputes is Berlin, Germany.

Before initiating legal proceedings, parties agree to attempt resolution through mediation.

10. Changes to Terms
We reserve the right to modify these terms at any time. Changes will be effective upon posting to the website.

Clients will be notified of significant changes via email. Continued use of services constitutes acceptance of modified terms.

11. Contact Information
For questions about these terms, please contact:

NeuroGen Lab
Legal Department
Musterstraße 123
10115 Berlin, Germany
Email: office@neurogenlab.de
Phone: +49 (0) 30 123456789`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="mt-8">
            {" "}
            <BackToHome /> <div />
            <div className="text-center mb-12">
              <Scale className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-gray-400">Last updated: March 15, 2024</p>
            </div>
            <Divider />
            <div className="mt-12 space-y-8">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-emerald-400">{section.icon}</div>
                    <h2 className="text-xl font-semibold text-emerald-400">{section.title}</h2>
                  </div>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ResponsibleAIPolicy;
