import React from "react";
import ReactDOM from "react-dom/client";


// const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
// const heading2 = React.createElement("h1", { id: "title" }, "Heading 2");
// const container = React.createElement("div", {}, [ heading1, heading2 ]);

// Create a html div named root public - index.html
// Index.js => bind this root element with react   createElement()=> returns an object that is rendered as an HTML DOM with the help of babel/bundler
const heading = React.createElement("h1", {}, "Namaste");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(root);
