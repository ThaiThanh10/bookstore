"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_website_pages_UIHomepage_UIHomepage_js",{

/***/ "./src/components/website/pages/UIHomepage/Item.js":
/*!*********************************************************!*\
  !*** ./src/components/website/pages/UIHomepage/Item.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _plugins_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/plugins/assets */ \"./src/plugins/assets/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Item = (param)=>{\n    let { title , authors , price , onClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[1px] w-1/3 border-[#eae8e4] p-[25px] bg-[#fff] flex flex-col justify-between items-start hover:border-[#000] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"mb-3 px-4 mx-auto\",\n                src: \"https://picsum.photos/180/220\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"title \",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text my-3\",\n                        children: authors\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text\",\n                        children: price\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClick,\n                className: \"flex justify-around items-center w-full mt-3 border-[1px] border-[#000] py-2 text-[16px] hover:bg-slate-200 \",\n                children: [\n                    \"Add to cart\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: (0,_plugins_assets__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/images/shopping-bag.png\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\website\\\\pages\\\\UIHomepage\\\\Item.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Item;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Item);\nvar _c;\n$RefreshReg$(_c, \"Item\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93ZWJzaXRlL3BhZ2VzL1VJSG9tZXBhZ2UvSXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFDWDtBQUUxQixNQUFNRSxPQUFPLFNBQXdDO1FBQXZDLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLFFBQU8sRUFBRTtJQUM5QyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUNDRCxXQUFVO2dCQUNWRSxLQUFJO2dCQUNKQyxLQUFJOzs7Ozs7MEJBRU4sOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUdKLFdBQVU7a0NBQVVMOzs7Ozs7a0NBQ3hCLDhEQUFDUzt3QkFBR0osV0FBVTtrQ0FBYUo7Ozs7OztrQ0FDM0IsOERBQUNRO3dCQUFHSixXQUFVO2tDQUFRSDs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ1E7Z0JBQ0NQLFNBQVNBO2dCQUNURSxXQUFVOztvQkFDWDtrQ0FFQyw4REFBQ0M7d0JBQUlDLEtBQUtWLDJEQUFLQSxDQUFDO3dCQUE2QlcsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXpEO0tBdEJNVDtBQXdCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy93ZWJzaXRlL3BhZ2VzL1VJSG9tZXBhZ2UvSXRlbS5qcz9jZGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NldCBmcm9tIFwiQC9wbHVnaW5zL2Fzc2V0c1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJdGVtID0gKHsgdGl0bGUsIGF1dGhvcnMsIHByaWNlLCBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gdy0xLzMgYm9yZGVyLVsjZWFlOGU0XSBwLVsyNXB4XSBiZy1bI2ZmZl0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgaG92ZXI6Ym9yZGVyLVsjMDAwXSBcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTMgcHgtNCBteC1hdXRvXCJcclxuICAgICAgICBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvMTgwLzIyMFwiXHJcbiAgICAgICAgYWx0PVwiXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGUgXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQgbXktM1wiPnthdXRob3JzfTwvaDE+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHRcIj57cHJpY2V9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHctZnVsbCBtdC0zIGJvcmRlci1bMXB4XSBib3JkZXItWyMwMDBdIHB5LTIgdGV4dC1bMTZweF0gaG92ZXI6Ymctc2xhdGUtMjAwIFwiXHJcbiAgICAgID5cclxuICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgIDxpbWcgc3JjPXthc3NldChcIi9pbWFnZXMvc2hvcHBpbmctYmFnLnBuZ1wiKX0gYWx0PVwiXCIgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuIl0sIm5hbWVzIjpbImFzc2V0IiwiUmVhY3QiLCJJdGVtIiwidGl0bGUiLCJhdXRob3JzIiwicHJpY2UiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/website/pages/UIHomepage/Item.js\n"));

/***/ })

});