import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Temporarily disable smooth scroll
    const html = document.documentElement;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    // Restore smooth scroll
    setTimeout(() => {
      html.style.scrollBehavior = "smooth";
    }, 1000); // Delay to ensure the scroll position is set before enabling smooth scroll
  }, [pathname]);
  return null;
}