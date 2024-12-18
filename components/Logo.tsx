import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  title?: string;
  subtitle?: string;
}
function Logo({ className, title, subtitle }: LogoProps) {
  return (
    <div className="logo_container">
      <Link href="/">
        <h2 className={cn("logo_title", className)}>
          {title}
          <span className="logo_subtitle">{subtitle}</span>
        </h2>
      </Link>
    </div>
  );
}

export default Logo;
