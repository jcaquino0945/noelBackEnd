(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jcaqu\Desktop\noelFrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "1ZKI":
/*!**********************************************************!*\
  !*** ./src/app/admin-project/admin-project.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectComponent", function() { return AdminProjectComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








function AdminProjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProjectComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.resetNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Project has been updated!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " If changes are not seen kindly refresh your browser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminProjectComponent_div_1_tbody_59_tr_1_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "File here");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", comment_r6.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function AdminProjectComponent_div_1_tbody_59_tr_1_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminProjectComponent_div_1_tbody_59_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AdminProjectComponent_div_1_tbody_59_tr_1_td_8_Template, 3, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AdminProjectComponent_div_1_tbody_59_tr_1_td_9_Template, 2, 0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r6.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r6.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, comment_r6.uploaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r6.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !comment_r6.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r6.fileType);
} }
function AdminProjectComponent_div_1_tbody_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminProjectComponent_div_1_tbody_59_tr_1_Template, 12, 8, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.project.comments);
} }
function AdminProjectComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Project Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminProjectComponent_div_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.data.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Project Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminProjectComponent_div_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.data.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminProjectComponent_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.editProject(ctx_r13.project._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Update Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Images Uploaded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Audio Uploaded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Videos Uploaded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Text Uploaded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Total Comments: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Name of User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Commend/Reflection");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Date Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Type of File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, AdminProjectComponent_div_1_tbody_59_Template, 2, 1, "tbody", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.project.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.data.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true)("disabled", ctx_r1.data.name == ctx_r1.project.name && ctx_r1.data.description == ctx_r1.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.audio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.videos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.textFiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.projects$);
} }
class AdminProjectComponent {
    constructor(projectService, route, authService) {
        this.projectService = projectService;
        this.route = route;
        this.authService = authService;
        this.data = { name: '', description: '' };
    }
    ngOnInit() {
        this.currentUser = this.authService.getUserDetails();
        this.projectService.getProjectIds().subscribe((projectIds) => (this.projectIds = projectIds));
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => {
            return this.projectService.getProject(params['id']);
        }))
            .subscribe((project) => {
            this.project = project, this.data.name = project.name, this.data.description = project.description;
        });
        this.projectService.getProjects().subscribe((projects$) => (this.projects$ = projects$));
    }
    editProject(id) {
        console.log(this.data.name);
        console.log(this.data.description);
        this.projectService.editProject(id, this.data.name, this.data.description).subscribe((res) => {
            console.log('success');
            this.commentSuccess = true;
        }, (err) => {
            console.log(err);
        });
    }
    resetNotifications() {
        this.commentSuccess = false;
    }
}
AdminProjectComponent.ɵfac = function AdminProjectComponent_Factory(t) { return new (t || AdminProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
AdminProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminProjectComponent, selectors: [["app-admin-project"]], decls: 2, vars: 2, consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", "style", "padding: 8px; position: fixed; width: 100%;", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "padding", "8px", "position", "fixed", "width", "100%"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 2, "margin-right", "5px", 3, "click"], ["aria-hidden", "true"], [1, "container"], [1, "header"], [1, "content-container"], [1, "img-container"], ["alt", "", 3, "src"], [1, "content-info"], [2, "margin-right", "4px"], ["type", "text", "id", "proj-title", 1, "user-input", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "id", "proj-title", 1, "user-input", 2, "width", "100% !important", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", 3, "mat-dialog-close", "disabled", "click"], [1, "count-track"], [1, "img-count-container"], ["id", "img-count"], [1, "audio-count-container"], ["id", "audio-count"], [1, "video-count-container"], ["id", "video-count"], [1, "text-count-container"], ["id", "text-count"], [1, "table-container"], [1, "table", "table-striped", "table-responsive"], ["id", "tbl-content", 4, "ngIf"], ["id", "tbl-content"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "href"]], template: function AdminProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminProjectComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminProjectComponent_div_1_Template, 60, 14, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.commentSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin: auto;\r\n    background: rgb(255, 255, 255);\r\n    padding: 0 2em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 3em 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ndiv.content-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\r\n    \r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    background: linear-gradient(32deg, rgba(158,206,154,0.3) 0%, rgba(28,82,83,1) 100%);\r\n    max-height: 350px;\r\n}\r\n\r\ndiv.content-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    object-fit: contain;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%], div.comment-section[_ngcontent-%COMP%] {\r\n    padding: 1.5em 0;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\r\n    font-weight: bold;\r\n    font-size: 1.8em;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\r\n    padding-top: 10px;\r\n    \r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\r\n    padding-top: 2em;\r\n    \r\n    text-align: justify;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ndiv.count-track[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 1.3em;\r\n    border: 1px solid #c7c7c7;\r\n    padding: 2em 1.5em;\r\n    margin: 2em 0;\r\n}\r\n\r\n#img-count[_ngcontent-%COMP%], #audio-count[_ngcontent-%COMP%], #video-count[_ngcontent-%COMP%], #text-count[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ndiv.container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\r\n    padding: 2em 0;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease 0s;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background: rgb(158, 206, 154);\r\n}\r\n\r\n.table-container[_ngcontent-%COMP%]   #tbl-content[_ngcontent-%COMP%]   #close[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    border: 0;\r\n    background: #ffe4e4;\r\n    color: #ff2222;\r\n    transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.table-container[_ngcontent-%COMP%]   #tbl-content[_ngcontent-%COMP%]   #close[_ngcontent-%COMP%]:hover{\r\n    color: #ffe4e4;\r\n    background: #ff2222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQSxlQUFlOztBQUVmLGtCQUFrQjs7QUFDbEI7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUZBQW1GO0lBQ25GLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUNBLGdCQUFnQjs7QUFFaEIsZ0JBQWdCOztBQUNoQjtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQSxjQUFjOztBQUVkLGdCQUFnQjs7QUFDaEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUNBLGNBQWMiLCJmaWxlIjoiYWRtaW4tcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogSEVBREVSIFNUQVJUICovXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDAgMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbmRpdi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAzZW0gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuZGl2LmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4vKiBIRUFERVIgRU5EICovXHJcblxyXG4vKiBDT05URU5UIFNUQVJUICovXHJcbmRpdi5jb250ZW50LWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMmRlZywgcmdiYSgxNTgsMjA2LDE1NCwwLjMpIDAlLCByZ2JhKDI4LDgyLDgzLDEpIDEwMCUpO1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuZGl2LmNvbnRlbnQtY29udGFpbmVyIC5pbWctY29udGFpbmVyIGltZ3tcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbmRpdi5jb250ZW50LWluZm8sXHJcbmRpdi5jb21tZW50LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMS41ZW0gMDtcclxufVxyXG5kaXYuY29udGVudC1pbmZvIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmRpdi5jb250ZW50LWluZm8gcDpudGgtY2hpbGQoMSkge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcbmRpdi5jb250ZW50LWluZm8gcDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAvKiBmb250LXNpemU6IDEuMmVtOyAqL1xyXG59XHJcblxyXG5kaXYuY29udGVudC1pbmZvIHA6bnRoLWNoaWxkKDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAvKiBmb250LXNpemU6IDEuMmVtOyAqL1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4vKiBDT05URU5UIEVORCAqL1xyXG5cclxuLyogQ09VTlQgU1RBUlQgKi9cclxuZGl2LmNvdW50LXRyYWNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNztcclxuICAgIHBhZGRpbmc6IDJlbSAxLjVlbTtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbn1cclxuI2ltZy1jb3VudCwgI2F1ZGlvLWNvdW50LCAjdmlkZW8tY291bnQsICN0ZXh0LWNvdW50e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLyogQ09VTlQgRU5EICovXHJcblxyXG4vKiBUQUJMRSBTVEFSVCAqL1xyXG5kaXYuY29udGFpbmVyIC50YWJsZSB7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuZGl2LmNvbnRhaW5lciAudGFibGUgdGJvZHkgdHIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5kaXYuY29udGFpbmVyIC50YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU4LCAyMDYsIDE1NCk7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXIgI3RibC1jb250ZW50ICNjbG9zZXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZlNGU0O1xyXG4gICAgY29sb3I6ICNmZjIyMjI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG4udGFibGUtY29udGFpbmVyICN0YmwtY29udGVudCAjY2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZTRlNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjIyMjI7XHJcbn1cclxuLyogVEFCTEUgRU5EICovIl19 */"] });


/***/ }),

/***/ "3ITz":
/*!*********************************************!*\
  !*** ./src/app/services/contact.service.ts ***!
  \*********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "lUK6");





const apiUrl = '/contact'; //api url from backend service
class ContactService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
    }
    getMessage() {
        return this.http
            .get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    sendMessage(name, subject, content, email) {
        let data = JSON.stringify({
            "name": name,
            "subject": subject,
            "content": content,
            "email": email,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = {
            params,
            reportProgress: true,
            headers: headers,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', apiUrl, data, options);
        return this.http.request(req);
    }
    deleteContact(id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: 'bearer ' + sessionStorage.getItem('token'),
        });
        const options = {
            params,
            reportProgress: true,
            headers: header,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', apiUrl + '/' + id, options);
        return this.http.request(req);
    }
    sendReceipt(emailDetail) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(emailDetail),
        };
        console.log(JSON.stringify(emailDetail));
        fetch(apiUrl + '/supportReply', requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "47Jg":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent, DialogLogoutDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLogoutDialog", function() { return DialogLogoutDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function () { return { exact: true }; };
function SidebarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function SidebarComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function SidebarComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "supervised_user_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class SidebarComponent {
    constructor(authService, router, dialog) {
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
    }
    ngOnInit() {
        console.log('sidebar init');
        this.currentUser = this.authService.getUserDetails();
    }
    logout() {
        this.authService.clear();
        this.router.navigate(['home']);
        window.location.reload();
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogLogoutDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 34, vars: 9, consts: [[1, "sidebar-top"], [1, "sidebar-top-title"], [1, "sidebar-top-menu"], [1, "sidebar-links"], ["routerLink", "/feed", "routerLinkActive", "active", 1, "sidebar-link", 3, "routerLinkActiveOptions"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "sidebar-link", 3, "routerLinkActiveOptions"], ["class", "sidebar-link", "routerLink", "/dashboard", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "sidebar-link", "routerLink", "/messages", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngIf"], ["class", "sidebar-link", "routerLink", "/users", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "/support", "routerLinkActive", "active", 1, "sidebar-link", 3, "routerLinkActiveOptions"], [1, "sidebar-link", 3, "click"], [1, "sidebar-footer"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "sidebar-link", 3, "routerLinkActiveOptions"], ["routerLink", "/messages", "routerLinkActive", "active", 1, "sidebar-link", 3, "routerLinkActiveOptions"], ["routerLink", "/users", "routerLinkActive", "active", 1, "sidebar-link", 3, "routerLinkActiveOptions"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tracking and Monitoring Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " person_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidebarComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SidebarComponent_div_19_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SidebarComponent_div_20_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "question_answer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u00A9 2020 | Tracking and Monitoring Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.user.admin == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.user.admin == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.user.admin == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sidebar-top[_ngcontent-%COMP%] {\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 10vh;\r\n    background-color: #58B761;\r\n    font-weight: 400;\r\n    letter-spacing: 2px;\r\n}\r\n.sidebar-top-title[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    justify-self: start;\r\n    width: 50%;\r\n    padding-left: 30px;\r\n}\r\n.sidebar-top-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n.sidebar-top-menu[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    justify-self: end;\r\n    width: 50%;\r\n    padding-right: 15px;\r\n}\r\n.sidebar-links[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    width: 100%;\r\n    height: auto;\r\n    margin-top: 30px;\r\n}\r\n.sidebar-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: black;\r\n    cursor:pointer;\r\n}\r\n.sidebar-link[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    padding: 15px 0px 15px 30px;\r\n    transition: .1s all ease-in-out;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    border-left: 6px solid transparent;\r\n}\r\n.sidebar-link[_ngcontent-%COMP%]:hover {\r\n    border-left: 6px solid #58B761;\r\n    color: #58B761;\r\n    background-color: #f7f7f7;\r\n}\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    vertical-align: middle; \r\n    margin-right: 10px;\r\n    cursor:pointer;\r\n}\r\n.sidebar-footer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n.active[_ngcontent-%COMP%] {\r\n    border-left: 6px solid #58B761;\r\n    color: #58B761;\r\n    background-color: #f7f7f7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2lkZWJhci10b3Age1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4Qjc2MTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbi5zaWRlYmFyLXRvcC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuLnNpZGViYXItdG9wLXRpdGxlIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uc2lkZWJhci10b3AtbWVudSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnNpZGViYXItbGlua3Mge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uc2lkZWJhci1saW5rIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxpbmsge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHggMTVweCAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjFzIGFsbCBlYXNlLWluLW91dDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNpZGViYXItbGluazpob3ZlciB7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM1OEI3NjE7XHJcbiAgICBjb2xvcjogIzU4Qjc2MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbn1cclxuLm1hdC1pY29uIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLnNpZGViYXItZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjNThCNzYxO1xyXG4gICAgY29sb3I6ICM1OEI3NjE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG59Il19 */"] });
class DialogLogoutDialog {
}
DialogLogoutDialog.ɵfac = function DialogLogoutDialog_Factory(t) { return new (t || DialogLogoutDialog)(); };
DialogLogoutDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogLogoutDialog, selectors: [["logout-dialog"]], decls: 7, vars: 1, consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogLogoutDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Are you sure to logout?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]], styles: ["h2.mat-dialog-title[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImxvZ291dC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMi5tYXQtZGlhbG9nLXRpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });


/***/ }),

/***/ "6AOp":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: MyErrorStateMatcher, ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "c3AT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function ProjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.resetNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Comment has been posted!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " If comment is not seen kindly refresh your browser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.resetNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Comment has been deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " If comment is not deleted kindly refresh your browser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_2_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.currentUser.user.name);
} }
function ProjectComponent_div_2_div_31_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_div_2_div_31_mat_icon_4_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.deleteComment(comment_r9._id, ctx_r21.currentUser.user._id, ctx_r21.project._id, comment_r9.fileType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectComponent_div_2_div_31_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "video", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file here (MS Word)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file here (MS Word)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file here (PDF)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file here (Plain Text)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file here (Microsoft PPT)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "audio", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "audio", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "source", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Your browser does not support the audio element. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", comment_r9.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_2_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProjectComponent_div_2_div_31_mat_icon_4_Template, 2, 0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProjectComponent_div_2_div_31_div_8_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ProjectComponent_div_2_div_31_div_9_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ProjectComponent_div_2_div_31_div_10_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProjectComponent_div_2_div_31_div_11_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProjectComponent_div_2_div_31_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProjectComponent_div_2_div_31_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ProjectComponent_div_2_div_31_div_14_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProjectComponent_div_2_div_31_div_15_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProjectComponent_div_2_div_31_div_16_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProjectComponent_div_2_div_31_div_17_Template, 4, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", comment_r9.authorName, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.currentUser.user.name == comment_r9.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](comment_r9.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "video/mp4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "image/jpeg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "image/png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "application/msword");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "application/pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "text/plain");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "application/vnd.openxmlformats-officedocument.presentationml.presentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "audio/x-m4a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", comment_r9.fileType == "audio/mpeg");
} }
function ProjectComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Comments/Reflections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProjectComponent_div_2_p_20_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "textarea", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProjectComponent_div_2_Template_textarea_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r34.comment.comment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " attach_file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProjectComponent_div_2_Template_input_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.onFileChange($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_div_2_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r37.submitComment(ctx_r37.project._id, ctx_r37.currentUser.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProjectComponent_div_2_div_31_Template, 19, 13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r2.project.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.authorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.project.comments.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.currentUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.comment.comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.project.comments);
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
class ProjectComponent {
    constructor(projectService, route, location, router, authService) {
        this.projectService = projectService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.comment = { comment: '' };
        this.file = null;
    }
    ngOnInit() {
        this.currentUser = this.authService.getUserDetails();
        this.projectService
            .getProjectIds()
            .subscribe((projectIds) => (this.projectIds = projectIds));
        this.route.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => {
            return this.projectService.getProject(params['id']);
        }))
            .subscribe((project) => {
            this.project = project;
            this.projectAudio = project.audio;
            this.projectImages = project.images;
            this.projectVideos = project.videos;
            this.projectText = project.textFiles;
            console.log(this.projectAudio);
            console.log(this.projectImages);
            console.log(this.projectVideos);
            console.log(this.projectText);
        }, (err) => console.log(err));
        (errmess) => (this.errMess = errmess);
    }
    submitComment(id, author) {
        console.log(this.file);
        if (!this.file) {
            this.projectService.addComment(id, this.comment.comment, author).subscribe((res) => {
                this.projectService.updateProjectText(id, this.projectText + 1).subscribe((res) => {
                });
                this.projectService
                    .getProjectIds()
                    .subscribe((projectIds) => (this.projectIds = projectIds));
                this.route.params
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => {
                    return this.projectService.getProject(params['id']);
                }))
                    .subscribe((project) => {
                    this.project = project;
                }, (err) => console.log(err));
                (errmess) => (this.errMess = errmess);
            }, (err) => {
                console.log(err);
            });
            this.commentSuccess = true;
        }
        else {
            this.projectService.addComment(id, this.comment.comment, author, this.file).subscribe((res) => {
                if (this.file.type.toString() == 'video/mp4') {
                    this.projectService.updateProjectVideo(id, this.projectVideos + 1).subscribe((res) => {
                    });
                    this.commentSuccess = true;
                }
                if (this.file.type.toString() == 'image/png' || this.file.type.toString() == 'image/jpeg') {
                    this.projectService.updateProjectImage(id, this.projectImages + 1).subscribe((res) => {
                    });
                    this.commentSuccess = true;
                }
                if (this.file.type.toString() == 'audio/mpeg' || this.file.type.toString() == 'audio/x-m4a') {
                    this.projectService.updateProjectAudio(id, this.projectAudio + 1).subscribe((res) => {
                    });
                    this.commentSuccess = true;
                }
                if (this.file.type.toString() == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || this.file.type.toString() == 'application/msword' || this.file.type.toString() == 'text/plain' || this.file.type.toString() == 'application/vnd.openxmlformats-officedocument.presentationml.presentation' || this.file.type.toString() == 'application/pdf') {
                    this.projectService.updateProjectText(id, this.projectText + 1).subscribe((res) => {
                    });
                    this.commentSuccess = true;
                }
                //if (this.file)
                this.projectService
                    .getProjectIds()
                    .subscribe((projectIds) => (this.projectIds = projectIds));
                this.route.params
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => {
                    return this.projectService.getProject(params['id']);
                }))
                    .subscribe((project) => {
                    this.project = project;
                }, (err) => console.log(err));
                (errmess) => (this.errMess = errmess);
            }, (err) => {
                console.log(err);
            });
        }
    }
    onFileChange(files) {
        this.file = files[0];
        console.log(this.file);
        window.alert('File uploaded!');
    }
    deleteComment(commentId, userId, projectId, fileType) {
        console.log(commentId);
        console.log(userId);
        console.log(projectId);
        if (window.confirm("Are you sure you want to delete your comment?")) {
            this.projectService.deleteComment(commentId, userId, projectId).subscribe((res) => {
                if (fileType == 'image/jpeg' || fileType == 'image/png') {
                    this.projectService.updateProjectImage(projectId, this.projectImages - 1).subscribe((res) => {
                    });
                    this.commentDeleted = true;
                }
                if (fileType == 'audio/mpeg' || fileType == 'audio/x-m4a') {
                    this.projectService.updateProjectAudio(projectId, this.projectAudio - 1).subscribe((res) => {
                    });
                    this.commentDeleted = true;
                }
                if (fileType == 'video/mp4') {
                    this.projectService.updateProjectVideo(projectId, this.projectVideos - 1).subscribe((res) => {
                    });
                    this.commentDeleted = true;
                }
                if (fileType == 'comment' || fileType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileType == 'application/msword' || fileType == 'text/plain' || this.file.type.toString() == 'application/vnd.openxmlformats-officedocument.presentationml.presentation' || this.file.type.toString() == 'application/pdf') {
                    this.projectService.updateProjectText(projectId, this.projectText - 1).subscribe((res) => {
                    });
                    this.commentDeleted = true;
                }
                this.projectService
                    .getProjectIds()
                    .subscribe((projectIds) => (this.projectIds = projectIds));
                this.route.params
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => {
                    return this.projectService.getProject(params['id']);
                }))
                    .subscribe((project) => {
                    this.project = project;
                }, (err) => console.log(err));
                (errmess) => (this.errMess = errmess);
            });
            this.commentDeleted = true;
        }
    }
    resetNotifications() {
        this.commentDeleted = false;
        this.commentSuccess = false;
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 3, vars: 3, consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", "style", "padding: 8px; position: fixed; width: 100%;", 4, "ngIf"], ["class", "alert alert-warning alert-dismissible fade show", "role", "alert", "style", "padding: 8px; position: fixed; width: 100%;", 4, "ngIf"], ["class", "container content", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "padding", "8px", "position", "fixed", "width", "100%"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 2, "margin-right", "5px", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", 2, "padding", "8px", "position", "fixed", "width", "100%"], [1, "container", "content"], [1, "header"], [1, "content-container"], [1, "img-container"], ["alt", "", 3, "src"], [1, "content-info"], [1, "comment-section"], [1, "user-comment"], ["style", "font-weight: bold;", 4, "ngIf"], [1, "add-comment"], ["cols", "30", "rows", "2", "placeholder", "Your comment here...", "id", "comment", 3, "ngModel", "ngModelChange"], [1, "action-container"], ["for", "attach", "id", "attach-lbl"], ["type", "file", "id", "attach", 3, "change"], ["type", "submit", "value", "send", 3, "click"], [1, "others-comment"], ["class", "content", 4, "ngFor", "ngForOf"], [2, "font-weight", "bold"], [1, "content"], [1, "commenter-info"], [4, "ngIf"], [1, "comment"], ["class", "media", 4, "ngIf"], ["type", "submit", "value", "close", 3, "click"], [1, "media"], ["controls", "", 1, "vid"], ["type", "video/mp4", 2, "height", "auto", "width", "80px", 3, "src"], ["alt", "", 1, "media-content", 3, "src"], [3, "href"], ["controls", "", 2, "height", "15px"], ["type", "audio/mpeg", 2, "height", "auto !important", 3, "src"], ["controls", ""]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProjectComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProjectComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProjectComponent_div_2_Template, 32, 8, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.commentSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.commentDeleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n\r\n}\r\n\r\ndiv.content[_ngcontent-%COMP%]{\r\n    background: rgb(255, 255, 255);\r\n    padding: 2em 2em 0;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%]::after {\r\n    opacity: 0.3;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ndiv.content-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    background: linear-gradient(32deg, rgba(158,206,154,0.3) 0%, rgba(28,82,83,.8) 100%);\r\n    max-height: 30vw;\r\n}\r\n\r\ndiv.content-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    object-fit: contain;\r\n    min-height: 20vw;\r\n    max-height: 30vw;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%], div.comment-section[_ngcontent-%COMP%] {\r\n    padding: 1.5em 0;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1) {\r\n    font-weight: bold;\r\n    font-size: 1.8em;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2) {\r\n    padding-top: 10px;\r\n}\r\n\r\ndiv.content-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(3) {\r\n    padding-top: 2em;\r\n    \r\n    text-align: justify;\r\n}\r\n\r\n\r\n\r\ndiv.comment-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\ndiv.user-comment[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\ndiv.comment-section[_ngcontent-%COMP%]   .commenter-picture[_ngcontent-%COMP%]{\r\n    border-radius: 50px;\r\n    max-height: 50px;\r\n    object-fit: contain;\r\n}\r\n\r\ndiv.user-comment[_ngcontent-%COMP%] {\r\n    padding-top: 10px;\r\n}\r\n\r\ndiv.add-comment[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #c7c7c7;\r\n    margin-left: 10px;\r\n    border-radius: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 0 15px;\r\n    transition: all 0.3s ease 0s;\r\n    background: #f5f5f5;\r\n}\r\n\r\ndiv.add-comment[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 2px #000000;\r\n\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    margin-left: 10px;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%]{\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\nmat-icon[_ngcontent-%COMP%]   #submit[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n\r\n#attach-lbl[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\ninput#attach[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\ndiv.add-comment[_ngcontent-%COMP%]   #comment[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    border: 0;\r\n    outline-width: 0;\r\n    width: 100%;\r\n    background:transparent;\r\n    padding: 0 .5em;\r\n    margin: .5em;\r\n    resize: none;\r\n}\r\n\r\ndiv.action-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\ndiv.action-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    outline: 0;\r\n    border: none;\r\n    background: transparent;\r\n}\r\n\r\n\r\n\r\ndiv.others-comment[_ngcontent-%COMP%] {\r\n    padding-top: 3em;\r\n}\r\n\r\ndiv.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\r\n    padding-bottom: 2em;\r\n}\r\n\r\ndiv.others-comment[_ngcontent-%COMP%]   .commenter-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\n.commenter-info[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\ndiv.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    \r\n    margin-bottom: 10px;\r\n}\r\n\r\n.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n    padding-top: 15px;\r\n    text-align: justify;\r\n}\r\n\r\n.others-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n    padding-right: 15px;\r\n}\r\n\r\n.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content[_ngcontent-%COMP%]{\r\n    max-height: 250px;\r\n    object-fit: contain;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-content-vid[_ngcontent-%COMP%]{\r\n    max-height: 150px;\r\n    object-fit: contain;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\r\n    max-width: 250px;\r\n    max-height: 250px;\r\n}\r\n\r\n.others-comment[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-left: 1em ;\r\n    \r\n}\r\n\r\ndiv.others-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\r\n    margin: 2em;\r\n    margin-top: 0;\r\n}\r\n\r\ndiv.others-comment[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n    object-fit: contain;\r\n    height: 250px;\r\n}\r\n\r\n\r\n\r\n.commenter-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.commenter-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    border: 0;\r\n    background: transparent;\r\n    transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.commenter-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\r\n    color: rgb(255, 34, 34);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZOztBQUVoQjs7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUNBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFDSCxlQUFlOztBQUVmLGtCQUFrQjs7QUFFbEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9GQUFvRjtJQUNwRixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUEseUNBQXlDOztBQUV6QztJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGlDQUFpQzs7QUFFckM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUNBLGdDQUFnQzs7QUFDaEM7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUNBLGdCQUFnQjs7QUFFaEI7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUNBQW1DO0FBQ3ZDOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCIiwiZmlsZSI6InByb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIEhFQURFUiBTVEFSVCAqL1xyXG5kaXYuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxuZGl2LmNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAyZW0gMmVtIDA7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXI6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5kaXYuaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbn1cclxuXHJcbmRpdi5oZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDJlbSA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4vKiBkaXYuaGVhZGVyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyZW0gO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjAyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDA7XHJcbn1cclxuZGl2LmhlYWRlciBzcGFue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbSA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSAqL1xyXG4vKiBIRUFERVIgRU5EICovXHJcblxyXG4vKiBDT05URU5UIFNUQVJUICovXHJcblxyXG5kaXYuY29udGVudC1jb250YWluZXIgLmltZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMyZGVnLCByZ2JhKDE1OCwyMDYsMTU0LDAuMykgMCUsIHJnYmEoMjgsODIsODMsLjgpIDEwMCUpO1xyXG4gICAgbWF4LWhlaWdodDogMzB2dztcclxufVxyXG5kaXYuY29udGVudC1jb250YWluZXIgLmltZy1jb250YWluZXIgaW1ne1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG1pbi1oZWlnaHQ6IDIwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMHZ3O1xyXG59XHJcblxyXG5kaXYuY29udGVudC1pbmZvLFxyXG5kaXYuY29tbWVudC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDA7XHJcbn1cclxuZGl2LmNvbnRlbnQtaW5mbyBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5kaXYuY29udGVudC1pbmZvIHA6bnRoLWNoaWxkKDEpIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5kaXYuY29udGVudC1pbmZvIHA6bnRoLWNoaWxkKDIpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5kaXYuY29udGVudC1pbmZvIHA6bnRoLWNoaWxkKDMpIHtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICAvKiBmb250LXNpemU6IDEuMmVtOyAqL1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLyogPT09PT09PT09PUNPTU1FTlQtU0VDVElPTj09PT09PT09PT09ICovXHJcblxyXG5kaXYuY29tbWVudC1zZWN0aW9uIHNwYW46bnRoLWNoaWxkKDEpe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvKiBmb250LXNpemU6IDEuMmVtOyAqL1xyXG59XHJcbmRpdi51c2VyLWNvbW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuZGl2LmNvbW1lbnQtc2VjdGlvbiAuY29tbWVudGVyLXBpY3R1cmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuZGl2LnVzZXItY29tbWVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5kaXYuYWRkLWNvbW1lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5kaXYuYWRkLWNvbW1lbnQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xyXG5cclxufVxyXG5kaXYgbWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxubWF0LWljb257XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5tYXQtaWNvbiAjc3VibWl0e1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuI2F0dGFjaC1sYmx7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbnB1dCNhdHRhY2h7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuZGl2LmFkZC1jb21tZW50ICNjb21tZW50e1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZS13aWR0aDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAgLjVlbTtcclxuICAgIG1hcmdpbjogLjVlbTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuZGl2LmFjdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5kaXYuYWN0aW9uLWNvbnRhaW5lciBpbnB1dHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4vKiA9PT09PT1PVEhFUlMtQ09NTUVOVD09PT09PT0gKi9cclxuZGl2Lm90aGVycy1jb21tZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbn1cclxuZGl2Lm90aGVycy1jb21tZW50IC5jb250ZW50e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxufVxyXG5cclxuZGl2Lm90aGVycy1jb21tZW50IC5jb21tZW50ZXItaW5mbyBzcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNvbW1lbnRlci1pbmZvIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5kaXYub3RoZXJzLWNvbW1lbnQgLmNvbnRlbnQgc3BhbntcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm90aGVycy1jb21tZW50IC5jb250ZW50IC5jb21tZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4ub3RoZXJzLWNvbW1lbnQgLmNvbW1lbnQgLm1lZGlhID4gKiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ub3RoZXJzLWNvbW1lbnQgLmNvbnRlbnQgLmNvbW1lbnQgLm1lZGlhIC5tZWRpYS1jb250ZW50e1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5vdGhlcnMtY29tbWVudCAuY29udGVudCAuY29tbWVudCAubWVkaWEgLm1lZGlhLWNvbnRlbnQtdmlke1xyXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbi5vdGhlcnMtY29tbWVudCAuY29udGVudCAuY29tbWVudCAubWVkaWEge1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcbi5vdGhlcnMtY29tbWVudCAuY29udGVudCAuY29tbWVudCBwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbSA7XHJcbiAgICBcclxufVxyXG5kaXYub3RoZXJzLWNvbW1lbnQgLmNvbW1lbnQgLm1lZGlhIHtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5kaXYub3RoZXJzLWNvbW1lbnQgLmNvbW1lbnQgLm1lZGlhID4gKntcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbi8qIENPTlRFTlQgRU5EICovXHJcblxyXG4uY29tbWVudGVyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uY29tbWVudGVyLWluZm8gbWF0LWljb24gaW5wdXR7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG4uY29tbWVudGVyLWluZm8gbWF0LWljb24gaW5wdXQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDM0LCAzNCk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, DialogContentLoginDialog, DialogContentSignupDialog, disclaimerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentLoginDialog", function() { return DialogContentLoginDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentSignupDialog", function() { return DialogContentSignupDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disclaimerDialog", function() { return disclaimerDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class HomeComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        this.dialog.open(disclaimerDialog);
    }
    openLogin() {
        const dialogRef = this.dialog.open(DialogContentLoginDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    openSignup() {
        const dialogRef = this.dialog.open(DialogContentSignupDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 54, vars: 0, consts: [["id", "home"], ["id", "title"], ["id", "actions"], ["id", "userLogin"], ["mat-button", "", "id", "userLogin-btn", 1, "btn", "btn-primary", 3, "click"], ["id", "userSignup"], ["mat-button", "", "id", "userSignup-btn", 1, "btn", "btn-primary", 3, "click"], [1, "jumbotron", "jumbotron-fluid"], [1, "content"], [1, "img"], ["src", "../../assets/imgs/home.jpg", "alt", ""], [1, "caption"], [1, "display-3"], [1, "lead"], ["id", "bg-contain"], ["id", "bg"], [1, "card-container"], [1, "soap-card"], [1, "card-content", "first"], [1, "img-container"], ["src", "../../assets/imgs/card-1.png", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-content", "second"], ["src", "../../assets/imgs/card-2.jpg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-content", "third"], ["src", "../../assets/imgs/card-3.jpg", "alt", "Card image cap", 1, "card-img-top"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tracking and Monitoring Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() { return ctx.openLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.openSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " This web application project will aid a group of youth leaders as ADMIN in tracking, monitoring, and upgrading several community projects of Brgy. Batia, Bocaue, in the province of Bulacan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " An application that enables various stakeholders to upload relevant and timely digital content that eventually will enhance research databases and search engines. It also also help community leaders to adapt computer technologies that can enhance online project monitoring, audit, review, and data sharing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Our Features: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Publish Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Admins can publish projects related to their baranggay activities and users can interact with the published projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Project Tracker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Admins can monitor the content of published projects, including the comments and files uploaded by users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "24/7 Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Users can contact an admin with regards to a certain project or issues that they can encounter while using the app by using the \"Support\" feature. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#home[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    z-index: 1;\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content:space-between;\r\n    padding: 1em 3em;\r\n    background: rgb(158, 206, 154);\r\n    background: linear-gradient(32deg, rgba(158,206,154,0.3) 0%, rgba(28,82,83,1) 100%);\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-weight: bold;\r\n    font-size: 1.6em;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    padding: .5em 1em;\r\n    text-align: center;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding-left: .8em;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    padding: .5em 2em;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%]   #userLogin-btn[_ngcontent-%COMP%] {\r\n    background: #4990fa;\r\n    border: #4990fa;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%]   #userLogin-btn[_ngcontent-%COMP%]:hover {\r\n    background: #3572ce;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%]   #userSignup-btn[_ngcontent-%COMP%] {\r\n    background: #58B761;\r\n    border: #58B761;\r\n}\r\n\r\n#actions[_ngcontent-%COMP%]   #userSignup-btn[_ngcontent-%COMP%]:hover {\r\n    background: #4a9b52;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#bg-contain[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n#bg-contain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#bg[_ngcontent-%COMP%] {\r\n    \r\n    background-image: url('home-bg.jpg');\r\n    height: 100%;\r\n    background-position: center ;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    opacity: .3;\r\n    object-fit: contain;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.jumbotron[_ngcontent-%COMP%] {\r\n    z-index: 2;\r\n    background: rgba(255, 255, 255, 0.5);\r\n    height: auto;\r\n    width: 60vw;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 55%;\r\n    transform: translate(-50%, -50%);\r\n    margin: auto;\r\n    padding: 0;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: auto;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n    margin-right: 2em;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 250px;\r\n    max-width: 300px;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   h1.display-3[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\n.jumbotron[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%]{\r\n    line-height: 28px;\r\n}\r\n\r\n\r\n\r\n.card-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 2em 0;\r\n    margin: auto;\r\n    background: linear-gradient(32deg, rgba(158,206,154,0.3) 0%, rgba(28,82,83,0.5) 100%);\r\n}\r\n\r\n.card-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 2.1em;\r\n    font-weight: bold;\r\n}\r\n\r\ndiv.soap-card[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 2em auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\ndiv.card-content[_ngcontent-%COMP%] {\r\n    background: #9ece9a;\r\n    width: 300px;\r\n    display: inline;\r\n    padding: 20px;\r\n    box-shadow: #a5a5a5 0 5px 10px;\r\n}\r\n\r\ndiv.card-content[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n    min-height: 250px;\r\n    min-width: 250px;\r\n    overflow: hidden;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%] {\r\n    max-height: 250px;\r\n    max-width: 250px;\r\n    width: auto;\r\n    margin: auto;\r\n    object-fit: contain;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxjQUFjOztBQUNkO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtRkFBbUY7QUFDdkY7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQSxZQUFZOztBQUVaLGFBQWE7O0FBQ2I7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLG9DQUFzRDtJQUN0RCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQSxXQUFXOztBQUVYLG9CQUFvQjs7QUFDcEI7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0Esa0JBQWtCOztBQUdsQjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixxRkFBcUY7QUFDekY7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBOQVYgU1RBUlQgKi9cclxubmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1OCwgMjA2LCAxNTQpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMyZGVnLCByZ2JhKDE1OCwyMDYsMTU0LDAuMykgMCUsIHJnYmEoMjgsODIsODMsMSkgMTAwJSk7XHJcbn1cclxubmF2ICN0aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxubmF2ICNhY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNhY3Rpb25zIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC44ZW07XHJcbn1cclxuI2FjdGlvbnMgLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDJlbTtcclxufVxyXG5cclxuI2FjdGlvbnMgI3VzZXJMb2dpbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzQ5OTBmYTtcclxuICAgIGJvcmRlcjogIzQ5OTBmYTtcclxufVxyXG4jYWN0aW9ucyAjdXNlckxvZ2luLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzU3MmNlO1xyXG59XHJcbiNhY3Rpb25zICN1c2VyU2lnbnVwLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNThCNzYxO1xyXG4gICAgYm9yZGVyOiAjNThCNzYxO1xyXG59XHJcbiNhY3Rpb25zICN1c2VyU2lnbnVwLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGE5YjUyO1xyXG59XHJcbi8qIE5BViBFTkQgKi9cclxuXHJcbi8qIEJHIFNUQVJUICovXHJcbiNiZy1jb250YWluIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuI2JnLWNvbnRhaW4gcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG4jYmcge1xyXG4gICAgLyogaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3FnSEdEYmJTTm04ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9ob21lLWJnLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4vKiBCRyBFTkQgKi9cclxuXHJcbi8qIEpVTUJPVFJPTiBTVEFSVCAqL1xyXG4uanVtYm90cm9uIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTUlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5qdW1ib3Ryb24gLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmp1bWJvdHJvbiAuY29udGVudCAuaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG59XHJcbi5qdW1ib3Ryb24gLmNvbnRlbnQgLmltZyBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5qdW1ib3Ryb24gLmNvbnRlbnQgLmNhcHRpb24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5qdW1ib3Ryb24gLmNvbnRlbnQgLmNhcHRpb24gaDEuZGlzcGxheS0ze1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmp1bWJvdHJvbiAuY29udGVudCAuY2FwdGlvbiBwLmxlYWR7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4vKiBKVU1CT1RST04gRU5EICovXHJcblxyXG5cclxuLmNhcmQtY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyZW0gMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMmRlZywgcmdiYSgxNTgsMjA2LDE1NCwwLjMpIDAlLCByZ2JhKDI4LDgyLDgzLDAuNSkgMTAwJSk7XHJcbn1cclxuLmNhcmQtY29udGFpbmVyIGgye1xyXG4gICAgZm9udC1zaXplOiAyLjFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmRpdi5zb2FwLWNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbmRpdi5jYXJkLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzllY2U5YTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAjYTVhNWE1IDAgNXB4IDEwcHg7XHJcbn1cclxuZGl2LmNhcmQtY29udGVudCAuY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2FyZC1pbWctdG9wIHtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufSJdfQ== */"] });
class DialogContentLoginDialog {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = { username: '', password: '' };
    }
    ngOnInit() { }
    login() {
        console.log(this.user.username);
        console.log(this.user.password);
        this.authService
            .validate(this.user.username, this.user.password)
            .then((response) => {
            if (response['token'] == false && response['user'] == false) {
                window.alert('User is not verified yet! Wait for admin to verify your account');
            }
            else {
                this.authService.setUserInfo(response['token'], response['user']);
                this.router.navigate(['feed']);
            }
        })
            .catch((err) => {
            window.alert('Wrong username/password');
        });
    }
}
DialogContentLoginDialog.ɵfac = function DialogContentLoginDialog_Factory(t) { return new (t || DialogContentLoginDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DialogContentLoginDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentLoginDialog, selectors: [["login"]], decls: 10, vars: 4, consts: [[1, "content"], ["mat-dialog-title", "", "id", "title"], [1, "mat-typography"], [1, "content-container"], ["type", "text", "id", "uname", "placeholder", "Username", 1, "user-input", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "uname", "placeholder", "Password", 1, "user-input", 3, "ngModel", "ngModelChange"], ["mat-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", 3, "mat-dialog-close", "disabled", "click"]], template: function DialogContentLoginDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentLoginDialog_Template_input_ngModelChange_5_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentLoginDialog_Template_input_ngModelChange_7_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentLoginDialog_Template_button_click_8_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("disabled", ctx.user.username == "" || ctx.user.password == "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".content[_ngcontent-%COMP%] {\r\n    color: black;\r\n    width: 20vw;\r\n    height: auto;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]{\r\n    outline: 0;\r\n    border: 1px solid #c7c7c7;\r\n    border-radius: 5px;\r\n    padding: .5em 15px;\r\n    font-size: 1.2em;\r\n    margin: .5em 0;\r\n    width: 100%;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]:hover{\r\n    box-shadow: inset 0 0 2px #000000;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: .5em 4em;\r\n    width: 100%;\r\n    margin-top: .5em;\r\n    letter-spacing: 2px;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #4990fa;\r\n    border: #4990fa;\r\n}\r\n\r\nmat-dialog-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n    background: #3572ce;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxvZ2luLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAyMHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbn1cclxuXHJcbi5jb250ZW50ICN0aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIgLnVzZXItaW5wdXR7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IC41ZW0gMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG4uY29udGVudC1jb250YWluZXIgLnVzZXItaW5wdXQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4ICMwMDAwMDA7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudCBidXR0b24ge1xyXG4gICAgcGFkZGluZzogLjVlbSA0ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbm1hdC1kaWFsb2ctY29udGVudCAuYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICM0OTkwZmE7XHJcbiAgICBib3JkZXI6ICM0OTkwZmE7XHJcbn1cclxubWF0LWRpYWxvZy1jb250ZW50IC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzM1NzJjZTtcclxufSJdfQ== */"] });
/*
export class DialogContentLoginDialog {
  user = { username: '', password: '' };

  constructor(

  ) {}
  ngOnInit(): void {}
  
  login() {

  }
}
*/
class DialogContentSignupDialog {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = { username: '', password: '', name: '', contactNumber: '', address: '', birthday: '', email: '' };
    }
    register() {
        this.authService.register(this.user.username, this.user.password, this.user.name, this.user.contactNumber, this.user.address, this.user.birthday, this.user.email).subscribe((res) => {
            window.alert('Registered! Wait for admin to verify your account before you can login!');
            (errmess) => (this.errMess = errmess);
        }, (err) => {
            console.log(err);
        });
    }
}
DialogContentSignupDialog.ɵfac = function DialogContentSignupDialog_Factory(t) { return new (t || DialogContentSignupDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DialogContentSignupDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentSignupDialog, selectors: [["signup"]], decls: 50, vars: 9, consts: [[1, "content"], ["mat-dialog-title", "", "id", "title"], [1, "mat-typography"], [1, "content-container"], [1, "field-title"], ["type", "text", "id", "fullName", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], [1, "content-container", "single-row"], [1, "row"], ["type", "text", "id", "age", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "contactNum", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "address", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], ["type", "email", "id", "emailAddress", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "uname", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], ["type", "password", "id", "uname", "required", "", 1, "user-input", 3, "ngModel", "ngModelChange"], ["align", "center"], ["mat-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", 3, "mat-dialog-close", "disabled", "click"]], template: function DialogContentSignupDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Full Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_9_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Birthday: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_16_listener($event) { return ctx.user.birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_22_listener($event) { return ctx.user.contactNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_28_listener($event) { return ctx.user.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_34_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_40_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentSignupDialog_Template_input_ngModelChange_46_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-dialog-actions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentSignupDialog_Template_button_click_48_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "SIGN UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.contactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("disabled", ctx.user.name == "" || ctx.user.birthday == "" || ctx.user.contactNumber == "" || ctx.user.address == "" || ctx.user.email == "" || ctx.user.username == "" || ctx.user.password == "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".content[_ngcontent-%COMP%] {\r\n    color: black;\r\n    width: 40vw;\r\n    height: auto;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   #title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]   .field-title[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    padding-left: 7px;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]   .field-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: red;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]{\r\n    outline: 0;\r\n    border: 1px solid #c7c7c7;\r\n    border-radius: 5px;\r\n    padding: .5em 15px;\r\n    font-size: 1.2em;\r\n    margin-bottom: 1em;\r\n    width: 100%;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n\r\n.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]:hover{\r\n    box-shadow: inset 0 0 2px #000000;\r\n}\r\n\r\ndiv.single-row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content:space-around;\r\n\r\n}\r\n\r\ndiv.single-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n}\r\n\r\ndiv.single-row[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(2) {\r\n    margin-left: 5px;\r\n}\r\n\r\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: .5em 4em;\r\n    width: 100%;\r\n    margin-top: .5em;\r\n    letter-spacing: 2px;\r\n}\r\n\r\nmat-dialog-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    background: #58B761;\r\n    border: #58B761;\r\n}\r\n\r\nmat-dialog-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\r\n    background: #4a9b52;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0Qjs7QUFFaEM7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzaWdudXAuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxufVxyXG5cclxuLmNvbnRlbnQgI3RpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyIC5maWVsZC10aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyIC5maWVsZC10aXRsZSBzcGFue1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIgLnVzZXItaW5wdXR7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M3YzdjNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IC41ZW0gMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyIC51c2VyLWlucHV0OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xyXG59XHJcblxyXG5kaXYuc2luZ2xlLXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuXHJcbn1cclxuZGl2LnNpbmdsZS1yb3cgLnJvdyB7XHJcbiAgICB3aWR0aDogNDglO1xyXG59XHJcbmRpdi5zaW5nbGUtcm93IC5yb3c6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xyXG4gICAgcGFkZGluZzogLjVlbSA0ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcbm1hdC1kaWFsb2ctYWN0aW9ucyAuYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICM1OEI3NjE7XHJcbiAgICBib3JkZXI6ICM1OEI3NjE7XHJcbn1cclxubWF0LWRpYWxvZy1hY3Rpb25zIC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzRhOWI1MjtcclxufSJdfQ== */"] });
class disclaimerDialog {
}
disclaimerDialog.ɵfac = function disclaimerDialog_Factory(t) { return new (t || disclaimerDialog)(); };
disclaimerDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: disclaimerDialog, selectors: [["dialog-elements-example-dialog"]], decls: 8, vars: 0, consts: [["id", "content"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "action"], ["mat-button", "", "mat-dialog-close", ""]], template: function disclaimerDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "User Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I am aware that being user in this web application , the web administrators will have access to my personal data in order to provide assistance to my concerns. Therefore, I give consent to them to use my personal data for this web application purposes only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["#content[_ngcontent-%COMP%]{\n      color: #000;\n    }\n\n    .action[_ngcontent-%COMP%] {\n      float: right;\n    }\n    .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n      padding: .5em 4em;\n      width: 100%;\n      margin-top: .5em;\n    }\n    .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n      background: #58B761;\n      outline: none;\n      border: #58B761;\n      color: #ffffff;\n      transition: all 0.3s ease 0s;\n    }\n    .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\n      background: #4a9b52;\n    }"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent, DialogContentReplyDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentReplyDialog", function() { return DialogContentReplyDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/contact.service */ "3ITz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function MessagesComponent_table_5_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_table_5_tr_10_Template_input_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const contact_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.openMessage(contact_r2.name, contact_r2.email, contact_r2.date, contact_r2.content, contact_r2.subject); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessagesComponent_table_5_tr_10_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const contact_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.deleteMessage(contact_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](contact_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, contact_r2.date));
} }
function MessagesComponent_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sender Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Date Received");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MessagesComponent_table_5_tr_10_Template, 11, 4, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.contact$);
} }
class MessagesComponent {
    constructor(dialog, router, authService, contactService) {
        this.dialog = dialog;
        this.router = router;
        this.authService = authService;
        this.contactService = contactService;
    }
    ngOnInit() {
        this.currentUser = this.authService.getUserDetails();
        this.contactService.getMessage().subscribe((contact$) => (this.contact$ = contact$), (errmess) => (this.errMess = errmess));
    }
    openMessage(name, subject, date, content, email) {
        const dialogRef = this.dialog.open(DialogContentReplyDialog, {
            data: {
                name: name,
                date: date,
                content: content,
                subject: subject,
                email: email
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    deleteMessage(contactId) {
        if (window.confirm("Are you sure you want to delete this user?")) {
            this.contactService.deleteContact(contactId).subscribe((res) => {
                this.contactService.getMessage().subscribe((contact$) => (this.contact$ = contact$), (errmess) => (this.errMess = errmess));
            });
        }
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "header"], [1, "table-container"], ["class", "table table-striped table-responsive", 4, "ngIf"], [1, "table", "table-striped", "table-responsive"], [4, "ngFor", "ngForOf"], ["id", "actions"], ["type", "submit", "value", "reply", "id", "reply", 3, "click"], ["type", "submit", "value", "close", "id", "close", 3, "click"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MessagesComponent_table_5_Template, 11, 1, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n}\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    \r\n    border: 1px solid #c7c7c7;\r\n    padding-left: 1em;\r\n    border-radius: 25px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 2px #000000;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   #input-search[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    height: 2.5em;\r\n    width: 100%;\r\n    outline-width: 0;\r\n    background:transparent;\r\n}\r\n\r\n.table-container[_ngcontent-%COMP%] {\r\n    padding-top: 3em;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease 0s;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background-color: #9ece9a;\r\n}\r\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    vertical-align:middle;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin: 0 5px;\r\n    border: 0;\r\n    background: transparent;\r\n    transition: all 0.3s ease-in-out 0s;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#reply[_ngcontent-%COMP%]{\r\n    color: #22aeff;\r\n    background: #e4efff;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#close[_ngcontent-%COMP%]{\r\n    color: #ff2222;\r\n    background: #ffe4e4;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#reply[_ngcontent-%COMP%]:hover{\r\n    color: #e4efff;\r\n    background: #22aeff;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#close[_ngcontent-%COMP%]:hover{\r\n    color: #ffe4e4;\r\n    background: #ff2222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7QUFDYjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVOztJQUVWLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5kaXYuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbmRpdi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuZGl2LmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyIC5zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbmRpdi5oZWFkZXIgLnNlYXJjaCBtYXQtaWNvbntcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyIC5zZWFyY2g6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyIC5zZWFyY2ggI2lucHV0LXNlYXJjaHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmUtd2lkdGg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBUQUJMRSBTVEFSVCAqL1xyXG4udGFibGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAzZW07XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudGJvZHkgdHIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG50Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjZTlhO1xyXG59XHJcbnRib2R5IHRke1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgbWF0LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgaW5wdXR7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxufVxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgaW5wdXQjcmVwbHl7XHJcbiAgICBjb2xvcjogIzIyYWVmZjtcclxuICAgIGJhY2tncm91bmQ6ICNlNGVmZmY7XHJcbn1cclxuLnRhYmxlIHRib2R5ICNhY3Rpb25zIGlucHV0I2Nsb3Nle1xyXG4gICAgY29sb3I6ICNmZjIyMjI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZlNGU0O1xyXG59XHJcbi50YWJsZSB0Ym9keSAjYWN0aW9ucyBpbnB1dCNyZXBseTpob3ZlcntcclxuICAgIGNvbG9yOiAjZTRlZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzIyYWVmZjtcclxufVxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgaW5wdXQjY2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZTRlNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjIyMjI7XHJcbn0iXX0= */"] });
// export class userMessage {
//   constructor(public dialog: MatDialog) {}
// }
class DialogContentReplyDialog {
    constructor(data, contactService) {
        this.data = data;
        this.contactService = contactService;
        this.user = { reply: '' };
    }
    ngOnInit() {
    }
    reply() {
        console.log(this.data.email);
        console.log(this.data.name);
        console.log(this.data.subject);
        console.log(this.user.reply);
        let emailDetail = {
            to: this.data.email,
            subject: `Our admin has replied to your query.`,
            html: `
          
          <div> 
            <h3> From: ${this.data.name} </h3>
            <span> Subject: ${this.data.subject} </span>
            <br>
            <p> Reply: ${this.user.reply} </p>
          </div>
        `
        };
        console.log(emailDetail);
        this.contactService.sendReceipt(emailDetail);
    }
}
DialogContentReplyDialog.ɵfac = function DialogContentReplyDialog_Factory(t) { return new (t || DialogContentReplyDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"])); };
DialogContentReplyDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogContentReplyDialog, selectors: [["message"]], decls: 21, vars: 5, consts: [[1, "content"], [1, "detail"], ["mat-dialog-title", ""], ["id", "user"], ["id", "sender"], [1, "message", "content"], [1, "user-message", "message"], ["cols", "30", "rows", "7", "disabled", "", 1, "user-message", "message"], [1, "reply", "content"], ["placeholder", "Reply...", "cols", "30", "rows", "7", 1, "user-message", 3, "ngModel", "ngModelChange"], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function DialogContentReplyDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Content:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DialogContentReplyDialog_Template_textarea_ngModelChange_18_listener($event) { return ctx.user.reply = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogContentReplyDialog_Template_button_click_19_listener() { return ctx.reply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.reply);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.user.reply == "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], styles: [".content[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n#sender[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n.user-message[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    outline: none;\r\n    padding: .7em 1em;\r\n    border: 1px solid #c7c7c7;\r\n    border-radius: 5px;\r\n    width: 50vw;\r\n    resize: none;\r\n    margin-bottom: 1em;\r\n}\r\n.user-message.message[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(158, 206, 154);\r\n}\r\n\r\n\r\n.reply[_ngcontent-%COMP%]   .user-message[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: .5em 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtY29udGVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztBQUN4QztBQUNBOzs7O0dBSUc7QUFFSDs7O0dBR0c7QUFFSDtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJtZXNzYWdlLWNvbnRlbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5kZXRhaWwgaDIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4jc2VuZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi51c2VyLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAuN2VtIDFlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG4udXNlci1tZXNzYWdlLm1lc3NhZ2V7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTU4LCAyMDYsIDE1NCk7XHJcbn1cclxuLyogLm1lc3NhZ2UgLnVzZXItbWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU4LCAyMDYsIDE1NCwgLjUpO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59ICovXHJcblxyXG4vKiAucmVwbHkgLnVzZXItbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59ICovXHJcblxyXG4ucmVwbHkgLnVzZXItbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IC41ZW0gM2VtO1xyXG59Il19 */"] });


/***/ }),

/***/ "MKys":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.route.navigate(['home']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent, DialogContentNewProjDialog, disclaimerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentNewProjDialog", function() { return DialogContentNewProjDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disclaimerDialog", function() { return disclaimerDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/project.service */ "c3AT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.resetNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project has been created!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " If project is not seen kindly refresh your browser\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.resetNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project has been deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " If project is not deleted kindly refresh your browser\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/dashboard/project/", a1]; };
const _c1 = function () { return { exact: true }; };
function DashboardComponent_tbody_22_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tbody_22_tr_1_Template_input_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const project_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.deleteProject(project_r8._id, ctx_r9.currentUser.user._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r8.authorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, project_r8.uploaded), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r8.comments.length, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, project_r8._id))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
} }
function DashboardComponent_tbody_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_tbody_22_tr_1_Template, 14, 11, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.projects$);
} }
function DialogContentNewProjDialog_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentNewProjDialog_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.resetNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Project has been created!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " If project is not seen kindly refresh your browser ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(dialog, projectService, authService) {
        this.dialog = dialog;
        this.projectService = projectService;
        this.authService = authService;
    }
    ngOnInit() {
        this.currentUser = this.authService.getUserDetails();
        this.projectService.getProjects().subscribe((projects$) => (this.projects$ = projects$));
    }
    resetNotifications() {
        this.commentSuccess = false;
        this.commentDeleted = false;
    }
    deleteProject(projId, author) {
        if (window.confirm("Are you sure you want to delete your project?")) {
            this.projectService.deleteProject(projId, this.currentUser.user._id).subscribe((res) => {
                this.projectService.getProjects().subscribe((projects$) => (this.projects$ = projects$));
                this.commentDeleted = true;
                (errmess) => (this.errMess = errmess);
            }, (err) => {
                console.log(err);
            });
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogContentNewProjDialog);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 23, vars: 3, consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", "style", "padding: 8px; position: fixed; width: 100%;", 4, "ngIf"], ["class", "alert alert-warning alert-dismissible fade show", "role", "alert", "style", "padding: 8px; position: fixed; width: 100%;", 4, "ngIf"], [1, "container"], [1, "header"], ["id", "newProj"], ["mat-button", "", "id", "newProj-btn", 1, "btn", "btn-primary", 3, "click"], [1, "table", "table-striped", "table-responsive"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "padding", "8px", "position", "fixed", "width", "100%"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 2, "margin-right", "5px", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 1, "alert", "alert-warning", "alert-dismissible", "fade", "show", 2, "padding", "8px", "position", "fixed", "width", "100%"], [4, "ngFor", "ngForOf"], ["id", "actions"], ["routerLinkActive", "active", "type", "submit", "value", "edit", "id", "edit", 3, "routerLink", "routerLinkActiveOptions"], ["type", "submit", "value", "close", "id", "close", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_7_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date Posted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_tbody_22_Template, 2, 1, "tbody", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentDeleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\ndiv#newProj[_ngcontent-%COMP%] {\r\n    padding: 3em 0;\r\n    float: right;\r\n}\r\nbutton#newProj-btn[_ngcontent-%COMP%]{\r\n    margin-right: 2em;\r\n    padding: .5em 2em;\r\n}\r\n\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n    background:transparent;\r\n}\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    \r\n    border: 1px solid #c7c7c7;\r\n    padding-left: 1em;\r\n    border-radius: 25px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 2px #000000;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   #input-search[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    height: 2.5em;\r\n    width: 100%;\r\n    outline-width: 0;\r\n    background:transparent;\r\n}\r\n\r\n\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease 0s;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(158, 206, 154);\r\n}\r\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    vertical-align:middle;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    margin-right: 5px;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    background: transparent;\r\n    transition: all 0.3s ease-in-out 0s;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#edit[_ngcontent-%COMP%]{\r\n    color: #22aeff;\r\n    background: #e4efff;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#close[_ngcontent-%COMP%]{\r\n    color: #ff2222;\r\n    background: #ffe4e4;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#edit[_ngcontent-%COMP%]:hover{\r\n    color: #e4efff;\r\n    background: #22aeff;\r\n}\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   #actions[_ngcontent-%COMP%]   input#close[_ngcontent-%COMP%]:hover{\r\n    color: #ffe4e4;\r\n    background: #ff2222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7QUFDQSxvQkFBb0I7QUFDcEI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBLG9CQUFvQjtBQUVwQixpQkFBaUI7QUFDakI7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsU0FBUztBQUNiO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7O0lBRVYseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7QUFDQSxlQUFlO0FBRWYsZ0JBQWdCO0FBQ2hCO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBLGNBQWM7QUFDZDs7Ozs7Ozs7O0dBU0ciLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi8qIE5FVyBQUk9KIEJVVFRPTiAqL1xyXG5kaXYjbmV3UHJvaiB7XHJcbiAgICBwYWRkaW5nOiAzZW0gMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5idXR0b24jbmV3UHJvai1idG57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIHBhZGRpbmc6IC41ZW0gMmVtO1xyXG59XHJcbi8qIE5FVyBQUk9KIEJVVFRPTiAqL1xyXG5cclxuLyogSEVBREVSIFNUQVJUICovXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbmRpdi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuZGl2LmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyIC5zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbmRpdi5oZWFkZXIgLnNlYXJjaCBtYXQtaWNvbntcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyIC5zZWFyY2g6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAjMDAwMDAwO1xyXG59XHJcblxyXG5kaXYuaGVhZGVyIC5zZWFyY2ggI2lucHV0LXNlYXJjaHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmUtd2lkdGg6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG59XHJcbi8qIEhFQURFUiBFTkQgKi9cclxuXHJcbi8qIFRBQkxFIFNUQVJUICovXHJcbnRib2R5IHRyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxudGJvZHkgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OCwgMjA2LCAxNTQpO1xyXG59XHJcbnRib2R5IHRke1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgbWF0LWljb257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgaW5wdXR7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi50YWJsZSB0Ym9keSAjYWN0aW9ucyBpbnB1dCNlZGl0e1xyXG4gICAgY29sb3I6ICMyMmFlZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlZmZmO1xyXG59XHJcbi50YWJsZSB0Ym9keSAjYWN0aW9ucyBpbnB1dCNjbG9zZXtcclxuICAgIGNvbG9yOiAjZmYyMjIyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZTRlNDtcclxufVxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgaW5wdXQjZWRpdDpob3ZlcntcclxuICAgIGNvbG9yOiAjZTRlZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzIyYWVmZjtcclxufVxyXG4udGFibGUgdGJvZHkgI2FjdGlvbnMgaW5wdXQjY2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZTRlNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjIyMjI7XHJcbn1cclxuLyogVEFCTEUgRU5EICovXHJcbi8qIFxyXG4jYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9mYXJtLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBvcGFjaXR5OiAuMztcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn0gKi8iXX0= */"] });
class DialogContentNewProjDialog {
    constructor(authService, router, projectService) {
        this.authService = authService;
        this.router = router;
        this.projectService = projectService;
        this.data = { name: '', description: '', file: File = null };
    }
    ngOnInit() {
        this.currentUser = this.authService.getUserDetails();
    }
    resetNotifications() {
        this.commentSuccess = false;
        this.commentDeleted = false;
    }
    //
    addProject() {
        console.log(this.data.name);
        console.log(this.data.description);
        console.log(this.data.file);
        this.projectService.addProject(this.data.name, this.data.description, this.currentUser.user._id, this.data.file).subscribe((res) => {
            (errmess) => (this.errMess = errmess);
        }, (err) => {
            console.log(err);
        });
    }
    onFileChange(files) {
        this.data.file = files[0];
        console.log(this.data.file);
        window.alert('File uploaded!');
    }
}
DialogContentNewProjDialog.ɵfac = function DialogContentNewProjDialog_Factory(t) { return new (t || DialogContentNewProjDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
DialogContentNewProjDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentNewProjDialog, selectors: [["form"]], decls: 25, vars: 5, consts: [["class", "alert alert-success alert-dismissible fade show", "role", "alert", "style", "padding: 8px; position: fixed; width: 100%;", 4, "ngIf"], [1, "content"], ["mat-dialog-title", ""], [1, "mat-typography"], [1, "content-container"], [1, "title"], ["type", "text", "id", "proj-title", "placeholder", "Project title", 1, "user-input", 3, "ngModel", "ngModelChange"], ["name", "", "id", "desc", "cols", "30", "rows", "5", "placeholder", "Project description", 1, "user-input", 3, "ngModel", "ngModelChange"], ["id", "attach-container"], ["type", "file", 3, "ngModel", "change", "ngModelChange"], ["align", "end"], ["mat-button", "", "id", "cancel", "mat-dialog-close", "", 1, "btn", "btn-primary"], ["mat-button", "", "cdkFocusInitial", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show", 2, "padding", "8px", "position", "fixed", "width", "100%"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close", 2, "margin-right", "5px", 3, "click"], ["aria-hidden", "true"]], template: function DialogContentNewProjDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DialogContentNewProjDialog_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*Please fill up all fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*Only upload images for new projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Project Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentNewProjDialog_Template_input_ngModelChange_12_listener($event) { return ctx.data.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DialogContentNewProjDialog_Template_textarea_ngModelChange_16_listener($event) { return ctx.data.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DialogContentNewProjDialog_Template_input_change_19_listener($event) { return ctx.onFileChange($event.target.files); })("ngModelChange", function DialogContentNewProjDialog_Template_input_ngModelChange_19_listener($event) { return ctx.data.file = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogContentNewProjDialog_Template_button_click_23_listener() { return ctx.addProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.data.name == "" || ctx.data.description == "" || ctx.data.file.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".content[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    letter-spacing: 3px;\r\n    text-align: center;\r\n}\r\n.content-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    padding: 0;\r\n}\r\n.content-container[_ngcontent-%COMP%] {\r\n    padding: 2em 1em;\r\n}\r\n.content-container[_ngcontent-%COMP%]   #desc[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n    overflow-wrap: break-word;\r\n    overflow: auto;\r\n}\r\n.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 1.3em ;\r\n    outline: 0;\r\n    padding: .5em .5em;\r\n    border: 1px solid #474747;\r\n    border-radius: 5px;\r\n    resize: none;\r\n}\r\ndiv#attach-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    \r\n    color: #fff;\r\n    padding: .8em 1em;\r\n    background: #0d6efd;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease 0s;\r\n    border: 1px solid #c7c7c7;\r\n\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 2px #000000;\r\n\r\n}\r\n.btn#cancel[_ngcontent-%COMP%] {\r\n    background: #a12a2a;\r\n    border:#a12a2a 1px solid ;\r\n    margin-right: 15px;\r\n}\r\n.btn#cancel[_ngcontent-%COMP%]:hover {\r\n    background: #852424;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7Ozt3QkFHb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1Qix5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSSxpQ0FBaUM7O0FBRXJDO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImZvcm0uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5jb250ZW50IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMmVtIDFlbTtcclxufVxyXG4uY29udGVudC1jb250YWluZXIgI2Rlc2Mge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciAudXNlci1pbnB1dHtcclxuICAgIC8qIG9wYWNpdHk6IC41OyAqL1xyXG4gICAgZm9udC1zaXplOiAxLjNlbSA7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZzogLjVlbSAuNWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ3NDc0NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5kaXYjYXR0YWNoLWNvbnRhaW5lciBpbnB1dHtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC44ZW0gMWVtO1xyXG4gICAgYmFja2dyb3VuZDogIzBkNmVmZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5kaXYuY29udGVudC1jb250YWluZXIgLnVzZXItaW5wdXQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcblxyXG59XHJcbmRpdi5jb250ZW50LWNvbnRhaW5lciAudXNlci1pbnB1dDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4ICMwMDAwMDA7XHJcblxyXG59XHJcblxyXG4uYnRuI2NhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTEyYTJhO1xyXG4gICAgYm9yZGVyOiNhMTJhMmEgMXB4IHNvbGlkIDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uYnRuI2NhbmNlbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODUyNDI0O1xyXG59Il19 */"] });
class disclaimerDialog {
}
disclaimerDialog.ɵfac = function disclaimerDialog_Factory(t) { return new (t || disclaimerDialog)(); };
disclaimerDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: disclaimerDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function disclaimerDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "I am aware that being user in this web application , the web administrators will have access to my personal data in order to provide assistance to my concerns. Therefore, I give consent to them to use my personal data for this web application purposes only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Okay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService, titleService) {
        this.authService = authService;
        this.titleService = titleService;
        this.title = 'BrgyBatia';
    }
    ngOnInit() {
        this.authenticated = this.authService.isAuthenticated();
        this.titleService.setTitle(this.title);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 3, consts: [[1, "main-container"], ["class", "sidebar", 4, "ngIf"], ["class", "router-outlet", 4, "ngIf"], ["class", "router-outlet", "style", "width: 100%!important; margin-left: 0!important;", 4, "ngIf"], [1, "sidebar"], [1, "router-outlet"], [1, "router-outlet", 2, "width", "100%!important", "margin-left", "0!important"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.sidebar[_ngcontent-%COMP%] {\r\n    overflow: auto;\r\n    position: fixed;\r\n    width: 20%;\r\n    height: 100vh;\r\n    margin: 0;\r\n    background-color: #FFFFFF;\r\n    border-right: 3px solid #F5F2F2;\r\n}\r\n.router-outlet[_ngcontent-%COMP%] {\r\n    margin-left: 20%;\r\n    width: 80%;\r\n    height: 100%;\r\n    background-color: #FDFDFD;\r\n    \r\n    background-image:url('bg-farm.jpg');\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: center ;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    object-fit: contain;\r\n    \r\n}\r\n .mat-dialog-container {\r\n    background: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtJQUN6QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpRUFBaUU7SUFDakUsbUNBQWtEO0lBQ2xELFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnNpZGViYXIge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjRjVGMkYyO1xyXG59XHJcbi5yb3V0ZXItb3V0bGV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkRGRDtcclxuICAgIC8qIGh0dHBzOi8vYWsucGljZG4ubmV0L3NodXR0ZXJzdG9jay92aWRlb3MvMzY0NjA3My90aHVtYi8xLmpwZyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIuLi9hc3NldHMvaW1ncy9iZy1mYXJtLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBcclxufVxyXG46Om5nLWRlZXAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProfileComponent_div_0_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProfileComponent_div_0_p_14_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProfileComponent_div_0_p_15_Template, 2, 0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Birthday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.user.admin == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentUser.user.admin == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.user.contactNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 7, ctx_r0.currentUser.user.birthday));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.currentUser.user.address);
} }
class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        console.log('profile init');
        this.currentUser = this.authService.getUserDetails();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "header"], [1, "row", "container", "d-flex", "justify-content-center", "align-items-center", 2, "height", "70%"], [1, "col-xl-12", "col-md-12"], [1, "card", "user-card-full"], [1, "row", "m-l-0", "m-r-0"], [1, "col-sm-4", "bg-c-lite-green", "user-profile"], [1, "card-block", "text-center", "text-white"], [1, "m-b-25"], ["src", "https://img.icons8.com/bubbles/100/000000/user.png", "alt", "User-Profile-Image", 1, "img-radius"], [1, "f-w-600"], [4, "ngIf"], [1, "mdi", "mdi-square-edit-outline", "feather", "icon-edit", "m-t-10", "f-16"], [1, "col-sm-8"], [1, "card-block"], [1, "m-b-20", "p-b-5", "b-b-default", "f-w-600"], [1, "row"], [1, "col-sm-6"], [1, "m-b-10", "f-w-600"], [1, "text-muted", "f-w-400"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 43, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\n\r\n\r\ndiv.row.container[_ngcontent-%COMP%] { \r\n    padding: 5em 0;\r\n\r\n}\r\n.user-card-full[_ngcontent-%COMP%] {\r\n    overflow: hidden\r\n}\r\n#page-content[_ngcontent-%COMP%] {\r\n    height: 90%;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);\r\n    border: none;\r\n    margin-bottom: 30px\r\n}\r\n.m-r-0[_ngcontent-%COMP%] {\r\n    margin-right: 0px\r\n}\r\n.m-l-0[_ngcontent-%COMP%] {\r\n    margin-left: 0px\r\n}\r\n.user-card-full[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\r\n    border-radius: 5px 0 0 5px\r\n}\r\n.bg-c-lite-green[_ngcontent-%COMP%] {\r\n    background: rgb(158, 206, 154);\r\n    background: linear-gradient(32deg, rgba(158,206,154,1) 0%, rgba(28,82,83,.8) 100%);\r\n}\r\n.user-profile[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n.card-block[_ngcontent-%COMP%] {\r\n    padding: 1.25rem\r\n}\r\n.m-b-25[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px\r\n}\r\n.img-radius[_ngcontent-%COMP%] {\r\n    border-radius: 5px\r\n}\r\nh6[_ngcontent-%COMP%] {\r\n    font-size: 14px\r\n}\r\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 25px\r\n}\r\n@media only screen and (min-width: 1400px) {\r\n    p[_ngcontent-%COMP%] {\r\n        font-size: 14px\r\n    }\r\n}\r\n.card-block[_ngcontent-%COMP%] {\r\n    padding: 1.25rem\r\n}\r\n.b-b-default[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #e0e0e0\r\n}\r\n.m-b-20[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px\r\n}\r\n.p-b-5[_ngcontent-%COMP%] {\r\n    padding-bottom: 5px !important\r\n}\r\n.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 25px\r\n}\r\n.m-b-10[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px\r\n}\r\n.text-muted[_ngcontent-%COMP%] {\r\n    color: #919aa3 !important\r\n}\r\n.b-b-default[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #e0e0e0\r\n}\r\n.f-w-600[_ngcontent-%COMP%] {\r\n    font-weight: 600\r\n}\r\n.m-b-20[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px\r\n}\r\n.m-t-40[_ngcontent-%COMP%] {\r\n    margin-top: 20px\r\n}\r\n.p-b-5[_ngcontent-%COMP%] {\r\n    padding-bottom: 5px !important\r\n}\r\n.m-b-10[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px\r\n}\r\n.m-t-40[_ngcontent-%COMP%] {\r\n    margin-top: 20px\r\n}\r\n.user-card-full[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block\r\n}\r\n.user-card-full[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    margin: 0 10px 0 0;\r\n    transition: all 0.3s ease-in-out\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7QUFDYjtBQUNBLGVBQWU7QUFFZix1QkFBdUI7QUFDdkI7SUFDSSxjQUFjOztBQUVsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFFbEIsZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWjtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsa0ZBQWtGO0FBQ3RGO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUVsQjtBQUNKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogSEVBREVSIFNUQVJUICovXHJcbmRpdi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuZGl2LmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi8qIEhFQURFUiBFTkQgKi9cclxuXHJcbi8qIFBST0ZJTEUgSU5GTyBTVEFSVCAqL1xyXG5kaXYucm93LmNvbnRhaW5lciB7IFxyXG4gICAgcGFkZGluZzogNWVtIDA7XHJcblxyXG59XHJcbi51c2VyLWNhcmQtZnVsbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuI3BhZ2UtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4uY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDIwcHggMCByZ2JhKDY5LCA5MCwgMTAwLCAwLjA4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDIwcHggMCByZ2JhKDY5LCA5MCwgMTAwLCAwLjA4KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHhcclxufVxyXG5cclxuLm0tci0wIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4XHJcbn1cclxuXHJcbi5tLWwtMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4XHJcbn1cclxuXHJcbi51c2VyLWNhcmQtZnVsbCAudXNlci1wcm9maWxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4XHJcbn1cclxuXHJcbi5iZy1jLWxpdGUtZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1OCwgMjA2LCAxNTQpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMyZGVnLCByZ2JhKDE1OCwyMDYsMTU0LDEpIDAlLCByZ2JhKDI4LDgyLDgzLC44KSAxMDAlKTtcclxufVxyXG5cclxuLnVzZXItcHJvZmlsZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW1cclxufVxyXG5cclxuLm0tYi0yNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4XHJcbn1cclxuXHJcbi5pbWctcmFkaXVzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG59XHJcblxyXG5oNiB7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYmxvY2sgcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweFxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW1cclxufVxyXG5cclxuLmItYi1kZWZhdWx0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwXHJcbn1cclxuXHJcbi5tLWItMjAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG4ucC1iLTUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWJsb2NrIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHhcclxufVxyXG5cclxuLm0tYi0xMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjOTE5YWEzICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmItYi1kZWZhdWx0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwXHJcbn1cclxuXHJcbi5mLXctNjAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxufVxyXG5cclxuLm0tYi0yMCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbn1cclxuXHJcbi5tLXQtNDAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweFxyXG59XHJcblxyXG4ucC1iLTUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5tLWItMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4ubS10LTQwIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHhcclxufVxyXG5cclxuLnVzZXItY2FyZC1mdWxsIC5zb2NpYWwtbGluayBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxufVxyXG5cclxuLnVzZXItY2FyZC1mdWxsIC5zb2NpYWwtbGluayBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dFxyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "47Jg");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed/feed.component */ "eVva");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "6AOp");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "sG/L");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-project/admin-project.component */ "1ZKI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/support.component */ "zdD4");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
        _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_11__["AdminProjectComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DialogContentNewProjDialog"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["DialogContentLoginDialog"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["DialogContentSignupDialog"],
        _users_users_component__WEBPACK_IMPORTED_MODULE_13__["UsersComponent"],
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["DialogLogoutDialog"],
        _support_support_component__WEBPACK_IMPORTED_MODULE_18__["SupportComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["DialogContentReplyDialog"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["disclaimerDialog"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggleModule"]] }); })();


/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "lUK6");





const apiUrl = '/projects'; //api url from backend service
class ProjectService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        this.headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
    }
    updateProjectVideo(id, value) {
        let data = JSON.stringify({
            "videos": value,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    updateProjectAudio(id, value) {
        let data = JSON.stringify({
            "audio": value,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    updateProjectImage(id, value) {
        let data = JSON.stringify({
            "images": value,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    updateProjectText(id, value) {
        let data = JSON.stringify({
            "textFiles": value,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    editProject(id, name, description) {
        let data = JSON.stringify({
            "name": name,
            "description": description,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    getProjects() {
        return this.http
            .get(apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    getProject(id) {
        return this.http
            .get(apiUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    deleteComment(commentId, userId, projectId) {
        let data = JSON.stringify({
            "_id": userId,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', apiUrl + '/' + projectId + '/comments/' + commentId, data, options);
        return this.http.request(req);
    }
    getProjectIds() {
        return this.getProjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((projects) => projects.map((projects) => projects._id)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => error));
    }
    addComment(id, comment, author, file) {
        const formData = new FormData();
        console.log(typeof id);
        console.log(typeof comment);
        console.log(typeof author);
        console.log(typeof file);
        if (!file) {
            formData.append('comment', comment);
            formData.append('author', author);
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: 'bearer ' + sessionStorage.getItem('token'),
            });
            const options = {
                params,
                reportProgress: true,
                headers: header,
            };
            const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', apiUrl + '/' + id + '/comments', formData, options);
            return this.http.request(req);
        }
        else {
            formData.append('fileName', file);
            formData.append('comment', comment);
            formData.append('author', author);
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                Authorization: 'bearer ' + sessionStorage.getItem('token'),
            });
            const options = {
                params,
                reportProgress: true,
                headers: header,
            };
            const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', apiUrl + '/' + id + '/comments', formData, options);
            return this.http.request(req);
        }
    }
    deleteProject(id, author) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: 'bearer ' + sessionStorage.getItem('token'),
        });
        const options = {
            params,
            reportProgress: true,
            headers: header,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', apiUrl + '/' + id, options);
        return this.http.request(req);
    }
    addProject(name, description, author, file) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('fileName', file);
        formData.append('name', name);
        formData.append('author', author);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: 'bearer ' + sessionStorage.getItem('token'),
        });
        const options = {
            params,
            reportProgress: true,
            headers: header,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', apiUrl, formData, options);
        return this.http.request(req);
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "eVva":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/project.service */ "c3AT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function (a1) { return ["/feed/project", a1]; };
const _c1 = function () { return { exact: true }; };
function FeedComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, project_r2._id))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r2.fileName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", project_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("By ", project_r2.authorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, project_r2.uploaded), " ");
} }
function FeedComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedComponent_div_4_div_1_Template, 12, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects$);
} }
class FeedComponent {
    constructor(projectService, authService, router) {
        this.projectService = projectService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.projectService.getProjects().subscribe((projects$) => (this.projects$ = projects$), (errmess) => (this.errMess = errmess));
        this.authenticated = this.authService.isAuthenticated();
        if (!localStorage.getItem('foo')) {
            localStorage.setItem('foo', 'no reload');
            location.reload();
        }
        else {
            localStorage.removeItem('foo');
        }
    }
    reloadComponent() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "header"], ["class", "content-container", 4, "ngIf"], [1, "content-container"], ["class", "frame", 4, "ngFor", "ngForOf"], [1, "frame"], ["routerLinkActive", "active", 1, "feed-content", 3, "routerLink", "routerLinkActiveOptions"], [1, "feed-img"], [3, "src", "alt"], [1, "details"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\ndiv.container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n\r\n}\r\ndiv.container[_ngcontent-%COMP%]::after {\r\n    opacity: 0.3;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    \r\n    border: 1px solid #c7c7c7;\r\n    padding: 0 1em;\r\n    border-radius: 25px;\r\n    transition: all 0.3s ease 0s;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 2px #000000;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   #input-search[_ngcontent-%COMP%]{\r\n    border: 0;\r\n    height: 2.5em;\r\n    width: 100%;\r\n    outline-width: 0;\r\n    background:transparent;\r\n}\r\n\r\n\r\ndiv.content-container[_ngcontent-%COMP%] {\r\n    padding-top: 3em;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 33.33% 33.33% 33.33%;\r\n}\r\ndiv.frame[_ngcontent-%COMP%] {\r\n    background: #9ece9a;\r\n    margin: 2em;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease 0s;\r\n}\r\ndiv.frame[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.03);\r\n    box-shadow: #a5a5a5 0 5px 10px;\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .feed-img[_ngcontent-%COMP%]{\r\n    background: rgb(158, 206, 154);\r\n    overflow: hidden;\r\n    max-height: 18vw;\r\n    height: 18vw;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .feed-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    height: 100%;\r\n    margin: auto;\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .feed-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease 0s;\r\n}\r\ndiv.frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    transform: scale(1.3)\r\n}\r\ndiv.frame[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: scale(1.1);\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    margin: 0 auto;\r\n    margin-bottom: 1em;\r\n    padding: 1em 0;\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\ndiv.content-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-bottom: 5px;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    z-index: -1;\r\n    background: #000;\r\n    \r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: center ;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    opacity: .3;\r\n    object-fit: contain;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7QUFDYjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVOztJQUVWLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0EsZUFBZTtBQUVmLGtCQUFrQjtBQUNsQjtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYiwyQ0FBMkM7QUFDL0M7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNERBQTREO0lBQzVELFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJmZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxufVxyXG5kaXYuY29udGFpbmVyOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi8qIEhFQURFUiBTVEFSVCAqL1xyXG5kaXYuaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMCAyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMi41ZW07XHJcbn1cclxuXHJcbmRpdi5oZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDJlbSA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMDJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuZGl2LmhlYWRlciAuc2VhcmNoe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5kaXYuaGVhZGVyIC5zZWFyY2ggbWF0LWljb257XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuZGl2LmhlYWRlciAuc2VhcmNoOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggIzAwMDAwMDtcclxufVxyXG5cclxuZGl2LmhlYWRlciAuc2VhcmNoICNpbnB1dC1zZWFyY2h7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IDIuNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwO1xyXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxufVxyXG4vKiBIRUFERVIgRU5EICovXHJcblxyXG4vKiBDT05URU5UIFNUQVJUICovXHJcbmRpdi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogM2VtO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzLjMzJSAzMy4zMyUgMzMuMzMlO1xyXG59XHJcblxyXG5kaXYuZnJhbWUge1xyXG4gICAgYmFja2dyb3VuZDogIzllY2U5YTtcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5kaXYuZnJhbWU6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcclxuICAgIGJveC1zaGFkb3c6ICNhNWE1YTUgMCA1cHggMTBweDtcclxufVxyXG5kaXYuY29udGVudC1jb250YWluZXIgLmZlZWQtaW1ne1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1OCwgMjA2LCAxNTQpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1heC1oZWlnaHQ6IDE4dnc7XHJcbiAgICBoZWlnaHQ6IDE4dnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5kaXYuY29udGVudC1jb250YWluZXIgLmZlZWQtaW1nIGltZ3tcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbmRpdi5jb250ZW50LWNvbnRhaW5lciAuZmVlZC1pbWcgaW1nIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuZGl2LmZyYW1lIGltZ3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKVxyXG59XHJcbmRpdi5mcmFtZTpob3ZlciBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuZGl2LmNvbnRlbnQtY29udGFpbmVyIC5kZXRhaWxzIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG59XHJcbmRpdi5jb250ZW50LWNvbnRhaW5lciAuZGV0YWlscyBzcGFue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuZGl2LmNvbnRlbnQtY29udGFpbmVyIC5kZXRhaWxzIHB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIENPTlRFTlQgRU5EICovXHJcbi5iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy1mYXJtLmpwZ1wiKTsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogLjM7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG59Il19 */"] });


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-httpmsg.service */ "lUK6");





const apiUrl = '/users'; //api url from backend service
class AuthService {
    constructor(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        this.headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
    }
    getUserDetails() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        return user;
    }
    getUsers() {
        return this.http
            .get(apiUrl, { headers: this.headersWithAuth })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.processHTTPMsgService.handleError));
    }
    sendVerificationEmail(email) {
        let data = JSON.stringify({
            "to": email,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', apiUrl + '/userVerification', data, options);
        return this.http.request(req);
    }
    updateVerification(id, status) {
        let data = JSON.stringify({
            "verified": status,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    updateAdminStatus(id, status) {
        let data = JSON.stringify({
            "admin": status,
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let headersWithAuth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: headersWithAuth,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('PUT', apiUrl + '/' + id, data, options);
        return this.http.request(req);
    }
    isAuthenticated() {
        let token = sessionStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    }
    setUserInfo(token, user) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
    }
    validate(username, password) {
        return this.http
            .post('/users/login', {
            username: username,
            password: password,
        })
            .toPromise();
    }
    deleteUser(userId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            Authorization: 'bearer ' + sessionStorage.getItem('token'),
        });
        const options = {
            params,
            reportProgress: true,
            headers: header,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('DELETE', apiUrl + '/' + userId, options);
        return this.http.request(req);
    }
    register(username, password, name, contactNumber, address, birthday, email) {
        console.log(username);
        console.log(password);
        console.log(name);
        console.log(contactNumber);
        console.log(birthday);
        console.log(email);
        let data = JSON.stringify({
            "username": username,
            "password": password,
            "name": name,
            "contactNumber": contactNumber,
            "address": address,
            "birthday": birthday,
            "email": email,
            "admin": false,
            "verified": false
        });
        console.log(data);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
        let myHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            //'Authorization': 'bearer ' + sessionStorage.getItem('token')
        });
        const options = {
            params,
            reportProgress: true,
            headers: myHeaders,
        };
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', apiUrl + '/signup', data, options);
        return this.http.request(req);
    }
    clear() {
        sessionStorage.clear();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_process_httpmsg_service__WEBPACK_IMPORTED_MODULE_3__["ProcessHTTPMsgService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lUK6":
/*!*****************************************************!*\
  !*** ./src/app/services/process-httpmsg.service.ts ***!
  \*****************************************************/
/*! exports provided: ProcessHTTPMsgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHTTPMsgService", function() { return ProcessHTTPMsgService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProcessHTTPMsgService {
    constructor() { }
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message;
        }
        else {
            errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
ProcessHTTPMsgService.ɵfac = function ProcessHTTPMsgService_Factory(t) { return new (t || ProcessHTTPMsgService)(); };
ProcessHTTPMsgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProcessHTTPMsgService, factory: ProcessHTTPMsgService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oYre":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function UsersComponent_table_4_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_table_4_tr_18_Template_mat_slide_toggle_ngModelChange_10_listener($event) { const user_r2 = ctx.$implicit; return user_r2.admin = $event; })("change", function UsersComponent_table_4_tr_18_Template_mat_slide_toggle_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.updateAdminStatus(user_r2._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slide-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersComponent_table_4_tr_18_Template_mat_slide_toggle_ngModelChange_12_listener($event) { const user_r2 = ctx.$implicit; return user_r2.verified = $event; })("change", function UsersComponent_table_4_tr_18_Template_mat_slide_toggle_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.updateVerificationStatus(user_r2.email, user_r2._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_table_4_tr_18_Template_mat_icon_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r2 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteUser(user_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r2.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", user_r2.verified);
} }
function UsersComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Birthday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsersComponent_table_4_tr_18_Template, 16, 6, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.users$);
} }
class UsersComponent {
    //user = {verified:''}
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.getUsers().subscribe((users$) => (this.users$ = users$), (errmess) => (this.errMess = errmess));
        this.currentUser = this.authService.getUserDetails();
    }
    updateVerificationStatus(email, id, value) {
        console.log(email);
        if (window.confirm("Change verification status of user?")) {
            if (value.checked == true) {
                window.alert("User is now verified!");
                this.authService.updateVerification(id, value.checked).subscribe((res) => {
                    console.log(email);
                    this.authService.sendVerificationEmail(email).subscribe((res) => { });
                    console.log('verified!');
                });
            }
            if (value.checked == false) {
                window.alert("User is not verified!");
                this.authService.updateVerification(id, value.checked).subscribe((res) => {
                    console.log('not verified!');
                });
            }
        }
    }
    updateAdminStatus(id, value) {
        if (window.confirm("Change admin status of user?")) {
            if (value.checked == true) {
                window.alert("User is now an Admin!");
                this.authService.updateAdminStatus(id, value.checked).subscribe((res) => {
                    console.log('verified!');
                });
            }
            if (value.checked == false) {
                window.alert("User is now a Member!");
                this.authService.updateAdminStatus(id, value.checked).subscribe((res) => {
                    console.log('not verified!');
                });
            }
        }
    }
    deleteUser(userId) {
        if (window.confirm("Are you sure you want to delete this user?")) {
            this.authService.deleteUser(userId).subscribe((res) => {
                this.authService.getUsers().subscribe((users$) => (this.users$ = users$), (errmess) => (this.errMess = errmess));
            });
        }
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "header"], ["class", "table table-striped table-responsive", 4, "ngIf"], [1, "table", "table-striped", "table-responsive"], [4, "ngFor", "ngForOf"], ["color", "primary", 3, "ngModel", "ngModelChange", "change"], [3, "click"], ["type", "submit", "value", "close", "id", "close"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_table_4_Template, 19, 1, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.users$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n}\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding-top: 1.8em;\r\n    margin: auto;\r\n}\r\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\r\n    background-color: green !important;\r\n}\r\n.mat-slide-toggle-bar[_ngcontent-%COMP%], .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\r\n    transition: all 80ms linear;\r\n    transition-property: background-color;\r\n    transition-delay: 50ms;\r\n}\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\n\r\n\r\ntable.table[_ngcontent-%COMP%] {\r\n    margin-top: 3em ;\r\n}\r\ntable.table[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.table[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\r\n    color: #bd2d2d;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    transition: all 0.3s ease 0s;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n    background-color: #9ece9a;\r\n}\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   #close[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    background: transparent;\r\n    color: #df4949;\r\n    background: #ffe4e4;\r\n    transition: all 0.3s ease-in-out 0s;\r\n}\r\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   #close[_ngcontent-%COMP%]:hover {\r\n    color: #ffe4e4;\r\n    background: #ff2222;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixxQ0FBcUM7SUFDckMsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQSxpQkFBaUI7QUFDakI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7QUFDYjtBQUNBLGVBQWU7QUFFZixnQkFBZ0I7QUFDaEI7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUlBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxubWF0LWljb24ge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEuOGVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtc2xpZGUtdG9nZ2xlLWJhciwgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDgwbXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDUwbXM7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLyogSEVBREVSIFNUQVJUICovXHJcbmRpdi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuZGl2LmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi8qIEhFQURFUiBFTkQgKi9cclxuXHJcbi8qIFRBQkxFIFNUQVJUICovXHJcbnRhYmxlLnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDNlbSA7XHJcbn1cclxuXHJcbnRhYmxlLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFibGUgLmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogI2JkMmQyZDtcclxufVxyXG5cclxuXHJcblxyXG50Ym9keSB0ciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcbnRib2R5IHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZWNlOWE7XHJcbn1cclxuLnRhYmxlIHRkICNjbG9zZSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjZGY0OTQ5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZTRlNDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcbi50YWJsZSB0ZCAjY2xvc2U6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmU0ZTQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmYyMjIyO1xyXG59Il19 */"] });


/***/ }),

/***/ "sG/L":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 3, vars: 0, consts: [["src", "../../assets/imgs/page_not_found.svg", "alt", "", 1, "d-flex"], [1, ""]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Page not found!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    -webkit-user-drag: none;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 2em;\r\n    max-width: 500px;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoicGFnZW5vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxufVxyXG5pbWcge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feed/feed.component */ "eVva");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/project.component */ "6AOp");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "sG/L");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-project/admin-project.component */ "1ZKI");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "MKys");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "oYre");
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./support/support.component */ "zdD4");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_1__["FeedComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'dashboard/project/:id', component: _admin_project_admin_project_component__WEBPACK_IMPORTED_MODULE_6__["AdminProjectComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'feed/project/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'support', component: _support_support_component__WEBPACK_IMPORTED_MODULE_10__["SupportComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zdD4":
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contact.service */ "3ITz");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class SupportComponent {
    constructor(authService, contactService) {
        this.authService = authService;
        this.contactService = contactService;
        this.user = { subject: '', content: '' };
    }
    ngOnInit() {
        this.currentUser = this.authService.getUserDetails();
    }
    send(name, email) {
        console.log(email);
        console.log(name);
        console.log(this.user.subject);
        console.log(this.user.content);
        this.contactService.sendMessage(name, email, this.user.subject, this.user.content).subscribe((res) => {
            window.alert('Message sent!');
            (errmess) => (this.errMess = errmess);
        }, (err) => {
            console.log(err);
        });
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 18, vars: 3, consts: [[1, "container"], [1, "header"], [1, "form-container", "d-flex", "justify-content-center"], [1, "form"], [1, "mat-typography"], [1, "content-container"], [1, "title"], ["type", "text", "id", "proj-title", "placeholder", "Subject title", 1, "user-input", 3, "ngModel", "ngModelChange"], ["name", "", "id", "desc", "cols", "30", "rows", "8", "placeholder", "Message here", 1, "user-input", 3, "ngModel", "ngModelChange"], ["align", "end"], ["mat-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportComponent_Template_input_ngModelChange_10_listener($event) { return ctx.user.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportComponent_Template_textarea_ngModelChange_14_listener($event) { return ctx.user.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportComponent_Template_button_click_16_listener() { return ctx.send(ctx.currentUser.user.name, ctx.currentUser.user.email); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.user.content == "" || ctx.user.subject == "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"]], styles: ["*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\ndiv.container[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    padding-top: 2em;\r\n    margin: auto;\r\n}\r\n\r\n\r\n\r\ndiv.header[_ngcontent-%COMP%] {\r\n    margin: 0 2em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 2.5em;\r\n}\r\n\r\ndiv.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 2em ;\r\n    font-weight: bold;\r\n    letter-spacing: .02em;\r\n    display: inline;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\ndiv.form-container[_ngcontent-%COMP%]{\r\n    margin-top: 4em;\r\n    margin-left: -2em ;\r\n    height: 70vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: rgb(158, 206, 154);\r\n    background: linear-gradient(32deg, rgba(158,206,154,0.3) 0%, rgba(28,82,83,.8) 100%);\r\n    border-radius: 25px;\r\n    \r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    font-size: 1.7em;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 3em;\r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    transition: all 0.3s ease 0s;\r\n    outline: none;\r\n    padding: .7em 1em;\r\n    border: 1px solid #c7c7c7;\r\n    border-radius: 5px;\r\n    width: 50vw;\r\n    resize: none;\r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .user-input[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 0 0 2px #000000;\r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   #proj-title.user-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   mat-diolog[_ngcontent-%COMP%]{\r\n    display: flex;\r\n}\r\n\r\ndiv.form-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: .5em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBLGlCQUFpQjs7QUFDakI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBQ0EsZUFBZTs7QUFFZjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixvRkFBb0Y7SUFDcEYsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkIiLCJmaWxlIjoic3VwcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuZGl2LmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogSEVBREVSIFNUQVJUICovXHJcbmRpdi5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyLjVlbTtcclxufVxyXG5cclxuZGl2LmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtIDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wMmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi8qIEhFQURFUiBFTkQgKi9cclxuXHJcbmRpdi5mb3JtLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMmVtIDtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTU4LCAyMDYsIDE1NCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzJkZWcsIHJnYmEoMTU4LDIwNiwxNTQsMC4zKSAwJSwgcmdiYSgyOCw4Miw4MywuOCkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbmRpdi5mb3JtLWNvbnRhaW5lciAuZm9ybSAudGl0bGV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuZGl2LmZvcm0tY29udGFpbmVyIC5mb3JtIC5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbn1cclxuZGl2LmZvcm0tY29udGFpbmVyIC5mb3JtIC5jb250ZW50LWNvbnRhaW5lciAudXNlci1pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAuN2VtIDFlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjN2M3Yzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5kaXYuZm9ybS1jb250YWluZXIgLmZvcm0gLmNvbnRlbnQtY29udGFpbmVyIC51c2VyLWlucHV0OmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggIzAwMDAwMDtcclxufVxyXG5kaXYuZm9ybS1jb250YWluZXIgLmZvcm0gLmNvbnRlbnQtY29udGFpbmVyICNwcm9qLXRpdGxlLnVzZXItaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuZGl2LmZvcm0tY29udGFpbmVyIG1hdC1kaW9sb2d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmRpdi5mb3JtLWNvbnRhaW5lciAuYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuNWVtIDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map