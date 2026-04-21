import type { MouseEvent } from "react";

export const getExternalLinkProps = (href: string) => {
  const isMailto = href.startsWith("mailto:");

  if (isMailto) {
    return { href };
  }

  // Detect iframe previews/embeds.
  // In sandboxed previews, target-based navigation can be blocked,
  // so the safest option is a plain same-frame href.
  let inIframe = false;
  try {
    inIframe = typeof window !== "undefined" && window.self !== window.top;
  } catch {
    inIframe = true;
  }

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!inIframe) return;

    const isModifiedClick =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (isModifiedClick) return;

    const popup = window.open(href, "_blank", "noopener,noreferrer");
    if (popup) {
      popup.opener = null;
      event.preventDefault();
    }
  };

  return { href, target: "_blank" as const, rel: "noopener noreferrer", onClick };
};