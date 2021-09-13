import React from "react";
import ReactDOM from "react-dom";
import { Global } from "@emotion/react";

import App from "./App";
import { reset } from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
