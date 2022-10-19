import { createContext } from 'react';
import Languages from 'features/language/language.types';
import { useState, FC, ReactNode } from 'react';
import esTranslations from 'data/i18n.es';
import enTranslations from 'data/i18n.en';
import ptTranslations from 'data/i18n.pt';

interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextProps {
  language: Languages;
  setLanguage: (language: Languages) => void;
  // LanguageSwitcher: (language: Languages) => void
  translate: (key: string) => string;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }: any) => {
  const [language, setLanguage] = useState<Languages>('ENGLISH' as Languages);

  const translate = (key: string) => {
    if (language === 'SPANISH') {
      return esTranslations[key];
    } else if (language === 'ENGLISH') {
      return enTranslations[key];
    } else if (language === 'PORTUGUESE') {
      return ptTranslations[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, translate, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
