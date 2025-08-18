import { Metadata } from "next";
import React from "react";
import { Scale, Shield, CreditCard, Brain, Gavel, PhoneCall, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Divider from "../../../components/Divider";
import ScrollToTop from "../../../components/ScrollToTop";
import BackToHome from "../../../components/BackToHome";
import Accordion from "../../../components/Accordion";

export const metadata: Metadata = {
  title: "Responsible AI Policy | NeuroGen Lab",
  description:
    "Learn about NeuroGen Lab's commitment to responsible AI development and ethical use of artificial intelligence technology.",
  keywords: ["responsible AI", "AI ethics", "artificial intelligence", "neurogenlab"],
  openGraph: {
    title: "Responsible AI Policy | NeuroGen Lab",
    description:
      "Learn about NeuroGen Lab's commitment to responsible AI development and ethical use of artificial intelligence technology.",
    url: "https://neurogenlab.de/en/responsible-ai-policy",
    siteName: "NeuroGen Lab",
    images: [
      {
        url: "/assets/images/og-guide.jpg",
        alt: "NeuroGen Lab Responsible AI Policy",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Legal Department" }],
};

const ResponsibleAIPolicy = () => {
  const sections = [
    {
      title: "1. USE OF THE SERVICES",
      icon: <Brain className="w-6 h-6" />,
      content: (
        <div>
          <p>
            When you use the Services, you warrant that you will comply with this Policy and with
            all applicable laws.
          </p>
          <p>You also acknowledge that you may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Systematically retrieve data or other content from the Services to create or compile,
              directly or indirectly, a collection, compilation, database, or directory without
              written permission from us.
            </li>
            <li>
              Make any unauthorized use of the Services, including collecting usernames and/or email
              addresses of users by electronic or other means for the purpose of sending unsolicited
              email, or creating user accounts by automated means or under false pretenses.
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with security-related features of the
              Services, including features that prevent or restrict the use or copying of any
              Content or enforce limitations on the use of the Services and/or the Content contained
              therein.
            </li>
            <li>Engage in unauthorized framing of or linking to the Services.</li>
            <li>
              Trick, defraud, or mislead us and other users, especially in any attempt to learn
              sensitive account information such as user passwords.
            </li>
            <li>
              Make improper use of our Services, including our support services or submit false
              reports of abuse or misconduct.
            </li>
            <li>
              Engage in any automated use of the Services, such as using scripts to send comments or
              messages, or using any data mining, robots, or similar data gathering and extraction
              tools.
            </li>
            <li>
              Interfere with, disrupt, or create an undue burden on the Services or the networks or
              the Services connected.
            </li>
            <li>
              Attempt to impersonate another user or person or use the username of another user.
            </li>
            <li>
              Use any information obtained from the Services in order to harass, abuse, or harm
              another person.
            </li>
            <li>
              Use the Services as part of any effort to compete with us or otherwise use the
              Services and/or the Content for any revenue-generating endeavor or commercial
              enterprise.
            </li>
            <li>
              Decipher, decompile, disassemble, or reverse engineer any of the software comprising
              or in any way making up a part of the Services, except as expressly permitted by
              applicable law.
            </li>
            <li>
              Attempt to bypass any measures of the Services designed to prevent or restrict access
              to the Services, or any portion of the Services.
            </li>
            <li>
              Harass, annoy, intimidate, or threaten any of our employees or agents engaged in
              providing any portion of the Services to you.
            </li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>
              Copy or adapt the Services’ software, including but not limited to Flash, PHP, HTML,
              JavaScript, or other code.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
              other material, including excessive use of capital letters and spamming (continuous
              posting of repetitive text), that interferes with any party’s uninterrupted use and
              enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with
              the use, features, functions, operation, or maintenance of the Services.
            </li>
            <li>
              Upload or transmit (or attempt to upload or to transmit) any material that acts as a
              passive or active information collection or transmission mechanism, including without
              limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs,
              cookies, or other similar devices (sometimes referred to as “spyware” or “passive
              collection mechanisms” or “pcms”).
            </li>
            <li>
              Except as may be the result of standard search engine or Internet browser usage, use,
              launch, develop, or distribute any automated system, including without limitation, any
              spider, robot, cheat utility, scraper, or offline reader that accesses the Services,
              or using or launching any unauthorized script or other software.
            </li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>
              Sell or resell the Services in any manner inconsistent with any applicable laws or
              regulations.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. Subscriptions",
      icon: <CreditCard className="w-6 h-6" />,
      content: (
        <div>
          <p>
            If you subscribe to our Services, you understand, acknowledge, and agree that you may
            not, except if expressly permitted:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Engage in any use, including modification, copying, redistribution, publication,
              display, performance, or retransmission, of any portions of any Services, other than
              as expressly permitted by this Policy, without the prior written consent of NeuroGen
              Lab, which consent NeuroGen Lab may grant or refuse in its sole and absolute
              discretion.
            </li>
            <li>
              Reconstruct or attempt to discover any source code or algorithms of the Services, or
              any portion thereof, by any means whatsoever.
            </li>
            <li>Intercept any data not intended for you.</li>
            <li>
              Damage, reveal, or alter any user's data, or any other hardware, software, or
              information relating to another person or entity.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "3. AI Products",
      icon: <Brain className="w-6 h-6" />,
      content: (
        <div>
          <p>
            When you use the AI Products provided by NeuroGen Lab, you warrant that you will not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Deploy AI techniques that utilize subliminal, manipulative, or deceptive methods
              designed to distort behavior and impair informed decision-making, particularly when
              such actions cause significant harm to individuals.
            </li>
            <li>
              Exploit vulnerabilities related to age, disability, or socio-economic circumstances
              through AI in a way that distorts behavior or decision-making, especially if this
              results in significant harm to the individual.
            </li>
            <li>
              Use AI systems for biometric categorization that infer sensitive attributes such as
              race, political opinions, trade union membership, religious or philosophical beliefs,
              sex life, or sexual orientation, except in limited cases, such as labeling or
              filtering lawfully acquired datasets, or specific law enforcement activities.
            </li>
            <li>
              Implement AI-based social scoring systems that evaluate or classify individuals or
              groups based on their social behavior or personal traits in a manner that causes harm,
              discrimination, or unfair treatment.
            </li>
            <li>
              Assess the risk of an individual committing criminal offenses based solely on
              profiling, personality traits, or other non-behavioral factors, except in narrowly
              defined circumstances where legal safeguards are in place.
            </li>
            <li>
              Not compile facial recognition databases through targeted scraping of facial images
              from the internet, unless it is part of a legally
              compliant and narrowly defined purpose.
            </li>
            <li>
              Engage in real-time remote biometric identification in public places for law
              enforcement purposes, except in specific situations where there are strong legal
              justifications and oversight mechanisms.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. ARTIFICIAL INTELLIGENCE",
      icon: <Brain className="w-6 h-6" />,
      content: (
        <div>
          <p>
            We recognize the significant impact AI can have on our users and society, and we are
            dedicated to ensuring that our AI Products are designed and operated in a manner that
            aligns with comprehensive ethical standards. We aim to use AI to enhance user
            experiences while upholding fairness, transparency, and accountability principles.
          </p>
          <p>
            This Policy applies to all AI-powered features, services, and systems in our Services.
            It governs the development, deployment, and use of AI technologies to protect users'
            rights and maintain transparency in all AI operations. This Policy applies to all
            stakeholders, including employees, third-party vendors, and partners who contribute to
            or interact with our AI Products.
          </p>
        </div>
      ),
    },
    {
      title: "5. Enforcement",
      icon: <Gavel className="w-6 h-6" />,
      content: (
        <div>
          <p>
            Any misuse of our AI Products or failure to adhere to the standards outlined in this
            Policy will result in appropriate actions to ensure the integrity of our platform and
            the protection of our users. The specific consequences for misuse of AI may vary
            depending on the nature and severity of the violation and the user's history with our
            Services.
          </p>
          <p>Violations may include, but are not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Engaging the AI Products in ways that violate user privacy, manipulate data, disregard
              ethical guidelines, or are against AI Service Providers' terms of use.
            </li>
            <li>
              Deploying AI in a manner that introduces or causes bias, leading to unfair treatment
              of users or groups.
            </li>
            <li>
              Improper handling, storage, or use of data by AI Products, leading to breaches of user
              trust and legal compliance.
            </li>
            <li>
              Using AI in a way that compromises the privacy and security of our systems, data, or
              users.
            </li>
          </ul>
          <p>
            Depending on the violation, NeuroGen Lab may take one or more of the following actions:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Warnings:</strong> The responsible party may receive a formal warning and be
              required to cease violating practices.
            </li>
            <li>
              <strong>Temporary Suspension:</strong> In cases of repeated or more severe violations,
              the responsible individual's access to AI Products or certain features of our platform
              may be temporarily suspended while the issue is investigated.
            </li>
            <li>
              <strong>Termination of Access:</strong> Serious violations, particularly those that
              result in harm to users or breach privacy or other regulations, may lead to the
              permanent termination of access to our AI Products and Services.
            </li>
            <li>
              <strong>Legal Action:</strong> In cases where the misuse of AI leads to significant
              harm, data breaches, or legal violations, we may pursue legal action against the party
              responsible. This could include reporting the incident to law enforcement or
              regulatory bodies.
            </li>
            <li>
              <strong>Public Disclosure:</strong> For incidents that impact public trust or involve
              severe ethical breaches, we reserve the right to publicly disclose the violation and
              the actions taken in response to maintain transparency and accountability.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "6. Commitment to Responsible AI",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p>
            In addition to the consequences outlined above, we are deeply committed to repairing any
            harm caused by the misuse of AI. This commitment is a testament to our dedication to our
            users and our responsibility as a company. We will correct biased outcomes and implement
            additional safeguards to prevent future violations.
          </p>
          <p>
            At NeuroGen Lab, we are committed to the ongoing refinement and enhancement of our
            Policy. As technology evolves and regulatory environments shift, we recognize the
            importance of keeping our policies up to date to ensure that they remain relevant,
            effective, and aligned with best practices in AI ethics. We will regularly review and
            update our Policy to reflect technological advancements and legal changes in local,
            national, and international regulations related to AI. Our Policy will be updated as
            needed to comply with new laws and guidelines, ensuring that our practices remain
            legally sound and socially responsible.
          </p>
        </div>
      ),
    },
    {
      title: "7. CONSEQUENCES OF BREACHING THIS POLICY",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: (
        <div>
          <p>
            The consequences for violating our Policy will vary depending on the severity of the
            breach and the user's history on the Services, by way of example:
          </p>
          <p>
            We may, in some cases, give you a warning; however, if your breach is serious or if you
            continue to breach our Legal Terms and this Policy, we have the right to suspend or
            terminate your access to and use of our Services and, if applicable, disable your
            account. We may also notify law enforcement or issue legal proceedings against you when
            we believe that there is a genuine risk to an individual or a threat to public safety.
          </p>
          <p>
            We exclude our liability for all action we may take in response to any of your breaches
            of this Policy.
          </p>
        </div>
      ),
    },
    {
      title: "8. HOW CAN YOU CONTACT US ABOUT THIS POLICY?",
      icon: <PhoneCall className="w-6 h-6" />,
      content: (
        <div>
          <p>If you have any further questions or comments, you may contact us by:</p>
          <div>
            <strong>Email:</strong>{" "}
            <a href="mailto:office@neurogenlab.de" className="text-emerald-400 hover:underline">
              office@neurogenlab.de
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            {" "}
            <BackToHome />{" "}
          </div>

          <div className="text-center mb-12">
            <Scale className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Responsible AI Policy</h1>
            <p className="text-gray-400">Last updated: March 15, 2024</p>
          </div>

          <div className="text-gray-300 mb-8 space-y-4">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">
              AGREEMENT TO OUR LEGAL TERMS
            </h2>

            <p>
              This Responsible AI Policy ("Policy") is part of our Terms of Service ("Legal Terms")
              and should therefore be read alongside our main Legal Terms:
              https://autohaus.neurogenlab.de/terms. When you use the AI-powered services provided
              by NeuroGen Lab ("AI Products"), you warrant that you will comply with this document,
              our Legal Terms and all applicable laws and regulations governing AI. Your usage of
              our AI Products signifies your agreement to engage with our platform in a lawful,
              ethical, and responsible manner that respects the rights and dignity of all
              individuals. If you do not agree with these Legal Terms, please refrain from using our
              Services. Your continued use of our Services implies acceptance of these Legal Terms.
            </p>

            <p>Please carefully review this Policy which applies to any and all:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>(a) uses of our Services (as defined in "Legal Terms")</li>
              <li>
                (b) forms, materials, consent tools, comments, post, and all other content available
                on the Services ("Content")
              </li>
              <li>
                (c) responsible implementation and management of AI Products within our Services
              </li>
            </ul>

            <h2 className="text-xl font-bold text-emerald-400 mb-4">WHO WE ARE</h2>

            <p>
              We are NeuroGen Lab, doing business as NGLab ("Company," "we," "us," or "our") a
              company registered in Germany at Gartenweg 2, Oranienburg 16515. We operate the
              website https://neurogenlab.de (the "Site"), as well as any other related products and
              services that refer or link to this Policy (collectively, the "Services").
            </p>
          </div>

          <Divider />

          <div className="mt-12">
            <Accordion sections={sections} />
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ResponsibleAIPolicy;
