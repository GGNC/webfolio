"use client";
import { homeData } from "@/config/constants";
import Typewriter from "typewriter-effect";

function HomeDescription() {
  return (
    <Typewriter
      options={{
        delay: 15,
        cursor: "_",
      }}
      onInit={(typewriter) => {
        typewriter.pauseFor(2000).typeString(homeData.description.en).start();
      }}
    />
  );
}

export default HomeDescription;
