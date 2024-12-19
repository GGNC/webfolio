import { motion } from "motion/react";
function Stairs() {
  const stairAnimation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };
  const reverseIndex = (index: number) => {
    const totalSteps = 7;
    return totalSteps - index - 1;
  };
  return (
    <>
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          custom={reverseIndex(index)}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stairAnimation}
          transition={{
            duration: 0.25,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
}

export default Stairs;
