'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '5+', label: 'Years in Production AI' },
  { value: '4', label: 'Regulated Industries' },
  { value: '3', label: 'Cloud Platforms (Azure, AWS, GCP)' },
];

function StatCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      className="flex-1 min-w-[140px] px-6 py-5 bg-surface-2 border border-border rounded-lg text-center hover:border-amber-500/20 transition-colors duration-300"
    >
      <div className="font-display text-3xl font-bold text-amber-500 mb-1">{value}</div>
      <div className="font-body text-sm text-text-muted leading-snug">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-28 bg-base relative" aria-label="About section">
      {/* Subtle accent glow */}
      <div
        className="accent-glow w-[500px] h-[500px] -top-20 -left-40 opacity-30"
        aria-hidden="true"
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
            01 / About
          </span>
          <div className="w-12 h-px bg-amber-500 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          {/* Text content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Building AI that works
              <br />
              <span className="text-text-muted font-light">where it has to.</span>
            </motion.h2>

            <div className="space-y-5 max-w-2xl">
              {[
                "I'm a Senior AI and GenAI Engineer with 5+ years building production AI systems across financial services, healthcare, and insurance. My work lives at the intersection of LLM architectures, data engineering, and regulated deployment — where \"it works in a notebook\" means absolutely nothing.",
                "I've designed RAG pipelines that serve sub-second financial document retrieval, built agentic workflows using LangGraph and MCP for multi-step document auditing, and shipped LLM-backed systems that operate under compliance constraints most engineers never have to think about. I'm a backend-first engineer: Python, FastAPI, Spark, and whatever infrastructure the problem demands.",
                "Before GenAI was a buzzword, I was building data pipelines, classical ML models, and NLP systems. That foundation is why my LLM systems actually work in production — I know what breaks, what scales, and what auditors ask about.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="font-body text-text-muted leading-[1.75] text-[17px]"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Decorative vertical line (desktop) */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            animate={inView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block w-px bg-gradient-to-b from-transparent via-border to-transparent self-stretch origin-top"
            aria-hidden="true"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
