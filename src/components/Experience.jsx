import React from 'react';
import { Briefcase, Code2, Server, Shield, Workflow } from 'lucide-react';

const Experience = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 sm:mb-12 flex items-center gap-3 transition-colors duration-300">
      <span className="w-8 h-1 bg-emerald-500 rounded-full" aria-hidden />
      Experience
    </h2>

    <div className="relative border-l-2 border-slate-300 dark:border-slate-800 ml-2 sm:ml-3 md:ml-6 space-y-10 sm:space-y-12 transition-colors duration-300">
      <div className="relative pl-6 sm:pl-8 md:pl-12">
        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-slate-50 dark:ring-slate-900" aria-hidden />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">Software Developer</h3>
          <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm bg-emerald-500/15 dark:bg-emerald-500/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
            2025 - Present
          </span>
        </div>

        <div className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium mb-4 flex items-center gap-2 transition-colors duration-300">
          <Briefcase size={18} className="text-slate-500" aria-hidden />
          Shop Zetu
        </div>

        <div className="bg-white dark:bg-slate-800/30 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm dark:shadow-none">
          <ul className="space-y-4 text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 p-1 rounded bg-slate-100 dark:bg-slate-700/50 text-emerald-500 dark:text-emerald-400 flex-shrink-0" aria-hidden>
                <Code2 size={16} />
              </span>
              <span>Developed and maintained scalable web applications using the <strong className="text-slate-800 dark:text-slate-200">React</strong> and <strong className="text-slate-800 dark:text-slate-200">Node.js</strong> ecosystem.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 p-1 rounded bg-slate-100 dark:bg-slate-700/50 text-blue-500 dark:text-blue-400 flex-shrink-0" aria-hidden>
                <Server size={16} />
              </span>
              <span>Executed complex Shopify integrations using both <strong className="text-slate-800 dark:text-slate-200">GraphQL</strong> and <strong className="text-slate-800 dark:text-slate-200">REST APIs</strong> to enhance platform capabilities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 p-1 rounded bg-slate-100 dark:bg-slate-700/50 text-emerald-500 dark:text-emerald-400 flex-shrink-0" aria-hidden>
                <Shield size={16} />
              </span>
              <span>Engineered backend services for critical modules including product catalog, order processing, and customer management.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 p-1 rounded bg-slate-100 dark:bg-slate-700/50 text-purple-500 dark:text-purple-400 flex-shrink-0" aria-hidden>
                <Workflow size={16} />
              </span>
              <span>Collaborated on DevOps tasks including deployment workflows, version control strategies, and overall system optimization.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
