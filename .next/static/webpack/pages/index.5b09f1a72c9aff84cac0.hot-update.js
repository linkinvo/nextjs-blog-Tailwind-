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
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "Contact us"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWIwOWYxYTcyYzlhZmY4NGNhYzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRU8sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNGRCwrQ0FBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3ZCRSxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBRzlCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELElBQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUMscUZBRFo7QUFFRSxlQUFPLEVBQUVFLFdBRlg7QUFBQSwrQkFJRTtBQUNFLG1CQUFTLEVBQUMsU0FEWjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsZ0JBQU0sRUFBQyxjQUhUO0FBSUUsaUJBQU8sRUFBQyxXQUpWO0FBS0UsZUFBSyxFQUFDLDRCQUxSO0FBQUEsaUNBT0U7QUFDRSx5QkFBYSxFQUFDLE9BRGhCO0FBRUUsMEJBQWMsRUFBQyxPQUZqQjtBQUdFLHVCQUFXLEVBQUUsQ0FIZjtBQUlFLGFBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBcUJFO0FBQ0UsaUJBQVMsWUFDUEYsTUFBTSxHQUFHLEVBQUgsR0FBUSxRQURQLG9EQURYO0FBQUEsK0JBS0U7QUFBSyxtQkFBUyxFQUFDLDZHQUFmO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDSztBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFZLHVCQUFTLEVBQUMsb0VBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0s7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBWSx1QkFBUyxFQUFDLHlFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFTRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFjRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9ERCxDQTNETTs7R0FBTUQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2l0ZUhlYWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuLy8gY29uc3QgU2l0ZUhlYWRlciA9ICgpID0+IHtcclxuLy8gY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4vLyBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbi8vIH07XHJcbi8vIHJldHVybiAoXHJcbi8vIDw+XHJcbi8vIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0ncHgtMiB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnRleHQtd2hpdGUnPlxyXG4vLyAgICAgPHN2ZyBjbGFzc05hbWU9J2gtNiB3LTYgZmlsbC1jdXJyZW50JyB2aWV3Qm94PVwiMCAwIDE4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbi8vICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAxQzAgMC40NDc3MTUgMC40NDc3MTUgMCAxIDBIMTdDMTcuNTUyMyAwIDE4IDAuNDQ3NzE1IDE4IDFDMTggMS41NTIyOCAxNy41NTIzIDIgMTcgMkgxQzAuNDQ3NzE2IDIgMCAxLjU1MjI4IDAgMVpNMCA3QzAgNi40NDc3MiAwLjQ0NzcxNSA2IDEgNkgxN0MxNy41NTIzIDYgMTggNi40NDc3MiAxOCA3QzE4IDcuNTUyMjggMTcuNTUyMyA4IDE3IDhIMUMwLjQ0NzcxNiA4IDAgNy41NTIyOCAwIDdaTTEgMTJDMC40NDc3MTUgMTIgMCAxMi40NDc3IDAgMTNDMCAxMy41NTIzIDAuNDQ3NzE2IDE0IDEgMTRIMTdDMTcuNTUyMyAxNCAxOCAxMy41NTIzIDE4IDEzQzE4IDEyLjQ0NzcgMTcuNTUyMyAxMiAxNyAxMkgxWlwiIGZpbGw9XCIjQTBBRUMwXCIgLz5cclxuLy8gICAgIDwvc3ZnPlxyXG4vLyA8L2J1dHRvbj4gKi99XHJcblxyXG4vLyB7LyogPG5hdj5cclxuLy8gPGRpdiBjbGFzc05hbWU9J3B4LTIgcHQtMiBwYi01IGJvcmRlci1iIGJvcmRlci1ncmF5LTgwMCc+XHJcbi8vIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPkxpc3QgeW91ciBwcm9wZXJ0eTwvYT5cclxuLy8gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTEgYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5UcmlwczwvYT5cclxuLy8gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTEgYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5NZXNzYWdlczwvYT5cclxuLy8gPC9kaXY+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPSdweC01IHB5LTUnPlxyXG4vLyA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxyXG4vLyAgICAgPGltZyBjbGFzc05hbWU9J2gtMTAgdy0xMCBvYmplY3QtY292ZXIgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci1ncmF5LTYwMCcgc3JjPVwiaW1hZ2VzL2F2YXRhci5wbmdcIiBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4vLyAgICAgPHNwYW4gY2xhc3NOYW1lPSdtbC00IGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTIwMCc+SXNsYSBTY2hvZ2VyPC9zcGFuPlxyXG4vLyA8L2Rpdj5cclxuLy8gPGRpdiBjbGFzc05hbWU9J210LTUnPlxyXG4vLyAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2Jsb2NrIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSc+QWNjb3VudCBTZXR0aW5nczwvYT5cclxuLy8gICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0zIGJsb2NrIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSc+U3VwcG9ydDwvYT5cclxuLy8gICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0zIGJsb2NrIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC13aGl0ZSc+U2lnbiBvdXQ8L2E+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L2Rpdj5cclxuLy8gPC9uYXY+ICovfVxyXG5cclxuLy8gPG5hdj5cclxuLy8gICAgIHsvKiBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCBwLTMgcm91bmRlZCBsZzpoaWRkZW4gbWwtYXV0byBvdXRsaW5lLW5vbmUnICovfVxyXG4vLyAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPSdcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmUtZmxleFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAtMyBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBweC0yIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktNTAwIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtd2hpdGUgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOnRleHQtd2hpdGUnXHJcbi8vICAgICA+XHJcbi8vICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2gtNiB3LTYgZmlsbC1jdXJyZW50JyB2aWV3Qm94PVwiMCAwIDE4IDE0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbi8vICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDFDMCAwLjQ0NzcxNSAwLjQ0NzcxNSAwIDEgMEgxN0MxNy41NTIzIDAgMTggMC40NDc3MTUgMTggMUMxOCAxLjU1MjI4IDE3LjU1MjMgMiAxNyAySDFDMC40NDc3MTYgMiAwIDEuNTUyMjggMCAxWk0wIDdDMCA2LjQ0NzcyIDAuNDQ3NzE1IDYgMSA2SDE3QzE3LjU1MjMgNiAxOCA2LjQ0NzcyIDE4IDdDMTggNy41NTIyOCAxNy41NTIzIDggMTcgOEgxQzAuNDQ3NzE2IDggMCA3LjU1MjI4IDAgN1pNMSAxMkMwLjQ0NzcxNSAxMiAwIDEyLjQ0NzcgMCAxM0MwIDEzLjU1MjMgMC40NDc3MTYgMTQgMSAxNEgxN0MxNy41NTIzIDE0IDE4IDEzLjU1MjMgMTggMTNDMTggMTIuNDQ3NyAxNy41NTIzIDEyIDE3IDEySDFaXCIgZmlsbD1cIiNBMEFFQzBcIiAvPlxyXG4vLyAgICAgICAgIDwvc3ZnPlxyXG4vLyAgICAgPC9idXR0b24+XHJcblxyXG4vLyAgICAgPGRpdlxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlID8gJycgOiAnaGlkZGVuJ1xyXG4vLyAgICAgICAgICAgICB9ICAgdy1mdWxsIGxnOmlubGluZS1mbGV4IGxnOmZsZXgtZ3JvdyBsZzp3LWF1dG9gfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC0yIHB0LTIgcGItNSBib3JkZXItYiBib3JkZXItZ3JheS04MDAnPlxyXG4vLyAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPkxpc3QgeW91ciBwcm9wZXJ0eTwvYT5cclxuLy8gICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+VHJpcHM8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMSBibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPk1lc3NhZ2VzPC9hPlxyXG4vLyAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gPC9uYXY+XHJcbi8vIDwvPlxyXG4vLyApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2l0ZUhlYWRlcjtcclxuXHJcblxyXG5cclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpdGVIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LXdyYXAnPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT0nIGlubGluZS1mbGV4IHAtMyByb3VuZGVkIGxnOmhpZGRlbiB0ZXh0LXdoaXRlIG1sLWF1dG8gaG92ZXI6dGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IGgtNidcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBkPSdNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKk5vdGUgdGhhdCBpbiB0aGlzIGRpdiB3ZSB3aWxsIHVzZSBhIHRlcm5hcnkgb3BlcmF0b3IgdG8gZGVjaWRlIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb2YgdGhlIGRpdiAgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgYWN0aXZlID8gJycgOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgfSAgIHctZnVsbCBsZzppbmxpbmUtZmxleCBsZzpmbGV4LWdyb3cgbGc6dy1hdXRvYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6aW5saW5lLWZsZXggbGc6ZmxleC1yb3cgbGc6bWwtYXV0byBsZzp3LWF1dG8gdy1mdWxsIGxnOml0ZW1zLWNlbnRlciBpdGVtcy1zdGFydCAgZmxleCBmbGV4LWNvbCBsZzpoLWF1dG8nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5MaXN0IHlvdXIgcHJvcGVydHk8L2E+XHJcblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+VHJpcHM8L2E+XHJcblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgQWJvdXQgdXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTMgcHktMiByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0IHVzXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIlNpdGVIZWFkZXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJoYW5kbGVDbGljayJdLCJzb3VyY2VSb290IjoiIn0=