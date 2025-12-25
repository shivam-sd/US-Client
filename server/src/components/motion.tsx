"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "-10% 0px -10% 0px" }}
      variants={variants}
      transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type FloatProps = {
  children: React.ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
};

export function FloatY({
  children,
  amplitude = 6,
  duration = 8,
  className,
}: FloatProps) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
