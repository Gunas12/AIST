"use strict";
exports.__esModule = true;
var GenreShow_1 = require("./GenreShow");
var PopularShows_1 = require("./PopularShows");
var TrendingShow_1 = require("./TrendingShow");
var NewRelaseS_1 = require("./NewRelaseS");
var TopRatedS_1 = require("./TopRatedS");
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
