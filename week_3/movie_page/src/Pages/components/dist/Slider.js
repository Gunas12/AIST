"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_splide_1 = require("@splidejs/react-splide");
var axios_1 = require("axios");
require("@splidejs/react-splide/css");
var fa6_1 = require("react-icons/fa6");
var fa_1 = require("react-icons/fa");
var ai_1 = require("react-icons/ai");
var io5_1 = require("react-icons/io5");
function Slider() {
    var _a = react_1.useState([]), movies = _a[0], setMovies = _a[1];
    var _b = react_1.useState(false), showVideo = _b[0], setShowVideo = _b[1];
    var _c = react_1.useState(false), isLiked = _c[0], setIsLiked = _c[1];
    var _d = react_1.useState(true), isMuted = _d[0], setIsMuted = _d[1];
    var _e = react_1.useState(false), isPlaying = _e[0], setIsPlaying = _e[1];
    var apiKey = "2872128c1cdccd2dce197bbadac76051";
    var popular = "https://api.themoviedb.org/3/movie/popular";
    react_1.useEffect(function () {
        fetchData();
    }, []);
    var fetchData = function () {
        axios_1["default"].get(popular + "?api_key=" + apiKey).then(function (response) {
            var result = response.data.results;
            setMovies(result);
        });
    };
    var handlePlayButtonClick = function () {
        setShowVideo(!showVideo);
        setIsPlaying(!isPlaying);
        setIsMuted(false);
    };
    var handleLikeButtonClick = function () {
        setIsLiked(!isLiked);
    };
    var handleSoundButtonClick = function () {
        setIsMuted(!isMuted);
    };
    var handleOverlayClick = function () {
        setShowVideo(false);
        setIsPlaying(false);
    };
    return (react_1["default"].createElement("div", { className: "cont" },
        react_1["default"].createElement("div", { className: "slide-container" },
            react_1["default"].createElement(react_splide_1.Splide, { options: {
                    type: 'fade',
                    drag: true,
                    snap: true,
                    perPage: 1,
                    direction: 'ltr',
                    heightRatio: 0.7,
                    lazyLoad: 'nearby'
                } }, movies.map(function (item) { return (react_1["default"].createElement(react_splide_1.SplideSlide, { key: item.id },
                react_1["default"].createElement("div", { className: 'movieContainer' },
                    react_1["default"].createElement("img", { src: "https://image.tmdb.org/t/p/w500" + item.poster_path, alt: item.title }),
                    showVideo && (react_1["default"].createElement("div", { className: "overlay", onClick: handleOverlayClick },
                        react_1["default"].createElement("video", { controls: true, autoPlay: isPlaying, muted: isMuted },
                            react_1["default"].createElement("source", { src: "https://api.themoviedb.org/3/movie/" + item.id + "/videos?api_key=" + apiKey, type: "video/mp4" }),
                            "Your browser does not support the video tag."))),
                    react_1["default"].createElement("div", { className: "button-container" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h3", null, item.title),
                            react_1["default"].createElement("p", null, item.overview)),
                        react_1["default"].createElement("div", { className: "buttons" },
                            react_1["default"].createElement("button", { className: "play-button", onClick: handlePlayButtonClick },
                                isPlaying ? react_1["default"].createElement(fa_1.FaPause, null) : react_1["default"].createElement(fa_1.FaPlay, null),
                                " ",
                                showVideo ? "Pause" : "Play Now"),
                            react_1["default"].createElement("button", { className: "btn_n" },
                                react_1["default"].createElement(fa6_1.FaPlus, { style: { width: '20px', height: '20px' } })),
                            react_1["default"].createElement("button", { className: "like-button " + (isLiked ? 'liked' : ''), onClick: handleLikeButtonClick }, isLiked ? react_1["default"].createElement(ai_1.AiFillLike, { style: { width: '28px', height: '28px' } }) : react_1["default"].createElement(ai_1.AiOutlineLike, { style: { width: '28px', height: '28px' } })),
                            react_1["default"].createElement("button", { className: "sound-button " + (isMuted ? 'muted' : ''), onClick: handleSoundButtonClick }, isMuted ? react_1["default"].createElement(fa6_1.FaVolumeXmark, { style: { width: '28px', height: '28px' } }) : react_1["default"].createElement(io5_1.IoVolumeMediumSharp, { style: { width: '28px', height: '28px' } }))))))); })))));
}
exports["default"] = Slider;
