import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider";
import ScrollToTop from "../../components/ScrollToTop";
import BackToHome from "../../components/BackToHome";
import ContactForm from "../../components/form/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - NeuroGen Lab",
  description:
    "Get in touch with NeuroGen Lab. We are here to help you with any questions or inquiries you may have.",
  keywords: ["contact", "NeuroGen Lab", "support", "inquiries", "AI technology"],
  openGraph: {
    title: "NeuroGen Lab | Leading AI Solutions Provider",
    description:
      "Get in touch with NeuroGen Lab. We are here to help you with any questions or inquiries you may have.",
    url: "https://neurogenlab.de/contacts",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Contact Us - NeuroGen Lab",
    description:
      "Get in touch with NeuroGen Lab. We are here to help you with any questions or inquiries you may have.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/contacts",
  },
  icons: {
    icon: "/favicon.ico", // Replace with your favicon path
  },
};

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Address",
    content: "Musterstraße 123, 10115 Berlin, Germany",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    content: (
      <a href="tel:+4930123456789" className="text-gray-400 hover:underline">
        +49 (0) 30 123456789
      </a>
    ),
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    content: (
      <a href="mailto:office@neurogenlab.de" className="text-gray-400 hover:underline">
        office@neurogenlab.de
      </a>
    ),
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Business Hours",
    content: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
];

const Contacts = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          <div className="text-center mb-12">
            <MessageSquare className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <Divider />

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-3xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-gray-900/90 rounded-xl p-6 sm:p-8 h-full min-h-[600px]">
                <h2 className="text-2xl font-semibold mb-8 text-center">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="space-y-8 w-full max-w-2xl">
              <h2 className="text-2xl font-semibold mb-8 text-center">Get in Touch</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="text-emerald-400 mb-4">{info.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-gray-400 flex-grow">{info.content}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-400">
                  NeuroGen Lab is a leading provider of AI solutions, helping businesses transform
                  their operations through innovative technology. Our team of experts is dedicated
                  to delivering exceptional service and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Contacts;
