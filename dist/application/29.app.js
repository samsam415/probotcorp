(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./src/modules/orthodontic/components/page.orthodontic.tsx":
/*!*****************************************************************!*\
  !*** ./src/modules/orthodontic/components/page.orthodontic.tsx ***!
  \*****************************************************************/
/*! exports provided: OrthoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrthoPage\", function() { return OrthoPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst PatientDetailsPanel = react_loadable__WEBPACK_IMPORTED_MODULE_7__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! modules/patients/components/patient-details */ \"./src/modules/patients/components/patient-details.tsx\")))\n            .PatientDetailsPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Shimmer\"], null),\n});\nconst DentalHistoryPanel = react_loadable__WEBPACK_IMPORTED_MODULE_7__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! modules/patients/components/dental-history */ \"./src/modules/patients/components/dental-history.tsx\")))\n            .DentalHistoryPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Shimmer\"], null),\n});\nconst OrthoCaseSheetPanel = react_loadable__WEBPACK_IMPORTED_MODULE_7__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! modules/orthodontic/components/case-sheet */ \"./src/modules/orthodontic/components/case-sheet.tsx\")))\n            .OrthoCaseSheetPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Shimmer\"], null),\n});\nconst OrthoRecordsPanel = react_loadable__WEBPACK_IMPORTED_MODULE_7__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! modules/orthodontic/components/records */ \"./src/modules/orthodontic/components/records.tsx\")))\n            .OrthoRecordsPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Shimmer\"], null),\n});\nconst OrthoGalleryPanel = react_loadable__WEBPACK_IMPORTED_MODULE_7__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! modules/orthodontic/components/ortho-gallery */ \"./src/modules/orthodontic/components/ortho-gallery.tsx\")))\n            .OrthoGalleryPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Shimmer\"], null),\n});\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_7__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Shimmer\"], null),\n});\nlet OrthoPage = class OrthoPage extends react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.showAdditionPanel = false;\n        this.newPatientName = \"\";\n        this.selectedAppointmentId = \"\";\n        this.tabs = [\n            {\n                key: \"details\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"patient details\").h,\n                icon: \"DietPlanNotebook\",\n            },\n            {\n                key: \"dental\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"dental history\").h,\n                icon: \"teeth\",\n            },\n            {\n                key: \"sheet\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"case details\").h,\n                icon: \"GroupedList\",\n            },\n            {\n                key: \"archive\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"visits\").h,\n                icon: \"Archive\",\n            },\n            {\n                key: \"gallery\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"gallery\").h,\n                icon: \"PhotoCollection\",\n            },\n            {\n                key: \"appointments\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"appointments\").h,\n                icon: \"Calendar\",\n                hidden: !_core__WEBPACK_IMPORTED_MODULE_1__[\"user\"].currentUser.canViewAppointments,\n            },\n            {\n                key: \"delete\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"delete\").h,\n                icon: \"Trash\",\n                hidden: !this.canEdit,\n            },\n        ];\n    }\n    get selectedCase() {\n        return _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].docs.find((orthoCase) => orthoCase._id === _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedID);\n    }\n    get selectedPatient() {\n        if (this.selectedCase) {\n            if (this.selectedCase.patient) {\n                return this.selectedCase.patient;\n            }\n        }\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_1__[\"user\"].currentUser.canEditOrtho;\n    }\n    get selectedAppointment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_2__[\"appointments\"].docs.find((x) => x._id === this.selectedAppointmentId);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"orthodontic-cases-component\" },\n            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"DataTableComponent\"], { maxItemsOnLoad: 10, className: \"orthodontic-cases-data-table\", heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"orthodontic patient\").h,\n                    `${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"started\").h}/${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"finished\").h} ${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"treatment\")}`,\n                    `${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"previous\").h}/${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"next\").h} ${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"appointment\")}`,\n                    `${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"total\").h}/${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"outstanding\").h} ${Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"payment\").h}`,\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].docs.filter((orthoCase) => orthoCase.patient)\n                    .map((orthoCase) => {\n                    const patient = orthoCase.patient;\n                    return {\n                        id: orthoCase._id,\n                        searchableString: orthoCase.searchableString,\n                        actions: this.tabs\n                            .filter((x) => !x.hidden)\n                            .map((x) => ({\n                            key: x.key,\n                            title: x.title,\n                            icon: x.icon,\n                            onClick: () => {\n                                if (x.key === \"delete\") {\n                                    _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].deleteModal(orthoCase._id);\n                                }\n                                else {\n                                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                        id: orthoCase._id,\n                                        tab: x.key,\n                                    });\n                                }\n                            },\n                        })),\n                        cells: [\n                            {\n                                dataValue: patient.name,\n                                component: (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileComponent\"], { name: patient.name, avatar: patient.avatar\n                                            ? _core__WEBPACK_IMPORTED_MODULE_1__[\"imagesTable\"].table[patient\n                                                .avatar]\n                                                ? _core__WEBPACK_IMPORTED_MODULE_1__[\"imagesTable\"]\n                                                    .table[patient\n                                                    .avatar]\n                                                : _core__WEBPACK_IMPORTED_MODULE_1__[\"imagesTable\"].fetchImage(patient.avatar)\n                                            : undefined, secondaryElement: react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"span\", { className: \"itl\" },\n                                            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"span\", { className: \"cap\" }, Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(patient.gender)),\n                                            \" \",\n                                            \"- \",\n                                            patient.age,\n                                            \" \",\n                                            Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"years old\")), size: 3 }),\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"br\", null))),\n                                className: \"no-label\",\n                                onClick: () => {\n                                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                        id: orthoCase._id,\n                                        tab: \"sheet\",\n                                    });\n                                },\n                            },\n                            {\n                                dataValue: orthoCase.isFinished\n                                    ? Infinity\n                                    : orthoCase.startedDate,\n                                component: (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileSquaredComponent\"], { text: orthoCase.isStarted\n                                            ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(orthoCase.startedDate, _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"date_format\"))\n                                            : \"\", subText: orthoCase.isStarted\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"started treatment\").c\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"has not started yet\").c, size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], { iconName: \"info\" })), initialsColor: orthoCase.isStarted\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].teal\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].transparent }),\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileSquaredComponent\"], { text: orthoCase.isFinished\n                                            ? Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(orthoCase.finishedDate, _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"date_format\"))\n                                            : \"\", subText: orthoCase.isFinished\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"finished treatment\").c\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"has not finished yet\").c, size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], { iconName: \"CheckMark\" })), initialsColor: orthoCase.isFinished\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].blue\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].transparent }))),\n                                className: \"hidden-xs\",\n                            },\n                            {\n                                dataValue: (patient.nextAppointment || {\n                                    date: 0,\n                                }).date,\n                                component: (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"LastNextAppointment\"], { lastAppointment: patient.lastAppointment, nextAppointment: patient.nextAppointment, onClick: (id) => {\n                                        this.selectedAppointmentId = id;\n                                        _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                            sub: \"details\",\n                                        });\n                                    } })),\n                                className: \"hidden-xs\",\n                            },\n                            {\n                                dataValue: patient.totalPayments,\n                                component: (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileSquaredComponent\"], { text: _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"currencySymbol\") +\n                                            patient.totalPayments.toString(), subText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"payments made\").c, size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], { iconName: \"CheckMark\" })), initialsColor: patient.totalPayments >\n                                            0\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].darkBlue\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].transparent }),\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileSquaredComponent\"], { text: _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"currencySymbol\") +\n                                            (patient.differenceAmount <\n                                                0\n                                                ? patient.outstandingAmount.toString()\n                                                : patient.differenceAmount >\n                                                    0\n                                                    ? patient.overpaidAmount.toString()\n                                                    : \"0\"), subText: patient.differenceAmount <\n                                            0\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"outstanding amount\").c\n                                            : patient.differenceAmount >\n                                                0\n                                                ? Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"overpaid amount\").c\n                                                : Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"no outstanding amount\").c, size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Icon\"], { iconName: \"Cancel\" })), initialsColor: patient.differenceAmount !==\n                                            0\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].darkRed\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PersonaInitialsColor\"].transparent }))),\n                                className: \"hidden-xs\",\n                            },\n                        ],\n                    };\n                }), commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"add new\").c,\n                            onClick: () => (this.showAdditionPanel = true),\n                            iconProps: {\n                                iconName: \"Add\",\n                            },\n                        },\n                    ]\n                    : [] }),\n            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Panel\"], { isOpen: this.showAdditionPanel, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PanelType\"].smallFixedFar, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.showAdditionPanel = false;\n                } },\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagInputComponent\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"select patient\").c, options: _modules__WEBPACK_IMPORTED_MODULE_2__[\"patients\"].docs.map((patient) => ({\n                        text: patient.name,\n                        key: patient._id,\n                    })), className: \"choose-patient\", suggestionsHeaderText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"select patient\").c, noResultsFoundText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"no patient found\").c, maxItems: 1, disabled: !this.canEdit, value: [], onChange: (selectedKeys) => {\n                        if (selectedKeys[0]) {\n                            this.showAdditionPanel = false;\n                            const orthoCase = _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].new();\n                            orthoCase.patientID = selectedKeys[0];\n                            _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].add(orthoCase);\n                            _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                id: orthoCase._id,\n                                tab: \"sheet\",\n                            });\n                        }\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], { className: \"m-t-15\" },\n                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { xs: 10 },\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"hr\", null)),\n                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { xs: 4 },\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"i\", { className: \"new-or\" }, \"or\")),\n                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { xs: 10 },\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"hr\", null))),\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"TextField\"], { label: \"Add new patient\", placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(`patient name`).c, value: this.newPatientName, onChange: (e, v) => (this.newPatientName = v) }),\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"DefaultButton\"], { onClick: () => {\n                        const newPatient = _modules__WEBPACK_IMPORTED_MODULE_2__[\"patients\"].new();\n                        newPatient.name = this.newPatientName;\n                        newPatient.fromJSON(newPatient.toJSON()); // init. teeth\n                        _modules__WEBPACK_IMPORTED_MODULE_2__[\"patients\"].add(newPatient);\n                        const orthoCase = _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].new();\n                        orthoCase.patientID = newPatient._id;\n                        _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].add(orthoCase);\n                        this.newPatientName = \"\";\n                        _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                            id: orthoCase._id,\n                            tab: \"details\",\n                        });\n                    }, iconProps: {\n                        iconName: \"add\",\n                    }, text: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"add new\").c })),\n            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"Panel\"], { isOpen: !!(this.selectedCase &&\n                    this.selectedPatient &&\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab), type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].unSelect();\n                }, onRenderNavigation: () => {\n                    if (!this.selectedCase) {\n                        return react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null);\n                    }\n                    if (!this.selectedPatient) {\n                        return react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null);\n                    }\n                    return (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"PanelTop\"], { title: this.selectedPatient.name, type: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"orthodontic\").c, onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].unSelect(), avatar: this.selectedPatient.avatar\n                                ? _core__WEBPACK_IMPORTED_MODULE_1__[\"imagesTable\"].table[this.selectedPatient.avatar]\n                                    ? _core__WEBPACK_IMPORTED_MODULE_1__[\"imagesTable\"].table[this.selectedPatient\n                                        .avatar]\n                                    : _core__WEBPACK_IMPORTED_MODULE_1__[\"imagesTable\"].fetchImage(this.selectedPatient\n                                        .avatar)\n                                : undefined }),\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"PanelTabs\"], { currentSelectedKey: _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab, onSelect: (key) => {\n                                _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({ tab: key });\n                            }, items: this.tabs })));\n                } },\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null, this.selectedCase && this.selectedPatient ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"ortho-single-component\" },\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](PatientDetailsPanel, { patient: this.selectedPatient, onChangeViewWhich: (key) => _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({ tab: key }) })) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"dental\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](DentalHistoryPanel, { patient: this.selectedPatient })) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"sheet\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](OrthoCaseSheetPanel, { orthoCase: this.selectedCase })) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"archive\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](OrthoRecordsPanel, { orthoCase: this.selectedCase })) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"gallery\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](OrthoGalleryPanel, { orthoCase: this.selectedCase })) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"appointments\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_2__[\"PatientAppointmentsPanel\"], { patient: this.selectedPatient })) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"delete\" ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null,\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"orthodontic case will be deleted\").c),\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_9__[\"PrimaryButton\"], { className: \"delete\", iconProps: {\n                                iconName: \"delete\",\n                            }, text: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"delete\").c, onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_2__[\"orthoCases\"].delete(_core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedID);\n                                _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].unSelect();\n                            } }))) : (\"\"))) : (\"\"))),\n            this.selectedAppointment ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](AppointmentEditorPanel, { appointment: this.selectedAppointment, onDismiss: () => (this.selectedAppointmentId = \"\") })) : (\"\")));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], OrthoPage.prototype, \"showAdditionPanel\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], OrthoPage.prototype, \"newPatientName\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], OrthoPage.prototype, \"selectedAppointmentId\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], OrthoPage.prototype, \"selectedCase\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], OrthoPage.prototype, \"selectedPatient\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], OrthoPage.prototype, \"canEdit\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], OrthoPage.prototype, \"selectedAppointment\", null);\nOrthoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], OrthoPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/orthodontic/components/page.orthodontic.tsx?");

/***/ })

}]);