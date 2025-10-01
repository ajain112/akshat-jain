import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    // Wait a tick to ensure the destination section is in the DOM
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Smooth scroll to the section
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return null;
}
