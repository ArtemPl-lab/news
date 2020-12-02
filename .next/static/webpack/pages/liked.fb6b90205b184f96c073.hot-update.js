webpackHotUpdate_N_E("pages/liked",{

/***/ "./components/News/LikedNews.jsx":
/*!***************************************!*\
  !*** ./components/News/LikedNews.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _NewsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewsCard */ "./components/News/NewsCard.jsx");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-use-cookie */ "./node_modules/react-use-cookie/dist/index.js");
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_use_cookie__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "C:\\Users\\User\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\news\\news\\components\\News\\LikedNews.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var LikedNews = function LikedNews() {
  _s();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])({
    threshold: 0
  }),
      ref = _useInView.ref,
      inView = _useInView.inView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      likedNews = _useState[0],
      setLikedNews = _useState[1];

  var _useCookie = react_use_cookie__WEBPACK_IMPORTED_MODULE_9___default()('likedPosts'),
      _useCookie2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCookie, 2),
      posts = _useCookie2[0],
      setPosts = _useCookie2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false),
      load = _useState2[0],
      setLoad = _useState2[1];

  var page = 0;

  var loadData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cookiePosts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cookiePosts = JSON.parse(posts);
              console.log(cookiePosts); // if(!load){
              //     setLoad(true);
              //     const currentPosts = cookiePosts.slice(page*10, page*10+10);
              //     const response = await fetch('/api/news/likedNews', {
              //         method: 'POST',
              //         headers: {
              //           'Content-Type': 'application/json;charset=utf-8'
              //         },
              //         body: JSON.stringify(currentPosts)
              //     });
              //     const json = await response.json();
              //     setPosts(posts => setPosts([...posts, ...json]));
              //     setLoad(false);
              // }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadData() {
      return _ref.apply(this, arguments);
    };
  }();

  if (inView) loadData();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      spacing: 3,
      container: true,
      children: likedNews.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
          item: true,
          xs: 12,
          md: 3,
          sm: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_NewsCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
            post: post
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, _this)
        }, post.url, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      ref: ref,
      style: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px"
      },
      children: load ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 20
      }, _this) : ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(LikedNews, "dK2ewdqTYCHux/b50yhhQ2I9eM8=", false, function () {
  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"], react_use_cookie__WEBPACK_IMPORTED_MODULE_9___default.a];
});

_c = LikedNews;
/* harmony default export */ __webpack_exports__["default"] = (LikedNews);

var _c;

$RefreshReg$(_c, "LikedNews");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL0xpa2VkTmV3cy5qc3giXSwibmFtZXMiOlsiTGlrZWROZXdzIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicmVmIiwiaW5WaWV3IiwidXNlU3RhdGUiLCJsaWtlZE5ld3MiLCJzZXRMaWtlZE5ld3MiLCJ1c2VDb29raWUiLCJwb3N0cyIsInNldFBvc3RzIiwibG9hZCIsInNldExvYWQiLCJwYWdlIiwibG9hZERhdGEiLCJjb29raWVQb3N0cyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwidXJsIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsbUJBQ0dDLDZFQUFTLENBQUM7QUFBRUMsYUFBUyxFQUFFO0FBQWIsR0FBRCxDQURaO0FBQUEsTUFDWkMsR0FEWSxjQUNaQSxHQURZO0FBQUEsTUFDUEMsTUFETyxjQUNQQSxNQURPOztBQUFBLGtCQUVjQyxzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUViQyxTQUZhO0FBQUEsTUFFRkMsWUFGRTs7QUFBQSxtQkFHTUMsdURBQVMsQ0FBQyxZQUFELENBSGY7QUFBQTtBQUFBLE1BR2JDLEtBSGE7QUFBQSxNQUdOQyxRQUhNOztBQUFBLG1CQUlJTCxzREFBUSxDQUFDLEtBQUQsQ0FKWjtBQUFBLE1BSWJNLElBSmE7QUFBQSxNQUlQQyxPQUpPOztBQUtwQixNQUFJQyxJQUFJLEdBQUcsQ0FBWDs7QUFDQSxNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RDLHlCQURTLEdBQ0tDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixLQUFYLENBREw7QUFFYlMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaLEVBRmEsQ0FHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWhCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRCxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBa0JBLE1BQUdWLE1BQUgsRUFBV1UsUUFBUTtBQUVuQixzQkFDQSxxRUFBQywyREFBRDtBQUFBLDRCQUNJLHFFQUFDLHNEQUFEO0FBQU0sYUFBTyxFQUFFLENBQWY7QUFBa0IsZUFBUyxNQUEzQjtBQUFBLGdCQUNHUixTQUFTLENBQUNjLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsNEJBQ2pCLHFFQUFDLHNEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLENBQXZCO0FBQTBCLFlBQUUsRUFBRSxDQUE5QjtBQUFBLGlDQUNFLHFFQUFDLGlEQUFEO0FBQVUsZ0JBQUksRUFBRUE7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXNDQSxJQUFJLENBQUNDLEdBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBbEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRSTtBQUFLLFNBQUcsRUFBRW5CLEdBQVY7QUFBZSxXQUFLLEVBQUU7QUFBQ29CLGVBQU8sRUFBRSxNQUFWO0FBQWtCQyxzQkFBYyxFQUFFLFFBQWxDO0FBQTRDQyxrQkFBVSxFQUFDO0FBQXZELE9BQXRCO0FBQUEsZ0JBQ0lkLElBQUksZ0JBQUcscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQTBCO0FBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQWNILENBeENEOztHQUFNWCxTO1VBQ3FCQyxxRSxFQUVHTyx1RDs7O0tBSHhCUixTO0FBeUNTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9saWtlZC5mYjZiOTAyMDViMTg0Zjk2YzA3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBOZXdzQ2FyZCBmcm9tIFwiLi9OZXdzQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUNvb2tpZSBmcm9tICdyZWFjdC11c2UtY29va2llJztcclxuY29uc3QgTGlrZWROZXdzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyByZWYsIGluVmlld30gPSB1c2VJblZpZXcoeyB0aHJlc2hvbGQ6IDAgfSk7XHJcbiAgICBjb25zdCBbbGlrZWROZXdzLCBzZXRMaWtlZE5ld3NdID0gdXNlU3RhdGUoW10pOyBcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlQ29va2llKCdsaWtlZFBvc3RzJyk7XHJcbiAgICBjb25zdCBbbG9hZCwgc2V0TG9hZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBsZXQgcGFnZSA9IDA7XHJcbiAgICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgY29va2llUG9zdHMgPSBKU09OLnBhcnNlKHBvc3RzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb29raWVQb3N0cyk7XHJcbiAgICAgICAgLy8gaWYoIWxvYWQpe1xyXG4gICAgICAgIC8vICAgICBzZXRMb2FkKHRydWUpO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBjdXJyZW50UG9zdHMgPSBjb29raWVQb3N0cy5zbGljZShwYWdlKjEwLCBwYWdlKjEwKzEwKTtcclxuICAgICAgICAvLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9uZXdzL2xpa2VkTmV3cycsIHtcclxuICAgICAgICAvLyAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjdXJyZW50UG9zdHMpXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIC8vICAgICBzZXRQb3N0cyhwb3N0cyA9PiBzZXRQb3N0cyhbLi4ucG9zdHMsIC4uLmpzb25dKSk7XHJcbiAgICAgICAgLy8gICAgIHNldExvYWQoZmFsc2UpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIGlmKGluVmlldykgbG9hZERhdGEoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIHNwYWNpbmc9ezN9IGNvbnRhaW5lcj5cclxuICAgICAgICAgIHtsaWtlZE5ld3MubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9IHNtPXs2fSBrZXk9e3Bvc3QudXJsfT5cclxuICAgICAgICAgICAgICA8TmV3c0NhcmQgcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6XCIxNXB4XCJ9fT5cclxuICAgICAgICAgIHsgbG9hZCA/IDxDaXJjdWxhclByb2dyZXNzIC8+IDogXCJcIiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGlrZWROZXdzOyJdLCJzb3VyY2VSb290IjoiIn0=