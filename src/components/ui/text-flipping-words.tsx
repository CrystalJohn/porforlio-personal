"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const TextFlippingWords = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseBeforeDelete = 2000,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const type = () => {
      if (isDeleting) {
        setDisplayedText((prev) => currentWord.substring(0, prev.length - 1));
        
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayedText((prev) => currentWord.substring(0, prev.length + 1));
        
        if (displayedText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseBeforeDelete]);

  return (
    <span className="inline-flex items-center text-[#333]">
      <span className="relative inline-flex">
        {/* Invisible space maintainer */}
        <span className="invisible whitespace-pre" aria-hidden="true">
          {displayedText || " "}
        </span>
        <span className="absolute inset-0 flex">
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedText.split("").map((char, index) => (
              <motion.span
                key={`${currentWordIndex}-${char}-${index}`}
                initial={{ opacity: 0, rotateY: 90, filter: "blur(4px)" }}
                animate={{ opacity: 1, rotateY: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, rotateY: -90, filter: "blur(4px)" }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
        </span>
      </span>
      <motion.span
        animate={{
          backgroundColor: isDeleting ? "#ef4444" : ["#3b82f6", "#f97316", "#3b82f6"],
          scale: isDeleting ? 0.8 : [1, 1.2, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ml-1 inline-block h-[0.7em] w-[6px] rounded-full sm:h-[0.8em] sm:w-[8px]"
      />
    </span>
  );
};
