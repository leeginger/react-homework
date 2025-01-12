import React from "../lib/react.js";
import Switch from "./switch";

function App() {
  return React.createElement(
    "button",
    {
      className: "app",
    },

    React.createElement(Switch, {
      className: "switch-btn",
      id: "switch",
      "aria-label": "스위치 버튼",
      title: "스위치 버튼",
      translate: "no",
    })
  );
}

export default App;
