(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./src/modules/statistics/components/chart.most-involved-teeth.tsx":
/*!*************************************************************************!*\
  !*** ./src/modules/statistics/components/chart.most-involved-teeth.tsx ***!
  \*************************************************************************/
/*! exports provided: MostInvolvedTeethChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MostInvolvedTeethChart\", function() { return MostInvolvedTeethChart; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nlet MostInvolvedTeethChart = class MostInvolvedTeethChart extends react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"] {\n    get data() {\n        return this.props.selectedAppointments\n            .map(x => x.involvedTeeth)\n            .reduce((result, arr) => {\n            arr.forEach(n => {\n                const fixedN = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"num\"])(n.toString().charAt(1));\n                const i = result.findIndex(x => x.label === fixedN);\n                if (i === -1) {\n                    result.push({\n                        label: fixedN,\n                        value: 1\n                    });\n                }\n                else {\n                    result[i].value++;\n                }\n            });\n            return result;\n        }, [])\n            .sort((a, b) => b.value - a.value)\n            .filter((x, i) => i <= 4)\n            .map((d, i) => {\n            if (i === 0) {\n                return {\n                    label: this.getToothName(d.label),\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].blue[1]\n                };\n            }\n            else if (i === 1) {\n                return {\n                    label: this.getToothName(d.label),\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].green[1]\n                };\n            }\n            else if (i === 2) {\n                return {\n                    label: this.getToothName(d.label),\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].greenish[1]\n                };\n            }\n            else if (i === 3) {\n                return {\n                    label: this.getToothName(d.label),\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].purple[1]\n                };\n            }\n            else {\n                return {\n                    label: this.getToothName(d.label),\n                    value: d.value,\n                    color: _modules__WEBPACK_IMPORTED_MODULE_2__[\"colors\"].orange[1]\n                };\n            }\n        });\n    }\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PieChartComponent\"], { height: 400, data: this.data });\n    }\n    getToothName(n) {\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"convert\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"num\"])(`1${n.toString()}`)).Name.replace(/(permanent|deciduous|upper|lower|left|right)/gi, \"\");\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], MostInvolvedTeethChart.prototype, \"data\", null);\nMostInvolvedTeethChart = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], MostInvolvedTeethChart);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/chart.most-involved-teeth.tsx?");

/***/ })

}]);