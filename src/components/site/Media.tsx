import { Play } from "lucide-react";
import { getExternalLinkProps } from "@/lib/external-link";

type Video = {
  id: string;
  title: string;
  duration: string;
  topic: string;
};

// Placeholder YouTube IDs — swap with real ones.
const videos: Video[] = [
  { id: "C-uml-MwlDg", title: "Featured demonstration", duration: "Watch", topic: "Demo" },
  { id: "2xho67XAREI", title: "Featured demonstration", duration: "Watch", topic: "Demo" },
];

const Media = () => {
  return (
    <section id="media" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-edge">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow eyebrow-dot mb-4">Media</p>
            <h2 className="display-xl text-4xl md:text-6xl text-balance">
              Demonstrations<br />in motion.
            </h2>
          </div>
          <a
            {...getExternalLinkProps("https://www.youtube.com/playlist?list=PLd_ftJHJy1EAdH7Iu98aQA5B3Zejw5wrU")}
            className="hover-line text-sm font-medium self-start md:self-auto"
          >
            View all on YouTube →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {videos.map((v) => (
            <a
              key={v.id}
              {...getExternalLinkProps(`https://www.youtube.com/watch?v=${v.id}`)}
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden bg-foreground/5">
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ivory/95 text-foreground transition-all duration-500 group-hover:bg-vermilion group-hover:text-ivory group-hover:scale-110">
                    <Play size={20} className="ml-0.5" fill="currentColor" />
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 bg-foreground/85 text-background text-[11px] tabular-nums px-2 py-1 rounded-sm">
                  {v.duration}
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <h3 className="text-base md:text-lg font-medium leading-snug transition-colors group-hover:text-vermilion">
                  {v.title}
                </h3>
                <span className="text-[11px] uppercase tracking-widest text-foreground/50 mt-1 shrink-0">
                  {v.topic}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
