"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { homeData } from "@/config/constants";
import { useTypeWritter } from "@/hooks/useTypeWritter";

function HomeDescription() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description = homeData.description.en;
  const { displayedText, isCompleted } = useTypeWritter({
    text: description,
    speed: 30,
  });
  useEffect(() => {
    setHasLoaded(true);
  });
  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-6 min-h-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 , 163, 175)" }}
            animate={{ color: isCompleted ? "white" : "rgb(156 , 163, 175)" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
}

export default HomeDescription;
