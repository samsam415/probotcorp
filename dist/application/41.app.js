(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./src/modules/statistics/components/page.statistics.tsx":
/*!***************************************************************!*\
  !*** ./src/modules/statistics/components/page.statistics.tsx ***!
  \***************************************************************/
/*! exports provided: StatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StatisticsPage\", function() { return StatisticsPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst AgeBarChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 34).then(__webpack_require__.bind(null, /*! ./chart.age */ \"./src/modules/statistics/components/chart.age.tsx\"))).AgeBarChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst AppointmentsByDateChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./chart.appointments-date */ \"./src/modules/statistics/components/chart.appointments-date.tsx\"))).AppointmentsByDateChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst FinancesByDateChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 35).then(__webpack_require__.bind(null, /*! ./chart.finance */ \"./src/modules/statistics/components/chart.finance.tsx\"))).FinancesByDateChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst GenderPieChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./chart.gender */ \"./src/modules/statistics/components/chart.gender.tsx\"))).GenderPieChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst MostAppliedTreatmentsChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 37).then(__webpack_require__.bind(null, /*! ./chart.most-applied-treatments */ \"./src/modules/statistics/components/chart.most-applied-treatments.tsx\")))\n            .MostAppliedTreatmentsChart;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst MostInvolvedTeethChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 38).then(__webpack_require__.bind(null, /*! ./chart.most-involved-teeth */ \"./src/modules/statistics/components/chart.most-involved-teeth.tsx\"))).MostInvolvedTeethChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst TreatmentsByGenderChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 39).then(__webpack_require__.bind(null, /*! ./chart.treatments-gender */ \"./src/modules/statistics/components/chart.treatments-gender.tsx\"))).TreatmentsByGenderChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst TreatmentsNumberChart = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () { return (yield __webpack_require__.e(/*! import() */ 40).then(__webpack_require__.bind(null, /*! ./chart.treatments-number */ \"./src/modules/statistics/components/chart.treatments-number.tsx\"))).TreatmentsNumberChart; }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet StatisticsPage = class StatisticsPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.appointment = null;\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"sc-pg\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { maxItemsOnLoad: 20, className: \"appointments-data-table\", heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Appointment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Paid\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Outstanding\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Expenses\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Profits\")\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedAppointments.map(appointment => ({\n                    id: appointment._id,\n                    searchableString: appointment.searchableString,\n                    cells: [\n                        {\n                            dataValue: (appointment.patient || new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Patient\"]()).name,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                    Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(appointment.date, this.props.dateFormat),\n                                    \" \",\n                                    \"/\",\n                                    \" \",\n                                    appointment.operatingStaff.map(x => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"i\", { key: x._id },\n                                        x.name,\n                                        \" \")))), name: (appointment.patient ||\n                                    new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Patient\"]()).name, size: 3 })),\n                            onClick: () => {\n                                this.appointment = appointment;\n                            },\n                            className: \"no-label\"\n                        },\n                        {\n                            dataValue: appointment.treatmentID,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: appointment.treatment\n                                    ? appointment.treatment.type\n                                    : \"\", subText: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(appointment.date, this.props.dateFormat), size: 3, onClick: () => { } })),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: appointment.paidAmount,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, this.props.currencySymbol +\n                                Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(appointment.paidAmount).toString())),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: appointment.outstandingAmount,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, this.props.currencySymbol +\n                                Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(appointment.outstandingAmount).toString())),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: appointment.expenses,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, this.props.currencySymbol +\n                                Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(appointment.expenses).toString())),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: appointment.profit,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null, this.props.currencySymbol +\n                                Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(appointment.profit).toString())),\n                            className: \"hidden-xs\"\n                        }\n                    ]\n                })), farItems: [\n                    {\n                        key: \"1\",\n                        onRender: () => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Filter by staff member\"), defaultValue: \"\", options: [\n                                    {\n                                        key: \"\",\n                                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"All members\")\n                                    }\n                                ].concat(this.props.operatingStaff.map(member => {\n                                    return {\n                                        key: member._id,\n                                        text: member.name\n                                    };\n                                })), onChange: (ev, member) => {\n                                    this.props.onChooseStaffMember(member.key.toString());\n                                } }));\n                        }\n                    }\n                ], hideSearch: true, commands: [\n                    {\n                        key: \"2\",\n                        onRender: () => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DatePicker\"], { onSelectDate: date => {\n                                    if (date) {\n                                        date.setHours(0, 0, 0, 0);\n                                        this.props.setStartingDate(date.getTime());\n                                    }\n                                }, value: new Date(_modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].startingDate), formatDate: d => `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"From\")}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(d, this.props.dateFormat)}` }));\n                        }\n                    },\n                    {\n                        key: \"3\",\n                        onRender: () => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DatePicker\"], { onSelectDate: date => {\n                                    if (date) {\n                                        date.setHours(0, 0, 0, 0);\n                                        this.props.setEndingDate(date.getTime());\n                                    }\n                                }, value: new Date(_modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].endingDate), formatDate: d => `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Until\")}: ${Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(d, this.props.dateFormat)}` }));\n                        }\n                    }\n                ] }),\n            this.appointment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentEditorPanel, { appointment: this.appointment, onDismiss: () => (this.appointment = null), doDeleteAppointment: id => {\n                    this.props.doDeleteAppointment(id);\n                    this.appointment = null;\n                }, availableTreatments: this.props.availableTreatments, availablePrescriptions: this.props.availablePrescriptions, currentUser: this.props.currentUser, dateFormat: this.props.dateFormat, currencySymbol: this.props.currencySymbol, prescriptionsEnabled: this.props.prescriptionsEnabled, timeTrackingEnabled: this.props.timeTrackingEnabled, operatingStaff: this.props.operatingStaff, appointmentsForDay: (year, month, day) => this.props.appointmentsForDay(year, month, day) })) : (\"\"),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"container-fluid m-t-20 quick\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Quick stats\") },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 6, xs: 12 },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"label\", null,\n                                Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Appointments\"),\n                                \":\",\n                                \" \",\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagComponent\"], { text: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"]\n                                        .selectedAppointments.length).toString(), type: _common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagType\"].primary }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 6, xs: 12 },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"label\", null,\n                                Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Payments\"),\n                                \":\",\n                                \" \",\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagComponent\"], { text: this.props.currencySymbol +\n                                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].totalPayments).toString(), type: _common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagType\"].warning }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 6, xs: 12 },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"label\", null,\n                                Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Expenses\"),\n                                \":\",\n                                \" \",\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagComponent\"], { text: this.props.currencySymbol +\n                                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].totalExpenses).toString(), type: _common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagType\"].danger }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 6, xs: 12 },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"label\", null,\n                                Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Profits\"),\n                                \":\",\n                                \" \",\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagComponent\"], { text: this.props.currencySymbol +\n                                        Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"round\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].totalProfits).toString(), type: _common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagType\"].success })))))),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"charts container-fluid\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"row\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Appointments by Date\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentsByDateChart, { selectedAppointmentsByDay: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"]\n                                    .selectedAppointmentsByDay, dateFormat: this.props.dateFormat }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Finances by Date\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](FinancesByDateChart, { dateFormat: this.props.dateFormat, selectedFinancesByDay: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedFinancesByDay }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12 col-lg-6\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Patients' Gender\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](GenderPieChart, { selectedPatients: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedPatients }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12 col-lg-6\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Most Applied Treatments\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](MostAppliedTreatmentsChart, { selectedAppointments: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedAppointments }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12 col-lg-6\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Most Involved Teeth\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](MostInvolvedTeethChart, { selectedAppointments: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedAppointments }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12 col-lg-6\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatments by gender\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](TreatmentsByGenderChart, { selectedTreatments: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedTreatments }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12 col-lg-6\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatments by profits\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](TreatmentsNumberChart, { selectedTreatments: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedTreatments }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"chart-wrapper col-xs-12 col-lg-6\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Patients' Age\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AgeBarChart, { selectedPatients: _modules__WEBPACK_IMPORTED_MODULE_3__[\"statistics\"].selectedPatients })))))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], StatisticsPage.prototype, \"appointment\", void 0);\nStatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], StatisticsPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/page.statistics.tsx?");

/***/ })

}]);