"use client";

import {
  Shield,
  Users,
  Brain,
  RefreshCcw,
  XOctagon,
  UserPlus,
  FileCheck,
  Share2,
  Link,
} from "lucide-react";
import { useState } from "react";

const CookiePolicyList = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const sections = [
    {
      title: "1. What are cookies?",
      icon: <Brain className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you
            visit a website. Cookies are widely used by website owners in order to make their
            websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-4">
            Cookies set by the website owner (in this case, NeuroGen Lab) are called "first-party
            cookies." Cookies set by parties other than the website owner are called "third-party
            cookies." Third-party cookies enable third-party features or functionality to be
            provided on or through the website (e.g., advertising, interactive content, and
            analytics). The parties that set these third-party cookies can recognize your computer
            both when it visits the website in question and also when it visits certain other
            websites.
          </p>
        </div>
      ),
    },
    {
      title: "2. Why do we use cookies?",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            We use first- and third-party cookies for several reasons. Some cookies are required for
            technical reasons in order for our Website to operate, and we refer to these as
            "essential" or "strictly necessary" cookies. Other cookies also enable us to track and
            target the interests of our users to enhance the experience on our Online Properties.
            Third parties serve cookies through our Website for advertising, analytics, and other
            purposes. This is described in more detail below.
          </p>
        </div>
      ),
    },
    {
      title: "3. How can I control cookies?",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your
            cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie
            Consent Manager allows you to select which categories of cookies you accept or reject.
            Essential cookies cannot be rejected as they are strictly necessary to provide you with
            services.
          </p>
          <p className="mb-4">
            The Cookie Consent Manager can be found in the notification banner and on our Website.
            If you choose to reject cookies, you may still use our Website though your access to
            some functionality and areas of our Website may be restricted. You may also set or amend
            your web browser controls to accept or refuse cookies.
          </p>
          <p className="mb-4">
            The specific types of first- and third-party cookies served through our Website and the
            purposes they perform are described in the table below (please note that the specific
            cookies served may vary depending on the specific Online Properties you visit):
          </p>
          <h4 className="font-bold">Analytics and customization cookies:</h4>
          <p className="mb-4">
            These cookies collect information that is used either in aggregate form to help us
            understand how our Website is being used or how effective our marketing campaigns are,
            or to help us customize our Website for you.
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Name:</strong> ga_#
            </li>
            <li>
              <strong>Purpose:</strong> Records a particular ID used to come up with data about
              website usage by the user.
            </li>
            <li>
              <strong>Provider:</strong> neurogenlab.de
            </li>
            <li>
              <strong>Service:</strong> Google Analytics{" "}
              <a
                href="https://www.google.com/analytics/"
                className="text-emerald-400 hover:underline"
              >
                View Service Privacy Policy
              </a>
            </li>
            <li>
              <strong>Type:</strong> http_local_storage
            </li>
            <li>
              <strong>Expires in:</strong> persistent
            </li>
          </ul>
          <ul className="list-disc ml-5">
            <li>
              <strong>Name:</strong> s7
            </li>
            <li>
              <strong>Purpose:</strong> Gather data regarding site usage and user behavior on the
              website.
            </li>
            <li>
              <strong>Provider:</strong> neurogenlab.de
            </li>
            <li>
              <strong>Service:</strong> Adobe Analytics
            </li>
            <li>
              <strong>Type:</strong> http_local_storage
            </li>
            <li>
              <strong>Expires in:</strong> session
            </li>
          </ul>
          <h4 className="font-bold">Unclassified cookies:</h4>
          <p className="mb-4">
            These are cookies that have not yet been categorized. We are in the process of
            classifying these cookies with the help of their providers.
          </p>
          <ul className="list-disc ml-5">
            <li>
              <strong>Name:</strong> ucData
            </li>
            <li>
              <strong>Provider:</strong> neurogenlab.de
            </li>
            <li>
              <strong>Type:</strong> http_local_storage
            </li>
            <li>
              <strong>Expires in:</strong> persistent
            </li>
          </ul>
          <ul className="list-disc ml-5">
            <li>
              <strong>Name:</strong> ucString
            </li>
            <li>
              <strong>Provider:</strong> neurogenlab.de
            </li>
            <li>
              <strong>Type:</strong> http_local_storage
            </li>
            <li>
              <strong>Expires in:</strong> persistent
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "4. How can I control cookies on my browser?",
      icon: <RefreshCcw className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            As the means by which you can refuse cookies through your web browser controls vary from
            browser to browser, you should visit your browser’s help menu for more information. The
            following is information about how to manage cookies on the most popular browsers:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                className="text-emerald-400 hover:underline"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                className="text-emerald-400 hover:underline"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                className="text-emerald-400 hover:underline"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/en-us/HT201265"
                className="text-emerald-400 hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/en-us/help/4468242/microsoft-edge-help"
                className="text-emerald-400 hover:underline"
              >
                Edge
              </a>
            </li>
            <li>
              <a
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                className="text-emerald-400 hover:underline"
              >
                Opera
              </a>
            </li>
          </ul>
          <p className="mb-4">
            In addition, most advertising networks offer you a way to opt out of targeted
            advertising. If you would like to find out more information, please visit:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <a
                href="https://digitaladvertisingalliance.org/"
                className="text-emerald-400 hover:underline"
              >
                Digital Advertising Alliance
              </a>
            </li>
            <li>
              <a href="https://youradchoices.ca/" className="text-emerald-400 hover:underline">
                Digital Advertising Alliance of Canada
              </a>
            </li>
            <li>
              <a
                href="https://www.orfeus-eu.org/data/eida"
                className="text-emerald-400 hover:underline"
              >
                European Interactive Digital Advertising Alliance
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "5. What about other tracking technologies, like web beacons?",
      icon: <XOctagon className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            Cookies are not the only way to recognize or track visitors to a website. We may use
            other, similar technologies from time to time, like web beacons (sometimes called
            "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique
            identifier that enables us to recognize when someone has visited our Website or opened
            an email including them. This allows us, for example, to monitor the traffic patterns of
            users from one page within a website to another, to deliver or communicate with cookies,
            to understand whether you have come to the website from an online advertisement
            displayed on a third-party website, to improve site performance, and to measure the
            success of email marketing campaigns. In many instances, these technologies are reliant
            on cookies to function properly, and so declining cookies will impair their functioning.
          </p>
        </div>
      ),
    },
    {
      title: "6. Do you use Flash cookies or Local Shared Objects?",
      icon: <UserPlus className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or
            "LSOs") to, among other things, collect and store information about your use of our
            services, fraud prevention, and for other site operations.
          </p>
          <p className="mb-4">
            If you do not want Flash Cookies stored on your computer, you can adjust the settings of
            your Flash player to block Flash Cookies storage using the tools contained in the{" "}
            <a
              href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"
              className="text-emerald-400 hover:underline"
            >
              Website Storage Settings Panel
            </a>
            . You can also control Flash Cookies by going to the{" "}
            <a
              href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
              className="text-emerald-400 hover:underline"
            >
              Global Storage Settings Panel
            </a>{" "}
            and following the instructions (which may include instructions that explain, for
            example, how to delete existing Flash Cookies (referred to "information" on the
            Macromedia site), how to prevent Flash LSOs from being placed on your computer without
            your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are
            not being delivered by the operator of the page you are on at the time).
          </p>
          <p className="mb-4">
            Please note that setting the Flash Player to restrict or limit acceptance of Flash
            Cookies may reduce or impede the functionality of some Flash applications, including,
            potentially, Flash applications used in connection with our services or online content.
          </p>
        </div>
      ),
    },
    {
      title: "7. Do you serve targeted advertising?",
      icon: <FileCheck className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            Third parties may serve cookies on your computer or mobile device to serve advertising
            through our Website. These companies may use information about your visits to this and
            other websites in order to provide relevant advertisements about goods and services that
            you may be interested in. They may also employ technology that is used to measure the
            effectiveness of advertisements. They can accomplish this by using cookies or web
            beacons to collect information about your visits to this and other sites in order to
            provide relevant advertisements about goods and services of potential interest to you.
            The information collected through this process does not enable us or them to identify
            your name, contact details, or other details that directly identify you unless you
            choose to provide these.
          </p>
        </div>
      ),
    },
    {
      title: "8. How often will you update this Cookie Policy?",
      icon: <Share2 className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            We may update this Cookie Policy from time to time in order to reflect, for example,
            changes to the cookies we use or for other operational, legal, or regulatory reasons.
            Please therefore revisit this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.The date at the top of this Cookie Policy indicates
            when it was last updated.
          </p>
        </div>
      ),
    },
    {
      title: "9. Where can I get further information?",
      icon: <Link className="w-6 h-6" />,
      content: (
        <div>
          <p className="mb-4">
            If you have any questions about our use of cookies or other technologies, please email
            us at{" "}
            <a href="mailto:office@neurogenlab.de" className="text-emerald-400 hover:underline">
              office@neurogenlab.de
            </a>{" "}
            or by post to:
          </p>
          <p className="mb-4">
            NeuroGen Lab
            <br />
            Gartenweg 2<br />
            Oranienburg, 16515
            <br />
            Germany
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="mt-12">
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setActiveSection(activeSection === index ? null : index)}
            className="w-full flex items-center justify-between p-4 bg-gray-800/30 hover:bg-gray-800/50 rounded-lg transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <div className="text-emerald-400">{section.icon}</div>
              <span className="font-medium text-emerald-400">{section.title}</span>
            </div>
            <div
              className={`transform transition-transform duration-300 ${
                activeSection === index ? "rotate-180" : ""
              }`}
            >
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
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CookiePolicyList;
