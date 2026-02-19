import React from 'react';
import { Mail, ExternalLink, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => (
  <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
    <div className="text-center mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-center gap-3 transition-colors duration-300">
        <span className="w-8 h-1 bg-emerald-500 rounded-full" aria-hidden />
        Get In Touch
      </h2>
      <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
        I'm currently open to new opportunities in Backend Development and Cloud Architecture.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
    </div>

    <div className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm overflow-hidden shadow-xl shadow-slate-200/30 dark:shadow-slate-950/30 transition-colors duration-300">
      <div className="p-4 sm:p-8 space-y-4 sm:space-y-6">
        <a
          href="mailto:contact@rickiedale0@gmail.com"
          className="flex items-center p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group"
        >
          <div className="p-3 bg-white dark:bg-slate-900 rounded-lg mr-4 group-hover:bg-emerald-500/10 transition-colors shadow-sm dark:shadow-none">
            <Mail size={24} className="text-emerald-500 dark:text-emerald-400" aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white transition-colors duration-300">Email Me</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm break-all">contact@rickiedale0@gmail.com</p>
          </div>
          <ExternalLink size={20} className="text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 flex-shrink-0 transition-colors duration-300" aria-hidden />
        </a>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/derrick-korir-0aab02280/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group"
          >
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg mr-4 group-hover:bg-blue-500/10 transition-colors shadow-sm dark:shadow-none">
              <Linkedin size={24} className="text-blue-500 dark:text-blue-400" aria-hidden />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-medium transition-colors duration-300">LinkedIn</h3>
              <p className="text-xs text-slate-500">Connect professionally</p>
            </div>
          </a>
          <a
            href="https://github.com/rickie-blip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group"
          >
            <div className="p-3 bg-white dark:bg-slate-900 rounded-lg mr-4 group-hover:bg-emerald-500/10 transition-colors shadow-sm dark:shadow-none">
              <Github size={24} className="text-slate-700 dark:text-slate-200" aria-hidden />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-medium transition-colors duration-300">GitHub</h3>
              <p className="text-xs text-slate-500">View my code</p>
            </div>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-3 text-slate-500 dark:text-slate-400 rounded-xl bg-slate-100 dark:bg-slate-900/30 py-4 border border-slate-200 dark:border-slate-700/50 transition-colors duration-300">
          <MapPin size={20} className="text-emerald-500 flex-shrink-0" aria-hidden />
          <span>Based in <span className="text-slate-900 dark:text-white font-medium">Nairobi, Kenya</span></span>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
