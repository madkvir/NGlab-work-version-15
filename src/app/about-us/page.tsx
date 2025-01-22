import { Users, Award, Globe, Building } from "lucide-react";
import React from "react";
import Navbar from "../../components/Navbar";
import BackToHome from "../../components/BackToHome";
import Divider from "../../components/Divider";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NeuroGen Lab - Innovating AI Technology",
  description:
    "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
  keywords: ["NeuroGen Lab", "AI technology", "about us", "leadership team", "innovation"],
  openGraph: {
    title: "About NeuroGen Lab - Innovating AI Technology",
    description:
      "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
    url: "https://neurogenlab.de/about-us",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "About NeuroGen Lab - Innovating AI Technology",
    description:
      "Learn more about NeuroGen Lab, our mission, and the leadership team driving innovation in AI technology.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab Team" }],
  alternates: {
    canonical: "https://neurogenlab.de/about-us",
  },
};

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10K+", label: "Active Users" },
    { icon: <Award className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
    { icon: <Globe className="w-6 h-6" />, value: "50+", label: "Countries" },
    { icon: <Building className="w-6 h-6" />, value: "500+", label: "Enterprise Clients" },
  ];

  const history = [
    {
      year: "2020",
      title: "Основание",
      description: "NeuroGen Lab была основана с целью демократизации ИИ технологий"
    },
    {
      year: "2021",
      title: "Первый продукт",
      description: "Запуск нашего флагманского AI-ассистента"
    },
    {
      year: "2022",
      title: "Международная экспансия",
      description: "Выход на европейский рынок и открытие офиса в Берлине"
    },
    {
      year: "2023",
      title: "Масштабирование",
      description: "Достижение отметки в 1000+ активных пользователей"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years experience in AI and Machine Learning",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former Tech Lead at major AI companies",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Research",
      bio: "PhD in Computer Science, AI specialist",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <BackToHome />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About NeuroGen Lab</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pioneering the future of AI technology to transform businesses worldwide
            </p>
          </div>

          <Divider />

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="text-emerald-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* История компании */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Our History</h2>
            <div className="max-w-4xl mx-auto">
              {history.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 group">
                  <div className="absolute left-0 w-px h-full bg-emerald-400/30 group-last:h-0" />
                  <div className="absolute left-[-8px] w-4 h-4 rounded-full bg-emerald-400" />
                  <div className="ml-8">
                    <div className="text-emerald-400 font-bold mb-1">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              At NeuroGen Lab, we're committed to making advanced AI technology accessible to
              businesses of all sizes. Our mission is to democratize artificial intelligence and
              empower organizations to achieve their full potential through innovative AI solutions.
            </p>
          </div>

          <Divider />

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="relative group bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-800 flex items-center justify-center text-gray-400 p-4 text-center">
                    [Фотография {member.name} - {member.role}]
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-emerald-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400">{member.bio}</p>
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

export default About;
