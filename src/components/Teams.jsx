import React, { useState } from "react";
import "./Main.css";

const Teams = () => {
  const [teams, setTeams] = useState([
    {
      name: "Atlanta Hawks",
      logo: "image/Eastern_Conference/Atlanta_Hawks.svg",
    },
    {
      name: "Boston Celtics",
      logo: "image/Eastern_Conference/Boston_Celtics.svg",
    },
    {
      name: "Brooklyn Nets",
      logo: "image/Eastern_Conference/Brooklyn_Nets.svg",
    },
    {
      name: "Charlotte Hornets",
      logo: "image/Eastern_Conference/Charlotte_Hornets.svg",
    },
    {
      name: "Chicago Bulls",
      logo: "image/Eastern_Conference/Chicago_Bulls.svg",
    },
    {
      name: "Cleveland Cavaliers",
      logo: "image/Eastern_Conference/Cleveland_Cavaliers.svg",
    },
    {
      name: "Detroit Pistons",
      logo: "image/Eastern_Conference/Detroit_Pistons.svg",
    },
    {
      name: "Indiana Pacers",
      logo: "image/Eastern_Conference/Indiana_Pacers.svg",
    },
    {
      name: "Miami Heat",
      logo: "image/Eastern_Conference/Miami_Heat.svg",
    },
    {
      name: "Milwaukee Bucks",
      logo: "image/Eastern_Conference/Milwaukee_Bucks.svg",
    },
  ]);
  return (
    <div>
      {teams.map((e, i) => (
        <div key={i} className="wrapper_box container dropdown">
          <div className="wrapper">
            <div className="rank teams">
              <span>
                <img src={e.logo} alt={e.name} />
              </span>
              <span>{e.name}</span>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Teams;
