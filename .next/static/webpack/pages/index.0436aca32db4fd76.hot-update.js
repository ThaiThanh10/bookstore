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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8649e01f3ff0\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz81Mjg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiODY0OWUwMWYzZmYwXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/global.css\n"));

/***/ }),

/***/ "./src/components/context/MainProvider.js":
/*!************************************************!*\
  !*** ./src/components/context/MainProvider.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainContext\": function() { return /* binding */ MainContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst MainProvider = (param)=>{\n    let { children  } = param;\n    _s();\n    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isLogin, setIsLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isModalLoginOpen, setIsModalLoginOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLogout = ()=>{\n        antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Log Out Successfully\");\n        setIsLogin(false);\n        setUserInfo({});\n        localStorage.removeItem(\"isLogin\");\n        localStorage.removeItem(\"userInfo\");\n    };\n    const showModalLogin = ()=>{\n        setIsModalLoginOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const _userInfo = localStorage.getItem(\"userInfo\");\n        const _isLogin = localStorage.getItem(\"isLogin\");\n        if (_userInfo) {\n            const user = JSON.parse(_userInfo || \" \");\n            console.log(\"\\uD83D\\uDE80user---->\", user);\n            console.log(\"\\uD83D\\uDE80_isLogin---->\", _isLogin);\n            setUserInfo(user);\n            setIsLogin(_isLogin);\n            return;\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContext.Provider, {\n        value: {\n            userInfo,\n            setUserInfo,\n            isLogin,\n            setIsLogin,\n            handleLogout,\n            showModalLogin,\n            isModalLoginOpen,\n            setIsModalLoginOpen\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\thaib\\\\OneDrive\\\\Desktop\\\\MyProject\\\\bookstore\\\\src\\\\components\\\\context\\\\MainProvider.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainProvider, \"fKwCahHxWRcRedzYAt+63PUKJpw=\");\n_c = MainProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainProvider);\nvar _c;\n$RefreshReg$(_c, \"MainProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L01haW5Qcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBQ21DO0FBQzNELE1BQU1LLDRCQUFjSCxvREFBYUEsR0FBRztBQUUzQyxNQUFNSSxlQUFlLFNBQWtCO1FBQWpCLEVBQUVDLFNBQVEsRUFBRTs7SUFDaEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDUSxrQkFBa0JDLG9CQUFvQixHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlELE1BQU1VLGVBQWUsSUFBTTtRQUN6QmQsb0RBQWUsQ0FBQztRQUNoQlcsV0FBVyxLQUFLO1FBQ2hCRixZQUFZLENBQUM7UUFDYk8sYUFBYUMsVUFBVSxDQUFDO1FBQ3hCRCxhQUFhQyxVQUFVLENBQUM7SUFDMUI7SUFDQSxNQUFNQyxpQkFBaUIsSUFBTTtRQUMzQkwsb0JBQW9CLElBQUk7SUFDMUI7SUFDQVYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1nQixZQUFZSCxhQUFhSSxPQUFPLENBQUM7UUFDdkMsTUFBTUMsV0FBV0wsYUFBYUksT0FBTyxDQUFDO1FBQ3RDLElBQUlELFdBQVc7WUFDYixNQUFNRyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMLGFBQWE7WUFDckNNLFFBQVFDLEdBQUcsQ0FBQyx5QkFBZUo7WUFDM0JHLFFBQVFDLEdBQUcsQ0FBQyw2QkFBbUJMO1lBQy9CWixZQUFZYTtZQUNaWCxXQUFXVTtZQUNYO1FBQ0YsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDaEIsWUFBWXNCLFFBQVE7UUFDbkJDLE9BQU87WUFBRXBCO1lBQVVDO1lBQWFDO1lBQVNDO1lBQVdHO1lBQWFJO1lBQWVOO1lBQWtCQztRQUFvQjtrQkFFckhOOzs7Ozs7QUFHUDtHQWxDTUQ7S0FBQUE7QUFvQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29udGV4dC9NYWluUHJvdmlkZXIuanM/MjI0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGNvbnN0IE1haW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgTWFpblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc0xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNb2RhbExvZ2luT3Blbiwgc2V0SXNNb2RhbExvZ2luT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbWVzc2FnZS5zdWNjZXNzKFwiTG9nIE91dCBTdWNjZXNzZnVsbHlcIik7XHJcbiAgICBzZXRJc0xvZ2luKGZhbHNlKTtcclxuICAgIHNldFVzZXJJbmZvKHt9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaXNMb2dpblwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlckluZm9cIik7XHJcbiAgfTtcclxuICBjb25zdCBzaG93TW9kYWxMb2dpbiA9ICgpID0+IHtcclxuICAgIHNldElzTW9kYWxMb2dpbk9wZW4odHJ1ZSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgX3VzZXJJbmZvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKTtcclxuICAgIGNvbnN0IF9pc0xvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpc0xvZ2luXCIpO1xyXG4gICAgaWYgKF91c2VySW5mbykge1xyXG4gICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShfdXNlckluZm8gfHwgXCIgXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoB1c2VyLS0tLT5cIiwgdXNlcik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+agF9pc0xvZ2luLS0tLT5cIiwgX2lzTG9naW4pO1xyXG4gICAgICBzZXRVc2VySW5mbyh1c2VyKTtcclxuICAgICAgc2V0SXNMb2dpbihfaXNMb2dpbilcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyB1c2VySW5mbywgc2V0VXNlckluZm8sIGlzTG9naW4sIHNldElzTG9naW4saGFuZGxlTG9nb3V0LHNob3dNb2RhbExvZ2luLGlzTW9kYWxMb2dpbk9wZW4sIHNldElzTW9kYWxMb2dpbk9wZW4gfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9NYWluQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblByb3ZpZGVyO1xyXG4iXSwibmFtZXMiOlsibWVzc2FnZSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFpbkNvbnRleHQiLCJNYWluUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImlzTW9kYWxMb2dpbk9wZW4iLCJzZXRJc01vZGFsTG9naW5PcGVuIiwiaGFuZGxlTG9nb3V0Iiwic3VjY2VzcyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJzaG93TW9kYWxMb2dpbiIsIl91c2VySW5mbyIsImdldEl0ZW0iLCJfaXNMb2dpbiIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/context/MainProvider.js\n"));

/***/ })

});