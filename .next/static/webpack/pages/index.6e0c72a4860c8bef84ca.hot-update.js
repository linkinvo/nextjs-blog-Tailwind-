"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SiteHeader.tsx":
/*!***********************************!*\
  !*** ./components/SiteHeader.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteHeader": function() { return /* binding */ SiteHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\vovav\\Desktop\\Extrums\\nextjs-blog\\components\\SiteHeader.tsx",
    _this = undefined,
    _s = $RefreshSig$();

// import React, { useState } from 'react';
// import Link from 'next/link';
// const SiteHeader = () => {
// const [active, setActive] = useState(false);
// const handleClick = () => {
// setActive(!active);
// };
// return (
// <>
// {/* <button className='px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white'>
//     <svg className='h-6 w-6 fill-current' viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447716 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447716 14 1 14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H1Z" fill="#A0AEC0" />
//     </svg>
// </button> */}
// {/* <nav>
// <div className='px-2 pt-2 pb-5 border-b border-gray-800'>
// <a href="#" className='block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>List your property</a>
// <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Trips</a>
// <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Messages</a>
// </div>
// <div className='px-5 py-5'>
// <div className='flex items-center'>
//     <img className='h-10 w-10 object-cover rounded-full border-2 border-gray-600' src="images/avatar.png" alt="avatar" />
//     <span className='ml-4 font-semibold text-gray-200'>Isla Schoger</span>
// </div>
// <div className='mt-5'>
//     <a href="#" className='block text-gray-400 hover:text-white'>Account Settings</a>
//     <a href="#" className='mt-3 block text-gray-400 hover:text-white'>Support</a>
//     <a href="#" className='mt-3 block text-gray-400 hover:text-white'>Sign out</a>
// </div>
// </div>
// </nav> */}
// <nav>
//     {/* className=' inline-flex p-3 rounded lg:hidden ml-auto outline-none' */}
//     <button onClick={handleClick} className='
//                                 inline-flex
//                                 p-3 
//                                 px-2 
//                                 rounded
//                                 text-gray-500 
//                                 hover:text-white 
//                                 focus:outline-none 
//                                 focus:text-white'
//     >
//         <svg className='h-6 w-6 fill-current' viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447716 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H1C0.447716 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447716 14 1 14H17C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12H1Z" fill="#A0AEC0" />
//         </svg>
//     </button>
//     <div
//         className={`${active ? '' : 'hidden'
//             }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
//     >
//         <div className='px-2 pt-2 pb-5 border-b border-gray-800'>
//             <Link href='/'>
//                 <a href="#" className='block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>List your property</a>
//             </Link>
//             <Link href='/'>
//                 <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Trips</a>
//             </Link>
//             <Link href='/'>
//                 <a href="#" className='mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800'>Messages</a>
//             </Link>
//         </div>
//     </div>
// </nav>
// </>
// );
// };
// export default SiteHeader;


var SiteHeader = function SiteHeader() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      active = _useState[0],
      setActive = _useState[1];

  var handleClick = function handleClick() {
    setActive(!active);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "flex items-center flex-wrap bg-green-400 p-3 ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "inline-flex items-center p-2 mr-4 ",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            className: "fill-current text-white h-8 w-8 mr-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: " inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none",
        onClick: handleClick,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
          className: "w-6 h-6",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16M4 18h16"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "".concat(active ? '' : 'hidden', "   w-full lg:inline-flex lg:flex-grow lg:w-auto"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "About us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "Contact us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(SiteHeader, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");

_c = SiteHeader;

var _c;

$RefreshReg$(_c, "SiteHeader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmUwYzcyYTQ4NjBjOGJlZjg0Y2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRU8sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNGRCwrQ0FBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3ZCRSxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBRzlCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELElBQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsK0NBQWY7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLG9DQUFiO0FBQUEsaUNBQ0U7QUFDRSxtQkFBTyxFQUFDLFdBRFY7QUFFRSxpQkFBSyxFQUFDLDRCQUZSO0FBR0UscUJBQVMsRUFBQyxzQ0FIWjtBQUFBLG1DQUtFO0FBQU0sZUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUU7QUFDRSxpQkFBUyxFQUFDLHdHQURaO0FBRUUsZUFBTyxFQUFFRSxXQUZYO0FBQUEsK0JBSUU7QUFDRSxtQkFBUyxFQUFDLFNBRFo7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLGdCQUFNLEVBQUMsY0FIVDtBQUlFLGlCQUFPLEVBQUMsV0FKVjtBQUtFLGVBQUssRUFBQyw0QkFMUjtBQUFBLGlDQU9FO0FBQ0UseUJBQWEsRUFBQyxPQURoQjtBQUVFLDBCQUFjLEVBQUMsT0FGakI7QUFHRSx1QkFBVyxFQUFFLENBSGY7QUFJRSxhQUFDLEVBQUM7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQWlDRTtBQUNFLGlCQUFTLFlBQ1BGLE1BQU0sR0FBRyxFQUFILEdBQVEsUUFEUCxvREFEWDtBQUFBLCtCQUtFO0FBQUssbUJBQVMsRUFBQyw2R0FBZjtBQUFBLGtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLHlJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLHdJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQVdFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLHdJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQWdCRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFrRUQsQ0F6RU07O0dBQU1EOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpdGVIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIGNvbnN0IFNpdGVIZWFkZXIgPSAoKSA9PiB7XHJcbi8vIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuLy8gc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4vLyB9O1xyXG4vLyByZXR1cm4gKFxyXG4vLyA8PlxyXG4vLyB7LyogPGJ1dHRvbiBjbGFzc05hbWU9J3B4LTIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlJz5cclxuLy8gICAgIDxzdmcgY2xhc3NOYW1lPSdoLTYgdy02IGZpbGwtY3VycmVudCcgdmlld0JveD1cIjAgMCAxOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4vLyAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMUMwIDAuNDQ3NzE1IDAuNDQ3NzE1IDAgMSAwSDE3QzE3LjU1MjMgMCAxOCAwLjQ0NzcxNSAxOCAxQzE4IDEuNTUyMjggMTcuNTUyMyAyIDE3IDJIMUMwLjQ0NzcxNiAyIDAgMS41NTIyOCAwIDFaTTAgN0MwIDYuNDQ3NzIgMC40NDc3MTUgNiAxIDZIMTdDMTcuNTUyMyA2IDE4IDYuNDQ3NzIgMTggN0MxOCA3LjU1MjI4IDE3LjU1MjMgOCAxNyA4SDFDMC40NDc3MTYgOCAwIDcuNTUyMjggMCA3Wk0xIDEyQzAuNDQ3NzE1IDEyIDAgMTIuNDQ3NyAwIDEzQzAgMTMuNTUyMyAwLjQ0NzcxNiAxNCAxIDE0SDE3QzE3LjU1MjMgMTQgMTggMTMuNTUyMyAxOCAxM0MxOCAxMi40NDc3IDE3LjU1MjMgMTIgMTcgMTJIMVpcIiBmaWxsPVwiI0EwQUVDMFwiIC8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gPC9idXR0b24+ICovfVxyXG5cclxuLy8gey8qIDxuYXY+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPSdweC0yIHB0LTIgcGItNSBib3JkZXItYiBib3JkZXItZ3JheS04MDAnPlxyXG4vLyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5MaXN0IHlvdXIgcHJvcGVydHk8L2E+XHJcbi8vIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+VHJpcHM8L2E+XHJcbi8vIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TWVzc2FnZXM8L2E+XHJcbi8vIDwvZGl2PlxyXG4vLyA8ZGl2IGNsYXNzTmFtZT0ncHgtNSBweS01Jz5cclxuLy8gPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cclxuLy8gICAgIDxpbWcgY2xhc3NOYW1lPSdoLTEwIHctMTAgb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS02MDAnIHNyYz1cImltYWdlcy9hdmF0YXIucG5nXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuLy8gICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtNCBmb250LXNlbWlib2xkIHRleHQtZ3JheS0yMDAnPklzbGEgU2Nob2dlcjwvc3Bhbj5cclxuLy8gPC9kaXY+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cclxuLy8gICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdibG9jayB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnPkFjY291bnQgU2V0dGluZ3M8L2E+XHJcbi8vICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMyBibG9jayB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnPlN1cHBvcnQ8L2E+XHJcbi8vICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMyBibG9jayB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnPlNpZ24gb3V0PC9hPlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcbi8vIDwvbmF2PiAqL31cclxuXHJcbi8vIDxuYXY+XHJcbi8vICAgICB7LyogY2xhc3NOYW1lPScgaW5saW5lLWZsZXggcC0zIHJvdW5kZWQgbGc6aGlkZGVuIG1sLWF1dG8gb3V0bGluZS1ub25lJyAqL31cclxuLy8gICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT0nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lLWZsZXhcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLTMgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtMiBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTUwMCBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LXdoaXRlJ1xyXG4vLyAgICAgPlxyXG4vLyAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdoLTYgdy02IGZpbGwtY3VycmVudCcgdmlld0JveD1cIjAgMCAxOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4vLyAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAxQzAgMC40NDc3MTUgMC40NDc3MTUgMCAxIDBIMTdDMTcuNTUyMyAwIDE4IDAuNDQ3NzE1IDE4IDFDMTggMS41NTIyOCAxNy41NTIzIDIgMTcgMkgxQzAuNDQ3NzE2IDIgMCAxLjU1MjI4IDAgMVpNMCA3QzAgNi40NDc3MiAwLjQ0NzcxNSA2IDEgNkgxN0MxNy41NTIzIDYgMTggNi40NDc3MiAxOCA3QzE4IDcuNTUyMjggMTcuNTUyMyA4IDE3IDhIMUMwLjQ0NzcxNiA4IDAgNy41NTIyOCAwIDdaTTEgMTJDMC40NDc3MTUgMTIgMCAxMi40NDc3IDAgMTNDMCAxMy41NTIzIDAuNDQ3NzE2IDE0IDEgMTRIMTdDMTcuNTUyMyAxNCAxOCAxMy41NTIzIDE4IDEzQzE4IDEyLjQ0NzcgMTcuNTUyMyAxMiAxNyAxMkgxWlwiIGZpbGw9XCIjQTBBRUMwXCIgLz5cclxuLy8gICAgICAgICA8L3N2Zz5cclxuLy8gICAgIDwvYnV0dG9uPlxyXG5cclxuLy8gICAgIDxkaXZcclxuLy8gICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICcnIDogJ2hpZGRlbidcclxuLy8gICAgICAgICAgICAgfSAgIHctZnVsbCBsZzppbmxpbmUtZmxleCBsZzpmbGV4LWdyb3cgbGc6dy1hdXRvYH1cclxuLy8gICAgID5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMiBwdC0yIHBiLTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktODAwJz5cclxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5MaXN0IHlvdXIgcHJvcGVydHk8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMSBibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPlRyaXBzPC9hPlxyXG4vLyAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4vLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTEgYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5NZXNzYWdlczwvYT5cclxuLy8gICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIDwvbmF2PlxyXG4vLyA8Lz5cclxuLy8gKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNpdGVIZWFkZXI7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTaXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGJnLWdyZWVuLTQwMCBwLTMgJz5cclxuICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0naW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiBtci00ICc+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmlsbC1jdXJyZW50IHRleHQtd2hpdGUgaC04IHctOCBtci0yJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGggZD0nTTEyLjAwMSA0LjhjLTMuMiAwLTUuMiAxLjYtNiA0LjggMS4yLTEuNiAyLjYtMi4yIDQuMi0xLjguOTEzLjIyOCAxLjU2NS44OSAyLjI4OCAxLjYyNEMxMy42NjYgMTAuNjE4IDE1LjAyNyAxMiAxOC4wMDEgMTJjMy4yIDAgNS4yLTEuNiA2LTQuOC0xLjIgMS42LTIuNiAyLjItNC4yIDEuOC0uOTEzLS4yMjgtMS41NjUtLjg5LTIuMjg4LTEuNjI0QzE2LjMzNyA2LjE4MiAxNC45NzYgNC44IDEyLjAwMSA0Ljh6bS02IDcuMmMtMy4yIDAtNS4yIDEuNi02IDQuOCAxLjItMS42IDIuNi0yLjIgNC4yLTEuOC45MTMuMjI4IDEuNTY1Ljg5IDIuMjg4IDEuNjI0IDEuMTc3IDEuMTk0IDIuNTM4IDIuNTc2IDUuNTEyIDIuNTc2IDMuMiAwIDUuMi0xLjYgNi00LjgtMS4yIDEuNi0yLjYgMi4yLTQuMiAxLjgtLjkxMy0uMjI4LTEuNTY1LS44OS0yLjI4OC0xLjYyNEMxMC4zMzcgMTMuMzgyIDguOTc2IDEyIDYuMDAxIDEyeicgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCBwLTMgaG92ZXI6YmctZ3JlZW4tNjAwIHJvdW5kZWQgbGc6aGlkZGVuIHRleHQtd2hpdGUgbWwtYXV0byBob3Zlcjp0ZXh0LXdoaXRlIG91dGxpbmUtbm9uZSdcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTYgaC02J1xyXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xyXG4gICAgICAgICAgICBzdHJva2U9J2N1cnJlbnRDb2xvcidcclxuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyfVxyXG4gICAgICAgICAgICAgIGQ9J000IDZoMTZNNCAxMmgxNk00IDE4aDE2J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgey8qTm90ZSB0aGF0IGluIHRoaXMgZGl2IHdlIHdpbGwgdXNlIGEgdGVybmFyeSBvcGVyYXRvciB0byBkZWNpZGUgd2hldGhlciBvciBub3QgdG8gZGlzcGxheSB0aGUgY29udGVudCBvZiB0aGUgZGl2ICAqL31cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICBhY3RpdmUgPyAnJyA6ICdoaWRkZW4nXHJcbiAgICAgICAgICB9ICAgdy1mdWxsIGxnOmlubGluZS1mbGV4IGxnOmZsZXgtZ3JvdyBsZzp3LWF1dG9gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzppbmxpbmUtZmxleCBsZzpmbGV4LXJvdyBsZzptbC1hdXRvIGxnOnctYXV0byB3LWZ1bGwgbGc6aXRlbXMtY2VudGVyIGl0ZW1zLXN0YXJ0ICBmbGV4IGZsZXgtY29sIGxnOmgtYXV0byc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGUgJz5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTMgcHktMiByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgIEFib3V0IHVzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdCB1c1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJTaXRlSGVhZGVyIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9