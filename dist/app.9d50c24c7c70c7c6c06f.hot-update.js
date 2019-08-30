webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Map.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ \"./node_modules/leaflet/dist/leaflet.css\");\n/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'test-map',\n  mounted: function mounted() {\n    var map = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.map(this.$el, {\n      gestureHandling: true\n    }).setView([48.573406, 7.752111], 15);\n    leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>',\n      subdomains: ['a', 'b', 'c']\n    }).addTo(map);\n    var loc = [48.573406, 7.752111];\n    var marker = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.marker(loc).addTo(map);\n    marker.bindTooltip(\"Here is the marker\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vTWFwLnZ1ZT8xMDhmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgaWQ9XCJtYXBcIj5cclxuICAgICAgICA8Yi1jb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgPC9iLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAndGVzdC1tYXAnLFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgdmFyIG1hcCA9IEwubWFwKHRoaXMuJGVsLCB7Z2VzdHVyZUhhbmRsaW5nOiB0cnVlfSkuc2V0VmlldyhbNDguNTczNDA2LCA3Ljc1MjExMV0sIDE1KTtcclxuICAgICAgICBMLnRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgICAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+JyxcclxuICAgICAgICAgICAgc3ViZG9tYWluczogWydhJywnYicsJ2MnXVxyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgdmFyIGxvYyA9IFs0OC41NzM0MDYsIDcuNzUyMTExXTtcclxuICAgICAgICB2YXIgbWFya2VyID0gTC5tYXJrZXIobG9jKS5hZGRUbyhtYXApO1xyXG4gICAgICAgIG1hcmtlci5iaW5kVG9vbHRpcChcIkhlcmUgaXMgdGhlIG1hcmtlclwiKTtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuI21hcCB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Map.vue?vue&type=script&lang=js&\n");

/***/ })

})