"use strict";
exports.__esModule = true;
var react_1 = require("react");
var gr_1 = require("react-icons/gr");
var axios_1 = require("axios");
function Movies() {
    var _a = react_1.useState([]), genres = _a[0], setGenres = _a[1];
    var _b = react_1.useState([]), movies = _b[0], setMovies = _b[1];
    var _c = react_1.useState(null), selectedGenre = _c[0], setSelectedGenre = _c[1];
    var _d = react_1.useState(1), currentPage = _d[0], setCurrentPage = _d[1];
    var _e = react_1.useState(5), genresPerPage = _e[0], setGenresPerPage = _e[1]; // Initial value for genres per page
    var cardsPerGenre = 4;
    var apiKey = "2872128c1cdccd2dce197bbadac76051";
    var popularUrl = "https://api.themoviedb.org/3/movie/popular";
    var genreUrl = "https://api.themoviedb.org/3/genre/movie/list";
    react_1.useEffect(function () {
        fetchGenres();
        fetchMovies();
    }, []);
    var fetchGenres = function () {
        axios_1["default"].get(genreUrl + "?api_key=" + apiKey).then(function (response) {
            var result = response.data.genres || [];
            setGenres(result);
        });
    };
    var fetchMovies = function () {
        axios_1["default"].get(popularUrl + "?api_key=" + apiKey).then(function (response) {
            var result = response.data.results || [];
            setMovies(result);
        });
    };
    // Pagination Logic
    var totalGenres = genres.length;
    var totalPages = Math.ceil(totalGenres / genresPerPage);
    var getCurrentGenres = function () {
        var startIndex = (currentPage - 1) * genresPerPage;
        var endIndex = Math.min(startIndex + genresPerPage, totalGenres);
        var repeatedGenres = [];
        for (var i = startIndex; i < endIndex; i++) {
            repeatedGenres.push(genres[i % totalGenres]);
        }
        return repeatedGenres;
    };
    var currentGenres = getCurrentGenres();
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
        if (window.innerWidth <= 700) {
            setGenresPerPage(1); // Set genres per page to 1 for smaller screens (e.g., mobile devices)
        }
        else if (window.innerWidth <= 930) {
            setGenresPerPage(2); // Set genres per page to 2 for screens between 768px and 930px
        }
        else if (window.innerWidth <= 1250) {
            setGenresPerPage(3); // Set genres per page to 3 for screens between 930px and 1200px
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
            react_1["default"].createElement("h2", null, "Our Genres"),
            react_1["default"].createElement("div", { className: "pagination" },
                react_1["default"].createElement("button", { onClick: goToPreviousPage },
                    react_1["default"].createElement(gr_1.GrLinkPrevious, { style: { width: '26px', height: '26px' } })),
                Array.from({ length: totalPages }, function (_, index) { return (index < 3 && (react_1["default"].createElement("button", { key: index + 1, onClick: function () { return paginate(index + 1); }, className: currentPage === index + 1 ? "active" : "", style: { width: '20px', height: '20px', border: '0', margin: '0', padding: '0', backgroundColor: '#0F0F0F', color: currentPage === index + 1 ? 'red' : '' } },
                    react_1["default"].createElement("h1", null,
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "16", fill: "currentColor", className: "bi bi-dash", viewBox: "0 0 16 16" },
                            react_1["default"].createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" })))))); }),
                react_1["default"].createElement("button", { onClick: goToNextPage },
                    react_1["default"].createElement(gr_1.GrLinkNext, { style: { width: '26px', height: '26px' } })))),
        react_1["default"].createElement("div", { className: "genres-container" }, currentGenres.map(function (genre) {
            var filteredMovies = movies.filter(function (movie) { return movie.genre_ids.includes(genre.id); });
            if (filteredMovies.length === 0) {
                return null;
            }
            return (react_1["default"].createElement("div", { key: genre.id, className: "slider " + (selectedGenre === genre.id ? 'show' : 'hide') },
                react_1["default"].createElement("div", { className: "movies" },
                    react_1["default"].createElement("div", { className: "movie-cards" }, Array.from({ length: cardsPerGenre }, function (_, i) { return filteredMovies[i % filteredMovies.length]; }).map(function (movie, index) { return (react_1["default"].createElement("div", { key: movie.id + '-' + index, className: "movie-card" },
                        react_1["default"].createElement("img", { src: "https://image.tmdb.org/t/p/w200" + movie.poster_path, alt: movie.title }))); }))),
                react_1["default"].createElement("div", { className: "titttle" },
                    react_1["default"].createElement("h1", null, genre.name),
                    react_1["default"].createElement(gr_1.GrLinkNext, { className: "ico" }))));
        }))));
}
exports["default"] = Movies;
