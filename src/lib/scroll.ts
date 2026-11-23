export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });

  if (window.location.hash) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
}

export function sectionIdFromHref(href: string) {
  return href.startsWith("#") ? href.slice(1) : href;
}
