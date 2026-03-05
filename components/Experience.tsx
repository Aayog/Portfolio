'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Role {
  title: string;
  company: string;
  location: string;
  dates: string;
  current?: boolean;
  summary: string;
  achievements: string[];
  tech: string[];
}

const roles: Role[] = [
  {
    title: 'Senior AI and GenAI Engineer',
    company: 'Western Alliance Bank',
    location: 'Phoenix, AZ (Remote)',
    dates: 'Feb 2024 — Present',
    current: true,
    summary:
      'Leading delivery of production-grade AI capabilities for finance-domain workflows. Architecting LLM-backed document processing, RAG retrieval, and agentic automation under strict regulatory constraints.',
    achievements: [
      'Designed end-to-end LLM systems for financial document ingestion, classification, extraction, and summarization under compliance constraints',
      'Architected RAG pipelines with Weaviate achieving sub-second retrieval of financial policies and historical records via hybrid dense vector + metadata filtering',
      'Built agentic AI workflows using LangGraph and MCP for stateful multi-step document auditing with standardized tool integration',
      'Deployed intelligent routing logic for financial transaction approvals, significantly reducing manual review volume',
      'Integrated DeepEval quality gates into CI/CD, enforcing faithfulness and relevancy checks on LLM outputs before release',
      'Owned architecture decisions balancing model accuracy, latency, cost ceilings, and regulatory expectations',
    ],
    tech: ['Azure OpenAI', 'AWS Bedrock', 'LangGraph', 'MCP', 'Weaviate', 'FastAPI', 'Spark', 'Databricks', 'MLflow', 'DeepEval', 'Docker', 'Kubernetes'],
  },
  {
    title: 'AI Engineer',
    company: 'C3 AI',
    location: 'Redwood City, CA',
    dates: 'May 2022 — Feb 2024',
    summary:
      'Applied AI and data engineering role focused on Python-driven data foundations and backend workflows, transitioning into LLM evaluation and early generative AI initiatives.',
    achievements: [
      'Engineered scalable Python services for processing and enriching large structured/semi-structured datasets for production AI workloads',
      'Led controlled experiments benchmarking GPT-style models against legacy NLP systems with custom quantitative comparison tooling',
      'Developed prompt structuring strategies to stabilize model outputs and reduce hallucinations during experimental LLM phase',
      'Supported NLP-based text processing for classification, summarization, and information extraction',
      'Containerized key workflows for consistent execution across environments',
    ],
    tech: ['Python', 'NLP', 'GPT Models', 'Prompt Engineering', 'CI/CD', 'Docker'],
  },
  {
    title: 'Data & Applied Analytics Engineer',
    company: 'Ardent Health',
    location: 'Nashville, TN',
    dates: 'Jul 2021 — May 2022',
    summary:
      'Built data pipelines and applied analytics in healthcare, processing sensitive records under strict data handling requirements with early ML and NLP initiatives.',
    achievements: [
      'Built data ingestion and transformation pipelines for sensitive structured and semi-structured healthcare records',
      'Implemented rule-based and classical NLP for document tagging, keyword extraction, and text classification',
      'Designed data models and quality checks supporting analytics, reporting, and early AI-adjacent workflows',
      'Enforced deterministic behavior and reproducibility due to regulatory sensitivity',
      'Integrated pipelines with backend systems while enforcing access controls and audit expectations',
    ],
    tech: ['Python', 'NLP', 'Data Pipelines', 'Docker', 'CI/CD', 'Data Governance'],
  },
  {
    title: 'Software and Data Engineer',
    company: 'Westfield Insurance',
    location: 'Westfield Center, OH',
    dates: 'Jun 2020 — Jul 2021',
    summary:
      'Backend and data-focused engineering supporting data-intensive applications, ETL workflows, and operational systems in insurance.',
    achievements: [
      'Developed Python services for processing, validating, and transforming structured datasets for reporting and operational systems',
      'Designed and maintained ETL workflows ingesting data from multiple upstream sources',
      'Built and optimized SQL queries and data models for analytics and reconciliation',
      'Implemented validation checks and logging for upstream data quality monitoring',
    ],
    tech: ['Python', 'SQL', 'ETL', 'Data Pipelines', 'Backend Services'],
  },
];

function RoleCard({ role, index }: { role: Role; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Timeline dot (desktop) */}
      <div
        className="absolute -left-[41px] top-6 w-4 h-4 rounded-full border-2 border-border bg-base group-hover:border-amber-500 transition-colors duration-300 hidden lg:block"
        aria-hidden="true"
      >
        {role.current && (
          <div className="absolute inset-1 rounded-full bg-amber-500 animate-pulse" />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
        className="bg-surface border border-border rounded-xl p-7 hover:border-zinc-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.04)]"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h3 className="font-display font-semibold text-xl text-white leading-tight">
                {role.title}
              </h3>
              {role.current && (
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-body font-medium text-text-body">{role.company}</span>
              <span className="text-border" aria-hidden="true">·</span>
              <span className="font-body text-text-muted">{role.location}</span>
            </div>
          </div>
          <span className="font-mono text-xs text-text-muted shrink-0 mt-1 px-3 py-1 bg-surface-2 rounded border border-border">
            {role.dates}
          </span>
        </div>

        {/* Summary */}
        <p className="font-body text-text-muted text-[15px] leading-relaxed mb-6 border-l-2 border-amber-500/20 pl-4">
          {role.summary}
        </p>

        {/* Achievements */}
        <ul className="space-y-2.5 mb-7" aria-label="Key achievements">
          {role.achievements.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm font-body text-text-muted leading-relaxed">
              <span className="text-amber-500 mt-1.5 shrink-0 text-xs" aria-hidden="true">▸</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2" aria-label="Technologies used">
          {role.tech.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      id="experience"
      className="py-28 bg-surface relative"
      aria-label="Experience section"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
              02 / Experience
            </span>
            <div className="w-12 h-px bg-amber-500 mt-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Career Timeline
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/30 via-border to-transparent hidden lg:block"
            style={{ left: '-41px', marginLeft: '7px' }}
            aria-hidden="true"
          />

          <div className="lg:pl-8 space-y-8">
            {roles.map((role, i) => (
              <RoleCard key={role.company + role.dates} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
