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

/***/ "./pages/component/Navbar.js":
/*!***********************************!*\
  !*** ./pages/component/Navbar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavbarElto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarElto */ \"./pages/component/NavbarElto.js\");\n\n\nfunction Navbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex flex-wrap justify-between items-center mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden justify-between items-center w-full md:flex md:w-auto md:order-1\",\n                id: \"mobile-menu-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavbarElto__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                        lineNumber: 12,\n                        columnNumber: 19\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                    lineNumber: 11,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                lineNumber: 10,\n                columnNumber: 12\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n};\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnQvTmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFxQztBQUV0QixTQUFTQyxNQUFNLEdBQUc7SUFDL0IscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHVFQUF1RTtrQkFDcEYsNEVBQUNDLEtBQUc7WUFBQ0QsU0FBUyxFQUFDLCtEQUErRDtzQkFJekUsNEVBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyx5RUFBeUU7Z0JBQUNFLEVBQUUsRUFBQyxlQUFlOzBCQUN4Ryw0RUFBQ0MsSUFBRTtvQkFBQ0gsU0FBUyxFQUFDLCtFQUErRTs4QkFDekYsNEVBQUNILG1EQUFVO3dCQUFDTyxJQUFJLEVBQUMsR0FBRztrQ0FBQyxNQUFJOzs7Ozs0QkFBYTs7Ozs7d0JBQ3JDOzs7OztvQkFDRDs7Ozs7Z0JBQ0Y7Ozs7O1lBQ04sQ0FDUDtDQUNGO0FBZnVCTixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudC9OYXZiYXIuanM/MzNhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyRWx0byBmcm9tIFwiLi9OYXZiYXJFbHRvXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgcHgtMiBzbTpweC00IHB5LTIuNSByb3VuZGVkIGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBteC1hdXRvXCI+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLy9Cb3RvbmVzIHByaW5jaXBhbGVzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHctZnVsbCBtZDpmbGV4IG1kOnctYXV0byBtZDpvcmRlci0xXCIgaWQ9XCJtb2JpbGUtbWVudS0yXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXQtNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggbWQ6bXQtMCBtZDp0ZXh0LXNtIG1kOmZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZiYXJFbHRvIGhyZWY9XCIvXCI+SG9tZTwvTmF2YmFyRWx0bz5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIk5hdmJhckVsdG8iLCJOYXZiYXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJpZCIsInVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/component/Navbar.js\n");

/***/ })

});