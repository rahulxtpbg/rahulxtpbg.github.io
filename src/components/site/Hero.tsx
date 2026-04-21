import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import headshot from "@/assets/headshot.png";
import { getExternalLinkProps } from "@/lib/external-link";

const Hero = () => {
  return (
    <section id="about" className="relative pt-28 md:pt-36 pb-20 md:pb-28">
      <div className="container-edge">
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-end">
          {/* Text */}
          <div className="md:col-span-7 lg:col-span-8">
            <p className="eyebrow eyebrow-dot mb-8 animate-fade-up">
              Portfolio · 2026
            </p>

            <h1 className="display-xl text-[44px] sm:text-[64px] md:text-[88px] lg:text-[112px] text-balance animate-fade-up [animation-delay:80ms]">
              Rama Sai
              <br />
              Rahul <span className="accent-underline">Gedela</span>
            </h1>

            <div className="mt-10 grid gap-8 md:grid-cols-12 animate-fade-up [animation-delay:160ms]">
              <div className="md:col-span-2">
                <div className="h-px w-12 bg-vermilion mt-3" />
              </div>
              <p className="md:col-span-9 text-lg md:text-xl text-foreground/75 text-pretty leading-relaxed max-w-2xl">
                Engineer & researcher building production systems at the
                intersection of <em className="not-italic text-foreground">autonomy, simulation, and infrastructure</em>.
                I care about clarity, craft, and work that ships.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-vermilion"
              >
                View featured work
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <div className="flex items-center gap-1 ml-2">
                <SocialIcon href="mailto:gedelaramasairahul@gmail.com" label="Email">
                  <Mail size={16} />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/rama-sai-rahul-gedela/" label="LinkedIn">
                  <Linkedin size={16} />
                </SocialIcon>
                <SocialIcon href="https://github.com/rahulxtpbg" label="GitHub">
                  <Github size={16} />
                </SocialIcon>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="md:col-span-5 lg:col-span-4 animate-fade-up [animation-delay:120ms]">
            <div className="relative">
              <div className="absolute -top-3 -left-3 h-full w-full border border-vermilion/60" aria-hidden />
              <img
                src={headshot}
                alt="Portrait of Rama Sai Rahul Gedela"
                width={768}
                height={960}
                className="relative w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-3 -right-3 bg-vermilion text-ivory text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
                Hello
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    {...getExternalLinkProps(href)}
    aria-label={label}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-all hover:border-vermilion hover:text-vermilion hover:-translate-y-0.5"
  >
    {children}
  </a>
);

export default Hero;
