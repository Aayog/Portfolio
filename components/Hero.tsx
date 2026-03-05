'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center bg-base overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-pattern bg-dot-md opacity-100 pointer-events-none" />

      {/* Accent glow */}
      <div
        className="accent-glow w-[600px] h-[600px] -top-40 -right-40 opacity-60"
        aria-hidden="true"
      />
      <div
        className="accent-glow w-[400px] h-[400px] bottom-20 -left-20 opacity-40"
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Role badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
              Available for senior AI roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-4"
          >
            Aayog
            <br />
            <span className="text-amber-500">Koirala</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-text-body mb-8 tracking-tight"
          >
            Senior AI &amp; GenAI Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed mb-12 font-body"
          >
            I build production AI systems in regulated industries — from RAG pipelines and
            agentic workflows to enterprise-scale document intelligence.{' '}
            <span className="text-text-body">Banking. Healthcare. Insurance.</span>{' '}
            The hard stuff.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollTo('#experience')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-900 font-display font-semibold text-sm rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3 border border-border hover:border-amber-500/40 text-text-body hover:text-white font-display font-medium text-sm rounded transition-all duration-200 hover:bg-white/5 focus-visible:outline-none"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/Aayog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-200 text-sm font-body"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <div className="w-px h-4 bg-border" aria-hidden="true" />
            <a
              href="https://github.com/Aayog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-muted hover:text-white transition-colors duration-200 text-sm font-body"
              aria-label="GitHub profile"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
