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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Navbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text 2x1 font-bold text-grey-800\",\n                children: \"Navbar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        className: \"rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/Catalogo\",\n                        className: \"rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4\",\n                        children: \"Catalogo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aleoc\\\\OneDrive\\\\Escritorio\\\\Fantur\\\\Front-fantur-app\\\\pages\\\\component\\\\Navbar.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this);\n};\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnQvTmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQWUsU0FBU0EsTUFBTSxHQUFHO0lBQy9CLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzQkFBc0I7OzBCQUNuQyw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLGtDQUFrQzswQkFBQyxRQUFNOzs7OztvQkFBSTswQkFDMUQsOERBQUNFLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyxNQUFNOztrQ0FDbkIsOERBQUNHLEdBQUM7d0JBQUNDLElBQUksRUFBQyxHQUFHO3dCQUFDSixTQUFTLEVBQUMsNERBQTREO2tDQUFDLE1BRW5GOzs7Ozs0QkFBSTtrQ0FDSiw4REFBQ0csR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLFdBQVc7d0JBQUNKLFNBQVMsRUFBQyw0REFBNEQ7a0NBQUMsVUFFM0Y7Ozs7OzRCQUFJOzs7Ozs7b0JBQ0E7Ozs7OztZQUNGLENBQ1A7Q0FDRjtBQWR1QkYsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnQvTmF2YmFyLmpzPzMzYTMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0IDJ4MSBmb250LWJvbGQgdGV4dC1ncmV5LTgwMCc+TmF2YmFyPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcbiAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPSdyb3VuZGVkIGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcHktMiBweC00Jz5cclxuICAgICAgICAgIEhvbWVcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgaHJlZj0nL0NhdGFsb2dvJyBjbGFzc05hbWU9J3JvdW5kZWQgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQnPlxyXG4gICAgICAgICAgQ2F0YWxvZ29cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIk5hdmJhciIsIm5hdiIsImNsYXNzTmFtZSIsInAiLCJkaXYiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/component/Navbar.js\n");

/***/ })

});