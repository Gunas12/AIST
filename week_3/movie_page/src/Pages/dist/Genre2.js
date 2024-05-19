"use strict";
exports.__esModule = true;
var GenreShow_1 = require("./components/GenreShow");
var NewRelaseS_1 = require("./components/NewRelaseS");
var PopularShows_1 = require("./components/PopularShows");
var TopRatedS_1 = require("./components/TopRatedS");
var TrendingShow_1 = require("./components/TrendingShow");
function Genre2() {
    return (React.createElement("div", { className: "all_genre" },
        React.createElement("div", { className: "btn_d" },
            React.createElement("button", { className: "btnm" }, "Shows")),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(GenreShow_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(PopularShows_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(TrendingShow_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(NewRelaseS_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(TopRatedS_1["default"], null)))));
}
exports["default"] = Genre2;
