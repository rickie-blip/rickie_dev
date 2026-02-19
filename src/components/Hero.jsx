import React from 'react';
import { ChevronRight, Database, Cloud, ShieldCheck, Terminal } from 'lucide-react';

const Hero = ({ setActiveTab }) => (
  <div className="min-h-screen flex items-center justify-center pt-20 sm:pt-16 relative overflow-hidden">
    {/* Background: subtle grid + gradients (theme-aware) */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20" />
    <div className="absolute top-20 right-0 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl -z-10 transition-colors duration-300" />
    <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10 transition-colors duration-300" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-purple-400/10 dark:bg-purple-500/5 rounded-full blur-3xl -z-10 transition-colors duration-300" />

    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
      {/* Terminal-style status bar */}
      <div className="inline-flex items-center flex-wrap justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 rounded-lg border border-slate-300/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm text-left mb-6 sm:mb-8 w-full max-w-md mx-auto font-mono text-xs sm:text-sm shadow-sm dark:shadow-none transition-colors duration-300">
        <Terminal size={16} className="text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
        <span className="text-slate-500 dark:text-slate-500">korir@portfolio:~</span>
        <span className="text-slate-600 dark:text-slate-400">$ status</span>
        <span className="terminal-cursor" aria-hidden />
      </div>

      <div className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/40 dark:border-emerald-500/30 bg-emerald-500/15 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6 shadow-sm transition-colors duration-300">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 mr-2 animate-pulse" aria-hidden />
        Available for Projects
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6 tracking-tight leading-tight transition-colors duration-300">
        Building Secure, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 dark:from-emerald-400 dark:via-emerald-300 dark:to-blue-500">
          Scalable Backend Systems
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
        I bridge the gap between complex backend logic and seamless frontend experiences.
        Specializing in Cloud Architecture, API Integration, and E-commerce Solutions using Python & Node.js.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button
          onClick={() => setActiveTab('projects')}
          className="w-full sm:w-auto px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all shadow-lg shadow-emerald-500/25 dark:shadow-emerald-500/20 flex items-center justify-center gap-2 hover:shadow-emerald-500/40 dark:hover:shadow-emerald-500/30"
        >
          View My Work <ChevronRight size={18} />
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className="w-full sm:w-auto px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-all bg-white/60 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800/70 shadow-sm"
        >
          Contact Me
        </button>
      </div>

      <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-slate-500 dark:text-slate-500 transition-colors duration-300">
        <div className="flex flex-col items-center gap-2">
          <Database size={24} className="text-emerald-500 dark:text-emerald-400" aria-hidden />
          <span className="text-sm">Backend Architecture</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Cloud size={24} className="text-blue-500 dark:text-blue-400" aria-hidden />
          <span className="text-sm">Cloud Systems</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck size={24} className="text-purple-500 dark:text-purple-400" aria-hidden />
          <span className="text-sm">Security First</span>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
