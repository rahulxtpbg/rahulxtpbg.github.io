import { Github, Linkedin, Mail } from "lucide-react";
import { getExternalLinkProps } from "@/lib/external-link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline py-12">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-vermilion" />
            <p className="text-sm text-foreground/70">
              © {year} Rama Sai Rahul Gedela. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-1">
            <a
              href="mailto:gedelaramasairahul@gmail.com"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 hover:text-vermilion transition-colors"
            >
              <Mail size={16} />
            </a>
            <a
              {...getExternalLinkProps("https://www.linkedin.com/in/rama-sai-rahul-gedela/")}
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 hover:text-vermilion transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              {...getExternalLinkProps("https://github.com/rahulxtpbg")}
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 hover:text-vermilion transition-colors"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
