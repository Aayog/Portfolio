'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aayogkoirala3@gmail.com',
    href: 'mailto:aayogkoirala3@gmail.com',
    description: 'Best for direct inquiries',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/Aayog',
    href: 'https://linkedin.com/in/Aayog',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Aayog',
    href: 'https://github.com/Aayog',
    description: 'See my code',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      className="py-28 bg-base relative overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background glow */}
      <div
        className="accent-glow w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25"
        aria-hidden="true"
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
            05 / Contact
          </span>
          <div className="w-12 h-px bg-amber-500 mt-3" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Let&apos;s Build
          <br />
          <span className="text-amber-500">Something.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-text-muted text-[17px] leading-[1.75] max-w-xl mb-16"
        >
          I&apos;m open to senior AI engineering roles, technical advisory, and interesting
          problems in regulated AI. If you&apos;re working on something that needs production
          rigor, let&apos;s talk.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col p-6 bg-surface border border-border rounded-xl hover:border-amber-500/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(245,158,11,0.06)]"
                aria-label={`${link.label}: ${link.value}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-200">
                    <Icon size={18} className="text-amber-500" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-text-muted group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                    aria-hidden="true"
                  />
                </div>

                <div className="font-mono text-xs text-text-muted mb-1 uppercase tracking-wider">
                  {link.label}
                </div>
                <div className="font-body text-sm text-text-body group-hover:text-white transition-colors duration-200 mb-1 break-all">
                  {link.value}
                </div>
                <div className="font-body text-xs text-text-muted mt-auto pt-3">
                  {link.description}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
