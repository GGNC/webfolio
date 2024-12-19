import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { headerData, homeData } from "@/config/constants";
import { Download } from "lucide-react";
import Link from "next/link";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-info-container">
          <div>
            <h3 className="home-job">{homeData.jobTitle}</h3>
            <h2 className="home-greeting">{homeData.title.en}</h2>
            <h1 className="home-name">{homeData.name}</h1>
          </div>
          <div className="w-full min-h-[170px] md:min-h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
          <Button className="home-downloadcv-button">
            <Link
              href={headerData.hireMeData.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-downloadcv-button-link"
            >
              {homeData.downloadCV.en} <Download />
            </Link>
          </Button>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </div>
    </div>
  );
}

export default Home;
