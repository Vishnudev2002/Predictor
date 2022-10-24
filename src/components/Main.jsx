import React, { useState } from "react";
import "./Main.css";
import Teams from "./Teams";

const Main = () => {
  const [view, setView] = useState(false);
  const [rank, setRank] = useState([
    {
      place: "First",
      number: 1,
    },
    {
      place: "Second",
      number: 2,
    },
    {
      place: "Third",
      number: 3,
    },
    {
      place: "Fourth",
      number: 4,
    },
    {
      place: "Fifth",
      number: 5,
    },
    {
      place: "Sixth",
      number: 6,
    },
    {
      place: "Seventh",
      number: 7,
    },
    {
      place: "Eighth",
      number: 8,
    },
    {
      place: "Ninth",
      number: 9,
    },
    {
      place: "Tenth",
      number: 10,
    },
  ]);

  const viewState = () => {
    setView(!view);
  };
  return (
    <div className="main">
      <h2>NBA STANDINGS</h2>
      <h1>EASTERN CONFERENCE</h1>
      <h3><span>THROUGH MAY 6 GAMES</span></h3>
      <div className="container">
        <p>Rank the teams from dropdown</p>
        {view && (
          <p
            onClick={viewState}
            style={{
              backgroundColor: "#ededed",
              color: "black",
              textAlign: "right",
              cursor: "pointer",
            }}
          >
            x
          </p>
        )}
        {rank.map((e, i) => (
          <div
            key={i}
            style={{ display: view === true ? "none" : "block" }}
            className="wrapper_box"
            onClick={viewState}
          >
            <div className="wrapper">
              <div className="circle">
                <span>+</span>
              </div>
              <div className="rank">
                <span>{e.place}</span>
                <span>{e.number}</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
        {view && <Teams />}
      </div>
    </div>
  );
};

export default Main;
