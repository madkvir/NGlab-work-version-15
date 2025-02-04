import { useRouter } from 'next/router';
import { guideTranslations } from '../locales/guideTranslations';

export const useTranslations = () => {
  const router = useRouter();
  const locale = (router.locale || 'en') as keyof typeof guideTranslations;
  
  return {
    t: guideTranslations[locale] || guideTranslations.en // fallback to English if translation not found
  };
}; 