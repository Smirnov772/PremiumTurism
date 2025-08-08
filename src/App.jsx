import React, { Suspense, useEffect }  from "react";

import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";

import "./App.css";
function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    // Устанавливаем атрибуты lang и dir
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    // Добавляем класс для RTL стилей
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [i18n.language, isRTL]);
  return (
      <Suspense fallback={<div>Loading...</div>}>
    <Router>
        <Routes>

          <Route path="/" element={<Home />} />
        </Routes>
    </Router></Suspense>
  );
}

export default App;
