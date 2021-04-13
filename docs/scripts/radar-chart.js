"use strict";

const chart = (() => ({
  svg_id: "radar",
  width: window.innerWidth,
  height: window.innerHeight,
  colors: {
    background: "#272727",
    grid: "#bbb",
    inactive: "#ddd",
  },
  title: "",
  quadrants: [
    { name: "Programming Languages" },
    { name: "Techniques" },
    { name: "Frameworks" },
    { name: "Platforms" },
  ],
  rings: [
    { name: "ADOPT", color: "#99cc00" },
    { name: "TRIAL", color: "#66b3ff" },
    { name: "ASSESS", color: "#ffcc33" },
    { name: "HOLD", color: "#ff4d4d" },
  ],
  print_layout: true,
  entries: [],
}))();
