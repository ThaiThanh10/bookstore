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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ebe42c092fc4\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz81Mjg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZWJlNDJjMDkyZmM0XCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.css\n"));

/***/ }),

/***/ "./src/components/context/MainProvider.js":
/*!************************************************!*\
  !*** ./src/components/context/MainProvider.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainContext\": function() { return /* binding */ MainContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MainProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLogout = ()=>{\n        message.success(\"Log Out Successfully\");\n        setIsLogin(false);\n        setUserInfo({});\n        localStorage.removeItem(\"isLogin\");\n        localStorage.removeItem(\"userInfo\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const _userInfo = localStorage.getItem(\"userInfo\");\n        const _isLogin = localStorage.getItem(\"isLogin\");\n        if (_userInfo) {\n            const user = JSON.parse(_userInfo || \" \");\n            console.log(\"\\uD83D\\uDE80user---->\", user);\n            console.log(\"\\uD83D\\uDE80_isLogin---->\", _isLogin);\n            setUserInfo(user);\n            setIsLogin(_isLogin);\n            return;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContext.Provider, {\n        value: {\n            userInfo,\n            setUserInfo,\n            isLogin,\n            setIsLogin,\n            handleLogout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\context\\\\MainProvider.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainProvider, \"zXSDoaSgMLSjBl4GqBxBeu2zhlQ=\");\n_c = MainProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainProvider);\nvar _c;\n$RefreshReg$(_c, \"MainProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L01haW5Qcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0U7QUFDM0QsTUFBTUksNEJBQWNILG9EQUFhQSxHQUFHO0FBRTNDLE1BQU1JLGVBQWUsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUNoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUMxQyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNUSxlQUFlLElBQU07UUFDekJDLFFBQVFDLE9BQU8sQ0FBQztRQUNoQkgsV0FBVyxLQUFLO1FBQ2hCRixZQUFZLENBQUM7UUFDYk0sYUFBYUMsVUFBVSxDQUFDO1FBQ3hCRCxhQUFhQyxVQUFVLENBQUM7SUFDMUI7SUFFQWIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1jLFlBQVlGLGFBQWFHLE9BQU8sQ0FBQztRQUN2QyxNQUFNQyxXQUFXSixhQUFhRyxPQUFPLENBQUM7UUFDdEMsSUFBSUQsV0FBVztZQUNiLE1BQU1HLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0wsYUFBYTtZQUNyQ00sUUFBUUMsR0FBRyxDQUFDLHlCQUFlSjtZQUMzQkcsUUFBUUMsR0FBRyxDQUFDLDZCQUFtQkw7WUFDL0JWLFlBQVlXO1lBQ1pULFdBQVdRO1lBQ1g7UUFDRixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNkLFlBQVlvQixRQUFRO1FBQ25CQyxPQUFPO1lBQUVsQjtZQUFVQztZQUFhQztZQUFTQztZQUFXQztRQUFhO2tCQUVoRUw7Ozs7OztBQUdQO0dBL0JNRDtLQUFBQTtBQWlDTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L01haW5Qcm92aWRlci5qcz8yMjQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBjb25zdCBNYWluQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IE1haW5Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbWVzc2FnZS5zdWNjZXNzKFwiTG9nIE91dCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcclxuICAgIHNldFVzZXJJbmZvKHt9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlckluZm9cIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IF91c2VySW5mbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIik7XHJcbiAgICBjb25zdCBfaXNMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgIGlmIChfdXNlckluZm8pIHtcclxuICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoX3VzZXJJbmZvIHx8IFwiIFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCLwn5qAdXNlci0tLS0+XCIsIHVzZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoBfaXNMb2dpbi0tLS0+XCIsIF9pc0xvZ2luKTtcclxuICAgICAgc2V0VXNlckluZm8odXNlcik7XHJcbiAgICAgIHNldElzTG9naW4oX2lzTG9naW4pXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3sgdXNlckluZm8sIHNldFVzZXJJbmZvLCBpc0xvZ2luLCBzZXRJc0xvZ2luLGhhbmRsZUxvZ291dCB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L01haW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haW5Db250ZXh0IiwiTWFpblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJtZXNzYWdlIiwic3VjY2VzcyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJfdXNlckluZm8iLCJnZXRJdGVtIiwiX2lzTG9naW4iLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/context/MainProvider.js\n"));

/***/ })

});