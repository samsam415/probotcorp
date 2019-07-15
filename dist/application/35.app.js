(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./src/modules/staff/components/page.staff.tsx":
/*!*****************************************************!*\
  !*** ./src/modules/staff/components/page.staff.tsx ***!
  \*****************************************************/
/*! exports provided: StaffPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StaffPage\", function() { return StaffPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet StaffPage = class StaffPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.tabs = [\n            {\n                key: \"details\",\n                title: \"Staff Member Details\",\n                icon: \"DietPlanNotebook\"\n            },\n            {\n                key: \"permission\",\n                title: \"Level and Permission\",\n                icon: \"Permissions\"\n            },\n            {\n                key: \"appointments\",\n                title: \"Upcoming Appointments\",\n                icon: \"Calendar\",\n                hidden: !this.props.currentUser.canViewAppointments\n            },\n            {\n                key: \"delete\",\n                title: \"Delete\",\n                icon: \"Trash\",\n                hidden: !this.canEdit,\n                hiddenOnPanel: true\n            }\n        ];\n        this.selectedId = this.props.currentLocation.split(\"/\")[1];\n        this.selectedAppointmentId = \"\";\n        this.viewWhich = \"\";\n    }\n    get canEdit() {\n        return this.props.currentUser.canEditStaff;\n    }\n    get sameUser() {\n        return (this.props.currentUser._id ===\n            (this.selectedMember || { _id: \"\" })._id);\n    }\n    get selectedAppointment() {\n        return this.props.allAppointments.find(x => x._id === this.selectedAppointmentId);\n    }\n    get selectedMember() {\n        return this.props.staffMembers.find(x => x._id === this.selectedId);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-component\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { maxItemsOnLoad: 10, heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Staff Member\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Last/Next Appointment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Contact Details\")\n                ], rows: this.props.staffMembers.map(member => ({\n                    id: member._id,\n                    searchableString: member.searchableString,\n                    cells: [\n                        {\n                            dataValue: member.name,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: member.name, secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                        member.nextAppointments\n                                            .length,\n                                        \" \",\n                                        Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"upcoming appointments\")), size: 3 }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TableActions\"], { items: this.tabs, onSelect: key => {\n                                        if (key === \"delete\") {\n                                            this.props.onDeleteStaff(member._id);\n                                        }\n                                        else {\n                                            this.selectedId =\n                                                member._id;\n                                            this.viewWhich = key;\n                                        }\n                                    } }))),\n                            className: \"no-label\",\n                            onClick: () => {\n                                this.selectedId = member._id;\n                                this.viewWhich = \"details\";\n                            }\n                        },\n                        {\n                            dataValue: (member.lastAppointment ||\n                                member.nextAppointment || {\n                                date: 0\n                            }).date,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: member.lastAppointment\n                                        ? member.lastAppointment\n                                            .treatment\n                                            ? member.lastAppointment\n                                                .treatment.type\n                                            : \"\"\n                                        : \"\", subText: member.lastAppointment\n                                        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(member\n                                            .lastAppointment\n                                            .date, this.props\n                                            .dateFormat)\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No last appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Previous\" })), onClick: member.lastAppointment\n                                        ? () => {\n                                            this.selectedAppointmentId =\n                                                member.lastAppointment._id;\n                                        }\n                                        : undefined, initialsColor: member.lastAppointment\n                                        ? undefined\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: member.nextAppointment\n                                        ? member.nextAppointment\n                                            .treatment\n                                            ? member.nextAppointment\n                                                .treatment.type\n                                            : \"\"\n                                        : \"\", subText: member.nextAppointment\n                                        ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(member\n                                            .nextAppointment\n                                            .date, this.props\n                                            .dateFormat)\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No next appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Next\" })), onClick: member.nextAppointment\n                                        ? () => {\n                                            this.selectedAppointmentId =\n                                                member.nextAppointment._id;\n                                        }\n                                        : undefined, initialsColor: member.nextAppointment\n                                        ? undefined\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        },\n                        {\n                            dataValue: member.phone || member.email,\n                            component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: member.phone, subText: member.phone\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Phone number\")\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No phone number\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Phone\" })), initialsColor: member.phone\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].teal\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: member.email, subText: member.email\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Email\")\n                                        : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No Email\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Mail\" })), initialsColor: member.email\n                                        ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].teal\n                                        : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                            className: \"hidden-xs\"\n                        }\n                    ]\n                })), commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                            onClick: () => {\n                                const member = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"StaffMember\"]();\n                                this.props.onAddStaff(member);\n                                this.selectedId = member._id;\n                                this.viewWhich = \"details\";\n                            },\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [] }),\n            this.selectedMember && this.viewWhich ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: !!this.selectedMember, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.selectedId = \"\";\n                    this.viewWhich = \"\";\n                }, onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 20 }, this.selectedMember.name ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: this.selectedMember.name, size: 2 })) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"p\", null))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 4, className: \"close\" },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"cancel\" }, onClick: () => {\n                                    this.selectedId = \"\";\n                                } }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: this.viewWhich, onSelect: key => {\n                            this.viewWhich = key;\n                        }, items: this.tabs }))) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-editor\" },\n                    this.viewWhich === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Basic Info`) },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Name\"), value: this.selectedMember.name, onChange: (ev, val) => (this.selectedMember.name = val), disabled: !this.canEdit })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"label\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Days on duty\")),\n                                _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"].days().map((day, i) => {\n                                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Checkbox\"], { key: day, disabled: !this.canEdit, label: _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"].daysShort()[i], checked: this.selectedMember.onDutyDays.indexOf(day) > -1, onChange: (ev, checked) => {\n                                            if (checked) {\n                                                this.selectedMember.onDutyDays.push(day);\n                                            }\n                                            else {\n                                                this.selectedMember.onDutyDays.splice(this.selectedMember.onDutyDays.indexOf(day), 1);\n                                            }\n                                            this.selectedMember\n                                                .triggerUpdate++;\n                                        } }));\n                                }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Contact Details`) },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { gutter: 12 },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 12 },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Phone number\"), value: this.selectedMember\n                                                .phone, onChange: (ev, val) => (this.selectedMember.phone = val), disabled: !this.canEdit }))),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 12 },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Email\"), value: this.selectedMember\n                                                .email, onChange: (ev, val) => (this.selectedMember.email = val), disabled: !this.canEdit }))))))) : (\"\"),\n                    this.viewWhich === \"permission\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                        this.selectedMember._id ===\n                            this.props.currentUser._id ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Login PIN`) },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"staff-input\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Login PIN\"), value: this.selectedMember.pin, onChange: (ev, v) => {\n                                        if (Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v) < 10000) {\n                                            this.selectedMember.pin = v.toString();\n                                        }\n                                        else {\n                                            this.forceUpdate();\n                                        }\n                                    }, type: \"number\", max: 9999 })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].info }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Only you can edit this PIN, and it can only be 4 numbers\")))) : (\"\"),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Permission`) },\n                            this.sameUser ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"You can't edit your own level and permissions\")),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null))) : (\"\"),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember.operates, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Operates on patients\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Doesn't operate on patients\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.operates = newVal;\n                                } }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember.canViewStaff, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view staff page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view staff page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewStaff = newVal;\n                                } }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewPatients, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view patients page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view patients page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewPatients = newVal;\n                                } }),\n                            this.props.enabledOrthodontics ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewOrtho, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view orthodontics page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view orthodontics page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewOrtho = newVal;\n                                } })) : (\"\"),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewAppointments, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view appointments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view appointments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewAppointments = newVal;\n                                } }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewTreatments, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view treatments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view treatments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewTreatments = newVal;\n                                } }),\n                            this.props.enabledPrescriptions ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewPrescriptions, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view prescriptions page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view prescriptions page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewPrescriptions = newVal;\n                                } })) : (\"\"),\n                            this.props.enabledStatistics ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewStats, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view statistics page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view statistics page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewStats = newVal;\n                                } })) : (\"\"),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canViewSettings, disabled: this.sameUser || !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can view settings page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not view settings page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canViewSettings = newVal;\n                                } }),\n                            this.selectedMember.canViewStaff ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditStaff, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit staff page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit staff page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditStaff = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember.canViewPatients ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditPatients, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit patients page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit patients page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditPatients = newVal;\n                                } })) : (\"\"),\n                            this.props.enabledOrthodontics &&\n                                this.selectedMember.canViewOrtho ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditOrtho, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit orthodontics page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit orthodontics page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditOrtho = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember\n                                .canViewAppointments ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditAppointments, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit appointments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit appointments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditAppointments = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember\n                                .canViewTreatments ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditTreatments, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit treatments page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit treatments page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditTreatments = newVal;\n                                } })) : (\"\"),\n                            this.props.enabledPrescriptions &&\n                                this.selectedMember\n                                    .canViewPrescriptions ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditPrescriptions, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit prescriptions page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit prescriptions page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditPrescriptions = newVal;\n                                } })) : (\"\"),\n                            this.selectedMember.canViewSettings ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.selectedMember\n                                    .canEditSettings, disabled: this.sameUser ||\n                                    !this.canEdit, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can edit settings page\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Can not edit settings page\"), onChange: (ev, newVal) => {\n                                    this.selectedMember.canEditSettings = newVal;\n                                } })) : (\"\")))) : (\"\"),\n                    this.viewWhich === \"appointments\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Upcoming Appointments`) }, this.selectedMember.nextAppointments\n                        .length ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"AppointmentsList\"], { list: this.selectedMember\n                            .nextAppointments, currentUser: this.props.currentUser, dateFormat: this.props.dateFormat, onDeleteAppointment: id => this.props.onDeleteAppointment(id), doDeleteAppointment: id => this.props.doDeleteAppointment(id), availableTreatments: this.props.availableTreatments, availablePrescriptions: this.props\n                            .availablePrescriptions, appointmentsForDay: (year, month, day) => this.props.appointmentsForDay(year, month, day), currencySymbol: this.props.currencySymbol, prescriptionsEnabled: this.props.enabledPrescriptions, timeTrackingEnabled: this.props.timeTrackingEnabled, operatingStaff: this.props.operatingStaff })) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].info }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"There are no upcoming appointments for this staff member\"))))) : (\"\"),\n                    this.viewWhich === \"delete\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].warning }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Are you sure you want to delete\")),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PrimaryButton\"], { className: \"delete\", iconProps: {\n                                iconName: \"delete\"\n                            }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Delete\"), onClick: () => {\n                                this.props.doDeleteStaff(this.selectedId);\n                                this.selectedId = \"\";\n                                this.viewWhich = \"\";\n                            } }))) : (\"\")))) : (\"\"),\n            this.selectedAppointment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentEditorPanel, { appointment: this.selectedAppointment, onDismiss: () => (this.selectedAppointmentId = \"\"), doDeleteAppointment: id => {\n                    this.props.doDeleteAppointment(id);\n                    this.selectedAppointmentId = \"\";\n                }, availableTreatments: this.props.availableTreatments, availablePrescriptions: this.props.availablePrescriptions, currentUser: this.props.currentUser, dateFormat: this.props.dateFormat, currencySymbol: this.props.currencySymbol, prescriptionsEnabled: this.props.enabledPrescriptions, timeTrackingEnabled: this.props.timeTrackingEnabled, operatingStaff: this.props.operatingStaff, appointmentsForDay: (year, month, day) => this.props.appointmentsForDay(year, month, day) })) : (\"\")));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], StaffPage.prototype, \"selectedId\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], StaffPage.prototype, \"selectedAppointmentId\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], StaffPage.prototype, \"viewWhich\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"sameUser\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"selectedAppointment\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], StaffPage.prototype, \"selectedMember\", null);\nStaffPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], StaffPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/staff/components/page.staff.tsx?");

/***/ })

}]);