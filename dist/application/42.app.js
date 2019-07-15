(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./src/modules/statistics/components/chart.treatments-number.tsx":
/*!***********************************************************************!*\
  !*** ./src/modules/statistics/components/chart.treatments-number.tsx ***!
  \***********************************************************************/
/*! exports provided: TreatmentsNumberChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TreatmentsNumberChart\", function() { return TreatmentsNumberChart; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet TreatmentsNumberChart = class TreatmentsNumberChart extends react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"] {\n    get values() {\n        return this.props.selectedTreatments.map((treatment, i) => ({\n            x: i,\n            y: treatment.profit,\n            times: treatment.times,\n            title: treatment.treatment.type\n        }));\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"BarChartComponent\"], Object.assign({}, {\n                height: 400,\n                notStacked: true,\n                data: {\n                    xLabels: this.values.map(x => x.title),\n                    bars: [\n                        {\n                            label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Profits\"),\n                            data: this.values.map(x => x.y)\n                        },\n                        {\n                            label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Applied times\"),\n                            data: this.values.map(x => x.times)\n                        }\n                    ]\n                }\n            }))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_3__[\"computed\"]\n], TreatmentsNumberChart.prototype, \"values\", null);\nTreatmentsNumberChart = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"observer\"]\n], TreatmentsNumberChart);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/chart.treatments-number.tsx?");

/***/ })

}]);