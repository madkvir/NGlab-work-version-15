"use client";

import { Users, Award, Globe, Building, ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import BackToHome from "../../../components/BackToHome";
import Divider from "../../../components/Divider";
import ScrollToTop from "../../../components/ScrollToTop";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { aboutTranslations } from "../../../locales/aboutTranslations";
import getPageLangUnit from "../../../utils/getPageLangUnit";
import { heroTranslations } from "../../../locales/translations";
import { useParams } from "next/navigation";

const testimonials = [
  {
    quote: "Reduced query processing time by 80%",
    problem:
      "Long response times and operator overload were slowing down customer support and reducing client satisfaction",
    solution:
      "Implementation of an AI Agent to automate routine tasks and provide 24/7 customer support",
    result:
      "The work of managers has been optimized by delegating typical inquiries to the knowledge base, freeing up their time for handling complex requests.",
    // author: "Мария Иванова",
    position: "Head of Customer Service",
    company: "Edugames Rozumniki",
    industry: "Interactive Education",
    logo: "/assets/companies/rozumniki.svg",
  },
  {
    quote: "Product search acceleration by 50% and a 45% reduction in support workload",
    problem:
      "Customers struggled to navigate the website's product range, and the support team couldn't handle the increasing volume of inquiries",
    solution:
      "Implementation of an AI-powered chatbot with smart catalog search and automated consultations",
    result:
      "Within 2 months, 80% of inquiries were handled by the AI agent, and customer product search time was reduced threefold",
    // author: "Александр Петров",
    position: "Head of Sales",
    company: "Logistic Forklift",
    industry: "Sale and rental of special equipment",
    logo: "/assets/companies/pogruzchik.svg",
  },
  {
    quote: "Increase in the average ticket by 30% and improvement in customer loyalty",
    problem:
      "Difficulties in accurately matching services to customer needs and a high workload on administrators",
    solution:
      "Implementation of an AI-powered chatbot that analyzes customer preferences, recommends services, announces prices and discounts, and automatically manages appointments",
    result:
      "A 50% increase in repeat visits and a 70% reduction in booking processing time within the first four months",
    // author: "Дмитрий Сидоров",
    position: "Founder",
    company: "Epil Care",
    industry: "Beauty and Health",
    logo: "/assets/companies/epil.svg",
  },
  {
    quote: "Doubling Lead-to-Sale conversion rates through automation",
    problem:
      "Low website visitor conversion rates and significant workload on managers due to handling routine inquiries",
    solution:
      "The Inbound Sales Agent chatbot operates 24/7, engages with website visitors, answers questions about available vehicles, financial and legal options, and schedules test drives. Integration with the CRM enabled automated lead transfer to the sales team",
    result:
      "Conversion rates increased from 7% to 14-21% within the first 6 months, reduced staff workload, and improved customer satisfaction",
    // author: "Елена Смирнова",
    position: "Sales Manager",
    company: "Ken Shaw Lexus",
    industry: "Automotive Sales",
    logo: "/assets/companies/lexus.svg",
  },
  {
    quote: "Reducing request processing time by 70% through automation",
    problem:
      "Long response times for customer inquiries about service and parts, high costs of manual request handling, and lack of 24/7 support",
    solution:
      "Deployment of the Inbound Service & Parts Agent — an AI chatbot that handles service bookings, provides parts information, and calculates costs, all while integrating seamlessly with the CRM",
    result:
      "Overall request processing time decreased by 70%, and customer satisfaction increased by 40%. The solution reduced staff workload and improved their efficiency",
    // author: "Игорь Васильев",
    position: "Sales Manager",
    company: " Gorrud's Auto Group.",
    industry: "Automotive Sales",
    logo: "/assets/companies/auto_group.svg",
  },
  {
    quote: "Enhancing customer engagement efficiency by 50% with an all-in-one solution",
    problem:
      "Low lead conversion rates, missed opportunities due to the lack of a unified customer management tool, and high workload for sales and service staff",
    solution:
      "The comprehensive Auto Bundle solution, including lead management, automated customer communication via chatbots, multi-channel outreach (WhatsApp, SMS, email), CRM integration, and personalized recommendations based on data analysis",
    result:
      "Lead-to-sale conversion rates increased by 30%, missed inquiries dropped to zero, and team efficiency improved thanks to the automation of routine tasks",
    // author: "Анна Козлова",
    position: "CEO",
    company: "Walkerton Toyota",
    industry: "Automotive Sales",
    logo: "/assets/companies/toyota.svg",
  },
];

const TestimonialsSection = () => {
  const language = getPageLangUnit(heroTranslations);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Минимальное расстояние для свайпа
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    // Сброс значений
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    // Устанавливаем начальную ширину окна
    setWindowWidth(window.innerWidth);

    // Добавляем слушатель изменения размера окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideWidth = () => {
    if (windowWidth >= 1024) return 33.333;
    if (windowWidth >= 768) return 50;
    return 100;
  };

  const getMaxIndex = () => {
    if (windowWidth >= 1024) return testimonials.length - 3;
    if (windowWidth >= 768) return testimonials.length - 2;
    return testimonials.length - 1;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = getMaxIndex();
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      });
    }, 15000);

    return () => clearInterval(timer);
  }, [windowWidth]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = getMaxIndex();
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = getMaxIndex();
      return prevIndex === maxIndex ? 0 : prevIndex + 1;
    });
  };

  // Не рендерим слайдер, пока не определена ширина окна
  if (!windowWidth) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        {aboutTranslations[language].testimonials.title}
      </h2>
      <div className="relative md:container md:mx-auto">
        <div className="md:max-w-[90%] md:mx-auto w-full relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 lg:-translate-x-12 bg-gray-900/50 p-2 rounded-full hover:bg-gray-900/70 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-400" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex flex-row-reverse transition-transform duration-500 ease-in-out touch-pan-y"
              style={{ transform: `translateX(${currentIndex * getSlideWidth()}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {aboutTranslations[language].testimonials.items.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 md:px-1 lg:px-4 select-none"
                >
                  <div className="bg-gray-900/50 rounded-xl p-4 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-14 md:w-16 lg:w-20 h-14 md:h-16 lg:h-20 bg-white rounded-full flex items-center justify-center mr-3 md:mr-4 overflow-hidden">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            width={64}
                            height={64}
                            className="object-contain p-20.5 w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16"
                          />
                        ) : (
                          <div className="text-gray-400 text-base">[Logo]</div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-400 text-sm md:text-base lg:text-lg">
                          {item.company}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-400">{item.industry}</p>
                      </div>
                    </div>
                    <blockquote className="mb-4">
                      <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item.quote}</p>
                      <p className="text-gray-400 text-xs md:text-sm mb-2">
                        <span className="font-semibold text-red-500">
                          {aboutTranslations[language].testimonials.problem}:
                        </span>{" "}
                        {item.problem}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm mb-2">
                        <span className="font-semibold text-white">
                          {aboutTranslations[language].testimonials.solution}:
                        </span>{" "}
                        {item.solution}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        <span className="font-semibold text-green-500">
                          {aboutTranslations[language].testimonials.result}:
                        </span>{" "}
                        {item.result}
                      </p>
                    </blockquote>
                    <footer className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800">
                      <p className="text-xs md:text-sm text-gray-400">{item.position}</p>
                    </footer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 lg:translate-x-12 bg-gray-900/50 p-2 rounded-full hover:bg-gray-900/70 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6 text-emerald-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const language = getPageLangUnit(aboutTranslations);
  const translations = aboutTranslations[language];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      endValue: 56,
      suffix: "+",
      label: translations.stats.clients,
      duration: 3000,
      easing: "easeOutElastic",
    },
    {
      icon: <Award className="w-6 h-6" />,
      endValue: 99.9,
      suffix: "%",
      label: translations.stats.uptime,
      duration: 3500,
      easing: "easeOutQuart",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      endValue: 5,
      suffix: "+",
      label: translations.stats.countries,
      duration: 5000,
      easing: "easeOutBounce",
    },
    {
      icon: <Building className="w-6 h-6" />,
      endValue: 630,
      suffix: "+",
      label: translations.stats.solutions,
      duration: 4000,
      easing: "easeOutExpo",
    },
  ];

  const history = [
    {
      year: "2022",
      title: "The Beginning",
      description: "NeuroGen Lab started its journey, focusing on the development of AI solutions.",
    },
    {
      year: "2023",
      title: "First Success",
      description:
        "We launched our AI Agents for small and medium-sized businesses, earning the trust of clients in Ukraine, Germany, and Canada.",
    },
    {
      year: "2024",
      title: "Growth and Recognition",
      description:
        "The company successfully expanded its services, adding IT consulting, solutions for car dealerships, and business process automation.",
    },
    {
      year: "2025",
      title: "Official Establishment",
      description:
        "NeuroGen Lab was officially registered in Germany, embarking on a new phase of growth with a focus on scaling in the European market.",
    },
  ];

  const team = [
    {
      name: "Maksym Bezverkhyi",
      role: "CEO & Founder",
      bio: "AI Project Manager",
      image: "/assets/team/maksym.png",
      linkedin: "https://www.linkedin.com/in/maxim-bezverkhiy/",
    },
    {
      name: "Oleksandr Kulykov",
      role: "CTO",
      bio: "Fullstack Developer",
      image: "/assets/team/oleksandr.jpg",
      linkedin: "https://www.linkedin.com/in/oleksandr-kulykov/",
    },
    {
      name: "Liudmyla (Elle) Podolska",
      role: "AI Creator",
      bio: "Innovative 3D Designer",
      image: "/assets/team/liudmyla.jpg",
      linkedin: "https://www.linkedin.com/in/liudmyla-elle-podolska-644051220/",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const easingFunctions = {
    easeOutElastic: (t: number) => {
      const p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1;
    },
    easeOutQuart: (t: number) => 1 - Math.pow(1 - t, 4),
    easeOutBounce: (t: number) => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (t < 1 / d1) return n1 * t * t;
      if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
      if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    },
    easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || animationCompleted) return;

    let completedCounters = 0;

    stats.forEach((stat, index) => {
      const steps = 60;
      const stepDuration = stat.duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        if (currentStep === steps) {
          clearInterval(timer);
          completedCounters++;
          if (completedCounters === stats.length) {
            setAnimationCompleted(true);
          }
          return;
        }

        const progress = currentStep / steps;
        const easedProgress =
          easingFunctions[stat.easing as keyof typeof easingFunctions](progress);

        setCounters((prev) => {
          const newCounters = [...prev];
          const newValue = stat.endValue * easedProgress;
          newCounters[index] = Number(newValue.toFixed(1));
          return newCounters;
        });

        currentStep++;
      }, stepDuration);

      return () => clearInterval(timer);
    });
  }, [isVisible, animationCompleted]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <BackToHome />

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{translations.title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">{translations.subtitle}</p>
          </div>

          <Divider />

          {/* Stats */}
          <div id="stats-section" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group bg-gray-900/50 rounded-xl p-6 text-center hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="text-emerald-400 mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">
                  {Math.round(counters[index]).toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <TestimonialsSection />

          {/* История компании */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">{translations.history.title}</h2>
            <div className="max-w-4xl mx-auto">
              {translations.history.items.map((item, index) => (
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
            <h2 className="text-2xl font-bold mb-4">{translations.mission.title}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {translations.mission.description}
            </p>
          </div>

          <Divider />

          {/* Team Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">{translations.team.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="relative group bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden bg-gray-800">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        onError={(e) => {
                          console.error(`Error loading image for ${member.name}`);
                          e.currentTarget.src = "/assets/team/default-avatar.webp";
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center text-gray-400 p-4 text-center h-full">
                        [Фотография {member.name} - {member.role}]
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 transition-colors"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                    </div>
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
