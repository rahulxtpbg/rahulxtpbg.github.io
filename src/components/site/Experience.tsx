type Item = {
  role: string;
  org: string;
  location?: string;
  period: string;
  description: string;
};

const work: Item[] = [
  {
    role: "Research Software Engineer",
    org: "The Research Foundation for SUNY",
    location: "NY, USA",
    period: "Mar 2025 — Present",
    description:
      "Leading mixed-reality middleware for an autonomous Lincoln MKZ, a Redis pub/sub messaging layer (-40% latency), a 50+ Hz dual-EKF localization stack (<10 cm RMSE), and a high-fidelity digital twin of an AV proving ground. Guiding a 5-engineer team and mentoring new hires.",
  },
  {
    role: "Software Developer Intern",
    org: "IIT Guwahati Technology Innovation and Development Foundation",
    location: "Guwahati, India",
    period: "Feb 2023 — Apr 2024",
    description:
      "Built a 3D underwater ROV simulator in Unity with physics-driven buoyancy, drag, and thruster modules. Designed mission-based training scenarios with telemetry logging and automated post-mission feedback, reducing manual setup time by 50%.",
  },
];

const education: Item[] = [
  {
    role: "M.S. — Computer Science and Engineering",
    org: "University at Buffalo, The State University of New York",
    period: "2024 — 2026",
    description:
      "GPA 3.81/4.0. Coursework: Algorithms, Deep Learning, Big Data, Operating Systems, Computer Vision.",
  },
  {
    role: "B.Tech — Information Technology",
    org: "University College of Engineering, Vizianagaram",
    period: "2020 — 2024",
    description:
      "CGPA 8.36/10.0. Coursework: Computing in Python, DBMS, Machine Learning, OOP, Probability and Statistics.",
  },
];

const skills = [
  "Python", "C++", "C#", "SQL", "Bash",
  "ROS2", "Autoware", "CARLA", "Unity", "Unreal Engine",
  "NVIDIA Isaac Sim", "NVIDIA Omniverse",
  "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "Keras",
  "AWS", "Docker", "GitHub Actions", "Git",
];

const Timeline = ({ items }: { items: Item[] }) => (
  <ol className="relative">
    {items.map((item, i) => (
      <li
        key={i}
        className="relative grid grid-cols-12 gap-4 border-t border-hairline py-8 first:border-t-foreground/90"
      >
        <div className="col-span-12 md:col-span-3 text-sm text-foreground/60 tabular-nums">
          {item.period}
        </div>
        <div className="col-span-12 md:col-span-9">
          <h3 className="text-xl md:text-2xl font-medium leading-tight mb-1">
            {item.role}
          </h3>
          <p className="text-sm text-foreground/60 mb-3">
            {item.org}
            {item.location ? ` · ${item.location}` : ""}
          </p>
          <p className="text-base text-foreground/80 leading-relaxed max-w-2xl">
            {item.description}
          </p>
        </div>
      </li>
    ))}
  </ol>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-edge">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow eyebrow-dot mb-4">Experience</p>
            <h2 className="display-xl text-4xl md:text-5xl text-balance mb-8">
              Work<br />& education.
            </h2>

            <div>
              <p className="eyebrow mb-4">Toolkit</p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/75 hover:border-vermilion hover:text-vermilion transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 space-y-16">
            <div>
              <p className="eyebrow mb-6">Professional Experience</p>
              <Timeline items={work} />
            </div>

            <div>
              <p className="eyebrow mb-6">Education</p>
              <Timeline items={education} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
