import React from 'react';
import { ShieldCheck, Server, Globe, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Expertco Website",
      tech: ["React", "Responsive UI", "Deployment"],
      desc: "Live client website for Expertco focused on sales growth and business strategy, with clear service messaging and conversion-oriented contact sections.",
      icon: <Server size={40} className="text-sky-500 dark:text-sky-400" aria-hidden />,
      url: "https://expertcoltd.com/",
      accent: "hover:border-sky-500/50 dark:hover:border-sky-400/50"
    },
    {
      title: "TPM Digital Growth Hub",
      tech: ["React", "Brand Website", "Deployment"],
      desc: "Live client platform for TPM Digital Growth Hub, built for digital growth and marketing solutions with a clean brand-forward presentation.",
      icon: <Globe size={40} className="text-emerald-500 dark:text-emerald-400" aria-hidden />,
      url: "https://tpmdigital.africa",
      accent: "hover:border-emerald-500/50 dark:hover:border-emerald-400/50"
    },
    {
      title: "Secure Personal Finance Manager",
      tech: ["Python", "MySQL", "Cryptography"],
      desc: "A security-focused application for managing personal finances with encrypted data storage, secure authentication, and expense tracking visualization.",
      icon: <ShieldCheck size={40} className="text-purple-500 dark:text-purple-400" aria-hidden />,
      accent: "hover:border-purple-500/50 dark:hover:border-purple-400/50"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10 sm:mb-12 flex items-center gap-3 transition-colors duration-300">
        <span className="w-8 h-1 bg-emerald-500 rounded-full" aria-hidden />
        Featured Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div key={project.title} className={`group bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 ${project.accent} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 shadow-sm dark:shadow-none`}>
            <div className="p-5 sm:p-8">
              <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg w-fit group-hover:bg-slate-200 dark:group-hover:bg-slate-800 transition-all duration-300 group-hover:scale-110">
                {project.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 sm:min-h-20 transition-colors duration-300">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Visit Live Site <ExternalLink size={16} aria-hidden />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
