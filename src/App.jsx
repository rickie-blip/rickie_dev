import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigations';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const THEME_KEY = 'portfolio-theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to document and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (_) {}
  }, [theme]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Hero setActiveTab={setActiveTab} />;
      case 'about': return <About />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} setTheme={setTheme} />
      
      <main className="pt-16 pb-12 min-h-screen">
        <div key={activeTab} className="animate-in">
          {renderContent()}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
