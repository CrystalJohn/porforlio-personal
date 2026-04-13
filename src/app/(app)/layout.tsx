import TopNav from "@/components/TopNav";
import PageTransition from "@/components/PageTransition";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <TopNav />
      <main
        className="mx-auto"
        style={{
          margin: "0 auto",
          maxWidth: 960,
          paddingTop: 104,
          paddingLeft: 32,
          paddingRight: 32,
          paddingBottom: 64,
        }}
      >
        <PageTransition>{children}</PageTransition>
      </main>
    </div>
  );
}

