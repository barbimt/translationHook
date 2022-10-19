import {useLanguage} from '../../hook/useLanguage'

const LanguageComponent = () => {

  const {language, translate, setLanguage} = useLanguage()
console.log(language);

  return (
    <div className={'language'}>
      <div
        onClick={() => setLanguage('SPANISH')}
        className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {translate('language.spanish')}
      </div>
      <button
        onClick={() => setLanguage('ENGLISH')}
        className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {translate('language.english')}
      </button>
      <button
        onClick={() => setLanguage('PORTUGUESE')}
        className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {translate('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
