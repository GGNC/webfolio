import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const socialLinkData = [
  {
    title: "GitHub",
    href: "https://github.com/GGNC",
    icon: <Github />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ggnc",
    icon: <Linkedin />,
  },
];
function SocialLinks() {
  const socialLinkElements = socialLinkData.map((socialLink) => {
    return (
      <Tooltip key={socialLink.title}>
        <TooltipTrigger asChild>
          <Link
            href={socialLink.href}
            target="_blank"
            className="social-links-item"
          >
            <span>{socialLink.icon}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="social-link_tooltip">
          <span>{socialLink.title}</span>
        </TooltipContent>
      </Tooltip>
    );
  });
  return (
    <TooltipProvider>
      <div className="social-links">{socialLinkElements}</div>
    </TooltipProvider>
  );
}

export default SocialLinks;
