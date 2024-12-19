"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}
function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-bodyColor top-0 pointer-events-none"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;