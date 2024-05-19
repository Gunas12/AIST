"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Movies_1 = require("./Movies");
var PopularMovies_1 = require("./PopularMovies");
var TrendingNow_1 = require("./TrendingNow");
var NewRelase_1 = require("./NewRelase");
var TopRated_1 = require("./TopRated");
function Genre1() {
    return (react_1["default"].createElement("div", { className: "all_genre" },
        react_1["default"].createElement("div", { className: "btn_d" },
            react_1["default"].createElement("button", { className: "btnm" }, "Movies")),
        react_1["default"].createElement("div", { className: "moviess" },
            react_1["default"].createElement("div", { className: "genre-cont" },
                react_1["default"].createElement(Movies_1["default"], null))),
        react_1["default"].createElement("div", { className: "moviess" },
            react_1["default"].createElement("div", { className: "genre-cont" },
                react_1["default"].createElement(PopularMovies_1["default"], null))),
        react_1["default"].createElement("div", { className: "moviess" },
            react_1["default"].createElement("div", { className: "genre-cont" },
                react_1["default"].createElement(TrendingNow_1["default"], null))),
        react_1["default"].createElement("div", { className: "moviess" },
            react_1["default"].createElement("div", { className: "genre-cont" },
                react_1["default"].createElement(NewRelase_1["default"], null))),
        react_1["default"].createElement("div", { className: "moviess" },
            react_1["default"].createElement("div", { className: "genre-cont" },
                react_1["default"].createElement(TopRated_1["default"], null)))));
}
exports["default"] = Genre1;
