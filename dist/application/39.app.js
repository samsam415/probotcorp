(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./src/modules/statistics/components/chart.most-applied-treatments.tsx":
/*!*****************************************************************************!*\
  !*** ./src/modules/statistics/components/chart.most-applied-treatments.tsx ***!
  \*****************************************************************************/
/*! exports provided: MostAppliedTreatmentsChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MostAppliedTreatmentsChart\", function() { return MostAppliedTreatmentsChart; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nlet MostAppliedTreatmentsChart = class MostAppliedTreatmentsChart extends react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"] {\n    get data() {\n        return this.props.selectedAppointments\n            .map(x => x.treatment)\n            .reduce((result, treatment) => {\n            if (!treatment) {\n                return result;\n            }\n            const label = treatment.type;\n            const i = result.findIndex(t => t.label === label);\n            if (i === -1) {\n                result.push({\n                    label,\n                    value: 1\n                });\n            }\n            else {\n                result[i].value++;\n            }\n            return result;\n        }, [])\n            .sort((a, b) => b.value - a.value)\n            .filter((x, i) => i <= 4)\n            .map((d, i) => {\n            if (i === 0) {\n                return {\n                    label: d.label,\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].blue[1]\n                };\n            }\n            else if (i === 1) {\n                return {\n                    label: d.label,\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].green[1]\n                };\n            }\n            else if (i === 2) {\n                return {\n                    label: d.label,\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].greenish[1]\n                };\n            }\n            else if (i === 3) {\n                return {\n                    label: d.label,\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].purple[1]\n                };\n            }\n            else {\n                return {\n                    label: d.label,\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].orange[1]\n                };\n            }\n        });\n    }\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_5__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PieChartComponent\"], { height: 400, data: this.data });\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_3__[\"computed\"]\n], MostAppliedTreatmentsChart.prototype, \"data\", null);\nMostAppliedTreatmentsChart = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"observer\"]\n], MostAppliedTreatmentsChart);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/chart.most-applied-treatments.tsx?");

/***/ })

}]);