"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/component/List.js":
/*!*********************************!*\
  !*** ./pages/component/List.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavbarElto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarElto */ \"./pages/component/NavbarElto.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar NavEltos = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            name: \"Home\",\n            href: \"/\"\n        },\n        {\n            name: \"Catalogo\",\n            href: \"/catalogo\"\n        }, \n    ]), navlEltos = ref[0], setNavEltos = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden justify-between items-center w-full md:flex md:w-auto md:order-1\",\n        id: \"mobile-menu-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: navlEltos.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavbarElto__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: item.href,\n                    children: item.name\n                }, item.index, false, {\n                    fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\List.js\",\n                    lineNumber: 21,\n                    columnNumber: 13\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\List.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\List.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavEltos, \"4QBi5wAX+sPr3NeZj9jhQsul2a0=\");\n_c = NavEltos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavEltos);\nvar _c;\n$RefreshReg$(_c, \"NavEltos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnQvTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBd0M7QUFDRjs7QUFFdEMsSUFBTUcsUUFBUSxHQUFHLFdBQU07OztJQUNyQixJQUFpQ0YsR0FTL0IsR0FUK0JBLCtDQUFRLENBQUM7UUFDeEM7WUFDRUcsSUFBSSxFQUFFLE1BQU07WUFDWkMsSUFBSSxFQUFDLEdBQUc7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxVQUFVO1lBQ2hCQyxJQUFJLEVBQUMsV0FBVztTQUNqQjtLQUNGLENBQUMsRUFiSixTQUlrQixHQUFpQkosR0FTL0IsR0FUYyxFQUpsQixXQUkrQixHQUFJQSxHQVMvQixHQVQyQjtJQVc3QixxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMseUVBQXlFO1FBQUNDLEVBQUUsRUFBQyxlQUFlO2tCQUN6Ryw0RUFBQ0MsSUFBRTtzQkFDQUwsU0FBUyxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFDQyxLQUFLLEVBQUs7Z0JBQzlCLHFCQUNHLDhEQUFDWixtREFBVTtvQkFFVEcsSUFBSSxFQUFFUSxJQUFJLENBQUNSLElBQUk7OEJBQUdRLElBQUksQ0FBQ1QsSUFBSTttQkFEdEJTLElBQUksQ0FBQ0MsS0FBSzs7OzswQkFDMEIsQ0FDM0M7YUFDSCxDQUFDOzs7OztpQkFDQzs7Ozs7YUFDRCxDQUNOO0NBQ0g7R0F6QktYLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTJCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudC9MaXN0LmpzPzRmOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXJFbHRvIGZyb20gXCIuL05hdmJhckVsdG9cIjtcclxuXHJcbmNvbnN0IE5hdkVsdG9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYXZsRWx0b3MsIHNldE5hdkVsdG9zXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICAgIGhyZWY6XCIvXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhdGFsb2dvXCIsXHJcbiAgICAgIGhyZWY6XCIvY2F0YWxvZ29cIlxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsIG1kOmZsZXggbWQ6dy1hdXRvIG1kOm9yZGVyLTFcIiBpZD1cIm1vYmlsZS1tZW51LTFcIj5cclxuICAgICAgPHVsPiAgXHJcbiAgICAgICAge25hdmxFbHRvcy5tYXAoKGl0ZW0saW5kZXgpID0+IHtcclxuICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE5hdmJhckVsdG9cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaW5kZXh9XHJcbiAgICAgICAgICAgICAgaHJlZj17aXRlbS5ocmVmfT57aXRlbS5uYW1lfTwvTmF2YmFyRWx0bz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2RWx0b3M7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZiYXJFbHRvIiwiTmF2RWx0b3MiLCJuYW1lIiwiaHJlZiIsIm5hdmxFbHRvcyIsInNldE5hdkVsdG9zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJ1bCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/component/List.js\n");

/***/ })

});