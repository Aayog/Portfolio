'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const thesisRef = useRef(null);
  const thesisInView = useInView(thesisRef, { once: true, margin: '-60px' });

  return (
    <section
      id="education"
      className="py-28 bg-surface relative"
      aria-label="Education and research section"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
              04 / Education & Research
            </span>
            <div className="w-12 h-px bg-amber-500 mt-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Academic Background
          </motion.h2>
        </div>

        {/* Education + Certifications row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-surface-2 border border-border rounded-xl p-7 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-amber-500" />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">Education</h3>
            </div>

            <div className="space-y-5">
              <div className="border-l-2 border-amber-500/30 pl-4">
                <div className="font-display font-semibold text-white text-base leading-tight mb-1">
                  Master of Science in Computer Science
                </div>
                <div className="font-body text-text-muted text-sm">Miami University</div>
              </div>
              <div className="border-l-2 border-border pl-4">
                <div className="font-display font-semibold text-white text-base leading-tight mb-1">
                  Bachelor of Science in Computer Science
                </div>
                <div className="font-body text-text-muted text-sm">Miami University</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="bg-surface-2 border border-border rounded-xl p-7 hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Award size={18} className="text-amber-500" />
              </div>
              <h3 className="font-display font-semibold text-white text-lg">Certifications</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: 'Microsoft Certified: Azure AI Engineer Associate',
                  code: 'AI-102',
                },
                {
                  name: 'ICAgile Certified Professional',
                  code: 'ICP',
                },
              ].map((cert) => (
                <div
                  key={cert.code}
                  className="flex items-start justify-between gap-4 p-3 rounded-lg bg-surface border border-border hover:border-amber-500/20 transition-colors duration-200"
                >
                  <div className="font-body text-text-body text-sm leading-snug">
                    {cert.name}
                  </div>
                  <span className="font-mono text-xs text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 shrink-0">
                    {cert.code}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Thesis / Research */}
        <motion.div
          ref={thesisRef}
          initial={{ opacity: 0, y: 30 }}
          animate={thesisInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="bg-surface-2 border border-border rounded-xl p-7 hover:border-zinc-600 transition-colors duration-300"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen size={18} className="text-amber-500" />
            </div>
            <div>
              <div className="font-mono text-xs text-amber-500 tracking-wider uppercase mb-2">
                Master&apos;s Thesis
              </div>
              <h3 className="font-display font-semibold text-white text-xl leading-snug">
                360° Panoramic View Synthesis via Depth-Based Multiplane Images
              </h3>
            </div>
          </div>

          <p className="font-body text-text-muted text-[16px] leading-[1.75] border-l-2 border-amber-500/20 pl-4 ml-13">
            Engineered a PyTorch framework for spherical view synthesis by constructing Multiplane
            Images from cube map projections and metric depth estimation (DepthAnything v2). Achieved
            comparable PSNR/SSIM scores versus a Google Research neural network MPI baseline,
            providing an efficient, interpretable alternative for VR/AR applications.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 ml-13">
            {['PyTorch', 'DepthAnything v2', 'Multiplane Images', 'PSNR/SSIM', 'VR/AR', 'Computer Vision'].map(
              (tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
