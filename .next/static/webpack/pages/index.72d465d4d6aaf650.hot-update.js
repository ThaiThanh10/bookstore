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

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b8d30edc10a4\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz81Mjg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYjhkMzBlZGMxMGE0XCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.css\n"));

/***/ }),

/***/ "./src/components/context/MainProvider.js":
/*!************************************************!*\
  !*** ./src/components/context/MainProvider.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainContext\": function() { return /* binding */ MainContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MainProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const _userInfo = localStorage.getItem(\"userInfo\");\n        const _isLogin = localStorage.getItem(\"isLogin\");\n        if (_userInfo) {\n            const user = JSON.parse(_userInfo || \" \");\n            console.log(\"\\uD83D\\uDE80user---->\", user);\n            console.log(\"\\uD83D\\uDE80_isLogin---->\", _isLogin);\n            setUserInfo(user);\n            return;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContext.Provider, {\n        value: {\n            userInfo,\n            setUserInfo,\n            isLogin,\n            setIsLogin\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\context\\\\MainProvider.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainProvider, \"zXSDoaSgMLSjBl4GqBxBeu2zhlQ=\");\n_c = MainProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainProvider);\nvar _c;\n$RefreshReg$(_c, \"MainProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L01haW5Qcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0U7QUFDM0QsTUFBTUksNEJBQWNILG9EQUFhQSxHQUFHO0FBRTNDLE1BQU1JLGVBQWUsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUMxQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUU1Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1TLFlBQVlDLGFBQWFDLE9BQU8sQ0FBQztRQUN2QyxNQUFNQyxXQUFXRixhQUFhQyxPQUFPLENBQUM7UUFDdEMsSUFBSUYsV0FBVztZQUNiLE1BQU1JLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ04sYUFBYTtZQUNyQ08sUUFBUUMsR0FBRyxDQUFDLHlCQUFlSjtZQUMzQkcsUUFBUUMsR0FBRyxDQUFDLDZCQUFtQkw7WUFDL0JOLFlBQVlPO1lBQ1o7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNYLFlBQVlnQixRQUFRO1FBQ25CQyxPQUFPO1lBQUVkO1lBQVVDO1lBQWFDO1lBQVNDO1FBQVc7a0JBRW5ESjs7Ozs7O0FBR1A7R0F2Qk1EO0tBQUFBO0FBeUJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbnRleHQvTWFpblByb3ZpZGVyLmpzPzIyNDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGNvbnN0IE1haW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTWFpblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IF91c2VySW5mbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XHJcbiAgICBjb25zdCBfaXNMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgIGlmIChfdXNlckluZm8pIHtcclxuICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoX3VzZXJJbmZvIHx8IFwiIFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCLwn5qAdXNlci0tLS0+XCIsIHVzZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoBfaXNMb2dpbi0tLS0+XCIsIF9pc0xvZ2luKTtcclxuICAgICAgc2V0VXNlckluZm8odXNlcik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgdXNlckluZm8sIHNldFVzZXJJbmZvLCBpc0xvZ2luLCBzZXRJc0xvZ2luIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTWFpbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5Qcm92aWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFpbkNvbnRleHQiLCJNYWluUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsIl91c2VySW5mbyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfaXNMb2dpbiIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/context/MainProvider.js\n"));

/***/ })

});