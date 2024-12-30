"use client";
import { homeData } from "@/config/constants";
import CountUp from "react-countup";

function Statistics() {
  const stats = homeData.statistics.map((stat, index) => {
    return (
      <div key={index} className="stat-item">
        <CountUp
          end={stat.num}
          duration={5}
          delay={1}
          suffix="+"
          className="stat-item-number"
        />
        <p className="stat-item-description">{stat.title.en}</p>
      </div>
    );
  });
  return <div className="stat-container">{stats}</div>;
}

export default Statistics;
