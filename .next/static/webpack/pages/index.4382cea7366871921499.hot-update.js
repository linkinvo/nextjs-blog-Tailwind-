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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-xl text-white font-bold uppercase tracking-wide",
            children: "Talwind CSS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
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
            lineNumber: 118,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "Services"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "About us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white",
              children: "Contact us"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDM4MmNlYTczNjY4NzE5MjE0OTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRU8sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNGRCwrQ0FBUSxDQUFDLEtBQUQsQ0FETjtBQUFBLE1BQ3ZCRSxNQUR1QjtBQUFBLE1BQ2ZDLFNBRGU7O0FBRzlCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELElBQUFBLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsK0NBQWY7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLG9DQUFiO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFDLFdBRFY7QUFFRSxpQkFBSyxFQUFDLDRCQUZSO0FBR0UscUJBQVMsRUFBQyxzQ0FIWjtBQUFBLG1DQUtFO0FBQU0sZUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUFNLHFCQUFTLEVBQUMsc0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWVFO0FBQ0UsaUJBQVMsRUFBQyx3R0FEWjtBQUVFLGVBQU8sRUFBRUUsV0FGWDtBQUFBLCtCQUlFO0FBQ0UsbUJBQVMsRUFBQyxTQURaO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxnQkFBTSxFQUFDLGNBSFQ7QUFJRSxpQkFBTyxFQUFDLFdBSlY7QUFLRSxlQUFLLEVBQUMsNEJBTFI7QUFBQSxpQ0FPRTtBQUNFLHlCQUFhLEVBQUMsT0FEaEI7QUFFRSwwQkFBYyxFQUFDLE9BRmpCO0FBR0UsdUJBQVcsRUFBRSxDQUhmO0FBSUUsYUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsZUFtQ0U7QUFDRSxpQkFBUyxZQUNQRixNQUFNLEdBQUcsRUFBSCxHQUFRLFFBRFAsb0RBRFg7QUFBQSwrQkFLRTtBQUFLLG1CQUFTLEVBQUMsNkdBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx5SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFXRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyx3SUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFnQkUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsd0lBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0VELENBM0VNOztHQUFNRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaXRlSGVhZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG4vLyBjb25zdCBTaXRlSGVhZGVyID0gKCkgPT4ge1xyXG4vLyBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbi8vIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuLy8gfTtcclxuLy8gcmV0dXJuIChcclxuLy8gPD5cclxuLy8gey8qIDxidXR0b24gY2xhc3NOYW1lPSdweC0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6dGV4dC13aGl0ZSc+XHJcbi8vICAgICA8c3ZnIGNsYXNzTmFtZT0naC02IHctNiBmaWxsLWN1cnJlbnQnIHZpZXdCb3g9XCIwIDAgMTggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuLy8gICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDFDMCAwLjQ0NzcxNSAwLjQ0NzcxNSAwIDEgMEgxN0MxNy41NTIzIDAgMTggMC40NDc3MTUgMTggMUMxOCAxLjU1MjI4IDE3LjU1MjMgMiAxNyAySDFDMC40NDc3MTYgMiAwIDEuNTUyMjggMCAxWk0wIDdDMCA2LjQ0NzcyIDAuNDQ3NzE1IDYgMSA2SDE3QzE3LjU1MjMgNiAxOCA2LjQ0NzcyIDE4IDdDMTggNy41NTIyOCAxNy41NTIzIDggMTcgOEgxQzAuNDQ3NzE2IDggMCA3LjU1MjI4IDAgN1pNMSAxMkMwLjQ0NzcxNSAxMiAwIDEyLjQ0NzcgMCAxM0MwIDEzLjU1MjMgMC40NDc3MTYgMTQgMSAxNEgxN0MxNy41NTIzIDE0IDE4IDEzLjU1MjMgMTggMTNDMTggMTIuNDQ3NyAxNy41NTIzIDEyIDE3IDEySDFaXCIgZmlsbD1cIiNBMEFFQzBcIiAvPlxyXG4vLyAgICAgPC9zdmc+XHJcbi8vIDwvYnV0dG9uPiAqL31cclxuXHJcbi8vIHsvKiA8bmF2PlxyXG4vLyA8ZGl2IGNsYXNzTmFtZT0ncHgtMiBwdC0yIHBiLTUgYm9yZGVyLWIgYm9yZGVyLWdyYXktODAwJz5cclxuLy8gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2Jsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TGlzdCB5b3VyIHByb3BlcnR5PC9hPlxyXG4vLyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMSBibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPlRyaXBzPC9hPlxyXG4vLyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nbXQtMSBibG9jayBweC0zIHB5LTEgcm91bmRlZCBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS04MDAnPk1lc3NhZ2VzPC9hPlxyXG4vLyA8L2Rpdj5cclxuLy8gPGRpdiBjbGFzc05hbWU9J3B4LTUgcHktNSc+XHJcbi8vIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XHJcbi8vICAgICA8aW1nIGNsYXNzTmFtZT0naC0xMCB3LTEwIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwJyBzcmM9XCJpbWFnZXMvYXZhdGFyLnBuZ1wiIGFsdD1cImF2YXRhclwiIC8+XHJcbi8vICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTQgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktMjAwJz5Jc2xhIFNjaG9nZXI8L3NwYW4+XHJcbi8vIDwvZGl2PlxyXG4vLyA8ZGl2IGNsYXNzTmFtZT0nbXQtNSc+XHJcbi8vICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT0nYmxvY2sgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlJz5BY2NvdW50IFNldHRpbmdzPC9hPlxyXG4vLyAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTMgYmxvY2sgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlJz5TdXBwb3J0PC9hPlxyXG4vLyAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTMgYmxvY2sgdGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LXdoaXRlJz5TaWduIG91dDwvYT5cclxuLy8gPC9kaXY+XHJcbi8vIDwvZGl2PlxyXG4vLyA8L25hdj4gKi99XHJcblxyXG4vLyA8bmF2PlxyXG4vLyAgICAgey8qIGNsYXNzTmFtZT0nIGlubGluZS1mbGV4IHAtMyByb3VuZGVkIGxnOmhpZGRlbiBtbC1hdXRvIG91dGxpbmUtbm9uZScgKi99XHJcbi8vICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9J1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZS1mbGV4XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC0zIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB4LTIgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZ3JheS01MDAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC13aGl0ZSBcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6dGV4dC13aGl0ZSdcclxuLy8gICAgID5cclxuLy8gICAgICAgICA8c3ZnIGNsYXNzTmFtZT0naC02IHctNiBmaWxsLWN1cnJlbnQnIHZpZXdCb3g9XCIwIDAgMTggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuLy8gICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMUMwIDAuNDQ3NzE1IDAuNDQ3NzE1IDAgMSAwSDE3QzE3LjU1MjMgMCAxOCAwLjQ0NzcxNSAxOCAxQzE4IDEuNTUyMjggMTcuNTUyMyAyIDE3IDJIMUMwLjQ0NzcxNiAyIDAgMS41NTIyOCAwIDFaTTAgN0MwIDYuNDQ3NzIgMC40NDc3MTUgNiAxIDZIMTdDMTcuNTUyMyA2IDE4IDYuNDQ3NzIgMTggN0MxOCA3LjU1MjI4IDE3LjU1MjMgOCAxNyA4SDFDMC40NDc3MTYgOCAwIDcuNTUyMjggMCA3Wk0xIDEyQzAuNDQ3NzE1IDEyIDAgMTIuNDQ3NyAwIDEzQzAgMTMuNTUyMyAwLjQ0NzcxNiAxNCAxIDE0SDE3QzE3LjU1MjMgMTQgMTggMTMuNTUyMyAxOCAxM0MxOCAxMi40NDc3IDE3LjU1MjMgMTIgMTcgMTJIMVpcIiBmaWxsPVwiI0EwQUVDMFwiIC8+XHJcbi8vICAgICAgICAgPC9zdmc+XHJcbi8vICAgICA8L2J1dHRvbj5cclxuXHJcbi8vICAgICA8ZGl2XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyAnJyA6ICdoaWRkZW4nXHJcbi8vICAgICAgICAgICAgIH0gICB3LWZ1bGwgbGc6aW5saW5lLWZsZXggbGc6ZmxleC1ncm93IGxnOnctYXV0b2B9XHJcbi8vICAgICA+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTIgcHQtMiBwYi01IGJvcmRlci1iIGJvcmRlci1ncmF5LTgwMCc+XHJcbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4vLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J2Jsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TGlzdCB5b3VyIHByb3BlcnR5PC9hPlxyXG4vLyAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4vLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9J210LTEgYmxvY2sgcHgtMyBweS0xIHJvdW5kZWQgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktODAwJz5UcmlwczwvYT5cclxuLy8gICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPSdtdC0xIGJsb2NrIHB4LTMgcHktMSByb3VuZGVkIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTgwMCc+TWVzc2FnZXM8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyA8L25hdj5cclxuLy8gPC8+XHJcbi8vICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTaXRlSGVhZGVyO1xyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgU2l0ZUhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBiZy1ncmVlbi00MDAgcC0zICc+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgbXItNCAnPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xyXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZpbGwtY3VycmVudCB0ZXh0LXdoaXRlIGgtOCB3LTggbXItMidcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9J00xMi4wMDEgNC44Yy0zLjIgMC01LjIgMS42LTYgNC44IDEuMi0xLjYgMi42LTIuMiA0LjItMS44LjkxMy4yMjggMS41NjUuODkgMi4yODggMS42MjRDMTMuNjY2IDEwLjYxOCAxNS4wMjcgMTIgMTguMDAxIDEyYzMuMiAwIDUuMi0xLjYgNi00LjgtMS4yIDEuNi0yLjYgMi4yLTQuMiAxLjgtLjkxMy0uMjI4LTEuNTY1LS44OS0yLjI4OC0xLjYyNEMxNi4zMzcgNi4xODIgMTQuOTc2IDQuOCAxMi4wMDEgNC44em0tNiA3LjJjLTMuMiAwLTUuMiAxLjYtNiA0LjggMS4yLTEuNiAyLjYtMi4yIDQuMi0xLjguOTEzLjIyOCAxLjU2NS44OSAyLjI4OCAxLjYyNCAxLjE3NyAxLjE5NCAyLjUzOCAyLjU3NiA1LjUxMiAyLjU3NiAzLjIgMCA1LjItMS42IDYtNC44LTEuMiAxLjYtMi42IDIuMi00LjIgMS44LS45MTMtLjIyOC0xLjU2NS0uODktMi4yODgtMS42MjRDMTAuMzM3IDEzLjM4MiA4Ljk3NiAxMiA2LjAwMSAxMnonIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQteGwgdGV4dC13aGl0ZSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUnPlxyXG4gICAgICAgICAgICAgIFRhbHdpbmQgQ1NTXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPScgaW5saW5lLWZsZXggcC0zIGhvdmVyOmJnLWdyZWVuLTYwMCByb3VuZGVkIGxnOmhpZGRlbiB0ZXh0LXdoaXRlIG1sLWF1dG8gaG92ZXI6dGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUnXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IGgtNidcclxuICAgICAgICAgICAgZmlsbD0nbm9uZSdcclxuICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXHJcbiAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcclxuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9J3JvdW5kJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cclxuICAgICAgICAgICAgICBkPSdNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNidcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKk5vdGUgdGhhdCBpbiB0aGlzIGRpdiB3ZSB3aWxsIHVzZSBhIHRlcm5hcnkgb3BlcmF0b3IgdG8gZGVjaWRlIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb2YgdGhlIGRpdiAgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgYWN0aXZlID8gJycgOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgfSAgIHctZnVsbCBsZzppbmxpbmUtZmxleCBsZzpmbGV4LWdyb3cgbGc6dy1hdXRvYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGc6aW5saW5lLWZsZXggbGc6ZmxleC1yb3cgbGc6bWwtYXV0byBsZzp3LWF1dG8gdy1mdWxsIGxnOml0ZW1zLWNlbnRlciBpdGVtcy1zdGFydCAgZmxleCBmbGV4LWNvbCBsZzpoLWF1dG8nPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlICc+XHJcbiAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbGc6aW5saW5lLWZsZXggbGc6dy1hdXRvIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctZ3JlZW4tNjAwIGhvdmVyOnRleHQtd2hpdGUnPlxyXG4gICAgICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTMgcHktMiByb3VuZGVkIHRleHQtd2hpdGUgZm9udC1ib2xkIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1ncmVlbi02MDAgaG92ZXI6dGV4dC13aGl0ZSc+XHJcbiAgICAgICAgICAgICAgICBBYm91dCB1c1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2xnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgdGV4dC13aGl0ZSBmb250LWJvbGQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlJz5cclxuICAgICAgICAgICAgICAgIENvbnRhY3QgdXNcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiU2l0ZUhlYWRlciIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==