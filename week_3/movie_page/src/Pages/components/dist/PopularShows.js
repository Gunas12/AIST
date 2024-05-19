"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var gr_1 = require("react-icons/gr");
var axios_1 = require("axios");
function PopularShows() {
    var _this = this;
    var _a = react_1.useState([]), genres = _a[0], setGenres = _a[1];
    var _b = react_1.useState([]), movies = _b[0], setMovies = _b[1];
    var _c = react_1.useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = react_1.useState(5), genresPerPage = _d[0], setGenresPerPage = _d[1]; // Initial value for genres per page
    var cardsPerGenre = 4;
    var totalPages = 4;
    var apiKey = "2872128c1cdccd2dce197bbadac76051";
    var popularUrl = "https://api.themoviedb.org/3/discover/tv";
    var genreUrl = "https://api.themoviedb.org/3/genre/tv/list";
    react_1.useEffect(function () {
        fetchGenres();
        fetchMovies();
    }, []);
    var fetchGenres = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, result, totalGenresNeeded, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get(genreUrl + "?api_key=" + apiKey)];
                case 1:
                    response = _a.sent();
                    result = response.data.genres || [];
                    totalGenresNeeded = totalPages * Math.ceil(result.length / totalPages);
                    while (result.length < totalGenresNeeded) {
                        result = result.concat(result.slice(0, 5));
                    }
                    setGenres(result);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error fetching genres:", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var fetchMovies = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get(popularUrl + "?api_key=" + apiKey)];
                case 1:
                    response = _a.sent();
                    setMovies(response.data.results || []);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Error fetching movies:", error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // Pagination Logic
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    var goToPreviousPage = function () {
        setCurrentPage(function (prevPage) { return (prevPage === 1 ? totalPages : prevPage - 1); });
    };
    var goToNextPage = function () {
        setCurrentPage(function (prevPage) { return (prevPage === totalPages ? 1 : prevPage + 1); });
    };
    // Function to handle window resize
    var handleResize = function () {
        // Adjust genres per page based on screen size
        if (window.innerWidth <= 768) {
            setGenresPerPage(1); // Set genres per page to 1 for smaller screens (e.g., mobile devices)
        }
        else if (window.innerWidth <= 930) {
            setGenresPerPage(2); // Set genres per page to 2 for screens between 768px and 930px
        }
        else if (window.innerWidth <= 1250) {
            setGenresPerPage(3); // Set genres per page to 3 for screens between 930px and 1250px
        }
        else {
            setGenresPerPage(5); // Set genres per page to 5 for larger screens
        }
    };
    react_1.useEffect(function () {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
        // Call handleResize initially to set genres per page based on initial screen size
        handleResize();
        // Remove event listener on component unmount
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "head" },
            react_1["default"].createElement("h2", null, "Popular Top 10 In Genres"),
            react_1["default"].createElement("div", { className: "pagination" },
                react_1["default"].createElement("button", { onClick: goToPreviousPage },
                    react_1["default"].createElement(gr_1.GrLinkPrevious, { style: { width: '26px', height: '26px' } })),
                Array.from({ length: totalPages }, function (_, index) { return index + 1; }).map(function (pageNumber) { return (react_1["default"].createElement("button", { key: pageNumber, onClick: function () { return paginate(pageNumber); }, className: pageNumber === currentPage ? "active" : "", style: {
                        width: '20px',
                        height: '20px',
                        border: '0',
                        margin: '0',
                        padding: '0',
                        backgroundColor: '#0F0F0F',
                        color: currentPage === pageNumber ? 'red' : ''
                    } },
                    react_1["default"].createElement("h1", null,
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "16", fill: "currentColor", className: "bi bi-dash", viewBox: "0 0 16 16" },
                            react_1["default"].createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" }))))); }),
                react_1["default"].createElement("button", { onClick: goToNextPage },
                    react_1["default"].createElement(gr_1.GrLinkNext, { style: { width: '26px', height: '26px' } })))),
        react_1["default"].createElement("div", { className: "genres-container" }, genres.slice((currentPage - 1) * genresPerPage, currentPage * genresPerPage).map(function (genre) {
            var filteredMovies = movies.filter(function (movie) { return movie.genre_ids.includes(genre.id); });
            if (filteredMovies.length === 0) {
                return null;
            }
            return (react_1["default"].createElement("div", { key: genre.id, className: "slider" },
                react_1["default"].createElement("div", { className: "movies" },
                    react_1["default"].createElement("div", { className: "movie-cards" }, Array.from({ length: cardsPerGenre }, function (_, i) { return filteredMovies[i % filteredMovies.length]; }).map(function (movie, index) { return (react_1["default"].createElement("div", { key: movie.id + '-' + index, className: "movie-card" },
                        react_1["default"].createElement("img", { src: "https://image.tmdb.org/t/p/w200" + movie.poster_path, alt: movie.title }))); }))),
                react_1["default"].createElement("div", { className: "titttle" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("button", { className: "topbtn" }, "Top 10 In"),
                        react_1["default"].createElement("div", { className: "bbb" },
                            react_1["default"].createElement("h1", null, genre.name),
                            react_1["default"].createElement(gr_1.GrLinkNext, { className: "ico" }))))));
        }))));
}
exports["default"] = PopularShows;
