import HomeDescription from "@/components/HomeDescription";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { homeData } from "@/config/constants";
import { Download } from "lucide-react";

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
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescription />
            </div>
          </div>
          <Button className="home-downloadcv-button">
            {homeData.downloadCV.en} <Download />
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
