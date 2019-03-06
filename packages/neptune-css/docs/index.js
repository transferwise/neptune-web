import React from "react";
import ReactDOM from "react-dom";

import("./HotDocs").then(({ default: HotDocs }) => {
  ReactDOM.render(<HotDocs />, document.getElementById("root"));
});
