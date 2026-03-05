'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Applied AI & Generative AI',
    icon: '⬡',
    skills: [
      'LLM Integration',
      'LangGraph',
      'Model Context Protocol (MCP)',
      'Prompt Engineering',
      'RAG Pipelines',
      'Embeddings & Vector Search',
      'Fine-Tuning',
      'Agentic Workflows',
      'Document Intelligence',
    ],
  },
  {
    title: 'Machine Learning & NLP',
    icon: '◈',
    skills: [
      'PyTorch',
      'Scikit-learn',
      'Spacy',
      'Feature Engineering',
      'Supervised/Unsupervised Modeling',
      'Classical ML Baselines',
      'A/B Testing',
      'Cross-Validation',
    ],
  },
  {
    title: 'Programming & Backend',
    icon: '◻',
    skills: [
      'Python',
      'PostgreSQL',
      'SQL',
      'FastAPI',
      'REST APIs',
      'Async Processing',
      'Service Orchestration',
    ],
  },
  {
    title: 'Data Engineering & Pipelines',
    icon: '⬢',
    skills: ['Spark', 'Databricks', 'Kafka', 'Airflow', 'Batch & Near-Real-Time Pipelines', 'ETL'],
  },
  {
    title: 'MLOps & Deployment',
    icon: '◉',
    skills: [
      'CI/CD for AI/GenAI',
      'MLflow',
      'Docker',
      'Kubernetes',
      'Canary Releases',
      'Prometheus',
      'Grafana',
      'ELK',
      'OpenTelemetry',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '◌',
    skills: [
      'Azure OpenAI',
      'Azure ML',
      'AWS Bedrock',
      'AWS Compute & Storage',
      'GCP',
      'Terraform',
      'ARM Templates',
      'CDK',
    ],
  },
  {
    title: 'Datastores',
    icon: '▣',
    skills: ['PostgreSQL', 'Weaviate', 'pgvector', 'Redis', 'NoSQL'],
  },
  {
    title: 'Security & Compliance',
    icon: '◆',
    skills: [
      'IAM',
      'Secrets Management',
      'Encryption',
      'Audit Logging',
      'Secure API Design',
      'DevSecOps',
      'Compliance-Aware AI Delivery',
    ],
  },
];

function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-surface border border-border rounded-xl p-6 hover:border-zinc-600 transition-colors duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="text-amber-500 text-lg font-mono" aria-hidden="true">
          {category.icon}
        </span>
        <h3 className="font-display font-semibold text-white text-sm leading-tight">
          {category.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <span key={skill} role="listitem" className="tech-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="py-28 bg-base relative" aria-label="Skills section">
      <div
        className="accent-glow w-[500px] h-[500px] top-1/2 -right-40 opacity-20"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="font-mono text-xs text-amber-500 tracking-widest uppercase">
              03 / Skills
            </span>
            <div className="w-12 h-px bg-amber-500 mt-3" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-text-muted max-w-xl text-[17px] leading-relaxed"
          >
            A production-hardened stack built across regulated industries — not a list of tutorials completed.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
