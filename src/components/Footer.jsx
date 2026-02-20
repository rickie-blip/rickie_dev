import React, { useMemo } from 'react';
import { Terminal } from 'lucide-react';
import devLogo from '../../Images/Dev logo.png';

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <img src={devLogo} alt="Dev logo" className="h-8 w-8 rounded-md object-cover" loading="lazy" />
          <Terminal size={20} className="text-emerald-500 dark:text-emerald-500" aria-hidden />
          <span className="text-slate-800 dark:text-slate-200 font-bold transition-colors duration-300">Korir Derrick</span>
        </div>
        <p className="text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors duration-300">
          Modern Tech Brand
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-2 transition-colors duration-300">
          © {currentYear} Derrick Korir.
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-1 transition-colors duration-300">
          Building secure, scalable digital solutions that power modern businesses.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
