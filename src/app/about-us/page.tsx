"use client";

import { Users, Award, Globe, Building, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import BackToHome from "../../components/BackToHome";
import Divider from "../../components/Divider";
import ScrollToTop from "../../components/ScrollToTop";
import Footer from "../../components/Footer";
import Image from "next/image";

const testimonials = [
  {
    quote: "Сокращение затрат на логистику на 200K € в год",
    problem: "Теряли 15% бюджета на логистику из-за неэффективного планирования маршрутов",
    solution: "Внедрение AI-системы оптимизации маршрутов",
    result: "Интеграция заняла 2 недели, ROI достигнут за 4 месяца",
    author: "Мария Иванова",
    position: "Директор по логистике",
    company: "ТрансГрупп",
    industry: "Транспорт и логистика",
    logo: "/assets/companies/rozumniki.svg"
  },
  {
    quote: "Автоматизация поддержки снизила нагрузку на 40%",
    problem: "Служба поддержки не справлялась с растущим потоком обращений",
    solution: "Внедрение AI-чатбота первой линии поддержки",
    result: "За 3 месяца автоматизировано 65% типовых запросов",
    author: "Александр Петров",
    position: "Head of Customer Service",
    company: "TechSupport Pro",
    industry: "IT Services",
    logo: "/assets/companies/pogruzchik.svg"
  },
  {
    quote: "Повышение эффективности производства на 35%",
    problem: "Высокий процент брака и простои оборудования",
    solution: "Предиктивная аналитика на базе AI",
    result: "Снижение брака на 80% за первые 6 месяцев",
    author: "Дмитрий Сидоров",
    position: "Технический директор",
    company: "ПромТех",
    industry: "Производство",
    logo: "/assets/companies/promtech.svg"
  },
  {
    quote: "Рост конверсии продаж на 25%",
    problem: "Низкая эффективность работы отдела продаж",
    solution: "AI-система анализа клиентских данных",
    result: "Увеличение среднего чека на 30% за 4 месяца",
    author: "Елена Смирнова",
    position: "Коммерческий директор",
    company: "SalesPro",
    industry: "Retail",
    logo: "/assets/companies/salespro.svg"
  },
  {
    quote: "Экономия 150K € на энергопотреблении",
    problem: "Высокие затраты на электроэнергию в офисных помещениях",
    solution: "AI-система управления энергопотреблением",
    result: "ROI достигнут за 8 месяцев использования",
    author: "Игорь Васильев",
    position: "Facility Manager",
    company: "EcoSmart Buildings",
    industry: "Управление недвижимостью",
    logo: "/assets/companies/ecosmart.svg"
  },
  {
    quote: "Оптимизация HR-процессов на 45%",
    problem: "Длительный процесс подбора персонала",
    solution: "AI-платформа для рекрутинга",
    result: "Сокращение времени закрытия вакансий на 60%",
    author: "Анна Козлова",
    position: "HR Director",
    company: "StaffMaster",
    industry: "HR Tech",
    logo: "/assets/companies/staffmaster.svg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Устанавливаем начальную ширину окна
    setWindowWidth(window.innerWidth);

    // Добавляем слушатель изменения размера окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
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
              className="flex transition-transform duration-1500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * getSlideWidth()}%)` }}
            >
              {testimonials.map((item, index) => (
                <div 
                  key={index} 
                  className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 md:px-1 lg:px-4"
                >
                  <div className="bg-gray-900/50 rounded-xl p-4 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 md:w-12 h-10 md:h-12 bg-gray-800 rounded-full flex items-center justify-center mr-3 md:mr-4 overflow-hidden">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={`${item.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        ) : (
                          <div className="text-gray-400 text-sm">[Logo]</div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-400 text-sm md:text-base">{item.company}</h3>
                        <p className="text-xs md:text-sm text-gray-400">{item.industry}</p>
                      </div>
                    </div>
                    <blockquote className="mb-4">
                      <p className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item.quote}</p>
                      <p className="text-gray-400 text-xs md:text-sm mb-2">
                        <span className="font-semibold">Проблема:</span> {item.problem}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm mb-2">
                        <span className="font-semibold">Решение:</span> {item.solution}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        <span className="font-semibold">Результат:</span> {item.result}
                      </p>
                    </blockquote>
                    <footer className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800">
                      <p className="font-semibold text-sm md:text-base">{item.author}</p>
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

          {/* Testimonials */}
          <TestimonialsSection />

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
