const exploring = [
  {
    title: "World foundation models",
    desc: "Probing how large-scale generative world models like NVIDIA Cosmos can synthesize controllable, physically plausible driving scenes — and how they fold into sim-to-real pipelines for autonomy.",
  },
  {
    title: "Mixed-reality for autonomous vehicles",
    desc: "Extending on-vehicle MR middleware so synthetic actors, sensors, and edge-case scenarios can be safely exercised on real AVs in the loop.",
  },
  {
    title: "Agentic AI systems",
    desc: "Designing LLM-driven agents that can plan, call tools, and reason over robotics and simulation stacks — from scenario authoring to autonomous test orchestration.",
  },
];

const Exploring = () => {
  return (
    <section id="exploring" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-edge">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-2 w-2 rounded-full bg-vermilion animate-pulse" />
          <p className="text-[11px] uppercase tracking-[0.28em] font-medium text-background/60">
            Currently Exploring
          </p>
        </div>

        <h2 className="display-xl text-4xl md:text-6xl mb-16 max-w-3xl text-balance">
          Open questions I'm <span className="text-vermilion">spending time on</span> right now.
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-background/15">
          {exploring.map((e, i) => (
            <article
              key={e.title}
              className="bg-foreground p-8 md:p-10 group"
            >
              <span className="text-xs text-background/40 tabular-nums">
                0{i + 1} / 0{exploring.length}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl font-medium leading-snug transition-colors group-hover:text-vermilion">
                {e.title}
              </h3>
              <p className="mt-4 text-sm text-background/65 leading-relaxed">
                {e.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exploring;
