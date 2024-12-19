"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}
function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("pagelayout-container", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageLayout;
