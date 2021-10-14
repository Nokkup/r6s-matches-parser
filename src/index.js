import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.css";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/r6s-matches-parser">
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
