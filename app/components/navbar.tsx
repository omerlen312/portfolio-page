import { ThemeSwitcher } from "@/components/ui/shadcn-io/theme-switcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70; // offset for navbar
    animate(window.scrollY, y, {
      duration: 0.7,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }
}

function useActiveSection() {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    function onScroll() {
      const sections = ["home", "about", "projects", "contact"];
      let found = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActive(found);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

export const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection();
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.replace("#", "");
        if (id) smoothScrollTo(id);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ThemeSwitcher />
            <h1 className="ml-4 text-xl font-bold text-slate-900 dark:text-white">
              Omer Len
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`text-slate-700 dark:text-slate-300 transition-colors duration-200 ${
                  isHome
                    ? "font-bold underline text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Home
              </Link>
              <span className="mx-2 text-slate-400">|</span>
              <Link
                href="/blog"
                className={`text-slate-700 dark:text-slate-300 transition-colors duration-200 ${
                  pathname === "/blog"
                    ? "font-bold underline text-blue-600 dark:text-blue-400"
                    : "hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Blog
              </Link>
              {isHome && (
                <>
                  <motion.a
                    href="#about"
                    className={`text-slate-700 dark:text-slate-300 transition-colors duration-75 ${
                      activeSection === "about"
                        ? "font-bold underline text-blue-600 dark:text-blue-400"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    animate={{
                      fontWeight: activeSection === "about" ? 700 : 400,
                      textDecoration:
                        activeSection === "about" ? "underline" : "none",
                      color: activeSection === "about" ? "#2563eb" : "#334155",
                      scale: activeSection === "about" ? 1.1 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 12,
                      duration: 0.09,
                    }}
                  >
                    About
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className={`text-slate-700 dark:text-slate-300 transition-colors duration-75 ${
                      activeSection === "projects"
                        ? "font-bold underline text-blue-600 dark:text-blue-400"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    animate={{
                      fontWeight: activeSection === "projects" ? 700 : 400,
                      textDecoration:
                        activeSection === "projects" ? "underline" : "none",
                      color:
                        activeSection === "projects" ? "#2563eb" : "#334155",
                      scale: activeSection === "projects" ? 1.1 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 12,
                      duration: 0.09,
                    }}
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className={`text-slate-700 dark:text-slate-300 transition-colors duration-75 ${
                      activeSection === "contact"
                        ? "font-bold underline text-blue-600 dark:text-blue-400"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                    animate={{
                      fontWeight: activeSection === "contact" ? 700 : 400,
                      textDecoration:
                        activeSection === "contact" ? "underline" : "none",
                      color:
                        activeSection === "contact" ? "#2563eb" : "#334155",
                      scale: activeSection === "contact" ? 1.1 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 900,
                      damping: 12,
                      duration: 0.09,
                    }}
                  >
                    Contact
                  </motion.a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
