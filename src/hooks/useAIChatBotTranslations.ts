import { useParams } from 'next/navigation';
import { aiChatBotTranslations } from '../locales/ai-chat-bot/translations';
import getPageLangUnit from '../utils/getPageLangUnit';

export const useAIChatBotTranslations = () => {
  const language = getPageLangUnit(aiChatBotTranslations);
  const t = aiChatBotTranslations[language as keyof typeof aiChatBotTranslations] || aiChatBotTranslations.en;

  return { 
    t, 
    language,
    articleContent: t.articleContent 
  };
}; 