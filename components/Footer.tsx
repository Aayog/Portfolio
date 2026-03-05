'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <div className="section-container py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded border border-amber-500/30 flex items-center justify-center bg-amber-500/5" aria-hidden="true">
              <span className="font-display font-bold text-xs text-amber-500">AK</span>
            </div>
            <span className="font-body text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Aayog Koirala. All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/Aayog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/Aayog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:aayogkoirala3@gmail.com"
              className="text-text-muted hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <span className="text-border" aria-hidden="true">|</span>

            <span className="font-mono text-xs text-text-muted">
              Built with Next.js
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
