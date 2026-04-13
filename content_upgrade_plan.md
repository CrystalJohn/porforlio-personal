# 🎯 Knowledge Base Upgrade Plan
## Frontend Fresher → Junior Roadmap

---

## 1. SWOT Analysis — Nội dung hiện tại

### 🟢 Strengths (Điểm mạnh)

| # | Điểm mạnh | Chi tiết |
|---|-----------|----------|
| S1 | **AI Tooling chuyên sâu** | Nội dung về Claude Code, Vercel AI SDK, Agent Teams rất chi tiết và thực tế — vượt xa level fresher thông thường |
| S2 | **Production mindset sớm** | Tab "Production Rules" dạy bảo mật, rate limiting, validation — kiến thức senior mà fresher thường bỏ qua |
| S3 | **Anti-pattern format hiệu quả** | So sánh Fresher vs Senior code trực quan, giúp nhận ra lỗi nhanh |
| S4 | **Architecture thinking** | Mental Model tab dạy tư duy end-to-end (Prompt → Production) — quý hiếm ở level fresher |
| S5 | **Vocabulary section** | Giúp đọc docs tiếng Anh và giao tiếp với team quốc tế |

### 🔴 Weaknesses (Điểm yếu)

| # | Điểm yếu | Mức độ nghiêm trọng | Giải thích |
|---|----------|---------------------|------------|
| W1 | **Thiếu hoàn toàn Frontend Fundamentals** | 🔴 Critical | Không có HTML/CSS/JS core. Fresher cần nền tảng trước khi dùng AI tools |
| W2 | **Thiếu React/Next.js fundamentals** | 🔴 Critical | Code ví dụ dùng `useChat`, `streamText` nhưng không giải thích React hooks cơ bản, component lifecycle, state management |
| W3 | **Thiếu Git workflow cơ bản** | 🟡 High | Nói về PR, branch nhưng không dạy `git add`, `git commit`, conflict resolution |
| W4 | **Thiếu Soft Skills** | 🟡 High | Không có communication, code review etiquette, task estimation, daily standup |
| W5 | **Thiếu Testing fundamentals** | 🟡 High | Nói "viết tests" nhưng không dạy unit test, integration test, testing library |
| W6 | **Thiếu CSS/Responsive Design** | 🔴 Critical | Frontend dev mà không có Flexbox, Grid, media queries, mobile-first |
| W7 | **Thiếu TypeScript basics** | 🟡 High | Code ví dụ dùng TS nhưng không giải thích types, interfaces, generics |
| W8 | **Thiếu Performance & Accessibility** | 🟡 Medium | Không có Lighthouse, Core Web Vitals, ARIA, semantic HTML |
| W9 | **Thiếu Career Development** | 🟡 Medium | Không có STAR method cho interview, portfolio building, networking |
| W10 | **Nội dung quá niche** | 🟡 High | 100% focus vào AI tooling — recruiter sẽ hỏi về DOM manipulation, event handling, HTTP basics trước |

### 🟡 Opportunities (Cơ hội)

| # | Cơ hội | Impact |
|---|--------|--------|
| O1 | **AI-augmented learning** | Dùng chính Claude Code để học nhanh hơn — practice coding với AI feedback loop |
| O2 | **Market demand 2026** | Frontend + AI integration là skill set hot nhất — knowledge base hiện tại đi đúng hướng tương lai |
| O3 | **Portfolio differentiation** | Fresher biết AI tooling + production mindset = nổi bật so với peers |
| O4 | **Full-stack pivot** | Nền tảng Vercel + Next.js mở đường sang full-stack nếu muốn |
| O5 | **Open source contribution** | Có thể contribute vào Vercel AI SDK, shadcn/ui — xây dựng GitHub profile |

### 🔴 Threats (Rủi ro)

| # | Rủi ro | Mitigation |
|---|--------|------------|
| T1 | **Tool dependency** | Nếu chỉ biết dùng AI tools mà không hiểu fundamentals → không debug được khi AI sai |
| T2 | **Interview gap** | Phỏng vấn junior hỏi JS fundamentals, không hỏi AI SDK setup |
| T3 | **Shallow knowledge** | Biết nhiều tools nhưng không sâu bất kỳ domain nào → "jack of all trades, master of none" |
| T4 | **Rapid tool obsolescence** | AI tools thay đổi nhanh — fundamentals thì không |

---

## 2. Gap Analysis — Fresher → Junior Roadmap

```
Hiện tại (Knowledge Base)          Cần có (Junior Frontend)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ AI Tooling (Claude, v0)         ✅ AI Tooling
✅ Production Rules (security)     ✅ Production mindset  
✅ Tool comparison                 ✅ Tool awareness
❌ MISSING                         ✅ HTML5 Semantic
❌ MISSING                         ✅ CSS3 (Flexbox, Grid, Responsive)
❌ MISSING                         ✅ JavaScript Core (ES6+)
❌ MISSING                         ✅ React Fundamentals
❌ MISSING                         ✅ TypeScript Basics
❌ MISSING                         ✅ Git Workflow
❌ MISSING                         ✅ Testing (Unit, E2E)
❌ MISSING                         ✅ Performance & Accessibility
❌ MISSING                         ✅ Soft Skills & Communication
❌ MISSING                         ✅ Interview Prep (STAR)
❌ MISSING                         ✅ Specialization Path
```

---

## 3. Upgrade Options

> [!IMPORTANT]
> Chọn **MỘT** trong 4 options dưới đây. Mỗi option có trade-off khác nhau.

### Option A: "Fill the Gaps" — Thêm tabs mới vào file hiện tại
**Approach:** Giữ nguyên 6 tabs hiện tại, thêm 6-8 tabs mới cho fundamentals + soft skills

- ✅ Pros: Một file duy nhất, dễ reference
- ❌ Cons: File sẽ rất lớn (3000+ lines), load chậm, khó maintain
- ❌ Cons: Không phải portfolio — chỉ là file HTML lớn

### Option B: "Multi-page System" — Tách thành nhiều file HTML riêng
**Approach:** File hiện tại trở thành "Module 5: AI Tooling". Tạo thêm các module HTML riêng.

- ✅ Pros: Modular, dễ maintain, load nhanh từng module
- ❌ Cons: Cần navigation system giữa các files
- ❌ Cons: Vẫn là vanilla HTML — không demonstrate framework skills

### Option C: "Upgrade In-place" — Cải thiện file hiện tại + thêm nội dung
**Approach:** Giữ 6 tabs hiện tại, mở rộng nội dung bên trong. Compact nhất.

- ✅ Pros: Balance giữa compact và comprehensive
- ❌ Cons: Tabs nhiều, mỗi tab dài
- ❌ Cons: Không scale, không phải portfolio

---

### ⭐ Option D: "Portfolio Learning Hub" — Biến thành project portfolio thật

> [!TIP]
> **Core idea:** Quá trình học chính là quá trình build portfolio. Mỗi ngày upgrade = 1 commit = 1 skill demonstrated.

**Approach:** Build một Next.js web app thực sự, deploy trên Vercel. File HTML hiện tại trở thành **nguồn nội dung gốc** được migrate vào.

#### Tại sao đây là Option tốt nhất?

```
  FILE HTML HIỆN TẠI                    PORTFOLIO PROJECT
  ════════════════════                  ════════════════════════════════
  ❌ Static file                        ✅ Next.js App Router (App dir)
  ❌ Không demonstrate skills           ✅ MỖI commit = proof of skill
  ❌ Chỉ đọc được                       ✅ Interactive (SWOT form, STAR tracker)
  ❌ Không deploy được                  ✅ Live URL trên Vercel
  ❌ Không version history              ✅ Git history = learning journey
  ❌ Recruiter không thấy               ✅ Portfolio piece #1 cho CV
```

#### Project Structure

```
📁 frontend-daily/                      ← tên project
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← Root layout (dark theme, fonts)
│   │   ├── page.tsx                    ← Dashboard: daily tracker + overview
│   │   ├── modules/
│   │   │   ├── page.tsx                ← Module list (learning path)
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            ← Dynamic route cho mỗi module
│   │   ├── daily/
│   │   │   ├── page.tsx                ← Daily log (calendar view)
│   │   │   ├── [day]/
│   │   │   │   └── page.tsx            ← Chi tiết từng ngày upgrade
│   │   ├── research/                   ← 🆕 AI RESEARCHER
│   │   │   ├── page.tsx                ← Research hub (list all reports)
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            ← Từng report chi tiết
│   │   ├── star/
│   │   │   └── page.tsx                ← STAR method tracker
│   │   ├── swot/
│   │   │   └── page.tsx                ← Personal SWOT (interactive form)
│   │   └── about/
│   │       └── page.tsx                ← About me + skills showcase
│   ├── components/
│   │   ├── ui/                         ← shadcn/ui components
│   │   ├── ModuleCard.tsx
│   │   ├── DailyTracker.tsx
│   │   ├── ResearchCard.tsx            ← 🆕 Card cho research reports
│   │   ├── StarForm.tsx
│   │   ├── SwotBoard.tsx
│   │   ├── CodeBlock.tsx               ← Syntax highlighting
│   │   ├── AntiPatternAccordion.tsx
│   │   └── VocabCard.tsx
│   ├── lib/
│   │   ├── modules.ts                  ← Module data (content từ HTML cũ)
│   │   ├── daily-data.ts               ← 30-day upgrade content
│   │   ├── research-data.ts            ← 🆕 Research reports data
│   │   └── utils.ts
│   └── styles/
│       └── globals.css                 ← Design system (migrate từ HTML cũ)
├── public/
│   └── og-image.png                    ← Social sharing image
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md                           ← Project documentation
```

#### Mỗi page demonstrate skill gì?

| Page | Skills demonstrated | Recruiter thấy gì |
|------|--------------------|-----------------|
| `/` Dashboard | Layout, CSS Grid, responsive, dark theme | "Biết thiết kế UI modern" |
| `/modules/[slug]` | Dynamic routing, data fetching, MDX/content | "Hiểu Next.js App Router" |
| `/daily/[day]` | Calendar component, state management, animation | "Biết build interactive UI" |
| `/research` | Data rendering, filtering, sorting, tag system | "Biết xử lý data + UI patterns" |
| `/research/[slug]` | Rich content rendering, code highlighting, TOC | "Biết build content-heavy pages" |
| `/star` | Form handling, localStorage, CRUD operations | "Biết xử lý form + state" |
| `/swot` | Drag-and-drop, canvas/interactive board, localStorage | "Biết build complex UI" |
| `/about` | Static page, SEO, metadata, responsive design | "Biết SEO + accessibility" |
| **Toàn bộ project** | TypeScript, Git, deployment, code organization | "Production-ready mindset" |

#### Git History = Learning Journey

```
git log --oneline (after 30 days)

D30: feat: add 30-day review + SWOT reassessment
D29: feat: add interview prep questions with STAR answers  
D28: feat: add 90-day junior plan page
...
D14: feat: add git workflow rules + PR template
D13: feat: add Next.js App Router mental model
...
D02: feat: add CSS Flexbox cheat sheet component  
D01: feat: add HTML5 semantic elements module
D00: init: Next.js project setup + migrate HTML content
```

> Recruiter mở GitHub → thấy **30 commits liên tục** → thấy **progression từ HTML → React → Next.js** → thấy **live demo trên Vercel** → ấn tượng.

#### Content Migration Plan

```
  FILE HTML CŨ (Intelligence Report)    →    NEXT.JS PROJECT
  ══════════════════════════════════          ══════════════════
  Tab 01: Mental Model                 →    /modules/mental-model
  Tab 02: The Code                     →    /modules/code-examples  
  Tab 03: Production Rules             →    /modules/production-rules
  Tab 04: Anti-patterns                →    /modules/anti-patterns
  Tab 05: So sánh Tools                →    /modules/tool-comparison
  Tab 06: Vocab Boost                  →    /modules/vocabulary
  ═══════════════════════════════════
  TOÀN BỘ FILE HTML (as-is)            →    /research/claude-code-vercel-2026
                                             (Research report #1 — entry đầu tiên)
  ═══════════════════════════════════
  (NEW) Soft Skills + STAR             →    /star (interactive form)
  (NEW) Personal SWOT                  →    /swot (interactive board)
  (NEW) Daily Upgrades                 →    /daily/1 ... /daily/30
  (NEW) Career & About                 →    /about
```

#### 🔬 AI Researcher — Chi tiết

> [!TIP]
> File HTML hiện tại (Claude Code × Vercel report) trở thành **research entry #1**.
> Mỗi tuần/tháng bạn viết thêm 1 report mới → portfolio tự grow.

**Concept:** Một section chuyên dụng trong portfolio để viết **tech intelligence reports** — tổng hợp, phân tích, so sánh các công nghệ/tools mới cho frontend developers.

**Tại sao recruiter sẽ ấn tượng:**
- Chứng minh bạn **stay updated** với industry trends
- Chứng minh bạn **biết viết technical content** (kỹ năng hiếm ở fresher)
- Chứng minh bạn **biết tổng hợp + phân tích** — không chỉ code

**Research Hub (`/research`) gồm:**

```
📄 Research Reports
├── 🔬 #1: Claude Code × Vercel — 2026 Intelligence Report  ← FILE HTML HIỆN TẠI
│       Tags: [AI Tooling] [Vercel] [Claude] [Production]
│       Date: 29 Mar 2026
│
├── 🔬 #2: React 19 vs Vue 4 — Framework Wars 2026         ← Viết thêm (tuần 2)
│       Tags: [Framework] [React] [Vue] [Comparison]
│
├── 🔬 #3: CSS 2026 — Container Queries, Scroll-driven      ← Viết thêm (tuần 3)
│       Tags: [CSS] [Responsive] [Animation]
│
└── 🔬 #4: Frontend Testing in 2026 — Vitest vs Jest        ← Viết thêm (tuần 4)
        Tags: [Testing] [DX] [Comparison]
```

**Mỗi report có format chuẩn:**

| Section | Mô tả | Skill demonstrated |
|---------|--------|--------------------|
| Header + meta | Title, date, reading time, tags | Content structuring |
| Mental Model | Architecture diagram, data flow | System thinking |
| Code Examples | Tabbed code blocks with syntax highlighting | Technical depth |
| Comparison Table | So sánh tools/frameworks | Analytical thinking |
| Anti-patterns | Fresher vs Senior code | Code review mindset |
| Vocab Boost | 5 từ vựng chuyên ngành mỗi report | English proficiency |
| Recommendation | Kết luận + action items | Decision making |

**Technical features cho `/research`:**
- 🏷️ **Tag filtering** — lọc reports theo chủ đề (AI, CSS, React...)
- 📅 **Sort by date** — mới nhất lên trên
- 🔍 **Search** — tìm kiếm trong titles và content
- 📊 **Reading progress bar** — animate khi scroll
- 🔗 **Table of Contents** — auto-generated từ headings
- 📱 **Responsive article layout** — đọc dễ trên mobile

#### Deploy Flow

```
Local dev (npm run dev)
       ↓
Git push (mỗi daily upgrade)
       ↓
Vercel auto-deploy (preview URL per commit)
       ↓
Production URL: https://frontend-daily.vercel.app
       ↓
CV / LinkedIn / GitHub: link đến live project
```

- ✅ Pros: Portfolio thật, demonstrate real skills, live URL, Git history as proof
- ✅ Pros: Quá trình build = quá trình học (learn by doing)
- ✅ Pros: Recruiters có thể thấy code + live demo + commit history
- ⚠️ Cons: Setup ban đầu mất 1-2 giờ (nhưng chỉ 1 lần)
- ⚠️ Cons: Cần biết cơ bản Next.js (nhưng D00 sẽ setup guided)

---

## 4. Daily Upgrade Plan (30 ngày)

> [!NOTE]
> Mỗi ngày upgrade **1 điều** vào knowledge base. Chia theo tuần với theme rõ ràng.

### 📅 Week 1: Foundation Gap Fill (Hard Skills)

| Ngày | Upgrade | Tab ảnh hưởng | Loại |
|------|---------|---------------|------|
| D1 | **HTML5 Semantic Elements** — section, article, nav, main, aside + khi nào dùng gì. Anti-pattern: div soup vs semantic HTML | 04 Anti-patterns | Hard Skill |
| D2 | **CSS Flexbox Cheat Sheet** — flex-direction, justify-content, align-items với visual examples. Analogy: Flexbox = `Array.map()` cho layout | 02 The Code (new sub-tab) | Hard Skill |
| D3 | **CSS Grid Essentials** — grid-template, fr unit, auto-fill/auto-fit. Anti-pattern: nested flexbox khi nên dùng grid | 02 The Code | Hard Skill |
| D4 | **Responsive Design** — mobile-first approach, media queries, clamp(), container queries 2026. Rule: "Design cho 320px trước" | 03 Production Rules | Hard Skill |
| D5 | **JavaScript ES6+ Core** — destructuring, spread, template literals, optional chaining, nullish coalescing. Vocab: 5 JS terms | 06 Vocab + 02 Code | Hard Skill |
| D6 | **Async JavaScript** — Promises, async/await, fetch API, error handling. Analogy: Promise = giao hàng Shopee (pending → fulfilled/rejected) | 02 The Code | Hard Skill |
| D7 | **DOM & Events** — querySelector, addEventListener, event delegation, event propagation. Anti-pattern: inline onclick vs addEventListener | 04 Anti-patterns | Hard Skill |

### 📅 Week 2: React & TypeScript (Hard Skills)

| Ngày | Upgrade | Tab ảnh hưởng | Loại |
|------|---------|---------------|------|
| D8 | **React Component Basics** — JSX, props, children, composition. Mental model: Component = Function trả về UI | 01 Mental Model | Hard Skill |
| D9 | **React Hooks: useState & useEffect** — state lifecycle, dependency array, cleanup. Anti-pattern: missing deps, infinite loop | 04 Anti-patterns | Hard Skill |
| D10 | **React Hooks: useRef, useMemo, useCallback** — khi nào cần optimize, khi nào premature optimization | 03 Rules | Hard Skill |
| D11 | **React State Management** — lifting state, context API, khi nào cần Zustand/Jotai. Compare table mới | 05 Compare | Hard Skill |
| D12 | **TypeScript for React** — interface vs type, generic components, event types, Zod integration | 02 The Code | Hard Skill |
| D13 | **Next.js App Router** — Server vs Client Components, layouts, loading/error states, metadata. Arch diagram update | 01 Mental Model | Hard Skill |
| D14 | **Git Workflow cho Team** — branching strategy, conventional commits, PR template, conflict resolution | 03 Rules (new sub-section) | Hard Skill |

### 📅 Week 3: Soft Skills & Professional (STAR Framework)

| Ngày | Upgrade | Tab ảnh hưởng | Loại |
|------|---------|---------------|------|
| D15 | **STAR Method cho Interview** — Situation, Task, Action, Result. 3 mẫu STAR cho frontend scenarios | 07 Soft Skills (NEW TAB) | Soft Skill |
| D16 | **Daily Standup Communication** — Template: Yesterday/Today/Blockers. Anti-pattern: rambling vs concise updates | 07 Soft Skills | Soft Skill |
| D17 | **Code Review Etiquette** — Cách give & receive feedback. STAR example: "Lần đầu bị reject PR, tôi đã..." | 07 Soft Skills | Soft Skill |
| D18 | **Task Estimation** — T-shirt sizing, story points, breaking down tasks. Rule: "Nếu estimate > 3 ngày → cần chia nhỏ" | 07 Soft Skills | Soft Skill |
| D19 | **Technical Writing** — Viết PR description, commit messages, bug reports. Template + Anti-patterns | 07 Soft Skills | Soft Skill |
| D20 | **Asking Questions Effectively** — XY Problem, MRE (Minimal Reproducible Example), StackOverflow format | 07 Soft Skills | Soft Skill |
| D21 | **Personal SWOT Workshop** — Template SWOT cho chính bạn, identify strengths to leverage & weaknesses to address | 08 Career (NEW TAB) | Soft Skill |

### 📅 Week 4: Specialization & Career (SWOT/STAR)

| Ngày | Upgrade | Tab ảnh hưởng | Loại |
|------|---------|---------------|------|
| D22 | **Frontend Specialization Map** — 4 paths: UI/UX Engineer, Performance Engineer, Full-stack, Design System | 08 Career | Specialize |
| D23 | **Testing Fundamentals** — Unit test với Vitest, component test với Testing Library. Rule: "Test behavior, not implementation" | 03 Rules | Hard Skill |
| D24 | **Performance & Core Web Vitals** — LCP, FID, CLS. Lighthouse audit workflow. Anti-pattern: unoptimized images, layout shift | 04 Anti-patterns | Hard Skill |
| D25 | **Accessibility (a11y) Basics** — ARIA roles, keyboard navigation, color contrast, screen reader testing | 03 Rules | Hard Skill |
| D26 | **Portfolio Building Strategy** — STAR format cho project descriptions. What recruiters actually look at | 08 Career | Specialize |
| D27 | **Open Source Contribution** — How to find good first issues, PR workflow, community etiquette | 08 Career | Specialize |
| D28 | **90-Day Junior Plan** — Week-by-week goals, measurable outcomes, review cadence | 08 Career | Specialize |
| D29 | **Interview Prep: Frontend Questions** — 10 câu hỏi phổ biến + STAR answers. Closure, Event Loop, Virtual DOM... | 08 Career | Specialize |
| D30 | **Review & Consolidate** — Update SWOT lại sau 30 ngày, đánh giá progress, set goals cho 30 ngày tiếp theo | 08 Career | Specialize |

---

## 5. STAR Examples cho Soft Skills Tab

> [!TIP]
> Mỗi STAR example dưới đây sẽ được thêm vào Tab 07 khi đến ngày tương ứng.

### STAR #1: Code Review (D17)
```
Situation: Sprint review, senior reject PR của tôi vì thiếu error handling.
Task:      Cần fix PR và học cách viết code defensively.
Action:    Tôi thêm try-catch, loading states, error boundaries.
           Hỏi senior review lại và xin feedback cụ thể.
Result:    PR merged. Từ đó tôi tạo checklist cá nhân trước khi submit PR.
           Error rate giảm 40% trong sprint tiếp theo.
```

### STAR #2: Estimation (D18)
```
Situation: PM hỏi estimate cho feature "User Profile Page" — tôi nói "2 ngày".
Task:      Feature thực tế mất 5 ngày vì chưa tính edge cases.
Action:    Tôi học cách break down: UI (1d) + API integration (1d) + 
           Error handling (0.5d) + Responsive (0.5d) + Testing (1d) + Buffer (1d).
Result:    Từ đó estimate accuracy tăng từ ~40% lên ~80%.
           PM trust tôi hơn trong sprint planning.
```

### STAR #3: Asking Questions (D20)
```
Situation: Stuck 3 tiếng vì API trả về 403 Forbidden.
Task:      Cần fix nhanh vì blocking sprint.
Action:    Thay vì hỏi "API bị lỗi" (không info), tôi viết:
           "GET /api/users trả 403. Token valid (tested in Postman).
           Đã check CORS config. Suspect: missing role permission.
           Có thể confirm role mapping trong auth middleware?"
Result:    Senior trả lời trong 5 phút (thay vì 30 phút back-and-forth).
           Root cause: middleware check thiếu 'viewer' role.
```

---

## 6. Personal SWOT Template (D21)

Sẽ thêm template interactive vào Tab 08:

```
┌─────────────────────────────────┬──────────────────────────────────┐
│ 🟢 STRENGTHS                    │ 🔴 WEAKNESSES                    │
│ (Tôi giỏi gì?)                  │ (Tôi yếu gì?)                    │
│                                  │                                   │
│ • ________________________       │ • ________________________        │
│ • ________________________       │ • ________________________        │
│ • ________________________       │ • ________________________        │
│                                  │                                   │
├─────────────────────────────────┼──────────────────────────────────┤
│ 🟡 OPPORTUNITIES                │ ⚫ THREATS                        │
│ (Cơ hội nào đang có?)           │ (Rủi ro gì cần tránh?)           │
│                                  │                                   │
│ • ________________________       │ • ________________________        │
│ • ________________________       │ • ________________________        │
│ • ________________________       │ • ________________________        │
│                                  │                                   │
└─────────────────────────────────┴──────────────────────────────────┘

→ Leverage: Dùng Strengths để tận dụng Opportunities
→ Defend:   Dùng Strengths để giảm Threats  
→ Improve:  Fix Weaknesses để unlock Opportunities
→ Avoid:    Fix Weaknesses trước khi Threats trở thành vấn đề
```

---

## 7. Recommendation

> [!IMPORTANT]
> **Recommendation:** Option D (Portfolio Learning Hub) là lựa chọn tốt nhất vì:
> 1. Học bằng cách build → skill thật, không chỉ đọc
> 2. Mỗi commit = bằng chứng cho recruiter
> 3. Live URL = portfolio piece số 1
> 4. Git history = learning journey có thể verify

### ✅ Đã quyết định:
- **Ngôn ngữ:** Mix Việt-Anh (tăng English proficiency song song)
- **Learning method:** STAR method cho soft skills + interview prep

### ❓ Câu hỏi còn lại:

**Q1: Option D — Bạn chọn không?**
Nếu chọn Option D, tôi sẽ:
- Setup Next.js project trong `d:\daily` (hoặc folder bạn chọn)
- Migrate nội dung HTML cũ vào
- Bắt đầu daily upgrade plan

**Q2: Bắt đầu từ ngày nào?**
- D0: Project setup + migrate content (foundation)
- D1: HTML5 Semantic (fundamentals first)
- D15: Soft Skills (skip fundamentals nếu đã biết)

**Q3: Scope mỗi ngày?**
- 🟢 **Light:** Thêm content + 1 component đơn giản (~30-45 min)
- 🟡 **Medium:** Content + component + interactive elements (~1-2 hours)
- 🔴 **Full:** Production quality với animation, responsive, tests (~2-4 hours)

> [!TIP]
> Recommend: Bắt đầu **Light** cho Week 1, tăng lên **Medium** từ Week 2.
> Consistency (mỗi ngày 1 commit) quan trọng hơn perfection.
