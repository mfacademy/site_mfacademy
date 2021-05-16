self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/menu.module.css */ "./styles/menu.module.css");
/* harmony import */ var _styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\projects\\mfacademy\\components\\Menu\\index.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Menu = () => {
  _s();

  const menuMob = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);

  function handleMenu() {
    menuMob.current.className = 'menuMobActive';
  }

  function handleCloseMenu() {
    menuMob.current.className = 'menuMob';
  }

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    ref: menuMob,
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().menuMob),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: handleCloseMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/close.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().groupBtnMob),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://cursos.mfacademy.com.br/login",
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().btnEntrarMob),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Entrar"), __jsx("a", {
    href: "https://api.whatsapp.com/send?phone=+55(61)981357453)",
    target: "_blanck",
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().btnMatricMob),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Matricule-se"))), __jsx("nav", {
    id: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().menu),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().menuGroup),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/logo.png",
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://cursos.mfacademy.com.br/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Entrar"), __jsx("a", {
    href: "https://api.whatsapp.com/send?phone=+55(61)981357453)",
    target: "_blanck",
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().btnMatric),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "Matricule-se"))), __jsx("div", {
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().menuGroupMob),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/images/logo.png",
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().imgLogomob),
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: handleMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/menu.svg",
    className: (_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default().imgMenuMob),
    alt: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  })))));
};

_s(Menu, "yPEjnDulV9FNFoIxQi/0+KJ2Vic=");

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbIk1lbnUiLCJtZW51TW9iIiwiUmVhY3QiLCJoYW5kbGVNZW51IiwiY3VycmVudCIsImNsYXNzTmFtZSIsImhhbmRsZUNsb3NlTWVudSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNQyxPQUFPLEdBQUdDLG1EQUFBLENBQWEsSUFBYixDQUFoQjs7QUFDQSxXQUFTQyxVQUFULEdBQXNCO0FBQ2xCRixXQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLFNBQWhCLEdBQTRCLGVBQTVCO0FBQ0g7O0FBRUQsV0FBU0MsZUFBVCxHQUEyQjtBQUN2QkwsV0FBTyxDQUFDRyxPQUFSLENBQWdCQyxTQUFoQixHQUE0QixTQUE1QjtBQUNIOztBQUNELFNBQ0kscUVBQ0E7QUFBSyxPQUFHLEVBQUVKLE9BQVY7QUFBbUIsYUFBUyxFQUFFTSx3RUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsV0FBTyxFQUFFRCxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUVDLDRFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsdUNBQVI7QUFBZ0QsYUFBUyxFQUFFQSw2RUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBSUk7QUFBRyxRQUFJLEVBQUMsdURBQVI7QUFBZ0UsVUFBTSxFQUFDLFNBQXZFO0FBQWlGLGFBQVMsRUFBRUEsNkVBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosQ0FKSixDQURBLEVBY0E7QUFBSyxNQUFFLEVBQUVBLHFFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsMEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxrQkFBVDtBQUE0QixPQUFHLEVBQUMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVBLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUMsdUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBSUk7QUFBRyxRQUFJLEVBQUMsdURBQVI7QUFBZ0UsVUFBTSxFQUFDLFNBQXZFO0FBQWlGLGFBQVMsRUFBRUEsMEVBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkosQ0FGSixDQURKLEVBV0k7QUFBSyxhQUFTLEVBQUVBLDZFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFQSwyRUFBdkM7QUFBMEQsT0FBRyxFQUFDLE1BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQVEsV0FBTyxFQUFFSixVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBUyxFQUFFSSwyRUFBdkM7QUFBMEQsT0FBRyxFQUFDLE1BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLENBWEosQ0FkQSxDQURKO0FBbUNILENBNUNEOztHQUFNUCxJOztLQUFBQSxJO0FBOENOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRhMTE4YWZkMzdjN2ZhNWM5ODdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL21lbnUubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51TW9iID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcclxuICAgICAgICBtZW51TW9iLmN1cnJlbnQuY2xhc3NOYW1lID0gJ21lbnVNb2JBY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlTWVudSgpIHtcclxuICAgICAgICBtZW51TW9iLmN1cnJlbnQuY2xhc3NOYW1lID0gJ21lbnVNb2InO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgcmVmPXttZW51TW9ifSBjbGFzc05hbWU9e3N0eWxlcy5tZW51TW9ifT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Nsb3NlLnN2Z1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JvdXBCdG5Nb2J9PlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY3Vyc29zLm1mYWNhZGVteS5jb20uYnIvbG9naW5cIiBjbGFzc05hbWU9e3N0eWxlcy5idG5FbnRyYXJNb2J9ID5cclxuICAgICAgICAgICAgICAgICAgICBFbnRyYXJcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rNTUoNjEpOTgxMzU3NDUzKVwiIHRhcmdldD1cIl9ibGFuY2tcIiBjbGFzc05hbWU9e3N0eWxlcy5idG5NYXRyaWNNb2J9PlxyXG4gICAgICAgICAgICAgICAgICAgIE1hdHJpY3VsZS1zZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmF2IGlkPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY3Vyc29zLm1mYWNhZGVteS5jb20uYnIvbG9naW5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzU1KDYxKTk4MTM1NzQ1MylcIiB0YXJnZXQ9XCJfYmxhbmNrXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnRuTWF0cmljfT5NYXRyaWN1bGUtc2U8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVHcm91cE1vYn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWdMb2dvbW9ifSBhbHQ9XCJMb2dvXCIvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVNZW51fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbWVudS5zdmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWdNZW51TW9ifSBhbHQ9XCJtZW51XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=