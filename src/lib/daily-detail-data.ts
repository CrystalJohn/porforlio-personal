export interface Step {
  id: number;
  title: string;
  description: string;
  code?: string;
  tip?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
}

export interface DayDetail {
  day: number;
  steps: Step[];
  checklist: ChecklistItem[];
  notesPlaceholder?: string;
}

export const DAILY_DETAILS: DayDetail[] = [
  {
    day: 0,
    notesPlaceholder: "Ghi chú về quá trình setup project của bạn...",
    steps: [
      { id: 1, title: "Khởi tạo Next.js 15 App Router", description: "Chạy lệnh tạo project với App Router, TypeScript, và Tailwind đã sẵn sàng.", code: `npx create-next-app@latest frontend-daily \\
  --typescript --app --no-tailwind` },
      { id: 2, title: "Cài đặt fonts & design tokens", description: "Import Syne và DM Mono từ Google Fonts. Khai báo CSS custom properties (--accent-*, --surface, v.v.) trong globals.css.", code: `/* globals.css */\n:root {\n  --accent-claude: #cc785c;\n  --accent-blue: #5e8ef7;\n  --accent-green: #3ecf8e;\n}` },
      { id: 3, title: "Setup routing structure", description: "Tạo route groups (app) và (marketing). Tạo layout.tsx với TopNav component.", tip: "Route group bằng (folder) giúp group layout mà không ảnh hưởng URL." },
      { id: 4, title: "Migrate data vào data layer", description: "Tạo src/lib/ với daily-data.ts, research-data.ts, modules.ts. Move hardcoded content ra khỏi JSX.", code: `// src/lib/daily-data.ts\nexport const DAILY_UPGRADES: DayUpgrade[] = [\n  { day: 0, title: 'Project Setup', ... }\n]` },
      { id: 5, title: "Deploy lên Vercel", description: "Push lên GitHub rồi import repo vào Vercel. Check build logs để đảm bảo không có TypeScript errors." },
    ],
    checklist: [
      { id: "c0-1", label: "next-app được tạo và chạy được ở localhost:3000" },
      { id: "c0-2", label: "Fonts Syne & DM Mono load đúng" },
      { id: "c0-3", label: "CSS variables được khai báo trong globals.css" },
      { id: "c0-4", label: "Route /dashboard, /daily, /research hoạt động" },
      { id: "c0-5", label: "TopNav responsive và active state đúng" },
      { id: "c0-6", label: "daily-data.ts có đủ 31 entries" },
      { id: "c0-7", label: "Đã push lên GitHub" },
      { id: "c0-8", label: "Deploy Vercel thành công, không có build error" },
    ],
  },
  {
    day: 1,
    notesPlaceholder: "Ghi chú về HTML5 Semantic Elements bạn học được...",
    steps: [
      { id: 1, title: "Tại sao Semantic HTML quan trọng?", description: "Semantic HTML giúp browser, screen readers, và search engines hiểu content. Div soup = anti-pattern phổ biến nhất của freshers.", tip: "Rule of thumb: nếu bạn dùng <div> + className để mô tả layout, hãy xem xét dùng semantic tag thay thế." },
      { id: 2, title: "7 Semantic Tags quan trọng nhất", description: `Mỗi tag có mục đích riêng biệt. Hiểu rõ từng tag sẽ giúp bạn viết HTML có ý nghĩa thay vì div soup.\n\n1. <header> — Phần đầu trang hoặc đầu section.\n   Chứa logo, navigation, tiêu đề. Không chỉ dùng ở top page, <article> cũng có thể có <header> riêng.\n\n2. <nav> — Khối chứa navigation links chính.\n   Dùng cho menu, breadcrumb, pagination.\n   Không phải mọi group links đều cần <nav>, chỉ navigation CHÍNH mới dùng.\n\n3. <main> — Nội dung chính, DUY NHẤT trên page.\n   Mỗi page CHỈ CÓ 1 <main>. Không chứa sidebar, header, footer chung. Screen readers dùng tag này để skip thẳng đến nội dung.\n\n4. <article> — Content tự đủ nghĩa, có thể tái sử dụng.\n   Blog post, news article, product card, comment.\n   Test: nếu copy ra standalone vẫn hiểu → dùng <article>.\n\n5. <section> — Nhóm content theo chủ đề, CÓ heading.\n   Khác <div>: <section> mang nghĩa "đây là 1 phần nội dung có chủ đề". Luôn có <h2>-<h6> bên trong.\n\n6. <aside> — Nội dung liên quan nhưng phụ.\n   Sidebar, pull quotes, ads, related links.\n   Nếu bỏ <aside> đi, nội dung chính vẫn đầy đủ.\n\n7. <footer> — Phần cuối trang hoặc cuối section.\n   Copyright, contact info, sitemap links.\n   Giống <header>, mỗi <article> có thể có <footer> riêng.`, tip: "Mẹo nhớ: Header-Nav ở trên, Main ở giữa (chứa Article/Section/Aside), Footer ở dưới." },
      { id: 3, title: "Template layout hoàn chỉnh", description: "Kết hợp cả 7 tags thành layout chuẩn. Đây là cấu trúc mà hầu hết website đều follow.", code: `<body>\n  <header>  <!-- ① Đầu trang: logo + nav -->\n    <nav>   <!-- ② Navigation chính -->\n      <a href="/">Home</a>\n      <a href="/about">About</a>\n    </nav>\n  </header>\n\n  <main>    <!-- ③ Nội dung chính (chỉ 1 cái) -->\n    <article>  <!-- ④ Bài viết tự đủ nghĩa -->\n      <h1>Tiêu đề bài viết</h1>\n      <section> <!-- ⑤ Phần 1 của bài -->\n        <h2>Giới thiệu</h2>\n        <p>...</p>\n      </section>\n      <section> <!-- ⑤ Phần 2 của bài -->\n        <h2>Chi tiết</h2>\n        <p>...</p>\n      </section>\n    </article>\n    <aside>   <!-- ⑥ Sidebar phụ -->\n      <h3>Bài liên quan</h3>\n    </aside>\n  </main>\n\n  <footer>  <!-- ⑦ Cuối trang -->\n    <p>© 2026 My Website</p>\n  </footer>\n</body>` },
      { id: 4, title: "Anti-pattern: Div soup", description: "Nhận biết và refactor div soup thành semantic HTML đúng nghĩa.", code: `<!-- ❌ Div soup -->\n<div class="header">\n  <div class="nav">...</div>\n</div>\n<div class="main">\n  <div class="content">...</div>\n  <div class="sidebar">...</div>\n</div>\n<div class="footer">...</div>\n\n<!-- ✅ Semantic -->\n<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n  <aside>...</aside>\n</main>\n<footer>...</footer>` },
      { id: 5, title: "Accessibility bonus", description: "Semantic tags tự động cung cấp ARIA roles. <nav> = role='navigation', <main> = role='main', v.v. Không cần thêm role attribute.", code: `<!-- Tag → ARIA role tự động -->\n<header>  → role="banner"\n<nav>     → role="navigation"\n<main>    → role="main"\n<aside>   → role="complementary"\n<footer>  → role="contentinfo"\n<article> → role="article"\n<section> → role="region" (khi có aria-label)`, tip: "Dùng Lighthouse > Accessibility audit để check semantic score của page." },
    ],
    checklist: [
      { id: "c1-1", label: "Hiểu được 7 semantic tags: header, nav, main, article, section, aside, footer" },
      { id: "c1-2", label: "Phân biệt được khi nào dùng <section> vs <article> vs <div>" },
      { id: "c1-3", label: "Refactor 1 component từ div sang semantic HTML" },
      { id: "c1-4", label: "Kiểm tra trang với Lighthouse Accessibility audit" },
      { id: "c1-5", label: "Viết 1 đoạn layout mới 100% semantic (không dùng div)" },
    ],
  },
  {
    day: 2,
    notesPlaceholder: "Ghi chú về CSS Flexbox...",
    steps: [
      { id: 1, title: "Mental model: Flexbox = 1D layout", description: "Flexbox xử lý layout theo 1 chiều (row hoặc column). Dùng khi cần align items, distribute space trong 1 hàng/cột.", tip: "Analogy: Flexbox = Array.map() cho layout. Bạn mô tả 'cách sắp xếp', browser tính toán vị trí." },
      { id: 2, title: "Các property quan trọng nhất", description: "display:flex, flex-direction, justify-content, align-items, gap, flex-wrap.", code: `.container {\n  display: flex;\n  flex-direction: row;      /* row | column */\n  justify-content: center;  /* main axis */\n  align-items: center;      /* cross axis */\n  gap: 16px;\n  flex-wrap: wrap;\n}` },
      { id: 3, title: "flex-grow, flex-shrink, flex-basis", description: "flex property là shorthand: flex: grow shrink basis. Dùng flex:1 để element chiếm không gian còn lại.", code: `.item {\n  flex: 1;          /* flex: 1 1 0% */\n  flex: 0 0 200px;  /* cố định width 200px */\n}` },
      { id: 4, title: "Anti-pattern: nested flex khi nên dùng grid", description: "Flexbox tốt cho nav, button groups, card footers. Grid tốt hơn cho 2D layouts như card grids.", tip: "Nếu bạn đang nest flex container quá 2 level, hãy xem xét CSS Grid." },
    ],
    checklist: [
      { id: "c2-1", label: "Hiểu trục main axis vs cross axis" },
      { id: "c2-2", label: "Build 1 nav bar dùng Flexbox" },
      { id: "c2-3", label: "Build 1 card footer với space-between" },
      { id: "c2-4", label: "Hiểu flex: 1 1 0% là gì" },
      { id: "c2-5", label: "Làm Flexbox Froggy (flexboxfroggy.com) hết 24 levels" },
    ],
  },
  {
    day: 3,
    notesPlaceholder: "Ghi chú về CSS Grid...",
    steps: [
      { id: 1, title: "Mental model: Grid = 2D layout", description: "CSS Grid xử lý layout theo 2 chiều (rows + columns) cùng lúc. Perfect cho card grids, page layouts.", tip: "Analogy: Grid = bảng Excel. Bạn định nghĩa rows và columns, rồi đặt items vào ô." },
      { id: 2, title: "grid-template-columns với fr unit", description: "fr = fractional unit. 1fr nghĩa là 'lấy 1 phần không gian còn lại'. auto-fill và auto-fit cho responsive grid.", code: `.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  /* Responsive: */\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}` },
      { id: 3, title: "Grid areas cho complex layouts", description: "Đặt tên cho grid areas và sắp xếp bằng grid-template-areas. Dễ đọc hơn nhiều so với column/row numbers.", code: `.layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 240px 1fr;\n}\n.header { grid-area: header; }` },
      { id: 4, title: "Anti-pattern: nested flex khi nên dùng grid", description: "Nếu layout có cả rows lẫn columns → dùng Grid. Chỉ cần 1 chiều → dùng Flex.", tip: "Bộ đôi hoàn hảo: Grid cho page layout, Flex cho components bên trong." },
    ],
    checklist: [
      { id: "c3-1", label: "Hiểu fr unit và auto-fill vs auto-fit" },
      { id: "c3-2", label: "Xây 1 responsive card grid: minmax(280px, 1fr)" },
      { id: "c3-3", label: "Thử grid-template-areas cho page layout" },
      { id: "c3-4", label: "Làm Grid Garden (cssgridgarden.com) hết 28 levels" },
    ],
  },
  {
    day: 4,
    notesPlaceholder: "Ghi chú về Responsive Design...",
    steps: [
      { id: 1, title: "Mobile-First approach", description: "Viết CSS cho mobile trước, rồi dùng min-width media queries để scale lên. Ngược lại với Desktop-First (max-width).", code: `/* Mobile first: base styles */\n.card { font-size: 14px; }\n\n/* Scale up cho tablet */\n@media (min-width: 768px) {\n  .card { font-size: 16px; }\n}\n\n/* Scale up cho desktop */\n@media (min-width: 1200px) {\n  .card { font-size: 18px; }\n}` },
      { id: 2, title: "clamp() cho fluid typography", description: "clamp(min, preferred, max) tạo fluid values mà không cần media queries.", code: `/* font-size tự scale từ 16px đến 32px */\nh1 {\n  font-size: clamp(16px, 5vw, 32px);\n}\n\n/* padding fluid */\n.section {\n  padding: clamp(24px, 5%, 80px);\n}` },
      { id: 3, title: "Container Queries 2026", description: "Query dựa theo kích thước container, không phải viewport. Game changer cho component reuse.", code: `.card-container {\n  container-type: inline-size;\n}\n\n@container (min-width: 400px) {\n  .card-title { font-size: 20px; }\n}` },
      { id: 4, title: "Responsive images", description: "Dùng max-width: 100%, object-fit, và Next.js <Image> component với responsive prop.", tip: "Always test ở 3 breakpoints: 375px (iPhone SE), 768px (iPad), 1440px (Desktop)." },
    ],
    checklist: [
      { id: "c4-1", label: "Implement mobile-first cho 1 page" },
      { id: "c4-2", label: "Dùng clamp() cho headings" },
      { id: "c4-3", label: "Test ở 320px, 768px, 1440px" },
      { id: "c4-4", label: "Images không bị overflow ở mobile" },
    ],
  },
  {
    day: 5,
    notesPlaceholder: "Ghi chú về Scope, Closure & var/let/const...",
    steps: [
      {
        id: 1,
        title: "Scope là gì? — 3 loại scope trong JavaScript",
        description: `Scope = "vùng mà một variable có thể được truy cập". JavaScript có 3 loại:\n\n1. Global scope — khai báo bên ngoài mọi function/block. Tất cả mọi nơi đều truy cập được. Tránh dùng nếu có thể.\n\n2. Function scope — khai báo bên trong function. Chỉ truy cập được bên trong function đó.\n\n3. Block scope — khai báo bên trong {} (if, for, while). CHỈ let và const có block scope. var thì KHÔNG.`,
        code: `let globalVar = "mọi nơi đều thấy";

function myFunc() {
  let funcVar = "chỉ trong function";
  console.log(globalVar); // ✅ OK
  console.log(funcVar);   // ✅ OK

  if (true) {
    let blockVar = "chỉ trong block";
    var varVar = "KHÔNG có block scope!";
    console.log(blockVar); // ✅ OK
  }

  console.log(varVar);   // ✅ var "thoát" ra khỏi block
  console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
}`,
        tip: "var có function scope. let/const có block scope. Đây là lý do cốt lõi tại sao var gây bugs trong loops.",
      },
      {
        id: 2,
        title: "var vs let vs const — Hoisting & TDZ",
        description: `var bị hoisted lên đầu function và được khởi tạo với undefined ngay lập tức.\nlet/const cũng bị hoisted nhưng KHÔNG được khởi tạo — tạo ra Temporal Dead Zone (TDZ).\n\nHoisting = JavaScript "kéo" khai báo lên đầu scope trước khi chạy code.\nTDZ = khoảng thời gian từ khi scope bắt đầu đến khi variable được khai báo — truy cập trong TDZ → ReferenceError.`,
        code: `// var hoisting
console.log(x); // undefined (không phải error!)
var x = 5;
// Thực ra JavaScript thấy:
// var x; ← hoisted lên đầu
// console.log(x); → undefined
// x = 5;

// let TDZ
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 5;

// const = let nhưng không thể reassign (không phải immutable!)
const obj = { name: "CJ" };
obj.name = "Alice"; // ✅ OK — mutate property
obj = {};           // ❌ TypeError — không thể reassign reference`,
      },
      {
        id: 3,
        title: "The Classic Loop Bug — var vs let",
        description: `Đây là câu hỏi interview xuất hiện ở hầu hết mọi công ty. Hiểu rõ tại sao output khác nhau = hiểu được closure và scope.\n\nVới var: chỉ có 1 biến i duy nhất (function scope). Khi setTimeout chạy sau 1s, loop đã chạy xong, i = 3.\n\nVới let: mỗi iteration tạo ra 1 biến i mới (block scope). Closure trong setTimeout capture biến i của iteration đó.`,
        code: `// ❌ var — in ra 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Sau 1s: i = 3 (loop đã xong)
// Cả 3 setTimeout đều tham chiếu cùng 1 biến i

// ✅ let — in ra 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Mỗi iteration có block scope riêng
// Mỗi setTimeout capture i của iteration của nó

// Workaround khi phải dùng var (IIFE):
for (var i = 0; i < 3; i++) {
  ((j) => setTimeout(() => console.log(j), 1000))(i);
}`,
        tip: "Dùng let trong mọi loop. Dùng const cho mọi thứ không cần reassign. Chỉ dùng var khi biết chắc mình cần function scope.",
      },
      {
        id: 4,
        title: "Closure — Function nhớ nơi nó được sinh ra",
        description: `Closure xảy ra khi một function truy cập variables từ outer scope của nó, ngay cả khi outer function đã chạy xong.\n\nJavaScript tự động tạo closure — không cần khai báo gì đặc biệt. Mỗi function "đóng gói" (close over) môi trường tại nơi nó được định nghĩa.\n\nClosure KHÔNG copy giá trị — nó giữ reference đến biến. Đó là lý do var trong loop bug xảy ra (tất cả closure cùng reference 1 biến).`,
        code: `// Closure cơ bản
function makeCounter() {
  let count = 0; // biến này sẽ được "đóng gói"

  return function increment() {
    count += 1;   // truy cập count từ outer scope
    return count;
  };
}

const counter = makeCounter();
// makeCounter() đã chạy xong, nhưng count vẫn còn sống
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Mỗi lần gọi makeCounter() tạo ra closure mới
const counter2 = makeCounter();
console.log(counter2()); // 1 — độc lập với counter`,
      },
      {
        id: 5,
        title: "Closure trong thực tế — React và event handlers",
        description: `Closure xuất hiện khắp nơi trong React. useState hook hoạt động dựa trên closure. Event handlers trong JSX là closures. Custom hooks trả về closures.\n\nHiểu closure giúp bạn debug "stale closure" bug — một trong những bug phổ biến nhất khi mới học React.`,
        code: `// Closure trong React — stale closure bug
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // ❌ Stale closure: count luôn là 0
      // vì closure capture count tại thời điểm effect chạy
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []); // count không có trong deps → stale!

  // ✅ Fix: dùng functional update — không cần capture count
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1); // prev luôn là giá trị mới nhất
    }, 1000);
    return () => clearInterval(timer);
  }, []);
}`,
        tip: "Khi thấy React state không update đúng trong setTimeout/setInterval, đầu tiên suspect stale closure. Fix = dùng functional update hoặc thêm dependency vào array.",
      },
    ],
    checklist: [
      { id: "c5-1", label: "Giải thích được 3 loại scope mà không xem notes" },
      { id: "c5-2", label: "Chạy loop bug example và giải thích tại sao var ra 3 3 3" },
      { id: "c5-3", label: "Viết 1 counter function dùng closure (không dùng class)" },
      { id: "c5-4", label: "Tìm 1 ví dụ closure trong codebase frontend-daily" },
      { id: "c5-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 6,
    notesPlaceholder: "Ghi chú về Array Methods & Immutability...",
    steps: [
      {
        id: 1,
        title: "Tại sao React cần Immutability?",
        description: `React quyết định có re-render hay không bằng cách so sánh reference (===), không phải deep comparison.\n\nNếu bạn mutate state trực tiếp (arr.push(), obj.prop = value), reference không đổi → React nghĩ state không thay đổi → KHÔNG re-render.\n\nImmutable update = tạo object/array MỚI thay vì sửa cái cũ. Reference mới → React thấy thay đổi → re-render đúng.`,
        code: `// ❌ MUTATING — React sẽ không re-render!
const [items, setItems] = useState([1, 2, 3]);

function addItem() {
  items.push(4);       // Mutate array gốc
  setItems(items);     // Reference không đổi → React bỏ qua!
}

// ✅ IMMUTABLE — tạo array mới
function addItem() {
  setItems([...items, 4]); // Reference mới → React re-render ✓
}

// ✅ IMMUTABLE — update object trong array
function updateItem(id: number, newName: string) {
  setItems(prev =>
    prev.map(item =>
      item.id === id ? { ...item, name: newName } : item
    )
  );
}`,
        tip: "Rule đơn giản: không bao giờ dùng .push(), .pop(), .splice(), .sort() trực tiếp trên state. Luôn tạo array/object mới.",
      },
      {
        id: 2,
        title: "map, filter, reduce — Bộ 3 quan trọng nhất",
        description: `Đây là 3 methods bạn sẽ dùng hàng ngày trong React. Chúng đều KHÔNG thay đổi array gốc (non-mutating).\n\nmap → transform mỗi item, trả về array có cùng số phần tử\nfilter → giữ lại items thỏa điều kiện, trả về array nhỏ hơn hoặc bằng\nreduce → tổng hợp toàn bộ array thành 1 giá trị bất kỳ`,
        code: `const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse",  price: 29,  inStock: false },
  { id: 3, name: "Keyboard", price: 79, inStock: true },
];

// map — render list trong React
const productCards = products.map(p => (
  <ProductCard key={p.id} name={p.name} price={p.price} />
));

// filter — chỉ hiển thị hàng có sẵn
const available = products.filter(p => p.inStock);

// reduce — tính tổng tiền giỏ hàng
const total = products
  .filter(p => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
// total = 999 + 79 = 1078`,
      },
      {
        id: 3,
        title: "find, findIndex, some, every — Tìm kiếm trong array",
        description: `Những methods này giúp tìm và kiểm tra điều kiện mà không cần viết for loop.\n\nfind → trả về phần tử đầu tiên thỏa điều kiện (hoặc undefined)\nfindIndex → trả về index của phần tử đầu tiên thỏa điều kiện (hoặc -1)\nsome → true nếu ÍT NHẤT 1 phần tử thỏa điều kiện\nevery → true nếu TẤT CẢ phần tử thỏa điều kiện`,
        code: `const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob",   role: "user" },
  { id: 3, name: "Carol", role: "user" },
];

// find — lấy user theo id
const alice = users.find(u => u.id === 1);
// { id: 1, name: "Alice", role: "admin" }

// findIndex — tìm index để update immutably
const idx = users.findIndex(u => u.id === 2); // 1

// some — kiểm tra có admin không
const hasAdmin = users.some(u => u.role === "admin"); // true

// every — tất cả đều đã verify?
const allVerified = users.every(u => u.verified); // false (undefined = falsy)`,
        tip: "find() vs filter(): dùng find() khi bạn chỉ cần 1 kết quả (nhanh hơn vì dừng khi tìm thấy), filter() khi cần nhiều kết quả.",
      },
      {
        id: 4,
        title: "Immutable Update Patterns — CRUD",
        description: `Đây là 4 pattern bạn dùng khi quản lý list state trong React. Học thuộc 4 pattern này = xử lý được 90% usecase.`,
        code: `const [items, setItems] = useState<Item[]>([]);

// CREATE — thêm item mới
setItems(prev => [...prev, newItem]);

// READ — filter/find (không thay đổi state)
const found = items.find(i => i.id === targetId);

// UPDATE — sửa item theo id
setItems(prev =>
  prev.map(i => i.id === targetId ? { ...i, ...changes } : i)
);

// DELETE — xóa item theo id
setItems(prev => prev.filter(i => i.id !== targetId));

// REORDER — đổi thứ tự (ví dụ: drag and drop)
setItems(prev => {
  const next = [...prev];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
});`,
      },
      {
        id: 5,
        title: "Spread operator, Object.assign, structuredClone",
        description: `Khi copy object/array để update immutably, cần hiểu shallow copy vs deep copy.\n\nShallow copy (spread, Object.assign) — chỉ copy 1 level. Nested objects vẫn là reference cũ.\nDeep copy (structuredClone, JSON.parse/stringify) — copy toàn bộ, kể cả nested.`,
        code: `// Shallow copy — OK cho object phẳng
const original = { name: "CJ", score: 100 };
const copy = { ...original, score: 200 };
// original không bị ảnh hưởng ✓

// Shallow copy — NGUY HIỂM với nested
const user = { name: "CJ", address: { city: "HCM" } };
const copy2 = { ...user };
copy2.address.city = "HN"; // ❌ Mutate nested object!
console.log(user.address.city); // "HN" — original bị ảnh hưởng!

// Fix: spread nested level
const copy3 = { ...user, address: { ...user.address, city: "HN" } };

// Deep copy — khi structure phức tạp
const deepCopy = structuredClone(user); // ES2022, modern browsers
deepCopy.address.city = "HN"; // ✓ original an toàn`,
        tip: "Với state React, thường chỉ cần shallow copy vì bạn biết rõ structure. Dùng structuredClone khi cần clone object có nhiều level lồng nhau.",
      },
    ],
    checklist: [
      { id: "c6-1", label: "Giải thích được tại sao arr.push() không trigger React re-render" },
      { id: "c6-2", label: "Implement 4 CRUD operations cho 1 list state (không mutate)" },
      { id: "c6-3", label: "Viết filter + map + reduce chain cho 1 usecase thực tế" },
      { id: "c6-4", label: "Phân biệt được shallow copy và deep copy với ví dụ cụ thể" },
      { id: "c6-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 7,
    notesPlaceholder: "Ghi chú về Async JavaScript & Event Loop...",
    steps: [
      {
        id: 1,
        title: "JavaScript là Single-Threaded — nhưng không bị block",
        description: `JavaScript chỉ có 1 thread — tức là chỉ làm được 1 việc tại 1 thời điểm. Vậy làm sao fetch dữ liệu mà UI không bị đơ?\n\nĐáp án: Async operations (fetch, setTimeout, file I/O) được giao cho Browser APIs (Web APIs) hoặc Node.js runtime xử lý ở background. JavaScript chỉ đăng ký callback "khi xong thì gọi tôi" rồi tiếp tục làm việc khác.\n\nKhi async operation xong, callback được đưa vào queue để chờ JavaScript thread rảnh thì chạy.`,
        code: `console.log("1 — sync"); // Chạy ngay

setTimeout(() => {
  console.log("3 — sau 0ms?"); // Thực ra chạy SAU cùng
}, 0);

console.log("2 — sync"); // Chạy ngay

// Output: "1 — sync" → "2 — sync" → "3 — sau 0ms?"
// setTimeout(fn, 0) không phải "chạy ngay"
// nó đưa callback vào Task queue, chờ call stack rỗng mới chạy`,
        tip: "JavaScript không thể làm 2 việc cùng lúc. Nhưng browser/Node.js có thể. JavaScript chỉ xử lý kết quả khi thread rảnh.",
      },
      {
        id: 2,
        title: "Event Loop — Cơ chế điều phối",
        description: `Event Loop là cơ chế liên tục kiểm tra:\n1. Call Stack có rỗng không?\n2. Nếu rỗng → lấy task từ queue → đẩy vào stack → chạy\n\nCó 2 loại queue:\n• Microtask queue: Promise callbacks, queueMicrotask. LUÔN được xử lý TRƯỚC macrotask.\n• Task queue (Macrotask): setTimeout, setInterval, I/O events. Xử lý SAU khi microtask queue rỗng.\n\nMỗi vòng lặp của Event Loop: chạy hết tất cả microtasks → chạy 1 macrotask → render → lặp lại.`,
        code: `console.log("1");

setTimeout(() => console.log("2 — macrotask"), 0);

Promise.resolve().then(() => console.log("3 — microtask"));

console.log("4");

// Output: 1 → 4 → 3 → 2
//
// Giải thích:
// "1" → call stack (sync)
// setTimeout callback → macrotask queue
// Promise.then → microtask queue
// "4" → call stack (sync)
// Stack rỗng → chạy hết microtasks → "3"
// Rồi mới chạy macrotask → "2"`,
      },
      {
        id: 3,
        title: "Promise — Giao hàng có hợp đồng",
        description: `Promise đại diện cho 1 giá trị sẽ có trong tương lai. 3 trạng thái:\n• pending — đang xử lý\n• fulfilled — thành công, có giá trị\n• rejected — thất bại, có error\n\nPromise giải quyết "callback hell" bằng cách cho phép chain .then() và .catch() theo thứ tự tuần tự, dễ đọc.`,
        code: `// Tạo Promise
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) resolve({ data: "success" });
    else reject(new Error("Something went wrong"));
  }, 1000);
});

// Dùng Promise chain
fetchData
  .then(result => console.log(result.data))
  .catch(err => console.error(err.message))
  .finally(() => console.log("Luôn chạy — cleanup code đặt ở đây"));

// Promise combinators
Promise.all([p1, p2, p3])     // Chờ tất cả — fail nếu 1 fail
Promise.allSettled([p1, p2])  // Chờ tất cả — không fail
Promise.race([p1, p2])        // Lấy cái xong đầu tiên
Promise.any([p1, p2])         // Lấy cái fulfilled đầu tiên`,
      },
      {
        id: 4,
        title: "async/await — Syntax đẹp hơn cho Promise",
        description: `async/await không thay thế Promise — nó là cú pháp sugar giúp code async trông giống sync, dễ đọc hơn.\n\nasync function luôn return Promise.\nawait chỉ dùng được bên trong async function.\nawait "tạm dừng" function đó (không block thread) cho đến khi Promise resolve.\n\nLỗi phổ biến: quên await → nhận về Promise object thay vì giá trị.`,
        code: `// ❌ Không await — data là Promise, không phải data thực
async function wrong() {
  const data = fetch('/api/users'); // thiếu await!
  console.log(data); // Promise { <pending> }
}

// ✅ Đúng với try/catch
async function fetchUser(id: string) {
  try {
    const res = await fetch(\`/api/users/\${id}\`);

    if (!res.ok) {
      throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
    }

    return await res.json(); // await để unwrap JSON promise
  } catch (error) {
    console.error("fetchUser failed:", error);
    throw error; // re-throw để caller biết có lỗi
  }
}

// Parallel với async/await
async function loadDashboard(userId: string) {
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
  ]);
  return { user, posts };
}`,
        tip: "fetch() không throw với HTTP 4xx/5xx — phải tự check res.ok. Đây là gotcha phổ biến nhất khi mới dùng fetch.",
      },
      {
        id: 5,
        title: "Async trong React — Vòng đời và cleanup",
        description: `Trong React, async operations trong useEffect cần cleanup để tránh update state trên component đã unmount.\n\nAbortController cho phép cancel fetch request khi component unmount — đây là pattern chuẩn mà bạn đã thiếu trong bài test trước.`,
        code: `function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // ← tạo signal

    async function loadUser() {
      try {
        setLoading(true);
        const res = await fetch(\`/api/users/\${userId}\`, {
          signal: controller.signal, // ← đính kèm signal vào request
        });
        if (!res.ok) throw new Error("Failed");
        setUser(await res.json());
      } catch (err) {
        if (err.name !== "AbortError") { // ignore cancel errors
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadUser();

    return () => controller.abort(); // ← cancel khi unmount/userId đổi
  }, [userId]);
}`,
        tip: "AbortController là pattern bắt buộc cho fetch trong useEffect. Libraries như TanStack Query handle điều này tự động — đó là 1 lý do để dùng chúng.",
      },
    ],
    checklist: [
      { id: "c7-1", label: "Giải thích output của: log(1) → setTimeout(log(2),0) → Promise.then(log(3)) → log(4)" },
      { id: "c7-2", label: "Viết async function fetch dữ liệu với đầy đủ: loading, error, success state" },
      { id: "c7-3", label: "Implement AbortController trong useEffect" },
      { id: "c7-4", label: "Tối ưu 2 independent API calls bằng Promise.all" },
      { id: "c7-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 8,
    notesPlaceholder: "Ghi chú về DOM & Events...",
    steps: [
      {
        id: 1,
        title: "DOM là gì? — Cây cấu trúc của trang web",
        description: `DOM (Document Object Model) là bản đại diện dạng cây của HTML mà browser tạo ra sau khi parse HTML. Mỗi HTML tag trở thành 1 "node" trong cây.\n\nJavaScript giao tiếp với trang web qua DOM API — không phải trực tiếp với HTML.\n\nTại sao hiểu DOM quan trọng khi học React? Vì React thực ra đang thao tác DOM thay bạn. Khi hiểu DOM hoạt động thế nào, bạn hiểu tại sao React Virtual DOM là tối ưu hóa, không phải magic.`,
        code: `// DOM là tree:
// <body>
//   <div id="app">
//     <h1>Hello</h1>
//     <p>World</p>
//   </div>
// </body>

// Truy cập nodes
const app = document.getElementById("app");
const h1  = document.querySelector("h1");
const all = document.querySelectorAll("p"); // NodeList

// Traverse tree
const parent   = h1.parentElement;   // div#app
const children = app.children;       // [h1, p]
const next     = h1.nextElementSibling; // p`,
      },
      {
        id: 2,
        title: "querySelector vs getElementById — Khi nào dùng gì",
        description: `getElementById là method cũ, chỉ select theo id. querySelector dùng CSS selector syntax — linh hoạt hơn và là cách hiện đại.\n\nquerySelectorAll trả về NodeList (không phải Array). Phải dùng Array.from() hoặc spread để dùng các array methods như .map().`,
        code: `// querySelector — CSS selector syntax
const btn    = document.querySelector("#submit");        // by id
const inputs = document.querySelectorAll("input[type=text]"); // by attr
const first  = document.querySelector(".card:first-child"); // pseudo

// NodeList vs Array
const items = document.querySelectorAll(".item");
// items.map(...)  ❌ NodeList không có .map()
Array.from(items).map(el => el.textContent); // ✅
[...items].map(el => el.textContent);        // ✅

// Scope selector — tìm bên trong element cụ thể
const nav   = document.querySelector("nav");
const links = nav.querySelectorAll("a"); // chỉ tìm trong nav`,
        tip: "Trong React, bạn gần như không bao giờ cần querySelector vì React quản lý DOM. Nhưng đây là kiến thức cốt lõi giải thích tại sao useRef tồn tại.",
      },
      {
        id: 3,
        title: "Event Bubbling & Capturing",
        description: `Khi bạn click vào 1 element, event KHÔNG chỉ xảy ra ở element đó. Nó đi theo 3 phase:\n\n1. Capturing (đi xuống): window → document → body → ... → target\n2. Target: event xảy ra ở element bạn click\n3. Bubbling (đi lên): target → ... → body → document → window\n\nMặc định addEventListener lắng nghe ở phase Bubbling.\ne.stopPropagation() ngăn event bubble lên. Dùng cẩn thận — có thể break các listeners ở parent.`,
        code: `// Event bubbling
document.querySelector(".child").addEventListener("click", (e) => {
  console.log("child clicked");
  // e.stopPropagation(); // uncomment để ngăn bubble
});

document.querySelector(".parent").addEventListener("click", () => {
  console.log("parent clicked");
  // Click vào child → cả 2 đều log vì event bubble lên
});

// Capturing phase (ít dùng)
document.querySelector(".parent").addEventListener("click", handler, true);
//                                                                    ↑ true = capturing

// preventDefault — ngăn hành vi mặc định của browser
form.addEventListener("submit", (e) => {
  e.preventDefault(); // không reload trang
  handleSubmit();
});`,
        tip: "e.stopPropagation() vs e.preventDefault(): stop = ngăn event lan lên cây, prevent = ngăn browser làm action mặc định (submit form, follow link).",
      },
      {
        id: 4,
        title: "Event Delegation — 1 listener cho N elements",
        description: `Thay vì attach listener cho từng child element, attach 1 listener cho parent và dùng e.target để biết element nào được click.\n\nTại sao tốt hơn?\n• Ít memory hơn — N listeners vs 1 listener\n• Hoạt động với dynamic elements (thêm sau khi attach listener)\n• React dùng pattern này internally — attach listeners tại root, không phải từng element`,
        code: `// ❌ N listeners — tốn memory, không handle dynamic items
document.querySelectorAll(".todo-item").forEach(item => {
  item.addEventListener("click", handleClick);
});
// Items thêm sau này sẽ không có listener!

// ✅ Event delegation — 1 listener
document.querySelector(".todo-list").addEventListener("click", (e) => {
  // e.target = element thực sự được click
  const item = e.target.closest(".todo-item");
  if (!item) return; // click vào chỗ khác trong list

  const id = item.dataset.id;
  handleTodoClick(id);
});

// React làm tương tự — tất cả events được handle ở root
// onClick trong JSX không phải native addEventListener
// React attach 1 listener ở root document, delegate xuống`,
      },
      {
        id: 5,
        title: "React Synthetic Events — DOM events được wrap lại",
        description: `React không dùng native DOM events trực tiếp. Nó wrap chúng trong SyntheticEvent — một wrapper normalize behavior giữa các browsers.\n\nSyntheticEvent có cùng API với native events (e.preventDefault(), e.target, e.currentTarget...) nhưng:\n• Cross-browser compatible\n• React pool và reuse event objects (trước React 17 — giờ đã thay đổi)\n• Cleanup tự động sau handler chạy xong`,
        code: `// Trong React — onClick là SyntheticEvent, không phải native click
function Button() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.target);        // element được click
    console.log(e.currentTarget); // element có listener (button)
  };

  return <button onClick={handleClick}>Click</button>;
}

// TypeScript types cho common events:
// onClick    → React.MouseEvent<HTMLElement>
// onChange   → React.ChangeEvent<HTMLInputElement>
// onSubmit   → React.FormEvent<HTMLFormElement>
// onKeyDown  → React.KeyboardEvent<HTMLElement>

// Event delegation trong React — pass data qua closure
function TodoList({ items }: { items: Todo[] }) {
  const handleDelete = (id: string) => {
    // không cần e.target tricks — closure capture id
    deleteItem(id);
  };
  return items.map(item => (
    <li key={item.id}>
      {item.text}
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  ));
}`,
        tip: "React event handler nhận SyntheticEvent, không phải native Event. Nếu cần native event: e.nativeEvent.",
      },
    ],
    checklist: [
      { id: "c8-1", label: "Giải thích được event bubbling bằng lời (không xem notes)" },
      { id: "c8-2", label: "Implement event delegation cho 1 danh sách có thể thêm/xóa item" },
      { id: "c8-3", label: "Dùng e.preventDefault() đúng chỗ (form submit)" },
      { id: "c8-4", label: "Hiểu tại sao React không cần event delegation thủ công" },
      { id: "c8-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 9,
    notesPlaceholder: "Ghi chú về HTTP & REST Fundamentals...",
    steps: [
      {
        id: 1,
        title: "HTTP Request/Response Cycle",
        description: `Mỗi lần browser fetch data từ server, đây là những gì xảy ra:\n\n1. Browser tạo HTTP Request: method + URL + headers + body\n2. Request đi qua network đến server\n3. Server xử lý và trả về HTTP Response: status code + headers + body\n\nHTTP là stateless — mỗi request độc lập, server không nhớ request trước. Session/Cookie/JWT được dùng để "mô phỏng" state giữa các requests.`,
        code: `// HTTP Request anatomy
GET /api/users/123 HTTP/1.1
Host: api.example.com
Authorization: Bearer eyJhbGc...
Accept: application/json
Content-Type: application/json

// HTTP Response anatomy
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600

{ "id": 123, "name": "Alice", "email": "alice@example.com" }

// Trong JavaScript (fetch API)
const response = await fetch("/api/users/123", {
  headers: {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json",
  },
});
// response.status  → 200
// response.headers → Headers object
// response.json()  → parse body thành JS object`,
      },
      {
        id: 2,
        title: "HTTP Methods — Mỗi method có ngữ nghĩa riêng",
        description: `REST API dùng HTTP methods để biểu đạt hành động. Không phải quy tắc kỹ thuật bắt buộc, nhưng là convention mọi dev đều follow:\n\nGET    — Đọc dữ liệu. Không có body. An toàn và idempotent.\nPOST   — Tạo mới. Có body. Không idempotent (gọi 2 lần = tạo 2 records).\nPUT    — Thay thế toàn bộ. Có body. Idempotent.\nPATCH  — Cập nhật một phần. Có body. Ít idempotent hơn PUT.\nDELETE — Xóa. Không có body. Idempotent.`,
        code: `// CRUD → HTTP Methods mapping
// Create → POST
await fetch("/api/posts", {
  method: "POST",
  body: JSON.stringify({ title: "New Post", content: "..." }),
  headers: { "Content-Type": "application/json" },
});

// Read → GET
await fetch("/api/posts");          // lấy tất cả
await fetch("/api/posts/123");      // lấy 1 item

// Update → PUT (replace) hoặc PATCH (partial)
await fetch("/api/posts/123", {
  method: "PATCH",
  body: JSON.stringify({ title: "Updated Title" }),
  headers: { "Content-Type": "application/json" },
});

// Delete → DELETE
await fetch("/api/posts/123", { method: "DELETE" });`,
        tip: "Idempotent = gọi nhiều lần nhưng kết quả không đổi. GET 100 lần = cùng data. DELETE 100 lần = vẫn bị xóa. POST 100 lần = 100 records mới.",
      },
      {
        id: 3,
        title: "HTTP Status Codes — Ngôn ngữ của server",
        description: `Status code cho bạn biết request thành công hay thất bại và lý do. Nhớ nhóm, không cần nhớ hết từng code:\n\n2xx — Thành công\n3xx — Redirect\n4xx — Lỗi từ phía client (bạn gửi request sai)\n5xx — Lỗi từ phía server (server có vấn đề)`,
        code: `// 2xx — Success
200 OK          // GET, PUT, PATCH thành công
201 Created     // POST tạo resource mới thành công
204 No Content  // DELETE thành công, không có body trả về

// 3xx — Redirect
301 Moved Permanently  // URL đã đổi vĩnh viễn
302 Found              // Redirect tạm thời
304 Not Modified       // Dùng cache đi, không đổi gì

// 4xx — Client Error (bạn sai)
400 Bad Request     // Request malformed, data không hợp lệ
401 Unauthorized    // Chưa authenticate (chưa đăng nhập)
403 Forbidden       // Đã authenticate nhưng không có quyền
404 Not Found       // Resource không tồn tại
422 Unprocessable   // Data đúng format nhưng không valid (validation fail)
429 Too Many Requests // Rate limit

// 5xx — Server Error (server sai)
500 Internal Server Error  // Server crash
502 Bad Gateway            // Server upstream lỗi
503 Service Unavailable    // Server quá tải hoặc maintenance`,
        tip: "fetch() không throw khi status 4xx/5xx! Phải tự check: if (!response.ok) throw new Error(). response.ok = true chỉ khi status 200-299.",
      },
      {
        id: 4,
        title: "Headers — Metadata của request/response",
        description: `Headers là key-value pairs chứa metadata về request hoặc response. Một số headers quan trọng nhất:\n\nContent-Type: loại data trong body (application/json, multipart/form-data...)\nAuthorization: credentials để authenticate (Bearer token, Basic auth)\nAccept: client muốn nhận về loại data nào\nCache-Control: caching directives\nCors headers: kiểm soát cross-origin access`,
        code: `// Request headers phổ biến
const res = await fetch("/api/data", {
  headers: {
    "Content-Type": "application/json",    // body là JSON
    "Authorization": \`Bearer \${token}\`,   // JWT auth
    "Accept": "application/json",          // muốn nhận JSON về
    "X-Request-ID": crypto.randomUUID(),   // custom header
  },
});

// Response headers quan trọng
res.headers.get("Content-Type");      // "application/json"
res.headers.get("Cache-Control");     // "max-age=3600"
res.headers.get("X-RateLimit-Remaining"); // "99"

// Đọc tất cả response headers
for (const [key, value] of res.headers.entries()) {
  console.log(\`\${key}: \${value}\`);
}`,
      },
      {
        id: 5,
        title: "CORS — Tại sao browser chặn cross-origin request",
        description: `CORS (Cross-Origin Resource Sharing) là cơ chế bảo mật của browser.\n\nOrigin = protocol + domain + port. Ví dụ: https://myapp.com:3000\n\nBrowser chặn request từ origin A đến origin B (cross-origin) trừ khi server B cho phép.\nTại sao? Để ngăn một trang web độc hại đọc dữ liệu từ API của ngân hàng khi bạn đang đăng nhập.\n\nServer-to-server không bị CORS vì không có browser làm "cảnh sát".`,
        code: `// CORS ERROR xảy ra khi:
// Frontend: http://localhost:3000
// Backend:  http://localhost:8080
// → Khác port → different origin → browser block!

// Server cần gửi header này để cho phép:
// Access-Control-Allow-Origin: http://localhost:3000
// hoặc
// Access-Control-Allow-Origin: * (cho phép mọi origin)

// Preflight request — browser tự động gửi trước request "thật"
// khi method không phải GET/POST đơn giản
OPTIONS /api/data HTTP/1.1
Origin: http://localhost:3000
Access-Control-Request-Method: DELETE

// Server trả lời:
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type

// Trong Next.js — fix CORS bằng cách proxy qua Next.js API routes
// Frontend gọi: /api/users (same origin)
// Next.js server gọi: https://external-api.com/users (server-to-server, no CORS)`,
        tip: "CORS chỉ xảy ra ở browser. Nếu curl hoạt động nhưng browser không → đó là CORS. Fix ở server (add headers) hoặc dùng proxy (Next.js API routes).",
      },
    ],
    checklist: [
      { id: "c9-1", label: "Giải thích được 5 HTTP methods và khi nào dùng mỗi cái" },
      { id: "c9-2", label: "Nhớ được 10 status codes quan trọng nhất và ý nghĩa" },
      { id: "c9-3", label: "Giải thích CORS cho người không biết — tại sao tồn tại" },
      { id: "c9-4", label: "Viết 1 fetch function đầy đủ: method, headers, body, error check (res.ok)" },
      { id: "c9-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 10,
    notesPlaceholder: "Ghi chú về Browser Pipeline: URL → Pixels...",
    steps: [
      {
        id: 1,
        title: "Bước 1–3: DNS → TCP → HTTP Request",
        description: `Trước khi browser nhận được 1 byte HTML, nó phải đi qua 3 bước network:\n\n1. DNS Lookup — "www.google.com" → IP address (8.8.8.8)\n   Browser cache → OS cache → DNS server → Root DNS → Authoritative DNS\n   Tốn: 1–100ms tùy cache\n\n2. TCP Handshake — thiết lập kết nối với server (SYN → SYN-ACK → ACK)\n   Với HTTPS: thêm TLS handshake (certificate, key exchange)\n   Tốn: 1 RTT (round-trip time)\n\n3. HTTP Request — browser gửi request, server trả response\n   TTFB (Time to First Byte) = thời gian server xử lý + trả byte đầu tiên`,
        code: `// Kiểm tra trong DevTools > Network tab
// Click vào 1 request → "Timing" tab

// DNS Lookup:     12ms
// Initial connection: 45ms  (TCP + TLS)
// Waiting (TTFB): 120ms     (server processing)
// Content Download: 8ms     (data transfer)

// TTFB cao → server chậm (slow backend, cold start, heavy computation)
// DNS cao → cân nhắc DNS prefetch
// Connection cao → dùng HTTP/2, CDN, keep-alive

// HTML hint để browser bắt đầu DNS sớm
// <link rel="dns-prefetch" href="//api.example.com">
// <link rel="preconnect" href="//api.example.com">`,
        tip: "TTFB > 600ms là dấu hiệu server có vấn đề. Mục tiêu: TTFB < 200ms. Đây là metric đầu tiên cần check khi app slow.",
      },
      {
        id: 2,
        title: "Bước 4–5: HTML Parsing → DOM Construction",
        description: `Browser nhận HTML bytes → decode thành characters → tokenize → tạo nodes → xây DOM tree.\n\nQuá trình này có thể bị BLOCK bởi JavaScript:\n• Khi parser gặp <script> không có async/defer → dừng parse HTML\n• Download và execute script xong → tiếp tục parse\n\nĐây là lý do quan trọng: đặt <script> ở đâu và dùng attribute nào.`,
        code: `<!-- ❌ Block parser — tệ nhất -->
<head>
  <script src="heavy.js"></script>  <!-- parser dừng ở đây -->
</head>

<!-- ✅ defer — download song song, execute sau khi HTML parse xong -->
<head>
  <script src="app.js" defer></script>
</head>

<!-- ✅ async — download song song, execute ngay khi download xong -->
<!-- Thứ tự execute không đảm bảo -->
<head>
  <script src="analytics.js" async></script>
</head>

<!-- ✅ Cách cũ — đặt script trước </body> -->
<body>
  ...content...
  <script src="app.js"></script>
</body>

<!-- Trong Next.js — Script component handle này tự động -->
import Script from 'next/script'
<Script src="..." strategy="lazyOnload" />`,
      },
      {
        id: 3,
        title: "Bước 6: CSS Parsing → CSSOM (Render Blocking!)",
        description: `Song song với DOM construction, browser parse CSS → xây CSSOM (CSS Object Model).\n\nCSS là RENDER BLOCKING — browser không render bất cứ thứ gì cho đến khi CSSOM được xây dựng xong. Tại sao? Vì một element có thể bị style bởi CSS ở bất kỳ đâu trong stylesheet.\n\nNhưng CSS không block HTML parsing (chỉ block rendering). JS thì block cả parse lẫn render.`,
        code: `/* CSS Specificity — CSSOM cần giải quyết conflicts */
/* Inline > ID > Class > Element */
/* 1000  > 100 > 10    > 1       */

.button { color: blue; }       /* specificity: 10 */
#header .button { color: red; } /* specificity: 110 → wins */

/* Critical CSS — inline CSS cần thiết cho above-the-fold */
/* Inline trong <style> tag → không cần download thêm */
<style>
  /* CSS tối thiểu để render hero section */
  .hero { background: #000; color: #fff; min-height: 100vh; }
</style>

/* Non-critical CSS — load async sau */
<link rel="preload" href="styles.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">`,
        tip: "Đặt <link rel='stylesheet'> trong <head> — để browser biết cần download CSS ngay từ đầu, tránh FOUC (Flash of Unstyled Content).",
      },
      {
        id: 4,
        title: "Bước 7–9: Render Tree → Layout → Paint",
        description: `Khi DOM + CSSOM sẵn sàng, browser bắt đầu render:\n\n7. Render Tree = DOM + CSSOM kết hợp. Chỉ include visible elements (display:none bị loại bỏ).\n\n8. Layout (Reflow) — tính toán kích thước và vị trí của từng element. Đây là bước tốn CPU nhất. Thay đổi width, height, margin, padding → trigger reflow.\n\n9. Paint — vẽ pixels vào màn hình. Thay đổi color, background, shadow → trigger repaint (rẻ hơn reflow).\n\n10. Compositing — layer riêng cho các element có transform, opacity, will-change → GPU xử lý.`,
        code: `// ❌ Gây reflow nhiều lần — tệ cho performance
for (const item of items) {
  item.style.width = container.offsetWidth + "px"; // đọc rồi viết xen kẽ
}
// Mỗi lần đọc offsetWidth → browser phải tính layout → flush reflow

// ✅ Batch reads rồi batch writes
const width = container.offsetWidth; // đọc 1 lần
for (const item of items) {
  item.style.width = width + "px";   // write nhiều lần
}

// CSS properties ảnh hưởng đến performance:
// Reflow (đắt): width, height, margin, padding, top, left, font-size
// Repaint (trung bình): color, background, visibility, border-color
// Composite only (rẻ nhất): transform, opacity → dùng cho animations!

// ✅ Animation tốt — chỉ composite
.slide-in {
  transform: translateX(0);    /* composite — GPU */
  transition: transform 0.3s;
}
/* ❌ Animation xấu — gây reflow */
.slide-in-bad {
  left: 0;                     /* layout — CPU */
  transition: left 0.3s;
}`,
      },
      {
        id: 5,
        title: "Core Web Vitals liên quan thế nào đến Pipeline",
        description: `Google đo website performance qua Core Web Vitals. Hiểu pipeline giúp bạn biết tại sao metric xấu và cách fix.\n\nLCP (Largest Contentful Paint) — thời gian render element lớn nhất (thường là hero image/heading). Mục tiêu < 2.5s. Liên quan đến: network, server response, render blocking resources.\n\nCLS (Cumulative Layout Shift) — tổng mức độ content bị nhảy. Mục tiêu < 0.1. Xảy ra khi: image không có dimensions, font swap, dynamic content inject phía trên.\n\nINP (Interaction to Next Paint) — độ trễ từ interaction đến render tiếp theo. Mục tiêu < 200ms. Liên quan đến: JS blocking main thread.`,
        code: `// Fix LCP — preload hero image
<link rel="preload" as="image" href="/hero.jpg">

// Fix CLS — luôn khai báo dimensions cho image
<img src="/photo.jpg" width="800" height="600" alt="..." />

// Trong Next.js Image — tự động xử lý
import Image from 'next/image'
<Image src="/photo.jpg" width={800} height={600} alt="..." priority />
// priority → preload, dùng cho LCP image

// Fix INP — tránh long tasks (>50ms)
// Break heavy work thành chunks
async function processLargeData(items) {
  const CHUNK_SIZE = 100;
  for (let i = 0; i < items.length; i += CHUNK_SIZE) {
    const chunk = items.slice(i, i + CHUNK_SIZE);
    processChunk(chunk);
    await new Promise(resolve => setTimeout(resolve, 0)); // yield to browser
  }
}`,
        tip: "Dùng Lighthouse (F12 > Lighthouse) để đo Core Web Vitals ngay trong DevTools. PageSpeed Insights để đo trên môi trường thực.",
      },
    ],
    checklist: [
      { id: "c10-1", label: "Vẽ được flow từ URL đến pixels có 10 bước (không xem notes)" },
      { id: "c10-2", label: "Giải thích tại sao CSS block render nhưng không block HTML parse" },
      { id: "c10-3", label: "Giải thích sự khác nhau giữa defer và async cho script tags" },
      { id: "c10-4", label: "Chạy Lighthouse audit trên frontend-daily, đọc và hiểu LCP/CLS score" },
      { id: "c10-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 11,
    notesPlaceholder: "Ghi chú về React Component & JSX...",
    steps: [
      {
        id: 1,
        title: "JSX là gì? — Nó compile thành gì?",
        description: `JSX không phải HTML. Nó là cú pháp sugar cho React.createElement(). Babel hoặc SWC compile JSX thành JS thuần trước khi chạy.\n\nMỗi dòng JSX bạn viết thực ra là một function call:\n  <h1 className="title">Hello</h1>\n  → React.createElement("h1", { className: "title" }, "Hello")\n\nKết quả trả về là một plain JS object (React Element):\n  { type: "h1", props: { className: "title", children: "Hello" } }\n\nĐây là lý do JSX phải có 1 root element — vì một function chỉ return được 1 value. React Fragment (<></>) giải quyết điều này bằng cách wrap mà không tạo DOM node thật.`,
        code: `// Bạn viết JSX:
const el = <h1 className="title">Hello</h1>;

// Babel compile thành:
const el = React.createElement("h1", { className: "title" }, "Hello");

// Kết quả là 1 plain object:
// { type: "h1", props: { className: "title", children: "Hello" } }

// Component cũng compile tương tự:
const ui = <MyButton color="blue">Click</MyButton>;
// → React.createElement(MyButton, { color: "blue" }, "Click")`,
        tip: "JSX chỉ là syntax sugar. Hiểu điều này giúp bạn debug lỗi 'JSX must have one parent element' và biết tại sao React phải được import (trước React 17).",
      },
      {
        id: 2,
        title: "Component = Function trả về UI",
        description: `React Component đơn giản là một JavaScript function nhận props và trả về React Elements (JSX).\n\nQuy tắc bắt buộc:\n1. Tên component PHẢI viết hoa chữ cái đầu — React dùng điều này để phân biệt HTML tag (<div>) và Component (<Div>)\n2. Phải return JSX hoặc null\n3. Không được có side effect ở top level (useEffect dành cho điều này)\n\nMental model: Component như một "template function". Mỗi lần React cần render, nó gọi function đó với props hiện tại và lấy kết quả là UI mô tả.`,
        code: `// ✅ Component hợp lệ — tên viết hoa, return JSX
function UserCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

// ❌ Tên thường → React hiểu là HTML tag, không phải component
function userCard() { ... }  // React sẽ tìm <usercard> trong HTML

// ✅ Component có thể return null (render nothing)
function Banner({ show }: { show: boolean }) {
  if (!show) return null;
  return <div>Important announcement</div>;
}`,
        tip: "Convention: 1 file = 1 component chính. File name = Component name (UserCard.tsx). Giúp codebase dễ navigate hơn.",
      },
      {
        id: 3,
        title: "<MyComponent /> vs MyComponent() — Khác nhau thế nào?",
        description: `Đây là câu hỏi interview phổ biến mà nhiều junior không trả lời được.\n\nKhi bạn dùng JSX <MyComponent />, React:\n  1. Gọi MyComponent() để lấy React Elements\n  2. Track component đó trong Fiber tree\n  3. Quản lý lifecycle (hooks, re-render, cleanup)\n\nKhi bạn gọi thẳng MyComponent(), React:\n  1. Chỉ là function call thông thường\n  2. Hooks bên trong sẽ bị "orphaned" — gắn vào component cha\n  3. State không được track độc lập\n  4. Gây bugs khó debug với useState và useEffect\n\nKết quả output JSX có thể giống nhau, nhưng React treat chúng hoàn toàn khác nhau.`,
        code: `function List() {
  // ✅ ĐÚNG: <Item /> — React track component riêng
  // React tạo Fiber node cho Item, quản lý state của nó
  return <Item />;

  // ❌ SAI: Item() — chỉ là function call
  // Hooks trong Item() sẽ belong về List, không phải Item
  // return Item();
}

// Ví dụ thấy rõ vấn đề:
function Counter() {
  const [count, setCount] = useState(0); // State này belong về ai?
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// ❌ Gọi Counter() trực tiếp trong render
function App() {
  return Counter(); // count state bị gắn vào App, không phải Counter
}

// ✅ Dùng JSX
function App() {
  return <Counter />; // count state độc lập trong Counter instance
}`,
        tip: "Luôn dùng JSX syntax <Component /> thay vì Component() khi compose components. Rule này không có exception.",
      },
      {
        id: 4,
        title: "Props — Data flow một chiều",
        description: `Props là cách truyền data từ parent xuống child. Props là READ-ONLY — child không được mutate props.\n\nTại sao read-only? Vì React dùng mô hình one-way data flow:\n  Parent state thay đổi → React re-render parent → React truyền props mới xuống child → child re-render\n\nNếu child được phép thay đổi props, data flow sẽ trở thành 2 chiều và rất khó predict behavior.\n\nMuốn child "thay đổi" data của parent → truyền callback function qua props (pattern: lifting state up).`,
        code: `// ✅ Props truyền data + callback xuống
function Parent() {
  const [name, setName] = useState("Alice");
  return <Child name={name} onRename={setName} />;
}

function Child({ name, onRename }: { name: string; onRename: (n: string) => void }) {
  // ❌ KHÔNG làm thế này — mutate props
  // props.name = "Bob"; // Error: read-only

  // ✅ Gọi callback để yêu cầu parent thay đổi
  return <button onClick={() => onRename("Bob")}>{name}</button>;
}

// children prop — truyền JSX như content
function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>`,
      },
      {
        id: 5,
        title: "Keys — Tại sao React cần chúng trong list?",
        description: `Khi render list (<ul>, map()), React cần key để biết element nào là element nào khi list thay đổi.\n\nKhông có key: React so sánh theo vị trí index. Nếu bạn xóa item đầu tiên, React nghĩ item thứ 2 đã trở thành item mới thay vì item đã có, dẫn đến:\n  - State (như input value) bị gán nhầm sang item khác\n  - Animation và focus bị reset sai\n  - Performance tệ hơn\n\nVới key: React track từng item theo identity, không theo position.`,
        code: `// ❌ Dùng index làm key — bug khi list reorder/delete
{items.map((item, index) => (
  <TodoItem key={index} item={item} />
))}

// ✅ Dùng unique stable ID
{items.map((item) => (
  <TodoItem key={item.id} item={item} />
))}

// Tại sao index gây bug — ví dụ:
// List: [A(key=0), B(key=1), C(key=2)]
// Xóa A → [B(key=0), C(key=1)]
// React thấy: key=0 vẫn tồn tại (đổi từ A sang B)
// → React reuse DOM node của A cho B → state của A bị giữ lại trong B`,
        tip: "Key phải unique trong cùng một list, nhưng không cần unique globally. Dùng database ID, UUID, hoặc bất kỳ stable identifier nào.",
      },
    ],
    checklist: [
      { id: "c11-1", label: "Giải thích được JSX compile thành gì (React.createElement)" },
      { id: "c11-2", label: "Tạo 3 components: function component, component với props, component với children" },
      { id: "c11-3", label: "Hiểu và giải thích được <MyComponent /> vs MyComponent() khác nhau thế nào" },
      { id: "c11-4", label: "Render 1 list dùng .map() với key đúng cách (không dùng index)" },
      { id: "c11-5", label: "Tự trả lời Key Question mà không xem notes" },
    ],
  },
  {
    day: 12,
    notesPlaceholder: "Ghi chú về TypeScript for React...",
    steps: [
      { id: 1, title: "interface vs type", description: "Interface cho object shapes (extends được). Type cho unions, intersections, mapped types.", code: "// Interface: object shape\\ninterface User {\\n  name: string;\\n  email: string;\\n}\\n\\n// Type: union\\ntype Status = 'idle' | 'loading' | 'error';\\n\\n// Type: intersection\\ntype AdminUser = User & { role: 'admin' };" },
      { id: 2, title: "Generic Components", description: "Generic giúp component type-safe mà vẫn reusable.", code: "interface ListProps<T> {\\n  items: T[];\\n  renderItem: (item: T) => React.ReactNode;\\n}\\n\\nfunction List<T>({ items, renderItem }: ListProps<T>) {\\n  return <ul>{items.map(renderItem)}</ul>;\\n}\\n\\n// Usage: TypeScript tự infer T\\n<List items={users} renderItem={u => <li>{u.name}</li>} />" },
      { id: 3, title: "Event Types", description: "React event types cho form, click, change, keyboard.", code: "function Form() {\\n  // Change event\\n  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\\n    console.log(e.target.value);\\n  };\\n  // Submit event\\n  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\\n    e.preventDefault();\\n  };\\n  // Click event\\n  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {};\\n}" },
      { id: 4, title: "Zod Integration", description: "Runtime validation + TypeScript type inference với Zod.", code: "import { z } from 'zod';\\n\\nconst UserSchema = z.object({\\n  name: z.string().min(1),\\n  email: z.string().email(),\\n  age: z.number().min(0).optional(),\\n});\\n\\n// Infer TypeScript type từ schema\\ntype User = z.infer<typeof UserSchema>;\\n// { name: string; email: string; age?: number }", tip: "Zod = single source of truth cho cả runtime + compile time." },
    ],
    checklist: [
      { id: "c12-1", label: "Khai báo interface cho tất cả component props" },
      { id: "c12-2", label: "Tạo 1 generic component (List hoặc Select)" },
      { id: "c12-3", label: "Type tất cả event handlers đúng cách" },
      { id: "c12-4", label: "Dùng Zod validate 1 form hoặc API response" },
      { id: "c12-5", label: "Không còn any nào trong codebase" },
    ],
  },
  {
    day: 13,
    notesPlaceholder: "Ghi chú về Next.js App Router...",
    steps: [
      { id: 1, title: "Server vs Client Components", description: "Mặc định tất cả components trong App Router là Server Components. Chỉ thêm 'use client' khi cần interactivity.", code: "// Server Component (default) — chạy trên server\\nexport default function Page() {\\n  // Có thể fetch data trực tiếp, không cần useEffect\\n  return <h1>Hello</h1>;\\n}\\n\\n// Client Component — chạy trên browser\\n'use client';\\nimport { useState } from 'react';\\nexport default function Counter() {\\n  const [count, setCount] = useState(0);\\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\\n}", tip: "Rule: Server Component cho static và data-fetching. Client Component chỉ cho useState, useEffect, onClick, onChange." },
      { id: 2, title: "Layouts và Templates", description: "layout.tsx wrap tất cả pages trong cùng folder. Persist state between navigations. Template re-mount mỗi lần navigate.", code: "// app/(app)/layout.tsx\\nexport default function AppLayout({ children }: { children: React.ReactNode }) {\\n  return (\\n    <div>\\n      <TopNav />\\n      <main>{children}</main>\\n    </div>\\n  );\\n}" },
      { id: 3, title: "Loading và Error states", description: "loading.tsx = instant loading UI. error.tsx = error boundary. not-found.tsx = 404 page.", code: "// app/(app)/daily/loading.tsx\\nexport default function Loading() {\\n  return <div>Loading...</div>;\\n}\\n\\n// app/(app)/daily/error.tsx\\n'use client';\\nexport default function Error({ error, reset }) {\\n  return <button onClick={reset}>Try again</button>;\\n}" },
      { id: 4, title: "Metadata API", description: "SEO-friendly metadata cho mỗi page. Có thể static hoặc dynamic.", code: "// Static metadata\\nexport const metadata: Metadata = {\\n  title: 'Daily Log',\\n  description: '30-day upgrade log',\\n};\\n\\n// Dynamic metadata\\nexport async function generateMetadata({ params }) {\\n  return { title: `Day ${params.day}` };\\n}" },
    ],
    checklist: [
      { id: "c13-1", label: "Phân biệt được Server vs Client Component" },
      { id: "c13-2", label: "Tạo layout.tsx cho app route group" },
      { id: "c13-3", label: "Thêm loading.tsx cho 1 route" },
      { id: "c13-4", label: "Thêm metadata cho tất cả pages" },
      { id: "c13-5", label: "Không dùng 'use client' khi không cần thiết" },
    ],
  },
  {
    day: 14,
    notesPlaceholder: "Ghi chú về Git Workflow...",
    steps: [
      { id: 1, title: "Branching Strategy", description: "main = production. develop = staging. feature/* = đang code. hotfix/* = fix gấp trên production.", code: "# Tạo feature branch từ develop\\ngit checkout develop\\ngit pull origin develop\\ngit checkout -b feature/daily-detail-page\\n\\n# Sau khi xong, tạo PR: feature/* → develop\\n# Sau khi test: develop → main" },
      { id: 2, title: "Conventional Commits", description: "Format message commit theo convention giúp changelog tự động và team dễ đọc.", code: "# Format: type(scope): message\\nfeat(daily): add step-by-step detail page\\nfix(nav): active state not updating on route change\\nstyle(card): adjust hover glow opacity\\nrefactor(lib): extract day detail data to separate file\\ndocs(readme): update setup instructions\\nchore(deps): bump next to 15.2" },
      { id: 3, title: "PR Template", description: "Mỗi Pull Request nên có context rõ ràng để reviewer hiểu nhanh.", code: "## What\\nAdd interactive detail page cho mỗi ngày trong Daily log.\\n\\n## Why\\nUsers cần step-by-step guide + checklist tracking.\\n\\n## How\\n- New route: /daily/[day]\\n- New data: daily-detail-data.ts\\n- localStorage cho checklist + notes\\n\\n## Screenshots\\n[attach screenshots]\\n\\n## Checklist\\n- [ ] TypeScript: no errors\\n- [ ] Mobile responsive\\n- [ ] Tested on Chrome + Firefox" },
      { id: 4, title: "Conflict Resolution", description: "Khi 2 người edit cùng file → merge conflict.", code: "# Pull latest changes\\ngit fetch origin\\ngit rebase origin/develop\\n\\n# Nếu conflict:\\n# 1. Mở file conflict\\n# 2. Chọn giữ code nào (hoặc combine)\\n# 3. git add .\\n# 4. git rebase --continue", tip: "Rebase > merge cho feature branches. Giữ history sạch." },
    ],
    checklist: [
      { id: "c14-1", label: "Setup branching: main, develop, feature/*" },
      { id: "c14-2", label: "Viết 5 commits theo Conventional Commits" },
      { id: "c14-3", label: "Tạo 1 PR với template đầy đủ" },
      { id: "c14-4", label: "Resolve 1 merge conflict thành công" },
    ],
  },
  {
    day: 15,
    notesPlaceholder: "Viết thử 3 STAR stories của riêng bạn ở đây — mỗi story nên kể được trong 2 phút...",
    steps: [
      {
        id: 1,
        title: "STAR Framework — Hiểu đúng từng phần",
        description: `STAR là framework kể chuyện chuẩn cho behavioral interviews. Interviewer hỏi "Tell me about a time when..." → bạn trả lời theo 4 phần.\n\nMỗi phần có MỤC ĐÍCH riêng:\n\n⭐ S — Situation (15% thời gian)\nĐặt bối cảnh: KHI NÀO, Ở ĐÂU, với AI.\nGiữ ngắn gọn — chỉ đủ để người nghe hiểu context.\n❌ Đừng kể lể quá dài về background.\n\n⭐ T — Task (10% thời gian)\nVai trò CỤ THỂ CỦA BẠN là gì? Bạn chịu trách nhiệm gì?\nPhân biệt rõ: task của TEAM vs task của BẠN.\n❌ Đừng nói chung chung "team cần làm...".\n\n⭐ A — Action (60% thời gian)\nĐây là phần QUAN TRỌNG NHẤT. Chi tiết từng bước BẠN đã làm.\nDùng "Tôi đã..." chứ không phải "Chúng tôi đã...".\nNêu ra quyết định, lý do, và sáng kiến của bạn.\n❌ Đừng nói kết quả ở đây — giữ suspense.\n\n⭐ R — Result (15% thời gian)\nKết quả ĐO ĐƯỢC. Dùng số liệu nếu có.\nRút ra bài học gì? Bạn sẽ làm khác gì lần sau?`,
        code: `// Tỷ lệ thời gian khi nói (tổng ~2 phút)
// ┌──────────────────────────────────────────┐
// │  S: Situation  │ ~15-20 giây             │
// │  T: Task       │ ~10-15 giây             │
// │  A: Action     │ ~60-75 giây (TRỌNG TÂM) │
// │  R: Result     │ ~15-20 giây             │
// └──────────────────────────────────────────┘
// Tổng: 90-120 giây = 1.5-2 phút`,
        tip: "Mẹo vàng: Action chiếm 60% câu trả lời. Nếu bạn nói S và T quá dài, interviewer sẽ mất tập trung trước khi nghe phần hay nhất."
      },
      {
        id: 2,
        title: "Câu hỏi interview nào dùng STAR?",
        description: `Không phải mọi câu hỏi interview đều dùng STAR. STAR chỉ dùng cho BEHAVIORAL questions — câu hỏi bắt đầu bằng:\n\n✅ Dùng STAR:\n• "Tell me about a time when..."\n• "Give me an example of..."\n• "Describe a situation where..."\n• "How did you handle..."\n• "What did you do when..."\n\n❌ KHÔNG dùng STAR (trả lời trực tiếp):\n• "What is React?" → định nghĩa\n• "How does useEffect work?" → giải thích kỹ thuật\n• "Why should we hire you?" → elevator pitch\n\n🎯 Top 5 câu behavioral cho Frontend Junior:\n\n1. "Tell me about a challenging bug you fixed."\n2. "Describe a time you had to learn something new quickly."\n3. "Give an example of working with a difficult teammate."\n4. "Tell me about a project you're proud of."\n5. "Describe a time you received critical feedback."`,
        tip: "Chuẩn bị sẵn 5 STAR stories trước interview. Mỗi story có thể adapt cho nhiều câu hỏi khác nhau."
      },
      {
        id: 3,
        title: "Example 1: Debugging — Fix bug production",
        description: `Đây là STAR story mẫu cho câu hỏi: "Tell me about a challenging bug you fixed."\n\nHãy đọc kỹ cách phân bổ chi tiết cho từng phần:`,
        code: `// ⭐ STAR Story: Fixing a Production Bug

// S — Situation (ngắn gọn, đặt context)
"Trong dự án portfolio cá nhân dùng Next.js 15,
tôi phát hiện trang Daily Log bị mất dữ liệu
checklist mỗi khi user refresh page."

// T — Task (vai trò CỦA BẠN)
"Tôi cần tìm và fix bug này vì nó ảnh hưởng
trực tiếp đến trải nghiệm tracking progress
của người dùng."

// A — Action (CHI TIẾT — phần quan trọng nhất)
"Đầu tiên, tôi dùng Chrome DevTools để kiểm tra
localStorage — data đang được lưu đúng key nhưng
không được load lại khi component mount.

Tôi phát hiện useEffect dependency array bị thiếu
'dayNum', khiến effect chỉ chạy 1 lần cho day đầu
tiên mà không re-run khi navigate sang ngày khác.

Tôi fix bằng cách thêm [dayNum] vào dependency
array, và thêm cleanup function để reset state
trước khi load data cho ngày mới.

Sau đó, tôi viết thêm 1 utility function
getStorageKey(day, type) để tránh typo trong key."

// R — Result (đo được + bài học)
"Bug được fix, data persist đúng qua page refresh
và navigation. Tôi rút ra bài học: luôn kiểm tra
dependency array kỹ, và dùng React DevTools
Profiler để theo dõi re-render behavior."`,
        tip: "Lưu ý: Action chiếm hơn nửa story. Interviewer muốn thấy QUÁ TRÌNH SUY NGHĨ của bạn, không chỉ kết quả."
      },
      {
        id: 4,
        title: "Example 2: Collaboration — Nhận code review feedback",
        description: `STAR story mẫu cho câu hỏi: "Describe a time you received critical feedback."\n\nStory này showcase khả năng tiếp nhận feedback và growth mindset:`,
        code: `// ⭐ STAR Story: Receiving Critical Code Review

// S — Situation
"Khi submit PR đầu tiên cho trang Dashboard,
senior reviewer reject với 8 comments — hầu hết
về thiếu error handling và TypeScript any types."

// T — Task
"Tôi cần address tất cả feedback, không chỉ fix
code mà còn hiểu TẠI SAO senior yêu cầu những
thay đổi đó để không lặp lại."

// A — Action
"Thay vì chỉ fix theo comment, tôi:

1. Đọc kỹ từng comment, ghi note những pattern
   mình chưa biết (error boundaries, Zod validation)

2. Hỏi senior 1 câu cụ thể: 'Giữa try-catch
   tổng quát vs error boundary cho từng component,
   approach nào phù hợp cho case này?'

3. Refactor toàn bộ PR: thêm proper TypeScript
   interfaces, replace 5 chỗ dùng 'any',
   thêm loading + error states cho mọi fetch call

4. Tạo 1 checklist riêng cho bản thân:
   'PR self-review checklist' gồm 8 items kiểm tra
   trước khi submit PR lần sau."

// R — Result
"PR merged sau lần review thứ 2 — chỉ 1 minor nit.
Senior khen initiative tạo checklist. Từ đó,
3 PRs tiếp theo đều merged sau 1 lần review.
Tôi cũng share checklist cho 2 bạn cùng team."`,
        tip: "Story này thể hiện: humility (nhận feedback), initiative (hỏi thêm + tạo checklist), và impact (share cho team)."
      },
      {
        id: 5,
        title: "Example 3: Learning — Tự học technology mới",
        description: `STAR story mẫu cho câu hỏi: "Tell me about a time you had to learn something new quickly."\n\nStory này đặc biệt phù hợp cho fresher vì showcase learning ability:`,
        code: `// ⭐ STAR Story: Learning Next.js App Router

// S — Situation
"Trong kế hoạch 30 ngày nâng cấp từ Fresher lên
Junior, ngày D13 yêu cầu tôi migrate project
từ kiến thức React thuần sang Next.js App Router
— một paradigm hoàn toàn mới với Server Components."

// T — Task
"Tôi cần hiểu và áp dụng App Router trong 2 ngày
để build dynamic route /daily/[day] với data
fetching, loading states, và SEO metadata."

// A — Action
"Tôi chia thành 3 bước:

1. LEARN (4 giờ): Đọc official docs Next.js,
   focus vào 3 concepts: Server vs Client Components,
   dynamic routes, và Metadata API.
   Ghi note so sánh với React SPA.

2. BUILD (6 giờ): Implement /daily/[day] route:
   - Server component cho initial render
   - 'use client' chỉ cho interactive parts
     (checklist toggle, notes textarea)
   - generateMetadata() cho dynamic SEO

3. VALIDATE (2 giờ): Test trên 3 devices,
   chạy Lighthouse audit, fix 2 issues:
   - Missing loading.tsx → thêm skeleton UI
   - Image không dùng next/image → migrate"

// R — Result
"Hoàn thành đúng 2 ngày. Page đạt Lighthouse
Performance 95. Quan trọng hơn, tôi tạo được
mental model rõ ràng: 'Server for data + SEO,
Client chỉ cho interactivity.'
Kiến thức này apply cho tất cả pages còn lại."`,
        tip: "Fresher nên có ít nhất 2 'learning stories'. Nó cho thấy bạn có khả năng tự học — kỹ năng quan trọng nhất với junior."
      },
      {
        id: 6,
        title: "Anti-patterns — Lỗi phổ biến khi dùng STAR",
        description: `Những lỗi khiến STAR story của bạn mất điểm:\n\n❌ Anti-pattern 1: "Chúng tôi đã..."
→ Dùng "Tôi đã..." — interviewer muốn nghe VAI TRÒ CỦA BẠN\n\n❌ Anti-pattern 2: Situation quá dài
→ S chỉ cần 2-3 câu. Nếu bạn nói S hơn 30 giây → quá dài\n\n❌ Anti-pattern 3: Action quá mơ hồ
→ "Tôi đã nghiên cứu và fix" ← KHÔNG ĐỦ
→ "Tôi dùng DevTools kiểm tra network tab, phát hiện API trả 403, check token → valid, check CORS → ok, cuối cùng tìm ra missing role claim trong JWT" ← CỤ THỂ\n\n❌ Anti-pattern 4: Không có Result đo được
→ "Bug được fix" ← CHƯA ĐỦ
→ "Bug được fix. Error rate giảm từ 5% → 0.2%. Page load time cải thiện 40%" ← CÓ SỐ\n\n❌ Anti-pattern 5: Kể chuyện negative mà không có lesson
→ Kể thất bại = OK, nhưng PHẢI có "Tôi học được..." ở cuối\n\n❌ Anti-pattern 6: Story quá dài (>3 phút)
→ Aim cho 90-120 giây. Practice với timer.`,
        code: `// ❌ Cách trả lời TỆ
"Chúng tôi có một dự án, team gồm 5 người,
dùng React, làm trong 3 tháng. Có nhiều vấn đề.
Cuối cùng chúng tôi fix được."

// ✅ Cách trả lời TỐT
"Trong dự án e-commerce (Next.js, 3 FE devs),
tôi phụ trách trang checkout (S).

Trang bị abandoned rate 60% — tôi cần giảm
xuống dưới 40% (T).

Tôi phân tích user flow bằng Hotjar, phát hiện
form validation chạy onSubmit thay vì onChange
khiến user không biết lỗi cho đến bước cuối.
Tôi refactor sang real-time validation với
Zod + React Hook Form, thêm inline error
messages, và progress indicator (A).

Abandoned rate giảm từ 60% → 35%.
Form completion time giảm 25% (R)."`,
        tip: "Trick: Record bản thân nói STAR story, nghe lại, và tự đánh giá. Bạn sẽ ngạc nhiên về những lỗi mình phát hiện được."
      },
      {
        id: 7,
        title: "STAR cho Presentation & Demo Day",
        description: `STAR không chỉ dùng cho interview — nó cực kỳ hiệu quả cho project presentations, demo days, và khi viết case studies trên portfolio.\n\nKhi PRESENT project cho team hoặc stakeholder:`,
        code: `// Template: Project Presentation (5 phút)

// 1. SITUATION — Tại sao project này tồn tại? (30s)
"Fresher frontend developers thường học rời rạc,
không có structured path. Không biết ngày nào
học gì, không track được progress."

// 2. TASK — Bạn giải quyết vấn đề gì? (20s)
"Tôi build một learning tracker: 30 ngày,
mỗi ngày có step-by-step guide, interactive
checklist, và personal notes."

// 3. ACTION — Demo + Technical decisions (3 phút)
"Tech stack: Next.js 15, TypeScript, CSS Modules.
[Live demo]
- Show daily card grid → click vào D15
- Show step accordion với syntax highlighted code
- Show checklist toggle + localStorage persist
- Show responsive trên mobile

Technical highlights:
- Dynamic route /daily/[day] — Server Components
- 31 ngày content trong type-safe data layer
- Auto-save notes, no backend needed
- Lighthouse Performance: 95"

// 4. RESULT — Impact + Next steps (30s)
"31 daily guides hoàn chỉnh,
150+ checklist items, syntax highlighted code.
Next: thêm auth + cloud sync cho progress."

// Tổng: ~5 phút — perfect cho demo day`,
        tip: "Khi present: DEMO trước, technical details sau. Stakeholder muốn thấy sản phẩm chạy, không phải code architecture."
      },
    ],
    checklist: [
      { id: "c15-1", label: "Hiểu rõ 4 phần S-T-A-R và tỷ lệ thời gian (15-10-60-15)" },
      { id: "c15-2", label: "Viết STAR story cho 'debugging a challenging bug'" },
      { id: "c15-3", label: "Viết STAR story cho 'receiving critical feedback'" },
      { id: "c15-4", label: "Viết STAR story cho 'learning new technology quickly'" },
      { id: "c15-5", label: "Practice nói mỗi story trong đúng 2 phút (dùng timer)" },
      { id: "c15-6", label: "Tránh được 6 anti-patterns khi nói STAR" },
      { id: "c15-7", label: "Viết STAR-format intro cho project presentation" },
      { id: "c15-8", label: "Record bản thân nói 1 STAR story và tự review" },
    ],
  },
  {
    day: 16,
    notesPlaceholder: "Ghi chú về Daily Standup Communication...",
    steps: [
      { id: 1, title: "Template: Yesterday / Today / Blockers", description: "Standup = 2 phút update cho team. Không phải báo cáo chi tiết — chỉ 3 điều.", code: "Yesterday: Hoàn thành responsive layout cho Daily page.\\nToday: Bắt đầu implement checklist tracking với localStorage.\\nBlocker: API endpoint /api/progress chưa ready, cần BE confirm schema." },
      { id: 2, title: "Anti-pattern: Rambling", description: "❌ 'Hôm qua tôi mở VSCode, rồi xem lại design, rồi code flexbox, rồi bị lỗi CSS...' → quá chi tiết. ✅ Nói kết quả, không phải quy trình.", tip: "Test: nếu standup > 2 phút → bạn đang ramble." },
      { id: 3, title: "Cách nói blocker hiệu quả", description: "Blocker = thứ BẠN không thể tự giải quyết. Nói rõ: gì bị block, cần ai help, deadline.", code: "// ❌ Vague\\nBlocker: API bị lỗi.\\n\\n// ✅ Specific\\nBlocker: POST /api/tasks trả 422. Cần BE review\\nrequest body schema. Blocking task FE-42.\\nCần trả lời trước 2pm." },
      { id: 4, title: "Async standup (Slack/Discord)", description: "Remote team thường dùng async standup. Format tương tự nhưng viết text.", code: "🟢 *Yesterday*: Merged PR #47 — daily detail page\\n🔵 *Today*: Add localStorage for checklist + notes\\n🔴 *Blocker*: None\\n\\n📊 Sprint progress: 6/10 tasks done" },
    ],
    checklist: [
      { id: "c16-1", label: "Viết standup update cho ngày hôm nay" },
      { id: "c16-2", label: "Giữ mỗi update dưới 2 phút" },
      { id: "c16-3", label: "Viết 1 blocker report rõ ràng" },
      { id: "c16-4", label: "Practice async standup format trên Slack" },
    ],
  },
  {
    day: 17,
    notesPlaceholder: "Ghi chú về Code Review Etiquette...",
    steps: [
      { id: 1, title: "Giving feedback — Be kind + specific", description: "Không nói 'code xấu'. Nói cụ thể: 'Có thể dùng optional chaining ở line 42 để handle null case.'", code: "// ❌ Bad feedback\\n'This is wrong.'\\n'Why did you do this?'\\n\\n// ✅ Good feedback\\n'Consider using optional chaining here to avoid\\nthe potential null reference at line 42.'\\n\\n'Nit: could rename `data` to `userProfile`\\nfor clarity. Non-blocking.'" },
      { id: 2, title: "Receiving feedback — Đừng take personally", description: "Code review KHÔNG phải personal attack. Reviewer đang help code tốt hơn, không phải judge bạn.", tip: "Nếu không hiểu feedback → hỏi. 'Could you explain the concern with this approach?' tốt hơn defensive response." },
      { id: 3, title: "PR size matters", description: "Small PR dễ review hơn. Aim: < 400 lines changed. Nếu feature lớn → chia thành multiple PRs.", code: "// PR chain cho 1 feature lớn\\nPR 1: Add data types + data layer (daily-detail-data.ts)\\nPR 2: Add [day] route + page component\\nPR 3: Add interactive checklist + localStorage\\nPR 4: Add notes textarea + auto-save" },
      { id: 4, title: "LGTM, Nit, Blocking", description: "LGTM = Looks Good To Me (approve). Nit = nhỏ, không cần fix bây giờ. Blocking = phải fix trước khi merge.", code: "[LGTM] PR looks great, clean code!\\n\\n[Nit] Line 15: consider more descriptive var name.\\n\\n[Blocking] Missing error handling for fetch call\\nat line 42. Could throw unhandled rejection." },
    ],
    checklist: [
      { id: "c17-1", label: "Review 1 PR và để lại constructive feedback" },
      { id: "c17-2", label: "Nhận feedback không defensive" },
      { id: "c17-3", label: "Chia 1 PR lớn thành 2-3 PRs nhỏ" },
      { id: "c17-4", label: "Dùng label Nit vs Blocking trong review" },
    ],
  },
  {
    day: 18,
    notesPlaceholder: "Ghi chú về Task Estimation...",
    steps: [
      { id: 1, title: "T-shirt sizing: S, M, L, XL", description: "Dùng t-shirt sizes cho rough estimate. S = vài giờ, M = 1-2 ngày, L = 3-5 ngày, XL = cần break down.", code: "Feature: User Profile Page\\n\\nS: Update text/color = 2-3 hours\\nM: New component = 1-2 days\\nL: Full page with API = 3-5 days\\nXL: Multi-page flow = break down needed" },
      { id: 2, title: "Break down technique", description: "Chia task thành sub-tasks nhỏ nhất có thể estimate được. Mỗi sub-task < 4 hours.", code: "Feature: Daily Detail Page → Total: ~4 days\\n\\n1. Data types + sample data: 2h\\n2. Dynamic route [day]: 2h\\n3. Step accordion UI: 4h\\n4. Checklist component: 3h\\n5. localStorage persistence: 2h\\n6. Notes textarea + auto-save: 2h\\n7. Responsive + polish: 4h\\n8. Buffer (20%): 4h" },
      { id: 3, title: "Buffer rule: +20-30%", description: "Luôn thêm buffer cho unexpected issues. Junior dev nên +30%, senior +20%.", tip: "Parkinson's law: work expands to fill the time. Buffer là cho unexpected bugs, NOT cho procrastination." },
      { id: 4, title: "Track accuracy", description: "Sau mỗi task, so sánh estimate vs actual. Dần dần bạn sẽ estimate chính xác hơn.", code: "Task: Checklist Component\\nEstimate: 3 hours\\nActual: 5 hours\\nDifference: +67%\\nReason: localStorage edge case took extra time\\nLesson: Add buffer for persistence features" },
    ],
    checklist: [
      { id: "c18-1", label: "Estimate 3 tasks dùng t-shirt sizing" },
      { id: "c18-2", label: "Break down 1 task L thành sub-tasks" },
      { id: "c18-3", label: "Thêm 20% buffer vào estimate" },
      { id: "c18-4", label: "Track estimate vs actual cho 1 task đã hoàn thành" },
    ],
  },
  {
    day: 19,
    notesPlaceholder: "Ghi chú về Technical Writing...",
    steps: [
      { id: 1, title: "Viết PR description tốt", description: "PR description = ngữ cảnh cho reviewer. What (làm gì), Why (tại sao), How (làm thế nào).", code: "## What\\nAdd interactive step-by-step guide cho daily cards.\\n\\n## Why\\nUsers cần structured content để learn by doing.\\nEach day needs actionable steps + progress tracking.\\n\\n## How\\n- Created /daily/[day] dynamic route\\n- Added daily-detail-data.ts with 31 day entries\\n- Implemented checklist with localStorage\\n\\n## Testing\\n- Tested D0, D5, D9 detail pages\\n- Verified localStorage persistence across refresh" },
      { id: 2, title: "Commit messages", description: "Good commit message = giao tiếp tương lai. 5 năm sau ai đọc git log vẫn hiểu.", code: "// ❌ Bad\\ngit commit -m 'fix'\\ngit commit -m 'update stuff'\\n\\n// ✅ Good\\ngit commit -m 'fix(nav): resolve active state not\\nupdating when navigating between daily pages'\\n\\ngit commit -m 'feat(checklist): persist checked state\\nto localStorage per-day key'" },
      { id: 3, title: "Bug reports", description: "Bug report tốt = fix nhanh. Gồm: Expected, Actual, Steps to reproduce, Environment.", code: "**Bug**: Checklist resets on page refresh\\n\\n**Expected**: Checked items persist after refresh\\n**Actual**: All items unchecked after F5\\n\\n**Steps to reproduce**:\\n1. Go to /daily/0\\n2. Check item 'Fonts load đúng'\\n3. Refresh page (F5)\\n4. Item is unchecked\\n\\n**Environment**: Chrome 134, macOS\\n**Console errors**: None" },
      { id: 4, title: "README template", description: "Mỗi repo cần README rõ ràng: what, how to run, tech stack, structure.", tip: "README = ấn tượng đầu tiên. Recruiter thường chỉ đọc README trước khi xem code." },
    ],
    checklist: [
      { id: "c19-1", label: "Viết 1 PR description theo template What/Why/How" },
      { id: "c19-2", label: "Viết 3 commit messages theo Conventional format" },
      { id: "c19-3", label: "Viết 1 bug report đầy đủ" },
      { id: "c19-4", label: "Update README cho project hiện tại" },
    ],
  },
  {
    day: 20,
    notesPlaceholder: "Ghi chú về Asking Questions Effectively...",
    steps: [
      { id: 1, title: "XY Problem", description: "Bạn muốn X, bạn nghĩ Y là cách giải, bạn hỏi về Y. Nhưng Y sai hướng → phí thời gian.", code: "// ❌ XY Problem\\n'Làm sao parse last 3 chars of filename?'\\n// Thực ra muốn: lấy file extension\\n\\n// ✅ Hỏi đúng\\n'Tôi cần lấy file extension từ filename.\\nĐang parse last 3 chars nhưng .ts chỉ có 2.\\nCó cách nào tốt hơn?'" },
      { id: 2, title: "MRE — Minimal Reproducible Example", description: "Khi hỏi debug help, đưa code ngắn nhất có thể reproduce vấn đề.", code: "// ❌ Paste 200 lines code\\n'Help tôi debug code này...'\\n\\n// ✅ Minimal example\\n'useState không update khi click:\\n\\nconst [items, setItems] = useState([1,2,3]);\\nconst add = () => {\\n  items.push(4); // mutate trực tiếp\\n  setItems(items); // same reference → no re-render\\n};\\n\\nExpected: list shows 4 items. Actual: no change.'" },
      { id: 3, title: "StackOverflow format", description: "Title = câu hỏi cụ thể. Body = context + code + expected vs actual.", tip: "Rubber duck debugging: explain problem to someone (hoặc con vịt cao su). 50% cases bạn tự tìm ra answer." },
      { id: 4, title: "Khi nào hỏi vs khi nào tự research", description: "Rule of 30: Nếu stuck > 30 phút sau khi đã Google, đọc docs, thử 3 approaches → hỏi. Dưới 30 phút → tiếp tục research.", code: "// Trước khi hỏi, đã thử:\\n1. Google error message chính xác\\n2. Đọc official docs section liên quan\\n3. Thử 2-3 approaches khác nhau\\n4. Check StackOverflow/GitHub Issues\\n\\n// Nếu vẫn stuck → hỏi với context:\\nWhat I want: [X]\\nWhat I tried: [1, 2, 3]\\nWhat happened: [error/wrong result]" },
    ],
    checklist: [
      { id: "c20-1", label: "Identify 1 XY problem bạn từng mắc" },
      { id: "c20-2", label: "Tạo 1 MRE cho bug hiện tại" },
      { id: "c20-3", label: "Hỏi 1 câu hỏi trên forum với format đúng" },
      { id: "c20-4", label: "Áp dụng 30-minute rule khi stuck hôm nay" },
    ],
  },
  {
    day: 21,
    notesPlaceholder: "Ghi chú về SWOT Workshop...",
    steps: [
      { id: 1, title: "SWOT Framework", description: "Strengths (điểm mạnh), Weaknesses (điểm yếu), Opportunities (cơ hội), Threats (thách thức). Dùng cho self-assessment.", code: "┌─────────────┬──────────────┐\\n│  STRENGTHS  │  WEAKNESSES  │\\n│  (Internal) │  (Internal)  │\\n├─────────────┼──────────────┤\\n│ OPPORTUNITIES│   THREATS   │\\n│  (External) │  (External)  │\\n└─────────────┴──────────────┘" },
      { id: 2, title: "Strengths & Weaknesses (Internal)", description: "Strengths: kỹ năng bạn giỏi, mindset tốt. Weaknesses: gaps cần improve.", code: "// Example\\nStrengths:\\n- Học nhanh, self-motivated\\n- UI/UX eye — biết thế nào là đẹp\\n- Không ngại đọc docs tiếng Anh\\n\\nWeaknesses:\\n- Estimate chưa chính xác\\n- Chưa viết tests\\n- English speaking — chưa tự tin present" },
      { id: 3, title: "Opportunities & Threats (External)", description: "Opportunities: trends, tools, market demand. Threats: competition, tech changes.", code: "Opportunities:\\n- AI tools giúp junior productive hơn\\n- Remote work mở rộng job market\\n- Next.js + TypeScript demand cao\\n\\nThreats:\\n- AI có thể replace simple coding tasks\\n- Competition từ bootcamp graduates\\n- Tech thay đổi nhanh — cần learn liên tục" },
      { id: 4, title: "Action Plan từ SWOT", description: "Transform SWOT thành action items cụ thể với timeline.", code: "From SWOT → 30-day Actions:\\n\\nLeverage Strengths:\\n→ Build portfolio showcase UI/UX skills\\n\\nAddress Weaknesses:\\n→ D23: Learn testing fundamentals\\n→ Practice English: 10 min/day speaking\\n\\nSeize Opportunities:\\n→ Learn AI tools deeply (Claude, Cursor)\\n\\nMitigate Threats:\\n→ Focus on skills AI can't replace: architecture, UX", tip: "Revisit SWOT mỗi 30 ngày. Track progress so với lần trước." },
    ],
    checklist: [
      { id: "c21-1", label: "Liệt kê 5 Strengths" },
      { id: "c21-2", label: "Liệt kê 3 Weaknesses" },
      { id: "c21-3", label: "Liệt kê 3 Opportunities" },
      { id: "c21-4", label: "Liệt kê 3 Threats" },
      { id: "c21-5", label: "Viết 3 action items từ SWOT analysis" },
    ],
  },
  {
    day: 22,
    notesPlaceholder: "Ghi chú về Frontend Specialization...",
    steps: [
      { id: 1, title: "4 Career Paths cho Frontend", description: "UI/UX Engineer: design systems, animations. Performance Engineer: Core Web Vitals, bundling. Full-stack: Next.js, databases. Design System: component libraries, tokens.", code: "Path 1: UI/UX Engineer\\n  → Framer Motion, GSAP, CSS Animations\\n  → Design tokens, Figma → Code\\n\\nPath 2: Performance Engineer\\n  → Lighthouse, Web Vitals, Bundle analysis\\n  → Edge computing, CDN, caching\\n\\nPath 3: Full-stack Frontend\\n  → Next.js API routes, Prisma, databases\\n  → Auth, real-time, deployment\\n\\nPath 4: Design System Engineer\\n  → Storybook, component libraries\\n  → Accessibility, theming, documentation" },
      { id: 2, title: "Chọn path phù hợp", description: "Dựa trên SWOT từ D21. Strengths + market demand = best path.", tip: "Không cần chọn ngay. Explore 2-3 paths trong 3 tháng đầu, rồi focus 1 path." },
      { id: 3, title: "T-shaped skill model", description: "Broad knowledge across frontend + deep in 1 area. The T is: wide top bar + deep vertical bar.", code: "─────── Broad Knowledge ───────\\n  HTML CSS JS React TS Next.js\\n            │\\n            │ Deep Expertise\\n            │ (your chosen path)\\n            │\\n            ▼" },
      { id: 4, title: "30-60-90 day plan", description: "30 days: explore all paths. 60 days: pick 1 and go deep. 90 days: build portfolio project in that path.", code: "Day 1-30: Foundation (bạn đang ở đây!)\\nDay 31-60: Deep dive into chosen path\\n  - Build 2 projects in that area\\n  - Read source code of popular libs\\nDay 61-90: Portfolio + Job prep\\n  - Polish 3 best projects\\n  - Practice interviews\\n  - Apply to 10+ positions" },
    ],
    checklist: [
      { id: "c22-1", label: "Research cả 4 paths và so sánh" },
      { id: "c22-2", label: "Identify path phù hợp với Strengths" },
      { id: "c22-3", label: "Sketch T-shaped skill map của bạn" },
      { id: "c22-4", label: "Viết 30-60-90 day plan" },
    ],
  },
  {
    day: 23,
    notesPlaceholder: "Ghi chú về Testing Fundamentals...",
    steps: [
      { id: 1, title: "Testing Pyramid", description: "Unit tests (nhiều nhất, nhanh nhất) → Integration tests → E2E tests (ít nhất, chậm nhất).", code: "    /\\\\    ← E2E (few, slow)\\n   /  \\\\\\n  /────\\\\  ← Integration (some)\\n /      \\\\\\n/────────\\\\ ← Unit (many, fast)" },
      { id: 2, title: "Vitest — Unit testing", description: "Vitest = Jest replacement, nhanh hơn, built-in TypeScript support.", code: "// math.test.ts\\nimport { describe, it, expect } from 'vitest';\\nimport { add, multiply } from './math';\\n\\ndescribe('add', () => {\\n  it('adds two numbers', () => {\\n    expect(add(1, 2)).toBe(3);\\n  });\\n  it('handles negative', () => {\\n    expect(add(-1, 1)).toBe(0);\\n  });\\n});" },
      { id: 3, title: "Testing Library — Component tests", description: "Test components như user sẽ dùng. Query bằng text, role, label — không bao giờ query bằng CSS class.", code: "import { render, screen, fireEvent } from\\n  '@testing-library/react';\\nimport Counter from './Counter';\\n\\nit('increments count on click', () => {\\n  render(<Counter />);\\n  const button = screen.getByRole('button');\\n  fireEvent.click(button);\\n  expect(screen.getByText('1')).toBeInTheDocument();\\n});" },
      { id: 4, title: "What to test", description: "Test behavior, không test implementation. Test happy path + edge cases + error states.", tip: "Rule: Nếu bug xảy ra → viết test trước khi fix. Đảm bảo bug không quay lại." },
    ],
    checklist: [
      { id: "c23-1", label: "Install Vitest vào project" },
      { id: "c23-2", label: "Viết 3 unit tests cho utility functions" },
      { id: "c23-3", label: "Viết 1 component test với Testing Library" },
      { id: "c23-4", label: "Tests pass khi chạy vitest" },
    ],
  },
  {
    day: 24,
    notesPlaceholder: "Ghi chú về Performance & Core Web Vitals...",
    steps: [
      { id: 1, title: "3 Core Web Vitals", description: "LCP (Largest Contentful Paint): loading speed. FID/INP (Interaction to Next Paint): responsiveness. CLS (Cumulative Layout Shift): visual stability.", code: "LCP  < 2.5s  → Good (hero image, heading loaded)\\nINP  < 200ms → Good (clicks feel instant)\\nCLS  < 0.1   → Good (nothing jumps around)" },
      { id: 2, title: "Lighthouse audit workflow", description: "Chrome DevTools → Lighthouse → Run audit. Check Performance score + opportunities.", code: "// Lighthouse CLI\\nnpx lighthouse http://localhost:3000\\n  --output html\\n  --output-path ./lighthouse-report.html\\n\\n// Key metrics to check:\\n// - Performance score > 90\\n// - LCP < 2.5s\\n// - TBT (Total Blocking Time) < 200ms", tip: "Test với throttled CPU (4x slowdown) để simulate real user devices." },
      { id: 3, title: "Common fixes", description: "Image optimization: next/image, lazy loading. Font optimization: font-display: swap. Code splitting: dynamic imports.", code: "// Image optimization\\nimport Image from 'next/image';\\n<Image src='/hero.jpg' width={800} height={400}\\n  priority  // LCP image: load first\\n/>\\n\\n// Dynamic import\\nconst Chart = dynamic(() => import('./Chart'),\\n  { loading: () => <Skeleton /> }\\n);" },
      { id: 4, title: "Bundle analysis", description: "Kiểm tra bundle size để tìm dependencies nặng. Dùng @next/bundle-analyzer.", code: "// next.config.ts\\nconst withAnalyzer = require('@next/bundle-analyzer')({\\n  enabled: process.env.ANALYZE === 'true',\\n});\\n\\n// Run\\nANALYZE=true npm run build" },
    ],
    checklist: [
      { id: "c24-1", label: "Chạy Lighthouse audit cho trang chính" },
      { id: "c24-2", label: "Performance score > 90" },
      { id: "c24-3", label: "Dùng next/image cho tất cả images" },
      { id: "c24-4", label: "Không có layout shift khi page load" },
    ],
  },
  {
    day: 25,
    notesPlaceholder: "Ghi chú về Accessibility (a11y)...",
    steps: [
      { id: 1, title: "ARIA roles basics", description: "ARIA giúp screen readers hiểu UI. Semantic HTML đã có roles built-in. Chỉ thêm ARIA khi HTML không đủ.", code: "<!-- Semantic HTML = built-in ARIA -->\\n<button>Submit</button>\\n<!-- = role='button' tự động -->\\n\\n<nav>...</nav>\\n<!-- = role='navigation' tự động -->\\n\\n<!-- Custom widget cần ARIA -->\\n<div role='tablist'>\\n  <div role='tab' aria-selected='true'>Tab 1</div>\\n  <div role='tabpanel'>Content 1</div>\\n</div>", tip: "Rule #1: No ARIA is better than bad ARIA. Dùng semantic HTML trước." },
      { id: 2, title: "Keyboard navigation", description: "Tất cả interactive elements phải accessible bằng keyboard: Tab, Enter, Escape, Arrow keys.", code: "// Focus management\\n<button onKeyDown={(e) => {\\n  if (e.key === 'Enter' || e.key === ' ') {\\n    handleClick();\\n  }\\n  if (e.key === 'Escape') {\\n    closeModal();\\n  }\\n}}>\\n  Open Menu\\n</button>\\n\\n// Focus trap cho modal\\n// tabIndex={0} cho focusable elements" },
      { id: 3, title: "Color contrast", description: "WCAG AA yêu cầu: normal text 4.5:1, large text 3:1 contrast ratio.", code: "/* ✅ Good contrast */\\ncolor: #16191f;     /* dark on white */\\nbackground: #ffffff; /* ratio: 16.5:1 */\\n\\n/* ❌ Poor contrast */\\ncolor: #d5dbdb;     /* light gray on white */\\nbackground: #ffffff; /* ratio: 1.5:1 */\\n\\n/* Check: Chrome DevTools > Elements >\\n   Inspect element > color picker >\\n   shows contrast ratio */" },
      { id: 4, title: "Screen reader testing", description: "Test với VoiceOver (Mac) hoặc NVDA (Windows). Check heading order, alt text, form labels.", code: "// Alt text cho images\\n<img alt='Dashboard showing 3% progress' />\\n\\n// Labels cho form inputs\\n<label htmlFor='email'>Email</label>\\n<input id='email' type='email' />\\n\\n// aria-label cho icon buttons\\n<button aria-label='Close menu'>\\n  <XIcon />\\n</button>" },
    ],
    checklist: [
      { id: "c25-1", label: "Tất cả buttons có accessible name" },
      { id: "c25-2", label: "Tab qua toàn bộ page không bị stuck" },
      { id: "c25-3", label: "Color contrast ratio > 4.5:1 cho text" },
      { id: "c25-4", label: "Chạy Lighthouse Accessibility > 90" },
      { id: "c25-5", label: "Test 1 page với screen reader" },
    ],
  },
  {
    day: 26,
    notesPlaceholder: "Ghi chú về Portfolio Building...",
    steps: [
      { id: 1, title: "What recruiters look at", description: "1. README (30s scan). 2. Live demo link. 3. Code quality (naming, structure). 4. Commit history (frequency, messages).", code: "Recruiter 30-second scan:\\n1. Does it have a live demo? → click\\n2. Does the app work? → test 3 features\\n3. Is the code clean? → open 1 file\\n4. Git history? → 'fix' 'fix' 'fix' = ❌\\n\\nResult: review thêm hoặc skip" },
      { id: 2, title: "STAR format cho project descriptions", description: "Describe projects dùng STAR: Situation (project context), Task (your role), Action (tech decisions), Result (metrics).", code: "## Frontend Daily — 30-day Upgrade Journey\\n\\n**Situation**: Cần structured learning path từ Fresher → Junior\\n**Task**: Build interactive portfolio tracking daily progress\\n**Action**: Next.js 15 + TypeScript, AWS-style design,\\n  localStorage persistence, dynamic routing\\n**Result**: 31 daily guides, 100+ checklist items,\\n  auto-saving notes. Live at: [url]" },
      { id: 3, title: "3 Project Rule", description: "Portfolio chỉ cần 3 project tốt hơn 10 project dở. Mỗi project showcase 1 skill khác nhau.", code: "Project 1: Full-stack app (Next.js + API)\\n  → Shows: end-to-end ability\\n\\nProject 2: UI-heavy project (animations, design)\\n  → Shows: CSS mastery, eye for design\\n\\nProject 3: Utility/Tool (open source contribution)\\n  → Shows: developer thinking, problem-solving" },
      { id: 4, title: "Polish checklist", description: "Before showing to anyone: responsive, no console errors, loading states, error states, SEO meta tags, favicon.", tip: "Deploy trên Vercel + custom domain = professional impression." },
    ],
    checklist: [
      { id: "c26-1", label: "Viết STAR description cho project hiện tại" },
      { id: "c26-2", label: "Kiểm tra live demo hoạt động smooth" },
      { id: "c26-3", label: "README có setup instructions rõ ràng" },
      { id: "c26-4", label: "Không có console errors trên production" },
    ],
  },
  {
    day: 27,
    notesPlaceholder: "Ghi chú về Open Source Contribution...",
    steps: [
      { id: 1, title: "Tại sao contribute Open Source?", description: "1. Code review từ experienced devs. 2. Real-world codebase experience. 3. Network + reputation. 4. Resume booster.", tip: "Không cần contribute code ngay. Docs, tests, bug reports đều có giá trị." },
      { id: 2, title: "Tìm Good First Issues", description: "GitHub label 'good first issue' = dành cho newcomers. Tìm repos bạn dùng hàng ngày.", code: "// Tìm issues\\nGitHub: label:good-first-issue language:TypeScript\\n\\nRecommended repos cho beginners:\\n- next.js (docs, examples)\\n- shadcn/ui (components)\\n- t3-oss/create-t3-app\\n- vercel/ai (AI SDK)\\n- radix-ui/primitives" },
      { id: 3, title: "Fork → Branch → PR workflow", description: "Fork repo → clone → tạo branch → commit → push → tạo PR.", code: "# 1. Fork repo trên GitHub\\n# 2. Clone fork\\ngit clone https://github.com/YOU/repo.git\\n\\n# 3. Add upstream\\ngit remote add upstream https://github.com/ORIGINAL/repo.git\\n\\n# 4. Create branch\\ngit checkout -b fix/typo-in-docs\\n\\n# 5. Make changes, commit, push\\ngit push origin fix/typo-in-docs\\n\\n# 6. Create PR on GitHub" },
      { id: 4, title: "PR tốt cho Open Source", description: "Đọc CONTRIBUTING.md trước. Follow code style. Viết test nếu cần. Keep PR small.", code: "PR Template cho Open Source:\\n\\n## Description\\nFix typo in installation docs.\\n\\n## Related Issue\\nCloses #142\\n\\n## Changes\\n- Fixed 'npm instal' → 'npm install' in README.md\\n\\n## Checklist\\n- [x] Read CONTRIBUTING.md\\n- [x] Follows code style\\n- [x] Tested locally" },
    ],
    checklist: [
      { id: "c27-1", label: "Star 5 repos bạn muốn contribute" },
      { id: "c27-2", label: "Đọc CONTRIBUTING.md của 1 repo" },
      { id: "c27-3", label: "Fork + clone 1 repo thành công" },
      { id: "c27-4", label: "Tạo 1 PR (docs, typo fix, hoặc test)" },
    ],
  },
  {
    day: 28,
    notesPlaceholder: "Ghi chú về 90-Day Junior Plan...",
    steps: [
      { id: 1, title: "Month 1: Foundation (Done!)", description: "Bạn đã hoàn thành foundation: HTML, CSS, JS, React, TypeScript, Next.js, Git, Soft Skills.", code: "Month 1 Achievements:\\n✅ HTML5 Semantic, Flexbox, Grid, Responsive\\n✅ ES6+, Async JS, DOM Events\\n✅ React Components, Hooks, State Management\\n✅ TypeScript, Next.js App Router\\n✅ Git Workflow, STAR Method, Communication\\n✅ Testing, Performance, Accessibility\\n✅ Portfolio project deployed" },
      { id: 2, title: "Month 2: Deep Dive", description: "Chọn 1 specialization từ D22. Build 2 projects trong area đó.", code: "Month 2 Plan:\\nWeek 5-6: Project 1 (chosen specialization)\\n  - Full planning → build → deploy\\n  - Practice TDD\\n\\nWeek 7-8: Project 2 (different scale)\\n  - Larger scope, more features\\n  - Include auth, real API, error handling\\n  - Get code review from someone experienced" },
      { id: 3, title: "Month 3: Job Prep", description: "Polish portfolio, practice interviews, network, apply.", code: "Month 3 Plan:\\nWeek 9-10: Polish portfolio\\n  - Refine 3 best projects\\n  - Write case studies\\n  - Optimize for mobile\\n\\nWeek 11-12: Interview prep + apply\\n  - Practice 50 frontend questions\\n  - Mock interviews (2-3)\\n  - Apply to 5 positions/week\\n  - Network: LinkedIn + dev communities" },
      { id: 4, title: "Metrics to track", description: "Track progress với concrete metrics, không phải feelings.", code: "Weekly Metrics:\\n- GitHub commits: >5/week\\n- LeetCode/problems: 3/week\\n- Applications sent: 5/week\\n- Mock interviews: 1/week\\n- Blog posts/docs: 1/week\\n\\nMilestone Metrics:\\n- Projects completed: 3\\n- Interviews done: 5+\\n- Offers received: 1+" },
    ],
    checklist: [
      { id: "c28-1", label: "Review Month 1 achievements" },
      { id: "c28-2", label: "Chọn specialization cho Month 2" },
      { id: "c28-3", label: "Lên plan chi tiết cho Month 2" },
      { id: "c28-4", label: "Setup tracking sheet cho weekly metrics" },
    ],
  },
  {
    day: 29,
    notesPlaceholder: "Ghi chú về Interview Prep...",
    steps: [
      { id: 1, title: "HTML/CSS Questions", description: "Các câu hỏi phổ biến về HTML và CSS trong frontend interviews.", code: "Q: Semantic HTML là gì? Tại sao quan trọng?\\n→ SEO, accessibility, maintainability\\n\\nQ: Flexbox vs Grid — khi nào dùng gì?\\n→ Flex = 1D (nav, buttons). Grid = 2D (layouts)\\n\\nQ: Box model là gì?\\n→ content + padding + border + margin\\n\\nQ: Giải thích CSS specificity\\n→ inline > ID > class > element\\n→ 1000 > 100 > 10 > 1" },
      { id: 2, title: "JavaScript Questions", description: "JS concepts thường hỏi trong interviews.", code: "Q: Closure là gì?\\n→ Function nhớ scope nơi nó được tạo\\n\\nQ: Event loop giải thích?\\n→ Call stack → Task queue → Microtask\\n\\nQ: var vs let vs const?\\n→ var: function scope, hoisted\\n→ let: block scope, no hoist\\n→ const: block scope, no reassign\\n\\nQ: == vs === ?\\n→ == type coercion, === strict" },
      { id: 3, title: "React Questions", description: "React-specific questions cho frontend roles.", code: "Q: Virtual DOM là gì?\\n→ JS representation of real DOM\\n→ React diff 2 trees → minimal updates\\n\\nQ: useEffect cleanup khi nào chạy?\\n→ Trước mỗi re-run + khi unmount\\n\\nQ: Key prop quan trọng tại sao?\\n→ Giúp React track items trong list\\n→ Dùng unique ID, KHÔNG dùng index\\n\\nQ: Server vs Client Components?\\n→ Server: data fetching, no interactivity\\n→ Client: useState, event handlers" },
      { id: 4, title: "Behavioral Questions (STAR)", description: "Câu hỏi behavioral — trả lời bằng STAR format.", code: "Q: Tell me about a time you had to learn\\nsomething new quickly.\\n\\nS: Team cần migration từ Pages Router\\n   sang App Router trong 2 tuần.\\nT: Tôi chịu trách nhiệm migrate 5 pages.\\nA: Đọc docs, tạo spike, pair với senior,\\n   viết migration guide cho team.\\nR: 5 pages migrated, 0 bugs, guide được\\n   dùng cho 10 pages còn lại.", tip: "Prepare 5 STAR stories: teamwork, conflict, learning, failure, leadership." },
    ],
    checklist: [
      { id: "c29-1", label: "Trả lời được 5 câu HTML/CSS" },
      { id: "c29-2", label: "Trả lời được 5 câu JavaScript" },
      { id: "c29-3", label: "Trả lời được 5 câu React" },
      { id: "c29-4", label: "Chuẩn bị 3 STAR stories" },
      { id: "c29-5", label: "Làm 1 mock interview (tự practice hoặc với bạn)" },
    ],
  },
  {
    day: 30,
    notesPlaceholder: "Ghi chú về Review & SWOT Reassessment...",
    steps: [
      { id: 1, title: "Review 30-day journey", description: "Nhìn lại toàn bộ hành trình từ D0 đến D30. Mỗi ngày bạn đã upgrade 1 skill.", code: "Week 1 (Foundation): HTML, CSS, JS basics\\nWeek 2 (React/TS): Components, Hooks, TypeScript, Next.js, Git\\nWeek 3 (Soft Skills): STAR, Communication, Code Review, Writing\\nWeek 4 (Career): Specialization, Testing, Performance, Portfolio\\n\\n🎯 Total skills upgraded: 31\\n📝 Checklists completed: [count your checks!]\\n📓 Notes written: [count your notes!]" },
      { id: 2, title: "SWOT Reassessment", description: "So sánh SWOT hôm nay với SWOT D21. Xem bạn đã improve những gì.", code: "D21 SWOT → D30 SWOT\\n\\nStrengths (new):\\n+ Biết React + TypeScript\\n+ Có portfolio deployed\\n+ Communication framework (STAR)\\n\\nWeaknesses (improved):\\n- Estimate: 40% → 70% accuracy\\n- Testing: 0 → basic unit tests\\n- English: started daily practice\\n\\nWeaknesses (remaining):\\n- System design knowledge\\n- Advanced TypeScript patterns" },
      { id: 3, title: "Celebrate wins", description: "Acknowledge progress. 30 ngày liên tục learn + build = significant achievement.", tip: "Share journey trên LinkedIn hoặc dev community. Bạn xứng đáng được recognized!" },
      { id: 4, title: "Set next 30-day goals", description: "Dựa trên SWOT mới, set goals cho 30 ngày tiếp theo.", code: "Next 30 Days Goals:\\n1. Build Project 2 (chosen specialization)\\n2. Contribute to 1 open source repo\\n3. Complete 30 LeetCode Easy problems\\n4. Write 2 blog posts (Vietnamese + English)\\n5. Apply to 3 Junior positions\\n6. Do 1 mock technical interview" },
    ],
    checklist: [
      { id: "c30-1", label: "Review tất cả 31 ngày đã complete" },
      { id: "c30-2", label: "Viết SWOT mới và so sánh với D21" },
      { id: "c30-3", label: "List 5 biggest wins từ 30 ngày" },
      { id: "c30-4", label: "Set 3 goals cho 30 ngày tiếp theo" },
      { id: "c30-5", label: "Share journey trên social media" },
    ],
  },
];

// Fallback detail cho các ngày chưa có content
export function getDayDetail(day: number): DayDetail {
  const found = DAILY_DETAILS.find((d) => d.day === day);
  if (found) return found;

  // Generic fallback
  return {
    day,
    notesPlaceholder: `Ghi chú về bài học ngày D${day}...`,
    steps: [
      {
        id: 1,
        title: "Đang cập nhật nội dung",
        description: `Chi tiết step-by-step cho D${day} sẽ được thêm vào khi đến ngày học. Hãy quay lại sau!`,
        tip: "Nội dung sẽ bao gồm step-by-step hướng dẫn, code examples, và tips thực tế.",
      },
    ],
    checklist: [
      { id: `c${day}-1`, label: "Đọc tài liệu chính thức về chủ đề hôm nay" },
      { id: `c${day}-2`, label: "Thực hành theo ví dụ trong bài" },
      { id: `c${day}-3`, label: "Áp dụng vào project thực tế" },
      { id: `c${day}-4`, label: "Ghi chú những điểm quan trọng" },
    ],
  };
}
