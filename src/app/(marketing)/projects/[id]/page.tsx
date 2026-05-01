import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/marketing-data";
import { Code2, Cpu, Sparkles, Utensils } from "lucide-react";
import { ProjectDetailView } from "./ProjectDetailView";

const getIcon = (id: string) => {
  switch (id) {
    case "frontend-daily":
      return <Sparkles className="h-6 w-6 text-white" />;
    case "real-time-food-delivery":
      return <Utensils className="h-6 w-6 text-white" />;
    case "js-async":
      return <Cpu className="h-6 w-6 text-white" />;
    default:
      return <Code2 className="h-6 w-6 text-white" />;
  }
};

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden mk-theme"
      style={{
        fontFamily: "var(--font-dm-sans, sans-serif)",
        backgroundColor: "var(--mk-bg, #050505)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          top: 0,
          left: 0,
          width: "60vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse at top left, rgba(118, 60, 172, 0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none fixed z-0"
        style={{
          bottom: 0,
          right: 0,
          width: "40vw",
          height: "40vh",
          background:
            "radial-gradient(ellipse at bottom right, rgba(50, 15, 133, 0.15) 0%, transparent 70%)",
        }}
      />

      <ProjectDetailView project={project} icon={getIcon(project.id)} />
    </div>
  );
}
