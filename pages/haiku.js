import React, { useState } from "react";

let listHaiku = [
  "An old silent pond\nA frog jumps into the pond,\nsplash! Silence again.",
  "Autumn moonlight-\na worm digs silently\ninto the chestnut.",
  "In the twilight rain\nthese brilliant-hued hibiscus -\nA lovely sunset.",
  "A summer river being crossed\nhow pleasing\nwith sandals in my hands!",
  "Light of the moon\nMoves west, flowers shadows\nCreep eastward.",
  "In the moonlight,\nThe color and scent of the wisteria\nSeems far away.",
];

function haiku() {
  const [haikuNumber, setHaikuNumber] = useState(null);
  const [showHaiku, setShowHaiku] = useState("Toan's going down!");
  const getHaiku = (arr) => {
    setShowHaiku(listHaiku[Math.floor(Math.random() * arr.length)]);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: 20,
          boxShadow: "0px 8px 15px rgba(255, 255, 255, 0.2)",
          border: "none",
          width: "50vw",
          height: "60vh",
          marginTop: 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#7F84B7",
        }}
      >
        <h1 style={{ color: "#EEE4EA" }}>Generate Haiku</h1>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            backgroundColor: "#7F84B7",
            padding: "20px 40px",
            borderRadius: 10,
            cursor: "pointer",
            color: "#EEE4EA",
          }}
          onClick={() => getHaiku(listHaiku)}
        >
          Click!
        </button>
        <div style={{ color: "#EEE4EA", marginTop: "40px" }}>{showHaiku}</div>
      </div>
    </div>
  );
}

export default haiku;
