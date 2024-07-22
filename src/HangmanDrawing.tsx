import React from "react";

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid white",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "white",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom"
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom"
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      bottom: "200px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom"
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "white",
      position: "absolute",
      bottom: "200px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom"
    }}
  />
);

function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "white",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "white",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "white",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "white",
        }}
      />
    </div>
  );
}

export default HangmanDrawing;
