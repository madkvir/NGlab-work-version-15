
import { useRouter } from '../i18n/routing';
import { guideTranslations } from '../locales/guideTranslations';

export const useTranslations = () => {
  const router = useRouter();
  const locale = (router.locale || 'en') as keyof typeof guideTranslations;
  
  return {
    t: guideTranslations[locale] || guideTranslations.en // fallback to English if translation not found
  };
}; 