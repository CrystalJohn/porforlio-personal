export interface Module {
  slug: string;
  num: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  status: 'available' | 'coming-soon';
  source: string;
}

export const MODULES: Module[] = [
  { slug: 'mental-model', num: '01', title: 'Mental Model', description: 'Data flow từ Prompt → Production. Architecture của Claude Code × Vercel stack.', icon: '🧠', accent: 'var(--accent-claude)', status: 'available', source: 'Migrated from Intelligence Report' },
  { slug: 'code-examples', num: '02', title: 'The Code', description: 'CLAUDE.md, Vercel AI SDK, API Routes, Agent Teams — code thực tế dùng ngay hôm nay.', icon: '⚡', accent: 'var(--accent-amber)', status: 'available', source: 'Migrated from Intelligence Report' },
  { slug: 'production-rules', num: '03', title: 'Production Rules', description: 'API key security, Edge Runtime, rate limiting, input validation — những thứ tutorial không nói.', icon: '🔐', accent: 'var(--accent-green)', status: 'available', source: 'Migrated from Intelligence Report' },
  { slug: 'anti-patterns', num: '04', title: 'Anti-patterns', description: 'Fresher vs Senior code. 4 lỗi phổ biến khi làm việc với AI tools.', icon: '⚠️', accent: 'var(--accent-blue)', status: 'available', source: 'Migrated from Intelligence Report' },
  { slug: 'tool-comparison', num: '05', title: 'Tool Comparison', description: 'Claude Code vs Cursor vs Copilot vs Windsurf. v0 vs Lovable vs Bolt.', icon: '📊', accent: 'var(--accent-purple)', status: 'available', source: 'Migrated from Intelligence Report' },
  { slug: 'vocabulary', num: '06', title: 'Vocab Boost', description: '5 terms quan trọng nhất: Agentic, Edge Runtime, Context Window, Prompt Injection, Streaming.', icon: '📚', accent: 'var(--accent-claude)', status: 'available', source: 'Migrated from Intelligence Report' },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return MODULES.find((m) => m.slug === slug);
}
