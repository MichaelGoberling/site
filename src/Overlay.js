import React from "react";
import { isMobile } from "react-device-detect";

function Overlay(props) {
  return (
    <div>
      <p
        style={{
          position: "absolute",
          zIndex: 2,
          left: isMobile ? "4vw" : "2vw",
          fontSize: 24,
          userSelect: "none",
        }}
      >
        Michael Goberling
      </p>
      <p
        style={{
          position: "absolute",
          zIndex: 2,
          left: isMobile ? "4vw" : "2vw",
          top: isMobile ? "10vw" : "2.5vw",
          userSelect: "none",
        }}
      >
        New York
      </p>
      <a
        style={{
          position: "absolute",
          zIndex: 2,
          left: isMobile ? "4vw" : "2vw",
          bottom: isMobile ? "4vw" : "2vw",
          userSelect: "none",
          color: "black",
          textDecoration: "none",
        }}
        href={"mailto:michael.goberling@gmail.com"}
      >
        michael.goberling@gmail.com
      </a>
    </div>
  );
}

export default Overlay;
