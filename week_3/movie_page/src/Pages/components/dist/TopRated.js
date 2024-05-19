"use strict";
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var gr_1 = require("react-icons/gr");
var ti_1 = require("react-icons/ti");
function TopRated() {
    var _a = react_1.useState([]), movies = _a[0], setMovies = _a[1];
    var _b = react_1.useState(1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = react_1.useState(1), totalPages = _c[0], setTotalPages = _c[1];
    var _d = react_1.useState(5), cardsPerPage = _d[0], setCardsPerPage = _d[1]; // Number of cards per page
    var apiKey = "2872128c1cdccd2dce197bbadac76051";
    var popular = "https://api.themoviedb.org/3/movie/top_rated";
    react_1.useEffect(function () {
        fetchData();
        handleResize(); // Call handleResize initially to set cards per page based on initial screen size
        window.addEventListener('resize', handleResize); // Add event listener for window resize
        return function () { return window.removeEventListener('resize', handleResize); }; // Remove event listener on component unmount
    }, []);
    react_1.useEffect(function () {
        setTotalPages(Math.ceil(movies.length / cardsPerPage));
    }, [movies, cardsPerPage]);
    var fetchData = function () {
        axios_1["default"].get(popular + "?api_key=" + apiKey + "&page=1")
            .then(function (response) {
            var result = response.data.results;
            setMovies(result);
        })["catch"](function (error) {
            console.error('Error fetching data:', error);
        });
    };
    var goToPreviousPage = function () {
        setCurrentPage(function (prevPage) { return (prevPage === 1 ? 1 : prevPage - 1); });
    };
    var goToNextPage = function () {
        setCurrentPage(function (prevPage) { return (prevPage === totalPages ? totalPages : prevPage + 1); });
    };
    var paginate = function (pageNumber) { return setCurrentPage(pageNumber); };
    var getPageNumbers = function () {
        var maxButtons = 3; // Maximum number of pagination buttons to display
        var half = Math.floor(maxButtons / 2);
        var start = Math.max(currentPage - half, 1);
        var end = start + maxButtons - 1;
        if (end > totalPages) {
            end = totalPages;
            start = Math.max(end - maxButtons + 1, 1);
        }
        return Array.from({ length: end - start + 1 }, function (_, i) { return start + i; });
    };
    var renderStars = function (rating) {
        var stars = [];
        var filledStars = Math.floor(rating / 2);
        var hasHalfStar = rating % 2 !== 0;
        for (var i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(react_1["default"].createElement(ti_1.TiStarFullOutline, { key: i, style: { color: '#e50000' } }));
            }
            else if (hasHalfStar && i === filledStars) {
                stars.push(react_1["default"].createElement(ti_1.TiStarHalfOutline, { key: i, style: { color: '#e50000' } }));
            }
            else {
                stars.push(react_1["default"].createElement(ti_1.TiStarFullOutline, { key: i, style: { color: '#C0C0C0' } }));
            }
        }
        return stars;
    };
    var handleResize = function () {
        if (window.innerWidth <= 768) {
            setCardsPerPage(1); // Set cards per page to 1 for smaller screens (e.g., mobile devices)
        }
        else if (window.innerWidth <= 930) {
            setCardsPerPage(2); // Set cards per page to 2 for screens between 768px and 930px
        }
        else if (window.innerWidth <= 1250) {
            setCardsPerPage(3); // Set cards per page to 3 for screens between 930px and 1250px
        }
        else {
            setCardsPerPage(5); // Set cards per page to 5 for larger screens
        }
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "head" },
            react_1["default"].createElement("h2", null, "Must - Watch Movies"),
            react_1["default"].createElement("div", { className: "pagination" },
                react_1["default"].createElement("button", { onClick: goToPreviousPage },
                    react_1["default"].createElement(gr_1.GrLinkPrevious, { style: { width: '26px', height: '26px' } })),
                getPageNumbers().map(function (pageNumber) { return (react_1["default"].createElement("button", { key: pageNumber, onClick: function () { return paginate(pageNumber); }, className: pageNumber === currentPage ? "active" : "", style: { width: '20px', height: '20px', border: '0', margin: '0', padding: '0', backgroundColor: '#0F0F0F', color: currentPage === pageNumber ? 'red' : '' } },
                    react_1["default"].createElement("h1", null,
                        react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "16", fill: "currentColor", className: "bi bi-dash", viewBox: "0 0 16 16" },
                            react_1["default"].createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" }))))); }),
                react_1["default"].createElement("button", { onClick: goToNextPage },
                    react_1["default"].createElement(gr_1.GrLinkNext, { style: { width: '26px', height: '26px' } })))),
        react_1["default"].createElement("div", { className: 'genres-container img_cart' }, movies.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map(function (item) { return (react_1["default"].createElement("div", { key: item.id, className: "krt" },
            item.poster_path && (react_1["default"].createElement("img", { className: "imgg", src: "https://image.tmdb.org/t/p/w200" + item.poster_path, alt: item.title + " Poster" })),
            react_1["default"].createElement("div", { className: "relase" },
                react_1["default"].createElement("p", { style: { textAlign: 'end' } }, renderStars(item.vote_average))))); }))));
}
exports["default"] = TopRated;
