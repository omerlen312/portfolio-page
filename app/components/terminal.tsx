"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/shadcn-io/terminal";

interface TerminalBootLoaderProps {
  onComplete?: () => void;
}

export const TerminalBootLoader = ({ onComplete }: TerminalBootLoaderProps) => {
  const [showCursor, setShowCursor] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Allow skipping after 2 seconds
    const skipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 2000);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    // Auto-complete after animation sequence
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 7500);

    // Handle keyboard events
    const handleKeyPress = (event: KeyboardEvent) => {
      if (canSkip && onComplete) {
        onComplete();
      }
    };

    // Handle click events
    const handleClick = () => {
      if (canSkip && onComplete) {
        onComplete();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleClick);

    return () => {
      clearInterval(cursorInterval);
      clearTimeout(completeTimer);
      clearTimeout(skipTimer);
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClick);
    };
  }, [onComplete, canSkip]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 cursor-pointer">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Terminal className="bg-black border-green-500/30 text-green-400 font-mono">
          <div className="space-y-1">
            {/* System Boot Sequence */}
            <AnimatedSpan delay={0} className="text-green-300">
              $ system_boot --initialize
            </AnimatedSpan>

            <TypingAnimation
              delay={500}
              duration={50}
              className="text-green-400"
            >
              [BOOT] Initializing system components...
            </TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-300">
              ✓ CPU: System check - OK
            </AnimatedSpan>

            <AnimatedSpan delay={1800} className="text-green-300">
              ✓ Memory: System check - OK
            </AnimatedSpan>

            <AnimatedSpan delay={2100} className="text-green-300">
              ✓ Storage: System check - OK
            </AnimatedSpan>

            <TypingAnimation
              delay={2500}
              duration={40}
              className="text-green-400"
            >
              [NET] Establishing connection protocols...
            </TypingAnimation>

            <AnimatedSpan delay={3500} className="text-green-300">
              ✓ Network interface initialized
            </AnimatedSpan>

            <AnimatedSpan delay={3800} className="text-blue-400">
              $ portfolio_system --launch
            </AnimatedSpan>

            <TypingAnimation
              delay={4200}
              duration={60}
              className="text-blue-300"
            >
              Loading portfolio modules...
            </TypingAnimation>

            <AnimatedSpan delay={5200} className="text-cyan-300">
              ✓ About module loaded
            </AnimatedSpan>

            <AnimatedSpan delay={5500} className="text-cyan-300">
              ✓ Projects module loaded
            </AnimatedSpan>

            <AnimatedSpan delay={5800} className="text-cyan-300">
              ✓ Contact module loaded
            </AnimatedSpan>

            <TypingAnimation
              delay={6200}
              duration={50}
              className="text-yellow-400"
            >
              [RENDER] Compiling user interface...
            </TypingAnimation>

            <AnimatedSpan delay={8000} className="text-green-400">
              🚀 Portfolio system ready
            </AnimatedSpan>
          </div>
        </Terminal>
      </motion.div>

      {/* Loading progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8"
      >
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 7.6, delay: 1, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="text-center text-green-400 mt-2 font-mono text-sm"
        >
          Initializing portfolio experience...
        </motion.p>
      </motion.div>

      {/* Skip instruction */}
      {canSkip && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-gray-200 text-2xl font-mono">
            Click anywhere or press any key to skip
          </p>
        </motion.div>
      )}
    </div>
  );
};
