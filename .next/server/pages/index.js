(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Menu/index.js":
/*!**********************************!*\
  !*** ./components/Menu/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/menu.module.css */ "./styles/menu.module.css");
/* harmony import */ var _styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_menu_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\projects\\mfacademy\\components\\Menu\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Menu = () => {
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

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu/index.js");
var _jsxFileName = "D:\\projects\\mfacademy\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Home = () => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().apresentacao),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().apresentacaoText),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Forma\xE7\xE3o Ministerial - Online"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Voc\xEA vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma plataforma de alta tecnologia."))), __jsx("section", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().cursos),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().titulo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Cursos")), __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().especifico),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgCurso),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().conteudoCurso),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("p", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().subTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "Online"), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, "Treinamento de volunt\xE1rios e consolidados! "), __jsx("p", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().body),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, "Venha conhecer mais sobre a vis\xE3o do Minist\xE9rio da F\xE9, al\xE9m de princ\xEDpios de autoridade espiritual, disciplina e voca\xE7\xE3o que ir\xE3o ajudar voc\xEA a servir com excel\xEAncia e leveza na casa do Senhor!"), __jsx("a", {
    href: "https://api.whatsapp.com/send?phone=+55(61)981357453",
    target: "_blanck",
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnMatric),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, "Matricule-se")))), __jsx("footer", {
    className: `${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().web)}  ${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().rodape)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().social),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images/logo.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().textBody),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, "Voc\xEA vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma plataforma de alta tecnologia.")), __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().groupText),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().tituloFooter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "Contato"), __jsx("a", {
    href: "https://api.whatsapp.com/send?phone=+55(61)981357453",
    target: "_blanck",
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().subTituloFooter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 139
    }
  }, "Tel:"), " (61) 9 8135-7453"), __jsx("a", {
    href: "mailto: atendimento@mfacademy.com.br",
    target: "_blanck",
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().subTituloFooter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 123
    }
  }, "Email:"), "   atendimento@mfacademy.com.br")))), __jsx("footer", {
    className: `${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobile)}  ${(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().rodape)}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().mobileimg),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "images/logo.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, "Voc\xEA vai estudar, praticar, discutir e se aprofundar no evangelho do Senhor em uma plataforma de alta tecnologia."), __jsx("div", {
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().footerGroup),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "Contato"), __jsx("a", {
    href: "https://api.whatsapp.com/send?phone=+55(61)981357453",
    target: "_blanck",
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().subTituloFooter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 139
    }
  }, "Tel:"), " (61) 9 8135-7453"), __jsx("a", {
    href: "mailto: atendimento@mfacademy.com.br",
    target: "_blanck",
    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default().subTituloFooter),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 123
    }
  }, "Email:"), "   atendimento@mfacademy.com.br")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles/home.module.css":
/*!********************************!*\
  !*** ./styles/home.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"apresentacao": "home_apresentacao__1LJGF",
	"apresentacaoText": "home_apresentacaoText__3zbre",
	"titulo": "home_titulo__3QlKC",
	"cursos": "home_cursos___DZqv",
	"especifico": "home_especifico__3iMAl",
	"imgCurso": "home_imgCurso__2sExe",
	"conteudoCurso": "home_conteudoCurso__1s9JR",
	"subTitle": "home_subTitle__u-JRy",
	"body": "home_body__1oWaS",
	"btnMatric": "home_btnMatric__3OHUN",
	"professores": "home_professores__3kuY3",
	"conteudo": "home_conteudo__Zq1yS",
	"professor": "home_professor__1G_ft",
	"card": "home_card__25Vz5",
	"mt-card-divid": "home_mt-card-divid__1nhcV",
	"nome": "home_nome__2QyBW",
	"funcao": "home_funcao__1PThT",
	"mlplus": "home_mlplus__1x6hk",
	"mtplus": "home_mtplus__1ycDr",
	"rodape": "home_rodape__DiO1c",
	"social": "home_social__1oCYz",
	"textBody": "home_textBody__LIpi1",
	"groupText": "home_groupText__3NmJ_",
	"tituloFooter": "home_tituloFooter__22osi",
	"subTituloFooter": "home_subTituloFooter__2XJA7",
	"mobile": "home_mobile__1E4Re",
	"mob-none": "home_mob-none__1ACrP",
	"web": "home_web__YH4rn",
	"mobileimg": "home_mobileimg__3P9AH",
	"footerGroup": "home_footerGroup__3spD1"
};


/***/ }),

/***/ "./styles/menu.module.css":
/*!********************************!*\
  !*** ./styles/menu.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"menu": "menu_menu__2ZDpA",
	"menuGroup": "menu_menuGroup__3rUJj",
	"button": "menu_button__3OTvR",
	"btnMatric": "menu_btnMatric__2OkOH",
	"menuGroupMob": "menu_menuGroupMob__2FPsA",
	"menuMob": "menu_menuMob__swvOi",
	"imgLogomob": "menu_imgLogomob__3X6Sy",
	"imgMenuMob": "menu_imgMenuMob__3Sgdq",
	"menuMobActive": "menu_menuMobActive__3zrgQ",
	"groupBtnMob": "menu_groupBtnMob__hdiun",
	"btnMatricMob": "menu_btnMatricMob__3hM5G",
	"btnEntrarMob": "menu_btnEntrarMob__3fN6V"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZmFjYWRlbXkvLi9jb21wb25lbnRzL01lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWZhY2FkZW15Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWZhY2FkZW15Ly4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9tZmFjYWRlbXkvLi9zdHlsZXMvbWVudS5tb2R1bGUuY3NzIiwid2VicGFjazovL21mYWNhZGVteS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTWVudSIsIm1lbnVNb2IiLCJSZWFjdCIsImhhbmRsZU1lbnUiLCJjdXJyZW50IiwiY2xhc3NOYW1lIiwiaGFuZGxlQ2xvc2VNZW51Iiwic3R5bGVzIiwiSG9tZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDZixRQUFNQyxPQUFPLEdBQUdDLG1EQUFBLENBQWEsSUFBYixDQUFoQjs7QUFDQSxXQUFTQyxVQUFULEdBQXNCO0FBQ2xCRixXQUFPLENBQUNHLE9BQVIsQ0FBZ0JDLFNBQWhCLEdBQTRCLGVBQTVCO0FBQ0g7O0FBRUQsV0FBU0MsZUFBVCxHQUEyQjtBQUN2QkwsV0FBTyxDQUFDRyxPQUFSLENBQWdCQyxTQUFoQixHQUE0QixTQUE1QjtBQUNIOztBQUNELFNBQ0kscUVBQ0E7QUFBSyxPQUFHLEVBQUVKLE9BQVY7QUFBbUIsYUFBUyxFQUFFTSx3RUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsV0FBTyxFQUFFRCxlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsbUJBQVQ7QUFBNkIsT0FBRyxFQUFDLEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUVDLDRF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QUFNLEVBQUMsU0FBdEQ7QUFBZ0UsYUFBUyxFQUFFQSxnRkFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWxHLG9DQUhKLENBTFIsQ0EzQ0osQ0FEQSxDQURKO0FBMkRILENBNUREOztBQThEQSwrREFBZUQsSUFBZixFOzs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNkQSxtQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvbWVudS5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVNb2IgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNZW51KCkge1xyXG4gICAgICAgIG1lbnVNb2IuY3VycmVudC5jbGFzc05hbWUgPSAnbWVudU1vYkFjdGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNZW51KCkge1xyXG4gICAgICAgIG1lbnVNb2IuY3VycmVudC5jbGFzc05hbWUgPSAnbWVudU1vYic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiByZWY9e21lbnVNb2J9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVNb2J9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xvc2Uuc3ZnXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncm91cEJ0bk1vYn0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jdXJzb3MubWZhY2FkZW15LmNvbS5ici9sb2dpblwiIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkVudHJhck1vYn0gPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSs1NSg2MSk5ODEzNTc0NTMpXCIgdGFyZ2V0PVwiX2JsYW5ja1wiIGNsYXNzTmFtZT17c3R5bGVzLmJ0bk1hdHJpY01vYn0+XHJcbiAgICAgICAgICAgICAgICAgICAgTWF0cmljdWxlLXNlXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxuYXYgaWQ9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51R3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jdXJzb3MubWZhY2FkZW15LmNvbS5ici9sb2dpblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRW50cmFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rNTUoNjEpOTgxMzU3NDUzKVwiIHRhcmdldD1cIl9ibGFuY2tcIiBjbGFzc05hbWU9e3N0eWxlcy5idG5NYXRyaWN9Pk1hdHJpY3VsZS1zZTwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudUdyb3VwTW9ifT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ0xvZ29tb2J9IGFsdD1cIkxvZ29cIi8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU1lbnV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9tZW51LnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmltZ01lbnVNb2J9IGFsdD1cIm1lbnVcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcydcclxuXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuYXByZXNlbnRhY2FvfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hcHJlc2VudGFjYW9UZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+Rm9ybWHDp8OjbyBNaW5pc3RlcmlhbCAtIE9ubGluZTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Vm9jw6ogdmFpIGVzdHVkYXIsIHByYXRpY2FyLCBkaXNjdXRpciBlIHNlIGFwcm9mdW5kYXIgbm8gZXZhbmdlbGhvIGRvIFNlbmhvciBlbSB1bWFcclxucGxhdGFmb3JtYSBkZSBhbHRhIHRlY25vbG9naWEuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uPlNhaWJhIG1haXM8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmN1cnNvc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGl0dWxvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+Q3Vyc29zPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5lc3BlY2lmaWNvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltZ0N1cnNvfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRldWRvQ3Vyc299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5zdWJUaXRsZX0+T25saW5lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlRyZWluYW1lbnRvIGRlIHZvbHVudMOhcmlvcyBlIGNvbnNvbGlkYWRvcyEgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuYm9keX0+VmVuaGEgY29uaGVjZXIgbWFpcyBzb2JyZSBhIHZpc8Ojb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvIE1pbmlzdMOpcmlvIGRhIEbDqSwgYWzDqW0gZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmluY8OtcGlvcyBkZSBhdXRvcmlkYWRlIGVzcGlyaXR1YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY2lwbGluYSBlIHZvY2HDp8OjbyBxdWUgaXLDo28gYWp1ZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9jw6ogYSBzZXJ2aXIgY29tIGV4Y2Vsw6puY2lhIGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlemEgbmEgY2FzYSBkbyBTZW5ob3IhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSs1NSg2MSk5ODEzNTc0NTNcIiB0YXJnZXQ9XCJfYmxhbmNrXCIgY2xhc3NOYW1lPXtzdHlsZS5idG5NYXRyaWN9Pk1hdHJpY3VsZS1zZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2Ake3N0eWxlLndlYn0gICR7c3R5bGUucm9kYXBlfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2ltYWdlcy9sb2dvLnBuZycgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnRleHRCb2R5fT5Wb2PDqiB2YWkgZXN0dWRhciwgcHJhdGljYXIsIGRpc2N1dGlyIGUgc2UgYXByb2Z1bmRhciBubyBldmFuZ2VsaG8gZG8gU2VuaG9yIGVtIHVtYSBwbGF0YWZvcm1hIGRlIGFsdGEgdGVjbm9sb2dpYS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmdyb3VwVGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUudGl0dWxvRm9vdGVyfT5Db250YXRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzU1KDYxKTk4MTM1NzQ1M1wiIHRhcmdldD1cIl9ibGFuY2tcIiBjbGFzc05hbWU9e3N0eWxlLnN1YlRpdHVsb0Zvb3Rlcn0+PHN0cm9uZz5UZWw6PC9zdHJvbmc+ICg2MSkgOSA4MTM1LTc0NTM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86IGF0ZW5kaW1lbnRvQG1mYWNhZGVteS5jb20uYnJcIiB0YXJnZXQ9XCJfYmxhbmNrXCIgY2xhc3NOYW1lPXtzdHlsZS5zdWJUaXR1bG9Gb290ZXJ9PjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICAgYXRlbmRpbWVudG9AbWZhY2FkZW15LmNvbS5icjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2Ake3N0eWxlLm1vYmlsZX0gICR7c3R5bGUucm9kYXBlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tb2JpbGVpbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naW1hZ2VzL2xvZ28ucG5nJyBhbHQ9XCJcIi8+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlZvY8OqIHZhaSBlc3R1ZGFyLCBwcmF0aWNhciwgZGlzY3V0aXIgZSBzZSBhcHJvZnVuZGFyIG5vIGV2YW5nZWxobyBkbyBTZW5ob3IgZW0gdW1hIHBsYXRhZm9ybWEgZGUgYWx0YSB0ZWNub2xvZ2lhLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZm9vdGVyR3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db250YXRvPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzU1KDYxKTk4MTM1NzQ1M1wiIHRhcmdldD1cIl9ibGFuY2tcIiBjbGFzc05hbWU9e3N0eWxlLnN1YlRpdHVsb0Zvb3Rlcn0+PHN0cm9uZz5UZWw6PC9zdHJvbmc+ICg2MSkgOSA4MTM1LTc0NTM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86IGF0ZW5kaW1lbnRvQG1mYWNhZGVteS5jb20uYnJcIiB0YXJnZXQ9XCJfYmxhbmNrXCIgY2xhc3NOYW1lPXtzdHlsZS5zdWJUaXR1bG9Gb290ZXJ9PjxzdHJvbmc+RW1haWw6PC9zdHJvbmc+ICAgYXRlbmRpbWVudG9AbWZhY2FkZW15LmNvbS5icjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXByZXNlbnRhY2FvXCI6IFwiaG9tZV9hcHJlc2VudGFjYW9fXzFMSkdGXCIsXG5cdFwiYXByZXNlbnRhY2FvVGV4dFwiOiBcImhvbWVfYXByZXNlbnRhY2FvVGV4dF9fM3picmVcIixcblx0XCJ0aXR1bG9cIjogXCJob21lX3RpdHVsb19fM1FsS0NcIixcblx0XCJjdXJzb3NcIjogXCJob21lX2N1cnNvc19fX0RacXZcIixcblx0XCJlc3BlY2lmaWNvXCI6IFwiaG9tZV9lc3BlY2lmaWNvX18zaU1BbFwiLFxuXHRcImltZ0N1cnNvXCI6IFwiaG9tZV9pbWdDdXJzb19fMnNFeGVcIixcblx0XCJjb250ZXVkb0N1cnNvXCI6IFwiaG9tZV9jb250ZXVkb0N1cnNvX18xczlKUlwiLFxuXHRcInN1YlRpdGxlXCI6IFwiaG9tZV9zdWJUaXRsZV9fdS1KUnlcIixcblx0XCJib2R5XCI6IFwiaG9tZV9ib2R5X18xb1dhU1wiLFxuXHRcImJ0bk1hdHJpY1wiOiBcImhvbWVfYnRuTWF0cmljX18zT0hVTlwiLFxuXHRcInByb2Zlc3NvcmVzXCI6IFwiaG9tZV9wcm9mZXNzb3Jlc19fM2t1WTNcIixcblx0XCJjb250ZXVkb1wiOiBcImhvbWVfY29udGV1ZG9fX1pxMXlTXCIsXG5cdFwicHJvZmVzc29yXCI6IFwiaG9tZV9wcm9mZXNzb3JfXzFHX2Z0XCIsXG5cdFwiY2FyZFwiOiBcImhvbWVfY2FyZF9fMjVWejVcIixcblx0XCJtdC1jYXJkLWRpdmlkXCI6IFwiaG9tZV9tdC1jYXJkLWRpdmlkX18xbmhjVlwiLFxuXHRcIm5vbWVcIjogXCJob21lX25vbWVfXzJReUJXXCIsXG5cdFwiZnVuY2FvXCI6IFwiaG9tZV9mdW5jYW9fXzFQVGhUXCIsXG5cdFwibWxwbHVzXCI6IFwiaG9tZV9tbHBsdXNfXzF4NmhrXCIsXG5cdFwibXRwbHVzXCI6IFwiaG9tZV9tdHBsdXNfXzF5Y0RyXCIsXG5cdFwicm9kYXBlXCI6IFwiaG9tZV9yb2RhcGVfX0RpTzFjXCIsXG5cdFwic29jaWFsXCI6IFwiaG9tZV9zb2NpYWxfXzFvQ1l6XCIsXG5cdFwidGV4dEJvZHlcIjogXCJob21lX3RleHRCb2R5X19MSXBpMVwiLFxuXHRcImdyb3VwVGV4dFwiOiBcImhvbWVfZ3JvdXBUZXh0X18zTm1KX1wiLFxuXHRcInRpdHVsb0Zvb3RlclwiOiBcImhvbWVfdGl0dWxvRm9vdGVyX18yMm9zaVwiLFxuXHRcInN1YlRpdHVsb0Zvb3RlclwiOiBcImhvbWVfc3ViVGl0dWxvRm9vdGVyX18yWEpBN1wiLFxuXHRcIm1vYmlsZVwiOiBcImhvbWVfbW9iaWxlX18xRTRSZVwiLFxuXHRcIm1vYi1ub25lXCI6IFwiaG9tZV9tb2Itbm9uZV9fMUFDclBcIixcblx0XCJ3ZWJcIjogXCJob21lX3dlYl9fWUg0cm5cIixcblx0XCJtb2JpbGVpbWdcIjogXCJob21lX21vYmlsZWltZ19fM1A5QUhcIixcblx0XCJmb290ZXJHcm91cFwiOiBcImhvbWVfZm9vdGVyR3JvdXBfXzNzcEQxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51XCI6IFwibWVudV9tZW51X18yWkRwQVwiLFxuXHRcIm1lbnVHcm91cFwiOiBcIm1lbnVfbWVudUdyb3VwX18zclVKalwiLFxuXHRcImJ1dHRvblwiOiBcIm1lbnVfYnV0dG9uX18zT1R2UlwiLFxuXHRcImJ0bk1hdHJpY1wiOiBcIm1lbnVfYnRuTWF0cmljX18yT2tPSFwiLFxuXHRcIm1lbnVHcm91cE1vYlwiOiBcIm1lbnVfbWVudUdyb3VwTW9iX18yRlBzQVwiLFxuXHRcIm1lbnVNb2JcIjogXCJtZW51X21lbnVNb2JfX3N3dk9pXCIsXG5cdFwiaW1nTG9nb21vYlwiOiBcIm1lbnVfaW1nTG9nb21vYl9fM1g2U3lcIixcblx0XCJpbWdNZW51TW9iXCI6IFwibWVudV9pbWdNZW51TW9iX18zU2dkcVwiLFxuXHRcIm1lbnVNb2JBY3RpdmVcIjogXCJtZW51X21lbnVNb2JBY3RpdmVfXzN6cmdRXCIsXG5cdFwiZ3JvdXBCdG5Nb2JcIjogXCJtZW51X2dyb3VwQnRuTW9iX19oZGl1blwiLFxuXHRcImJ0bk1hdHJpY01vYlwiOiBcIm1lbnVfYnRuTWF0cmljTW9iX18zaE01R1wiLFxuXHRcImJ0bkVudHJhck1vYlwiOiBcIm1lbnVfYnRuRW50cmFyTW9iX18zZk42VlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=