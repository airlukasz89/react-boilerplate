import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./reset.css";
import "./style.css";

// new syntax for React18
ReactDOM.createRoot(
    document.querySelector('#reactApp'),
).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>   
);