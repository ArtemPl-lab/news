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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _NewsCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NewsCard */ "./components/News/NewsCard.jsx");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-use-cookie */ "./node_modules/react-use-cookie/dist/index.js");
/* harmony import */ var react_use_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_use_cookie__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\User\\OneDrive\\\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B\\news\\news\\components\\News\\LikedNews.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var LikedNews = function LikedNews() {
  _s();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["useInView"])({
    threshold: 0
  }),
      ref = _useInView.ref,
      inView = _useInView.inView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      likedNews = _useState[0],
      setLikedNews = _useState[1];

  var _useCookie = react_use_cookie__WEBPACK_IMPORTED_MODULE_10___default()('likedPosts'),
      _useCookie2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useCookie, 2),
      posts = _useCookie2[0],
      setPosts = _useCookie2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      load = _useState2[0],
      setLoad = _useState2[1];

  var page = 0;

  var loadData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cookiePosts, currentPosts, response, json;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cookiePosts = JSON.parse(posts);
              console.log(cookiePosts);

              if (load) {
                _context.next = 13;
                break;
              }

              setLoad(true);
              currentPosts = cookiePosts.slice(page * 10, page * 10 + 10);
              _context.next = 7;
              return fetch('/api/news/likedNews', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(currentPosts)
              });

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              json = _context.sent;
              setPosts(function (posts) {
                return setPosts([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(posts), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(json)));
              });
              setLoad(false);

            case 13:
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      spacing: 3,
      container: true,
      children: likedNews.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
          item: true,
          xs: 12,
          md: 3,
          sm: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_NewsCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      ref: ref,
      style: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px"
      },
      children: load ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
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
  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__["useInView"], react_use_cookie__WEBPACK_IMPORTED_MODULE_10___default.a];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzL0xpa2VkTmV3cy5qc3giXSwibmFtZXMiOlsiTGlrZWROZXdzIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicmVmIiwiaW5WaWV3IiwidXNlU3RhdGUiLCJsaWtlZE5ld3MiLCJzZXRMaWtlZE5ld3MiLCJ1c2VDb29raWUiLCJwb3N0cyIsInNldFBvc3RzIiwibG9hZCIsInNldExvYWQiLCJwYWdlIiwibG9hZERhdGEiLCJjb29raWVQb3N0cyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UG9zdHMiLCJzbGljZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJtYXAiLCJwb3N0IiwidXJsIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxtQkFDR0MsNkVBQVMsQ0FBQztBQUFFQyxhQUFTLEVBQUU7QUFBYixHQUFELENBRFo7QUFBQSxNQUNaQyxHQURZLGNBQ1pBLEdBRFk7QUFBQSxNQUNQQyxNQURPLGNBQ1BBLE1BRE87O0FBQUEsa0JBRWNDLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRWJDLFNBRmE7QUFBQSxNQUVGQyxZQUZFOztBQUFBLG1CQUdNQyx3REFBUyxDQUFDLFlBQUQsQ0FIZjtBQUFBO0FBQUEsTUFHYkMsS0FIYTtBQUFBLE1BR05DLFFBSE07O0FBQUEsbUJBSUlMLHNEQUFRLENBQUMsS0FBRCxDQUpaO0FBQUEsTUFJYk0sSUFKYTtBQUFBLE1BSVBDLE9BSk87O0FBS3BCLE1BQUlDLElBQUksR0FBRyxDQUFYOztBQUNBLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVEMseUJBRFMsR0FDS0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLEtBQVgsQ0FETDtBQUViUyxxQkFBTyxDQUFDQyxHQUFSLENBQVlKLFdBQVo7O0FBRmEsa0JBR1RKLElBSFM7QUFBQTtBQUFBO0FBQUE7O0FBSVRDLHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ01RLDBCQUxHLEdBS1lMLFdBQVcsQ0FBQ00sS0FBWixDQUFrQlIsSUFBSSxHQUFDLEVBQXZCLEVBQTJCQSxJQUFJLEdBQUMsRUFBTCxHQUFRLEVBQW5DLENBTFo7QUFBQTtBQUFBLHFCQU1jUyxLQUFLLENBQUMscUJBQUQsRUFBd0I7QUFDaERDLHNCQUFNLEVBQUUsTUFEd0M7QUFFaERDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0I7QUFEVCxpQkFGdUM7QUFLaERDLG9CQUFJLEVBQUVULElBQUksQ0FBQ1UsU0FBTCxDQUFlTixZQUFmO0FBTDBDLGVBQXhCLENBTm5COztBQUFBO0FBTUhPLHNCQU5HO0FBQUE7QUFBQSxxQkFhVUEsUUFBUSxDQUFDQyxJQUFULEVBYlY7O0FBQUE7QUFhSEEsa0JBYkc7QUFjVGxCLHNCQUFRLENBQUMsVUFBQUQsS0FBSztBQUFBLHVCQUFJQyxRQUFRLHdHQUFLRCxLQUFMLGdHQUFlbUIsSUFBZixHQUFaO0FBQUEsZUFBTixDQUFSO0FBQ0FoQixxQkFBTyxDQUFDLEtBQUQsQ0FBUDs7QUFmUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSRSxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBa0JBLE1BQUdWLE1BQUgsRUFBV1UsUUFBUTtBQUVuQixzQkFDQSxxRUFBQywyREFBRDtBQUFBLDRCQUNJLHFFQUFDLHNEQUFEO0FBQU0sYUFBTyxFQUFFLENBQWY7QUFBa0IsZUFBUyxNQUEzQjtBQUFBLGdCQUNHUixTQUFTLENBQUN1QixHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLDRCQUNqQixxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxFQUFmO0FBQW1CLFlBQUUsRUFBRSxDQUF2QjtBQUEwQixZQUFFLEVBQUUsQ0FBOUI7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUFVLGdCQUFJLEVBQUVBO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFzQ0EsSUFBSSxDQUFDQyxHQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBUUk7QUFBSyxTQUFHLEVBQUU1QixHQUFWO0FBQWUsV0FBSyxFQUFFO0FBQUM2QixlQUFPLEVBQUUsTUFBVjtBQUFrQkMsc0JBQWMsRUFBRSxRQUFsQztBQUE0Q0Msa0JBQVUsRUFBQztBQUF2RCxPQUF0QjtBQUFBLGdCQUNJdkIsSUFBSSxnQkFBRyxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUgsR0FBMEI7QUFEbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBY0gsQ0F4Q0Q7O0dBQU1YLFM7VUFDcUJDLHFFLEVBRUdPLHdEOzs7S0FIeEJSLFM7QUF5Q1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpa2VkLmQxNGY5NGY5ZDg5MzI4OGQxODIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IE5ld3NDYXJkIGZyb20gXCIuL05ld3NDYXJkXCI7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQ29va2llIGZyb20gJ3JlYWN0LXVzZS1jb29raWUnO1xyXG5jb25zdCBMaWtlZE5ld3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHJlZiwgaW5WaWV3fSA9IHVzZUluVmlldyh7IHRocmVzaG9sZDogMCB9KTtcclxuICAgIGNvbnN0IFtsaWtlZE5ld3MsIHNldExpa2VkTmV3c10gPSB1c2VTdGF0ZShbXSk7IFxyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VDb29raWUoJ2xpa2VkUG9zdHMnKTtcclxuICAgIGNvbnN0IFtsb2FkLCBzZXRMb2FkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGxldCBwYWdlID0gMDtcclxuICAgIGNvbnN0IGxvYWREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBjb29raWVQb3N0cyA9IEpTT04ucGFyc2UocG9zdHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZVBvc3RzKTtcclxuICAgICAgICBpZighbG9hZCl7XHJcbiAgICAgICAgICAgIHNldExvYWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3N0cyA9IGNvb2tpZVBvc3RzLnNsaWNlKHBhZ2UqMTAsIHBhZ2UqMTArMTApO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL25ld3MvbGlrZWROZXdzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRQb3N0cylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFBvc3RzKHBvc3RzID0+IHNldFBvc3RzKFsuLi5wb3N0cywgLi4uanNvbl0pKTtcclxuICAgICAgICAgICAgc2V0TG9hZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoaW5WaWV3KSBsb2FkRGF0YSgpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQgc3BhY2luZz17M30gY29udGFpbmVyPlxyXG4gICAgICAgICAge2xpa2VkTmV3cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30gc209ezZ9IGtleT17cG9zdC51cmx9PlxyXG4gICAgICAgICAgICAgIDxOZXdzQ2FyZCBwb3N0PXtwb3N0fS8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDpcIjE1cHhcIn19PlxyXG4gICAgICAgICAgeyBsb2FkID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz4gOiBcIlwiIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaWtlZE5ld3M7Il0sInNvdXJjZVJvb3QiOiIifQ==