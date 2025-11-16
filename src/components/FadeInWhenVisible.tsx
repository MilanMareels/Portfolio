import { motion, type Transition } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  onLoad?: boolean;
}

const FadeInWhenVisible = ({ children, onLoad = false }: AnimatedSectionProps) => {
  const initial = { opacity: 0, y: 50 };

  const transition: Transition = { duration: 0.6, ease: "easeInOut" };

  const animationProps = onLoad
    ? {
        animate: { opacity: 1, y: 0 },
      }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
      };

  return (
    <motion.div initial={initial} transition={transition} {...animationProps}>
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
