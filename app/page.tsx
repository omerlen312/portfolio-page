"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/app/components/navbar";
import { Opening } from "@/app/components/opening";
import { About } from "@/app/components/about";
import { Projects } from "@/app/components/projects";
import { Contact } from "@/app/components/contact";
import { Footer } from "@/app/components/footer";
import { TerminalBootLoader } from "@/app/components/terminal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("hasSeenTerminalAnimation");
    if (!hasSeenAnimation) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleTerminalComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasSeenTerminalAnimation", "true");
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="terminal-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black flex items-center justify-center "
          >
            <TerminalBootLoader onComplete={handleTerminalComplete} />
          </motion.div>
        ) : (
          <motion.div
            key="main-site"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
          >
            <Navbar />
            <Opening />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
