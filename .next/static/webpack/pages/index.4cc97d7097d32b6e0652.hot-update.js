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
      className: "flex items-center flex-wrap",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: " inline-flex p-3 rounded lg:hidden text-white ml-auto hover:text-white outline-none",
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
            lineNumber: 104,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "".concat(active ? '' : 'hidden', "   w-full lg:inline-flex lg:flex-grow lg:w-auto"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800",
              children: "List your property"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800",
              children: "Trips"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 18
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "About us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "mt-1 block px-3 py-1 rounded font-semibold text-white hover:bg-gray-800",
              children: "Messages"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGNjOTdkNzA5N2QzMmI2ZTA2NTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRU8sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNGRCwrQ0FBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3ZCRSxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBRzlCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELElBQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUMscUZBRFo7QUFFRSxlQUFPLEVBQUVFLFdBRlg7QUFBQSwrQkFJRTtBQUNFLG1CQUFTLEVBQUMsU0FEWjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsZ0JBQU0sRUFBQyxjQUhUO0FBSUUsaUJBQU8sRUFBQyxXQUpWO0FBS0UsZUFBSyxFQUFDLDRCQUxSO0FBQUEsaUNBT0U7QUFDRSx5QkFBYSxFQUFDLE9BRGhCO0FBRUUsMEJBQWMsRUFBQyxPQUZqQjtBQUdFLHVCQUFXLEVBQUUsQ0FIZjtBQUlFLGFBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBcUJFO0FBQ0UsaUJBQVMsWUFDUEYsTUFBTSxHQUFHLEVBQUgsR0FBUSxRQURQLG9EQURYO0FBQUEsK0JBS0U7QUFBSyxtQkFBUyxFQUFDLDZHQUFmO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDSztBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFTLEVBQUMsb0VBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0s7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBWSx1QkFBUyxFQUFDLHlFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFTRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFjRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxHQUFSO0FBQVksdUJBQVMsRUFBQyx5RUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFtREQsQ0ExRE07O0dBQU1EOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpdGVIZWFkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbi8vIGNvbnN0IFNpdGVIZWFkZXIgPSAoKSA9PiB7XHJcbi8vIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuLy8gc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4vLyB9O1xyXG4vLyByZXR1cm4gKFxyXG4vLyA8PlxyXG4vLyB7LyogPGJ1dHRvbiBjbGFzc05hbWU9J3B4LTIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czp0ZXh0LXdoaXRlJz5cclxuLy8gICAgIDxzdmcgY2xhc3NOYW1lPSdoLTYgdy02IGZpbGwtY3VycmVudCcgdmlld0JveD1cIjAgMCAxOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4vLyAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMUMwIDAuNDQ3NzE1IDAuNDQ3NzE1IDAgMSAwSDE3QzE3LjU1MjMgMCAxOCAwLjQ0NzcxNSAxOCAxQzE4IDEuNTUyMjggMTcuNTUyMyAyIDE3IDJIMUMwLjQ0NzcxNiAyIDAgMS41NTIyOCAwIDFaTTAgN0MwIDYuNDQ3NzIgMC40NDc3MTUgNiAxIDZIMTdDMTcuNTUyMyA2IDE4IDYuNDQ3NzIgMTggN0MxOCA3LjU1MjI4IDE3LjU1MjMgOCAxNyA4SDFDMC40NDc3MTYgOCAwIDcuNTUyMjggMCA3Wk0xIDEyQzAuNDQ3NzE1IDEyIDAgMTIuNDQ3NyAwIDEzQzAgMTMuNTUyMyAwLjQ0NzcxNiAxNCAxIDE0SDE3QzE3LjU1MjMgMTQgMTggMTMuNTUyMyAxOCAxM0MxOCAxMi40NDc3IDE3LjU1MjMgMTIgMTcgMTJIMVpcIiBmaWxsPVwiI0EwQUVDMFwiIC8+XHJcbi8vICAgICA8L3N2Zz5cclxuLy8gPC9idXR0b24+ICovfVxyXG5cclxuLy8gey8qIDxuYXY+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPSdweC0yIHB0LTIgcGItNSBib3JkZXItYiBib3JkZXItZ3JheS04MDAnPlxyXG4vLyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5MaXN0IHlvdXIgcHJvcGVydHk8L2E+XHJcbi8vIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+VHJpcHM8L2E+XHJcbi8vIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TWVzc2FnZXM8L2E+XHJcbi8vIDwvZGl2PlxyXG4vLyA8ZGl2IGNsYXNzTmFtZT0ncHgtNSBweS01Jz5cclxuLy8gPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJz5cclxuLy8gICAgIDxpbWcgY2xhc3NOYW1lPSdoLTEwIHctMTAgb2JqZWN0LWNvdmVyIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS02MDAnIHNyYz1cImltYWdlcy9hdmF0YXIucG5nXCIgYWx0PVwiYXZhdGFyXCIgLz5cclxuLy8gICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtNCBmb250LXNlbWlib2xkIHRleHQtZ3JheS0yMDAnPklzbGEgU2Nob2dlcjwvc3Bhbj5cclxuLy8gPC9kaXY+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cclxuLy8gICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdibG9jayB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnPkFjY291bnQgU2V0dGluZ3M8L2E+XHJcbi8vICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMyBibG9jayB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnPlN1cHBvcnQ8L2E+XHJcbi8vICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMyBibG9jayB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUnPlNpZ24gb3V0PC9hPlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9kaXY+XHJcbi8vIDwvbmF2PiAqL31cclxuXHJcbi8vIDxuYXY+XHJcbi8vICAgICB7LyogY2xhc3NOYW1lPScgaW5saW5lLWZsZXggcC0zIHJvdW5kZWQgbGc6aGlkZGVuIG1sLWF1dG8gb3V0bGluZS1ub25lJyAqL31cclxuLy8gICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT0nXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lLWZsZXhcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLTMgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHgtMiBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1ncmF5LTUwMCBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOm91dGxpbmUtbm9uZSBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czp0ZXh0LXdoaXRlJ1xyXG4vLyAgICAgPlxyXG4vLyAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdoLTYgdy02IGZpbGwtY3VycmVudCcgdmlld0JveD1cIjAgMCAxOCAxNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4vLyAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAxQzAgMC40NDc3MTUgMC40NDc3MTUgMCAxIDBIMTdDMTcuNTUyMyAwIDE4IDAuNDQ3NzE1IDE4IDFDMTggMS41NTIyOCAxNy41NTIzIDIgMTcgMkgxQzAuNDQ3NzE2IDIgMCAxLjU1MjI4IDAgMVpNMCA3QzAgNi40NDc3MiAwLjQ0NzcxNSA2IDEgNkgxN0MxNy41NTIzIDYgMTggNi40NDc3MiAxOCA3QzE4IDcuNTUyMjggMTcuNTUyMyA4IDE3IDhIMUMwLjQ0NzcxNiA4IDAgNy41NTIyOCAwIDdaTTEgMTJDMC40NDc3MTUgMTIgMCAxMi40NDc3IDAgMTNDMCAxMy41NTIzIDAuNDQ3NzE2IDE0IDEgMTRIMTdDMTcuNTUyMyAxNCAxOCAxMy41NTIzIDE4IDEzQzE4IDEyLjQ0NzcgMTcuNTUyMyAxMiAxNyAxMkgxWlwiIGZpbGw9XCIjQTBBRUMwXCIgLz5cclxuLy8gICAgICAgICA8L3N2Zz5cclxuLy8gICAgIDwvYnV0dG9uPlxyXG5cclxuLy8gICAgIDxkaXZcclxuLy8gICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICcnIDogJ2hpZGRlbidcclxuLy8gICAgICAgICAgICAgfSAgIHctZnVsbCBsZzppbmxpbmUtZmxleCBsZzpmbGV4LWdyb3cgbGc6dy1hdXRvYH1cclxuLy8gICAgID5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtMiBwdC0yIHBiLTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktODAwJz5cclxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5MaXN0IHlvdXIgcHJvcGVydHk8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMSBibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPlRyaXBzPC9hPlxyXG4vLyAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4vLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTEgYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5NZXNzYWdlczwvYT5cclxuLy8gICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIDwvbmF2PlxyXG4vLyA8Lz5cclxuLy8gKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFNpdGVIZWFkZXI7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBTaXRlSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZmxleC13cmFwJz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCBwLTMgcm91bmRlZCBsZzpoaWRkZW4gdGV4dC13aGl0ZSBtbC1hdXRvIGhvdmVyOnRleHQtd2hpdGUgb3V0bGluZS1ub25lJ1xyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctNiBoLTYnXHJcbiAgICAgICAgICAgIGZpbGw9J25vbmUnXHJcbiAgICAgICAgICAgIHN0cm9rZT0nY3VycmVudENvbG9yJ1xyXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj0ncm91bmQnXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgZD0nTTQgNmgxNk00IDEyaDE2TTQgMThoMTYnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7LypOb3RlIHRoYXQgaW4gdGhpcyBkaXYgd2Ugd2lsbCB1c2UgYSB0ZXJuYXJ5IG9wZXJhdG9yIHRvIGRlY2lkZSB3aGV0aGVyIG9yIG5vdCB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9mIHRoZSBkaXYgICovfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgIGFjdGl2ZSA/ICcnIDogJ2hpZGRlbidcclxuICAgICAgICAgIH0gICB3LWZ1bGwgbGc6aW5saW5lLWZsZXggbGc6ZmxleC1ncm93IGxnOnctYXV0b2B9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOmlubGluZS1mbGV4IGxnOmZsZXgtcm93IGxnOm1sLWF1dG8gbGc6dy1hdXRvIHctZnVsbCBsZzppdGVtcy1jZW50ZXIgaXRlbXMtc3RhcnQgIGZsZXggZmxleC1jb2wgbGc6aC1hdXRvJz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2Jsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TGlzdCB5b3VyIHByb3BlcnR5PC9hPlxyXG5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMSBibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPlRyaXBzPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgIEFib3V0IHVzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TWVzc2FnZXM8L2E+XHJcblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIlNpdGVIZWFkZXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=