import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getExternalLinkProps } from "@/lib/external-link";

type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  details: string;
  stack: string[];
  link?: { label: string; href: string };
};

const projects: Project[] = [
  {
    index: "01",
    title: "Sim-to-Real Visual Transfer",
    category: "Generative AI · Perception",
    year: "2026",
    summary:
      "Photorealistic translation of CARLA simulation frames using NVIDIA Cosmos Transfer for sim-to-real adaptation.",
    details:
      "Applied NVIDIA Cosmos Transfer to convert CARLA simulation frames into photorealistic outputs for sim-to-real adaptation. Built evaluation pipelines to compute fidelity metrics (FID, LPIPS), surfaced regressions through Grafana dashboards, and debugged anomalies to distinguish true defects from sampling noise.",
    stack: ["Python", "PyTorch", "Pandas", "Grafana", "GCP"],
  },
  {
    index: "02",
    title: "Synthetic Data Evaluation for AMR",
    category: "Synthetic Data · Object Detection",
    year: "2025",
    summary:
      "Synthetic warehouse datasets generated in NVIDIA Omniverse Replicator, evaluated against real data for AMR perception.",
    details:
      "Generated synthetic warehouse datasets in NVIDIA Omniverse Replicator across varied lighting, clutter, and material conditions. Designed evaluation protocols comparing synthetic-only and mixed-data training regimes, achieving a 15% detection improvement and a 24% accuracy gain on edge cases for autonomous mobile robots.",
    stack: ["NVIDIA Omniverse Replicator", "YOLOv8", "PyTorch"],
  },
];

const Work = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow eyebrow-dot mb-4">Featured Work</p>
            <h2 className="display-xl text-4xl md:text-6xl text-balance">
              Featured projects, <br className="hidden md:block" />
              built end to end.
            </h2>
          </div>
          <p className="max-w-sm text-foreground/70 leading-relaxed">
            A curated set of work spanning autonomous systems, simulation,
            and applied machine learning. Click any project for details.
          </p>
        </div>

        <ul className="border-t border-foreground/90">
          {projects.map((p) => (
            <li key={p.index}>
              <button
                onClick={() => setActive(p)}
                className="group block w-full border-b border-hairline py-8 text-left transition-colors hover:bg-foreground/[0.02]"
              >
                <div className="grid grid-cols-12 items-baseline gap-4">
                  <span className="col-span-2 md:col-span-1 text-xs text-foreground/50 tabular-nums">
                    {p.index}
                  </span>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="text-2xl md:text-4xl font-semibold tracking-tight transition-all duration-500 ease-smooth group-hover:text-vermilion group-hover:translate-x-2">
                      {p.title}
                    </h3>
                  </div>
                  <p className="hidden md:block md:col-span-3 text-sm text-foreground/60">
                    {p.category}
                  </p>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-between md:justify-end gap-3">
                    <span className="text-xs text-foreground/50 tabular-nums">{p.year}</span>
                    <ArrowUpRight
                      size={20}
                      className="text-foreground/40 transition-all duration-500 ease-smooth group-hover:text-vermilion group-hover:rotate-45"
                    />
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl p-0 gap-0 bg-ivory border-foreground/10 rounded-sm overflow-hidden">
          {active && (
            <div className="p-8 md:p-10">
              <p className="eyebrow mb-3">
                <span>{active.index}</span>
                <span className="h-px w-6 bg-foreground/30" />
                <span>{active.year}</span>
              </p>
              <DialogTitle className="display-xl text-3xl md:text-4xl mb-3">
                {active.title}
              </DialogTitle>
              <p className="text-sm text-vermilion font-medium mb-6">
                {active.category}
              </p>
              <DialogDescription className="text-base text-foreground/80 leading-relaxed mb-6">
                {active.details}
              </DialogDescription>

              <div className="mb-6">
                <p className="eyebrow mb-3">Stack</p>
                <ul className="flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {active.link && (
                <a
                  {...getExternalLinkProps(active.link.href)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-vermilion transition-colors"
                >
                  {active.link.label}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Work;
