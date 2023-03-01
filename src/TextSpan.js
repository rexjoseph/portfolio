import React from "react";
import "./TextSpan.css";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [playing, setPlaying] = useState(false);

  const wiggle = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!playing) wiggle();
      }}
      onAnimationComplete={() => setPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
