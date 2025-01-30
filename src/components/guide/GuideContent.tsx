"use client";
import React, { useState } from "react";
import { 
  Book, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  PlayCircle, 
  MessageCircle,
  Users,
  Database,
  Settings,
  Activity,
  Shield,
  Clock,
  Smile
} from "lucide-react";
import Link from "next/link";
import BackToHome from "../BackToHome";
import IconWrapper from "../common/IconWrapper";
import GuideSidebar from "./GuideSidebar";

interface StageContent {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

type StageContentMap = {
  [key: string]: StageContent;
};

const stageContent: StageContentMap = {
  stage1: {
    title: "С ЧЕГО НАЧИНАЕМ",
    subtitle: "Первая встреча (Знакомство)",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Почему это важно?</h3>
        <p className="text-gray-400 mb-6">
          Мы стремимся понять, в чём именно ваш бизнес силён, а где возникают
          сложности. Можно сказать, что мы проводим «диагностику»: выясняем,
          какие задачи наиболее критичны.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Что делаем мы?</h3>
        <p className="text-gray-400">
          Расспрашиваем о ваших целях, анализируем основные проблемы. Хотите
          автоматизировать работу с клиентами? Или, может быть, упростить
          внутренние процессы? На этом этапе мы определяем приоритеты.
        </p>
      </>
    )
  },
  stage2: {
    title: "КАК ПРОХОДИТ РАБОТА",
    subtitle: "Процесс разработки",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Этапы работы</h3>
        <p className="text-gray-400 mb-6">
          На этом этапе мы погружаемся в процессы вашей компании и начинаем
          разработку решений.
        </p>
      </>
    )
  },
  stage3: {
    title: "КАКИЕ УЛУЧШЕНИЯ",
    subtitle: "Результаты внедрения",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Что улучшается</h3>
        <p className="text-gray-400 mb-6">
          После внедрения наших решений вы заметите значительные улучшения в
          работе компании.
        </p>
      </>
    )
  },
  stage4: {
    title: "РЕЗУЛЬТАТЫ",
    subtitle: "Итоги внедрения",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Финальный этап</h3>
        <p className="text-gray-400 mb-6">
          На этом этапе мы анализируем результаты внедрения и планируем
          дальнейшее развитие.
        </p>
      </>
    )
  }
};

const GuideContent = () => {
  const [activeStage, setActiveStage] = useState('stage1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-gray-900" />
      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-colors"
            >
              ← На главную
            </Link>
          </div>

          {/* Header section */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6">
              <IconWrapper icon={Book} className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              ИНСТРУКЦИЯ ПО ВНЕДРЕНИЮ ИИ
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Представьте, что ваш бизнес — это целая экосистема, в которой каждая часть важна. 
              Наша задача — дополнить эту экосистему «умным помощником», который возьмёт на себя 
              рутинные задачи и поможет компании расти.
            </p>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden mb-8">
            <button 
              className="w-full p-4 bg-gray-800/50 text-emerald-400 rounded-lg hover:bg-gray-800/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 'Скрыть меню' : 'Показать меню'}
            </button>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
              <GuideSidebar activeStage={activeStage} setActiveStage={(stage) => {
                setActiveStage(stage);
                setIsMobileMenuOpen(false);
              }} />
            </div>
            
            <div className="flex-1 max-w-full md:max-w-3xl">
              <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                  {stageContent[activeStage].title}
                </h2>
                <h3 className="text-xl text-gray-200 mb-8">
                  {stageContent[activeStage].subtitle}
                </h3>
                {stageContent[activeStage].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideContent; 