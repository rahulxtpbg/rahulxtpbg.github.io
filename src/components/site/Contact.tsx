import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";
import { getExternalLinkProps } from "@/lib/external-link";

// FormSubmit endpoint — uses email hash so the address isn't exposed in HTML.
// First submission triggers a one-time confirmation email from FormSubmit
// to gedelaramasairahul@gmail.com. After confirming once, every submission
// is delivered straight to the inbox. No backend, no API keys.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/gedelaramasairahul@gmail.com";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
      _subject: `Portfolio enquiry from ${data.get("name") || "visitor"}`,
      _template: "table",
      _captcha: "false",
    };

    setSending(true);
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      toast.success("Message sent — I'll get back to you soon.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send right now. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-hairline">
      <div className="container-edge">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <p className="eyebrow eyebrow-dot mb-4">Reach Out</p>
            <h2 className="display-xl text-5xl md:text-7xl text-balance mb-8">
              Let's build<br />
              <span className="accent-underline">something good.</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed max-w-md mb-10">
              I'm open to collaborations, research conversations, and interesting
              roles. The best way to reach me is below — I read every message.
            </p>

            <ul className="space-y-2">
              <ContactLink
                href="mailto:gedelaramasairahul@gmail.com"
                label="Email"
                value="gedelaramasairahul@gmail.com"
                icon={<Mail size={16} />}
              />
              <ContactLink
                href="https://www.linkedin.com/in/rama-sai-rahul-gedela/"
                label="LinkedIn"
                value="rama-sai-rahul-gedela"
                icon={<Linkedin size={16} />}
              />
              <ContactLink
                href="https://github.com/rahulxtpbg"
                label="GitHub"
                value="rahulxtpbg"
                icon={<Github size={16} />}
              />
            </ul>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-6 space-y-6">
            <Field name="name" label="Name" placeholder="Your name" required />
            <Field name="email" type="email" label="Email" placeholder="you@somewhere.com" required />
            <Field name="message" label="Message" placeholder="What's on your mind?" multiline required />

            <button
              type="submit"
              disabled={sending}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-vermilion disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({
  href, label, value, icon,
}: { href: string; label: string; value: string; icon: React.ReactNode }) => (
  <li>
    <a
      {...getExternalLinkProps(href)}
      className="group flex items-center justify-between gap-4 border-t border-hairline py-4 transition-colors hover:bg-foreground/[0.02] last:border-b"
    >
      <span className="flex items-center gap-3 text-foreground/70">
        <span className="text-vermilion">{icon}</span>
        <span className="text-xs uppercase tracking-widest">{label}</span>
      </span>
      <span className="flex items-center gap-3 text-sm md:text-base font-medium transition-colors group-hover:text-vermilion">
        {value}
        <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
      </span>
    </a>
  </li>
);

const Field = ({
  name, label, placeholder, type = "text", required, multiline,
}: {
  name: string; label: string; placeholder: string;
  type?: string; required?: boolean; multiline?: boolean;
}) => (
  <label className="block">
    <span className="eyebrow mb-2 block">{label}</span>
    {multiline ? (
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="w-full bg-transparent border-0 border-b border-foreground/20 py-3 text-base placeholder:text-foreground/35 focus:outline-none focus:border-vermilion transition-colors resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-foreground/20 py-3 text-base placeholder:text-foreground/35 focus:outline-none focus:border-vermilion transition-colors"
      />
    )}
  </label>
);

export default Contact;
