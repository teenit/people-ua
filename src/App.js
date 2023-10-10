import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import { useTranslation } from 'react-i18next';
import useLocalStorage from './hooks/use-localstorage';
function App() {
  const {t} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ua');
  return (
    <div>
      <Header t={t}/>
      <Content t={t}/>
      <Footer t={t}/>
    </div>
  );
}

export default App;
