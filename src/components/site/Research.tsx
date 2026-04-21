import { ArrowUpRight } from "lucide-react";
import { getExternalLinkProps } from "@/lib/external-link";

const publications = [
  {
    title:
      "Constructing a Digital Twin of a Physical Testbed: A Practical Guide for Connected Autonomous Vehicle Simulation",
    venue: "IEEE Intelligent Vehicles (IV) Symposium 2026",
    authors: "R. S. R. Gedela, et al.",
    status: "Accepted, Mar 2026",
    href: "https://ieee-iv.org/2026/",
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-edge">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow eyebrow-dot mb-4">Research</p>
            <h2 className="display-xl text-4xl md:text-5xl text-balance">
              Publications<br />& writing.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed max-w-xs">
              Peer-reviewed work on autonomous systems, digital twins, and
              simulation-based validation.
            </p>
          </div>

          <ol className="md:col-span-8 space-y-2">
            {publications.map((p, i) => (
              <li key={p.title}>
                <a
                  {...getExternalLinkProps(p.href)}
                  className="group block border-t border-hairline py-6 transition-colors hover:bg-foreground/[0.02]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-xs text-foreground/40 tabular-nums">
                          0{i + 1}
                        </span>
                        <span className="text-xs text-vermilion uppercase tracking-widest">
                          {p.venue.split("·")[1]?.trim() ?? ""}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-vermilion/10 text-vermilion">
                          {p.status}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-medium text-foreground leading-snug transition-colors group-hover:text-vermilion">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/60">
                        {p.authors} · {p.venue.split("·")[0]?.trim()}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-foreground/40 mt-1 transition-all group-hover:text-vermilion group-hover:rotate-45"
                    />
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Research;
