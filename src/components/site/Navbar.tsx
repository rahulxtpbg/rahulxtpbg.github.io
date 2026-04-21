import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "exploring", label: "Exploring" },
  { id: "media", label: "Media" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const computeActive = () => {
      // Anchor line ~30% from top of viewport
      const anchor = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "about";
      for (const sec of sections) {
        const top = sec.getBoundingClientRect().top;
        if (top - anchor <= 0) {
          current = sec.id;
        } else {
          break;
        }
      }
      // Edge case: near bottom of page → activate last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sections[sections.length - 1]?.id ?? current;
      }
      setActive(current);
    };

    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive);
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      )}
    >
      <nav className="container-edge flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => go("about")}
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
          aria-label="Home"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-vermilion transition-transform duration-500 group-hover:scale-150" />
          <span>RSRG<span className="text-vermilion">.</span></span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                data-active={active === l.id}
                className="hover-line text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground data-[active=true]:text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1.5 text-[12px] font-medium transition-all hover:border-vermilion hover:text-vermilion"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-vermilion animate-pulse" />
          Open to Work
        </button>

        <button
          className="md:hidden -m-2 p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-hairline bg-ivory animate-fade-in">
          <ul className="container-edge flex flex-col py-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="block w-full text-left py-3 text-base font-medium"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
