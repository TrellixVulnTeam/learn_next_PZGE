"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/camera/[id]",{

/***/ "./components/molecules/ErrorFallback/ErrorFallback.tsx":
/*!**************************************************************!*\
  !*** ./components/molecules/ErrorFallback/ErrorFallback.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar defaultErrorMessages = {\n    default: \"\\uC624\\uB958\\uAC00 \\uBC1C\\uC0DD\\uD588\\uC2B5\\uB2C8\\uB2E4\"\n};\nvar ErrorFallback = function(param) {\n    var errorMessages = param.errorMessages, errorCode = param.errorCode;\n    _s();\n    var getErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        if (!errorCode) return;\n        if (errorMessages[errorCode]) {\n            return errorMessages[errorCode];\n        } else if (errorMessages[\"default\"]) {\n            return errorMessages[\"default\"];\n        } else if (defaultErrorMessages[errorCode]) {\n            return defaultErrorMessages[errorCode];\n        } else {\n            return defaultErrorMessages[\"default\"];\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"error-fallback\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: getErrorMessage()\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\\\uBC84\\uB125\\uD2B8\\\\WebstormProjects\\\\first_week_next_react_webpack\\\\components\\\\molecules\\\\ErrorFallback\\\\ErrorFallback.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uBC84\\uB125\\uD2B8\\\\WebstormProjects\\\\first_week_next_react_webpack\\\\components\\\\molecules\\\\ErrorFallback\\\\ErrorFallback.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(ErrorFallback, \"jHdQWN0WmyCpVlD/aEaBHnGD9TE=\");\n_c = ErrorFallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorFallback);\nvar _c;\n$RefreshReg$(_c, \"ErrorFallback\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcy9FcnJvckZhbGxiYWNrL0Vycm9yRmFsbGJhY2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ29DOztBQVVwQyxJQUFNQyxvQkFBb0IsR0FBa0I7SUFDMUNDLE9BQU8sRUFBRSx5REFBWTtDQUN0QjtBQUVELElBQU1DLGFBQWEsR0FBRyxnQkFBeUM7UUFBdENDLGFBQWEsU0FBYkEsYUFBYSxFQUFFQyxTQUFTLFNBQVRBLFNBQVM7O0lBQy9DLElBQU1DLGVBQWUsR0FBR04sa0RBQVcsQ0FBQyxXQUFNO1FBQ3hDLElBQUksQ0FBQ0ssU0FBUyxFQUFFLE9BQU87UUFDdkIsSUFBSUQsYUFBYSxDQUFDQyxTQUFTLENBQUMsRUFBRTtZQUM1QixPQUFPRCxhQUFhLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDLE1BQU0sSUFBSUQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25DLE9BQU9BLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQyxNQUFNLElBQUlILG9CQUFvQixDQUFDSSxTQUFTLENBQUMsRUFBRTtZQUMxQyxPQUFPSixvQkFBb0IsQ0FBQ0ksU0FBUyxDQUFDLENBQUM7U0FDeEMsTUFBTTtZQUNMLE9BQU9KLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFDTixxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO2tCQUM3Qiw0RUFBQ0MsR0FBQztzQkFBRUgsZUFBZSxFQUFFOzs7OztpQkFBSzs7Ozs7YUFDdEIsQ0FDTjtDQUNIO0dBbEJLSCxhQUFhO0FBQWJBLEtBQUFBLGFBQWE7QUFvQm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2xlY3VsZXMvRXJyb3JGYWxsYmFjay9FcnJvckZhbGxiYWNrLnRzeD8yOGEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yUHJvcHMgfSBmcm9tIFwiLi4vLi4vd3JhcHBlcnMvSE9DL1dpdGhFcnJvckJvdW5kYXJ5XCI7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRXJyb3JNZXNzYWdlcyB7XG4gIFtrZXk6IHN0cmluZyB8IG51bWJlcl06IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRXJyb3JQcm9wcyB7XG4gIGVycm9yTWVzc2FnZXM6IEVycm9yTWVzc2FnZXM7XG59XG5cbmNvbnN0IGRlZmF1bHRFcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VzID0ge1xuICBkZWZhdWx0OiBcIuyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6RcIixcbn07XG5cbmNvbnN0IEVycm9yRmFsbGJhY2sgPSAoeyBlcnJvck1lc3NhZ2VzLCBlcnJvckNvZGUgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgZ2V0RXJyb3JNZXNzYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghZXJyb3JDb2RlKSByZXR1cm47XG4gICAgaWYgKGVycm9yTWVzc2FnZXNbZXJyb3JDb2RlXSkge1xuICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZXNbZXJyb3JDb2RlXTtcbiAgICB9IGVsc2UgaWYgKGVycm9yTWVzc2FnZXNbXCJkZWZhdWx0XCJdKSB7XG4gICAgICByZXR1cm4gZXJyb3JNZXNzYWdlc1tcImRlZmF1bHRcIl07XG4gICAgfSBlbHNlIGlmIChkZWZhdWx0RXJyb3JNZXNzYWdlc1tlcnJvckNvZGVdKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdEVycm9yTWVzc2FnZXNbZXJyb3JDb2RlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlZmF1bHRFcnJvck1lc3NhZ2VzW1wiZGVmYXVsdFwiXTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWZhbGxiYWNrXCI+XG4gICAgICA8cD57Z2V0RXJyb3JNZXNzYWdlKCl9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JGYWxsYmFjaztcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsImRlZmF1bHRFcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCIsIkVycm9yRmFsbGJhY2siLCJlcnJvck1lc3NhZ2VzIiwiZXJyb3JDb2RlIiwiZ2V0RXJyb3JNZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules/ErrorFallback/ErrorFallback.tsx\n");

/***/ }),

/***/ "./pages/camera/[id]/index.tsx":
/*!*************************************!*\
  !*** ./pages/camera/[id]/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_organisms_CameraPlayer_CameraPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/organisms/CameraPlayer/CameraPlayer */ \"./components/organisms/CameraPlayer/CameraPlayer.tsx\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CameraPage_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CameraPage.module.scss */ \"./pages/camera/[id]/CameraPage.module.scss\");\n/* harmony import */ var _CameraPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_CameraPage_module_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_organisms_CameraNavigation_CameraNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/organisms/CameraNavigation/CameraNavigation */ \"./components/organisms/CameraNavigation/CameraNavigation.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _queries_useCameraQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../queries/useCameraQuery */ \"./queries/useCameraQuery.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _store_modules_currentCameraSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/modules/currentCameraSlice */ \"./store/modules/currentCameraSlice.ts\");\n/* harmony import */ var _components_wrappers_HOC_WithErrorBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/wrappers/HOC/WithErrorBoundary */ \"./components/wrappers/HOC/WithErrorBoundary.tsx\");\n/* harmony import */ var _components_molecules_ErrorFallback_ErrorFallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/molecules/ErrorFallback/ErrorFallback */ \"./components/molecules/ErrorFallback/ErrorFallback.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_CameraPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default()));\nvar CameraPage = function() {\n    _s();\n    useCameraPage();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: cx(\"container\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_organisms_CameraPlayer_CameraPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uBC84\\uB125\\uD2B8\\\\WebstormProjects\\\\first_week_next_react_webpack\\\\pages\\\\camera\\\\[id]\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_organisms_CameraNavigation_CameraNavigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\\\uBC84\\uB125\\uD2B8\\\\WebstormProjects\\\\first_week_next_react_webpack\\\\pages\\\\camera\\\\[id]\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\\\uBC84\\uB125\\uD2B8\\\\WebstormProjects\\\\first_week_next_react_webpack\\\\pages\\\\camera\\\\[id]\\\\index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(CameraPage, \"27rf/Tenmnt/iYITY4cpogmm2Ys=\", false, function() {\n    return [\n        useCameraPage\n    ];\n});\n_c = CameraPage;\nvar useCameraPage = function() {\n    _s1();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)().query;\n    var id = query.id;\n    var ref = (0,react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"camera\",\n        id\n    ], function() {\n        return getCameraQuery(id);\n    }), data = ref.data, error = ref.error, isError = ref.isError;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        dispatch((0,_store_modules_currentCameraSlice__WEBPACK_IMPORTED_MODULE_9__.setCurrentCamera)(data));\n    }, [\n        data,\n        dispatch\n    ]);\n};\n_s1(useCameraPage, \"+Hoj8HyHdfRYCm8+TXSXn8iz5BI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\nvar getCameraQuery = function(id) {\n    if (!id) return null;\n    return (0,_queries_useCameraQuery__WEBPACK_IMPORTED_MODULE_7__.getCamera)(+id);\n};\nvar OnError = function(param) {\n    var errorCode = param.errorCode;\n    var errorMessages = {\n        403: \"\\uD574\\uB2F9 \\uCE74\\uBA54\\uB77C\\uC5D0 \\uC811\\uADFC \\uAD8C\\uD55C\\uC774 \\uC5C6\\uC2B5\\uB2C8\\uB2E4\",\n        404: \"\\uD574\\uB2F9 \\uCE74\\uBA54\\uB77C\\uB97C \\uCC3E\\uC744 \\uC218 \\uC5C6\\uC2B5\\uB2C8\\uB2E4\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_molecules_ErrorFallback_ErrorFallback__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        errorMessages: errorMessages,\n        errorCode: errorCode\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\\\uBC84\\uB125\\uD2B8\\\\WebstormProjects\\\\first_week_next_react_webpack\\\\pages\\\\camera\\\\[id]\\\\index.tsx\",\n        lineNumber: 77,\n        columnNumber: 7\n    }, _this);\n};\n_c1 = OnError;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,_components_wrappers_HOC_WithErrorBoundary__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(CameraPage, ErrorB));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"CameraPage\");\n$RefreshReg$(_c1, \"OnError\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1lcmEvW2lkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRjtBQUMxQztBQUNLO0FBQ2lEO0FBQ3JEO0FBQ0Y7QUFDTjtBQUMwQjtBQUNHO0FBQ2M7QUFLakI7QUFDMEI7O0FBRXRGLElBQU1ZLEVBQUUsR0FBR1gsMkRBQWUsQ0FBQ0MsaUVBQU0sQ0FBQztBQUVsQyxJQUFNWSxVQUFVLEdBQUcsV0FBTTs7SUFDdkJDLGFBQWEsRUFBRSxDQUFDO0lBRWhCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQzs7MEJBQzdCLDhEQUFDWix1RkFBWTs7OztxQkFBRzswQkFDaEIsOERBQUNHLCtGQUFnQjs7OztxQkFBRzs7Ozs7O2FBQ2hCLENBQ047Q0FDSDtHQVRLVyxVQUFVOztRQUNkQyxhQUFhOzs7QUFEVEQsS0FBQUEsVUFBVTtBQVdoQixJQUFNQyxhQUFhLEdBQUcsV0FBTTs7SUFDMUIsSUFBTUcsUUFBUSxHQUFHZCx3REFBVyxFQUFFO0lBQzlCLElBQU0sS0FBTyxHQUFLQyxzREFBUyxFQUFFLENBQXJCYyxLQUFLO0lBQ2IsSUFBTSxFQUFJLEdBQUtBLEtBQUssQ0FBWkMsRUFBRTtJQUVWLElBQWlDWixHQUVoQyxHQUZnQ0EscURBQVEsQ0FBQztRQUFDLFFBQVE7UUFBRVksRUFBRTtLQUFDLEVBQUU7ZUFDeERDLGNBQWMsQ0FBQ0QsRUFBRSxDQUFDO0tBQUEsQ0FDbkIsRUFGT0UsSUFBSSxHQUFxQmQsR0FFaEMsQ0FGT2MsSUFBSSxFQUFFQyxLQUFLLEdBQWNmLEdBRWhDLENBRmFlLEtBQUssRUFBRUMsT0FBTyxHQUFLaEIsR0FFaEMsQ0FGb0JnQixPQUFPO0lBSTVCbEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RZLFFBQVEsQ0FBQ1QsbUZBQWdCLENBQUNhLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDbEMsRUFBRTtRQUFDQSxJQUFJO1FBQUVKLFFBQVE7S0FBQyxDQUFDLENBQUM7Q0FDdEI7SUFaS0gsYUFBYTs7UUFDQVgsb0RBQVc7UUFDVkMsa0RBQVM7UUFHTUcsaURBQVE7OztBQVMzQyxJQUFNYSxjQUFjLEdBQUcsU0FBQ0QsRUFBaUMsRUFBSztJQUM1RCxJQUFJLENBQUNBLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQztJQUNyQixPQUFPYixrRUFBUyxDQUFDLENBQUNhLEVBQUUsQ0FBQyxDQUFDO0NBQ3ZCO0FBdUJELElBQU1LLE9BQU8sR0FBRyxnQkFBK0I7UUFBNUJDLFNBQVMsU0FBVEEsU0FBUztJQUMxQixJQUFNQyxhQUFhLEdBQUc7QUFDcEIsV0FBRyxFQUFHLGdHQUFxQjtBQUNHLFFBQTlCLEdBQUcsRUFBRyxvRkFBbUI7S0FDMUI7SUFDRCxxQkFDSSw4REFBQ2hCLDBGQUFhO1FBQUNnQixhQUFhLEVBQUVBLGFBQWE7UUFBRUQsU0FBUyxFQUFFQSxTQUFTOzs7OzthQUFJLENBQzFFO0NBQ0E7QUFSS0QsTUFBQUEsT0FBTzs7QUFVYiwrREFBZWYsTUFBQUEsdUZBQWlCLENBQUNJLFVBQVUsRUFBRWMsTUFBTSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtZXJhL1tpZF0vaW5kZXgudHN4P2Q0ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhbWVyYVBsYXllciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FtZXJhUGxheWVyL0NhbWVyYVBsYXllclwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYW1lcmFQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgQ2FtZXJhTmF2aWdhdGlvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9vcmdhbmlzbXMvQ2FtZXJhTmF2aWdhdGlvbi9DYW1lcmFOYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldENhbWVyYSB9IGZyb20gXCIuLi8uLi8uLi9xdWVyaWVzL3VzZUNhbWVyYVF1ZXJ5XCI7XG5pbXBvcnQgeyBkZWh5ZHJhdGUsIFF1ZXJ5Q2xpZW50LCB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgc2V0Q3VycmVudENhbWVyYSB9IGZyb20gXCIuLi8uLi8uLi9zdG9yZS9tb2R1bGVzL2N1cnJlbnRDYW1lcmFTbGljZVwiO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3dyYXBwZXJzL0Vycm9yQm91bmRhcnlcIjtcbmltcG9ydCBXaXRoRXJyb3JCb3VuZGFyeSwge1xuICBFcnJvclByb3BzLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy93cmFwcGVycy9IT0MvV2l0aEVycm9yQm91bmRhcnlcIjtcbmltcG9ydCBFcnJvckZhbGxiYWNrIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL21vbGVjdWxlcy9FcnJvckZhbGxiYWNrL0Vycm9yRmFsbGJhY2tcIjtcblxuY29uc3QgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcblxuY29uc3QgQ2FtZXJhUGFnZSA9ICgpID0+IHtcbiAgdXNlQ2FtZXJhUGFnZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KFwiY29udGFpbmVyXCIpfT5cbiAgICAgIDxDYW1lcmFQbGF5ZXIgLz5cbiAgICAgIDxDYW1lcmFOYXZpZ2F0aW9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1c2VDYW1lcmFQYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcblxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0Vycm9yIH0gPSB1c2VRdWVyeShbXCJjYW1lcmFcIiwgaWRdLCAoKSA9PlxuICAgIGdldENhbWVyYVF1ZXJ5KGlkKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0Q3VycmVudENhbWVyYShkYXRhKSk7XG4gIH0sIFtkYXRhLCBkaXNwYXRjaF0pO1xufTtcblxuY29uc3QgZ2V0Q2FtZXJhUXVlcnkgPSAoaWQ6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkKSA9PiB7XG4gIGlmICghaWQpIHJldHVybiBudWxsO1xuICByZXR1cm4gZ2V0Q2FtZXJhKCtpZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgaWQgfSxcbiAgfSA9IGNvbnRleHQ7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgcXVlcnlDbGllbnQuZmV0Y2hRdWVyeShbXCJjYW1lcmFcIiwgaWRdLCAoKSA9PiBnZXRDYW1lcmFRdWVyeShpZCkpO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkZWh5ZHJhdGVkU3RhdGU6IGRlaHlkcmF0ZShxdWVyeUNsaWVudCksXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGVycm9yQ29kZTogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5jb25zdCBPbkVycm9yID0gKHsgZXJyb3JDb2RlIH06IEVycm9yUHJvcHMpID0+IHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgICA0MDMgOiAn7ZW064u5IOy5tOuplOudvOyXkCDsoJHqt7wg6raM7ZWc7J20IOyXhuyKteuLiOuLpCcsXG4gICAgNDA0IDogJ+2VtOuLuSDsubTrqZTrnbzrpbwg7LC+7J2EIOyImCDsl4bsirXri4jri6QnXG4gIH1cbiAgcmV0dXJuIChcbiAgICAgIDxFcnJvckZhbGxiYWNrIGVycm9yTWVzc2FnZXM9e2Vycm9yTWVzc2FnZXN9IGVycm9yQ29kZT17ZXJyb3JDb2RlfSAvPlxuKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aEVycm9yQm91bmRhcnkoQ2FtZXJhUGFnZSwgRXJyb3JCKTtcbiJdLCJuYW1lcyI6WyJDYW1lcmFQbGF5ZXIiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiQ2FtZXJhTmF2aWdhdGlvbiIsInVzZURpc3BhdGNoIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZ2V0Q2FtZXJhIiwidXNlUXVlcnkiLCJzZXRDdXJyZW50Q2FtZXJhIiwiV2l0aEVycm9yQm91bmRhcnkiLCJFcnJvckZhbGxiYWNrIiwiY3giLCJiaW5kIiwiQ2FtZXJhUGFnZSIsInVzZUNhbWVyYVBhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNwYXRjaCIsInF1ZXJ5IiwiaWQiLCJnZXRDYW1lcmFRdWVyeSIsImRhdGEiLCJlcnJvciIsImlzRXJyb3IiLCJPbkVycm9yIiwiZXJyb3JDb2RlIiwiZXJyb3JNZXNzYWdlcyIsIkVycm9yQiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/camera/[id]/index.tsx\n");

/***/ })

});