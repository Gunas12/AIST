"use strict";
exports.__esModule = true;
var Movies_1 = require("./components/Movies");
var PopularMovies_1 = require("./components/PopularMovies");
var TrendingNow_1 = require("./components/TrendingNow");
var NewRelase_1 = require("./components/NewRelase");
var TopRated_1 = require("./components/TopRated");
function Genre1() {
    return (React.createElement("div", { className: "all_genre" },
        React.createElement("div", { className: "btn_d" },
            React.createElement("button", { className: "btnm" }, "Movies")),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(Movies_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(PopularMovies_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(TrendingNow_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(NewRelase_1["default"], null))),
        React.createElement("div", { className: "moviess" },
            React.createElement("div", { className: "genre-cont" },
                React.createElement(TopRated_1["default"], null)))));
}
exports["default"] = Genre1;
