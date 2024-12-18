import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className }: TitleProps) {
  return (
    <h2 className={cn("text-xl text-lightSky font-bold mb-4", className)}>
      {children}
    </h2>
  );
}

export default Title;
