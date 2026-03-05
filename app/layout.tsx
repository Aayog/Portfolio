import type { Metadata } from 'next';
import { Sora, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Aayog Koirala — Senior AI & GenAI Engineer',
  description:
    'Senior AI and GenAI Engineer building production AI systems in regulated industries — banking, healthcare, and insurance. RAG pipelines, agentic workflows, LLM architectures.',
  keywords: [
    'AI Engineer',
    'GenAI Engineer',
    'LLM',
    'RAG',
    'LangGraph',
    'MCP',
    'Machine Learning',
    'FastAPI',
    'Azure OpenAI',
    'Aayog Koirala',
  ],
  authors: [{ name: 'Aayog Koirala' }],
  creator: 'Aayog Koirala',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aayogkoirala.com',
    title: 'Aayog Koirala — Senior AI & GenAI Engineer',
    description:
      'Senior AI and GenAI Engineer building production AI systems in regulated industries.',
    siteName: 'Aayog Koirala',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aayog Koirala — Senior AI & GenAI Engineer',
    description:
      'Senior AI and GenAI Engineer building production AI systems in regulated industries.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} bg-base text-text-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
