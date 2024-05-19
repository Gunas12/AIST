"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Navbar() {
    var brandimg = '/images/brand.png';
    var search_icon = 'images/search.png';
    var notification_icon = 'images/notification.png';
    var _a = react_1.useState(false), menuActive = _a[0], setMenuActive = _a[1];
    var navToggle = function () {
        setMenuActive(!menuActive);
    };
    return (react_1["default"].createElement("nav", { className: "navbar" },
        react_1["default"].createElement("div", { className: "nav__brand" },
            react_1["default"].createElement("img", { src: brandimg, alt: "brand" })),
        react_1["default"].createElement("div", { className: "nav_ul_2 " + (menuActive ? 'nav__active' : '') },
            react_1["default"].createElement("ul", { className: "nav__menu " + (menuActive ? 'nav__active' : '') },
                react_1["default"].createElement("li", { className: "nav__item" },
                    react_1["default"].createElement("button", null, "Home")),
                react_1["default"].createElement("li", { className: "nav__item" },
                    react_1["default"].createElement("button", { className: "nav_active" }, "Movies & Shows")),
                react_1["default"].createElement("li", { className: "nav__item" },
                    react_1["default"].createElement("button", null, "Support")),
                react_1["default"].createElement("li", { className: "nav__item" },
                    react_1["default"].createElement("button", null, "Subscriptions")))),
        react_1["default"].createElement("ul", { className: "icons" },
            react_1["default"].createElement("li", { className: "nav__item" },
                react_1["default"].createElement("a", { href: "#" },
                    react_1["default"].createElement("img", { src: search_icon, alt: "search" }))),
            react_1["default"].createElement("li", { className: "nav__item" },
                react_1["default"].createElement("a", { href: "#" },
                    react_1["default"].createElement("img", { src: notification_icon, alt: "notification" })))),
        react_1["default"].createElement("div", { onClick: navToggle, className: "nav__toggler " + (menuActive ? 'toggle' : '') },
            react_1["default"].createElement("div", { className: "line1" }),
            react_1["default"].createElement("div", { className: "line2" }),
            react_1["default"].createElement("div", { className: "line3" }))));
}
exports["default"] = Navbar;
