export type Tag = 'AI Tooling' | 'Vercel' | 'React' | 'CSS' | 'Testing' | 'Performance' | 'Git' | 'TypeScript' | 'JavaScript' | 'Career';

export interface ResearchReport {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  tags: Tag[];
  summary: string;
  model: string;
  sources: string[];
  tabs: ResearchTab[];
}

export interface ResearchTab {
  id: string;
  label: string;
  num: string;
}

export const reports: ResearchReport[] = [
  {
    slug: 'claude-code-vercel-2026',
    title: 'Claude Code × Vercel',
    subtitle: 'The Developer Stack of 2026',
    date: '29 Mar 2026',
    readingTime: '~12 phút',
    tags: ['AI Tooling', 'Vercel'],
    model: 'Claude Opus 4.6 / Sonnet 4.6',
    sources: ['GitHub Changelog', 'Vercel Blog', 'InfoQ'],
    summary: 'Từ terminal agent đến production deployment — luồng từ claude tới vercel deploy đang được viết lại hoàn toàn. Report phân tích Mental Model, Code thực tế, Production Rules, Anti-patterns, So sánh Tools, và Vocab Boost.',
    tabs: [
      { id: 'architecture', label: 'Mental Model', num: '01' },
      { id: 'code', label: 'The Code', num: '02' },
      { id: 'rules', label: 'Production Rules', num: '03' },
      { id: 'antipatterns', label: 'Anti-patterns', num: '04' },
      { id: 'compare', label: 'Tool Comparison', num: '05' },
      { id: 'vocab', label: 'Vocab Boost', num: '06' },
    ],
  },
];

export function getReportBySlug(slug: string): ResearchReport | undefined {
  return reports.find((r) => r.slug === slug);
}

export const TAG_COLORS: Record<Tag, string> = {
  'AI Tooling': 'var(--accent-claude)',
  'Vercel': '#ffffff',
  'React': 'var(--accent-blue)',
  'CSS': 'var(--accent-purple)',
  'Testing': 'var(--accent-green)',
  'Performance': 'var(--accent-amber)',
  'Git': '#f87171',
  'TypeScript': 'var(--accent-blue)',
  'JavaScript': 'var(--accent-amber)',
  'Career': 'var(--accent-green)',
};
