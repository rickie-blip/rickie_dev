import React from 'react';
import { GraduationCap, Code } from 'lucide-react';
import portfolioImage from '../../Images/portfolio.png';

const About = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3 transition-colors duration-300">
      <span className="w-8 h-1 bg-emerald-500 rounded-full" aria-hidden />
      About Me
    </h2>

    <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 items-start">
      <div className="lg:col-span-2 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
        <p>
          Hello! I'm <span className="text-slate-900 dark:text-white font-semibold">Korir Derrick</span>, a results-driven Software Developer based in{' '}
          <span className="text-slate-900 dark:text-white font-semibold">Nairobi, Kenya</span>.
        </p>
        <p>
          My journey in tech is defined by a passion for building robust engines that power modern web applications.
          While I am comfortable across the full stack, my true expertise lies in the{' '}
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">backend</span> - designing efficient APIs, managing databases, and ensuring systems are secure and scalable.
        </p>
        <p>
          Currently, I work at <span className="text-slate-900 dark:text-white font-semibold">Shop Zetu</span>, where I integrate complex e-commerce platforms
          and build custom services that handle critical business data. I believe that good code is not just about functionality,
          but about reliability and maintainability.
        </p>

        <div className="pt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">Education</h3>
          <div className="bg-white dark:bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-4 shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500 dark:text-emerald-400">
              <GraduationCap size={24} aria-hidden />
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-medium">Bachelor of Information Technology</h4>
              <p className="text-slate-500 dark:text-slate-400">KCA University</p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Class of 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 lg:sticky lg:top-24">
        <div className="bg-white dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none transition-colors duration-300">
          <img
            src={portfolioImage}
            alt="Korir Derrick"
            className="w-full h-auto rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        <div className="bg-white dark:bg-slate-800/50 p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-none transition-colors duration-300">
          <h3 className="text-slate-900 dark:text-white font-semibold mb-4 flex items-center gap-2 transition-colors duration-300">
            <Code size={18} className="text-emerald-500 dark:text-emerald-400" aria-hidden /> Tech Stack
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">Languages</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'SQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">Backend</p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Flask', 'REST APIs', 'GraphQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind', 'HTML/CSS'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Linux', 'MySQL', 'Shopify APIs'].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm transition-colors duration-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
