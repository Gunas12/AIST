"use strict";
exports.__esModule = true;
require("./main.scss");
var Footer_1 = require("./Pages/components/Footer");
var Navbar_1 = require("./Pages/components/Navbar");
var Slider_1 = require("./Pages/components/Slider");
var Genre1_1 = require("./Pages/Genre1");
var Genre2_1 = require("./Pages/Genre2");
var Trial_1 = require("./Pages/Trial");
function App() {
    return (React.createElement("div", { className: "all_section" },
        React.createElement(Navbar_1["default"], null),
        React.createElement(Slider_1["default"], null),
        React.createElement(Genre1_1["default"], null),
        React.createElement(Genre2_1["default"], null),
        React.createElement(Trial_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = App;
