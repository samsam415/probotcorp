(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./src/modules/labwork/components/page.labwork.tsx":
/*!*********************************************************!*\
  !*** ./src/modules/labwork/components/page.labwork.tsx ***!
  \*********************************************************/
/*! exports provided: LabworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LabworkPage\", function() { return LabworkPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\nlet LabworkPage = class LabworkPage extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.dt = null;\n        this.tabs = [\n            {\n                key: \"details\",\n                icon: \"Contact\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"case details\").h,\n            },\n            {\n                key: \"lab\",\n                icon: \"TestBeaker\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"lab details\").h,\n            },\n            {\n                key: \"delete\",\n                icon: \"trash\",\n                title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"delete\").h,\n                hidden: !this.canEdit,\n            },\n        ];\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_1__[\"user\"].currentUser.canEditLabwork;\n    }\n    get selectedLabwork() {\n        return _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].docs.find((x) => x._id === _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedID);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"lw-pg\" },\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"DataTableComponent\"], { ref: (dt) => (this.dt = dt), onDelete: this.canEdit\n                    ? (id) => {\n                        _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].deleteModal(id);\n                    }\n                    : undefined, commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"add new\").c,\n                            onClick: () => {\n                                const labwork = _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].new();\n                                _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].add(labwork);\n                                _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                    id: labwork._id,\n                                    tab: \"details\",\n                                });\n                            },\n                            iconProps: {\n                                iconName: \"Add\",\n                            },\n                        },\n                    ]\n                    : [], heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"labwork\").c,\n                    Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"operating staff\").c,\n                    Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"laboratory\").c,\n                    Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"dates\").c,\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].docs.map((labwork) => {\n                    return {\n                        id: labwork._id,\n                        searchableString: labwork.searchableString,\n                        actions: this.tabs\n                            .filter((x) => !x.hidden)\n                            .map((x) => ({\n                            key: x.key,\n                            title: x.title,\n                            icon: x.icon,\n                            onClick: () => {\n                                if (x.key === \"delete\") {\n                                    _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].deleteModal(labwork._id);\n                                }\n                                else {\n                                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                        id: labwork._id,\n                                        tab: x.key,\n                                    });\n                                }\n                            },\n                        })),\n                        cells: [\n                            {\n                                dataValue: labwork.caseTitle,\n                                component: (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileSquaredComponent\"], { text: labwork.caseTitle, onRenderPrimaryText: () => {\n                                        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"span\", { style: {\n                                                    display: \"block\",\n                                                    marginBottom: labwork\n                                                        .involvedTeeth\n                                                        .length ||\n                                                        labwork.patient\n                                                        ? \"-5px\"\n                                                        : \"\",\n                                                } }, labwork.caseTitle),\n                                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"i\", { style: {\n                                                    fontSize: 12,\n                                                } }, (labwork\n                                                .involvedTeeth\n                                                .length\n                                                ? labwork\n                                                    .involvedTeeth\n                                                    .length +\n                                                    \" units\"\n                                                : \"\") +\n                                                (labwork.patient\n                                                    ? \" for \" +\n                                                        labwork\n                                                            .patient\n                                                            .name\n                                                    : \"\"))));\n                                    } })),\n                                onClick: () => {\n                                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({\n                                        id: labwork._id,\n                                        tab: \"details\",\n                                    });\n                                },\n                                className: \"no-label\",\n                            },\n                            {\n                                dataValue: labwork.operatingStaff\n                                    .map((x) => x.name)\n                                    .join(\" \"),\n                                component: (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null, labwork.operatingStaff.map((member) => (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { key: member._id, className: \"m-b-5 m-r-5\" },\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"ProfileComponent\"], { size: 1, name: member.name })))))),\n                                className: \"hidden-xs\",\n                            },\n                            {\n                                dataValue: labwork.labName,\n                                component: labwork.labName.length ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagComponent\"], { text: labwork.labName, type: Object(_common_components__WEBPACK_IMPORTED_MODULE_8__[\"getRandomTagType\"])(labwork.labName), highlighted: this.dt\n                                        ? this.dt.filterString ===\n                                            labwork.labName\n                                        : false, onClick: () => {\n                                        if (this.dt) {\n                                            if (this.dt.filterString ===\n                                                labwork.labName) {\n                                                this.dt.filterString =\n                                                    \"\";\n                                            }\n                                            else {\n                                                this.dt.filterString =\n                                                    labwork.labName;\n                                            }\n                                        }\n                                        this.forceUpdate();\n                                    } })) : (\"\"),\n                                className: \"hidden-xs\",\n                            },\n                            {\n                                dataValue: labwork.sentDate,\n                                component: (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                                    labwork.isSent ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagComponent\"], { text: `Sent: ${Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(labwork.sentDate, _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"date_format\"))}`, type: Object(_common_components__WEBPACK_IMPORTED_MODULE_8__[\"getRandomTagType\"])(labwork.labName) })) : (\"\"),\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"br\", null),\n                                    labwork.isReceived ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagComponent\"], { text: `Received: ${Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(labwork.receivedDate, _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"date_format\"))}`, type: Object(_common_components__WEBPACK_IMPORTED_MODULE_8__[\"getRandomTagType\"])(labwork.labName) })) : (\"\"))),\n                                className: \"hidden-xs\",\n                            },\n                        ],\n                    };\n                }), maxItemsOnLoad: 20 }),\n            this.selectedLabwork ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Panel\"], { isOpen: !!this.selectedLabwork, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].unSelect();\n                }, onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"PanelTop\"], { title: this.selectedLabwork.caseTitle, type: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"labwork\").c, subTitle: this.selectedLabwork.patient\n                            ? this.selectedLabwork.patient.name\n                            : \"\", square: true, onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].unSelect() }),\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"PanelTabs\"], { currentSelectedKey: _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab, onSelect: (key) => _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].select({ tab: key }), items: this.tabs }))) },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"labwork-editor\" },\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"case details\").h },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], { gutter: 8 },\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 12 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"case title\").c, value: this.selectedLabwork\n                                        .caseTitle, onChange: (ev, val) => (this.selectedLabwork.caseTitle = val), disabled: !this.canEdit, \"data-testid\": \"lw-title\" })),\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 12 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagInputComponent\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"patient\").c, className: \"lw-patient\", options: _modules__WEBPACK_IMPORTED_MODULE_2__[\"patients\"].docs.map((patient) => ({\n                                        text: patient.name,\n                                        key: patient._id,\n                                    })), suggestionsHeaderText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"select patient\").c, noResultsFoundText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"no patient found\").c, maxItems: 1, disabled: !this.canEdit, value: this.selectedLabwork.patient\n                                        ? [\n                                            {\n                                                text: this\n                                                    .selectedLabwork\n                                                    .patient\n                                                    .name,\n                                                key: this\n                                                    .selectedLabwork\n                                                    .patient\n                                                    ._id,\n                                            },\n                                        ]\n                                        : [], onChange: (selectedKeys) => {\n                                        this.selectedLabwork.patientID =\n                                            selectedKeys[0] || \"\";\n                                    } }))),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagInputComponent\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"involved teeth\").c, className: \"lw-teeth\", options: _modules__WEBPACK_IMPORTED_MODULE_2__[\"ISOTeethArr\"].map((x) => {\n                                return {\n                                    key: x.toString(),\n                                    text: x.toString(),\n                                };\n                            }), suggestionsHeaderText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"select involved teeth\").c, noResultsFoundText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"no teeth found\").c, disabled: !this.canEdit, value: this.selectedLabwork.involvedTeeth.map((x) => ({\n                                key: x.toString(),\n                                text: x.toString(),\n                            })), onChange: (selectedKeys) => {\n                                this.selectedLabwork.involvedTeeth = selectedKeys.map((x) => Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"num\"])(x));\n                            } }),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"case details\").c, \"data-testid\": \"lw-case\", value: this.selectedLabwork.caseDetails, onChange: (ev, val) => (this.selectedLabwork.caseDetails = val), disabled: !this.canEdit, multiline: true }),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagInputComponent\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"operating staff\").c, className: \"lw-staff\", options: _modules__WEBPACK_IMPORTED_MODULE_2__[\"staff\"].operatingStaff.sort((a, b) => a.name.localeCompare(b.name))\n                                .map((s) => {\n                                return {\n                                    key: s._id,\n                                    text: s.name,\n                                };\n                            }), value: this.selectedLabwork.operatingStaff.map((x) => ({\n                                key: x._id,\n                                text: x.name,\n                            })), onChange: (newKeys) => {\n                                this.selectedLabwork.operatingStaffIDs = newKeys;\n                            }, disabled: !this.canEdit, suggestionsHeaderText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"operating staff\").c, noResultsFoundText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"no staff found\").c }))) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"lab\" ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"lab details\").h },\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], { gutter: 8 },\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 12 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"TagInputComponent\"], { className: \"lab-name\", label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"laboratory\").c, loose: true, options: _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].docs.map((x) => x.labName)\n                                        .filter((x, i, a) => a.indexOf(x) === i)\n                                        .sort((a, b) => a.localeCompare(b))\n                                        .map((labName) => {\n                                        return {\n                                            key: labName,\n                                            text: labName,\n                                        };\n                                    }), value: this.selectedLabwork.labName\n                                        ? [\n                                            {\n                                                key: this\n                                                    .selectedLabwork\n                                                    .labName,\n                                                text: this\n                                                    .selectedLabwork\n                                                    .labName,\n                                            },\n                                        ]\n                                        : [], onChange: (newKeys) => {\n                                        this.selectedLabwork.labName =\n                                            newKeys[0] || \"\";\n                                        if (newKeys[0]) {\n                                            const sentBefore = _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].docs.sort((a, b) => {\n                                                return (b.sentDate -\n                                                    a.sentDate);\n                                            })\n                                                .find((x) => x.labName ===\n                                                this\n                                                    .selectedLabwork\n                                                    .labName &&\n                                                x._id !==\n                                                    this\n                                                        .selectedLabwork\n                                                        ._id);\n                                            if (sentBefore) {\n                                                this.selectedLabwork.labContact =\n                                                    sentBefore.labContact;\n                                            }\n                                        }\n                                        else {\n                                            this.selectedLabwork.labContact =\n                                                \"\";\n                                        }\n                                    }, maxItems: 1, disabled: !this.canEdit, suggestionsHeaderText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"laboratory name\").c, noResultsFoundText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"no laboratory found\")\n                                        .c })),\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 12 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { \"data-testid\": \"lab-contact\", disabled: !this.canEdit, label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"lab contact\").c, value: this.selectedLabwork\n                                        .labContact, onChange: (e, newVal) => {\n                                        this.selectedLabwork.labContact = newVal;\n                                    } }))),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Row\"], { gutter: 8 },\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 8 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"m-t-20\" },\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { checked: this.selectedLabwork\n                                            .isPaid, onText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"paid\").c, offText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"outstanding\").c, disabled: !this.canEdit, onChange: (e, newVal) => {\n                                            this.selectedLabwork.isPaid = newVal;\n                                        } }),\n                                    this.selectedLabwork.isPaid ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"TextField\"], { type: \"number\", disabled: !this.canEdit, label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"price\").c, value: this.selectedLabwork.price.toString(), onChange: (e, newVal) => {\n                                            this.selectedLabwork.price = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"num\"])(newVal);\n                                        }, prefix: _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"currencySymbol\") })) : (\"\"))),\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 8 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"m-t-20\" },\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { checked: this.selectedLabwork\n                                            .isSent, onText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"sent\").c, offText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"not sent\").c, disabled: !this.canEdit, onChange: (e, newVal) => {\n                                            this.selectedLabwork.isSent = newVal;\n                                        } }),\n                                    this.selectedLabwork.isSent ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"DatePicker\"], { firstDayOfWeek: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"firstDayOfTheWeekDayPicker\"])(_modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"weekend_num\")), label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"sent date\").c, disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"select a date\").c, value: new Date(this.selectedLabwork.sentDate), onSelectDate: (date) => {\n                                            if (date) {\n                                                this.selectedLabwork.sentDate = date.getTime();\n                                            }\n                                        }, formatDate: (d) => Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(d || 0, _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"date_format\")) })) : (\"\"))),\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_8__[\"Col\"], { sm: 8 },\n                                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"m-t-20\" },\n                                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Toggle\"], { checked: this.selectedLabwork\n                                            .isReceived, onText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"received\").c, offText: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"not received\").c, disabled: !this.canEdit, onChange: (e, newVal) => {\n                                            this.selectedLabwork.isReceived = newVal;\n                                        } }),\n                                    this.selectedLabwork\n                                        .isReceived ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"DatePicker\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"received date\").c, firstDayOfWeek: Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"firstDayOfTheWeekDayPicker\"])(_modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"weekend_num\")), disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"select a date\").c, value: new Date(this.selectedLabwork.receivedDate), onSelectDate: (date) => {\n                                            if (date) {\n                                                this.selectedLabwork.receivedDate = date.getTime();\n                                            }\n                                        }, formatDate: (d) => Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"formatDate\"])(d || 0, _modules__WEBPACK_IMPORTED_MODULE_2__[\"setting\"].getSetting(\"date_format\")) })) : (\"\")))))) : (\"\"),\n                    _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedTab === \"delete\" ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"are you sure you want to delete\").c),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"PrimaryButton\"], { className: \"delete\", iconProps: {\n                                iconName: \"delete\",\n                            }, text: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"delete\").c, onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_2__[\"labworks\"].delete(_core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].selectedID);\n                                _core__WEBPACK_IMPORTED_MODULE_1__[\"router\"].unSelect();\n                            } }))) : (\"\")))) : (\"\")));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], LabworkPage.prototype, \"canEdit\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], LabworkPage.prototype, \"selectedLabwork\", null);\nLabworkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], LabworkPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/labwork/components/page.labwork.tsx?");

/***/ })

}]);