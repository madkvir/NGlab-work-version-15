"use client";
import React from "react";
import Image from "next/image";
import AIChatBotTemplate from "../../../../components/tools/ai-chat-bot/AIChatBotTemplate";

const AIChatBot = () => {
  return (
    <AIChatBotTemplate
      imageComponent={
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300"
            role="presentation"
          >
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/assets/tools/ai-chat-bot.jpg"
                alt="AI Chat Bot Interface"
                fill
                className="object-cover"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AIChatBot;
