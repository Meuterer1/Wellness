import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error("Element with ID 'root' not found in the document.");
}
