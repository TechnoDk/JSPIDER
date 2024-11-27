import { createRoot } from "react-dom/client";
// let div = document.getElementById("root");
// createRoot(div).render(<h1>hello world</h1>);

// let div1 = document.querySelector("#root");
// createRoot(div1).render(<h2>good moring</h2>);


// import { createRoot } from "react-dom/client";
import App from "./App"
let div1 = document.querySelector("#root")
createRoot(div1).render(<App></App>);