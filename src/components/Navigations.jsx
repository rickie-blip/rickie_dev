import React, { useState, useMemo } from 'react';
import { Menu, X, Sun, Moon, ChevronRight } from 'lucide-react';

const Logo = ({ className = '' }) => (
  <span className={`font-bold text-lg sm:text-xl tracking-tight font-mono ${className}`}>
    <span className="text-emerald-500 dark:text-emerald-400">&gt;_</span>
    <span className="text-slate-900 dark:text-white"> Korir</span>
    <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
  </span>
);

const Navigation = ({ activeTab, setActiveTab, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ], []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const closeMenu = () => setIsOpen(false);

  const goTo = (tab) => {
    setActiveTab(tab);
    closeMenu();
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-200/20 dark:shadow-slate-950/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => setActiveTab('home')}
            onKeyDown={(e) => e.key === 'Enter' && setActiveTab('home')}
            className="flex-shrink-0 flex items-center cursor-pointer focus:outline-none"
            aria-label="Go to home page"
          >
            <Logo />
          </button>

          <div className="hidden md:flex items-center gap-2">
            <div className="ml-6 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-emerald-600 dark:text-emerald-400 bg-slate-200 dark:bg-slate-800'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu: full panel with logo, links, and CTAs like reference */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 z-40 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-col transition-colors duration-300 overflow-y-auto"
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => goTo('home')}
              className="focus:outline-none"
              aria-label="Go to home"
            >
              <Logo className="text-xl sm:text-2xl" />
            </button>
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  activeTab === item.id
                    ? 'text-emerald-500 dark:text-emerald-400 bg-slate-200/80 dark:bg-slate-800'
                    : 'text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="p-4 pt-2 pb-6 space-y-3 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => goTo('projects')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg shadow-emerald-500/20"
            >
              View My Work <ChevronRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => goTo('contact')}
              className="w-full px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-white font-semibold transition-all hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
