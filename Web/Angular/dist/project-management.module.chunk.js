webpackJsonp(["project-management.module"],{

/***/ "../../../../../src/app/services/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent__ = __webpack_require__("../../../../superagent/lib/client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_superagent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serverPath__ = __webpack_require__("../../../../../src/app/_serverPath.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = /** @class */ (function () {
    function ReportService(store) {
        this.store = store;
        this.tokenCursor = this.store.select(['token', 'access_token']);
    }
    ReportService.prototype.getReportStatistic = function (projectId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["get"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].reportStatistic(projectId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ReportService.prototype.getReportProgress = function (projectId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_superagent__["get"](__WEBPACK_IMPORTED_MODULE_2__serverPath__["a" /* serverPath */].reportProgress(projectId))
                .set('token', _this.tokenCursor.get())
                .then(function (res) {
                var content = res.body;
                if (content.IsSuccess) {
                    resolve(content.Data);
                }
                else {
                    reject(content.Message);
                }
            })
                .catch(function (reason) { return reject(reason.response.body); });
        });
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__tree_service__["a" /* StoreService */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create custome campaign</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoadingPage\"></app-spinner>\r\n      <div class=\"card-body animated fadeIn\" *ngIf=\"!isLoadingPage\">\r\n\r\n\r\n        <div [formGroup]=\"projectForm\" class=\"form-horizontal col-6\">\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label  text-right\" for=\"name-input\">Name campaign\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" formControlName=\"name\" placeholder=\"Please enter the campaign's name\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"description-input\">Description</label>\r\n            <div class=\"col-8\">\r\n              <textarea id=\"description-input\" name=\"description-input\" rows=\"5\" class=\"form-control\" formControlName=\"description\" placeholder=\"About project...\"></textarea>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.description\">{{errors.description}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"goal-input\">Goal\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\">\r\n              <textarea id=\"goal-input\" name=\"goal-input\" rows=\"5\" class=\"form-control\" formControlName=\"goal\" placeholder=\"Goal...\"></textarea>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.goal\">{{errors.goal}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" for=\"budget-input\">Budget\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\" >\r\n              <input type=\"text\" id=\"budget-input\" name=\"budget-input\" class=\"form-control\" formControlName=\"budget\" placeholder=\"Please enter the budget..\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.budget}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\" >Start date\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\" >\r\n              <my-date-picker #startDatePicker name=\"startDate-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\"\r\n                formControlName=\"startDate\" disable=\"true\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.startDate\">{{errors.startDate}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Deadline\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-8\" >\r\n              <my-date-picker #deadlinePicker name=\"deadline-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\" formControlName=\"deadline\"\r\n                disable=\"true\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.deadline\">{{errors.deadline}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div style=\"margin-left: 200px;\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleCreate()\" [ladda]=\"isLoading\">\r\n                Add\r\n              </button>\r\n              <!-- <button type=\"button\" class=\"btn btn-success btn-bw \" data-toggle=\"modal\" (click)=\"successModal.show()\">Add</button> -->\r\n            </div>\r\n            <div style=\"margin-left: 50px;\">\r\n              <button class=\"btn btn-secondary\" data-toggle=\"modal\" onclick=\"location.href='#/project'\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- style=\"font-size: 20px; width: 100px\" -->\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/add-project/add-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-bw {\n  padding: 1rem 2.5rem;\n  color: black;\n  background-color: white;\n  border-color: black; }\n\n.invalid-feedback {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(projectService, router, modalService, location) {
        this.projectService = projectService;
        this.router = router;
        this.modalService = modalService;
        this.location = location;
        this.myDatePickerOptions = {
            showInputField: true,
            dateFormat: 'dd/mm/yyyy',
        };
        this.projectForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            budget: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            startDate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            deadline: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            goal: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
        });
        this.isLoading = false;
        this.isLoadingPage = true;
        this.setErrorsNull();
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.isLoadingPage = false;
    };
    AddProjectComponent.prototype.handleCreate = function () {
        var _this = this;
        this.setErrorsNull();
        var onConfirm = function () {
            var formValue = _this.projectForm.value;
            var startDate = __WEBPACK_IMPORTED_MODULE_3_moment__(_this.startDatePicker.selectionDayTxt, 'DD/MM/YYYY');
            var deadline = __WEBPACK_IMPORTED_MODULE_3_moment__(_this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
            _this.isLoading = true;
            _this.projectService.createCustomProject(formValue.name, formValue.description, formValue.goal, formValue.budget, startDate.isValid() ? startDate.format('YYYY-MM-DD') : _this.startDatePicker.selectionDayTxt, deadline.isValid() ? deadline.format('YYYY-MM-DD') : _this.deadlinePicker.selectionDayTxt)
                .then(function (value) {
                var newProject = value;
                _this.isLoading = false;
                _this.router.navigate(['project/' + newProject.id + '/detail']);
            })
                .catch(function (reason) {
                _this.isLoading = false;
                _this.setErrors(reason.Data);
            });
        };
        var initialState = {
            message: "Are you sure to create this project?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    AddProjectComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    AddProjectComponent.prototype.setErrorsNull = function () {
        this.errors = {
            name: '',
            description: '',
            goal: '',
            budget: '',
            startDate: '',
            deadline: '',
        };
    };
    AddProjectComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case 'Name':
                    this.errors.name = errorMessage;
                    break;
                case 'Description':
                    this.errors.name = errorMessage;
                    break;
                case 'Budget':
                    this.errors.budget = errorMessage;
                    break;
                case 'Deadline':
                    this.errors.deadline = errorMessage;
                    break;
                case 'StartDate':
                    this.errors.startDate = errorMessage;
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('startDatePicker'),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "startDatePicker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deadlinePicker'),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "deadlinePicker", void 0);
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__("../../../../../src/app/views/project/add-project/add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/add-project/add-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/archive/archive.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-task-table [tasks]=\"tasks\"></app-task-table>-->\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <ng-container *ngIf=\"foundProject\">\r\n          <a routerLink=\"/project/{{foundProject.id}}/detail\">\r\n            <strong>{{foundProject.name}}</strong>\r\n          </a>'s archived task\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!foundProject\">\r\n          <strong>project's archived task</strong>\r\n        </ng-container>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoading.page\"></app-spinner>\r\n      <div *ngIf=\"!isLoading.page\" class=\"card-body\">\r\n        <div class=\"button-section\">\r\n\r\n        </div>\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(searchField.value)\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n          </span>\r\n          <input class=\"form-control\" type=\"text\" (input)=\"search(searchField.value)\" #searchField>\r\n        </div>\r\n        <div class=\"dataTable-container hide-search mt-3\">\r\n          <table id=\"allProjectsTable\" datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Status</th>\r\n                <th>Priority</th>\r\n                <th>Start date</th>\r\n                <th>Deadline</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let task of tasks;\">\r\n                <td>\r\n                  {{task.name}}\r\n                </td>\r\n                <td>{{task.statusText}}</td>\r\n                <td>{{task.priorityText}}</td>\r\n                <td>{{task.startDate | date:'dd/MM/yyyy'}}</td>\r\n                <td>{{task.deadline | date:'dd/MM/yyyy'}}</td>\r\n                <td class=\"text-center\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"handleUnArchiveBtnClick(task.id)\">Unarchive</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/archive/archive.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/archive/archive.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchiveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(storeService, taskService, projectService, modalService, router, route, location) {
        this.storeService = storeService;
        this.taskService = taskService;
        this.projectService = projectService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.datatableOptions = {
            lengthChange: false,
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [5]
                }
            ]
        };
        this.currentUser = storeService.get(['currentUser']);
        this.lists = [];
        this.tasks = [];
        this.isLoading = {
            page: true
        };
    }
    ArchiveComponent.prototype.search = function (searchStr) {
        this.datatableElement.dtInstance.then(function (dtInstance) { return dtInstance.search(searchStr).draw(); });
    };
    ArchiveComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ArchiveComponent.prototype.loadData = function () {
        var _this = this;
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.foundProjectID = id;
        this.projectService.getProject(id)
            .then(function (project) {
            _this.foundProject = project;
            _this.lists = project.lists;
            for (var i = 0; i < _this.lists.length; i++) {
                for (var y = 0; y < _this.lists[i].tasks.length; y++) {
                    if (_this.lists[i].tasks[y].isArchived) {
                        _this.tasks.push(_this.lists[i].tasks[y]);
                    }
                }
            }
            _this.isLoading.page = false;
        })
            .catch(function (reason) {
            console.debug('ArchiveComponent', reason);
            _this.showErrorModal(reason.Message);
            _this.isLoading.page = false;
        });
    };
    ArchiveComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_9__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ArchiveComponent.prototype.handleUnArchiveBtnClick = function (taskID) {
        var _this = this;
        var onConfirm = function () {
            _this.isLoading.page = true;
            _this.taskService.unArchiveTask(taskID)
                .then(function (task) {
                _this.isLoading.page = false;
                _this.tasks = __WEBPACK_IMPORTED_MODULE_8_lodash__["filter"](_this.tasks, function (item) {
                    return task.id != item.id;
                });
            });
        };
        var initialState = {
            message: "Are you sure to unarchive this task?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_9__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
    ], ArchiveComponent.prototype, "datatableElement", void 0);
    ArchiveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__("../../../../../src/app/views/project/archive/archive.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/archive/archive.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/facebook-detail/facebook-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create facebook campaign detail</strong>\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Name Campaign: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"nameCampaign\" class=\"form-control\" placeholder=\"Please enter the project's name\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Description: </label>\r\n            <div class=\"col-8\">\r\n              <textarea [(ngModel)]=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"About project...\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">MethodAd: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" disabled=\"true\" class=\"form-control\" value=\"{{nameMethodAdvertising}}\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">TypeAd: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" disabled=\"true\" class=\"form-control\" value=\"{{nameTypeAdvertising}}\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Goal: </label>\r\n            <div class=\"col-8\">\r\n              <select [ngClass]=\"{'form-control': true}\" [(ngModel)]=\"goal\">\r\n                <option value=\"Target by audience\">Target by audience</option>\r\n                <option value=\"Brand awareness\">Brand awareness</option>\r\n                <option value=\"Number of people\">Number of people</option>\r\n                <option value=\"Approaching\">Approaching</option>\r\n                <option value=\"Traffic\">Traffic</option>\r\n                <option value=\"Interactive\">Interactive</option>\r\n                <option value=\"App installs\">App installs</option>\r\n                <option value=\"Video views\">Video views</option>\r\n                <option value=\"Search for potential customers\">Search for potential customers</option>\r\n                <option value=\"Message\">Message </option>\r\n\r\n              </select>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Location: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"location\" class=\"form-control\" placeholder=\"Please enter the location\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Keywords: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"keywords\" class=\"form-control\" placeholder=\"Please enter the keywords\">\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Budget(USD): </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"budget\" class=\"form-control\" placeholder=\"Please enter the type budget\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Start Date: </label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker #startDatePicker name=\"startDate-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.startDate\">{{errors.startDate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Deadline: </label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker #deadlinePicker name=\"deadline-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\" disable=\"true\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.deadline\">{{errors.deadline}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <button class=\"btn btn-primary\" (click)=\"handleCreate()\">\r\n            Create Campaign\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/facebook-detail/facebook-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/facebook-detail/facebook-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FacebookDetailComponent = /** @class */ (function () {
    function FacebookDetailComponent(projectService, router, modalService, route) {
        this.projectService = projectService;
        this.router = router;
        this.modalService = modalService;
        this.route = route;
        this.myDatePickerOptions = {
            showInputField: true,
            dateFormat: 'dd/mm/yyyy',
        };
        this.setErrorsNull();
    }
    FacebookDetailComponent.prototype.ngOnInit = function () {
        this.methodSelectedId = Number(this.route.snapshot.paramMap.get('methodId'));
        ;
        this.typeSelectedId = Number(this.route.snapshot.paramMap.get('typeId'));
        ;
        this.setNameOfMethodAndType();
    };
    FacebookDetailComponent.prototype.setNameOfMethodAndType = function () {
        var _this = this;
        this.projectService.getNameOfMethodAndType(this.methodSelectedId, this.typeSelectedId)
            .then(function (data) {
            _this.nameMethodAdvertising = data[0].nameMethodAds;
            _this.nameTypeAdvertising = data[0].nameTypeAds;
        })
            .catch(function (reason) {
            console.log(reason.Data);
        });
    };
    FacebookDetailComponent.prototype.handleCreate = function () {
        var _this = this;
        this.setErrorsNull();
        var onConfirm = function () {
            //const formValue = this.projectForm.value;
            var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.startDatePicker.selectionDayTxt, 'DD/MM/YYYY');
            var deadline = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
            //this.isLoading = true;
            _this.projectService
                .createFacebookProject(_this.nameCampaign, _this.description, _this.nameMethodAdvertising, _this.nameTypeAdvertising, _this.goal, _this.location, _this.budget, startDate.isValid() ? startDate.format('YYYY-MM-DD') : _this.startDatePicker.selectionDayTxt, deadline.isValid() ? deadline.format('YYYY-MM-DD') : _this.deadlinePicker.selectionDayTxt)
                .then(function (value) {
                var newProject = value;
                //this.isLoading = false;
                _this.router.navigate(['project/' + newProject.id + '/detail']);
            })
                .catch(function (reason) {
                //this.isLoading = false;
                _this.setErrors(reason.Data);
            });
        };
        var initialState = {
            message: "Are you sure to create this project?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    FacebookDetailComponent.prototype.setErrorsNull = function () {
        this.errors = {
            name: "",
            description: "",
            nameMethodAdvertising: "",
            nameTypeAdvertising: "",
            goal: "",
            location: "",
            budget: "",
            startDate: "",
            deadline: ""
        };
    };
    FacebookDetailComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case "Name":
                    this.errors.name = errorMessage;
                    break;
                case "Description":
                    this.errors.name = errorMessage;
                    break;
                case "Goal":
                    this.errors.name = errorMessage;
                    break;
                case "Location":
                    this.errors.name = errorMessage;
                    break;
                case "Keywords":
                    this.errors.name = errorMessage;
                    break;
                case "Budget":
                    this.errors.name = errorMessage;
                    break;
                case "StartDate":
                    this.errors.startDate = errorMessage;
                    break;
                case "Deadline":
                    this.errors.deadline = errorMessage;
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('startDatePicker'),
        __metadata("design:type", Object)
    ], FacebookDetailComponent.prototype, "startDatePicker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deadlinePicker'),
        __metadata("design:type", Object)
    ], FacebookDetailComponent.prototype, "deadlinePicker", void 0);
    FacebookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facebook-detail',
            template: __webpack_require__("../../../../../src/app/views/project/facebook-detail/facebook-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/facebook-detail/facebook-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FacebookDetailComponent);
    return FacebookDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create google campaign detail</strong>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Name Campaign: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"nameCampaign\" class=\"form-control\" placeholder=\"Please enter the project's name\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Description: </label>\r\n            <div class=\"col-8\">\r\n              <textarea [(ngModel)]=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"About project...\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Method advertisesing: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" disabled=\"true\" class=\"form-control\" value=\"{{nameMethodAdvertising}}\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Type advertisesing: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" disabled=\"true\" class=\"form-control\" value=\"{{nameTypeAdvertising}}\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Goal: </label>\r\n            <div class=\"col-8\">\r\n              <select  [ngClass]=\"{'form-control': true}\" [(ngModel)]=\"goal\">\r\n                <option value=\"Keyword target\" >Keyword target</option>\r\n                <option value=\"Location and language target\">Location and language target</option>\r\n                <option value=\"Target by device\">Target by device</option>\r\n                <option value=\"Target by audience\">Target by audience</option>\r\n              \r\n              </select>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Location: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"location\" class=\"form-control\" placeholder=\"Please enter the location\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Keywords: </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"keywords\" class=\"form-control\" placeholder=\"Please enter the keywords\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Budget(USD): </label>\r\n            <div class=\"col-8\">\r\n              <input type=\"text\" [(ngModel)]=\"budget\" class=\"form-control\" placeholder=\"Please enter the type budget\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Start Date: </label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker #startDatePicker name=\"startDate-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.startDate\">{{errors.startDate}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Deadline: </label>\r\n            <div class=\"col-8\">\r\n              <my-date-picker #deadlinePicker name=\"deadline-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\" disable=\"true\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.deadline\">{{errors.deadline}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <button class=\"btn btn-primary\" (click)=\"handleCreate()\">\r\n            Create Campaign\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invalid-feedback {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCampaignDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewCampaignDetailComponent = /** @class */ (function () {
    function NewCampaignDetailComponent(projectService, router, modalService, route) {
        this.projectService = projectService;
        this.router = router;
        this.modalService = modalService;
        this.route = route;
        this.myDatePickerOptions = {
            showInputField: true,
            dateFormat: "dd/mm/yyyy"
        };
        this.setErrorsNull();
    }
    NewCampaignDetailComponent.prototype.ngOnInit = function () {
        this.methodSelectedId = Number(this.route.snapshot.paramMap.get("methodId"));
        this.typeSelectedId = Number(this.route.snapshot.paramMap.get("typeId"));
        this.setNameOfMethodAndType();
    };
    NewCampaignDetailComponent.prototype.setNameOfMethodAndType = function () {
        var _this = this;
        this.projectService
            .getNameOfMethodAndType(this.methodSelectedId, this.typeSelectedId)
            .then(function (data) {
            _this.nameMethodAdvertising = data[0].nameMethodAds;
            _this.nameTypeAdvertising = data[0].nameTypeAds;
        })
            .catch(function (reason) {
            console.log(reason.Data);
        });
    };
    NewCampaignDetailComponent.prototype.handleCreate = function () {
        var _this = this;
        this.setErrorsNull();
        var onConfirm = function () {
            //const formValue = this.projectForm.value;
            var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.startDatePicker.selectionDayTxt, "DD/MM/YYYY");
            var deadline = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.deadlinePicker.selectionDayTxt, "DD/MM/YYYY");
            //this.isLoading = true;
            console.log("Goal" + _this.goal);
            _this.projectService
                .createOnlineProject(_this.nameCampaign, _this.description, _this.nameMethodAdvertising, _this.nameTypeAdvertising, _this.goal, _this.location, _this.keywords, _this.budget, startDate.isValid()
                ? startDate.format("YYYY-MM-DD")
                : _this.startDatePicker.selectionDayTxt, deadline.isValid()
                ? deadline.format("YYYY-MM-DD")
                : _this.deadlinePicker.selectionDayTxt)
                .then(function (value) {
                var newProject = value;
                //this.isLoading = false;
                _this.router.navigate(["project/" + newProject.id + "/detail"]);
            })
                .catch(function (reason) {
                //this.isLoading = false;
                _this.setErrors(reason.Data);
            });
        };
        var initialState = {
            message: "Are you sure to create this project?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], {
            initialState: initialState,
            class: "modal-dialog"
        });
    };
    NewCampaignDetailComponent.prototype.setErrorsNull = function () {
        this.errors = {
            name: "",
            description: "",
            nameMethodAdvertising: "",
            nameTypeAdvertising: "",
            goal: "",
            location: "",
            keywords: "",
            budget: "",
            startDate: "",
            deadline: ""
        };
    };
    NewCampaignDetailComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case "Name":
                    this.errors.name = errorMessage;
                    break;
                case "Description":
                    this.errors.name = errorMessage;
                    break;
                case "Goal":
                    this.errors.name = errorMessage;
                    break;
                case "Location":
                    this.errors.name = errorMessage;
                    break;
                case "Keywords":
                    this.errors.name = errorMessage;
                    break;
                case "Budget":
                    this.errors.name = errorMessage;
                    break;
                case "StartDate":
                    this.errors.startDate = errorMessage;
                    break;
                case "Deadline":
                    this.errors.deadline = errorMessage;
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("startDatePicker"),
        __metadata("design:type", Object)
    ], NewCampaignDetailComponent.prototype, "startDatePicker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("deadlinePicker"),
        __metadata("design:type", Object)
    ], NewCampaignDetailComponent.prototype, "deadlinePicker", void 0);
    NewCampaignDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-new-campaign-detail",
            template: __webpack_require__("../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], NewCampaignDetailComponent);
    return NewCampaignDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/new-campaign/new-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Create campaign</strong>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Method </label>\r\n            <div class=\"col-8\">\r\n              <select [ngClass]=\"{'form-control': true}\" ([ngModel])=\"methodSelectedId\" (change)=\"onChangeMethod($event.target.value)\">\r\n                <option *ngFor=\"let methodAds of methodAdvertisings\" value=\"{{methodAds.ID}}\">\r\n                  {{methodAds.Name}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-horizontal col-6 \">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-4 col-form-label text-right\">Type </label>\r\n            <div class=\"col-8\">\r\n              <select [ngClass]=\"{'form-control': true}\" ([ngModel])=\"typeSelectedId\" (change)=\"onChangeType($event.target.value)\">\r\n                <option *ngFor=\"let typeAds of typeAdvertisings\" value=\"{{typeAds.ID}}\">\r\n                  {{typeAds.Name}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <button class=\"btn btn-primary\" (click)=\"goToDetail()\">\r\n            Next\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/project/new-campaign/new-campaign.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".invalid-feedback {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/new-campaign/new-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCampaignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCampaignComponent = /** @class */ (function () {
    function NewCampaignComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
    }
    NewCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAllMethodAdvertising()
            .then(function (data) {
            _this.methodAdvertisings = data;
            _this.methodSelectedId = _this.methodAdvertisings[0].ID;
            _this.getTypeAdvertisingFunc(_this.methodSelectedId);
        })
            .catch(function (reason) {
            console.debug('NewCampaignComponent', reason);
        });
    };
    NewCampaignComponent.prototype.getTypeAdvertisingFunc = function (methodAdsId) {
        var _this = this;
        this.projectService.getTypeAdvertising(methodAdsId)
            .then(function (data) {
            _this.typeAdvertisings = data;
            _this.typeSelectedId = _this.typeAdvertisings[0].ID;
        })
            .catch(function (reason) {
            console.debug('NewCampaignComponent', reason);
        });
    };
    NewCampaignComponent.prototype.onChangeMethod = function (methodAdsId) {
        this.methodSelectedId = methodAdsId;
        this.getTypeAdvertisingFunc(methodAdsId);
    };
    NewCampaignComponent.prototype.onChangeType = function (typeId) {
        this.typeSelectedId = typeId;
    };
    NewCampaignComponent.prototype.goToDetail = function () {
        var _this = this;
        var sservice = "other";
        var current = "";
        this.typeAdvertisings.forEach(function (item) {
            if (item.ID == _this.typeSelectedId) {
                current = item.Name;
            }
        });
        console.warn(this.typeSelectedId);
        if (current == "Google") {
            sservice = "google";
        }
        else if (current == "Facebook") {
            sservice = "facebook";
        }
        else if (current == "TVC") {
            sservice = "tvc";
        }
        else {
            sservice == "other";
        }
        // console.error(current);
        //console.error(sservice);
        //this.router.navigate(['project/'+newProject.id+'/detail']);
        var lik = "project/" + sservice + "/" + this.methodSelectedId + "/" + this.typeSelectedId;
        this.router.navigate([lik]);
    };
    NewCampaignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-campaign',
            template: __webpack_require__("../../../../../src/app/views/project/new-campaign/new-campaign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/new-campaign/new-campaign.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], NewCampaignComponent);
    return NewCampaignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <strong>Campaign detail</strong>\r\n  </div>\r\n  <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n  <div *ngIf=\"!isPageLoading\" class=\"card-body\">\r\n    <div class=\"card-body\" [formGroup]=\"viewForm\" *ngIf=\"foundProject\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\" style=\"font-size: 20px\">\r\n          <h2 class=\"card-title\">{{foundProject.name}}</h2>\r\n        </div>\r\n        <!-- button start -->\r\n        <div class=\"col-12 form-horizontal\">\r\n\r\n          <div class=\"button-row\" style=\"margin-bottom: 5px;margin-top: 4px;\" *ngIf=\"foundProject.status!= 2\">\r\n            <a routerLink=\"/project/{{foundProject.id}}/update\" class=\"btn btn-secondary bg-light\" *ngIf=\"currentUser.isAdmin\">\r\n              <i class=\"fa fa-edit\"></i>&nbsp; Update\r\n            </a>\r\n            <a class=\"btn btn-secondary bg-light\" (click)=\"handleCloseProject(foundProject.id)\" *ngIf=\"currentUser.isAdmin\">\r\n              <i class=\"fa fa-close\"></i>&nbsp; Close project\r\n            </a>\r\n            <a [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openAssignModal}\" [ladda]=\"isLoading.openAssignModal\"\r\n              (click)=\"handleOnAssignBtnClick()\" *ngIf=\"currentUser.isAdmin\">\r\n              <i class=\"fa fa-users\"></i>&nbsp; Set department\r\n            </a>\r\n            <a [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openAssignMembersModal}\" (click)=\"handleOnAssignMembersBtnClick()\"\r\n              [ladda]=\"isLoading.openAssignMembersModal\" *ngIf=\"currentUser.isManager || currentUser.isAdmin\">\r\n              <i class=\"fa fa-user-plus\"></i>&nbsp; Assign members\r\n            </a>\r\n\r\n            <a [ngClass]=\"{'btn': true, 'btn-secondary': true, 'bg-light':!isLoading.openUnAssignMembersModal}\" (click)=\"handleOnUnAssignMembersBtnClick()\"\r\n              [ladda]=\"isLoading.openUnAssignMembersModal\" *ngIf=\"currentUser.isManager || currentUser.isAdmin\">\r\n              <i class=\"fa fa-user-times\"></i>&nbsp; Un-assign members\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- button end -->\r\n\r\n        <div class=\"col-6\">\r\n          <div class=\"form-horizontal\">\r\n\r\n\r\n            <div class=\"section mt-4\">\r\n              <!--DESCRIPTION-->\r\n              <h5 class=\"mb-3\">Description</h5>\r\n              <dl class=\"row ml-1\">\r\n                <p class=\"col-12\">\r\n                  {{foundProject.description}}\r\n                </p>\r\n              </dl>\r\n            </div>\r\n            <div class=\"section\" *ngIf=\"foundProject.status==0\">\r\n              <!--Created Date-->\r\n              <h5 class=\"mb-3\">Status: Not started</h5>\r\n            </div>\r\n            <div class=\"section\" *ngIf=\"foundProject.status==1\">\r\n              <!--Created Date-->\r\n              <h5 class=\"mb-3\">Status: Executing</h5>\r\n            </div>\r\n            <div class=\"section\" *ngIf=\"foundProject.status==2\">\r\n              <!--Created Date-->\r\n              <h5 class=\"mb-3\">Status: Closed</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--Created Date-->\r\n              <h5 class=\"mb-3\">Created date: {{foundProject.createdTime | date:'d/M/y'}}</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--Start Date-->\r\n              <h5 class=\"mb-3\">Start date: {{foundProject.startDate | date:'d/M/y'}}</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--Deadline-->\r\n              <h5 class=\"mb-3\">Deadline: {{foundProject.deadline | date:'d/M/y'}}</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--Keyworks-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==10 \" >Keywords: {{foundProject.keywords }}</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--goal-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==10 || foundProject.typeAdID==11 || foundProject.typeAdID==8\">Goal: {{foundProject.goal }}</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--budget-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==10 || foundProject.typeAdID==11 \">Location: {{foundProject.location }}</h5>\r\n            </div>\r\n            <div class=\"section\">\r\n              <!--budget-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==10 || foundProject.typeAdID==11 || foundProject.typeAdID==8\">Budget: {{foundProject.budget }} (USD)</h5>\r\n            </div>\r\n\r\n            <div class=\"section\">\r\n              <!--budget-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8 && foundProject.channelID==1\">Channel: VTV1</h5>\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8 && foundProject.channelID==2\">Channel: VTV2</h5>\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8 && foundProject.channelID==3\">Channel: VTV3</h5>\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8 && foundProject.channelID==6\">Channel: VTV6</h5>\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8 && foundProject.channelID==7\">Channel: HTV7</h5>\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8 && foundProject.channelID==8\">Channel: HTV8</h5>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"section\">\r\n              <!--timeFrame-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8\">Time frame: {{foundProject.timeFrame }}</h5>\r\n            </div>\r\n            <!-- <div class=\"section\">\r\n\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==10 || foundProject.typeAdID==11 || foundProject.typeAdID==8\">channelText: {{foundProject.channelID }}</h5>\r\n            </div> -->\r\n            <div class=\"section\">\r\n              <!--timeVideo-->\r\n              <h5 class=\"mb-3\" *ngIf=\"foundProject.typeAdID==8\">Time of video: {{foundProject.timeVideo }} (sec)</h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"section\" style=\"font-size: 16px\">\r\n            <div class=\"section mt-4\">\r\n              <dt class=\"col-12\">Links:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <ul class=\"icons-list\">\r\n\r\n                  <!-- ITEM START -->\r\n                  <a routerLink=\"/project/{{foundProject.id}}/task\">\r\n\r\n                    <li class=\"d-flex align-items-center hover-bg\">\r\n                      <i class=\"fa fa-tasks fa-lg bg-primary\"></i>\r\n                      <div class=\"ml-2 font-weight-bold\">\r\n                        <div class=\"title\">All tasks</div>\r\n                      </div>\r\n                    </li>\r\n                  </a>\r\n\r\n                  <!-- ITEM END -->\r\n\r\n                  <!-- ITEM START -->\r\n                  <a routerLink=\"/project/{{foundProject.id}}/schedule\">\r\n\r\n                    <li class=\"d-flex align-items-center hover-bg\">\r\n                      <i class=\"fa fa-calendar fa-lg bg-primary\"></i>\r\n                      <div class=\"ml-2 font-weight-bold\">\r\n                        <div class=\"title\">Schedule</div>\r\n                      </div>\r\n                    </li>\r\n                  </a>\r\n\r\n                  <!-- ITEM END -->\r\n\r\n                  <!-- ITEM START -->\r\n                  <a routerLink=\"/project/{{foundProject.id}}/report\">\r\n\r\n                    <li class=\"d-flex align-items-center hover-bg\">\r\n                      <i class=\"fa fa-bar-chart fa-lg bg-primary\"></i>\r\n                      <div class=\"ml-2 font-weight-bold\">\r\n                        <div class=\"title\">Report</div>\r\n                      </div>\r\n                    </li>\r\n                  </a>\r\n\r\n                  <!-- ITEM END -->\r\n\r\n                  <!-- ITEM START -->\r\n                  <a routerLink=\"/project/{{foundProject.id}}/taskarchive\" *ngIf=\"currentUser.isManager\">\r\n\r\n                    <li class=\"d-flex align-items-center hover-bg\">\r\n                      <i class=\"fa fa-archive fa-lg bg-primary\"></i>\r\n                      <div class=\"ml-2 font-weight-bold\">\r\n                        <div class=\"title\">Archived tasks</div>\r\n                      </div>\r\n                    </li>\r\n                  </a>\r\n\r\n                  <!-- ITEM END -->\r\n                </ul>\r\n\r\n              </dd>\r\n              <dt class=\"col-12\">Members:</dt>\r\n              <dd class=\"col-12 pl-4\">\r\n                <app-user-list *ngIf=\"foundProject.assignees\" [users]=\"foundProject.assignees\" [sort]=\"true\"></app-user-list>\r\n                <span *ngIf=\"!foundProject.assignees || foundProject.assignees.length < 1\">N/A</span>\r\n              </dd>\r\n              <br/>\r\n              <dt class=\"col-12\">Departments</dt>\r\n              <dd class=\"col-12 pl-4\" *ngIf=\"foundProject.teams\">\r\n                <span *ngFor=\"let team of foundProject.teams\">\r\n                  <a href=\"#/department/{{team.id}}/detail\">{{team.name}}</a>\r\n                  <br/>\r\n                </span>\r\n              </dd>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n          <div class=\"modal-content\" style=\"border-color: black;\">\r\n            <div class=\"modal-header\" style=\"color: black;\r\n                      background-color: white;\">\r\n              <h4 class=\"modal-title\">Confirmation message!</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Are you sure to close this project?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\" style=\"color: black;\r\n                          background-color: white;\r\n                          border-color: black;\">No\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"handleClose(foundProject.id)\" style=\"color: black;\r\n                          background-color: white;\r\n                          border-color: black;\">Yes\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/project-detail/project-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  padding: 1rem 2rem;\n  position: relative; }\n\n.task-card:hover {\n  cursor: pointer;\n  background-color: #f2f2f2; }\n\ntextarea:disabled {\n  background-color: white;\n  width: 95%; }\n\n.div-text {\n  height: 300px;\n  overflow-y: auto;\n  border: 1px solid black; }\n\n.blackwhitebutton {\n  color: black;\n  background-color: white;\n  border-color: black; }\n\n.hover-bg:hover {\n  cursor: pointer;\n  background-color: #F4F5F7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tree_service__ = __webpack_require__("../../../../../src/app/services/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(projectService, router, location, modalService, teamService, storeService, userService, route) {
        var _this = this;
        this.projectService = projectService;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
        this.teamService = teamService;
        this.storeService = storeService;
        this.userService = userService;
        this.route = route;
        this.currentUser = this.storeService.get(['currentUser']);
        this.userService.getCurrentUserInfo().then(function (value) {
            _this.currentUser = value;
        });
        this.isLoading = {
            page: true,
            attachmentUpload: false,
            attachmentRemove: [],
            openAssignModal: false,
            openUnAssignModal: false,
            openAssignMembersModal: false,
            openUnAssignMembersModal: false,
            done: false,
            comment: false,
            editComment: true,
        };
        this.isPageLoading = true;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.projectService.getProject(Number(id))
                .then(function (value) {
                _this.isPageLoading = false;
                _this.foundProject = value;
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message, true);
            });
        }
        else {
            this.showErrorModal("Invalid task id \"" + id + "\"", true);
        }
        this.viewForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            projectname: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            deadline: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            createdTime: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            startDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            changedTime: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            changedBy: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            keywords: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            goal: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            location: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            budget: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            timeVideo: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            typeAdID: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            timeFrame: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            channelText: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
        });
    };
    ProjectDetailComponent.prototype.handleClose = function (projectID) {
        var _this = this;
        this.projectService.closeProject(projectID).then(function (value) {
            _this.isPageLoading = false;
            _this.router.navigate(['project']);
        }).catch(function (reason) {
            _this.isPageLoading = false;
            console.debug(reason);
            _this.handleCloseError(reason.Data);
        });
    };
    ProjectDetailComponent.prototype.handleCloseError = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            console.debug('handleCreateProjectError', fieldName, errorMessage);
        }
    };
    ProjectDetailComponent.prototype.handleCloseProject = function (projectID) {
        var _this = this;
        var onConfirm = function () {
            _this.projectService.closeProject(projectID)
                .then(function (value) {
                _this.isPageLoading = false;
                _this.router.navigate(['project']);
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message);
            });
        };
        var initialState = {
            message: "Are you sure to close this project?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    ProjectDetailComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ProjectDetailComponent.prototype.handleOnAssignBtnClick = function () {
        var _this = this;
        var onConfirm = function (selectedTeams) {
            var selectedIds = __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](selectedTeams, 'id');
            if (selectedIds.length == 0) {
                _this.containdepartment = true;
            }
            _this.projectService.setTeamToProject(_this.foundProject.id, selectedIds)
                .then(function (value) {
                _this.foundProject = value;
                _this.isLoading.openAssignModal = false;
            })
                .catch(function (reason) {
                _this.showErrorModal(reason.Message);
                _this.isLoading.openAssignModal = false;
            });
        };
        this.isLoading.openAssignModal = true;
        this.teamService.getAllTeam()
            .then(function (value) {
            var pool = value;
            var selected = _this.foundProject.teams;
            var initialState = {
                confirmCallback: onConfirm,
                cancelCallback: function () {
                    _this.isLoading.openAssignModal = false;
                },
                closeCallback: function () {
                    _this.isLoading.openAssignModal = false;
                },
                teamPool: pool,
                selectedTeams: selected,
                title: "Assign team to project \"" + _this.foundProject.name + "\"",
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["k" /* SelectTeamsModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
        });
    };
    ;
    ProjectDetailComponent.prototype.handleOnUnAssignMembersBtnClick = function () {
        var _this = this;
        this.isLoading.openUnAssignMembersModal = true;
        var pool = __WEBPACK_IMPORTED_MODULE_7_lodash__["filter"](this.foundProject.assignees, function (user) {
            if (_this.currentUser.isAdmin) {
                return true;
            }
            else if (_this.currentUser.isManager) {
                return !user.isManager && user.teamId == _this.currentUser.teamId;
            }
        });
        var onConfirm = function (selelectedMembers) {
            var selectedIds = __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](selelectedMembers, 'id');
            if (selectedIds.length == 0) {
                _this.containmember = true;
            }
            if (!_this.containmember) {
                _this.projectService.unAssignUsersFromProject(_this.foundProject.id, selectedIds)
                    .then(function (value) {
                    _this.foundProject = value;
                    _this.isLoading.openUnAssignMembersModal = false;
                })
                    .catch(function (reason) {
                    _this.showErrorModal(reason.Message);
                    _this.isLoading.openUnAssignMembersModal = false;
                });
            }
            else {
                _this.showErrorModal('Please select members!');
                _this.isLoading.openUnAssignMembersModal = false;
            }
        };
        var initialState = {
            confirmCallback: onConfirm,
            cancelCallback: function () {
                _this.isLoading.openUnAssignMembersModal = false;
            },
            closeCallback: function () {
                _this.isLoading.openUnAssignMembersModal = false;
            },
            userPool: pool,
            // selectedUsers: selected,
            title: "Un-Assign"
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["l" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
    };
    ProjectDetailComponent.prototype.handleOnAssignMembersBtnClick = function () {
        var _this = this;
        this.isLoading.openAssignMembersModal = true;
        this.projectService.getAssignableUser(this.foundProject.id)
            .then(function (users) {
            var pool = __WEBPACK_IMPORTED_MODULE_7_lodash__["filter"](users, function (user) {
                if (_this.currentUser.isAdmin) {
                    return true;
                }
                else if (_this.currentUser.isManager) {
                    return !user.isManager && user.teamId == _this.currentUser.teamId;
                }
            });
            var onConfirm = function (selelectedMembers) {
                var selectedIds = __WEBPACK_IMPORTED_MODULE_7_lodash__["map"](selelectedMembers, 'id');
                if (selectedIds.length == 0) {
                    _this.containmember = true;
                }
                if (!_this.containmember) {
                    _this.projectService.assignUsersToProject(_this.foundProject.id, selectedIds)
                        .then(function (value) {
                        _this.foundProject = value;
                        _this.isLoading.openAssignMembersModal = false;
                    })
                        .catch(function (reason) {
                        _this.showErrorModal(reason.Message);
                        _this.isLoading.openAssignMembersModal = false;
                    });
                }
                else {
                    _this.showErrorModal('Please select members!');
                    _this.isLoading.openAssignMembersModal = false;
                }
            };
            var initialState = {
                confirmCallback: onConfirm,
                cancelCallback: function () {
                    _this.isLoading.openAssignMembersModal = false;
                },
                closeCallback: function () {
                    _this.isLoading.openAssignMembersModal = false;
                },
                userPool: pool,
                title: "Assign",
                confirmButtonText: 'Assign'
            };
            _this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["l" /* SelectUsersModalComponent */], { initialState: initialState, class: 'modal-dialog', ignoreBackdropClick: true });
        });
    };
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/views/project/project-detail/project-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/project-detail/project-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_8_app_services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_9__services_tree_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/project-management-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagementRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_project_management_component__ = __webpack_require__("../../../../../src/app/views/project/view/project-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_scheduling_project_scheduling_component__ = __webpack_require__("../../../../../src/app/views/project/project-scheduling/project-scheduling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/views/project/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_project_add_project_component__ = __webpack_require__("../../../../../src/app/views/project/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_update_project_update_component__ = __webpack_require__("../../../../../src/app/views/project/project-update/project-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_task_project_task_component__ = __webpack_require__("../../../../../src/app/views/project/project-task/project-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_report_component__ = __webpack_require__("../../../../../src/app/views/project/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__archive_archive_component__ = __webpack_require__("../../../../../src/app/views/project/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_campaign_new_campaign_component__ = __webpack_require__("../../../../../src/app/views/project/new-campaign/new-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_campaign_detail_new_campaign_detail_component__ = __webpack_require__("../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__facebook_detail_facebook_detail_component__ = __webpack_require__("../../../../../src/app/views/project/facebook-detail/facebook-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tvc_detail_tvc_detail_component__ = __webpack_require__("../../../../../src/app/views/project/tvc-detail/tvc-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        data: {
            title: 'Campaign'
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__view_project_management_component__["a" /* ProjectManagementComponent */],
                data: {
                    title: 'View campaigns'
                }
            },
            {
                path: ':id/schedule',
                component: __WEBPACK_IMPORTED_MODULE_3__project_scheduling_project_scheduling_component__["a" /* ProjectSchedulingComponent */],
                data: {
                    title: 'View project schedule'
                }
            },
            {
                path: ':id/detail',
                component: __WEBPACK_IMPORTED_MODULE_4__project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                data: {
                    title: 'campaign detail'
                }
            },
            {
                path: 'create',
                component: __WEBPACK_IMPORTED_MODULE_5__add_project_add_project_component__["a" /* AddProjectComponent */],
                data: {
                    title: 'Create custom campaign'
                }
            },
            {
                path: 'createCampaign',
                component: __WEBPACK_IMPORTED_MODULE_10__new_campaign_new_campaign_component__["a" /* NewCampaignComponent */],
                data: {
                    title: 'Create campaign'
                }
            },
            {
                path: 'google/:methodId/:typeId',
                component: __WEBPACK_IMPORTED_MODULE_11__new_campaign_detail_new_campaign_detail_component__["a" /* NewCampaignDetailComponent */],
                data: {
                    title: 'Create google campaign detail'
                }
            },
            {
                path: 'facebook/:methodId/:typeId',
                component: __WEBPACK_IMPORTED_MODULE_12__facebook_detail_facebook_detail_component__["a" /* FacebookDetailComponent */],
                data: {
                    title: 'Create facebook campaign detail'
                }
            },
            {
                path: 'tvc/:methodId/:typeId',
                component: __WEBPACK_IMPORTED_MODULE_13__tvc_detail_tvc_detail_component__["a" /* TvcDetailComponent */],
                data: {
                    title: 'Create tvc campaign detail'
                }
            },
            {
                path: ':id/update',
                component: __WEBPACK_IMPORTED_MODULE_6__project_update_project_update_component__["a" /* ProjectUpdateComponent */],
                data: {
                    title: 'Update project'
                }
            },
            {
                path: ':id/task',
                component: __WEBPACK_IMPORTED_MODULE_7__project_task_project_task_component__["a" /* ProjectTaskComponent */],
                data: {
                    title: 'View tasks'
                }
            },
            {
                path: ':id/report',
                component: __WEBPACK_IMPORTED_MODULE_8__report_report_component__["a" /* ReportComponent */],
                data: {
                    title: 'View report'
                }
            },
            {
                path: ':id/taskarchive',
                component: __WEBPACK_IMPORTED_MODULE_9__archive_archive_component__["a" /* ArchiveComponent */],
                data: {
                    title: 'View archives'
                }
            },
        ]
    }
];
var ProjectManagementRoutingModule = /** @class */ (function () {
    function ProjectManagementRoutingModule() {
    }
    ProjectManagementRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ProjectManagementRoutingModule);
    return ProjectManagementRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/project-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagementModule", function() { return ProjectManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_management_routing_module__ = __webpack_require__("../../../../../src/app/views/project/project-management-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_project_management_component__ = __webpack_require__("../../../../../src/app/views/project/view/project-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_scheduling_project_scheduling_component__ = __webpack_require__("../../../../../src/app/views/project/project-scheduling/project-scheduling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_views_project_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/views/project/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_views_project_add_project_add_project_component__ = __webpack_require__("../../../../../src/app/views/project/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_views_project_project_update_project_update_component__ = __webpack_require__("../../../../../src/app/views/project/project-update/project-update.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_views_project_project_task_project_task_component__ = __webpack_require__("../../../../../src/app/views/project/project-task/project-task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cmaComponents_cma_module__ = __webpack_require__("../../../../../src/app/cmaComponents/cma.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_spinner_spinner_module__ = __webpack_require__("../../../../../src/app/components/spinner/spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__report_report_component__ = __webpack_require__("../../../../../src/app/views/project/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_ladda__ = __webpack_require__("../../../../angular2-ladda/module/module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_ladda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_ladda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__archive_archive_component__ = __webpack_require__("../../../../../src/app/views/project/archive/archive.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__new_campaign_new_campaign_component__ = __webpack_require__("../../../../../src/app/views/project/new-campaign/new-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__new_campaign_detail_new_campaign_detail_component__ = __webpack_require__("../../../../../src/app/views/project/new-campaign-detail/new-campaign-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__facebook_detail_facebook_detail_component__ = __webpack_require__("../../../../../src/app/views/project/facebook-detail/facebook-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tvc_detail_tvc_detail_component__ = __webpack_require__("../../../../../src/app/views/project/tvc-detail/tvc-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ProjectManagementModule = /** @class */ (function () {
    function ProjectManagementModule() {
    }
    ProjectManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__project_management_routing_module__["a" /* ProjectManagementRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["c" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_datatables__["b" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_spinner_spinner_module__["a" /* SpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_14__cmaComponents_cma_module__["a" /* CmaModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular2_ladda__["LaddaModule"].forRoot({
                    style: 'expand-left'
                }),
                __WEBPACK_IMPORTED_MODULE_18_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_project_management_component__["a" /* ProjectManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_3__project_scheduling_project_scheduling_component__["a" /* ProjectSchedulingComponent */],
                __WEBPACK_IMPORTED_MODULE_5_app_views_project_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_views_project_add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_views_project_project_update_project_update_component__["a" /* ProjectUpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_views_project_project_task_project_task_component__["a" /* ProjectTaskComponent */],
                __WEBPACK_IMPORTED_MODULE_16__report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_19__archive_archive_component__["a" /* ArchiveComponent */],
                __WEBPACK_IMPORTED_MODULE_20__new_campaign_new_campaign_component__["a" /* NewCampaignComponent */],
                __WEBPACK_IMPORTED_MODULE_21__new_campaign_detail_new_campaign_detail_component__["a" /* NewCampaignDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__facebook_detail_facebook_detail_component__["a" /* FacebookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__tvc_detail_tvc_detail_component__["a" /* TvcDetailComponent */]
            ]
        })
    ], ProjectManagementModule);
    return ProjectManagementModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/project-scheduling/project-scheduling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <ng-container *ngIf=\"foundProject\">\r\n      <a routerLink=\"/project/{{foundProject.id}}/detail\">\r\n        <strong>{{foundProject.name}}</strong>\r\n      </a>'s schedule\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!foundProject\">\r\n      <strong>project's schedule</strong>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"card-body row\">\r\n    <app-spinner *ngIf=\"isLoading.page\" class=\"col-12\"></app-spinner>\r\n    <div *ngIf=\"!isLoading.page && projectTasks < 1\">.</div>\r\n    <div class=\"animated fadeIn\" #gantt_here style='width: 100%; height: 100%;'></div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/project-scheduling/project-scheduling.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 600px;\n  position: relative;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/project-scheduling/project-scheduling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSchedulingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_service__ = __webpack_require__("../../../../../src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dependency_service__ = __webpack_require__("../../../../../src/app/services/dependency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dhtmlx_gantt__ = __webpack_require__("../../../../dhtmlx-gantt/codebase/dhtmlxgantt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dhtmlx_gantt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dhtmlx_gantt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProjectSchedulingComponent = /** @class */ (function () {
    function ProjectSchedulingComponent(taskService, projectService, dependencyService, route, router, location, modalService) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.dependencyService = dependencyService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.modalService = modalService;
        this.projectTasks = [];
        this.projectDependencies = [];
        this.isLoading = {
            page: true
        };
    }
    ProjectSchedulingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.projectService.getProject(Number(id))
                .then(function (value) {
                _this.foundProject = value;
                for (var _i = 0, _a = value.lists; _i < _a.length; _i++) {
                    var list = _a[_i];
                    for (var _b = 0, _c = list.tasks; _b < _c.length; _b++) {
                        var task = _c[_b];
                        _this.projectTasks.push(task);
                    }
                }
                _this.updatePageLoadingState();
            })
                .catch(function (reason) {
                console.debug('ProjectSchedulingComponent - ngOnInit', reason);
                _this.showErrorModal(reason.Message, true);
            });
            this.dependencyService.getDependencyOfProject(id)
                .then(function (value) {
                _this.projectDependencies = value;
                _this.updatePageLoadingState();
            })
                .catch(function (reason) {
                console.debug('ProjectSchedulingComponent - ngOnInit', reason);
                _this.showErrorModal(reason.Message, true);
            });
        }
        else {
            this.showErrorModal("Invalid id " + id, true);
        }
    };
    ProjectSchedulingComponent.prototype.updatePageLoadingState = function () {
        if (this.projectTasks &&
            this.projectDependencies) {
            this.initGratt();
            this.isLoading.page = false;
        }
    };
    ProjectSchedulingComponent.prototype.formatTasks = function (tasks) {
        var formattedTasks = [];
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            var formattedTask = {
                id: task.id,
                text: task.name,
                start_date: task.startDate,
                duration: task.duration,
                statusText: task.statusText,
                priorityText: task.priorityText,
                progress: 0
            };
            if (task.statusText == 'done') {
                formattedTask.progress = 1;
            }
            formattedTasks.push(formattedTask);
        }
        return formattedTasks;
    };
    ProjectSchedulingComponent.prototype.formatDependencies = function (dependencies) {
        var formattedDependencies = [];
        for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
            var dependency = dependencies_1[_i];
            var formattedDependency = {
                id: dependency.id,
                source: dependency.sourceTaskID,
                target: dependency.destinationTaskID,
                type: 0,
            };
            formattedDependencies.push(formattedDependency);
        }
        return formattedDependencies;
    };
    ProjectSchedulingComponent.prototype.initGratt = function () {
        gantt.config.columns = [
            { name: 'text', label: 'Task name', width: '*', tree: true },
            { name: 'start_date', label: 'Start date', align: 'center' },
            { name: 'duration', label: 'Duration', align: 'center' },
        ];
        gantt.config.xml_date = '%Y/%m/%d';
        gantt.config.readonly = true;
        gantt.init(this.ganttContainer.nativeElement);
        if (this.projectTasks && this.projectDependencies) {
            gantt.parse({
                data: this.formatTasks(this.projectTasks),
                links: this.formatDependencies(this.projectDependencies),
            });
        }
    };
    ProjectSchedulingComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_8__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ProjectSchedulingComponent.prototype.ngOnDestroy = function () {
        gantt.clearAll();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('gantt_here'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProjectSchedulingComponent.prototype, "ganttContainer", void 0);
    ProjectSchedulingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-scheduling',
            template: __webpack_require__("../../../../../src/app/views/project/project-scheduling/project-scheduling.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/project-scheduling/project-scheduling.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__services_dependency_service__["a" /* DependencyService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* BsModalService */]])
    ], ProjectSchedulingComponent);
    return ProjectSchedulingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/project-task/project-task.component.html":
/***/ (function(module, exports) {

module.exports = "<app-project-card [project]=\"foundProject\" (refresh)=\"onNeedRefresh()\"></app-project-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/project-task/project-task.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#task:hover {\n  opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/project-task/project-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectTaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectTaskComponent = /** @class */ (function () {
    function ProjectTaskComponent(projectService, router, location, route, modalService) {
        this.projectService = projectService;
        this.router = router;
        this.location = location;
        this.route = route;
        this.modalService = modalService;
        this.isPageLoading = true;
    }
    ProjectTaskComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.projectID = Number(id);
            this.loadData();
        }
        else {
            this.showErrorModal("Invalid task id \"" + id + "\"", true);
        }
    };
    ProjectTaskComponent.prototype.loadData = function () {
        var _this = this;
        this.projectService.getProject(this.projectID)
            .then(function (value) {
            _this.foundProject = value;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message, true);
        });
    };
    ProjectTaskComponent.prototype.onNeedRefresh = function () {
        this.loadData();
    };
    ProjectTaskComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_3__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ProjectTaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-task',
            template: __webpack_require__("../../../../../src/app/views/project/project-task/project-task.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/project-task/project-task.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* BsModalService */]])
    ], ProjectTaskComponent);
    return ProjectTaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/project-update/project-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>Update campaign</strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isLoading\"></app-spinner>\r\n      <div *ngIf=\"!isLoading\" class=\"card-body\">\r\n        <div class=\"form-horizontal col-6\" [formGroup]=\"updateForm\" id=\"update\">\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-md-1.2 col-form-label\" for=\"name-input\" style=\"margin-left: 25px;\"> Name\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>  \r\n              </span>\r\n            </label>\r\n            <div class=\"col-md-6\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" id=\"name-input\" name=\"name-input\" class=\"form-control\" formControlName=\"name\" placeholder=\"Please enter the project's name\" style=\"width: 700px\" value=\"{{foundProject.name}}\">\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label\" for=\"description-input\">Description</label>\r\n            <div class=\"col-md-6\">\r\n              <textarea id=\"description-input\" name=\"description-input\" rows=\"5\" class=\"form-control\" formControlName=\"description\" placeholder=\"About project...\"\r\n                style=\"margin-left: 23px;\" value=\"{{foundProject.description}}\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"col-form-label\">Deadline\r\n              <span style=\"color: #ee0d0d\">\r\n                <strong>*</strong>\r\n              </span>\r\n            </label>\r\n            <div class=\"col-md-6\" style=\"margin-left: 1px;\">\r\n              <my-date-picker #deadlinePicker name=\"deadline-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\" formControlName=\"deadline\"\r\n                disable=\"true\" style=\"margin-left: 28px;\"></my-date-picker>\r\n              <div class=\"invalid-feedback\" *ngIf=\"errors.deadline\" style=\"margin-left: 29px;\">{{errors.deadline}}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div style=\"margin-left: 150px;\">\r\n              <button class=\"btn btn-primary\" (click)=\"handleUpdate()\" [ladda]=\"isLoading\" style=\"font-size: 20px; width: 150px\">\r\n                Save Changes\r\n              </button>\r\n              <!-- <button type=\"button\" class=\"btn btn-success btn-bw \" data-toggle=\"modal\" (click)=\"successModal.show()\">Add</button> -->\r\n            </div>\r\n            <div style=\"margin-left: 100px;\">\r\n              <button class=\"btn btn-secondary\" style=\"font-size: 20px; width: 100px\" data-toggle=\"modal\" onclick=\"location.href='#/project'\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/project/project-update/project-update.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  width: 700px;\n  height: 200px; }\n\n.invalid-feedback {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/project-update/project-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals_error_modal_error_modal_component__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/error-modal/error-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProjectUpdateComponent = /** @class */ (function () {
    function ProjectUpdateComponent(projectService, modalService, router, route, location) {
        this.projectService = projectService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.myDatePickerOptions = {
            showInputField: true,
            dateFormat: 'dd/mm/yyyy',
        };
        this.updateForm = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required),
            deadline: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormControl */](undefined, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["h" /* Validators */].required),
        });
        this.isLoading = true;
        this.setErrorsNull();
    }
    ProjectUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.projectID = Number(id);
            this.projectService.getProject(this.projectID).then(function (value) {
                _this.foundProject = value;
                _this.setDefaultValue(_this.foundProject);
                _this.isLoading = false;
            });
        }
        else {
            this.showErrorModal('Invalid Project ID!', true);
            this.isLoading = false;
        }
    };
    ProjectUpdateComponent.prototype.setDefaultValue = function (project) {
        var deadline = __WEBPACK_IMPORTED_MODULE_7_moment__(project.deadline);
        this.updateForm.patchValue({
            deadline: {
                date: {
                    year: deadline.year(),
                    month: deadline.month() + 1,
                    day: deadline.date()
                }
            }
        });
        this.updateForm.controls['name'].setValue(project.name);
        this.updateForm.controls['description'].setValue(project.description);
    };
    ProjectUpdateComponent.prototype.setErrorsNull = function () {
        this.errors = {
            name: '',
            deadline: '',
        };
    };
    ProjectUpdateComponent.prototype.loadProject = function () {
        var _this = this;
        this.projectService.getAllProjects()
            .then(function (data) {
            var projects = data;
            _this.foundProject = projects.find(function (project) {
                return project.id === _this.projectID;
            });
            if (_this.foundProject) {
                _this.isLoading = false;
            }
            else {
                _this.showErrorModal("Project with id " + _this.projectID + " not found", true);
            }
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
            console.debug('ProjectUpdateComponent', reason);
        });
    };
    ProjectUpdateComponent.prototype.handleUpdate = function () {
        var _this = this;
        this.setErrorsNull();
        var formValue = this.updateForm.value;
        var valid = true;
        if (formValue.name == '' && !formValue.deadline) {
            this.errors.name = 'Please input project\'s name!';
            this.errors.deadline = 'Please input valid deadline!';
            valid = false;
        }
        if (formValue.name != '' && !formValue.deadline) {
            this.errors.deadline = 'Please input valid deadline!';
            valid = false;
        }
        if (formValue.name == '' && formValue.deadline) {
            this.errors.name = 'Please input project\'s name!';
            valid = false;
        }
        if (valid) {
            var onConfirm = function () {
                // const formValue = this.updateForm.value;
                var deadline = __WEBPACK_IMPORTED_MODULE_7_moment__(_this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
                _this.isLoading = true;
                _this.projectService.updateProject(_this.foundProject.id, formValue.name, formValue.budget, formValue.description, _this.foundProject.startDate, deadline.isValid() ? deadline.format('YYYY-MM-DD') : _this.deadlinePicker.selectionDayTxt)
                    .then(function (value) {
                    _this.isLoading = false;
                    _this.router.navigate(['project']);
                })
                    .catch(function (reason) {
                    _this.setErrors(reason.Data);
                    _this.isLoading = false;
                });
            };
            var initialState = {
                message: "Are you sure to save changes?",
                confirmCallback: onConfirm
            };
            this.modalService.show(__WEBPACK_IMPORTED_MODULE_8__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
        }
    };
    ProjectUpdateComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals_error_modal_error_modal_component__["a" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ProjectUpdateComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case 'Name':
                    this.errors.name = errorMessage;
                    break;
                case 'Deadline':
                    this.errors.deadline = errorMessage;
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deadlinePicker'),
        __metadata("design:type", Object)
    ], ProjectUpdateComponent.prototype, "deadlinePicker", void 0);
    ProjectUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-update',
            template: __webpack_require__("../../../../../src/app/views/project/project-update/project-update.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/project-update/project-update.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], ProjectUpdateComponent);
    return ProjectUpdateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\"><strong>\r\n      View report\r\n  </strong>\r\n\r\n  </div>\r\n  <app-spinner *ngIf=isLoading.page class=\"col-12\"></app-spinner>\r\n  <div class=\"card-body row\" *ngIf=!isLoading.page>\r\n    <div class=\"col-12\">\r\n      <a routerLink=\"/project/{{foundProject.id}}/detail\">\r\n        <h2 class=\"card-title\">{{foundProject.name}}</h2>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <div class=\"row\">\r\n        <div class=\"section col-12\">\r\n          <!--Progress SECTION-->\r\n          <h5 class=\"mb-3\">Project progress</h5>\r\n          <dl class=\"row ml-1\">\r\n            <!--<dt class=\"col-4\">Task count:</dt>-->\r\n            <dd class=\"col-12\">\r\n              <canvas baseChart\r\n                      [datasets]=\"barChart.data\"\r\n                      [labels]=\"barChart.labels\"\r\n                      [chartType]=\"'bar'\">\r\n              </canvas>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n        <div class=\"section col-6\">\r\n          <!--DETAIL SECTION-->\r\n          <h5 class=\"mb-3\">Detail</h5>\r\n          <dl class=\"row ml-1\">\r\n            <dt class=\"col-5\">Task count:</dt>\r\n            <dd class=\"col-7\">\r\n              {{statistic.taskCount}} tasks\r\n            </dd>\r\n          </dl>\r\n          <dl class=\"row ml-1\">\r\n            <dt class=\"col-5\">Completed task:</dt>\r\n            <dd class=\"col-7\">\r\n              {{statistic.completedTask}} tasks\r\n            </dd>\r\n          </dl>\r\n          <dl class=\"row ml-1\">\r\n            <dt class=\"col-5\">Number of staffs:</dt>\r\n            <dd class=\"col-7\">\r\n              {{statistic.numberOfPeopleInProject}} staffs\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/report/report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section dt {\n  font-weight: 600; }\n\n.section .icons-list img.avatar {\n  width: 35px;\n  height: 35px; }\n\n.separator-v {\n  border: 0;\n  width: 1px;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(rgba(0, 0, 0, 0.75)), to(transparent));\n  background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75), transparent); }\n\n.hidden-field {\n  position: absolute;\n  top: -5000px;\n  left: -5000px; }\n\n.list-group-item:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_report_service__ = __webpack_require__("../../../../../src/app/services/report.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportComponent = /** @class */ (function () {
    function ReportComponent(router, route, location, modalService, projectService, reportService) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this.projectService = projectService;
        this.reportService = reportService;
        this.isLoading = {
            page: true
        };
    }
    ReportComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        if (Number(id)) {
            this.loadData(id);
        }
        else {
            this.showErrorModal(id + " is not a valid ID");
        }
    };
    ReportComponent.prototype.loadData = function (projectId) {
        var _this = this;
        this.isLoading.page = true;
        Promise.all([this.projectService.getProject(projectId),
            this.reportService.getReportStatistic(projectId),
            this.reportService.getReportProgress(projectId)])
            .then(function (resData) {
            _this.foundProject = resData[0];
            _this.statistic = resData[1];
            _this.barChart = resData[2];
            _this.isLoading.page = false;
        })
            .catch(function (reason) {
            _this.showErrorModal(reason.Message);
        });
    };
    ReportComponent.prototype.showErrorModal = function (message, isNavigateBack) {
        var _this = this;
        if (isNavigateBack === void 0) { isNavigateBack = false; }
        var initialState = {
            closeCallback: function () {
                if (isNavigateBack) {
                    _this.location.back();
                }
            },
            message: message
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__cmaComponents_modals__["e" /* ErrorModalComponent */], { initialState: initialState, class: 'modal-dialog modal-danger' });
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/views/project/report/report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__services_report_service__["a" /* ReportService */]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/tvc-detail/tvc-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <strong>Create tvc campaign detail</strong>\n      </div>\n      <div class=\"card-body\">\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Name Campaign: </label>\n            <div class=\"col-8\">\n              <input type=\"text\" [(ngModel)]=\"nameCampaign\" class=\"form-control\" placeholder=\"Please enter the project's name\">\n              <div class=\"invalid-feedback\" *ngIf=\"errors.name\">{{errors.name}}</div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Description: </label>\n            <div class=\"col-8\">\n              <textarea [(ngModel)]=\"description\" rows=\"5\" class=\"form-control\" placeholder=\"About project...\"></textarea>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">MethodAd: </label>\n            <div class=\"col-8\">\n              <input type=\"text\" disabled=\"true\" class=\"form-control\" value=\"{{nameMethodAdvertising}}\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">TypeAd: </label>\n            <div class=\"col-8\">\n              <input type=\"text\" disabled=\"true\" class=\"form-control\" value=\"{{nameTypeAdvertising}}\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Goal: </label>\n            <div class=\"col-8\">\n              <select [ngClass]=\"{'form-control': true}\" [(ngModel)]=\"goal\">\n                <option value=\"Introduction to product information\">\n                  Introduction to product information</option>\n                <option value=\"Persuade consumers to buy\">Persuade consumers to buy</option>\n                <option value=\"Remind\">Remind</option>\n\n\n              </select>\n\n            </div>\n          </div>\n        </div>\n<!-- \n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Location: </label>\n            <div class=\"col-8\">\n              <input type=\"text\" [(ngModel)]=\"location\" class=\"form-control\" placeholder=\"Please enter the location\">\n            </div>\n          </div>\n        </div> -->\n\n        <!-- <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Keywords: </label>\n            <div class=\"col-8\">\n              <input type=\"text\" [(ngModel)]=\"keywords\" class=\"form-control\" placeholder=\"Please enter the keywords\">\n            </div>\n          </div>\n        </div> -->\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Budget(USD): </label>\n            <div class=\"col-8\">\n              <input type=\"text\" [(ngModel)]=\"budget\" class=\"form-control\" placeholder=\"Please enter budget\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Channel: </label>\n            <div class=\" col-8\">\n              <select [(ngModel)]=\"ChannelId\" [ngClass]=\"{'form-control': true}\" >\n                <option value=\"1\">VTV1</option>\n                <option value=\"2\">VTV2</option>\n                <option value=\"3\">VTV3</option>\n                <option value=\"6\">VTV6</option>\n                <option value=\"7\">HTV7</option>\n                <option value=\"8\">HTV8</option>\n              </select>\n\n            </div>\n\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Time of video(sec): </label>\n            <div class=\"col-8\">\n              <input type=\"text\" [(ngModel)]=\"timeVideo\" class=\"form-control\" placeholder=\"Please enter the time of video\">\n            </div>\n            \n\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Time flame: </label>\n            <div class=\"col-8\">\n              <select [ngClass]=\"{'form-control': true}\" [(ngModel)]=\"timeFrame\">\n                <option value=\"10:00AM-12:00PM\">10:00AM-12:00PM</option>\n                <option value=\"12:00PM-14:00PM\">12:00PM-14:00PM</option>\n                <option value=\"14:00AM-16:00PM\">14:00AM-16:00PM</option>\n                <option value=\"16:00AM-18:00PM\">16:00AM-18:00PM</option>\n                <option value=\"18:00AM-20:00PM\">18:00AM-20:00PM</option>\n              </select>\n\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Start Date: </label>\n            <div class=\"col-8\">\n              <my-date-picker #startDatePicker name=\"startDate-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\"></my-date-picker>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.startDate\">{{errors.startDate}}</div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-horizontal col-6 \">\n          <div class=\"form-group row\">\n            <label class=\"col-4 col-form-label text-right\">Deadline: </label>\n            <div class=\"col-8\">\n              <my-date-picker #deadlinePicker name=\"deadline-input\" [options]=\"myDatePickerOptions\" class=\"form-control-mydatepicker\" disable=\"true\"></my-date-picker>\n              <div class=\"invalid-feedback\" *ngIf=\"errors.deadline\">{{errors.deadline}}</div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-12\">\n          <button class=\"btn btn-primary\" (click)=\"handleCreate()\">\n            Create Campaign\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/project/tvc-detail/tvc-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/tvc-detail/tvc-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvcDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__ = __webpack_require__("../../../../../src/app/cmaComponents/modals/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TvcDetailComponent = /** @class */ (function () {
    function TvcDetailComponent(projectService, router, modalService, route) {
        this.projectService = projectService;
        this.router = router;
        this.modalService = modalService;
        this.route = route;
        this.myDatePickerOptions = {
            showInputField: true,
            dateFormat: 'dd/mm/yyyy',
        };
        this.setErrorsNull();
    }
    TvcDetailComponent.prototype.ngOnInit = function () {
        this.methodSelectedId = Number(this.route.snapshot.paramMap.get('methodId'));
        ;
        this.typeSelectedId = Number(this.route.snapshot.paramMap.get('typeId'));
        ;
        this.setNameOfMethodAndType();
    };
    TvcDetailComponent.prototype.setNameOfMethodAndType = function () {
        var _this = this;
        this.projectService.getNameOfMethodAndType(this.methodSelectedId, this.typeSelectedId)
            .then(function (data) {
            _this.nameMethodAdvertising = data[0].nameMethodAds;
            _this.nameTypeAdvertising = data[0].nameTypeAds;
        })
            .catch(function (reason) {
            console.log(reason.Data);
        });
    };
    TvcDetailComponent.prototype.handleCreate = function () {
        var _this = this;
        this.setErrorsNull();
        var onConfirm = function () {
            //const formValue = this.projectForm.value;
            var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.startDatePicker.selectionDayTxt, 'DD/MM/YYYY');
            var deadline = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
            //this.isLoading = true;
            _this.projectService.createTVCProject(_this.nameCampaign, _this.description, _this.nameMethodAdvertising, _this.nameTypeAdvertising, _this.goal, _this.budget, _this.ChannelId, _this.timeVideo, _this.timeFrame, startDate.isValid() ? startDate.format('YYYY-MM-DD') : _this.startDatePicker.selectionDayTxt, deadline.isValid() ? deadline.format('YYYY-MM-DD') : _this.deadlinePicker.selectionDayTxt)
                .then(function (value) {
                var newProject = value;
                //this.isLoading = false;
                _this.router.navigate(['project/' + newProject.id + '/detail']);
            })
                .catch(function (reason) {
                //this.isLoading = false;
                _this.setErrors(reason.Data);
            });
        };
        var initialState = {
            message: "Are you sure to create this project?",
            confirmCallback: onConfirm
        };
        this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__cmaComponents_modals__["b" /* ConfirmModalComponent */], { initialState: initialState, class: 'modal-dialog' });
    };
    TvcDetailComponent.prototype.setErrorsNull = function () {
        this.errors = {
            name: "",
            description: "",
            nameMethodAdvertising: "",
            nameTypeAdvertising: "",
            goal: "",
            budget: "",
            ChannelId: "",
            timeVideo: "",
            timeFrame: "",
            startDate: "",
            deadline: "",
        };
    };
    TvcDetailComponent.prototype.setErrors = function (errors) {
        for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var fieldName = error.key;
            var errorMessage = error.message;
            switch (fieldName) {
                case "Name":
                    this.errors.name = errorMessage;
                    break;
                case "Description":
                    this.errors.name = errorMessage;
                    break;
                case "Goal":
                    this.errors.name = errorMessage;
                    break;
                case "Budget":
                    this.errors.name = errorMessage;
                    break;
                case "ChannelId":
                    this.errors.name = errorMessage;
                    break;
                case "timeVideo":
                    this.errors.name = errorMessage;
                    break;
                case "timeFrame":
                    this.errors.name = errorMessage;
                    break;
                case "StartDate":
                    this.errors.startDate = errorMessage;
                    break;
                case "Deadline":
                    this.errors.deadline = errorMessage;
                    break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('startDatePicker'),
        __metadata("design:type", Object)
    ], TvcDetailComponent.prototype, "startDatePicker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deadlinePicker'),
        __metadata("design:type", Object)
    ], TvcDetailComponent.prototype, "deadlinePicker", void 0);
    TvcDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tvc-detail',
            template: __webpack_require__("../../../../../src/app/views/project/tvc-detail/tvc-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/tvc-detail/tvc-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["b" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TvcDetailComponent);
    return TvcDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/project/view/project-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <strong>View campaigns </strong>\r\n      </div>\r\n      <app-spinner *ngIf=\"isPageLoading\"></app-spinner>\r\n      <div *ngIf=\"!isPageLoading\" class=\"card-body\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-btn\">\r\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search(searchField.value)\">\r\n              <i class=\"fa fa-search\"></i> Search\r\n            </button>\r\n          </span>\r\n          <input class=\"form-control\" type=\"text\" (input)=\"search(searchField.value)\" #searchField>\r\n        </div>\r\n        <div class=\"dataTable-container hide-search\">\r\n          <table id=\"allProjectsTable\" datatable [dtOptions]=\"datatableOptions\" class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"text-align: center\">Name</th>\r\n                <th style=\"text-align: center\">Description</th>\r\n                <th style=\"text-align: center\">Start date</th>\r\n                <th style=\"text-align: center\">Deadline</th>\r\n                <th style=\"text-align: center\">Status</th>\r\n                <th style=\"text-align: center\" *ngIf=\"currentUser.isAdmin || currentUser.isManager\">Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let project of projects;let i = index\">\r\n                <td>\r\n                  <a routerLink=\"/project/{{project.id}}/detail\" style=\"color: blue\">\r\n                    {{project.name | truncatetext:50}}\r\n                  </a>\r\n                </td>\r\n                <td>\r\n                  <p *ngIf=\"project.description\">{{project.description | truncatetext:70}}</p>\r\n                  <p *ngIf=\"!project.description\">N/A</p>\r\n                </td>\r\n                <td>\r\n                  <span *ngIf=project.startDate>{{project.startDate | date:'dd/MM/yyyy'}}</span>\r\n                  <span *ngIf=!project.startDate>N/A</span>\r\n                </td>\r\n                <td>\r\n                  <span *ngIf=project.deadline>{{project.deadline | date:'dd/MM/yyyy'}}</span>\r\n                  <span *ngIf=!project.deadline>N/A</span>\r\n                </td>\r\n                <td>\r\n                  <span *ngIf=\"project.status === 0\">\r\n                    Not started\r\n                  </span>\r\n                  <span *ngIf=\"project.status === 1\">\r\n                    Executing\r\n                  </span>\r\n                  <span *ngIf=\"project.status === 2\">\r\n                    Closed\r\n                  </span>\r\n                  <span *ngIf=\"project.status === null\">N/A</span>\r\n                </td>\r\n                <td *ngIf=\"currentUser.isAdmin && project.status!= 2\">\r\n                  <div class=\"row\">\r\n                    <div class=\"btn-group col-12\">\r\n                      <a routerLink=\"/project/{{project.id}}/update\" class=\"btn btn-primary\">\r\n                        Update\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/task\" class=\"btn btn-primary\">\r\n                        Tasks\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/report\" class=\"btn btn-primary\">\r\n                        Report\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/schedule\" class=\"btn btn-primary\">\r\n                        Schedule\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td *ngIf=\"currentUser.isAdmin && project.status == 2\">\r\n                  <div class=\"row\">\r\n                    <div class=\"btn-group col-12 text-center\" style=\"margin-left: 40px;\">\r\n                      <a routerLink=\"/project/{{project.id}}/task\" class=\"btn btn-primary\">\r\n                        Tasks\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/report\" class=\"btn btn-primary\">\r\n                        Report\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/schedule\" class=\"btn btn-primary\">\r\n                        Schedule\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <div class=\"row\" *ngIf=\"currentUser.isManager && project.status!= 2\">\r\n                    <div class=\"btn-group col-12\">\r\n                      <a routerLink=\"/project/{{project.id}}/task\" class=\"btn btn-primary\">\r\n                        Tasks\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/report\" class=\"btn btn-primary\">\r\n                        Report\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/schedule\" class=\"btn btn-primary\">\r\n                        Schedule\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\" *ngIf=\"currentUser.isManager && project.status== 2\">\r\n                    <div class=\"btn-group col-12\">\r\n                      <a routerLink=\"/project/{{project.id}}/task\" class=\"btn btn-primary\">\r\n                        Tasks\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/report\" class=\"btn btn-primary\">\r\n                        Report\r\n                      </a>\r\n                      <a routerLink=\"/project/{{project.id}}/schedule\" class=\"btn btn-primary\">\r\n                        Schedule\r\n                      </a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/project/view/project-management.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table.table-bordered {\n  margin-top: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/project/view/project-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectManagementComponent = /** @class */ (function () {
    function ProjectManagementComponent(projectService, userService) {
        var _this = this;
        this.projectService = projectService;
        this.userService = userService;
        this.datatableOptions = {
            lengthChange: false,
            columnDefs: [
                {
                    searchable: false,
                    orderable: false,
                    targets: [5]
                }
            ],
            order: [
                [4, 'desc']
            ]
        };
        this.userService.getCurrentUserInfo().then(function (value) {
            _this.currentUser = value;
            if (_this.currentUser.isAdmin) {
                _this.projectService.getAllProjects()
                    .then(function (data) {
                    _this.projects = data;
                    _this.isPageLoading = false;
                })
                    .catch(function (reason) {
                    console.debug('ProjectManagementComponent', reason);
                });
            }
            else {
                _this.projectService.getMyProjects()
                    .then(function (data) {
                    _this.projects = data;
                    _this.isPageLoading = false;
                })
                    .catch(function (reason) {
                    console.debug('ProjectManagementComponent', reason);
                });
            }
        });
        this.isPageLoading = true;
    }
    ProjectManagementComponent.prototype.ngOnInit = function () {
    };
    ProjectManagementComponent.prototype.search = function (searchStr) {
        this.datatableElement.dtInstance.then(function (dtInstance) { return dtInstance.search(searchStr).draw(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular_datatables__["a" /* DataTableDirective */])
    ], ProjectManagementComponent.prototype, "datatableElement", void 0);
    ProjectManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-management',
            template: __webpack_require__("../../../../../src/app/views/project/view/project-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/project/view/project-management.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], ProjectManagementComponent);
    return ProjectManagementComponent;
}());



/***/ }),

/***/ "../../../../dhtmlx-gantt/codebase/dhtmlxgantt.js":
/***/ (function(module, exports) {

/*!
 * @license
 * 
 * dhtmlxGantt v.5.0.5 Stardard
 * This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.
 * 
 * (c) Dinamenta, UAB.
 * 
 */
!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=19)}([function(t,e,i){function n(t){var e,i,r;if(t&&"object"==typeof t){for(r={},i=[Array,Number,String,Boolean],e=0;e<i.length;e++)t instanceof i[e]&&(r=e?new i[e](t):new i[e]);h.isDate(t)&&(r=new Date(t));for(e in t)Object.prototype.hasOwnProperty.apply(t,[e])&&(r[e]=n(t[e]))}return r||t}function r(t,e,i){for(var n in e)t[n]&&!i||(t[n]=e[n]);return t}function a(t){return void 0!==t}function s(){return c||(c=(new Date).valueOf()),++c}function o(t,e){return t.bind?t.bind(e):function(){return t.apply(e,arguments)}}function l(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)}function d(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i)}var c,h=i(3);t.exports={copy:n,defined:a,mixin:r,uid:s,bind:o,event:l,eventRemove:d}},function(t,e){function i(t){var e=0,i=0,n=0,r=0;if(t.getBoundingClientRect){var a=t.getBoundingClientRect(),s=document.body,o=document.documentElement||document.body.parentNode||document.body,l=window.pageYOffset||o.scrollTop||s.scrollTop,d=window.pageXOffset||o.scrollLeft||s.scrollLeft,c=o.clientTop||s.clientTop||0,h=o.clientLeft||s.clientLeft||0;e=a.top+l-c,i=a.left+d-h,n=document.body.offsetWidth-a.right,r=document.body.offsetHeight-a.bottom}else{for(;t;)e+=parseInt(t.offsetTop,10),i+=parseInt(t.offsetLeft,10),t=t.offsetParent;n=document.body.offsetWidth-t.offsetWidth-i,r=document.body.offsetHeight-t.offsetHeight-e}return{y:Math.round(e),x:Math.round(i),width:t.offsetWidth,height:t.offsetHeight,right:Math.round(n),bottom:Math.round(r)}}function n(t){var e=!1,i=!1;if(window.getComputedStyle){var n=window.getComputedStyle(t,null);e=n.display,i=n.visibility}else t.currentStyle&&(e=t.currentStyle.display,i=t.currentStyle.visibility);return"none"!=e&&"hidden"!=i}function r(t){return!isNaN(t.getAttribute("tabindex"))&&1*t.getAttribute("tabindex")>=0}function a(t){return!{a:!0,area:!0}[t.nodeName.loLowerCase()]||!!t.getAttribute("href")}function s(t){return!{input:!0,select:!0,textarea:!0,button:!0,object:!0}[t.nodeName.toLowerCase()]||!t.hasAttribute("disabled")}function o(t){for(var e=t.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),i=Array.prototype.slice.call(e,0),o=0;o<i.length;o++){var l=i[o];(r(l)||s(l)||a(l))&&n(l)||(i.splice(o,1),o--)}return i}function l(){var t=document.createElement("div");t.style.cssText="visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function d(t){if(!t)return"";var e=t.className||"";return e.baseVal&&(e=e.baseVal),e.indexOf||(e=""),m(e)}function c(t,e){e&&-1===t.className.indexOf(e)&&(t.className+=" "+e)}function h(t,e){e=e.split(" ");for(var i=0;i<e.length;i++){var n=new RegExp("\\s?\\b"+e[i]+"\\b(?![-_.])","");t.className=t.className.replace(n,"")}}function u(t){return"string"==typeof t?document.getElementById(t)||document.querySelector(t)||document.body:t||document.body}function _(t,e){$.innerHTML=e;var i=$.firstChild;return t.appendChild(i),i}function g(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function f(t,e){for(var i=t.childNodes,n=i.length,r=[],a=0;a<n;a++){var s=i[a];s.className&&-1!==s.className.indexOf(e)&&r.push(s)}return r}function p(t){var e;return t.tagName?e=t:(t=t||window.event,e=t.target||t.srcElement),e}function v(t,e){if(e){for(var i=p(t);i;){if(i.getAttribute){if(i.getAttribute(e))return i}i=i.parentNode}return null}}function m(t){return(String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")}).apply(t)}function k(t,e,i){void 0===i&&(i=!0);for(var n=p(t),r="";n;){if(r=d(n)){var a=r.indexOf(e);if(a>=0){if(!i)return n;var s=0===a||!m(r.charAt(a-1)),o=a+e.length>=r.length||!m(r.charAt(a+e.length));if(s&&o)return n}}n=n.parentNode}return null}function y(t,e){if(t.pageX||t.pageY)var n={x:t.pageX,y:t.pageY};var r=document.documentElement,n={x:t.clientX+r.scrollLeft-r.clientLeft,y:t.clientY+r.scrollTop-r.clientTop},a=i(e);return n.x=n.x-a.x+e.scrollLeft,n.y=n.y-a.y+e.scrollTop,n}function b(t,e){for(;t&&t!=e;)t=t.parentNode;return t==e}var $=document.createElement("div");t.exports={getNodePosition:i,getFocusableNodes:o,getScrollSize:l,getClassName:d,addClassName:c,removeClassName:h,insertNode:_,removeNode:g,getChildNodes:f,toNode:u,locateClassName:k,locateAttribute:v,getTargetNode:p,getRelativeEventPosition:y,isChildOf:b}},function(t,e){function i(t){var e=new n;t.attachEvent=function(t,i,n){return t="ev_"+t.toLowerCase(),e[t]||(e[t]=new r(n||this)),t+":"+e[t].addEvent(i)},t.attachAll=function(t,e){this.attachEvent("listen_all",t,e)},t.callEvent=function(t,i,n){if(e._silent_mode)return!0;var r="ev_"+t.toLowerCase();return e.ev_listen_all&&e.ev_listen_all.apply(n||this,[t].concat(i)),!e[r]||e[r].apply(n||this,i)},t.checkEvent=function(t){return!!e["ev_"+t.toLowerCase()]},t.detachEvent=function(t){if(t){var i=t.split(":");e[i[0]].removeEvent(i[1])}},t.detachAllEvents=function(){for(var t in e)0===t.indexOf("ev_")&&delete e[t]}}var n=function(){this._connected=[],this._silent_mode=!1};n.prototype={_silentStart:function(){this._silent_mode=!0},_silentEnd:function(){this._silent_mode=!1}};var r=function(t){var e=[],i=function(){for(var i=!0,n=0;n<e.length;n++)if(e[n]){var r=e[n].apply(t,arguments);i=i&&r}return i};return i.addEvent=function(t){return"function"==typeof t&&e.push(t)-1},i.removeEvent=function(t){e[t]=null},i};t.exports=i},function(t,e){function i(t){var e=["getFullYear","getMonth","getDate"];if(!t||"object"!=typeof t)return!1;for(var i=0;i<e.length;i++)if(!t[e[i]])return!1;return!0}t.exports={isDate:i}},function(t,e,i){var n=i(0),r=i(2),a=i(1),s=function(){"use strict";function t(t,e,i,s){t&&(this.$container=a.toNode(t),this.$parent=t),this.$config=n.mixin(e,{headerHeight:33}),this.$gantt=s,this.$id=e.id||"c"+n.uid(),this.$name="cell",this.$factory=i,r(this)}return t.prototype.destructor=function(){this.$parent=this.$container=this.$view=null,this.callEvent("onDestroy",[]),this.detachAllEvents()},t.prototype.cell=function(t){return null},t.prototype.scrollTo=function(t,e){1*t==t&&(this.$view.scrollLeft=t),1*e==e&&(this.$view.scrollTop=e)},t.prototype.clear=function(){this.getNode().innerHTML="",this.getNode().className="gantt_layout_content",this.getNode().style.padding="0"},t.prototype.resize=function(t){if(this.$parent)return this.$parent.resize(t);!1===t&&(this.$preResize=!0);var e=this.$container,i=e.offsetWidth,n=e.offsetHeight,r=this.getSize();e===document.body&&(i=document.body.offsetWidth,n=document.body.offsetHeight),i<r.minWidth&&(i=r.minWidth),i>r.maxWidth&&(i=r.maxWidth),n<r.minHeight&&(n=r.minHeight),n>r.maxHeight&&(n=r.maxHeight),this.setSize(i,n);this.$preResize,this.$preResize=!1},t.prototype.hide=function(){this._hide(!0),this.resize()},t.prototype.show=function(t){this._hide(!1),t&&this.$parent&&this.$parent.show(),this.resize()},t.prototype._hide=function(t){if(!0===t&&this.$view.parentNode)this.$view.parentNode.removeChild(this.$view);else if(!1===t&&!this.$view.parentNode){var e=this.$parent.cellIndex(this.$id);this.$parent.moveView(this,e)}this.$config.hidden=t},t.prototype.$toHTML=function(t,e){void 0===t&&(t=""),e=[e||"",this.$config.css||""].join(" ");var i=this.$config,n="";if(i.raw)t="string"==typeof i.raw?i.raw:"";else if(t||(t="<div class='gantt_layout_content' "+(e?" class='"+e+"' ":"")+" >"+(i.html||"")+"</div>"),i.header){var r=i.canCollapse?"<div class='gantt_layout_header_arrow'></div>":"";n="<div class='gantt_layout_header'>"+r+"<div class='gantt_layout_header_content'>"+i.header+"</div></div>"}return"<div class='gantt_layout_cell "+e+"' data-cell-id='"+this.$id+"'>"+n+t+"</div>"},t.prototype.$fill=function(t,e){this.$view=t,this.$parent=e,this.init()},t.prototype.getNode=function(){return this.$view.querySelector("gantt_layout_cell")||this.$view},t.prototype.init=function(){var t=this;this.$gantt.$services.getService("mouseEvents").delegate("click","gantt_header_arrow",function(e){a.locateAttribute(e,"data-cell-id")==t.$id&&t.toggle()}),this.callEvent("onReady",[])},t.prototype.toggle=function(){this.$config.collapsed=!this.$config.collapsed,this.resize()},t.prototype.getSize=function(){var t={height:this.$config.height||0,width:this.$config.width||0,gravity:this.$config.gravity||1,minHeight:this.$config.minHeight||0,minWidth:this.$config.minWidth||0,maxHeight:this.$config.maxHeight||1e5,maxWidth:this.$config.maxWidth||1e5};if(this.$config.collapsed){var e="x"===this.$config.mode;t[e?"width":"height"]=t[e?"maxWidth":"maxHeight"]=this.$config.headerHeight}return t},t.prototype.getContentSize=function(){var t=this.$lastSize.contentX;t!==1*t&&(t=this.$lastSize.width);var e=this.$lastSize.contentY;return e!==1*e&&(e=this.$lastSize.height),{width:t,height:e}},t.prototype._getBorderSizes=function(){var t={top:0,right:0,bottom:0,left:0,horizontal:0,vertical:0};return this._currentBorders&&(this._currentBorders[this._borders.left]&&(t.left=1,t.horizontal++),this._currentBorders[this._borders.right]&&(t.right=1,t.horizontal++),this._currentBorders[this._borders.top]&&(t.top=1,t.vertical++),this._currentBorders[this._borders.bottom]&&(t.bottom=1,t.vertical++)),t},t.prototype.setSize=function(t,e){this.$view.style.width=t+"px",this.$view.style.height=e+"px";var i=this._getBorderSizes(),n=e-i.vertical,r=t-i.horizontal;this.$lastSize={x:t,y:e,contentX:r,contentY:n},this.$config.header?this._sizeHeader():this._sizeContent()},t.prototype._borders={left:"gantt_layout_cell_border_left",right:"gantt_layout_cell_border_right",top:"gantt_layout_cell_border_top",bottom:"gantt_layout_cell_border_bottom"},t.prototype._setBorders=function(t,e){e||(e=this);var i=e.$view;for(var n in this._borders)a.removeClassName(i,this._borders[n]);"string"==typeof t&&(t=[t]);for(var r={},n=0;n<t.length;n++)a.addClassName(i,t[n]),r[t[n]]=!0;e._currentBorders=r},t.prototype._sizeContent=function(){var t=this.$view.childNodes[0];"gantt_layout_content"==t.className&&(t.style.height=this.$lastSize.contentY+"px")},t.prototype._sizeHeader=function(){var t=this.$lastSize;t.contentY-=this.$config.headerHeight;var e=this.$view.childNodes[0],i=this.$view.childNodes[1],n="x"===this.$config.mode;if(this.$config.collapsed)if(i.style.display="none",n){e.className="gantt_layout_header collapsed_x",e.style.width=t.y+"px";var r=Math.floor(t.y/2-t.x/2);e.style.transform="rotate(90deg) translate("+r+"px, "+r+"px)",i.style.display="none"}else e.className="gantt_layout_header collapsed_y";else e.className=n?"gantt_layout_header":"gantt_layout_header vertical",e.style.width="auto",e.style.transform="",i.style.display="",i.style.height=t.contentY+"px";e.style.height=this.$config.headerHeight+"px"},t}();t.exports=s},function(t,e){t.exports=function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}},function(t,e){var i={isIE:navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0,isIE6:!window.XMLHttpRequest&&navigator.userAgent.indexOf("MSIE")>=0,isIE7:navigator.userAgent.indexOf("MSIE 7.0")>=0&&navigator.userAgent.indexOf("Trident")<0,isIE8:navigator.userAgent.indexOf("MSIE 8.0")>=0&&navigator.userAgent.indexOf("Trident")>=0,isOpera:navigator.userAgent.indexOf("Opera")>=0,isChrome:navigator.userAgent.indexOf("Chrome")>=0,isKHTML:navigator.userAgent.indexOf("Safari")>=0||navigator.userAgent.indexOf("Konqueror")>=0,isFF:navigator.userAgent.indexOf("Firefox")>=0,isIPad:navigator.userAgent.search(/iPad/gi)>=0,isEdge:-1!=navigator.userAgent.indexOf("Edge")};t.exports=i},function(t,e,i){var n=i(5),r=i(1),a=(i(0),i(4)),s=function(t){"use strict";function e(e,i,n){var r=t.apply(this,arguments)||this;return e&&(r.$root=!0),r._parseConfig(i),r.$name="layout",r}return n(e,t),e.prototype.destructor=function(){this.$container&&this.$view&&r.removeNode(this.$view);for(var e=0;e<this.$cells.length;e++){this.$cells[e].destructor()}this.$cells=[],t.prototype.destructor.call(this)},e.prototype.resize=function(e){var i=!1;if(this.$root&&!this._resizeInProgress&&(this.callEvent("onBeforeResize",[]),i=!0,this._resizeInProgress=!0),t.prototype.resize.call(this,!0),t.prototype.resize.call(this,!1),i){var n=[];n=n.concat(this.getCellsByType("viewCell")),n=n.concat(this.getCellsByType("viewLayout")),n=n.concat(this.getCellsByType("hostCell"));for(var r=0;r<n.length;r++)n[r].$config.hidden||n[r].setContentSize();var a=!1;if(this.$config.autosize)a=!0,this.autosize(this.$config.autosize);else for(var r=0;r<n.length;r++)n[r].$content&&"scroller"==n[r].$content.$name&&(n[r].$content.shouldHide()?(n[r].hide(),a=!0):n[r].$content.shouldShow()&&(n[r].show(),a=!0));if(a){this.resize();for(var r=0;r<n.length;r++)n[r].$config.hidden||n[r].setContentSize()}this.callEvent("onResize",[])}i&&(this._resizeInProgress=!1)},e.prototype.getCellsByType=function(t){var i=[];if(t===this.$name&&i.push(this),this.$cells)for(var n=0;n<this.$cells.length;n++){var r=e.prototype.getCellsByType.call(this.$cells[n],t);r.length&&i.push.apply(i,r)}return i},e.prototype.getNextSibling=function(t){var e=this.cellIndex(t);return e>=0&&this.$cells[e+1]?this.$cells[e+1]:null},e.prototype.getPrevSibling=function(t){var e=this.cellIndex(t);return e>=0&&this.$cells[e-1]?this.$cells[e-1]:null},e.prototype.cell=function(t){for(var e=0;e<this.$cells.length;e++){var i=this.$cells[e];if(i.$id===t)return i;var n=i.cell(t);if(n)return n}},e.prototype.cellIndex=function(t){for(var e=0;e<this.$cells.length;e++)if(this.$cells[e].$id===t)return e;return-1},e.prototype.moveView=function(t,e){if(this.$cells[e]!==t)return window.alert("Not implemented");e+=this.$config.header?1:0;var i=this.$view;e>=i.childNodes.length?i.appendChild(t.$view):i.insertBefore(t.$view,i.childNodes[e])},e.prototype._parseConfig=function(t){this.$cells=[],this._xLayout=!t.rows;for(var e=t.rows||t.cols||t.views,i=0;i<e.length;i++){var n=e[i];n.mode=this._xLayout?"x":"y";var r=this.$factory.initUI(n);r?(r.$parent=this,this.$cells.push(r)):(e.splice(i,1),i--)}},e.prototype.getCells=function(){return this.$cells},e.prototype.render=function(){var t=r.insertNode(this.$container,this.$toHTML());this.$fill(t,null),this.callEvent("onReady",[]),this.resize(),this.render=this.resize},e.prototype.$fill=function(t,e){this.$view=t,this.$parent=e;for(var i=r.getChildNodes(t,"gantt_layout_cell"),n=i.length-1;n>=0;n--){var a=this.$cells[n];a.$fill(i[n],this),a.$config.hidden&&a.$view.parentNode.removeChild(a.$view)}},e.prototype.$toHTML=function(){for(var e=this._xLayout?"x":"y",i=[],n=0;n<this.$cells.length;n++)i.push(this.$cells[n].$toHTML());return t.prototype.$toHTML.call(this,i.join(""),(this.$root?"gantt_layout_root ":"")+"gantt_layout gantt_layout_"+e)},e.prototype.getContentSize=function(){for(var t,e,i,n=0,r=0,a=0;a<this.$cells.length;a++)e=this.$cells[a],e.$config.hidden||(t=e.getContentSize(),"scrollbar"===e.$config.view&&(t.height=0,t.width=0),e.$config.resizer&&(this._xLayout?t.height=0:t.width=0),i=e._getBorderSizes(),this._xLayout?(n+=t.width+i.horizontal,r=Math.max(r,t.height+i.vertical)):(n=Math.max(n,t.width+i.horizontal),r+=t.height+i.vertical));return i=this._getBorderSizes(),n+=i.horizontal,r+=i.vertical,this.$root&&(n+=1,r+=1),{width:n,height:r}},e.prototype._cleanElSize=function(t){return 1*(t||"").toString().replace("px","")||0},e.prototype._getBoxStyles=function(t){var e=null;e=window.getComputedStyle?window.getComputedStyle(t,null):{width:t.clientWidth,height:t.clientHeight};var i=["width","height","paddingTop","paddingBottom","paddingLeft","paddingRight","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n={boxSizing:"border-box"==e.boxSizing};e.MozBoxSizing&&(n.boxSizing="border-box"==e.MozBoxSizing);for(var r=0;r<i.length;r++)n[i[r]]=e[i[r]]?this._cleanElSize(e[i[r]]):0;var a={horPaddings:n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth,vertPaddings:n.paddingTop+n.paddingBottom+n.borderTopWidth+n.borderBottomWidth,borderBox:n.boxSizing,innerWidth:n.width,innerHeight:n.height,outerWidth:n.width,outerHeight:n.height};return a.borderBox?(a.innerWidth-=a.horPaddings,a.innerHeight-=a.vertPaddings):(a.outerWidth+=a.horPaddings,a.outerHeight+=a.vertPaddings),a},e.prototype.autosize=function(t){var e={x:!1,y:!1};"xy"===t?e.x=e.y=!0:"y"===t||!0===t?e.y=!0:"x"===t&&(e.x=!0);var i=this._getBoxStyles(this.$container),n=this.getContentSize(),r=this.$container;e.x&&(i.borderBox&&(n.width+=i.horPaddings),r.style.width=n.width+"px"),e.y&&(i.borderBox&&(n.height+=i.vertPaddings),r.style.height=n.height+"px")},e.prototype.getSize=function(){this._sizes=[];for(var e=0,i=0,n=1e5,r=0,a=1e5,s=0,o=0;o<this.$cells.length;o++){var l=this._sizes[o]=this.$cells[o].getSize();this.$cells[o].$config.hidden||(this._xLayout?(!l.width&&l.minWidth?e+=l.minWidth:e+=l.width,n+=l.maxWidth,i+=l.minWidth,r=Math.max(r,l.height),a=Math.min(a,l.maxHeight),s=Math.max(s,l.minHeight)):(!l.height&&l.minHeight?r+=l.minHeight:r+=l.height,a+=l.maxHeight,s+=l.minHeight,e=Math.max(e,l.width),n=Math.min(n,l.maxWidth),i=Math.max(i,l.minWidth)))}var d=t.prototype.getSize.call(this);return d.maxWidth>=1e5&&(d.maxWidth=n),d.maxHeight>=1e5&&(d.maxHeight=a),d.minWidth=d.minWidth!==d.minWidth?0:d.minWidth,d.minHeight=d.minHeight!==d.minHeight?0:d.minHeight,this._xLayout?(d.minWidth+=this.$config.margin*this.$cells.length||0,d.minWidth+=2*this.$config.padding||0,d.minHeight+=2*this.$config.padding||0):(d.minHeight+=this.$config.margin*this.$cells.length||0,d.minHeight+=2*this.$config.padding||0),d},e.prototype._calcFreeSpace=function(t,e,i){var n=i?e.minWidth:e.minHeight,r=e.maxWidth,a=t;return a?(a>r&&(a=r),a<n&&(a=n),this._free-=a):(a=Math.floor(this._free/this._gravity*e.gravity),a>r&&(a=r,this._free-=a,this._gravity-=e.gravity),a<n&&(a=n,this._free-=a,this._gravity-=e.gravity)),a},e.prototype._calcSize=function(t,e,i){var n=t,r=i?e.minWidth:e.minHeight,a=i?e.maxWidth:e.maxHeight;return n||(n=Math.floor(this._free/this._gravity*e.gravity)),n>a&&(n=a),n<r&&(n=r),n},e.prototype._configureBorders=function(){this.$root&&this._setBorders([this._borders.left,this._borders.top,this._borders.right,this._borders.bottom],this);for(var t=this._xLayout?this._borders.right:this._borders.bottom,e=this.$cells,i=e.length-1,n=i;n>=0;n--)if(!e[n].$config.hidden){i=n;break}for(var n=0;n<e.length;n++)if(!e[n].$config.hidden){var r=n>=i,a="";!r&&e[n+1]&&"scrollbar"==e[n+1].$config.view&&(this._xLayout?r=!0:a="gantt_layout_cell_border_transparent"),this._setBorders(r?[]:[t,a],e[n])}},e.prototype._updateCellVisibility=function(){for(var t,e=this._visibleCells||{},i=!this._visibleCells,n={},r=0;r<this._sizes.length;r++)t=this.$cells[r],!i&&t.$config.hidden&&e[t.$id]?t._hide(!0):t.$config.hidden||e[t.$id]||t._hide(!1),t.$config.hidden||(n[t.$id]=!0);this._visibleCells=n},e.prototype.setSize=function(e,i){this._configureBorders(),t.prototype.setSize.call(this,e,i),i=this.$lastSize.contentY,e=this.$lastSize.contentX;var n=this.$config.padding||0;this.$view.style.padding=n+"px",this._gravity=0,this._free=this._xLayout?e:i,this._free-=2*n;var r,a;this._updateCellVisibility();for(var s=0;s<this._sizes.length;s++)if(r=this.$cells[s],!r.$config.hidden){var o=this.$config.margin||0;"resizer"!=r.$name||o||(o=-1);var l=r.$view,d=this._xLayout?"marginRight":"marginBottom";s!==this.$cells.length-1&&(l.style[d]=o+"px",this._free-=o),a=this._sizes[s],this._xLayout?a.width||(this._gravity+=a.gravity):a.height||(this._gravity+=a.gravity)}for(var s=0;s<this._sizes.length;s++)if(r=this.$cells[s],!r.$config.hidden){a=this._sizes[s];var c=a.width,h=a.height;this._xLayout?this._calcFreeSpace(c,a,!0):this._calcFreeSpace(h,a,!1)}for(var s=0;s<this.$cells.length;s++)if(r=this.$cells[s],!r.$config.hidden){a=this._sizes[s];var u=void 0,_=void 0;this._xLayout?(u=this._calcSize(a.width,a,!0),_=i-2*n):(u=e-2*n,_=this._calcSize(a.height,a,!1)),r.setSize(u,_)}},e}(a);t.exports=s},function(t,e){function i(t,e){if(!e)return!0;var i=1e3/e;return i<1||!t._on_timeout&&(setTimeout(function(){delete t._on_timeout},i),t._on_timeout=!0,!0)}t.exports=i},function(t,e,i){var n=i(0),r=function(t){function e(t){return t.view?r.call(this,"viewcell",null,t):t.resizer?r.call(this,"resizer",null,t):t.rows||t.cols?r.call(this,"layout",null,t):t.views?r.call(this,"multiview",null,t):r.call(this,"cell",null,t)}function r(e,i,r){var a=l[e];if(!a||!a.create)return!1;var r=n.copy(r);r.id&&!r.css&&(r.css=r.id+"_cell");var s=new a.create(i,r,this,t);return a.configure&&a.configure(s),s.$id||(s.$id=r.id||t.uid()),s.$parent||"object"!=typeof i||(s.$parent=i),s.$config||(s.$config=r),d[s.$id]&&(s.$id=t.uid()),d[s.$id]=s,s}function a(){d={}}function s(t,e,i){l[t]={create:e,configure:i}}function o(t){return d[t]}var l={layout:i(7),multiview:i(10),viewcell:i(11),resizer:i(12),cell:i(4)},d={};return{initUI:e,reset:a,registerView:s,createView:r,getView:o}};t.exports={createFactory:r}},function(t,e,i){var n=i(5),r=i(7),a=i(4),s=function(t){"use strict";function e(e,i,n){for(var r=t.apply(this,arguments)||this,a=0;a<r.$cells.length;a++)r.$cells[a].$config.hidden=0!==a;return r.$cell=r.$cells[0],r.$name="viewLayout",r}return n(e,t),e.prototype.cell=function(e){var i=t.prototype.cell.call(this,e);return i.$view||this.$fill(null,this),i},e.prototype.moveView=function(t){var e=this.$view;this.$cell&&(this.$cell.$config.hidden=!0,e.removeChild(this.$cell.$view)),this.$cell=t,e.appendChild(t.$view)},e.prototype.setSize=function(t,e){a.prototype.setSize.call(this,t,e)},e.prototype.setContentSize=function(){var t=this.$lastSize;this.$cell.setSize(t.contentX,t.contentY)},e.prototype.getSize=function(){var e=t.prototype.getSize.call(this);if(this.$cell){var i=this.$cell.getSize();if(this.$config.byMaxSize)for(var n=0;n<this.$cells.length;n++){var r=this.$cells[n].getSize();for(var a in i)i[a]=Math.max(i[a],r[a])}for(var s in e)e[s]=e[s]||i[s];e.gravity=Math.max(e.gravity,i.gravity)}return e},e}(r);t.exports=s},function(t,e,i){var n=i(5),r=i(0),a=(i(9),i(4)),s=function(t){"use strict";function e(e,i,n){var a=t.apply(this,arguments)||this;return!(i.view&&(i.id&&(this.$id=r.uid()),this.$content=this.$factory.createView(i.view,this,i),!this.$content))&&(a.$name="viewCell",a)}return n(e,t),e.prototype.destructor=function(){this.clear(),t.prototype.destructor.call(this)},e.prototype.clear=function(){if(this.$initialized=!1,this.$content){var e=this.$content.unload||this.$content.destructor;e&&e.call(this.$content)}t.prototype.clear.call(this)},e.prototype.scrollTo=function(e,i){this.$content&&this.$content.scrollTo?this.$content.scrollTo(e,i):t.prototype.scrollTo.call(this,e,i)},e.prototype._setContentSize=function(t,e){var i=this._getBorderSizes(),n=t+i.horizontal,r=e+i.vertical;this.$config.width=n,this.$config.height=r},e.prototype.setSize=function(e,i){if(t.prototype.setSize.call(this,e,i),!this.$preResize&&this.$content&&!this.$initialized){this.$initialized=!0;var n=this.$view.childNodes[0],r=this.$view.childNodes[1];r||(r=n),this.$content.init(r)}},e.prototype.setContentSize=function(){!this.$preResize&&this.$content&&this.$initialized&&this.$content.setSize(this.$lastSize.contentX,this.$lastSize.contentY)},e.prototype.getContentSize=function(){var e=t.prototype.getContentSize.call(this);if(this.$content&&this.$initialized){var i=this.$content.getSize();e.width=void 0===i.contentX?i.width:i.contentX,e.height=void 0===i.contentY?i.height:i.contentY}var n=this._getBorderSizes();return e.width+=n.horizontal,e.height+=n.vertical,e},e}(a);t.exports=s},function(t,e){t.exports=null},function(t,e,i){function n(t){var e=t.date,i=t.$services;return{getSum:function(t,e,i){void 0===i&&(i=t.length-1),void 0===e&&(e=0);for(var n=0,r=e;r<=i;r++)n+=t[r];return n},setSumWidth:function(t,e,i,n){var r=e.width;void 0===n&&(n=r.length-1),void 0===i&&(i=0);var a=n-i+1;if(!(i>r.length-1||a<=0||n>r.length-1)){var s=this.getSum(r,i,n),o=t-s;this.adjustSize(o,r,i,n),this.adjustSize(-o,r,n+1),e.full_width=this.getSum(r)}},splitSize:function(t,e){for(var i=[],n=0;n<e;n++)i[n]=0;return this.adjustSize(t,i),i},adjustSize:function(t,e,i,n){i||(i=0),void 0===n&&(n=e.length-1);for(var r=n-i+1,a=this.getSum(e,i,n),s=0,o=i;o<=n;o++){var l=Math.floor(t*(a?e[o]/a:1/r));a-=e[o],t-=l,r--,e[o]+=l,s+=l}e[e.length-1]+=t},sortScales:function(t){function i(t,i){var n=new Date(1970,0,1);return e.add(n,i,t)-n}t.sort(function(t,e){return i(t.unit,t.step)<i(e.unit,e.step)?1:i(t.unit,t.step)>i(e.unit,e.step)?-1:0});for(var n=0;n<t.length;n++)t[n].index=n},primaryScale:function(){return i.getService("templateLoader").initTemplate("date_scale",void 0,void 0,i.config(),i.templates()),{unit:i.config().scale_unit,step:i.config().step,template:i.templates().date_scale,date:i.config().date_scale,css:i.templates().scale_cell_class}},prepareConfigs:function(t,e,i,n,r,a){for(var s=this.splitSize(n,t.length),o=i,l=[],d=t.length-1;d>=0;d--){var c=d==t.length-1,h=this.initScaleConfig(t[d],r,a);c&&this.processIgnores(h),this.initColSizes(h,e,o,s[d]),this.limitVisibleRange(h),c&&(o=h.full_width),l.unshift(h)}for(var d=0;d<l.length-1;d++)this.alineScaleColumns(l[l.length-1],l[d]);for(var d=0;d<l.length;d++)this.setPosSettings(l[d]);return l},setPosSettings:function(t){for(var e=0,i=t.trace_x.length;e<i;e++)t.left.push((t.width[e-1]||0)+(t.left[e-1]||0))},_ignore_time_config:function(t,n){if(i.config().skip_off_time){for(var r=!0,a=t,s=0;s<n.step;s++)s&&(a=e.add(t,s,n.unit)),r=r&&!this.isWorkTime(a,n.unit);return r}return!1},processIgnores:function(t){t.ignore_x={},t.display_count=t.count},initColSizes:function(t,i,n,r){var a=n;t.height=r;var s=void 0===t.display_count?t.count:t.display_count;s||(s=1),t.col_width=Math.floor(a/s),i&&t.col_width<i&&(t.col_width=i,a=t.col_width*s),t.width=[];for(var o=t.ignore_x||{},l=0;l<t.trace_x.length;l++)if(o[t.trace_x[l].valueOf()]||t.display_count==t.count)t.width[l]=0;else{var d=1;if("month"==t.unit){var c=Math.round((e.add(t.trace_x[l],t.step,t.unit)-t.trace_x[l])/864e5);d=c}t.width[l]=d}this.adjustSize(a-this.getSum(t.width),t.width),t.full_width=this.getSum(t.width)},initScaleConfig:function(t,e,i){var n=r.mixin({count:0,col_width:0,full_width:0,height:0,width:[],left:[],trace_x:[],trace_indexes:{},min_date:new Date(e),max_date:new Date(i)},t);return this.eachColumn(t.unit,t.step,e,i,function(t){n.count++,n.trace_x.push(new Date(t)),n.trace_indexes[t.valueOf()]=n.trace_x.length-1}),n},iterateScales:function(t,e,i,n,r){for(var a=e.trace_x,s=t.trace_x,o=i||0,l=n||s.length-1,d=0,c=1;c<a.length;c++){var h=t.trace_indexes[+a[c]];void 0!==h&&h<=l&&(r&&r.apply(this,[d,c,o,h]),o=h,d=c)}},alineScaleColumns:function(t,e,i,n){this.iterateScales(t,e,i,n,function(i,n,r,a){var s=this.getSum(t.width,r,a-1);this.getSum(e.width,i,n-1)!=s&&this.setSumWidth(s,e,i,n-1)})},eachColumn:function(i,n,r,a,s){var o=new Date(r),l=new Date(a);e[i+"_start"]&&(o=e[i+"_start"](o));var d=new Date(o);for(+d>=+l&&(l=e.add(d,n,i));+d<+l;){s.call(this,new Date(d));var c=d.getTimezoneOffset();d=e.add(d,n,i),d=t._correct_dst_change(d,c,n,i),e[i+"_start"]&&(d=e[i+"_start"](d))}},limitVisibleRange:function(t){var i=t.trace_x,n=t.width.length-1,r=0;if(+i[0]<+t.min_date&&0!=n){var a=Math.floor(t.width[0]*((i[1]-t.min_date)/(i[1]-i[0])));r+=t.width[0]-a,t.width[0]=a,i[0]=new Date(t.min_date)}var s=i.length-1,o=i[s],l=e.add(o,t.step,t.unit);if(+l>+t.max_date&&s>0){var a=t.width[s]-Math.floor(t.width[s]*((l-t.max_date)/(l-o)));r+=t.width[s]-a,t.width[s]=a}if(r){for(var d=this.getSum(t.width),c=0,h=0;h<t.width.length;h++){var u=Math.floor(r*(t.width[h]/d));t.width[h]+=u,c+=u}this.adjustSize(r-c,t.width)}}}}var r=i(0);t.exports=n},function(t,e,i){var n=i(0),r=function(){return{$getConfig:function(){var t=this.$config.config,e=this.$gantt.config;return t?n.mixin(t,e):e}}};t.exports=function(t){n.mixin(t,r())}},function(t,e,i){var n=i(16),r=i(0),a=i(2),s=function(t){return this.pull={},this.$initItem=t.initItem,this.visibleOrder=n.$create(),this.fullOrder=n.$create(),this._skip_refresh=!1,this._filterRule=null,this._searchVisibleOrder={},a(this),this};s.prototype={_parseInner:function(t){for(var e=null,i=[],n=0,r=t.length;n<r;n++)e=t[n],this.$initItem&&(e=this.$initItem(e)),this.callEvent("onItemLoading",[e])&&(this.pull[e.id]=e,this.fullOrder.push(e.id),i.push(e));return i},parse:function(t){this.callEvent("onBeforeParse",[t]);var e=this._parseInner(t);this.refresh(),this.callEvent("onParse",[e])},getItem:function(t){return this.pull[t]},_updateOrder:function(t){t.call(this.visibleOrder),t.call(this.fullOrder)},updateItem:function(t,e){if(r.defined(e)||(e=this.getItem(t)),!this._skip_refresh&&!1===this.callEvent("onBeforeUpdate",[t,e]))return!1;this.pull[t]=e,this._skip_refresh||(this.callEvent("onAfterUpdate",[t,e]),this.callEvent("onStoreUpdated",[t,e,"update"]))},_removeItemInner:function(t){this._updateOrder(function(){this.$remove(t)}),delete this.pull[t]},removeItem:function(t){var e=this.getItem(t);if(!this._skip_refresh&&!1===this.callEvent("onBeforeDelete",[t,e]))return!1;this._removeItemInner(t),this._skip_refresh||(this.filter(),this.callEvent("onAfterDelete",[t,e]),this.callEvent("onStoreUpdated",[t,e,"delete"]))},_addItemInner:function(t,e){if(this.exists(t.id))this.silent(function(){this.updateItem(t.id,t)});else{var i=this.visibleOrder,n=i.length;(!r.defined(e)||e<0)&&(e=n),e>n&&(e=Math.min(i.length,e))}this.pull[t.id]=t,this._skip_refresh||this._updateOrder(function(){this.$insertAt(t.id,e)})},isVisible:function(t){return this.visibleOrder.$find(t)>-1},getVisibleItems:function(){return this.getIndexRange()},addItem:function(t,e){r.defined(t.id)||(t.id=r.uid());var i=t.id;return this.$initItem&&(t=this.$initItem(t)),!(!this._skip_refresh&&!1===this.callEvent("onBeforeAdd",[i,t]))&&(this._addItemInner(t,e),this._skip_refresh||(this.callEvent("onAfterAdd",[i,t]),this.callEvent("onStoreUpdated",[i,t,"add"])),i)},_changeIdInner:function(t,e){this.pull[t]&&(this.pull[e]=this.pull[t]),this.pull[e].id=e,this._updateOrder(function(){this[this.$find(t)]=e}),this._searchVisibleOrder[e]=this._searchVisibleOrder[t],delete this._searchVisibleOrder[t],delete this.pull[t]},changeId:function(t,e){this._changeIdInner(t,e),this.callEvent("onIdChange",[t,e])},exists:function(t){return!!this.pull[t]},_moveInner:function(t,e){var i=this.getIdByIndex(t);this._updateOrder(function(){this.$removeAt(t),this.$insertAt(i,Math.min(this.length,e))})},move:function(t,e){var i=this.getIdByIndex(t),n=this.getItem(i);this._moveInner(t,e),this._skip_refresh||this.callEvent("onStoreUpdated",[i,n,"move"])},clearAll:function(){this.pull={},this.visibleOrder=n.$create(),this.fullOrder=n.$create(),this._skip_refresh||(this.callEvent("onClearAll",[]),this.refresh())},silent:function(t,e){this._skip_refresh=!0,t.call(e||this),this._skip_refresh=!1},arraysEqual:function(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},refresh:function(t){if(!this._skip_refresh){if(t){var e=this.visibleOrder;this.filter(),this.arraysEqual(e,this.visibleOrder)||(t=void 0)}else this.filter();t?this.callEvent("onStoreUpdated",[t,this.pull[t],"paint"]):this.callEvent("onStoreUpdated",[null,null,null])}},count:function(){return this.fullOrder.length},countVisible:function(){return this.visibleOrder.length},sort:function(t){},serialize:function(){},eachItem:function(t){for(var e=0;e<this.fullOrder.length;e++){var i=this.pull[this.fullOrder[e]];t.call(this,i)}},filter:function(t){var e=n.$create();this.eachItem(function(t){this.callEvent("onFilterItem",[t.id,t])&&e.push(t.id)}),this.visibleOrder=e,this._searchVisibleOrder={};for(var i=0;i<this.visibleOrder.length;i++)this._searchVisibleOrder[this.visibleOrder[i]]=i},getIndexRange:function(t,e){e=Math.min(e||1/0,this.countVisible()-1);for(var i=[],n=t||0;n<=e;n++)i.push(this.getItem(this.visibleOrder[n]));return i},getItems:function(){for(var t=[],e=0;e<this.fullOrder.length;e++)t.push(this.pull[this.fullOrder[e]]);return t},getIdByIndex:function(t){return this.visibleOrder[t]},getIndexById:function(t){var e=this._searchVisibleOrder[t];return void 0===e&&(e=-1),e},gerFirst:function(){return this.visibleOrder[0]},getLast:function(){return this.visibleOrder[this.visibleOrder.length-1]},getNext:function(t){return this.visibleOrder[this.getIndexById(t)+1]},getPrev:function(t){return this.visibleOrder[this.getIndexById(t)-1]}},t.exports=s},function(t,e,i){var n=i(0),r={$create:function(t){return n.mixin(t||[],this)},$removeAt:function(t,e){t>=0&&this.splice(t,e||1)},$remove:function(t){this.$removeAt(this.$find(t))},$insertAt:function(t,e){if(e||0===e){var i=this.splice(e,this.length-e);this[e]=t,this.push.apply(this,i)}else this.push(t)},$find:function(t){for(var e=0;e<this.length;e++)if(t==this[e])return e;return-1},$each:function(t,e){for(var i=0;i<this.length;i++)t.call(e||this,this[i])},$map:function(t,e){for(var i=0;i<this.length;i++)this[i]=t.call(e||this,this[i]);return this},$filter:function(t,e){for(var i=0;i<this.length;i++)t.call(e||this,this[i])||(this.splice(i,1),i--);return this}};t.exports=r},function(t,e,i){function n(t){return t.getSubtaskDates()}function r(){return{start_date:new Date,end_date:new Date}}function a(t,e){var i={start_date:null,end_date:null};if(e.config.start_date&&e.config.end_date){i.start_date=e.date[t+"_start"](new Date(e.config.start_date));var n=new Date(e.config.end_date),r=e.date[t+"_start"](new Date(n));n=+n!=+r?e.date.add(r,1,t):r,i.end_date=n}return i}function s(t){var e=t.config.scale_unit;if(t.config.scale_offset_minimal){var i=new d(t),n=[i.primaryScale()].concat(t.config.subscales);i.sortScales(n),e=n[n.length-1].unit}return e}function o(t){var e=s(t),i=a(e,t);i.start_date&&i.end_date||(i=n(t),i.start_date&&i.end_date||(i=r(t)),i.start_date=t.date[e+"_start"](i.start_date),i.start_date=t.calculateEndDate({start_date:t.date[e+"_start"](i.start_date),duration:-1,unit:e}),i.end_date=t.date[e+"_start"](i.end_date),i.end_date=t.calculateEndDate({start_date:i.end_date,duration:2,unit:e})),t._min_date=i.start_date,t._max_date=i.end_date}function l(t){if(t.config.fit_tasks){var e=+t._min_date,i=+t._max_date;if(+t._min_date!=e||+t._max_date!=i)return t.render(),t.callEvent("onScaleAdjusted",[]),!0}return!1}var d=i(13);t.exports=function(t){o(t),l(t)}},function(t,e,i){var n=i(0),r=i(3),a=function(t){return{getWorkHoursArguments:function(){var t=arguments[0];return t=r.isDate(t)?{date:t}:n.mixin({},t)},setWorkTimeArguments:function(){return arguments[0]},unsetWorkTimeArguments:function(){return arguments[0]},isWorkTimeArguments:function(){var e=arguments[0];return e.date?(e=n.mixin({},e),e.unit=e.unit||t.config.duration_unit,e.task=e.task||null,e.calendar=e.calendar||null):(e={},e.date=arguments[0],e.unit=arguments[1],e.task=arguments[2],e.calendar=arguments[3]),e.unit=e.unit||t.config.duration_unit,e},getClosestWorkTimeArguments:function(e){return e=arguments[0],e=r.isDate(e)?{date:e}:n.mixin({},e),e.dir=e.dir||"any",e.unit=e.unit||t.config.duration_unit,e},getDurationConfig:function(t,e,i,n){return this.start_date=t,this.end_date=e,this.task=i,this.calendar=n,this.unit=null,this.step=null,this},_getStartEndConfig:function(e){var i,n=this.getDurationConfig;return e instanceof n?e:(r.isDate(e)?i=new n(arguments[0],arguments[1],arguments[2],arguments[3]):(i=new n(e.start_date,e.end_date,e.task),e.id&&(i.task=e)),i.unit=i.unit||t.config.duration_unit,i.step=i.step||t.config.duration_step,i.start_date=i.start_date||i.start||i.date,i)},getDurationArguments:function(t,e,i,n){return this._getStartEndConfig.apply(this,arguments)},hasDurationArguments:function(t,e,i,n){return this._getStartEndConfig.apply(this,arguments)},calculateEndDateArguments:function(e,i,a,s){var o=arguments[0];return o=r.isDate(o)?{start_date:arguments[0],duration:arguments[1],unit:arguments[2],task:arguments[3],calendar:arguments[4]}:n.mixin({},o),o.unit=o.unit||t.config.duration_unit,o.step=o.step||t.config.duration_step,o}}};t.exports=a},function(t,e,i){t.exports=i(20)},function(t,e,i){window.gantt=i(21)(),i(96)(window.gantt)},function(t,e,i){t.exports=function(){var t={version:"5.0.5",templates:{},keys:{edit_save:13,edit_cancel:27}};i(22)(t),t.$services=t.$inject(i(23)),t.config=t.$inject(i(24)),t.ajax=i(25)(t),t.date=i(26)(t);var e=i(27)(t);t.$services.setService("dnd",function(){return e}),t.$services.setService("config",function(){return t.config}),t.$services.setService("date",function(){return t.date}),t.$services.setService("locale",function(){return t.locale}),t.$services.setService("templates",function(){return t.templates});var n=i(28)(t);t.$services.setService("templateLoader",function(){return n}),i(2)(t);var r=i(29),a=new r;a.registerProvider("global",function(){return{min_date:t._min_date,max_date:t._max_date,selected_task:t._selected_task}}),t.getState=a.getState,t.$services.setService("state",function(){return a});var s=i(0);s.mixin(t,s),t.env=i(6),s.mixin(t,i(30)(t));var o=i(31).init(t);return t.$ui=o.factory,t.$ui.layers=o.render,t.$mouseEvents=o.mouseEvents,t.$services.setService("mouseEvents",function(){return t.$mouseEvents}),t.mixin(t,o.layersApi),i(51)(t),t.$services.setService("layers",function(){return o.layersService}),i(52)(t),i(58)(t),i(61)(t),i(67)(t),i(68)(t),i(69)(t),i(70)(t),i(71)(t),i(72)(t),i(79)(t),i(80)(t),i(81)(t),i(82)(t),i(83)(t),i(84)(t),i(85)(t),i(86)(t),i(87)(t),i(88)(t),i(89)(t),i(90)(t),i(91)(t),i(92)(t),i(93)(t),i(94)(t),t}},function(t,e){t.exports=function(t){t.$inject=function(t){return t(this.$services)}}},function(t,e){t.exports=function(){function t(t,e){i[t]=e}function e(t){return i[t]?i[t]():null}var i={};return{services:{config:"config",templates:"templates",locale:"locale"},setService:t,getService:e,config:function(){return this.getService("config")},templates:function(){return this.getService("templates")},locale:function(){return this.getService("locale")}}}},function(t,e){t.exports=function(){return{layout:{css:"gantt_container",rows:[{cols:[{view:"grid",id:"grid",scrollX:"scrollHor",scrollY:"scrollVer"},{resizer:!0,width:1},{view:"timeline",id:"timeline",scrollX:"scrollHor",scrollY:"scrollVer"},{view:"scrollbar",scroll:"y",id:"scrollVer"}]},{view:"scrollbar",scroll:"x",id:"scrollHor",height:20}]},links:{finish_to_start:"0",start_to_start:"1",finish_to_finish:"2",start_to_finish:"3"},types:{task:"task",project:"project",milestone:"milestone"},duration_unit:"day",work_time:!1,correct_work_time:!1,skip_off_time:!1,cascade_delete:!0,autosize:!1,autosize_min_width:0,autoscroll:!0,autoscroll_speed:30,show_links:!0,show_task_cells:!0,static_background:!1,branch_loading:!1,show_loading:!1,show_chart:!0,show_grid:!0,min_duration:36e5,xml_date:"%d-%m-%Y %H:%i",api_date:"%d-%m-%Y %H:%i",start_on_monday:!0,server_utc:!1,show_progress:!0,fit_tasks:!1,select_task:!0,scroll_on_click:!0,preserve_scroll:!0,readonly:!1,date_grid:"%Y-%m-%d",drag_links:!0,drag_progress:!0,drag_resize:!0,drag_move:!0,drag_mode:{resize:"resize",progress:"progress",move:"move",ignore:"ignore"},round_dnd_dates:!0,link_wrapper_width:20,root_id:0,autofit:!1,columns:[{name:"text",tree:!0,width:"*",resize:!0},{name:"start_date",align:"center",resize:!0},{name:"duration",align:"center"},{name:"add",width:"44"}],step:1,scale_unit:"day",scale_offset_minimal:!0,subscales:[],inherit_scale_class:!1,time_step:60,duration_step:1,date_scale:"%d %M",task_date:"%d %F %Y",time_picker:"%H:%i",task_attribute:"task_id",link_attribute:"link_id",layer_attribute:"data-layer",buttons_left:["gantt_save_btn","gantt_cancel_btn"],_migrate_buttons:{dhx_save_btn:"gantt_save_btn",dhx_cancel_btn:"gantt_cancel_btn",dhx_delete_btn:"gantt_delete_btn"},buttons_right:["gantt_delete_btn"],lightbox:{sections:[{name:"description",height:70,map_to:"text",type:"textarea",focus:!0},{name:"time",type:"duration",map_to:"auto"}],project_sections:[{name:"description",height:70,map_to:"text",type:"textarea",focus:!0},{name:"type",type:"typeselect",map_to:"type"},{name:"time",type:"duration",readonly:!0,map_to:"auto"}],milestone_sections:[{name:"description",height:70,map_to:"text",type:"textarea",focus:!0},{name:"type",type:"typeselect",map_to:"type"},{name:"time",type:"duration",single_date:!0,map_to:"auto"}]},drag_lightbox:!0,sort:!1,details_on_create:!0,details_on_dblclick:!0,initial_scroll:!0,task_scroll_offset:100,order_branch:!1,order_branch_free:!1,task_height:"full",min_column_width:70,min_grid_column_width:70,grid_resizer_column_attribute:"column_index",grid_resizer_attribute:"grid_resizer",keep_grid_width:!1,grid_resize:!1,show_unscheduled:!0,readonly_property:"readonly",editable_property:"editable",calendar_property:"calendar_id",resource_calendars:{},type_renderers:{},open_tree_initially:!1,optimize_render:!0,prevent_default_scroll:!1,show_errors:!0,wai_aria_attributes:!0,smart_scales:!0}}},function(t,e,i){var n=i(6);t.exports=function(t){return{cache:!0,method:"get",parse:function(t){if("string"!=typeof t)return t;var e;return t=t.replace(/^[\s]+/,""),window.DOMParser&&!n.isIE?e=(new window.DOMParser).parseFromString(t,"text/xml"):window.ActiveXObject!==window.undefined&&(e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t)),e},xmltop:function(e,i,n){if(void 0===i.status||i.status<400){var r=i.responseXML?i.responseXML||i:this.parse(i.responseText||i);if(r&&null!==r.documentElement&&!r.getElementsByTagName("parsererror").length)return r.getElementsByTagName(e)[0]}return-1!==n&&t.callEvent("onLoadXMLError",["Incorrect XML",arguments[1],n]),document.createElement("DIV")},xpath:function(t,e){if(e.nodeName||(e=e.responseXML||e),n.isIE)return e.selectNodes(t)||[];for(var i,r=[],a=(e.ownerDocument||e).evaluate(t,e,null,XPathResult.ANY_TYPE,null);;){if(!(i=a.iterateNext()))break;r.push(i)}return r},query:function(t){this._call(t.method||"GET",t.url,t.data||"",t.async||!0,t.callback,null,t.headers)},get:function(t,e){this._call("GET",t,null,!0,e)},getSync:function(t){return this._call("GET",t,null,!1)},put:function(t,e,i){this._call("PUT",t,e,!0,i)},del:function(t,e,i){this._call("DELETE",t,e,!0,i)},post:function(t,e,i){1==arguments.length?e="":2!=arguments.length||"function"!=typeof e&&"function"!=typeof window[e]?e=String(e):(i=e,e=""),this._call("POST",t,e,!0,i)},postSync:function(t,e){return e=null===e?"":String(e),this._call("POST",t,e,!1)},getLong:function(t,e){this._call("GET",t,null,!0,e,{url:t})},postLong:function(t,e,i){2!=arguments.length||"function"!=typeof e&&(window[e],0)||(i=e,e=""),this._call("POST",t,e,!0,i,{url:t,postData:e})},_call:function(e,i,r,a,s,o,l){var d=window.XMLHttpRequest&&!n.isIE?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),c=null!==navigator.userAgent.match(/AppleWebKit/)&&null!==navigator.userAgent.match(/Qt/)&&null!==navigator.userAgent.match(/Safari/);if(a&&(d.onreadystatechange=function(){if(4==d.readyState||c&&3==d.readyState){if((200!=d.status||""===d.responseText)&&!t.callEvent("onAjaxError",[d]))return;window.setTimeout(function(){"function"==typeof s&&s.apply(window,[{xmlDoc:d,filePath:i}]),o&&(void 0!==o.postData?this.postLong(o.url,o.postData,s):this.getLong(o.url,s)),s=null,d=null},1)}}),"GET"!=e||this.cache||(i+=(i.indexOf("?")>=0?"&":"?")+"dhxr"+(new Date).getTime()+"=1"),d.open(e,i,a),l)for(var h in l)d.setRequestHeader(h,l[h]);else"POST"==e.toUpperCase()||"PUT"==e||"DELETE"==e?d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"):"GET"==e&&(r=null);if(d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.send(r),!a)return{xmlDoc:d,filePath:i}},urlSeparator:function(t){return-1!=t.indexOf("?")?"&":"?"}}}},function(t,e){t.exports=function(t){var e={init:function(){for(var e=t.locale,i=e.date.month_short,n=e.date.month_short_hash={},r=0;r<i.length;r++)n[i[r]]=r;for(var i=e.date.month_full,n=e.date.month_full_hash={},r=0;r<i.length;r++)n[i[r]]=r},date_part:function(t){var e=new Date(t);return t.setHours(0),this.hour_start(t),t.getHours()&&(t.getDate()<e.getDate()||t.getMonth()<e.getMonth()||t.getFullYear()<e.getFullYear())&&t.setTime(t.getTime()+36e5*(24-t.getHours())),t},time_part:function(t){return(t.valueOf()/1e3-60*t.getTimezoneOffset())%86400},week_start:function(e){var i=e.getDay();return t.config.start_on_monday&&(0===i?i=6:i--),this.date_part(this.add(e,-1*i,"day"))},month_start:function(t){return t.setDate(1),this.date_part(t)},quarter_start:function(t){this.month_start(t);var e,i=t.getMonth();return e=i>=9?9:i>=6?6:i>=3?3:0,t.setMonth(e),t},year_start:function(t){return t.setMonth(0),this.month_start(t)},day_start:function(t){return this.date_part(t)},hour_start:function(t){return t.getMinutes()&&t.setMinutes(0),this.minute_start(t),t},minute_start:function(t){return t.getSeconds()&&t.setSeconds(0),t.getMilliseconds()&&t.setMilliseconds(0),t},_add_days:function(t,e){var i=new Date(t.valueOf());return i.setDate(i.getDate()+e),e>=0&&!t.getHours()&&i.getHours()&&(i.getDate()<=t.getDate()||i.getMonth()<t.getMonth()||i.getFullYear()<t.getFullYear())&&i.setTime(i.getTime()+36e5*(24-i.getHours())),i},add:function(t,e,i){var n=new Date(t.valueOf());switch(i){case"day":n=this._add_days(n,e);break;case"week":n=this._add_days(n,7*e);break;case"month":n.setMonth(n.getMonth()+e);break;case"year":n.setYear(n.getFullYear()+e);break;case"hour":n.setTime(n.getTime()+60*e*60*1e3);break;case"minute":n.setTime(n.getTime()+60*e*1e3);break;default:return this["add_"+i](t,e,i)}return n},add_quarter:function(t,e){return this.add(t,3*e,"month")},to_fixed:function(t){return t<10?"0"+t:t},copy:function(t){return new Date(t.valueOf())},date_to_str:function(i,n){i=i.replace(/%[a-zA-Z]/g,function(t){switch(t){case"%d":return'"+to_fixed(date.getDate())+"';case"%m":return'"+to_fixed((date.getMonth()+1))+"';case"%j":return'"+date.getDate()+"';case"%n":return'"+(date.getMonth()+1)+"';case"%y":return'"+to_fixed(date.getFullYear()%100)+"';case"%Y":return'"+date.getFullYear()+"';case"%D":return'"+locale.date.day_short[date.getDay()]+"';case"%l":return'"+locale.date.day_full[date.getDay()]+"';case"%M":return'"+locale.date.month_short[date.getMonth()]+"';case"%F":return'"+locale.date.month_full[date.getMonth()]+"';case"%h":return'"+to_fixed((date.getHours()+11)%12+1)+"';case"%g":return'"+((date.getHours()+11)%12+1)+"';case"%G":return'"+date.getHours()+"';case"%H":return'"+to_fixed(date.getHours())+"';case"%i":return'"+to_fixed(date.getMinutes())+"';case"%a":return'"+(date.getHours()>11?"pm":"am")+"';case"%A":return'"+(date.getHours()>11?"PM":"AM")+"';case"%s":return'"+to_fixed(date.getSeconds())+"';case"%W":return'"+to_fixed(getISOWeek(date))+"';default:return t}}),n&&(i=i.replace(/date\.get/g,"date.getUTC"));var r=new Function("date","to_fixed","locale","getISOWeek",'return "'+i+'";');return function(i){return r(i,e.to_fixed,t.locale,e.getISOWeek)}},str_to_date:function(e,i){for(var n="var temp=date.match(/[a-zA-Z]+|[0-9]+/g);",r=e.match(/%[a-zA-Z]/g),a=0;a<r.length;a++)switch(r[a]){case"%j":case"%d":n+="set[2]=temp["+a+"]||1;";break;case"%n":case"%m":n+="set[1]=(temp["+a+"]||1)-1;";break;case"%y":n+="set[0]=temp["+a+"]*1+(temp["+a+"]>50?1900:2000);";break;case"%g":case"%G":case"%h":case"%H":n+="set[3]=temp["+a+"]||0;";break;case"%i":n+="set[4]=temp["+a+"]||0;";break;case"%Y":n+="set[0]=temp["+a+"]||0;";break;case"%a":case"%A":n+="set[3]=set[3]%12+((temp["+a+"]||'').toLowerCase()=='am'?0:12);";break;case"%s":n+="set[5]=temp["+a+"]||0;";break;case"%M":n+="set[1]=locale.date.month_short_hash[temp["+a+"]]||0;";break;case"%F":n+="set[1]=locale.date.month_full_hash[temp["+a+"]]||0;"}var s="set[0],set[1],set[2],set[3],set[4],set[5]";i&&(s=" Date.UTC("+s+")");var o=new Function("date","locale","var set=[0,0,1,0,0,0]; "+n+" return new Date("+s+");");return function(e){return o(e,t.locale)}},getISOWeek:function(t){if(!t)return!1;var e=t.getDay();0===e&&(e=7);var i=new Date(t.valueOf());i.setDate(t.getDate()+(4-e));var n=i.getFullYear(),r=Math.round((i.getTime()-new Date(n,0,1).getTime())/864e5);return 1+Math.floor(r/7)},getUTCISOWeek:function(t){return this.getISOWeek(t)},convert_to_utc:function(t){return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},parseDate:function(e,i){return e&&!e.getFullYear&&(t.defined(i)&&(i="string"==typeof i?t.defined(t.templates[i])?t.templates[i]:t.date.str_to_date(i):t.templates.xml_date),e=e?i(e):null),e}};return e}},function(t,e,i){var n=i(2),r=i(0),a=i(8);t.exports=function(t){function e(e,i){this._obj=e,i&&(this._settings=i),n(this);var a=this.getInputMethods();this._drag_start_timer=null,t.attachEvent("onGanttScroll",r.bind(function(t,e){this.clearDragTimer()},this));for(var s=0;s<a.length;s++)r.bind(function(n){r.event(e,n.down,r.bind(function(a){n.accessor(a)&&(i.original_target={target:a.target||a.srcElement},t.config.touch?(this.clearDragTimer(),this._drag_start_timer=setTimeout(r.bind(function(){this.dragStart(e,a,n)},this),t.config.touch_drag)):this.dragStart(e,a,n))},this)),r.event(document.body,n.up,r.bind(function(t){n.accessor(t)&&this.clearDragTimer()},this))},this)(a[s])}return e.prototype={traceDragEvents:function(t,e){var i=r.bind(function(i){return this.dragMove(t,i,e.accessor)},this),n=(r.bind(function(e){return this.dragScroll(t,e)},this),r.bind(function(t){return t&&t.preventDefault&&t.preventDefault(),(t||event).cancelBubble=!0,!(!r.defined(this.config.updates_per_second)||a(this,this.config.updates_per_second))||i(t)},this)),s=r.bind(function(i){return r.eventRemove(document.body,e.move,n),r.eventRemove(document.body,e.up,s),this.dragEnd(t)},this);r.event(document.body,e.move,n),r.event(document.body,e.up,s)},checkPositionChange:function(t){var e=t.x-this.config.pos.x,i=t.y-this.config.pos.y;return Math.sqrt(Math.pow(Math.abs(e),2)+Math.pow(Math.abs(i),2))>this.config.sensitivity},initDnDMarker:function(){var t=this.config.marker=document.createElement("div");t.className="gantt_drag_marker",t.innerHTML="Dragging object",document.body.appendChild(t)},backupEventTarget:function(e,i){if(t.config.touch){var n=i(e),r=n.target||n.srcElement,a=r.cloneNode(!0);this.config.original_target={target:a},this.config.backup_element=r,r.parentNode.appendChild(a),r.style.display="none",document.body.appendChild(r)}},getInputMethods:function(){var e=[];if(e.push({move:"mousemove",down:"mousedown",up:"mouseup",accessor:function(t){return t}}),t.config.touch){var i=!0;try{document.createEvent("TouchEvent")}catch(t){i=!1}i?e.push({move:"touchmove",down:"touchstart",up:"touchend",accessor:function(t){return t.touches&&t.touches.length>1?null:t.touches[0]?{target:document.elementFromPoint(t.touches[0].clientX,t.touches[0].clientY),pageX:t.touches[0].pageX,pageY:t.touches[0].pageY,clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:t}}):window.navigator.pointerEnabled?e.push({move:"pointermove",down:"pointerdown",up:"pointerup",accessor:function(t){return"mouse"==t.pointerType?null:t}}):window.navigator.msPointerEnabled&&e.push({move:"MSPointerMove",down:"MSPointerDown",up:"MSPointerUp",accessor:function(t){return t.pointerType==t.MSPOINTER_TYPE_MOUSE?null:t}})}return e},clearDragTimer:function(){this._drag_start_timer&&(clearTimeout(this._drag_start_timer),this._drag_start_timer=null)},dragStart:function(e,i,n){this.config={obj:e,marker:null,started:!1,pos:this.getPosition(i),sensitivity:4},this._settings&&r.mixin(this.config,this._settings,!0),this.traceDragEvents(e,n),t._prevent_touch_scroll=!0,document.body.className+=" gantt_noselect",t.config.touch&&this.dragMove(e,i,n.accessor)},dragMove:function(e,i,n){var r=n(i);if(r){if(!this.config.marker&&!this.config.started){var a=this.getPosition(r);if(t.config.touch||this.checkPositionChange(a)){if(this.config.started=!0,this.config.ignore=!1,!1===this.callEvent("onBeforeDragStart",[e,this.config.original_target]))return this.config.ignore=!0,!0;this.backupEventTarget(i,n),this.initDnDMarker(),t._touch_feedback(),this.callEvent("onAfterDragStart",[e,this.config.original_target])}else this.config.ignore=!0}return this.config.ignore?void 0:(r.pos=this.getPosition(r),this.config.marker.style.left=r.pos.x+"px",this.config.marker.style.top=r.pos.y+"px",this.callEvent("onDragMove",[e,r]),!1)}},dragEnd:function(e){var i=this.config.backup_element;i&&i.parentNode&&i.parentNode.removeChild(i),t._prevent_touch_scroll=!1,this.config.marker&&(this.config.marker.parentNode.removeChild(this.config.marker),this.config.marker=null,this.callEvent("onDragEnd",[])),document.body.className=document.body.className.replace(" gantt_noselect","")},getPosition:function(t){var e=0,i=0;return t=t||window.event,t.pageX||t.pageY?(e=t.pageX,i=t.pageY):(t.clientX||t.clientY)&&(e=t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,i=t.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:e,y:i}}},e}},function(t,e){t.exports=function(t){function e(e,i,r){r=r||e;var a=t.config,s=t.templates;t.config[e]&&n[r]!=a[e]&&(i&&s[r]||(s[r]=t.date.date_to_str(a[e]),n[r]=a[e]))}function i(){var i=t.locale.labels;i.gantt_save_btn=i.icon_save,i.gantt_cancel_btn=i.icon_cancel,i.gantt_delete_btn=i.icon_delete;var n=t.date,r=n.date_to_str,a=t.config;e("date_scale",!0,void 0,t.config,t.templates),e("date_grid",!0,"grid_date_format",t.config,t.templates),e("task_date",!0,void 0,t.config,t.templates),t.mixin(t.templates,{xml_date:n.str_to_date(a.xml_date,a.server_utc),xml_format:r(a.xml_date,a.server_utc),api_date:n.str_to_date(a.api_date),progress_text:function(t,e,i){return""},grid_header_class:function(t,e){return""},task_text:function(t,e,i){return i.text},task_class:function(t,e,i){return""},grid_row_class:function(t,e,i){return""},task_row_class:function(t,e,i){return""},task_cell_class:function(t,e){return""},scale_cell_class:function(t){return""},scale_row_class:function(t){return""},grid_indent:function(t){return"<div class='gantt_tree_indent'></div>"},grid_folder:function(t){return"<div class='gantt_tree_icon gantt_folder_"+(t.$open?"open":"closed")+"'></div>"},grid_file:function(t){return"<div class='gantt_tree_icon gantt_file'></div>"},grid_open:function(t){return"<div class='gantt_tree_icon gantt_"+(t.$open?"close":"open")+"'></div>"},grid_blank:function(t){return"<div class='gantt_tree_icon gantt_blank'></div>"},date_grid:function(e,i){return i&&t.isUnscheduledTask(i)&&t.config.show_unscheduled?t.templates.task_unscheduled_time(i):t.templates.grid_date_format(e)},task_time:function(e,i,n){return t.isUnscheduledTask(n)&&t.config.show_unscheduled?t.templates.task_unscheduled_time(n):t.templates.task_date(e)+" - "+t.templates.task_date(i)},task_unscheduled_time:function(t){return""},time_picker:r(a.time_picker),link_class:function(t){return""},link_description:function(e){var i=t.getTask(e.source),n=t.getTask(e.target);return"<b>"+i.text+"</b> &ndash;  <b>"+n.text+"</b>"},drag_link:function(e,i,n,r){e=t.getTask(e);var a=t.locale.labels,s="<b>"+e.text+"</b> "+(i?a.link_start:a.link_end)+"<br/>";return n&&(n=t.getTask(n),s+="<b> "+n.text+"</b> "+(r?a.link_start:a.link_end)+"<br/>"),s},drag_link_class:function(e,i,n,r){var a="";if(e&&n){a=" "+(t.isLinkAllowed(e,n,i,r)?"gantt_link_allow":"gantt_link_deny")}return"gantt_link_tooltip"+a},tooltip_date_format:n.date_to_str("%Y-%m-%d"),tooltip_text:function(e,i,n){return"<b>Task:</b> "+n.text+"<br/><b>Start date:</b> "+t.templates.tooltip_date_format(e)+"<br/><b>End date:</b> "+t.templates.tooltip_date_format(i)}})}var n={};return{initTemplates:i,initTemplate:e}}},function(t,e,i){var n=i(0),r=function(){function t(){var t={};for(var e in r)n.mixin(t,r[e](),!0);return t}function e(t,e){r[t]=e}function i(t){delete r[t]}var r={};return{getState:t,registerProvider:e,unregisterProvider:i}};t.exports=r},function(t,e,i){var n=i(0);i(1);t.exports=function(t){function e(t,e){var i=t.callback;k.hide(t.box),p=t.box=null,i&&i(e)}function r(t){if(p){t=t||event;var i=t.which||event.keyCode,n=!1;if(b.keyboard){if(13==i||32==i){var r=t.target||t.srcElement;y.getClassName(r).indexOf("gantt_popup_button")>-1&&r.click?r.click():(e(p,!0),n=!0)}27==i&&(e(p,!1),n=!0)}if(n)return t.preventDefault&&t.preventDefault(),!(t.cancelBubble=!0)}else;}function a(t){a.cover||(a.cover=document.createElement("DIV"),a.cover.onkeydown=r,a.cover.className="dhx_modal_cover",document.body.appendChild(a.cover));document.body.scrollHeight;a.cover.style.display=t?"inline-block":"none"}function s(e,i,n){return"<div "+t._waiAria.messageButtonAttrString(e)+" class='gantt_popup_button dhtmlx_popup_button gantt_"+i.toLowerCase().replace(/ /g,"_")+"_button dhtmlx_"+i.toLowerCase().replace(/ /g,"_")+"_button' result='"+n+"' ><div>"+e+"</div></div>"}function o(e){b.area||(b.area=document.createElement("DIV"),b.area.className="gantt_message_area dhtmlx_message_area",b.area.style[b.position]="5px",document.body.appendChild(b.area)),b.hide(e.id);var i=document.createElement("DIV");return i.innerHTML="<div>"+e.text+"</div>",i.className="gantt-info dhtmlx-info gantt-"+e.type+" dhtmlx-"+e.type,i.onclick=function(){b.hide(e.id),e=null},t._waiAria.messageInfoAttr(i),"bottom"==b.position&&b.area.firstChild?b.area.insertBefore(i,b.area.firstChild):b.area.appendChild(i),e.expire>0&&(b.timers[e.id]=window.setTimeout(function(){b.hide(e.id)},e.expire)),b.pull[e.id]=i,i=null,e.id}function l(){for(var t=[].slice.apply(arguments,[0]),e=0;e<t.length;e++)if(t[e])return t[e]}function d(i,r,a){var o=document.createElement("DIV"),d=(t.locale,n.uid());t._waiAria.messageModalAttr(o,d),o.className=" gantt_modal_box dhtmlx_modal_box gantt-"+i.type+" dhtmlx-"+i.type,o.setAttribute("dhxbox",1);var c="";if(i.width&&(o.style.width=i.width),i.height&&(o.style.height=i.height),i.title&&(c+='<div class="gantt_popup_title dhtmlx_popup_title">'+i.title+"</div>"),c+='<div class="gantt_popup_text dhtmlx_popup_text" id="'+d+'"><span>'+(i.content?"":i.text)+'</span></div><div  class="gantt_popup_controls dhtmlx_popup_controls">',r&&(c+=s(l(i.ok,t.locale.labels.message_ok,"OK"),"ok",!0)),a&&(c+=s(l(i.cancel,t.locale.labels.message_cancel,"Cancel"),"cancel",!1)),i.buttons)for(var h=0;h<i.buttons.length;h++){var u=i.buttons[h];if("object"==typeof u){var _=u.label,g=u.css||"gantt_"+u.label.toLowerCase()+"_button dhtmlx_"+u.label.toLowerCase()+"_button",f=u.value||h;c+=s(_,g,f)}else c+=s(u,u,h)}if(c+="</div>",o.innerHTML=c,i.content){var v=i.content;"string"==typeof v&&(v=document.getElementById(v)),"none"==v.style.display&&(v.style.display=""),o.childNodes[i.title?1:0].appendChild(v)}return o.onclick=function(t){t=t||event;var n=t.target||t.srcElement;if(n.className||(n=n.parentNode),"gantt_popup_button"==n.className.split(" ")[0]){var r=n.getAttribute("result");r="true"==r||"false"!=r&&r,e(i,r)}},i.box=o,(r||a)&&(p=i),o}function c(e,i,n){var s=e.tagName?e:d(e,i,n);e.hidden||a(!0),document.body.appendChild(s);var o=Math.abs(Math.floor(((window.innerWidth||document.documentElement.offsetWidth)-s.offsetWidth)/2)),l=Math.abs(Math.floor(((window.innerHeight||document.documentElement.offsetHeight)-s.offsetHeight)/2));return"top"==e.position?s.style.top="-3px":s.style.top=l+"px",s.style.left=o+"px",s.onkeydown=r,k.focus(s),e.hidden&&k.hide(s),t.callEvent("onMessagePopup",[s]),s}function h(t){return c(t,!0,!1)}function u(t){return c(t,!0,!0)}function _(t){return c(t)}function g(t,e,i){return"object"!=typeof t&&("function"==typeof e&&(i=e,e=""),t={text:t,type:e,callback:i}),t}function f(t,e,i,r){return"object"!=typeof t&&(t={text:t,type:e,expire:i,id:r}),t.id=t.id||n.uid(),t.expire=t.expire||b.expire,t}var p=null;document.attachEvent?document.attachEvent("onkeydown",r):document.addEventListener("keydown",r,!0);var v=function(){var t=g.apply(this,arguments);return t.type=t.type||"confirm",h(t)},m=function(){var t=g.apply(this,arguments);return t.type=t.type||"alert",u(t)},k=function(){var t=g.apply(this,arguments);return t.type=t.type||"alert",_(t)};k.hide=function(e){for(;e&&e.getAttribute&&!e.getAttribute("dhxbox");)e=e.parentNode;e&&(e.parentNode.removeChild(e),a(!1),t.callEvent("onAfterMessagePopup",[e]))};var y=i(1);k.focus=function(t){setTimeout(function(){var e=y.getFocusableNodes(t);e.length&&e[0].focus&&e[0].focus()},1)};var b=function(t,e,i,n){switch(t=f.apply(this,arguments),t.type=t.type||"info",t.type.split("-")[0]){case"alert":return h(t);case"confirm":return u(t);case"modalbox":return _(t);default:return o(t)}};return b.seed=(new Date).valueOf(),b.uid=n.uid,b.expire=4e3,b.keyboard=!0,b.position="top",b.pull={},b.timers={},b.hideAll=function(){for(var t in b.pull)b.hide(t)},b.hide=function(t){var e=b.pull[t];e&&e.parentNode&&(window.setTimeout(function(){e.parentNode.removeChild(e),e=null},2e3),e.className+=" hidden",b.timers[t]&&window.clearTimeout(b.timers[t]),delete b.pull[t])},{alert:v,confirm:m,message:b,modalbox:k}}},function(t,e,i){function n(t){function e(e,i){var n=i(t);n.onCreated&&n.onCreated(e),e.attachEvent("onReady",function(){n.onInitialized&&n.onInitialized(e)}),e.attachEvent("onDestroy",function(){n.onDestroyed&&n.onDestroyed(e)})}var i=r.createFactory(t);i.registerView("cell",o),i.registerView("resizer",h),i.registerView("scrollbar",u),i.registerView("layout",l,function(t){"main"===(t.$config?t.$config.id:null)&&e(t,b)}),i.registerView("viewcell",c),i.registerView("multiview",d),i.registerView("timeline",_,function(t){"timeline"!==(t.$config?t.$config.id:null)&&"task"!=t.$config.bind||e(t,y)}),i.registerView("grid",g,function(t){"grid"!==(t.$config?t.$config.id:null)&&"task"!=t.$config.bind||e(t,k)});var n=s(t);return{factory:i,mouseEvents:a.init(t),layersApi:n.init(),render:{gridLine:m(t),taskBg:p(t),taskBar:f(t),link:v(t)},layersService:{getDataRender:function(e){return n.getDataRender(e,t)},createDataRender:function(e){return n.createDataRender(e,t)}}}}var r=i(9),a=i(32),s=i(33),o=i(4),l=i(7),d=i(10),c=i(11),h=i(12),u=i(36),_=i(37),g=i(39),f=i(41),p=i(42),v=i(43),m=i(44),k=i(45),y=i(47),b=i(50);t.exports={init:n}},function(t,e,i){var n=i(1),r=function(t){return function(e){function i(t,e,i,n){h[t][e]||(h[t][e]=[]),h[t][e].push({handler:i,root:n})}function n(t,e,i,n){var r=h[t][e];if(r)for(var a=0;a<r.length;a++)i&&i==r[a].root!=i||r[a].handler.apply(this,n)}function r(t){t=t||window.event;var i=t.target||t.srcElement,n=e.locate(t),r=!0;null!==n?r=!e.checkEvent("onTaskClick")||e.callEvent("onTaskClick",[n,t]):e.callEvent("onEmptyClick",[t]);var a=h.click;if(r){if(!s(t,i,a,n))return;n&&e.getTask(n)&&e.config.select_task&&e.selectTask(n)}}function a(t){t=t||window.event;var i=t.target||t.srcElement,n=e.locate(i),r=e.locate(i,e.config.link_attribute),a=!e.checkEvent("onContextMenu")||e.callEvent("onContextMenu",[n,r,t]);return a||(t.preventDefault?t.preventDefault():t.returnValue=!1),a}function s(i,n,r,a){for(var s=!0;n;){var o=t.getClassName(n);if(o){o=o.split(" ");for(var l=0;l<o.length;l++)if(o[l]&&r[o[l]])for(var d=r[o[l]],c=0;c<d.length;c++)if(!d[c].root||t.isChildOf(n,d[c].root)){var h=d[c].handler.call(e,i,a,n);s=s&&!(void 0!==h&&!0!==h)}}n=n.parentNode}return s}function o(t){t=t||window.event;var i=t.target||t.srcElement,n=e.locate(t),r=!e.checkEvent("onTaskDblClick")||e.callEvent("onTaskDblClick",[n,t]);if(r){if(!s(t,i,h.doubleclick,n))return;null!==n&&e.getTask(n)&&r&&e.config.details_on_dblclick&&e.showLightbox(n)}}function l(t){if(e.checkEvent("onMouseMove")){var i=e.locate(t);e._last_move_event=t,e.callEvent("onMouseMove",[i,t])}}function d(t,e,i,n){if(h[t])for(var r=0;r<h[t].length;r++)h[t][r].root==n&&(h[t].splice(r,1),r--)}function c(t){for(var i=0;i<u.length;i++)e.eventRemove(u[i][0],u[i][1],u[i][2]);if(u=[],t){u.push([t,"click",r]),u.push([t,"dblclick",o]),u.push([t,"mousemove",l]),u.push([t,"contextmenu",a]);for(var i=0;i<u.length;i++)e.event(u[i][0],u[i][1],u[i][2])}}var h={click:{},doubleclick:{},contextMenu:{}},u=[];return{reset:c,global:function(t,e,n){i(t,e,n,null)},delegate:i,detach:d,callHandler:n,onDoubleClick:o,onMouseMove:l,onContextMenu:a,onClick:r}}}(n);t.exports={init:r}},function(t,e,i){var n=i(34),r=function(t){var e=n(t);return{getDataRender:function(e){return t.$services.getService("layer:"+e)||null},createDataRender:function(i){var n=i.name,r=i.defaultContainer,a=i.defaultContainerSibling,s=e.createGroup(r,a,function(t){if(!s.filters)return!0;for(var e=0;e<s.filters.length;e++)if(!1===s.filters[e](t))return!1});return t.$services.setService("layer:"+n,function(){return s}),t.attachEvent("onGanttReady",function(){s.addLayer()}),s},init:function(){var e=this.createDataRender({name:"task",defaultContainer:function(){return t.$task_data?t.$task_data:t.$ui.getView("timeline")?t.$ui.getView("timeline").$task_data:void 0},defaultContainerSibling:function(){return t.$task_links?t.$task_links:t.$ui.getView("timeline")?t.$ui.getView("timeline").$task_links:void 0},filter:function(t){}},t),i=this.createDataRender({name:"link",defaultContainer:function(){return t.$task_data?t.$task_data:t.$ui.getView("timeline")?t.$ui.getView("timeline").$task_data:void 0}},t);return{addTaskLayer:function(t){return e.addLayer(t)},_getTaskLayers:function(){return e.getLayers()},removeTaskLayer:function(t){e.removeLayer(t)},_clearTaskLayers:function(){e.clear()},addLinkLayer:function(t){return i.addLayer(t)},_getLinkLayers:function(){return i.getLayers()},removeLinkLayer:function(t){i.removeLayer(t)},_clearLinkLayers:function(){i.clear()}}}}};t.exports=r},function(t,e,i){function n(t){return t instanceof Array||(t=Array.prototype.slice.call(arguments,0)),function(e){for(var i=!0,n=0,r=t.length;n<r;n++){var a=t[n];a&&(i=i&&!1!==a(e.id,e))}return i}}var r=i(35),a=i(0),s=function(t){var e=r(t);return{createGroup:function(t,i,r){return{tempCollection:[],renderers:{},container:t,filters:[],getLayers:function(){var t=[];for(var e in this.renderers)t.push(this.renderers[e]);return t},getLayer:function(t){return this.renderers[t]},_add:function(t){if(t&&(t.id=t.id||a.uid(),this.tempCollection.push(t)),this.container())for(var n=this.container(),r=this.tempCollection,s=0;s<r.length;s++){t=r[s];var o=t.container,l=t.id,d=t.topmost;if(!o.parentNode)if(d)n.appendChild(o);else{var c=i?i():n.firstChild;c?n.insertBefore(o,c):n.appendChild(o)}this.renderers[l]=e.getRenderer(l,t,o),this.tempCollection.splice(s,1),s--}},addLayer:function(t){return t&&("function"==typeof t&&(t={renderer:t}),void 0===t.filter?t.filter=n(r||[]):t.filter instanceof Array&&(t.filter.push(r),t.filter=n(t.filter)),t.container||(t.container=document.createElement("div"))),this._add(t),t?t.id:void 0},eachLayer:function(t){for(var e in this.renderers)t(this.renderers[e])},removeLayer:function(t){this.renderers[t].unload(),delete this.renderers[t]},clear:function(){for(var t in this.renderers)this.renderers[t].unload();this.renderers={}}}}}};t.exports=s},function(t,e){var i=function(t){function e(e,i,s){if(a[e])return a[e];i.renderer||t.assert(!1,"Invalid renderer call");var o=function(t){return i.renderer.call(this,t,i.host)},l=i.filter;return s&&s.setAttribute(n.config().layer_attribute,!0),a[e]={render_item:function(e,i){if(i=i||s,l&&!l(e))return void this.remove_item(e.id);var n=o.call(t,e);this.append(e,n,i)},clear:function(t){this.rendered=r[e]={},this.clear_container(t)},clear_container:function(t){(t=t||s)&&(t.innerHTML="")},render_items:function(t,e){e=e||s;var i=document.createDocumentFragment();this.clear(e);for(var n=0,r=t.length;n<r;n++)this.render_item(t[n],i);e.appendChild(i)},append:function(t,e,i){if(!e)return void(this.rendered[t.id]&&this.remove_item(t.id));this.rendered[t.id]&&this.rendered[t.id].parentNode?this.replace_item(t.id,e):i.appendChild(e),this.rendered[t.id]=e},replace_item:function(t,e){var i=this.rendered[t];i&&i.parentNode&&i.parentNode.replaceChild(e,i),this.rendered[t]=e},remove_item:function(t){this.hide(t),delete this.rendered[t]},hide:function(t){var e=this.rendered[t];e&&e.parentNode&&e.parentNode.removeChild(e)},restore:function(t){var e=this.rendered[t.id];e?e.parentNode||this.append(t,e,s):this.render_item(t,s)},change_id:function(t,e){this.rendered[e]=this.rendered[t],delete this.rendered[t]},rendered:r[e],node:s,unload:function(){this.clear(),delete a[e],delete r[e]}},a[e]}function i(){for(var t in a)e(t).unload()}var n=t.$services,r={},a={};return{getRenderer:e,clearRenderers:i}};t.exports=i},function(t,e,i){var n=i(5),r=i(1),a=i(0),s=i(6),o=(i(2),i(4)),l=function(t){"use strict";function e(e,i,n,r){var s=t.apply(this,arguments)||this;this.$config=a.mixin(i,{scroll:"x"}),s._scrollHorizontalHandler=a.bind(s._scrollHorizontalHandler,s),s._scrollVerticalHandler=a.bind(s._scrollVerticalHandler,s),s._outerScrollVerticalHandler=a.bind(s._outerScrollVerticalHandler,s),s._outerScrollHorizontalHandler=a.bind(s._outerScrollHorizontalHandler,s),s._mouseWheelHandler=a.bind(s._mouseWheelHandler,s),this.$config.hidden=!0;var o=r.config.scroll_size;return this._isHorizontal()?(s.$config.height=o,s.$parent.$config.height=o):(s.$config.width=o,s.$parent.$config.width=o),this.$config.scrollPosition=0,s.$name="scroller",s}function i(t,e){if(e.push(t),t.$cells)for(var n=0;n<t.$cells.length;n++)i(t.$cells[n],e)}return n(e,t),e.prototype.init=function(t){t.innerHTML=this.$toHTML(),this.$view=t.firstChild,this.$view||this.init(),this._isVertical()?this._initVertical():this._initHorizontal(),this._initMouseWheel(),this._initLinkedViews()},e.prototype.$toHTML=function(){return"<div class='gantt_layout_cell "+(this._isHorizontal()?"gantt_hor_scroll":"gantt_ver_scroll")+"'><div style='"+(this._isHorizontal()?"width:2000px":"height:2000px")+"'></div></div>"},e.prototype._getRootParent=function(){for(var t=this.$parent;t&&t.$parent;)t=t.$parent;if(t)return t},e.prototype._eachView=function(){var t=[];return i(this._getRootParent(),t),t},e.prototype._getLinkedViews=function(){for(var t=this._eachView(),e=[],i=0;i<t.length;i++)t[i].$config&&(this._isVertical()&&t[i].$config.scrollY==this.$id||this._isHorizontal()&&t[i].$config.scrollX==this.$id)&&e.push(t[i]);return e},e.prototype._initHorizontal=function(){this.$scroll_hor=this.$view,a.event(this.$view,"scroll",this._scrollHorizontalHandler)},e.prototype._initLinkedViews=function(){for(var t=this._getLinkedViews(),e=this._isVertical()?"gantt_layout_outer_scroll gantt_layout_outer_scroll_vertical":"gantt_layout_outer_scroll gantt_layout_outer_scroll_horizontal",i=0;i<t.length;i++)r.addClassName(t[i].$view||t[i].getNode(),e)},e.prototype._initVertical=function(){this.$scroll_ver=this.$view,a.event(this.$view,"scroll",this._scrollVerticalHandler)},e.prototype._updateLinkedViews=function(){this._getRootParent()},e.prototype._initMouseWheel=function(){s.isFF?a.event(this._getRootParent().$view,"wheel",this._mouseWheelHandler):a.event(this._getRootParent().$view,"mousewheel",this._mouseWheelHandler)},e.prototype.scrollHorizontally=function(t){if(!this._scrolling){this._scrolling=!0,this.$scroll_hor.scrollLeft=t,this.$config.codeScrollLeft=t,t=this.$scroll_hor.scrollLeft;for(var e=this._getLinkedViews(),i=0;i<e.length;i++)e[i].scrollTo&&e[i].scrollTo(t,void 0);var n=this.$config.scrollPosition;this.$config.scrollPosition=t,this.callEvent("onScroll",[n,t,this.$config.scroll]),this._scrolling=!1}},e.prototype.scrollVertically=function(t){if(!this._scrolling){this._scrolling=!0,this.$scroll_ver.scrollTop=t,t=this.$scroll_ver.scrollTop;for(var e=this._getLinkedViews(),i=0;i<e.length;i++)e[i].scrollTo&&e[i].scrollTo(void 0,t);var n=this.$config.scrollPosition;this.$config.scrollPosition=t,this.callEvent("onScroll",[n,t,this.$config.scroll]),this._scrolling=!1}},e.prototype._isVertical=function(){return"y"==this.$config.scroll},e.prototype._isHorizontal=function(){return"x"==this.$config.scroll},e.prototype._scrollHorizontalHandler=function(t){if(!this._isVertical()&&!this._scrolling){if(new Date-(this._wheel_time||0)<100)return!0;if(!this.$gantt._touch_scroll_active){var e=this.$scroll_hor.scrollLeft;this.scrollHorizontally(e),this._oldLeft=this.$scroll_hor.scrollLeft}}},e.prototype._outerScrollHorizontalHandler=function(t){this._isVertical()},e.prototype.show=function(){this.$parent.show()},e.prototype.hide=function(){this.$parent.hide()},e.prototype._getScrollSize=function(){for(var t,e=0,i=0,n=this._getLinkedViews(),r=this._isHorizontal()?"scrollWidth":"scrollHeight",a=this._isHorizontal()?"contentX":"contentY",s=this._isHorizontal()?"x":"y",o=this._getScrollOffset(),l=0;l<n.length;l++)if((t=n[l])&&t.$content&&t.$content.getSize){var d,c=t.$content.getSize();d=c.hasOwnProperty(r)?c[r]:c[a],c[a]>c[s]&&c[a]>e&&d>c[s]-o+2&&(e=d,i=c[s])}return{outerScroll:i,innerScroll:e}},e.prototype.scroll=function(t){this._isHorizontal()?this.scrollHorizontally(t):this.scrollVertically(t)},e.prototype.getScrollState=function(){return{visible:this._isVisible(),direction:this.$config.scroll,size:this.$config.outerSize,scrollSize:this.$config.scrollSize||0,position:this.$config.scrollPosition||0}},e.prototype.setSize=function(e,i){t.prototype.setSize.apply(this,arguments);var n=this._getScrollSize();n.innerScroll&&e>n.outerScroll&&(n.innerScroll+=e-n.outerScroll),this.$config.scrollSize=n.innerScroll,this.$config.width=e,this.$config.height=i,this._setScrollSize(n.innerScroll)},e.prototype._isVisible=function(){return!(!this.$parent||!this.$parent.$view.parentNode)},e.prototype.shouldShow=function(){var t=this._getScrollSize();return!(!t.innerScroll&&this.$parent&&this.$parent.$view.parentNode)&&!(!t.innerScroll||this.$parent&&this.$parent.$view.parentNode)},e.prototype.shouldHide=function(){return!(this._getScrollSize().innerScroll||!this.$parent||!this.$parent.$view.parentNode)},e.prototype.toggleVisibility=function(){this.shouldHide()?this.hide():this.shouldShow()&&this.show()},e.prototype._getScrollOffset=function(){var t=0;if(this._isVertical()){for(var e=null,i=this.$parent.$parent.getCells(),n=0;n<i.length;n++)this.$parent===i[n]&&(e=i[n-1]);!e||"timeline"!=e.$config.view&&"grid"!=e.$config.view||(t=e.$content.$getConfig().scale_height)}else for(var r=this._getLinkedViews(),n=0;n<r.length;n++){var a=r[n],s=a.$parent,i=s.$cells,o=i[i.length-1];if(o&&"scrollbar"==o.$config.view&&!1===o.$config.hidden){t=o.$config.width;break}}return t},e.prototype._setScrollSize=function(t){var e=this._isHorizontal()?"width":"height",i=this._isHorizontal()?this.$scroll_hor:this.$scroll_ver,n=this._getScrollOffset(),a=i.firstChild;n?this._isVertical()?(this.$config.outerSize=this.$config.height-n+3,i.style.height=this.$config.outerSize+"px",i.style.top=n-1+"px",r.addClassName(i,this.$parent._borders.top),r.addClassName(i.parentNode,"gantt_task_vscroll")):(this.$config.outerSize=this.$config.width-n+1,i.style.width=this.$config.outerSize+"px"):(i.style.top="auto",r.removeClassName(i,this.$parent._borders.top),r.removeClassName(i.parentNode,"gantt_task_vscroll")),a.style[e]=t+"px"},e.prototype._scrollVerticalHandler=function(t){if(!this._scrollHorizontalHandler()&&!this._scrolling&&!this.$gantt._touch_scroll_active){var e=this.$scroll_ver.scrollTop;e!=this._oldTop&&(this.scrollVertically(e),this._oldTop=this.$scroll_ver.scrollTop)}},e.prototype._outerScrollVerticalHandler=function(t){this._scrollHorizontalHandler()},e.prototype._checkWheelTarget=function(t){for(var e=this._getLinkedViews().concat(this),i=0;i<e.length;i++){var n=e[i].$view;if(r.isChildOf(t,n))return!0}return!1},e.prototype._mouseWheelHandler=function(t){var e=t.target||t.srcElement;if(this._checkWheelTarget(e)){this._wheel_time=new Date;var i={},n=s.isFF,r=n?-20*t.deltaX:2*t.wheelDeltaX,a=n?-40*t.deltaY:t.wheelDelta;if(!t.shiftKey||t.deltaX||t.wheelDeltaX||(r=2*a,a=0),r&&Math.abs(r)>Math.abs(a)){if(this._isVertical())return;if(i.x)return!0;if(!this.$scroll_hor||!this.$scroll_hor.offsetWidth)return!0;var o=r/-40,l=this._oldLeft,d=l+30*o;if(this.scrollHorizontally(d),this.$scroll_hor.scrollLeft=d,l==this.$scroll_hor.scrollLeft)return!0;this._oldLeft=this.$scroll_hor.scrollLeft}else{if(this._isHorizontal())return;if(i.y)return!0;if(!this.$scroll_ver||!this.$scroll_ver.offsetHeight)return!0;var o=a/-40;void 0===a&&(o=t.detail);var c=this._oldTop,h=this.$scroll_ver.scrollTop+30*o;if(this.scrollVertically(h),this.$scroll_ver.scrollTop=h,c==this.$scroll_ver.scrollTop)return!0;this._oldTop=this.$scroll_ver.scrollTop}return t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,!1}},e}(o);t.exports=l},function(t,e,i){function n(t,e){for(var i,n,r,a=0,s=t.length-1;a<=s;)if(i=Math.floor((a+s)/2),n=+t[i],r=+t[i-1],n<e)a=i+1;else{if(!(n>e)){for(;+t[i]==+t[i+1];)i++;return i}if(!isNaN(r)&&r<e)return i-1;s=i-1}return t.length-1}var r=i(13),a=i(14),s=i(2),o=i(0),l=i(38),d=function(t,e,i,n){this.$config=o.mixin({},e||{}),this.$scaleHelper=new r(n),this.$gantt=n,s(this),a(this)};d.prototype={init:function(t){t.innerHTML+="<div class='gantt_task' style='width:inherit;height:inherit;'></div>",this.$task=t.childNodes[0],this.$task.innerHTML="<div class='gantt_task_scale'></div><div class='gantt_data_area'></div>",this.$task_scale=this.$task.childNodes[0],this.$task_data=this.$task.childNodes[1],this.$task_data.innerHTML="<div class='gantt_task_bg'></div><div class='gantt_links_area'></div><div class='gantt_bars_area'></div>",this.$task_bg=this.$task_data.childNodes[0],this.$task_links=this.$task_data.childNodes[1],this.$task_bars=this.$task_data.childNodes[2],this._tasks={col_width:0,width:[],full_width:0,trace_x:[],rendered:{}};var e=this.$getConfig(),i=e[this.$config.bind+"_attribute"],n=e[this.$config.bindLinks+"_attribute"];!i&&this.$config.bind&&(i=this.$config.bind+"_id"),!n&&this.$config.bindLinks&&(n=this.$config.bindLinks+"_id"),this.$config.item_attribute=i||null,this.$config.link_attribute=n||null;var r=this._createLayerConfig();this.$config.layers||(this.$config.layers=r.tasks),this.$config.linkLayers||(this.$config.linkLayers=r.links),this._attachLayers(this.$gantt),this.callEvent("onReady",[])},setSize:function(t,e){var i=this.$getConfig();if(1*t===t&&(this.$config.width=t),1*e===e){this.$config.height=e;var n=Math.max(this.$config.height-i.scale_height);this.$task_data.style.height=n+"px"}if(this.refresh(),this.$task_bg.style.backgroundImage="",i.smart_rendering){var r=this.$gantt.getDatastore(this.$config.bind);this.$task_bg.style.height=i.row_height*r.countVisible()+"px"}else this.$task_bg.style.height="";for(var a=this._tasks,s=this.$task_data.childNodes,o=0,l=s.length;o<l;o++){var d=s[o];d.hasAttribute("data-layer")&&d.style&&(d.style.width=a.full_width+"px")}},isVisible:function(){return this.$parent&&this.$parent.$config?!this.$parent.$config.hidden:this.$task.offsetWidth},getSize:function(){var t=this.$getConfig(),e=this.$gantt.getDatastore(this.$config.bind),i=e?t.row_height*e.countVisible():0,n=this._tasks.full_width;return{x:this.$config.width,y:this.$config.height,contentX:this.isVisible()?n:0,contentY:this.isVisible()?t.scale_height+i:0,scrollHeight:this.isVisible()?i:0,scrollWidth:this.isVisible()?n:0}},scrollTo:function(t,e){this.isVisible()&&(1*e===e&&(this.$config.scrollTop=e,this.$task_data.scrollTop=this.$config.scrollTop),1*t===t&&(this.$task.scrollLeft=t,this.$config.scrollLeft=this.$task.scrollLeft),this._refreshScales())},_refreshScales:function(){if(this.isVisible()){if(this.$getConfig().smart_scales){var t=this.$config.scrollLeft,e=this.$config.width,i=this._scales;this.$task_scale.innerHTML=this._getScaleChunkHtml(i,t,t+e)}}},_createLayerConfig:function(){var t=this,e=function(){return t.isVisible()};return{tasks:[{expose:!0,renderer:this.$gantt.$ui.layers.taskBar,container:this.$task_bars,filter:[e]},{renderer:this.$gantt.$ui.layers.taskBg,container:this.$task_bg,filter:[function(){return!t.$getConfig().static_background},e]}],links:[{expose:!0,renderer:this.$gantt.$ui.layers.link,container:this.$task_links,filter:[e]}]}},_attachLayers:function(t){this._taskLayers=[],this._linkLayers=[];var e=this,i=this.$gantt.$services.getService("layers");if(this.$config.bind){var n=i.getDataRender(this.$config.bind);n||(n=i.createDataRender({name:this.$config.bind,defaultContainer:function(){return e.$task_data}})),n.container=function(){return e.$task_data};for(var r=this.$config.layers,a=0;r&&a<r.length;a++){var s=r[a];"function"==typeof s&&(s={renderer:s}),s.host=this;var o=n.addLayer(s);this._taskLayers.push(o),s.expose&&(this._taskRenderer=n.getLayer(o))}var d=l.create();this.$gantt.attachEvent("onDataRender",function(){if(e.isVisible()){var t=e.$getConfig();if(t.static_background){var i=e.$gantt.getDatastore(e.$config.bind);d.render(e.$task_bg,t,e.getScale(),t.row_height*i.countVisible())}}})}if(this.$config.bindLinks){var c=i.getDataRender(this.$config.bindLinks);c||(c=i.createDataRender({name:this.$config.bindLinks,defaultContainer:function(){return e.$task_data}}));for(var h=this.$config.linkLayers,a=0;h&&a<h.length;a++){var s=h[a];s.host=this;var u=c.addLayer(s);this._taskLayers.push(u),h[a].expose&&(this._linkRenderer=c.getLayer(u))}}},_clearLayers:function(t){for(var e=this.$gantt.$services.getService("layers"),i=e.getDataRender(this.$config.bind),n=e.getDataRender(this.$config.bindLinks),r=0;r<this._taskLayers.length;r++)i.removeLayer(this._taskLayers[r]);for(var r=0;r<this._linkLayers.length;r++)n.removeLayer(this._linkLayers[r]);this._linkLayers=[],this._taskLayers=[]},_render_tasks_scales:function(){var t=this.$getConfig(),e="",i=0,n=0,r=this.$gantt.getState();if(this.isVisible()){var a=this.$scaleHelper,s=this._getScales();n=t.scale_height;var o=this.$config.width;"x"!=t.autosize&&"xy"!=t.autosize||(o=Math.max(t.autosize_min_width,0));var l=a.prepareConfigs(s,t.min_column_width,o,n-1,r.min_date,r.max_date),d=this._tasks=l[l.length-1];this._scales=l,e=this._getScaleChunkHtml(l,0,this.$config.width),i=d.full_width+"px",n+="px"}this.$task_scale.style.height=n,this.$task_data.style.width=this.$task_scale.style.width=i,this.$task_scale.innerHTML=e},_getScaleChunkHtml:function(t,e,i){for(var n=this.$gantt.$services.templates(),r=[],a=n.scale_row_class,s=0;s<t.length;s++){var o="gantt_scale_line",l=a(t[s]);l&&(o+=" "+l),r.push('<div class="'+o+'" style="height:'+t[s].height+"px;position:relative;line-height:"+t[s].height+'px">'+this._prepareScaleHtml(t[s],e,i)+"</div>")}return r.join("")},_prepareScaleHtml:function(t,e,i){var r=this.$getConfig(),a=this.$gantt.$services.templates(),s=[],o=null,l=null,d=null;(t.template||t.date)&&(l=t.template||this.$gantt.date.date_to_str(t.date));var c=0,h=t.count;!r.smart_scales||isNaN(e)||isNaN(i)||(c=n(t.left,e),h=n(t.left,i)+1),d=t.css||function(){},!t.css&&r.inherit_scale_class&&(d=a.scale_cell_class);for(var u=c;u<h&&t.trace_x[u];u++){o=new Date(t.trace_x[u]);var _=l.call(this,o),g=t.width[u],f=t.height,p=t.left[u],v="",m="",k="";if(g){v="width:"+g+"px;height:"+f+"px;"+(r.smart_scales?"position:absolute;left:"+p+"px":""),k="gantt_scale_cell"+(u==t.count-1?" gantt_last_cell":""),m=d.call(this,o),m&&(k+=" "+m);var y=this.$gantt._waiAria.getTimelineCellAttr(_),b="<div class='"+k+"'"+y+" style='"+v+"'>"+_+"</div>";s.push(b)}}return s.join("")},dateFromPos:function(t){var e=this._tasks;if(t<0||t>e.full_width||!e.full_width)return null;var i=n(this._tasks.left,t),r=this._tasks.left[i],a=e.width[i]||e.col_width,s=0;a&&(s=(t-r)/a);var o=0;return s&&(o=this._getColumnDuration(e,e.trace_x[i])),new Date(e.trace_x[i].valueOf()+Math.round(s*o))},posFromDate:function(t){if(!this.isVisible())return 0;var e=this.columnIndexByDate(t);this.$gantt.assert(e>=0,"Invalid day index");var i=Math.floor(e),n=e%1,r=this._tasks.left[Math.min(i,this._tasks.width.length-1)];return i==this._tasks.width.length&&(r+=this._tasks.width[this._tasks.width.length-1]),n&&(i<this._tasks.width.length?r+=this._tasks.width[i]*(n%1):r+=1),Math.round(r)},columnIndexByDate:function(t){var e=new Date(t).valueOf(),i=this._tasks.trace_x,r=this._tasks.ignore_x,a=this.$gantt.getState();if(e<=a.min_date)return 0;if(e>=a.max_date)return i.length;for(var s=n(i,e),o=+this._tasks.trace_x[s];r[o];)o=this._tasks.trace_x[++s];return o?s+(t-i[s])/this._getColumnDuration(this._tasks,i[s]):0},getItemPosition:function(t,e,i){var n=this.posFromDate(e||t.start_date),r=this.posFromDate(i||t.end_date);return r=Math.max(n,r),{left:n,top:this.getItemTop(t.id),height:this.$gantt.getTaskHeight(),width:Math.max(r-n,0)}},getItemHeight:function(){var t=this.$getConfig(),e=t.task_height;if("full"==e){var i=t.task_height_offset||5;e=t.row_height-i}return e=Math.min(e,t.row_height),Math.max(e,0)},getRowTop:function(t){return t*this.$getConfig().row_height},getItemTop:function(t){if(this.$config.bind){var e=this.$gantt.getDatastore(this.$config.bind);return e?e.getIndexById(t)*this.$gantt.config.row_height:0}return 0},getScale:function(){return this._tasks},_getScales:function(){var t=this.$getConfig(),e=this.$scaleHelper,i=[e.primaryScale()].concat(t.subscales);return e.sortScales(i),i},_getColumnDuration:function(t,e){return this.$gantt.date.add(e,t.step,t.unit)-e},refresh:function(){this._render_tasks_scales()},destroy:function(){var t=this.$gantt;this._clearLayers(t),this.$task=null,this.$task_scale=null,this.$task_data=null,this.$task_bg=null,this.$task_links=null,this.$task_bars=null,this.$gantt=null}},t.exports=d},function(t,e){var i=function(){return{render:function(){}}};t.exports={create:function(){return i()}}},function(t,e,i){var n=(i(1),i(0)),r=i(2),a=i(40),s=i(14),o=function(t,e,i,a){this.$config=n.mixin({},e||{}),this.$gantt=a,this.$parent=t,s(this),r(this),this.$state={}};o.prototype={init:function(t){var e=this.$gantt,i=e._waiAria.gridAttrString(),n=e._waiAria.gridDataAttrString();t.innerHTML="<div class='gantt_grid' style='height:inherit;width:inherit;' "+i+"></div>",this.$grid=t.childNodes[0],this.$grid.innerHTML="<div class='gantt_grid_scale' "+e._waiAria.gridScaleRowAttrString()+"></div><div class='gantt_grid_data' "+n+"></div>",this.$grid_scale=this.$grid.childNodes[0],this.$grid_data=this.$grid.childNodes[1];var r=this.$getConfig()[this.$config.bind+"_attribute"];!r&&this.$config.bind&&(r=this.$config.bind+"_id"),this.$config.item_attribute=r||null;var s=this._createLayerConfig();this.$config.layers||(this.$config.layers=s);var o=a(this.$gantt,this);o.init(),this._renderHeaderResizers=o.doOnRender,this._addLayers(this.$gantt),this.callEvent("onReady",[])},setSize:function(t,e){this.$config.width=t+1,this.$state.width=t,this.$state.height=e;var i=this._setColumnsWidth(this.$config.width);this.$config.width-=1;var n=this.$getConfig();i!==t&&(n.grid_width=i,this.$config.width=i-1);var r=Math.max(this.$state.height-n.scale_height,0);this.$grid_data.style.height=r+"px",this.refresh()},getSize:function(){var t=this.$getConfig(),e=this.$gantt.getDatastore(this.$config.bind),i=e?t.row_height*e.countVisible():0,n=this._getGridWidth();return{x:this.$state.width,y:this.$state.height,contentX:this.isVisible()?n:0,contentY:this.isVisible()?t.scale_height+i:0,scrollHeight:this.isVisible()?i:0,scrollWidth:this.isVisible()?n:0}},refresh:function(){this._calculateGridWidth(),this._renderGridHeader()},scrollTo:function(t,e){if(this.isVisible()){1*t==t&&(this.$grid.scrollLeft=t,this.$state.scrollLeft=this.$grid.scrollLeft);var i=this.$getConfig();1*e==e?(this.$grid_data.scrollTop=e,this.$state.scrollTop=this.$grid_data.scrollTop,i.smart_rendering&&this.$grid_data.scrollTop!==e&&(this.$grid_data.scrollTop=e%i.row_height,this.$state.scrollTop=this.$grid_data.scrollTop)):i.smart_rendering&&this.$grid_data.scrollTop!==this.$state.scrollTop&&(this.$grid_data.scrollTop=this.$state.scrollTop%i.row_height)}},getGridColumns:function(){return this.$getConfig().columns},isVisible:function(){return this.$parent&&this.$parent.$config?!this.$parent.$config.hidden:this.$grid.offsetWidth},_createLayerConfig:function(){var t=this;return[{renderer:this.$gantt.$ui.layers.gridLine,container:this.$grid_data,filter:[function(){return t.isVisible()}]}]},_addLayers:function(t){if(this.$config.bind){this._taskLayers=[];var e=this,i=this.$gantt.$services.getService("layers"),n=i.getDataRender(this.$config.bind);n||(n=i.createDataRender({name:this.$config.bind,defaultContainer:function(){return e.$grid_data}}));for(var r=this.$config.layers,a=0;r&&a<r.length;a++){var s=r[a];s.host=this;var o=n.addLayer(s);this._taskLayers.push(o)}}},_clearLayers:function(t){for(var e=this.$gantt.$services.getService("layers"),i=e.getDataRender(this.$config.bind),n=0;n<this._taskLayers.length;n++)i.removeLayer(this._taskLayers[n]);this._taskLayers=[]},_setColumnsWidth:function(t){for(var e=(this.$getConfig(),this.getGridColumns()),i=0,n=t,r=0,a=e.length;r<a;r++)i+=1*e[r].width;isNaN(i)&&this._calculateGridWidth(),i=0;for(var r=0,a=e.length;r<a;r++)i+=1*e[r].width;for(var s=e.length,o=n-i,l=0,r=0;r<s;r++){var d=Math.floor(o*(e[r].width/i));i-=e[r].width,l=e[r].width+d,(e[r].min_width&&l>=e[r].min_width||!e[r].min_width||l>e[r].width)&&(o-=d,e[r].width=l)}for(var c=o>0?1:-1;o>0&&1===c||o<0&&-1===c;){var h=o;for(r=0;r<s;r++){var t=e[r].width+c;if((e[r].min_width&&t>=e[r].min_width||!e[r].min_width||l>e[r].width)&&(o-=c,e[r].width=t,!o))break}if(h==o)break}return n},_getColsTotalWidth:function(){for(var t=this.getGridColumns(),e=0,i=0;i<t.length;i++){var n=parseFloat(t[i].width);if(window.isNaN(n))return!1;e+=n}return e},_calculateGridWidth:function(){for(var t=this.$getConfig(),e=this.getGridColumns(),i=0,n=[],r=[],a=0;a<e.length;a++){var s=parseFloat(e[a].width);window.isNaN(s)&&(s=50,n.push(a)),r[a]=s,i+=s}var o=this._getGridWidth();if(t.autofit||n.length){var l=o-i;n.length>0?n.length:r.length>0&&r.length;if(n.length>0)for(var d=l/(n.length?n.length:1),a=0;a<n.length;a++){var c=n[a];r[c]+=d}else for(var d=l/(r.length?r.length:1),a=0;a<r.length;a++)r[a]+=d;for(var a=0;a<r.length;a++)e[a].width=r[a]}else{var h=o!=i;this.$config.width=i-1,t.grid_width=i,h&&this.$parent._setContentSize(this.$config.width,this.$config.height)}},_renderGridHeader:function(){for(var t=this.$gantt,e=this.$getConfig(),i=this.$gantt.locale,n=this.$gantt.templates,r=this.getGridColumns(),a=[],s=0,o=i.labels,l=e.scale_height-1,d=0;d<r.length;d++){var c=d==r.length-1,h=r[d];h.name||(h.name=t.uid()+"");var u=1*h.width,_=this._getGridWidth();c&&_>s+u&&(h.width=u=_-s),s+=u;var g=t._sort&&h.name==t._sort.name?"<div class='gantt_sort gantt_"+t._sort.direction+"'></div>":"",f=["gantt_grid_head_cell","gantt_grid_head_"+h.name,c?"gantt_last_cell":"",n.grid_header_class(h.name,h)].join(" "),p="width:"+(u-(c?1:0))+"px;",v=h.label||o["column_"+h.name];v=v||"";var m=t._waiAria.gridScaleCellAttrString(h,v),k="<div class='"+f+"' style='"+p+"' "+m+" column_id='"+h.name+"'>"+v+g+"</div>";a.push(k)}this.$grid_scale.style.height=e.scale_height+"px",this.$grid_scale.style.lineHeight=l+"px",this.$grid_scale.style.width="inherit",this.$grid_scale.innerHTML=a.join(""),this._renderHeaderResizers&&this._renderHeaderResizers()},_getGridWidth:function(){return this.$config.width},destroy:function(){this._clearLayers(this.$gantt),this.$grid=null,this.$grid_scale=null,this.$grid_data=null,this.$gantt=null,this.callEvent("onDestroy",[]),this.detachAllEvents()}},t.exports=o},function(t,e){function i(t,e){return{init:function(){},doOnRender:function(){}}}t.exports=i},function(t,e){function i(t){function e(e,n){var r=n.$getConfig(),a=r.type_renderers,s=a[t.getTaskType(e.type)],o=i;return s||(s=o),s.call(t,e,n,t.bind(o,t))}function i(e,i){if(!t._isAllowedUnscheduledTask(e)){var n=i.getItemPosition(e),s=i.$getConfig(),d=i.getItemHeight(),u=t.getTaskType(e.type),_=Math.floor((t.config.row_height-d)/2);u==s.types.milestone&&s.link_line_width>1&&(_+=1),u==s.types.milestone&&(n.left-=Math.round(d/2),n.width=d);var g=document.createElement("div"),f=Math.round(n.width);i.$config.item_attribute&&g.setAttribute(i.$config.item_attribute,e.id),s.show_progress&&u!=s.types.milestone&&l(e,g,f);var p=o(e,f);e.textColor&&(p.style.color=e.textColor),g.appendChild(p);var v=c("gantt_task_line",t.templates.task_class(e.start_date,e.end_date,e),e.id,i);(e.color||e.progressColor||e.textColor)&&(v+=" gantt_task_inline_color"),g.className=v;var m=["left:"+n.left+"px","top:"+(_+n.top)+"px","height:"+d+"px","line-height:"+Math.max(d<30?d-2:d,0)+"px","width:"+f+"px"];e.color&&m.push("background-color:"+e.color),e.textColor&&m.push("color:"+e.textColor),g.style.cssText=m.join(";");var k=r(e);k&&g.appendChild(k),k=a(e),k&&g.appendChild(k),t._waiAria.setTaskBarAttr(e,g);var y=t.getState();return t.isReadonly(e)||(s.drag_resize&&!t.isSummaryTask(e)&&u!=s.types.milestone&&h(g,"gantt_task_drag",e,function(t){var e=document.createElement("div");return e.className=t,e}),s.drag_links&&s.show_links&&h(g,"gantt_link_control",e,function(t){var e=document.createElement("div");e.className=t,e.style.cssText=["height:"+d+"px","line-height:"+d+"px"].join(";");var i=document.createElement("div");i.className="gantt_link_point";var n=!1;return y.link_source_id&&s.touch&&(n=!0),i.style.display=n?"block":"",e.appendChild(i),e})),g}}function n(t,e,i){if(!e)return null;var n=e(t.start_date,t.end_date,t);if(!n)return null;var r=document.createElement("div");return r.className="gantt_side_content "+i,r.innerHTML=n,r}function r(e){var i="gantt_left "+s(!0,e);return n(e,t.templates.leftside_text,i)}function a(e){var i="gantt_right "+s(!1,e);return n(e,t.templates.rightside_text,i)}function s(e,i){var n=d(e);for(var r in n)for(var a=i[r],s=0;s<a.length;s++)for(var o=t.getLink(a[s]),l=0;l<n[r].length;l++)if(o.type==n[r][l])return"gantt_link_crossing";return""}function o(e,i){var n=document.createElement("div");return t.getTaskType(e.type)!=t.config.types.milestone&&(n.innerHTML=t.templates.task_text(e.start_date,e.end_date,e)),n.className="gantt_task_content",n}function l(e,i,n){var r=1*e.progress||0;n=Math.max(n-2,0);var a=document.createElement("div"),s=Math.round(n*r);s=Math.min(n,s),e.progressColor&&(a.style.backgroundColor=e.progressColor,a.style.opacity=1),a.style.width=s+"px",a.className="gantt_task_progress",a.innerHTML=t.templates.progress_text(e.start_date,e.end_date,e);var o=document.createElement("div");if(o.className="gantt_task_progress_wrapper",o.appendChild(a),i.appendChild(o),t.config.drag_progress&&!t.isReadonly(e)){var l=document.createElement("div");l.style.left=s+"px",l.className="gantt_task_progress_drag",a.appendChild(l),i.appendChild(l)}}function d(e){return e?{$source:[t.config.links.start_to_start],$target:[t.config.links.start_to_start,t.config.links.finish_to_start]}:{$source:[t.config.links.finish_to_start,t.config.links.finish_to_finish],$target:[t.config.links.finish_to_finish]}}function c(e,i,n,r){var a=r.$getConfig(),s=[e];i&&s.push(i);var o=t.getState(),l=t.getTask(n);if(t.getTaskType(l.type)==a.types.milestone&&s.push("gantt_milestone"),t.getTaskType(l.type)==a.types.project&&s.push("gantt_project"),t.isSummaryTask(l)&&s.push("gantt_dependent_task"),a.select_task&&n==o.selected_task&&s.push("gantt_selected"),n==o.drag_id&&(s.push("gantt_drag_"+o.drag_mode),o.touch_drag&&s.push("gantt_touch_"+o.drag_mode)),o.link_source_id==n&&s.push("gantt_link_source"),o.link_target_id==n&&s.push("gantt_link_target"),a.highlight_critical_path&&t.isCriticalTask&&t.isCriticalTask(l)&&s.push("gantt_critical_task"),o.link_landing_area&&o.link_target_id&&o.link_source_id&&o.link_target_id!=o.link_source_id){var d=o.link_source_id,c=o.link_from_start,h=o.link_to_start,u=t.isLinkAllowed(d,n,c,h),_="";_=u?h?"link_start_allow":"link_finish_allow":h?"link_start_deny":"link_finish_deny",s.push(_)}return s.join(" ")}function h(e,i,n,r){var a=t.getState();+n.start_date>=+a.min_date&&e.appendChild(r(i+" task_left")),+n.end_date<=+a.max_date&&e.appendChild(r(i+" task_right"))}return e}t.exports=i},function(t,e){function i(t){function e(e,i){var n=i.$getConfig(),r=i.getScale(),a=r.count,s=document.createElement("div");if(n.show_task_cells)for(var o=0;o<a;o++){var l=r.width[o],d="";if(l>0){var c=document.createElement("div");c.style.width=l+"px",d="gantt_task_cell"+(o==a-1?" gantt_last_cell":""),u=t.templates.task_cell_class(e,r.trace_x[o]),u&&(d+=" "+u),c.className=d,s.appendChild(c)}}var h=t.getGlobalTaskIndex(e.id)%2!=0,u=t.templates.task_row_class(e.start_date,e.end_date,e),_="gantt_task_row"+(h?" odd":"")+(u?" "+u:"");return t.getState().selected_task==e.id&&(_+=" gantt_selected"),s.className=_,n.smart_rendering&&(s.style.position="absolute",s.style.top=i.getItemPosition(e).top+"px",s.style.width="100%"),s.style.height=n.row_height+"px",i.$config.item_attribute&&s.setAttribute(i.$config.item_attribute,e.id),s}return e}t.exports=i},function(t,e){function i(t){function e(e,n){var s=n.$getConfig(),o=a.get_points(e,n),l=r.get_lines(o,n),d=document.createElement("div"),c="gantt_task_link";e.color&&(c+=" gantt_link_inline_color");var h=t.templates.link_class?t.templates.link_class(e):"";h&&(c+=" "+h),s.highlight_critical_path&&t.isCriticalLink&&t.isCriticalLink(e)&&(c+=" gantt_critical_link"),d.className=c,n.$config.link_attribute&&d.setAttribute(n.$config.link_attribute,e.id);for(var u=0;u<l.length;u++){u==l.length-1&&(l[u].size-=s.link_arrow_size);var _=r.render_line(l[u],l[u+1],n);e.color&&(_.firstChild.style.backgroundColor=e.color),d.appendChild(_)}var g=l[l.length-1].direction,f=i(o[o.length-1],g,n);return e.color&&(f.style.borderColor=e.color),d.appendChild(f),t._waiAria.linkAttr(e,d),d}function i(t,e,i){var n=i.$getConfig(),a=document.createElement("div"),s=t.y,o=t.x,l=n.link_arrow_size,d=n.row_height,c="gantt_link_arrow gantt_link_arrow_"+e;switch(e){case r.dirs.right:s-=(l-d)/2,o-=l;break;case r.dirs.left:s-=(l-d)/2;break;case r.dirs.up:o-=l;break;case r.dirs.down:s+=2*l,o-=l}return a.style.cssText=["top:"+s+"px","left:"+o+"px"].join(";"),a.className=c,a}function n(e,i){var n=i.$getConfig(),r=i.getItemPosition(e);if(t.getTaskType(e.type)==n.types.milestone){var a=t.getTaskHeight(),s=Math.sqrt(2*a*a);r.left-=s/2,r.width=s}return r}var r={current_pos:null,dirs:{left:"left",right:"right",up:"up",down:"down"},path:[],clear:function(){this.current_pos=null,this.path=[]},point:function(e){this.current_pos=t.copy(e)},get_lines:function(t){this.clear(),this.point(t[0]);for(var e=1;e<t.length;e++)this.line_to(t[e]);return this.get_path()},line_to:function(e){var i=t.copy(e),n=this.current_pos,r=this._get_line(n,i);this.path.push(r),this.current_pos=i},get_path:function(){return this.path},get_wrapper_sizes:function(t,e){var i,n=e.$getConfig(),r=n.link_wrapper_width,a=(n.link_line_width,t.y+(n.row_height-r)/2);switch(t.direction){case this.dirs.left:i={top:a,height:r,lineHeight:r,left:t.x-t.size-r/2,width:t.size+r};break;case this.dirs.right:i={top:a,lineHeight:r,height:r,left:t.x-r/2,width:t.size+r};break;case this.dirs.up:i={top:a-t.size,lineHeight:t.size+r,height:t.size+r,left:t.x-r/2,width:r};break;case this.dirs.down:i={top:a,lineHeight:t.size+r,height:t.size+r,left:t.x-r/2,width:r}}return i},get_line_sizes:function(t,e){var i,n=e.$getConfig(),r=n.link_line_width,a=n.link_wrapper_width,s=t.size+r;switch(t.direction){case this.dirs.left:case this.dirs.right:i={height:r,width:s,marginTop:(a-r)/2,marginLeft:(a-r)/2};break;case this.dirs.up:case this.dirs.down:i={height:s,width:r,marginTop:(a-r)/2,marginLeft:(a-r)/2}}return i},render_line:function(t,e,i){var n=this.get_wrapper_sizes(t,i),r=document.createElement("div");r.style.cssText=["top:"+n.top+"px","left:"+n.left+"px","height:"+n.height+"px","width:"+n.width+"px"].join(";"),r.className="gantt_line_wrapper";var a=this.get_line_sizes(t,i),s=document.createElement("div");return s.style.cssText=["height:"+a.height+"px","width:"+a.width+"px","margin-top:"+a.marginTop+"px","margin-left:"+a.marginLeft+"px"].join(";"),s.className="gantt_link_line_"+t.direction,r.appendChild(s),r},_get_line:function(t,e){var i=this.get_direction(t,e),n={x:t.x,y:t.y,direction:this.get_direction(t,e)};return i==this.dirs.left||i==this.dirs.right?n.size=Math.abs(t.x-e.x):n.size=Math.abs(t.y-e.y),n},get_direction:function(t,e){return e.x<t.x?this.dirs.left:e.x>t.x?this.dirs.right:e.y>t.y?this.dirs.down:this.dirs.up}},a={path:[],clear:function(){this.path=[]},current:function(){return this.path[this.path.length-1]},point:function(e){return e?(this.path.push(t.copy(e)),e):this.current()},point_to:function(e,i,n){n=n?{x:n.x,y:n.y}:t.copy(this.point());var a=r.dirs;switch(e){case a.left:n.x-=i;break;case a.right:n.x+=i;break;case a.up:n.y-=i;break;case a.down:n.y+=i}return this.point(n)},get_points:function(e,i){var n=i.$getConfig(),a=this.get_endpoint(e,i),s=t.config,o=a.e_y-a.y,l=a.e_x-a.x,d=r.dirs;this.clear(),this.point({x:a.x,y:a.y});var c=2*s.link_arrow_size,h=a.e_x>a.x;if(e.type==n.links.start_to_start)this.point_to(d.left,c),h?(this.point_to(d.down,o),this.point_to(d.right,l)):(this.point_to(d.right,l),this.point_to(d.down,o)),this.point_to(d.right,c);else if(e.type==n.links.finish_to_start)if(h=a.e_x>a.x+2*c,this.point_to(d.right,c),h)l-=c,this.point_to(d.down,o),this.point_to(d.right,l);else{l-=2*c;var u=o>0?1:-1;this.point_to(d.down,u*(s.row_height/2)),this.point_to(d.right,l),this.point_to(d.down,u*(Math.abs(o)-s.row_height/2)),this.point_to(d.right,c)}else if(e.type==n.links.finish_to_finish)this.point_to(d.right,c),h?(this.point_to(d.right,l),this.point_to(d.down,o)):(this.point_to(d.down,o),this.point_to(d.right,l)),this.point_to(d.left,c);else if(e.type==n.links.start_to_finish)if(h=a.e_x>a.x-2*c,this.point_to(d.left,c),h){l+=2*c;var u=o>0?1:-1;this.point_to(d.down,u*(s.row_height/2)),this.point_to(d.right,l),this.point_to(d.down,u*(Math.abs(o)-s.row_height/2)),this.point_to(d.left,c)}else l+=c,this.point_to(d.down,o),this.point_to(d.right,l);return this.path},get_endpoint:function(e,i){var r=i.$getConfig(),a=r.links,s=!1,o=!1;e.type==a.start_to_start?s=o=!0:e.type==a.finish_to_finish?s=o=!1:e.type==a.finish_to_start?(s=!1,o=!0):e.type==a.start_to_finish?(s=!0,o=!1):t.assert(!1,"Invalid link type");var l=t.getTask(e.source),d=t.getTask(e.target),c=n(l,i),h=n(d,i);return{x:s?c.left:c.left+c.width,e_x:o?h.left:h.left+h.width,y:c.top,e_y:h.top}}};return e}t.exports=i},function(t,e,i){function n(t){function e(e,i){for(var n,a=i.getGridColumns(),s=i.$getConfig(),o=[],l=0;l<a.length;l++){var d,c,h,u=l==a.length-1,_=a[l];if("add"==_.name){var g=t._waiAria.gridAddButtonAttrString(_);c="<div "+g+" class='gantt_add'></div>",h=""}else c=_.template?_.template(e):e[_.name],r.isDate(c)&&(c=t.templates.date_grid(c,e)),h=c,c="<div class='gantt_tree_content'>"+c+"</div>";var f="gantt_cell"+(u?" gantt_last_cell":""),p="";if(_.tree){for(var v=0;v<e.$level;v++)p+=t.templates.grid_indent(e);n=t._has_children(e.id),n?(p+=t.templates.grid_open(e),p+=t.templates.grid_folder(e)):(p+=t.templates.grid_blank(e),p+=t.templates.grid_file(e))}var m="width:"+(_.width-(u?1:0))+"px;";this.defined(_.align)&&(m+="text-align:"+_.align+";");var g=t._waiAria.gridCellAttrString(_,h);d="<div class='"+f+"' style='"+m+"' "+g+">"+p+c+"</div>",o.push(d)}var f=t.getGlobalTaskIndex(e.id)%2==0?"":" odd";if(f+=e.$transparent?" gantt_transparent":"",f+=e.$dataprocessor_class?" "+e.$dataprocessor_class:"",t.templates.grid_row_class){var k=t.templates.grid_row_class.call(t,e.start_date,e.end_date,e);k&&(f+=" "+k)}t.getState().selected_task==e.id&&(f+=" gantt_selected");var y=document.createElement("div");return y.className="gantt_row"+f,y.style.height=s.row_height+"px",y.style.lineHeight=s.row_height+"px",i.$config.item_attribute&&y.setAttribute(i.$config.item_attribute,e.id),t._waiAria.taskRowAttr(e,y),y.innerHTML=o.join(""),y}return e}var r=i(3);t.exports=n},function(t,e,i){var n=i(0),r=i(46),a=function(){return function(t){return{onCreated:function(t){t.$config=n.mixin(t.$config,{bind:"task"}),"grid"==t.$config.id&&this.extendGantt(t)},onInitialized:function(e){e.$getConfig().order_branch&&r.init(e.$gantt,e),this.initEvents(e,t),"grid"==e.$config.id&&this.extendDom(e)},onDestroyed:function(e){this.clearEvents(e,t)},initEvents:function(t,e){this._eventHandlers=[];var i=e.$services.getService("mouseEvents");this._eventHandlers.push(["click","gantt_close",e.bind(function(t,e,i){return this.close(e),!1},e)]),this._eventHandlers.push(["click","gantt_open",e.bind(function(t,e,i){return this.open(e),!1},e)]),this._eventHandlers.push(["click","gantt_row",e.bind(function(i,n,r){var a=t.$getConfig();if(null!==n){var s=this.getTask(n);a.scroll_on_click&&this.showDate(s.start_date),e.callEvent("onTaskRowClick",[n,r])}},e)]),this._eventHandlers.push(["click","gantt_grid_head_cell",e.bind(function(n,r,a){var s=a.getAttribute("column_id");if(e.callEvent("onGridHeaderClick",[s,n])){var o=t.$getConfig();if("add"==s)return void i.callHandler("click","gantt_add",void 0,[n,o.root_id]);if(o.sort){for(var l,d=s,c=0;c<o.columns.length;c++)if(o.columns[c].name==s){l=o.columns[c];break}if(l&&void 0!==l.sort&&!0!==l.sort&&!(d=l.sort))return;var h=this._sort&&this._sort.direction&&this._sort.name==s?this._sort.direction:"desc";h="desc"==h?"asc":"desc",this._sort={name:s,direction:h},this.sort(d,"desc"==h)}}},e)]),this._eventHandlers.push(["click","gantt_add",e.bind(function(i,n,r){if(!t.$getConfig().readonly){var a={};return this.createTask(a,n||e.config.root_id),!1}},e)]);for(var n=0;n<this._eventHandlers.length;n++){var r=this._eventHandlers[n];i.delegate(r[0],r[1],r[2],this.$grid)}},clearEvents:function(t,e){for(var i=e.$services.getService("mouseEvents"),n=0;n<this._eventHandlers.length;n++){var r=this._eventHandlers[n];i.detach(r[0],r[1],r[2],t.$grid)}this._eventHandlers=[]},extendDom:function(e){t.$grid=e.$grid,t.$grid_scale=e.$grid_scale,t.$grid_data=e.$grid_data},extendGantt:function(e){t.getGridColumns=t.bind(e.getGridColumns,e),e.attachEvent("onColumnResizeStart",function(){return t.callEvent("onColumnResizeStart",arguments)}),e.attachEvent("onColumnResize",function(){return t.callEvent("onColumnResize",arguments)}),e.attachEvent("onColumnResizeEnd",function(){return t.callEvent("onColumnResizeEnd",arguments)}),e.attachEvent("onColumnResizeComplete",function(e,i){t.config.grid_width=i})}}}}();t.exports=a},function(t,e,i){function n(t,e){function i(t){return r.locateAttribute(t,e.$config.item_attribute)}function n(){return t.getDatastore(e.$config.bind)}var a=t.$services.getService("dnd");if(e.$config.bind&&t.getDatastore(e.$config.bind)){var s=new a(e.$grid_data,{updates_per_second:60});t.defined(e.$getConfig().dnd_sensitivity)&&(s.config.sensitivity=e.$getConfig().dnd_sensitivity),s.attachEvent("onBeforeDragStart",t.bind(function(r,a){var o=i(a);if(!o)return!1;t.hideQuickInfo&&t._hideQuickInfo();var l=o.getAttribute(e.$config.item_attribute),d=n(),c=d.getItem(l);return!t.isReadonly(c)&&(s.config.initial_open_state=c.$open,!!t.callEvent("onRowDragStart",[l,a.target||a.srcElement,a])&&void 0)},t)),s.attachEvent("onAfterDragStart",t.bind(function(t,r){var a=i(r);s.config.marker.innerHTML=a.outerHTML,s.config.id=a.getAttribute(e.$config.item_attribute);var o=n(),l=o.getItem(s.config.id);s.config.index=o.getBranchIndex(s.config.id),s.config.parent=l.parent,l.$open=!1,l.$transparent=!0,this.refreshData()},t)),s.lastTaskOfLevel=function(t){for(var e=null,i=n(),r=i.getItems(),a=0,s=r.length;a<s;a++)r[a].$level==t&&(e=r[a]);return e?e.id:null},s._getGridPos=t.bind(function(t){var i=r.getNodePosition(e.$grid_data),a=n(),s=i.x,o=t.pos.y-10,l=e.$getConfig();o<i.y&&(o=i.y);var d=a.countVisible()*l.row_height;return o>i.y+d-l.row_height&&(o=i.y+d-l.row_height),i.x=s,i.y=o,i},t),s._getTargetY=t.bind(function(t){var i=r.getNodePosition(e.$grid_data),n=t.pageY-i.y+e.$state.scrollTop;return n<0&&(n=0),n},t),s._getTaskByY=t.bind(function(t,i){var r=e.$getConfig(),a=n();t=t||0,r.smart_rendering&&(t+=e.$grid_data.scrollTop);var s=Math.floor(t/r.row_height);return s=i<s?s-1:s,s>a.countVisible()-1?null:a.getIdByIndex(s)},t),s.attachEvent("onDragMove",t.bind(function(t,i){function r(t,e){return!d.isChildOf(_.id,e.id)&&(t.$level==e.$level||l.order_branch_free)}var a=s.config,o=s._getGridPos(i),l=e.$getConfig(),d=n();a.marker.style.left=o.x+10+"px",a.marker.style.top=o.y+"px";var c=d.getItem(s.config.id),h=s._getTargetY(i),u=s._getTaskByY(h,d.getIndexById(c.id));if(d.exists(u)||(u=s.lastTaskOfLevel(l.order_branch_free?c.$level:0))==s.config.id&&(u=null),d.exists(u)){var _=d.getItem(u);if(d.getIndexById(_.id)*l.row_height+l.row_height/2<h){var g=d.getIndexById(_.id),f=d.getNext(_.id),p=d.getItem(f);if(p){if(p.id==c.id)return l.order_branch_free&&d.isChildOf(c.id,_.id)&&1==d.getChildren(_.id).length?void d.move(c.id,d.getBranchIndex(_.id)+1,d.getParent(_.id)):void 0;_=p}else if(f=d.getIdByIndex(g),p=d.getItem(f),r(p,c)&&p.id!=c.id)return void d.move(c.id,-1,d.getParent(p.id))}else if(l.order_branch_free&&_.id!=c.id&&r(_,c)){if(!d.hasChild(_.id))return _.$open=!0,void d.move(c.id,-1,_.id);if(d.getIndexById(_.id)||l.row_height/3<h)return}for(var g=d.getIndexById(_.id),v=d.getIdByIndex(g-1),m=d.getItem(v),k=1;(!m||m.id==_.id)&&g-k>=0;)v=d.getIdByIndex(g-k),m=d.getItem(v),k++;if(c.id==_.id)return;r(_,c)&&c.id!=_.id?d.move(c.id,0,0,_.id):_.$level!=c.$level-1||d.getChildren(_.id).length?m&&r(m,c)&&c.id!=m.id&&d.move(c.id,-1,d.getParent(m.id)):d.move(c.id,0,_.id)}return!0},t)),s.attachEvent("onDragEnd",t.bind(function(){var t=n(),e=t.getItem(s.config.id);e.$transparent=!1,e.$open=s.config.initial_open_state,!1===this.callEvent("onBeforeRowDragEnd",[s.config.id,s.config.parent,s.config.index])?(t.move(s.config.id,s.config.index,s.config.parent),e.$drop_target=null):this.callEvent("onRowDragEnd",[s.config.id,e.$drop_target]),t.refresh(e.id)},t))}}var r=i(1);t.exports={init:n}},function(t,e,i){var n=i(0),r=i(48),a=i(49),s=i(1),o=function(){return function(t){var e=t.$services;return{onCreated:function(t){var e=t.$config;e.bind=n.defined(e.bind)?e.bind:"task",e.bindLinks=n.defined(e.bindLinks)?e.bindLinks:"link",t._linksDnD=a.createLinkDND(),t._tasksDnD=r.createTaskDND(),t._tasksDnD.extend(t),"timeline"==t.$config.id&&this.extendGantt(t)},onInitialized:function(e){this._attachDomEvents(t),this._attachGanttEvents(t),this._attachStateProvider(t,e),e._tasksDnD.init(e,t),e._linksDnD.init(e,t),"timeline"==e.$config.id&&this.extendDom(e)},onDestroyed:function(e){this._clearGanttEvents(t),this._clearDomEvents(t),this._clearStateProvider(t)},extendDom:function(e){t.$task=e.$task,t.$task_scale=e.$task_scale,t.$task_data=e.$task_data,t.$task_bg=e.$task_bg,t.$task_links=e.$task_links,t.$task_bars=e.$task_bars},extendGantt:function(e){t.dateFromPos=t.bind(e.dateFromPos,e),t.posFromDate=t.bind(e.posFromDate,e),t.getRowTop=t.bind(e.getRowTop,e),t.getTaskTop=t.bind(e.getItemTop,e),t.getTaskPosition=t.bind(e.getItemPosition,e),t.getTaskHeight=t.bind(e.getItemHeight,e),t.columnIndexByDate=t.bind(e.columnIndexByDate,e),t.roundTaskDates=t.bind(e.roundTaskDates,e),t.getScale=t.bind(e.getScale,e),t.getTaskNode=function(t){return e._taskRenderer.rendered[t]},t.getLinkNode=function(t){return e._linkRenderer.rendered[t]}},_attachDomEvent:function(t,i,n){this._events||(this._events=[]);var r=e.getService("mouseEvents"),a={event:t,className:i,handler:n,root:this.$task};r.delegate(a.event,a.className,a.handler,a.root),this._events.push(a)},_clearDomEvents:function(){for(var t=e.getService("mouseEvents"),i=0;i<this._events.length;i++){var n=this._events[i];t.detach(n.event,n.className,n.handler,n.root)}this._events=[]},_attachDomEvents:function(t){function e(e,i){if(e&&this.callEvent("onLinkDblClick",[e,i])){var n=this.getLink(e);if(this.isReadonly(n))return;var r=this.locale.labels.link+" "+this.templates.link_description(this.getLink(e))+" "+this.locale.labels.confirm_link_deleting;window.setTimeout(function(){t._dhtmlx_confirm(r,"",function(){t.deleteLink(e)})},this.config.touch?300:1)}}this._attachDomEvent("click","gantt_task_link",t.bind(function(t,e){var i=this.locate(t,this.config.link_attribute);i&&this.callEvent("onLinkClick",[i,t])},t)),this._attachDomEvent("click","gantt_scale_cell",t.bind(function(e,i){var n=s.getRelativeEventPosition(e,t.$task_data),r=t.dateFromPos(n.x),a=Math.floor(t.columnIndexByDate(r)),o=t.getScale().trace_x[a];t.callEvent("onScaleClick",[e,o])},t)),this._attachDomEvent("doubleclick","gantt_task_link",t.bind(function(i,n,r){var n=this.locate(i,t.config.link_attribute);e.call(this,n,i)},t)),this._attachDomEvent("doubleclick","gantt_link_point",t.bind(function(t,i,n){var i=this.locate(t),r=this.getTask(i),a=null;return n.parentNode&&s.getClassName(n.parentNode)&&(a=s.getClassName(n.parentNode).indexOf("_left")>-1?r.$target[0]:r.$source[0]),a&&e.call(this,a,t),!1},t))},_attachGanttEvents:function(t){function e(t,e,i,n){for(var r=0;r<t.length;r++)t[r].change_id(e,i),t[r].render_item(n)}this._clearGanttEvents(t),this._onTaskIdChange=t.attachEvent("onTaskIdChange",function(i,n){e(t._getTaskLayers(),i,n,t.getTask(n))}),this._onLinkIdChange&&t.detachEvent(this._onLinkIdChange),this._onLinkIdChange=t.attachEvent("onLinkIdChange",function(i,n){e(t._getLinkLayers(),i,n,t.getLink(n))})},_clearGanttEvents:function(t){this._onTaskIdChange&&t.detachEvent(this._onTaskIdChange),this._onLinkIdChange&&t.detachEvent(this._onLinkIdChange)},_attachStateProvider:function(t,i){var n=i;e.getService("state").registerProvider("tasksTimeline",function(){return{scale_unit:n._tasks?n._tasks.unit:void 0,scale_step:n._tasks?n._tasks.step:void 0}})},_clearStateProvider:function(){e.getService("state").unregisterProvider("tasksTimeline")}}}}();t.exports=o},function(t,e,i){function n(t,e){var i=e.$services;return{drag:null,_events:{before_start:{},before_finish:{},after_finish:{}},_handlers:{},init:function(){this.clear_drag_state();var t=e.config.drag_mode;this.set_actions(),i.getService("state").registerProvider("tasksDnd",s.bind(function(){return{drag_id:this.drag?this.drag.id:void 0,drag_mode:this.drag?this.drag.mode:void 0,drag_from_start:this.drag?this.drag.left:void 0}},this));var n={before_start:"onBeforeTaskDrag",before_finish:"onBeforeTaskChanged",after_finish:"onAfterTaskDrag"};for(var r in this._events)for(var a in t)this._events[r][a]=n[r];this._handlers[t.move]=this._move,this._handlers[t.resize]=this._resize,this._handlers[t.progress]=this._resize_progress},set_actions:function(){var i=t.$task_data;e.event(i,"mousemove",e.bind(function(t){this.on_mouse_move(t||event)},this)),e.event(i,"mousedown",e.bind(function(t){this.on_mouse_down(t||event)},this)),e.event(i,"mouseup",e.bind(function(t){this.on_mouse_up(t||event)},this))},clear_drag_state:function(){this.drag={id:null,mode:null,pos:null,start_x:null,start_y:null,obj:null,left:null}},_resize:function(i,n,r){var a=t.$getConfig(),s=this._drag_task_coords(i,r);r.left?(i.start_date=e.dateFromPos(s.start+n),i.start_date||(i.start_date=new Date(e.getState().min_date))):(i.end_date=e.dateFromPos(s.end+n),i.end_date||(i.end_date=new Date(e.getState().max_date))),i.end_date-i.start_date<a.min_duration&&(r.left?i.start_date=e.calculateEndDate({start_date:i.end_date,duration:-1,task:i}):i.end_date=e.calculateEndDate({start_date:i.start_date,duration:1,task:i})),e._init_task_timing(i)},_resize_progress:function(t,e,i){var n=this._drag_task_coords(t,i),r=Math.max(0,i.pos.x-n.start);t.progress=Math.min(1,r/(n.end-n.start))},_move:function(t,i,n){var r=this._drag_task_coords(t,n),a=e.dateFromPos(r.start+i),s=e.dateFromPos(r.end+i);a?s?(t.start_date=a,t.end_date=s):(t.end_date=new Date(e.getState().max_date),t.start_date=e.dateFromPos(e.posFromDate(t.end_date)-(r.end-r.start))):(t.start_date=new Date(e.getState().min_date),t.end_date=e.dateFromPos(e.posFromDate(t.start_date)+(r.end-r.start)))},_drag_task_coords:function(t,i){return{start:i.obj_s_x=i.obj_s_x||e.posFromDate(t.start_date),end:i.obj_e_x=i.obj_e_x||e.posFromDate(t.end_date)}},_mouse_position_change:function(t,e){var i=t.x-e.x,n=t.y-e.y;return Math.sqrt(i*i+n*n)},_is_number:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},on_mouse_move:function(t){if(this.drag.start_drag){var i=a.getRelativeEventPosition(t,e.$task_data),n=this.drag.start_drag.start_x,r=this.drag.start_drag.start_y;(Date.now()-this.drag.timestamp>50||this._is_number(n)&&this._is_number(r)&&this._mouse_position_change({x:n,y:r},i)>20)&&this._start_dnd(t)}if(this.drag.mode){if(!o(this,40))return;this._update_on_move(t)}},_update_on_move:function(t){var i=this.drag;if(i.mode){var n=a.getRelativeEventPosition(t,e.$task_data);if(i.pos&&i.pos.x==n.x)return;i.pos=n;var r=e.dateFromPos(n.x);if(!r||isNaN(r.getTime()))return;var s=n.x-i.start_x,o=e.getTask(i.id);if(this._handlers[i.mode]){var l=e.mixin({},o),d=e.mixin({},o);this._handlers[i.mode].apply(this,[d,s,i]),e.mixin(o,d,!0),e.callEvent("onTaskDrag",[o.id,i.mode,d,l,t]),e.mixin(o,d,!0),e._update_parents(i.id),e.refreshTask(i.id)}}},on_mouse_down:function(i,n){if(2!=i.button||void 0===i.button){var r=t.$getConfig(),s=e.locate(i),o=null;if(e.isTaskExists(s)&&(o=e.getTask(s)),!e.isReadonly(o)&&!this.drag.mode){this.clear_drag_state(),n=n||i.target||i.srcElement;var l=a.getClassName(n);if(!l||!this._get_drag_mode(l))return n.parentNode?this.on_mouse_down(i,n.parentNode):void 0;var d=this._get_drag_mode(l);if(d)if(d.mode&&d.mode!=r.drag_mode.ignore&&r["drag_"+d.mode]){if(s=e.locate(n),o=e.copy(e.getTask(s)||{}),e.isReadonly(o))return this.clear_drag_state(),!1;if(e.isSummaryTask(o)&&d.mode!=r.drag_mode.progress)return void this.clear_drag_state();d.id=s;var c=a.getRelativeEventPosition(i,e.$task_data);d.start_x=c.x,d.start_y=c.y,d.obj=o,this.drag.start_drag=d,this.drag.timestamp=Date.now()}else this.clear_drag_state();else if(e.checkEvent("onMouseDown")&&e.callEvent("onMouseDown",[l.split(" ")[0]])&&n.parentNode)return this.on_mouse_down(i,n.parentNode)}}},_fix_dnd_scale_time:function(i,n){function r(i){if(e.config.correct_work_time){var n=t.$getConfig();e.isWorkTime(i.start_date,void 0,i)||(i.start_date=e.calculateEndDate({start_date:i.start_date,duration:-1,unit:n.duration_unit,task:i}))}}var a=t.$getConfig(),s=e.getScale().unit,o=e.getScale().step;a.round_dnd_dates||(s="minute",o=a.time_step),n.mode==a.drag_mode.resize?n.left?(i.start_date=e.roundDate({date:i.start_date,unit:s,step:o}),r(i)):(i.end_date=e.roundDate({date:i.end_date,unit:s,step:o}),function(i){if(e.config.correct_work_time){var n=t.$getConfig();e.isWorkTime(new Date(i.end_date-1),void 0,i)||(i.end_date=e.calculateEndDate({start_date:i.end_date,duration:1,unit:n.duration_unit,task:i}))}}(i)):n.mode==a.drag_mode.move&&(i.start_date=e.roundDate({date:i.start_date,unit:s,step:o}),r(i),i.end_date=e.calculateEndDate(i))},_fix_working_times:function(i,n){var r=t.$getConfig(),n=n||{mode:r.drag_mode.move};n.mode==r.drag_mode.resize?n.left?i.start_date=e.getClosestWorkTime({date:i.start_date,dir:"future",task:i}):i.end_date=e.getClosestWorkTime({date:i.end_date,dir:"past",task:i}):n.mode==r.drag_mode.move&&e.correctTaskWorkTime(i)},on_mouse_up:function(i){var n=this.drag;if(n.mode&&n.id){var r=t.$getConfig(),a=e.getTask(n.id);if(r.work_time&&r.correct_work_time&&this._fix_working_times(a,n),this._fix_dnd_scale_time(a,n),e._init_task_timing(a),this._fireEvent("before_finish",n.mode,[n.id,n.mode,e.copy(n.obj),i])){var s=n.id;e._init_task_timing(a),this.clear_drag_state(),e.updateTask(a.id),this._fireEvent("after_finish",n.mode,[s,n.mode,i])}else this.clear_drag_state(),n.obj._dhx_changed=!1,e.mixin(a,n.obj,!0),e.refreshTask(a.id)}this.clear_drag_state()},_get_drag_mode:function(e){var i=t.$getConfig(),n=i.drag_mode,r=(e||"").split(" "),a=r[0],s={mode:null,left:null};switch(a){case"gantt_task_line":case"gantt_task_content":s.mode=n.move;break;case"gantt_task_drag":s.mode=n.resize,r[1]&&-1!==r[1].indexOf("left",r[1].length-"left".length)?s.left=!0:s.left=!1;break;case"gantt_task_progress_drag":s.mode=n.progress;break;case"gantt_link_control":case"gantt_link_point":s.mode=n.ignore;break;default:s=null}return s},_start_dnd:function(i){var n=this.drag=this.drag.start_drag;delete n.start_drag;var r=t.$getConfig(),a=n.id;r["drag_"+n.mode]&&e.callEvent("onBeforeDrag",[a,n.mode,i])&&this._fireEvent("before_start",n.mode,[a,n.mode,i])?(delete n.start_drag,e.callEvent("onTaskDragStart",[])):this.clear_drag_state()},_fireEvent:function(t,i,n){e.assert(this._events[t],"Invalid stage:{"+t+"}");var r=this._events[t][i];return e.assert(r,"Unknown after drop mode:{"+i+"}"),e.assert(n,"Invalid event arguments"),!e.checkEvent(r)||e.callEvent(r,n)},round_task_dates:function(e){var i=this.drag,n=t.$getConfig();i||(i={mode:n.drag_mode.move}),this._fix_dnd_scale_time(e,i)}}}function r(){var t;return{extend:function(e){e.roundTaskDates=function(e){t.round_task_dates(e)}},init:function(e,i){return t=n(e,i),e._tasks_dnd=t,t.init(i)},destroy:function(){}}}var a=i(1),s=i(0),o=i(8);t.exports={createTaskDND:r}},function(t,e,i){var n=i(1),r=function(t,e){function i(){return t.getItemHeight()}function r(){var e=t.getItemHeight();return Math.sqrt(2*e*e)}function a(){return{link_source_id:k,link_target_id:v,link_from_start:y,link_to_start:m,link_landing_area:p}}function s(t,i,n){var r=o(t,function(t){return e.getTaskPosition(t)}),a={x:r.x,y:r.y};return i||(a.x=r.xEnd),a.y+=e.config.row_height/2,n=n||0,a.x+=(i?-1:1)*n,a}function o(t,i){var n=i(t),r={x:n.left,y:n.top,width:n.width,height:n.height};if(r.xEnd=r.x+r.width,r.yEnd=r.y+r.height,e.getTaskType(t.type)==e.config.types.milestone){var a=e.getTaskHeight(),s=Math.sqrt(2*a*a);n.x-=s/2,n.xEnd+=s/2,n.width=n.xEnd-n.x}return r}function l(t){var i=a(),n=["gantt_link_tooltip"];i.link_source_id&&i.link_target_id&&(e.isLinkAllowed(i.link_source_id,i.link_target_id,i.link_from_start,i.link_to_start)?n.push("gantt_allowed_link"):n.push("gantt_invalid_link"));var r=e.templates.drag_link_class(i.link_source_id,i.link_from_start,i.link_target_id,i.link_to_start);r&&n.push(r);var s="<div class='"+r+"'>"+e.templates.drag_link(i.link_source_id,i.link_from_start,i.link_target_id,i.link_to_start)+"</div>";t.innerHTML=s}function d(t,e){t.style.left=e.x+5+"px",t.style.top=e.y+5+"px"}function c(){k=y=v=null,m=!0}function h(t,i,n,r){var s=g(),o=a(),l=["gantt_link_direction"];e.templates.link_direction_class&&l.push(e.templates.link_direction_class(o.link_source_id,o.link_from_start,o.link_target_id,o.link_to_start));var d=Math.sqrt(Math.pow(n-t,2)+Math.pow(r-i,2));if(d=Math.max(0,d-3)){s.className=l.join(" ");var c=(r-i)/(n-t),h=Math.atan(c);2==_(t,n,i,r)?h+=Math.PI:3==_(t,n,i,r)&&(h-=Math.PI);var f=Math.sin(h),p=Math.cos(h),v=Math.round(i),m=Math.round(t),k=["-webkit-transform: rotate("+h+"rad)","-moz-transform: rotate("+h+"rad)","-ms-transform: rotate("+h+"rad)","-o-transform: rotate("+h+"rad)","transform: rotate("+h+"rad)","width:"+Math.round(d)+"px"];if(-1!=window.navigator.userAgent.indexOf("MSIE 8.0")){k.push('-ms-filter: "'+u(f,p)+'"');var y=Math.abs(Math.round(t-n)),b=Math.abs(Math.round(r-i));switch(_(t,n,i,r)){case 1:v-=b;break;case 2:m-=y,v-=b;break;case 3:m-=y}}k.push("top:"+v+"px"),k.push("left:"+m+"px"),s.style.cssText=k.join(";")}}function u(t,e){return"progid:DXImageTransform.Microsoft.Matrix(M11 = "+e+",M12 = -"+t+",M21 = "+t+",M22 = "+e+",SizingMethod = 'auto expand')"}function _(t,e,i,n){return e>=t?n<=i?1:4:n<=i?2:3}function g(){return w._direction||(w._direction=document.createElement("div"),t.$task_links.appendChild(w._direction)),w._direction}function f(){w._direction&&(w._direction.parentNode&&w._direction.parentNode.removeChild(w._direction),w._direction=null)}var p,v,m,k,y,b=e.$services,$=b.getService("state"),x=b.getService("dnd");$.registerProvider("linksDnD",a);var w=new x(t.$task_bars,{sensitivity:0,updates_per_second:60});w.attachEvent("onBeforeDragStart",e.bind(function(t,a){var o=a.target||a.srcElement;if(c(),e.getState().drag_id)return!1;if(n.locateClassName(o,"gantt_link_point")){n.locateClassName(o,"task_left")&&(y=!0);var l=e.locate(a);k=l;var d=e.getTask(l);if(e.isReadonly(d))return c(),!1;var h=0;return e.getTaskType(d.type)==e.config.types.milestone&&(h=(r()-i())/2),this._dir_start=s(d,!!y,h),!0}return!1},this)),w.attachEvent("onAfterDragStart",e.bind(function(t,i){e.config.touch&&e.refreshData(),l(w.config.marker)},this)),w.attachEvent("onDragMove",e.bind(function(i,r){var a=w.config,o=w.getPosition(r);d(a.marker,o);var c=!!n.locateClassName(r,"gantt_link_control"),u=v,_=p,g=m,f=e.locate(r),k=!0;if(c&&(k=!n.locateClassName(r,"task_right"),c=!!f),v=f,p=c,m=k,c){var y=e.getTask(f),b=n.locateClassName(r,"gantt_link_control"),$=0;b&&($=Math.floor(b.offsetWidth/2)),this._dir_end=s(y,!!m,$)}else this._dir_end=n.getRelativeEventPosition(r,t.$task_data);var x=!(_==c&&u==f&&g==k);return x&&(u&&e.refreshTask(u,!1),f&&e.refreshTask(f,!1)),x&&l(a.marker),h(this._dir_start.x,this._dir_start.y,this._dir_end.x,this._dir_end.y),!0},this)),w.attachEvent("onDragEnd",e.bind(function(){var t=a();if(t.link_source_id&&t.link_target_id&&t.link_source_id!=t.link_target_id){var i=e._get_link_type(t.link_from_start,t.link_to_start),n={source:t.link_source_id,target:t.link_target_id,type:i};n.type&&e.isLinkAllowed(n)&&e.addLink(n)}c(),e.config.touch?e.refreshData():(t.link_source_id&&e.refreshTask(t.link_source_id,!1),t.link_target_id&&e.refreshTask(t.link_target_id,!1)),f()},this))};t.exports={createLinkDND:function(){return{init:r}}}},function(t,e){var i=function(){return function(t){return{getVerticalScrollbar:function(){return t.$ui.getView("scrollVer")},getHorizontalScrollbar:function(){return t.$ui.getView("scrollHor")},_legacyGridResizerClass:function(t){for(var e=t.getCellsByType("resizer"),i=0;i<e.length;i++){var n=e[i],r=n.$parent.getPrevSibling(n.$id);r&&r.$config&&"grid"===r.$config.id&&(n.$config.css=(n.$config.css?n.$config.css+" ":"")+"gantt_grid_resize_wrap")}},onCreated:function(e){var i=!0;this._legacyGridResizerClass(e),e.attachEvent("onBeforeResize",function(){var e=t.$ui.getView("timeline");e.$config.hidden=e.$parent.$config.hidden=!t.config.show_chart;var n=t.$ui.getView("grid"),r=t.config.show_grid;if(i){var a=n._getColsTotalWidth();!1!==a&&(t.config.grid_width=a),r=r&&!!t.config.grid_width,t.config.show_grid=r}n.$config.hidden=n.$parent.$config.hidden=!r,n.$config.hidden||(n.$config.width=t.config.grid_width-1,i?n.$parent.$config.width=t.config.grid_width:n.$parent._setContentSize(n.$config.width,n.$config.height)),i=!1}),t._getVerticalScrollbar=this.getVerticalScrollbar,t._getHorizontalScrollbar=this.getHorizontalScrollbar;var n=this.getVerticalScrollbar(),r=this.getHorizontalScrollbar();n&&n.attachEvent("onScroll",function(e,i,n){var r=t.getScrollState();t.callEvent("onGanttScroll",[r.x,e,r.x,i])}),r&&r.attachEvent("onScroll",function(e,i,n){var r=t.getScrollState();t.callEvent("onGanttScroll",[e,r.y,i,r.y])}),e.attachEvent("onResize",function(){n&&!t.$scroll_ver&&(t.$scroll_ver=n.$scroll_ver),r&&!t.$scroll_hor&&(t.$scroll_hor=r.$scroll_hor)})},onInitialized:function(e){var i=t.$ui.getView("grid");if(i.$parent&&i.$parent.$parent&&i.$parent.$parent._xLayout){var n=i.$parent.$parent,r=n.getNextSibling(i.$parent.$id);if(r&&"resizer"==r.$name){var a;r.attachEvent("onResizeStart",function(e,i){var n=t.$ui.getView("grid"),r=n?n.$parent:null;if(r){for(var s=0,o=t.getGridColumns(),l=0;l<o.length;l++)s+=o[l].min_width?o[l].min_width:t.config.min_grid_column_width;r.$config.minWidth=s}return a=e,t.callEvent("onGridResizeStart",[e])}),r.attachEvent("onResize",function(e,i){return t.callEvent("onGridResize",[a,e])}),r.attachEvent("onResizeEnd",function(e,i,n,r){var a=t.$ui.getView("grid"),s=a?a.$parent:null;s&&(s.$config.minWidth=void 0);var o=t.callEvent("onGridResizeEnd",[e,n]);return o&&(t.config.grid_width=n),o})}}},onDestroyed:function(t){}}}}();t.exports=i},function(t,e){t.exports=function(t){delete t.addTaskLayer,delete t.addLinkLayer}},function(t,e,i){function n(t){function e(e){if(t.isTaskExists(e.source)){var i=t.getTask(e.source);i.$source=i.$source||[],i.$source.push(e.id)}if(t.isTaskExists(e.target)){var n=t.getTask(e.target);n.$target=n.$target||[],n.$target.push(e.id)}}function i(e){if(t.isTaskExists(e.source))for(var i=t.getTask(e.source),n=0;n<i.$source.length;n++)if(i.$source[n]==e.id){i.$source.splice(n,1);break}if(t.isTaskExists(e.target))for(var r=t.getTask(e.target),n=0;n<r.$target.length;n++)if(r.$target[n]==e.id){r.$target.splice(n,1);break}}function n(){for(var i=null,n=t.$data.tasksStore.getItems(),r=0,a=n.length;r<a;r++)i=n[r],i.$source=[],i.$target=[];for(var s=t.$data.linksStore.getItems(),r=0,a=s.length;r<a;r++){e(s[r])}}function o(t){var e=t.source,i=t.target;for(var n in t.events)!function(t,n){e.attachEvent(t,function(){return i.callEvent(n,Array.prototype.slice.call(arguments))},n)}(n,t.events[n])}function l(e){this.defined(e.id)||(e.id=this.uid()),e.start_date&&(e.start_date=t.date.parseDate(e.start_date,"xml_date")),e.end_date&&(e.end_date=t.date.parseDate(e.end_date,"xml_date"));var i=null;return(e.duration||0===e.duration)&&(e.duration=i=1*e.duration),i&&(e.start_date&&!e.end_date?e.end_date=this.calculateEndDate(e):!e.start_date&&e.end_date&&(e.start_date=this.calculateEndDate({start_date:e.end_date,duration:-e.duration,task:e}))),this._isAllowedUnscheduledTask(e)&&this._set_default_task_timing(e),this._init_task_timing(e),e.start_date&&e.end_date&&this.correctTaskWorkTime(e),e.$source=[],e.$target=[],void 0===e.parent&&this.setParent(e,this.config.root_id),this.defined(e.$open)||(e.$open=this.defined(e.open)?e.open:this.config.open_tree_initially),e.$level=this.calculateTaskLevel(e),e}function d(t){return this.defined(t.id)||(t.id=this.uid()),t}var c=a.create();r.mixin(t,c);var h,u=t.createDatastore({name:"task",type:"treeDatastore",initItem:r.bind(l,t)}),_=t.createDatastore({name:"link",initItem:r.bind(d,t)});u.attachEvent("onBeforeRefreshAll",function(){t.callEvent("onBeforeDataRender",[]),h=t.getScrollState();for(var e=u.getVisibleItems(),i=0;i<e.length;i++){var n=e[i];n.$index=i,t.resetProjectDates(n)}}),u.attachEvent("onAfterRefreshAll",function(){(h.x||h.y)&&t.scrollTo(h.x,h.y),t.callEvent("onDataRender",[])}),u.attachEvent("onFilterItem",function(e,i){var n=null,r=null;if(t.config.start_date&&t.config.end_date){if(t._isAllowedUnscheduledTask(i))return!0;if(n=t.config.start_date.valueOf(),r=t.config.end_date.valueOf(),+i.start_date>r||+i.end_date<+n)return!1}return!0}),u.attachEvent("onIdChange",function(e,i){t._update_flags(e,i)}),u.attachEvent("onAfterUpdate",function(e){t._update_parents(e)}),u.attachEvent("onAfterItemMove",function(e,i,n){var r=t.getTask(e);if(this.getNext(e))r.$drop_target=this.getNext(e);else{var a=this.getPrev(e);a&&(a.id==this.getParent(e)?r.$drop_target=i:r.$drop_target="next:"+a)}return!0}),u.attachEvent("onStoreUpdated",function(e,i,n){if("delete"==n&&t._update_flags(e,null),t.config.fit_tasks&&"paint"!==n){var r=t.getState();s(t);var a=t.getState();if(+r.min_date!=+a.min_date||+r.max_date!=+a.max_date)return t.render(),t.callEvent("onScaleAdjusted",[]),!0}"add"==n||"move"==n||"delete"==n?t.$layout.resize():e||_.refresh()}),_.attachEvent("onAfterAdd",function(t,i){e(i)}),_.attachEvent("onAfterUpdate",function(t,e){n()}),_.attachEvent("onAfterDelete",function(t,e){i(e)}),_.attachEvent("onIdChange",function(n,r){i(t.mixin({id:n},t.$data.linksStore.getItem(r))),e(t.$data.linksStore.getItem(r))}),_.attachEvent("onFilterItem",function(e,i){return!!t.config.show_links&&(!(!t.isTaskVisible(i.source)||!t.isTaskVisible(i.target)||t._isAllowedUnscheduledTask(t.getTask(i.source))||t._isAllowedUnscheduledTask(t.getTask(i.target)))&&t.callEvent("onBeforeLinkDisplay",[e,i]))}),t.attachEvent("onAfterLinkDelete",function(e,i){t.refreshTask(i.source),t.refreshTask(i.target)}),t.attachEvent("onParse",n),o({source:_,target:t,events:{onItemLoading:"onLinkLoading",onBeforeAdd:"onBeforeLinkAdd",onAfterAdd:"onAfterLinkAdd",onBeforeUpdate:"onBeforeLinkUpdate",onAfterUpdate:"onAfterLinkUpdate",onBeforeDelete:"onBeforeLinkDelete",onAfterDelete:"onAfterLinkDelete",onIdChange:"onLinkIdChange"}}),o({source:u,target:t,events:{onItemLoading:"onTaskLoading",onBeforeAdd:"onBeforeTaskAdd",onAfterAdd:"onAfterTaskAdd",onBeforeUpdate:"onBeforeTaskUpdate",onAfterUpdate:"onAfterTaskUpdate",onBeforeDelete:"onBeforeTaskDelete",onAfterDelete:"onAfterTaskDelete",onIdChange:"onTaskIdChange",onBeforeItemMove:"onBeforeTaskMove",onAfterItemMove:"onAfterTaskMove",onFilterItem:"onBeforeTaskDisplay"}}),t.$data={tasksStore:u,linksStore:_}}var r=i(0),a=i(53),s=i(17);t.exports=n},function(t,e,i){function n(){for(var t=this.$services.getService("datastores"),e=[],i=0;i<t.length;i++)e.push(this.getDatastore(t[i]));return e}function r(){var t=a.mixin({},h());return a.mixin(t,s()),a.mixin(t,o()),t}var a=i(0),s=i(54),o=i(55),l=i(15),d=i(56),c=i(57),h=function(){return{createDatastore:function(t){var e="treedatastore"==(t.type||"").toLowerCase()?d:l,i=new e({initItem:t.initItem});if(t.name){this.$services.setService("datastore:"+t.name,function(){return i});var n=this.$services.getService("datastores");n||(n=[],this.$services.setService("datastores",function(){return n})),n.push(t.name),c.bindDataStore(t.name,this)}return i},getDatastore:function(t){return this.$services.getService("datastore:"+t)},refreshData:function(){for(var t=n.call(this),e=0;e<t.length;e++)t[e].refresh()},isChildOf:function(t,e){return this.$data.tasksStore.isChildOf(t,e)},refreshTask:function(t,e){var i=this.getTask(t);if(i&&this.isTaskVisible(t)){if(this.$data.tasksStore.refresh(t),void 0!==e&&!e)return;for(var n=0;n<i.$source.length;n++)this.refreshLink(i.$source[n]);for(var n=0;n<i.$target.length;n++)this.refreshLink(i.$target[n])}},refreshLink:function(t){this.$data.linksStore.refresh(t)},silent:function(t){var e=this;e.$data.tasksStore.silent(function(){e.$data.linksStore.silent(function(){t()})})},sort:function(t,e,i,n){var r=!n;this.isTaskExists(i)||(i=this.config.root_id),t||(t="order");var a="string"==typeof t?function(e,i){return e[t]==i[t]?0:e[t]>i[t]?1:-1}:t;if(e){var s=a;a=function(t,e){return s(e,t)}}var o=this.getChildren(i);if(o){for(var l=[],d=o.length-1;d>=0;d--)l[d]=this.$data.tasksStore.getItem(o[d]);l.sort(a);for(var d=0;d<l.length;d++)o[d]=l[d].id,this.sort(t,e,o[d],!0)}r&&this.render()},clearAll:function(){for(var t=n.call(this),e=0;e<t.length;e++)t[e].clearAll();this._update_flags(),this.userdata={},this.callEvent("onClear",[]),this.render()},_clear_data:function(){this.$data.tasksStore.clearAll(),this.$data.linksStore.clearAll(),this._update_flags(),this.userdata={}},_has_children:function(t){return this.getChildren(t).length>0}}};t.exports={create:r}},function(t,e,i){var n=i(0),r=function(){return{getTask:function(t){this.assert(t,"Invalid argument for gantt.getTask");var e=this.$data.tasksStore.getItem(t);return this.assert(e,"Task not found id="+t),e},getTaskByTime:function(t,e){var i=this.$data.tasksStore.getItems(),n=[];if(t||e){t=+t||-1/0,e=+e||1/0;for(var r=0;r<i.length;r++){var a=i[r];+a.start_date<e&&+a.end_date>t&&n.push(a)}}else n=i;return n},isTaskExists:function(t){return this.$data.tasksStore.exists(t)},updateTask:function(t,e){n.defined(e)||(e=this.getTask(t)),this.$data.tasksStore.updateItem(t,e),this.refreshTask(t)},addTask:function(t,e,i){return n.defined(t.id)||(t.id=n.uid()),n.defined(e)||(e=this.getParent(t)||0),this.isTaskExists(e)||(e=0),this.setParent(t,e),this.$data.tasksStore.addItem(t,i,e)},deleteTask:function(t){return this.$data.tasksStore.removeItem(t)},getTaskCount:function(){return this.$data.tasksStore.count()},getVisibleTaskCount:function(){return this.$data.tasksStore.countVisible()},getTaskIndex:function(t){return this.$data.tasksStore.getBranchIndex(t)},getGlobalTaskIndex:function(t){return this.assert(t,"Invalid argument"),this.$data.tasksStore.getIndexById(t)},eachTask:function(t,e,i){return this.$data.tasksStore.eachItem(n.bind(t,i||this),e)},eachParent:function(t,e,i){return this.$data.tasksStore.eachParent(n.bind(t,i||this),e)},changeTaskId:function(t,e){this.$data.tasksStore.changeId(t,e);var i=this.$data.tasksStore.getItem(e),n=[];i.$source&&(n=n.concat(i.$source)),i.$target&&(n=n.concat(i.$target));for(var r=0;r<n.length;r++){var a=this.getLink(n[r]);a.source==t&&(a.source=e),a.target==t&&(a.target=e)}},calculateTaskLevel:function(t){return this.$data.tasksStore.calculateItemLevel(t)},getNext:function(t){return this.$data.tasksStore.getNext(t)},getPrev:function(t){return this.$data.tasksStore.getPrev(t)},getParent:function(t){return this.$data.tasksStore.getParent(t)},setParent:function(t,e){return this.$data.tasksStore.setParent(t,e)},getSiblings:function(t){return this.$data.tasksStore.getChildren(t)},getNextSibling:function(t){return this.$data.tasksStore.getNextSibling(t)},getPrevSibling:function(t){return this.$data.tasksStore.getPrevSibling(t)},getTaskByIndex:function(t){var e=this.$data.tasksStore.getIdByIndex(t);return this.isTaskExists(e)?this.getTask(e):null},getChildren:function(t){return this.$data.tasksStore.getChildren(t)},hasChild:function(t){return this.$data.tasksStore.hasChild(t)},open:function(t){this._set_item_state(t,!0),this.callEvent("onTaskOpened",[t])},close:function(t){this._set_item_state(t,!1),this.callEvent("onTaskClosed",[t])},_set_item_state:function(t,e){this.isTaskExists(t)&&(this.getTask(t).$open=!!e,this._refresh_on_toggle_element(t))},_refresh_on_toggle_element:function(t){this.render()},moveTask:function(t,e,i){this.$data.tasksStore.move.apply(this.$data.tasksStore,arguments)}}};t.exports=r},function(t,e,i){var n=i(0),r=function(){return{getLinkCount:function(){return this.$data.linksStore.count()},getLink:function(t){return this.$data.linksStore.getItem(t)},getLinks:function(){return this.$data.linksStore.getIndexRange()},isLinkExists:function(t){return this.$data.linksStore.exists(t)},addLink:function(t){return this.$data.linksStore.addItem(t)},updateLink:function(t,e){n.defined(e)||(e=this.getLink(t)),this.$data.linksStore.updateItem(t,e)},deleteLink:function(t){return this.$data.linksStore.removeItem(t)},changeLinkId:function(t,e){return this.$data.linksStore.changeId(t,e)}}};t.exports=r},function(t,e,i){var n=i(16),r=i(0),a=i(2),s=i(15),o=function(t){return this._branches={},this.pull={},this.$initItem=t.initItem,this.$parentProperty=t.parentProperty||"parent",this.$rootId=t.rootId||0,this.visibleOrder=n.$create(),this.fullOrder=n.$create(),this._searchVisibleOrder={},this._skip_refresh=!1,this._filterRule=null,a(this),this.attachEvent("onFilterItem",function(t,e){var i=!0;return this.eachParent(function(t){i=i&&t.$open},e),!!i}),this};o.prototype=r.mixin({_buildTree:function(t){for(var e=null,i=0,n=t.length;i<n;i++)e=t[i],this.setParent(e,this.getParent(e)||this.$rootId);for(var i=0,n=t.length;i<n;i++)e=t[i],this._add_branch(e),e.$level=this.calculateItemLevel(e)},parse:function(t){this.callEvent("onBeforeParse",[t]);var e=this._parseInner(t);this._buildTree(e),this.filter(),this.callEvent("onParse",[e])},_addItemInner:function(t,e){var i=this.getParent(t);r.defined(i)||(i=this.$rootId,this.setParent(t,i));var n=this.getIndexById(i),a=n+Math.min(Math.max(e,0),this.visibleOrder.length);s.prototype._addItemInner.call(this,t,a),this.setParent(t,i),t.hasOwnProperty("$rendered_parent")&&this._move_branch(t,t.$rendered_parent),this._add_branch(t,e)},_changeIdInner:function(t,e){var i=this.getChildren(e);s.prototype._changeIdInner.call(this,t,e);var n=this.getParent(e);this._replace_branch_child(n,t,e);for(var r=0;r<i.length;r++)this.setParent(this.getItem[i[r]],e)},_removeItemInner:function(t){var e=[];this.eachItem(function(t){e.push(t)},t),e.push(this.getItem(t));for(var i=0;i<e.length;i++)this._move_branch(e[i],this.getParent(e[i]),null),s.prototype._removeItemInner.call(this,e[i].id),this._move_branch(e[i],this.getParent(e[i].id),null)},move:function(t,e,i){var n=arguments[3];if(n){if(n===t)return;i=this.getParent(n),e=this.getBranchIndex(n)}if(t!=i){i=i||this.$rootId;var r=this.getItem(t),a=this.getParent(r.id),s=(this.getChildren(this.getParent(r.id)),this.getChildren(i));if(-1==e&&(e=s.length+1),a==i){if(this.getBranchIndex(t)==e)return}if(!1!==this.callEvent("onBeforeItemMove",[t,i,e])){this._replace_branch_child(a,t),s=this.getChildren(i);s[e]?s=s.slice(0,e).concat([t]).concat(s.slice(e)):s.push(t),this.setParent(r,i),this._branches[i]=s;var o=this.calculateItemLevel(r)-r.$level;r.$level+=o,this.eachItem(function(t){t.$level+=o},r.id,this),this._moveInner(this.getIndexById(t),this.getIndexById(i)+e),this.callEvent("onAfterItemMove",[t,i,e])&&this.refresh()}}},getBranchIndex:function(t){for(var e=this.getChildren(this.getParent(t)),i=0;i<e.length;i++)if(e[i]==t)return i;return-1},hasChild:function(t){return r.defined(this._branches[t])&&this._branches[t].length},getChildren:function(t){return r.defined(this._branches[t])?this._branches[t]:n.$create()},isChildOf:function(t,e){if(!this.exists(t))return!1;if(e===this.$rootId)return!0;for(var i=this.getItem(t),n=this.getParent(t);i&&this.exists(n);){if((i=this.getItem(n))&&i.id==e)return!0;n=this.getParent(i)}return!1},getSiblings:function(t){if(!this.exists(t))return n.$create();var e=this.getParent(t);return this.getChildren(e)},getNextSibling:function(t){for(var e=this.getSiblings(t),i=0,n=e.length;i<n;i++)if(e[i]==t)return e[i+1]||null;return null},getPrevSibling:function(t){for(var e=this.getSiblings(t),i=0,n=e.length;i<n;i++)if(e[i]==t)return e[i-1]||null;return null},getParent:function(t){var e=null;e=void 0!==t.id?t:this.getItem(t);var i=this.$rootId;return e&&(i=e[this.$parentProperty]),i},clearAll:function(){this._branches={},s.prototype.clearAll.call(this)},calculateItemLevel:function(t){var e=0;return this.eachParent(function(){e++},t),e},setParent:function(t,e){t.hasOwnProperty("$rendered_parent")?this._move_branch(t,t.$rendered_parent,e):this._move_branch(t,t[this.$parentProperty],e),t[this.$parentProperty]=e},eachItem:function(t,e){e=e||this.$rootId;var i=this.getChildren(e);if(i)for(var n=0;n<i.length;n++){var r=this.pull[i[n]];t.call(this,r),this.hasChild(r.id)&&this.eachItem(t,r.id)}},eachParent:function(t,e){for(var i=e;this.getParent(i)&&this.exists(this.getParent(i));)i=this.getItem(this.getParent(i)),t.call(this,i)},_add_branch:function(t,e){var i=this.getParent(t);this.hasChild(i)||(this._branches[i]=n.$create());for(var r=this.getChildren(i),a=!1,s=0,o=r.length;s<o;s++)if(r[s]==t.id){a=!0;break}a||(1*e==e?r.splice(e,0,t.id):r.push(t.id),t.$rendered_parent=i)},_move_branch:function(t,e,i){this._replace_branch_child(e,t.id),this.exists(i)||i==this.$rootId?this._add_branch(t):delete this._branches[t.id],t.$level=this.calculateItemLevel(t),this.eachItem(function(t){t.$level=this.calculateItemLevel(t)},t.id)},_replace_branch_child:function(t,e,i){var r=this.getChildren(t);if(r){for(var a=n.$create(),s=0;s<r.length;s++)r[s]!=e?a.push(r[s]):i&&a.push(i);this._branches[t]=a}},filter:function(t){for(var e in this.pull)this.pull[e].$rendered_parent!==this.getParent(this.pull[e])&&this._move_branch(this.pull[e],this.pull[e].$rendered_parent,this.getParent(this.pull[e]));return s.prototype.filter.apply(this,arguments)}},s.prototype),t.exports=o},function(t,e){var i=function(t,e){var i=e.getDatastore(t),n={renderItem:function(t,e){var n=e.getLayers(),r=i.getItem(t);if(r&&i.isVisible(t))for(var a=0;a<n.length;a++)n[a].render_item(r)},renderItems:function(t){for(var e=t.getLayers(),n=0;n<e.length;n++)e[n].clear();for(var r=i.getVisibleItems(),n=0;n<e.length;n++)e[n].render_items(r)}};i.attachEvent("onStoreUpdated",function(r,a,s){var o=e.$services.getService("layers").getDataRender(t);o&&(r&&"move"!=s&&"delete"!=s?(i.callEvent("onBeforeRefreshItem",[r]),n.renderItem(r,o),i.callEvent("onAfterRefreshItem",[r])):(i.callEvent("onBeforeRefreshAll",[]),n.renderItems(o),i.callEvent("onAfterRefreshAll",[])))})};t.exports={bindDataStore:i}},function(t,e,i){function n(t){t.dataProcessor=i(60),t._dp_init=function(e){function i(i){for(var n=e.updatedRows.slice(),r=!1,a=0;a<n.length&&!e._in_progress[i];a++)n[a]==i&&("inserted"==t.getUserData(i,"!nativeeditor_status")&&(r=!0),e.setUpdated(i,!1));return r}function n(t){var e=[];return t.$source&&(e=e.concat(t.$source)),t.$target&&(e=e.concat(t.$target)),e}e.setTransactionMode("POST",!0),e.serverProcessor+=(-1!=e.serverProcessor.indexOf("?")?"&":"?")+"editing=true",e._serverProcessor=e.serverProcessor,e.$gantt=this,e.styles={updated:"gantt_updated",order:"gantt_updated",inserted:"gantt_inserted",deleted:"gantt_deleted",invalid:"gantt_invalid",error:"gantt_error",clear:""},e._methods=["_row_style","setCellTextStyle","_change_id","_delete_task"],e.setGanttMode=function(t){var i=e.modes||{};e._ganttMode&&(i[e._ganttMode]={_in_progress:e._in_progress,_invalid:e._invalid,updatedRows:e.updatedRows});var n=i[t];n||(n=i[t]={_in_progress:{},_invalid:{},updatedRows:[]}),e._in_progress=n._in_progress,e._invalid=n._invalid,e.updatedRows=n.updatedRows,e.modes=i,e._ganttMode=t},this._sendTaskOrder=function(t,i){i.$drop_target&&(e.setGanttMode("tasks"),this.getTask(t).target=i.$drop_target,e.setUpdated(t,!0,"order"),delete this.getTask(t).$drop_target)},this.attachEvent("onAfterTaskAdd",function(t,i){e.setGanttMode("tasks"),e.setUpdated(t,!0,"inserted")}),this.attachEvent("onAfterTaskUpdate",function(i,n){e.setGanttMode("tasks"),e.setUpdated(i,!0),t._sendTaskOrder(i,n)}),this.attachEvent("onAfterTaskDelete",function(t,n){e.setGanttMode("tasks"),!i(t)&&(e.setUpdated(t,!0,"deleted"),"off"==e.updateMode||e._tSend||e.sendAllData())}),this.attachEvent("onAfterLinkUpdate",function(t,i){e.setGanttMode("links"),e.setUpdated(t,!0)}),this.attachEvent("onAfterLinkAdd",function(t,i){e.setGanttMode("links"),e.setUpdated(t,!0,"inserted")}),this.attachEvent("onAfterLinkDelete",function(t,n){e.setGanttMode("links"),!i(t)&&e.setUpdated(t,!0,"deleted")}),this.attachEvent("onRowDragEnd",function(e,i){t._sendTaskOrder(e,t.getTask(e))});var s=null,o=null;this.attachEvent("onTaskIdChange",function(i,r){if(e._waitMode){var a=t.getChildren(r);if(a.length){s=s||{};for(var l=0;l<a.length;l++){var d=this.getTask(a[l]);s[d.id]=d}}var c=this.getTask(r),h=n(c);if(h.length){o=o||{};for(var l=0;l<h.length;l++){var u=this.getLink(h[l]);o[u.id]=u}}}}),e.attachEvent("onAfterUpdateFinish",function(){(s||o)&&(t.batchUpdate(function(){for(var e in s)t.updateTask(s[e].id);for(var e in o)t.updateLink(o[e].id);s=null,o=null}),s?t._dp.setGanttMode("tasks"):t._dp.setGanttMode("links"))}),e.attachEvent("onBeforeDataSending",function(){var e=this._serverProcessor;if("REST"==this._tMode){var i=this._ganttMode.substr(0,this._ganttMode.length-1);e=e.substring(0,e.indexOf("?")>-1?e.indexOf("?"):e.length),this.serverProcessor=e+("/"==e.slice(-1)?"":"/")+i}else this.serverProcessor=e+t.ajax.urlSeparator(e)+"gantt_mode="+this._ganttMode;return!0}),r(t,e);var l=e.afterUpdate;e.afterUpdate=function(){var t;t=3==arguments.length?arguments[1]:arguments[4];var i=e._ganttMode,n=t.filePath;i="REST"!=this._tMode?-1!=n.indexOf("gantt_mode=links")?"links":"tasks":n.indexOf("/link")>n.indexOf("/task")?"links":"tasks",e.setGanttMode(i);var r=l.apply(e,arguments);return e.setGanttMode(i),r},e._getRowData=t.bind(function(i,n){var r;r="tasks"==e._ganttMode?this.isTaskExists(i)?this.getTask(i):{id:i}:this.isLinkExists(i)?this.getLink(i):{id:i},r=t.copy(r);var s={};for(var o in r)if("$"!=o.substr(0,1)){var l=r[o];a.isDate(l)?s[o]=this.templates.xml_format(l):s[o]=null===l?"":l}var d=this._get_task_timing_mode(r);return d.$no_start&&(r.start_date="",r.duration=""),d.$no_end&&(r.end_date="",r.duration=""),s[e.action_param]=this.getUserData(i,e.action_param),s},this),this._change_id=t.bind(function(t,i){"tasks"!=e._ganttMode?this.changeLinkId(t,i):this.changeTaskId(t,i)},this),this._row_style=function(i,n){if("tasks"==e._ganttMode&&t.isTaskExists(i)){t.getTask(i).$dataprocessor_class=n,t.refreshTask(i)}},this._delete_task=function(t,e){},this._dp=e},t.getUserData=function(t,e){return this.userdata||(this.userdata={}),this.userdata[t]&&this.userdata[t][e]?this.userdata[t][e]:""},t.setUserData=function(t,e,i){this.userdata||(this.userdata={}),this.userdata[t]||(this.userdata[t]={}),this.userdata[t][e]=i}}var r=i(59),a=i(3);t.exports=n},function(t,e,i){function n(t,e,i,n){var r=t.data||this.xml._xmlNodeToJSON(t.firstChild),a={add:this.addTask,isExist:this.isTaskExists};"links"==n&&(a.add=this.addLink,a.isExist=this.isLinkExists),a.isExist.call(this,e)||(r.id=e,a.add.call(this,r))}function r(t,e,i,n){var r={delete:this.deleteTask,isExist:this.isTaskExists};"links"==n&&(r.delete=this.deleteLink,r.isExist=this.isLinkExists),r.isExist.call(this,e)&&r.delete.call(this,e)}function a(t,e){e.attachEvent("insertCallback",s.bind(n,t)),e.attachEvent("updateCallback",s.bind(r,t)),e.attachEvent("deleteCallback",s.bind(r,t))}var s=i(0);t.exports=a},function(t,e,i){var n=i(0),r=i(2),a=function(t){return this.serverProcessor=t,this.action_param="!nativeeditor_status",this.object=null,this.updatedRows=[],this.autoUpdate=!0,this.updateMode="cell",this._tMode="GET",this._headers=null,this._payload=null,this.post_delim="_",this._waitMode=0,this._in_progress={},this._invalid={},this.mandatoryFields=[],this.messages=[],this.styles={updated:"font-weight:bold;",inserted:"font-weight:bold;",deleted:"text-decoration : line-through;",invalid:"background-color:FFE0E0;",invalid_cell:"border-bottom:2px solid red;",error:"color:red;",clear:"font-weight:normal;text-decoration:none;"},this.enableUTFencoding(!0),r(this),this};a.prototype={setTransactionMode:function(t,e){"object"==typeof t?(this._tMode=t.mode||this._tMode,n.defined(t.headers)&&(this._headers=t.headers),n.defined(t.payload)&&(this._payload=t.payload)):(this._tMode=t,this._tSend=e),"REST"==this._tMode&&(this._tSend=!1,this._endnm=!0),"JSON"==this._tMode&&(this._tSend=!1,this._endnm=!0,this._headers=this._headers||{},this._headers["Content-type"]="application/json")},escape:function(t){return this._utf?encodeURIComponent(t):escape(t)},enableUTFencoding:function(t){this._utf=!!t},setDataColumns:function(t){this._columns="string"==typeof t?t.split(","):t},getSyncState:function(){return!this.updatedRows.length},enableDataNames:function(t){this._endnm=!!t},enablePartialDataSend:function(t){this._changed=!!t},setUpdateMode:function(t,e){this.autoUpdate="cell"==t,this.updateMode=t,this.dnd=e},ignore:function(t,e){this._silent_mode=!0,t.call(e||window),this._silent_mode=!1},setUpdated:function(t,e,i){if(!this._silent_mode){var n=this.findRow(t);i=i||"updated";var r=this.obj.getUserData(t,this.action_param);r&&"updated"==i&&(i=r),e?(this.set_invalid(t,!1),this.updatedRows[n]=t,this.obj.setUserData(t,this.action_param,i),this._in_progress[t]&&(this._in_progress[t]="wait")):this.is_invalid(t)||(this.updatedRows.splice(n,1),this.obj.setUserData(t,this.action_param,"")),e||this._clearUpdateFlag(t),this.markRow(t,e,i),e&&this.autoUpdate&&this.sendData(t)}},_clearUpdateFlag:function(t){},markRow:function(t,e,i){var n="",r=this.is_invalid(t);if(r&&(n=this.styles[r],e=!0),this.callEvent("onRowMark",[t,e,i,r])&&(n=this.styles[e?i:"clear"]+n,this.obj[this._methods[0]](t,n),r&&r.details)){n+=this.styles[r+"_cell"];for(var a=0;a<r.details.length;a++)r.details[a]&&this.obj[this._methods[1]](t,a,n)}},getState:function(t){return this.obj.getUserData(t,this.action_param)},is_invalid:function(t){return this._invalid[t]},set_invalid:function(t,e,i){i&&(e={value:e,details:i,toString:function(){return this.value.toString()}}),this._invalid[t]=e},checkBeforeUpdate:function(t){return!0},sendData:function(t){if(!this._waitMode||"tree"!=this.obj.mytype&&!this.obj._h2){if(this.obj.editStop&&this.obj.editStop(),void 0===t||this._tSend)return this.sendAllData();if(this._in_progress[t])return!1;if(this.messages=[],!this.checkBeforeUpdate(t)&&this.callEvent("onValidationError",[t,this.messages]))return!1;this._beforeSendData(this._getRowData(t),t)}},_beforeSendData:function(t,e){if(!this.callEvent("onBeforeUpdate",[e,this.getState(e),t]))return!1;this._sendData(t,e)},serialize:function(t,e){if("string"==typeof t)return t;if(void 0!==e)return this.serialize_one(t,"");var i=[],n=[];for(var r in t)t.hasOwnProperty(r)&&(i.push(this.serialize_one(t[r],r+this.post_delim)),n.push(r));return i.push("ids="+this.escape(n.join(","))),this.$gantt.security_key&&i.push("dhx_security="+this.$gantt.security_key),i.join("&")},serialize_one:function(t,e){if("string"==typeof t)return t;var i=[];for(var n in t)if(t.hasOwnProperty(n)){if(("id"==n||n==this.action_param)&&"REST"==this._tMode)continue;i.push(this.escape((e||"")+n)+"="+this.escape(t[n]))}return i.join("&")},_applyPayload:function(t){var e=this.$gantt.ajax;if(this._payload)for(var i in this._payload)t=t+e.urlSeparator(t)+this.escape(i)+"="+this.escape(this._payload[i]);return t},_sendData:function(t,e){if(t){if(!this.callEvent("onBeforeDataSending",e?[e,this.getState(e),t]:[null,null,t]))return!1;e&&(this._in_progress[e]=(new Date).valueOf());var i=this,n=function(n){var r=[];if(e)r.push(e);else if(t)for(var a in t)r.push(a);return i.afterUpdate(i,n,r)},r=this.$gantt.ajax,a=this.serverProcessor+(this._user?r.urlSeparator(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+this.obj.getUserData(0,"version")].join("&"):""),s=this._applyPayload(a);if("GET"==this._tMode)r.query({url:s+r.urlSeparator(s)+this.serialize(t,e),method:"GET",callback:n,headers:this._headers});else if("POST"==this._tMode)r.query({url:s,method:"POST",headers:this._headers,data:this.serialize(t,e),callback:n});else if("JSON"==this._tMode){var o=t[this.action_param],l={};for(var d in t)l[d]=t[d];delete l[this.action_param],delete l.id,delete l.gr_id,r.query({url:s,method:"POST",headers:this._headers,callback:n,data:JSON.stringify({id:e,action:o,data:l})})}else if("REST"==this._tMode){var c=this.getState(e),h=a.replace(/(\&|\?)editing\=true/,""),l="",u="post";"inserted"==c?l=this.serialize(t,e):"deleted"==c?(u="DELETE",h=h+("/"==h.slice(-1)?"":"/")+e):(u="PUT",l=this.serialize(t,e),h=h+("/"==h.slice(-1)?"":"/")+e),h=this._applyPayload(h),r.query({url:h,method:u,headers:this._headers,data:l,callback:n})}this._waitMode++}},sendAllData:function(){if(this.updatedRows.length){this.messages=[];for(var t=!0,e=0;e<this.updatedRows.length;e++)t&=this.checkBeforeUpdate(this.updatedRows[e]);if(!t&&!this.callEvent("onValidationError",["",this.messages]))return!1;if(this._tSend)this._sendData(this._getAllData());else for(var e=0;e<this.updatedRows.length;e++)if(!this._in_progress[this.updatedRows[e]]){if(this.is_invalid(this.updatedRows[e]))continue;if(this._beforeSendData(this._getRowData(this.updatedRows[e]),this.updatedRows[e]),this._waitMode&&("tree"==this.obj.mytype||this.obj._h2))return}}},_getAllData:function(t){for(var e={},i=!1,n=0;n<this.updatedRows.length;n++){var r=this.updatedRows[n];if(!this._in_progress[r]&&!this.is_invalid(r)){var a=this._getRowData(r);this.callEvent("onBeforeUpdate",[r,this.getState(r),a])&&(e[r]=a,i=!0,this._in_progress[r]=(new Date).valueOf())}}return i?e:null},setVerificator:function(t,e){this.mandatoryFields[t]=e||function(t){return""!==t}},clearVerificator:function(t){this.mandatoryFields[t]=!1},findRow:function(t){var e=0;for(e=0;e<this.updatedRows.length&&t!=this.updatedRows[e];e++);return e},defineAction:function(t,e){this._uActions||(this._uActions=[]),this._uActions[t]=e},afterUpdateCallback:function(t,e,i,n){var r=t,a="error"!=i&&"invalid"!=i;if(a||this.set_invalid(t,i),this._uActions&&this._uActions[i]&&!this._uActions[i](n))return delete this._in_progress[r];"wait"!=this._in_progress[r]&&this.setUpdated(t,!1);var s=t;switch(i){case"inserted":case"insert":e!=t&&(this.setUpdated(t,!1),this.obj[this._methods[2]](t,e),t=e);break;case"delete":case"deleted":return this.obj.setUserData(t,this.action_param,"true_deleted"),this.obj[this._methods[3]](t),delete this._in_progress[r],this.callEvent("onAfterUpdate",[t,i,e,n])}"wait"!=this._in_progress[r]?(a&&this.obj.setUserData(t,this.action_param,""),delete this._in_progress[r]):(delete this._in_progress[r],this.setUpdated(e,!0,this.obj.getUserData(t,this.action_param))),this.callEvent("onAfterUpdate",[s,i,e,n])},afterUpdate:function(t,e,i){var n=this.$gantt.ajax;if(window.JSON){var r;try{r=JSON.parse(e.xmlDoc.responseText)}catch(t){e.xmlDoc.responseText.length||(r={})}if(r){var a=r.action||this.getState(i)||"updated",s=r.sid||i[0],o=r.tid||i[0];return t.afterUpdateCallback(s,o,a,r),void t.finalizeUpdate()}}var l=n.xmltop("data",e.xmlDoc);if(!l)return this.cleanUpdate(i);var d=n.xpath("//data/action",l);if(!d.length)return this.cleanUpdate(i);for(var c=0;c<d.length;c++){var h=d[c],a=h.getAttribute("type"),s=h.getAttribute("sid"),o=h.getAttribute("tid");t.afterUpdateCallback(s,o,a,h)}t.finalizeUpdate()},cleanUpdate:function(t){if(t)for(var e=0;e<t.length;e++)delete this._in_progress[t[e]]},finalizeUpdate:function(){this._waitMode&&this._waitMode--,("tree"==this.obj.mytype||this.obj._h2)&&this.updatedRows.length&&this.sendData(),this.callEvent("onAfterUpdateFinish",[]),this.updatedRows.length||this.callEvent("onFullSync",[])},init:function(t){this.obj=t,this.obj._dp_init&&this.obj._dp_init(this)},setOnAfterUpdate:function(t){this.attachEvent("onAfterUpdate",t)},enableDebug:function(t){},setOnBeforeUpdateHandler:function(t){this.attachEvent("onBeforeDataSending",t)},setAutoUpdate:function(t,e){t=t||2e3,this._user=e||(new Date).valueOf(),this._need_update=!1,this._update_busy=!1,this.attachEvent("onAfterUpdate",function(t,e,i,n){this.afterAutoUpdate(t,e,i,n)}),this.attachEvent("onFullSync",function(){this.fullSync()});var i=this;window.setInterval(function(){i.loadUpdate()},t)},afterAutoUpdate:function(t,e,i,n){return"collision"!=e||(this._need_update=!0,!1)},fullSync:function(){return this._need_update&&(this._need_update=!1,this.loadUpdate()),!0},getUpdates:function(t,e){var i=this.$gantt.ajax;if(this._update_busy)return!1;this._update_busy=!0,i.get(t,e)},_v:function(t){return t.firstChild?t.firstChild.nodeValue:""},_a:function(t){for(var e=[],i=0;i<t.length;i++)e[i]=this._v(t[i]);return e},loadUpdate:function(){var t=this.$gantt.ajax,e=this,i=this.obj.getUserData(0,"version"),n=this.serverProcessor+t.urlSeparator(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+i].join("&");n=n.replace("editing=true&",""),this.getUpdates(n,function(i){var n=t.xpath("//userdata",i);e.obj.setUserData(0,"version",e._v(n[0]));var r=t.xpath("//update",i);if(r.length){e._silent_mode=!0;for(var a=0;a<r.length;a++){var s=r[a].getAttribute("status"),o=r[a].getAttribute("id"),l=r[a].getAttribute("parent");switch(s){case"inserted":e.callEvent("insertCallback",[r[a],o,l]);break;case"updated":e.callEvent("updateCallback",[r[a],o,l]);break;case"deleted":e.callEvent("deleteCallback",[r[a],o,l])}}e._silent_mode=!1}e._update_busy=!1,e=null})}},t.exports=a},function(t,e,i){t.exports=function(t){for(var e=[i(62),i(63),i(64),i(65),i(66)],n=0;n<e.length;n++)e[n]&&e[n](t)}},function(t,e,i){var n=i(1);t.exports=function(t){function e(){var e=!!document.querySelector(".gantt_drag_marker"),i=!!document.querySelector(".gantt_drag_marker.gantt_grid_resize_area"),n=!!document.querySelector(".gantt_link_direction");return g=e&&!i&&!n,!(!t.getState().drag_mode&&!e||i)}function i(e){if(f&&(clearTimeout(f),f=null),e){var i=t.config.autoscroll_speed;i&&i<10&&(i=10),f=setTimeout(function(){_=setInterval(s,i||u),p=n.getNodePosition(t.$task)},t.config.autoscroll_delay||h)}}function r(t){t?(i(!0),v.started||(v.x=m.x,v.y=m.y,v.started=!0)):(_&&(clearInterval(_),_=null),i(!1),v.started=!1)}function a(i){var n=e();if(!_&&!f||n||r(!1),!t.config.autoscroll||!n)return!1;m={x:i.clientX,y:i.clientY},!_&&n&&r(!0)}function s(){if(!e())return r(!1),!1;var i=n.getNodePosition(t.$task),a=m.x-i.x,s=m.y-i.y,d=g?0:o(a,i.width,v.x-i.x),h=o(s,i.height,v.y-i.y),u=t.getScrollState(),_=u.y,f=u.inner_height,p=u.height,k=u.x,y=u.inner_width,b=u.width;h&&!f?h=0:h<0&&!_?h=0:h>0&&_+f>=p+2&&(h=0),d&&!y?d=0:d<0&&!k?d=0:d>0&&k+y>=b&&(d=0);var $=t.config.autoscroll_step;$&&$<2&&($=2),d*=$||c,h*=$||c,(d||h)&&l(d,h)}function o(t,e,i){return t-d<0&&t<i?-1:t>e-d&&t>i?1:0}function l(e,i){var n=t.getScrollState(),r=null,a=null;e&&(r=n.x+e,r=Math.min(n.width,r),r=Math.max(0,r)),i&&(a=n.y+i,a=Math.min(n.height,a),a=Math.max(0,a)),t.scrollTo(r,a)}var d=50,c=30,h=10,u=50,_=null,g=!1,f=null,p={},v={started:!1},m={};t.attachEvent("onGanttReady",function(){t.eventRemove(document.body,"mousemove",a),t.event(document.body,"mousemove",a)})}},function(t,e){function i(){function t(t,e){e="function"==typeof e?e:function(){},a[t]||(a[t]=this[t],this[t]=e)}function e(t){a[t]&&(this[t]=a[t],a[t]=null)}function i(e){for(var i in e)t.call(this,i,e[i])}function n(){for(var t in a)e.call(this,t)}function r(t){try{t()}catch(t){window.console.error(t)}}var a={},s=!1;return function(t,e){if(s)return void r(t);var a,o=this._dp&&"off"!=this._dp.updateMode;o&&(a=this._dp.updateMode,this._dp.setUpdateMode("off"));var l={},d={render:!0,refreshData:!0,refreshTask:!0,refreshLink:!0,resetProjectDates:function(t){l[t.id]=t}};i.call(this,d),s=!0,this.callEvent("onBeforeBatchUpdate",[]),r(t),this.callEvent("onAfterBatchUpdate",[]),n.call(this);for(var c in l)this.resetProjectDates(l[c]);s=!1,e||this.render(),o&&(this._dp.setUpdateMode(a),this._dp.setGanttMode("tasks"),this._dp.sendData(),this._dp.setGanttMode("links"),this._dp.sendData())}}t.exports=function(t){t.batchUpdate=i()}},function(t,e){var i=function(t){return{_needRecalc:!0,reset:function(){this._needRecalc=!0},_isRecalcNeeded:function(){return!this._isGroupSort()&&this._needRecalc},_isGroupSort:function(){return!(!t._groups||!t._groups.is_active())},_getWBSCode:function(t){return t?(this._isRecalcNeeded()&&this._calcWBS(),t.$virtual?"":this._isGroupSort()?t.$wbs||"":(t.$wbs||(this.reset(),this._calcWBS()),t.$wbs)):""},_setWBSCode:function(t,e){t.$wbs=e},getWBSCode:function(t){return this._getWBSCode(t)},_calcWBS:function(){if(this._isRecalcNeeded()){var e=!0;t.eachTask(function(i){if(e)return e=!1,void this._setWBSCode(i,"1");var n=t.getPrevSibling(i.id);if(null!==n){var r=t.getTask(n).$wbs;r&&(r=r.split("."),r[r.length-1]++,this._setWBSCode(i,r.join(".")))}else{var a=t.getParent(i.id);this._setWBSCode(i,t.getTask(a).$wbs+".1")}},t.config.root_id,this),this._needRecalc=!1}}}};t.exports=function(t){var e=i(t);t.getWBSCode=function(t){return e.getWBSCode(t)},t.attachEvent("onAfterTaskMove",function(){return e.reset(),!0}),t.attachEvent("onBeforeParse",function(){return e.reset(),!0}),t.attachEvent("onAfterTaskDelete",function(){return e.reset(),!0}),t.attachEvent("onAfterTaskAdd",function(){return e.reset(),!0})}},function(t,e){window.jQuery&&function(t){var e=[];t.fn.dhx_gantt=function(i){if("string"!=typeof(i=i||{})){var n=[];return this.each(function(){if(this&&this.getAttribute)if(this.gantt||window.gantt.$root==this)n.push("object"==typeof this.gantt?this.gantt:window.gantt);else{var t=window.gantt.$container&&window.Gantt?window.Gantt.getGanttInstance():window.gantt;for(var e in i)"data"!=e&&(t.config[e]=i[e]);t.init(this),i.data&&t.parse(i.data),n.push(t)}}),1===n.length?n[0]:n}if(e[i])return e[i].apply(this,[]);t.error("Method "+i+" does not exist on jQuery.dhx_gantt")}}(jQuery),t.exports=null},function(t,e){window.dhtmlx&&(dhtmlx.attaches||(dhtmlx.attaches={}),dhtmlx.attaches.attachGantt=function(t,e,i){var n=document.createElement("DIV");i=i||window.gantt,n.id="gantt_"+i.uid(),n.style.width="100%",n.style.height="100%",n.cmp="grid",document.body.appendChild(n),this.attachObject(n.id),this.dataType="gantt",this.dataObj=i;var r=this.vs[this.av];r.grid=i,i.init(n.id,t,e),n.firstChild.style.border="none",r.gridId=n.id,r.gridObj=n;return this.vs[this._viewRestore()].grid}),void 0!==window.dhtmlXCellObject&&(dhtmlXCellObject.prototype.attachGantt=function(t,e,i){i=i||window.gantt;var n=document.createElement("DIV");n.id="gantt_"+i.uid(),n.style.width="100%",n.style.height="100%",n.cmp="grid",document.body.appendChild(n),this.attachObject(n.id),this.dataType="gantt",this.dataObj=i,i.init(n.id,t,e),n.firstChild.style.border="none";return n=null,this.callEvent("_onContentAttach",[]),this.dataObj}),t.exports=null},function(t,e){t.exports=function(t){}},function(t,e){t.exports=function(t){t.getGridColumn=function(e){for(var i=t.config.columns,n=0;n<i.length;n++)if(i[n].name==e)return i[n];return null}}},function(t,e){t.exports=function(t){function e(t){return(t+"").replace(r," ").replace(a," ")}function i(t){return(t+"").replace(s,"&#39;")}function n(){return!t.config.wai_aria_attributes}var r=new RegExp("<(?:.|\n)*?>","gm"),a=new RegExp(" +","gm"),s=new RegExp("'","gm");t._waiAria={getAttributeString:function(t){var n=[" "];for(var r in t){var a=i(e(t[r]));n.push(r+"='"+a+"'")}return n.push(" "),n.join(" ")},getTimelineCellAttr:function(e){return t._waiAria.getAttributeString({"aria-label":e})},_taskCommonAttr:function(i,n){i.start_date&&i.end_date&&(n.setAttribute("aria-label",e(t.templates.tooltip_text(i.start_date,i.end_date,i))),t.isReadonly(i)&&n.setAttribute("aria-readonly",!0),i.$dataprocessor_class&&n.setAttribute("aria-busy",!0),n.setAttribute("aria-selected",t.getState().selected_task==i.id||t.isSelectedTask&&t.isSelectedTask(i.id)?"true":"false"))},setTaskBarAttr:function(e,i){this._taskCommonAttr(e,i),!t.isReadonly(e)&&t.config.drag_move&&(e.id!=t.getState().drag_id?i.setAttribute("aria-grabbed",!1):i.setAttribute("aria-grabbed",!0))},taskRowAttr:function(e,i){this._taskCommonAttr(e,i),!t.isReadonly(e)&&t.config.order_branch&&i.setAttribute("aria-grabbed",!1),i.setAttribute("role","row"),i.setAttribute("aria-level",e.$level),t.hasChild(e.id)&&i.setAttribute("aria-expanded",e.$open?"true":"false")},linkAttr:function(i,n){var r=t.config.links,a=i.type==r.finish_to_start||i.type==r.start_to_start,s=i.type==r.start_to_start||i.type==r.start_to_finish,o=t.locale.labels.link+" "+t.templates.drag_link(i.source,s,i.target,a);n.setAttribute("aria-label",e(o)),t.isReadonly(i)&&n.setAttribute("aria-readonly",!0)},gridSeparatorAttr:function(t){t.setAttribute("role","separator")},lightboxHiddenAttr:function(t){t.setAttribute("aria-hidden","true")},lightboxVisibleAttr:function(t){t.setAttribute("aria-hidden","false")},lightboxAttr:function(t){t.setAttribute("role","dialog"),t.setAttribute("aria-hidden","true"),t.firstChild.setAttribute("role","heading")},lightboxButtonAttrString:function(e){return this.getAttributeString({role:"button","aria-label":t.locale.labels[e],tabindex:"0"})},lightboxHeader:function(t,e){t.setAttribute("aria-label",e)},lightboxSelectAttrString:function(e){var i="";switch(e){case"%Y":i=t.locale.labels.years;break;case"%m":i=t.locale.labels.months;break;case"%d":i=t.locale.labels.days;break;case"%H:%i":i=t.locale.labels.hours+t.locale.labels.minutes}return t._waiAria.getAttributeString({"aria-label":i})},lightboxDurationInputAttrString:function(e){return this.getAttributeString({"aria-label":t.locale.labels.column_duration,"aria-valuemin":"0"})},gridAttrString:function(){return[" role='treegrid'",t.config.multiselect?"aria-multiselectable='true'":"aria-multiselectable='false'"," "].join(" ")},gridScaleRowAttrString:function(){return"role='row'"},gridScaleCellAttrString:function(e,i){var n="";if("add"==e.name)n=this.getAttributeString({role:"button","aria-label":t.locale.labels.new_task});else{var r={role:"columnheader","aria-label":i};t._sort&&t._sort.name==e.name&&("asc"==t._sort.direction?r["aria-sort"]="ascending":r["aria-sort"]="descending"),n=this.getAttributeString(r)}return n},gridDataAttrString:function(){return"role='rowgroup'"},gridCellAttrString:function(t,e){return this.getAttributeString({role:"gridcell","aria-label":e})},gridAddButtonAttrString:function(e){return this.getAttributeString({role:"button","aria-label":t.locale.labels.new_task})},messageButtonAttrString:function(t){return"tabindex='0' role='button' aria-label='"+t+"'"},messageInfoAttr:function(t){t.setAttribute("role","alert")},messageModalAttr:function(t,e){t.setAttribute("role","dialog"),e&&t.setAttribute("aria-labelledby",e)},quickInfoAttr:function(t){t.setAttribute("role","dialog")},quickInfoHeaderAttrString:function(){return" role='heading' "},quickInfoHeader:function(t,e){t.setAttribute("aria-label",e)},quickInfoButtonAttrString:function(e){return t._waiAria.getAttributeString({role:"button","aria-label":e,tabindex:"0"})},tooltipAttr:function(t){t.setAttribute("role","tooltip")},tooltipVisibleAttr:function(t){t.setAttribute("aria-hidden","false")},tooltipHiddenAttr:function(t){t.setAttribute("aria-hidden","true")}};for(var o in t._waiAria)t._waiAria[o]=function(t){return function(){return n()?"":t.apply(this,arguments)}}(t._waiAria[o])}},function(t,e){t.exports=function(t){t._is_chart_visible=function(){return!!this.config.show_chart},t._get_links_data=function(){return this.$data.linksStore.getVisibleItems()},t.isReadonly=function(t){return(!t||!t[this.config.editable_property])&&(t&&t[this.config.readonly_property]||this.config.readonly)},t._get_line=function(t){var e={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,quarter:7776e3,year:31536e3};return e[t]||e.hour}}},function(t,e,i){var n=(i(0),i(3));t.exports=function(t){t.load=function(e,i,n){this._load_url=e,this.assert(arguments.length,"Invalid load arguments");var r="json",a=null;arguments.length>=3?(r=i,a=n):"string"==typeof arguments[1]?r=arguments[1]:"function"==typeof arguments[1]&&(a=arguments[1]),this._load_type=r,this.callEvent("onLoadStart",[e,r]),this.ajax.get(e,t.bind(function(t){this.on_load(t,r),this.callEvent("onLoadEnd",[e,r]),"function"==typeof a&&a.call(this)},this))},t.parse=function(t,e){this.on_load({xmlDoc:{responseText:t}},e)},t.serialize=function(t){return t=t||"json",this[t].serialize()},t.on_load=function(t,e){this.callEvent("onBeforeParse",[]),e||(e="json"),this.assert(this[e],"Invalid data type:'"+e+"'");var i=t.xmlDoc.responseText,n=this[e].parse(i,t);this._process_loading(n)},t._process_loading=function(t){t.collections&&this._load_collections(t.collections),this.$data.tasksStore.parse(t.data);var e=t.links||(t.collections?t.collections.links:[]);if(this.$data.linksStore.parse(e),this.callEvent("onParse",[]),this.render(),this.config.initial_scroll){var i=this.getTaskByIndex(0),n=i?i.id:this.config.root_id;n&&this.showTask(n)}},t._load_collections=function(t){var e=!1;for(var i in t)if(t.hasOwnProperty(i)){e=!0;var n=t[i],r=this.serverList[i];if(!r)continue;r.splice(0,r.length);for(var a=0;a<n.length;a++){var s=n[a],o=this.copy(s);o.key=o.value;for(var l in s)if(s.hasOwnProperty(l)){if("value"==l||"label"==l)continue;o[l]=s[l]}r.push(o)}}e&&this.callEvent("onOptionsLoad",[])},t.attachEvent("onBeforeTaskDisplay",function(t,e){return!e.$ignore}),t.json={parse:function(e){return t.assert(e,"Invalid data"),"string"==typeof e&&(window.JSON?e=JSON.parse(e):t.assert(!1,"JSON is not supported")),e.dhx_security&&(t.security_key=e.dhx_security),e},serializeTask:function(t){return this._copyObject(t)},serializeLink:function(t){return this._copyLink(t)},_copyLink:function(t){var e={};for(var i in t)e[i]=t[i];return e},_copyObject:function(e){var i={};for(var r in e)"$"!=r.charAt(0)&&(i[r]=e[r],n.isDate(i[r])&&(i[r]=t.templates.xml_format(i[r])));return i},serialize:function(){var e=[],i=[];t.eachTask(function(i){t.resetProjectDates(i),e.push(this.serializeTask(i))},t.config.root_id,this);for(var n=t.getLinks(),r=0;r<n.length;r++)i.push(this.serializeLink(n[r]));return{data:e,links:i}}},t.xml={_xmlNodeToJSON:function(t,e){for(var i={},n=0;n<t.attributes.length;n++)i[t.attributes[n].name]=t.attributes[n].value;if(!e){for(var n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];1==r.nodeType&&(i[r.tagName]=r.firstChild?r.firstChild.nodeValue:"")}i.text||(i.text=t.firstChild?t.firstChild.nodeValue:"")}return i},_getCollections:function(e){for(var i={},n=t.ajax.xpath("//coll_options",e),r=0;r<n.length;r++)for(var a=n[r].getAttribute("for"),s=i[a]=[],o=t.ajax.xpath(".//item",n[r]),l=0;l<o.length;l++){for(var d=o[l],c=d.attributes,h={key:o[l].getAttribute("value"),label:o[l].getAttribute("label")},u=0;u<c.length;u++){var _=c[u];"value"!=_.nodeName&&"label"!=_.nodeName&&(h[_.nodeName]=_.nodeValue)}s.push(h)}return i},_getXML:function(e,i,n){n=n||"data",i.getXMLTopNode||(i=t.ajax.parse(i));var r=t.ajax.xmltop(n,i.xmlDoc);if(!r||r.tagName!=n)throw"Invalid XML data";var a=r.getAttribute("dhx_security");return a&&(t.security_key=a),r},parse:function(e,i){i=this._getXML(e,i);for(var n={},r=n.data=[],a=t.ajax.xpath("//task",i),s=0;s<a.length;s++)r[s]=this._xmlNodeToJSON(a[s]);return n.collections=this._getCollections(i),n},_copyLink:function(t){return"<item id='"+t.id+"' source='"+t.source+"' target='"+t.target+"' type='"+t.type+"' />"},_copyObject:function(t){return"<task id='"+t.id+"' parent='"+(t.parent||"")+"' start_date='"+t.start_date+"' duration='"+t.duration+"' open='"+!!t.open+"' progress='"+t.progress+"' end_date='"+t.end_date+"'><![CDATA["+t.text+"]]></task>"},serialize:function(){for(var e=[],i=[],n=t.json.serialize(),r=0,a=n.data.length;r<a;r++)e.push(this._copyObject(n.data[r]));for(var r=0,a=n.links.length;r<a;r++)i.push(this._copyLink(n.links[r]));return"<data>"+e.join("")+"<coll_options for='links'>"+i.join("")+"</coll_options></data>"}},t.oldxml={parse:function(e,i){i=t.xml._getXML(e,i,"projects");for(var n={collections:{links:[]}},r=n.data=[],a=t.ajax.xpath("//task",i),s=0;s<a.length;s++){r[s]=t.xml._xmlNodeToJSON(a[s]);var o=a[s].parentNode;"project"==o.tagName?r[s].parent="project-"+o.getAttribute("id"):r[s].parent=o.parentNode.getAttribute("id")}a=t.ajax.xpath("//project",i);for(var s=0;s<a.length;s++){var l=t.xml._xmlNodeToJSON(a[s],!0);l.id="project-"+l.id,r.push(l)}for(var s=0;s<r.length;s++){var l=r[s];l.start_date=l.startdate||l.est,l.end_date=l.enddate,l.text=l.name,l.duration=l.duration/8,l.open=1,l.duration||l.end_date||(l.duration=1),l.predecessortasks&&n.collections.links.push({target:l.id,source:l.predecessortasks,type:t.config.links.finish_to_start})}return n},serialize:function(){t.message("Serialization to 'old XML' is not implemented")}},t.serverList=function(t,e){return e?this.serverList[t]=e.slice(0):this.serverList[t]||(this.serverList[t]=[]),this.serverList[t]}}},function(t,e,i){var n=i(73),r=i(76),a=i(78),s=i(0);t.exports=function(t){var e=new n(t),i=new r(e),o=a.create(e,i);s.mixin(t,o)}},function(t,e,i){function n(t){this.$gantt=t,this._calendars={}}var r=i(0),a=i(18),s=i(74);n.prototype={_calendars:{},_getDayHoursForMultiple:function(t,e){for(var i=[],n=!0,r=0,a=!1,s=this.$gantt.date.day_start(new Date(e)),o=0;o<24;o++)a=t.reduce(function(t,e){return t&&e._is_work_hour(s)},!0),a?(n?(i[r]=o,i[r+1]=o+1,r+=2):i[r-1]+=1,n=!1):n||(n=!0),s=this.$gantt.date.add(s,1,"hour");return i.length||(i=!1),i},mergeCalendars:function(){var t,e=this.createCalendar(),i=[],n=Array.prototype.slice.call(arguments,0);e.worktime.hours=[0,24],e.worktime.dates={};var r=this.$gantt.date.day_start(new Date(2592e5));for(t=0;t<7;t++)i=this._getDayHoursForMultiple(n,r),e.worktime.dates[t]=i,r=this.$gantt.date.add(r,1,"day");for(var a=0;a<n.length;a++)for(var s in n[a].worktime.dates)+s>1e4&&(i=this._getDayHoursForMultiple(n,new Date(+s)),e.worktime.dates[s]=i);return e},_convertWorktimeSettings:function(t){var e=t.days;if(e){t.dates=t.dates||{};for(var i=0;i<e.length;i++)t.dates[i]=e[i],e[i]instanceof Array||(t.dates[i]=!!e[i]);delete t.days}return t},createCalendar:function(t){var e;t||(t={}),e=t.worktime?r.copy(t.worktime):r.copy(t);var i=r.copy(this.defaults.fulltime.worktime);r.mixin(e,i);var n=r.uid(),o={id:n+"",worktime:this._convertWorktimeSettings(e)},l=new s(this.$gantt,a(this.$gantt));return r.mixin(l,o),l._tryChangeCalendarSettings(function(){})?l:null},getCalendar:function(t){return t=t||"global",this.createDefaultCalendars(),this._calendars[t]},getCalendars:function(){var t=[];for(var e in this._calendars)t.push(this.getCalendar(e));return t},getTaskCalendar:function(t){var e=this.$gantt.$services.config();if(!t)return this.getCalendar();if(t[e.calendar_property])return this.getCalendar(t[e.calendar_property]);if(e.resource_calendars)for(var i in e.resource_calendars){var n=e.resource_calendars[i];if(t[i]){var r=n[t[i]];if(r)return this.getCalendar(r)}}return this.getCalendar()},addCalendar:function(t){if(!(t instanceof s)){var e=t.id;t=this.createCalendar(t),t.id=e}var i=this.$gantt.$services.config();return t.id=t.id||r.uid(),this._calendars[t.id]=t,i.worktimes||(i.worktimes={}),i.worktimes[t.id]=t.worktime,t.id},deleteCalendar:function(t){var e=this.$gantt.$services.config();return!!t&&(!!this._calendars[t]&&(delete this._calendars[t],e.worktimes&&e.worktimes[t]&&delete e.worktimes[t],!0))},restoreConfigCalendars:function(t){for(var e in t)if(!this._calendars[e]){var i=t[e],n=this.createCalendar(i);n.id=e,this.addCalendar(n)}},defaults:{global:{id:"global",worktime:{hours:[8,17],days:[0,1,1,1,1,1,0]}},fulltime:{id:"fulltime",worktime:{hours:[0,24],days:[1,1,1,1,1,1,1]}}},createDefaultCalendars:function(){var t=this.$gantt.$services.config();this.restoreConfigCalendars(this.defaults),this.restoreConfigCalendars(t.worktimes)}},t.exports=n},function(t,e,i){function n(t,e){this.argumentsHelper=e,this.$gantt=t,this._workingUnitsCache=new r}var r=i(75),a=i(0);n.prototype={units:["year","month","week","day","hour","minute"],_getUnitOrder:function(t){for(var e=0,i=this.units.length;e<i;e++)if(this.units[e]==t)return e},_timestamp:function(t){var e=null;return t.day||0===t.day?e=t.day:t.date&&(e=Date.UTC(t.date.getFullYear(),t.date.getMonth(),t.date.getDate())),e},_checkIfWorkingUnit:function(t,e,i){return void 0===i&&(i=this._getUnitOrder(e)),void 0===i||!(i&&!this._isWorkTime(t,this.units[i-1],i-1))&&(!this["_is_work_"+e]||this["_is_work_"+e](t))},_is_work_day:function(t){var e=this._getWorkHours(t);return e instanceof Array&&e.length>0},_is_work_hour:function(t){for(var e=this._getWorkHours(t),i=t.getHours(),n=0;n<e.length;n+=2){if(void 0===e[n+1])return e[n]==i;if(i>=e[n]&&i<e[n+1])return!0}return!1},_internDatesPull:{},_nextDate:function(t,e,i){return this.$gantt.date.add(t,i,e)},_getWorkUnitsBetweenGeneric:function(t,e,i,n){var r=this.$gantt.date,a=new Date(t),s=new Date(e);n=n||1;var o,l,d=0,c=null,h=!1;o=r[i+"_start"](new Date(a)),o.valueOf()!=a.valueOf()&&(h=!0);var u=!1;l=r[i+"_start"](new Date(e)),l.valueOf()!=e.valueOf()&&(u=!0);for(var _=!1;a.valueOf()<s.valueOf();)c=this._nextDate(a,i,n),_=c.valueOf()>s.valueOf(),this._isWorkTime(a,i)&&((h||u&&_)&&(o=r[i+"_start"](new Date(a)),l=r.add(o,n,i)),h?(h=!1,c=this._nextDate(o,i,n),d+=(l.valueOf()-a.valueOf())/(l.valueOf()-o.valueOf())):u&&_?(u=!1,d+=(s.valueOf()-a.valueOf())/(l.valueOf()-o.valueOf())):d++),a=c;return d},_getHoursPerDay:function(t){for(var e=this._getWorkHours(t),i=0,n=0;n<e.length;n+=2)i+=e[n+1]-e[n]||0;return i},_getWorkHoursForRange:function(t,e){for(var i=0,n=new Date(t),r=new Date(e);n.valueOf()<r.valueOf();)this._isWorkTime(n,"day")&&(i+=this._getHoursPerDay(n)),n=this._nextDate(n,"day",1);return i},_getWorkUnitsBetweenHours:function(t,e,i,n){var r=new Date(t),a=new Date(e);n=n||1;var s=new Date(r),o=this.$gantt.date.add(this.$gantt.date.day_start(new Date(r)),1,"day");if(a.valueOf()<=o.valueOf())return this._getWorkUnitsBetweenGeneric(t,e,i,n);var l=this.$gantt.date.day_start(new Date(a)),d=a,c=this._getWorkUnitsBetweenGeneric(s,o,i,n),h=this._getWorkUnitsBetweenGeneric(l,d,i,n),u=this._getWorkHoursForRange(o,l);return u=u/n+c+h},_getCalendar:function(){return this.worktime},_setCalendar:function(t){this.worktime=t},_tryChangeCalendarSettings:function(t){var e=JSON.stringify(this._getCalendar());return t(),!this._isEmptyCalendar(this._getCalendar())||(this.$gantt.assert(!1,"Invalid calendar settings, no worktime available"),this._setCalendar(JSON.parse(e)),this._workingUnitsCache.clear(),!1)},_isEmptyCalendar:function(t){var e=!1,i=[],n=!0;for(var r in t.dates)e|=!!t.dates[r],i.push(r);for(var a=[],r=0;r<i.length;r++)i[r]<10&&a.push(i[r]);a.sort();for(var r=0;r<7;r++)a[r]!=r&&(n=!1);return n?!e:!(e||t.hours)},getWorkHours:function(){var t=this.argumentsHelper.getWorkHoursArguments.apply(this.argumentsHelper,arguments);return this._getWorkHours(t.date)},_getWorkHours:function(t){var e=this._timestamp({date:t}),i=!0,n=this._getCalendar();return void 0!==n.dates[e]?i=n.dates[e]:void 0!==n.dates[t.getDay()]&&(i=n.dates[t.getDay()]),!0===i?n.hours:i||[]},setWorkTime:function(t){return this._tryChangeCalendarSettings(a.bind(function(){var e=void 0===t.hours||t.hours,i=this._timestamp(t);null!==i?this._getCalendar().dates[i]=e:this._getCalendar().hours=e,this._workingUnitsCache.clear()},this))},unsetWorkTime:function(t){return this._tryChangeCalendarSettings(a.bind(function(){if(t){var e=this._timestamp(t);null!==e&&delete this._getCalendar().dates[e]}else this.reset_calendar();this._workingUnitsCache.clear()},this))},_isWorkTime:function(t,e,i){var n=this._workingUnitsCache.get(e,t);return-1==n&&(n=this._checkIfWorkingUnit(t,e,i),this._workingUnitsCache.put(e,t,n)),n},isWorkTime:function(){var t=this.argumentsHelper.isWorkTimeArguments.apply(this.argumentsHelper,arguments);return this._isWorkTime(t.date,t.unit)},calculateDuration:function(){var t=this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper,arguments);if(!t.unit)return!1;var e=0;return e="hour"==t.unit?this._getWorkUnitsBetweenHours(t.start_date,t.end_date,t.unit,t.step):this._getWorkUnitsBetweenGeneric(t.start_date,t.end_date,t.unit,t.step),Math.round(e)},hasDuration:function(){var t=this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper,arguments),e=t.start_date,i=t.end_date,n=t.unit,r=t.step;if(!n)return!1;var a=new Date(e),s=new Date(i);for(r=r||1;a.valueOf()<s.valueOf();){if(this._isWorkTime(a,n))return!0;a=this._nextDate(a,n,r)}return!1},calculateEndDate:function(){var t=this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper,arguments),e=t.start_date,i=t.duration,n=t.unit,r=t.step,a=t.duration>=0?1:-1;return this._calculateEndDate(e,i,n,r*a)},_calculateEndDate:function(t,e,i,n){if(!i)return!1;var r=new Date(t),a=0;for(n=n||1,e=Math.abs(1*e);a<e;){var s=this._nextDate(r,i,n);this._isWorkTime(n>0?new Date(s.valueOf()-1):new Date(s.valueOf()+1),i)&&a++,r=s}return r},getClosestWorkTime:function(){var t=this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper,arguments);return this._getClosestWorkTime(t)},_getClosestWorkTime:function(t){if(this._isWorkTime(t.date,t.unit))return t.date;var e=t.unit,i=this.$gantt.date[e+"_start"](t.date),n=new Date(i),r=new Date(i),a=!0,s=0,o="any"==t.dir||!t.dir,l=1;for("past"==t.dir&&(l=-1);!this._isWorkTime(i,e);){o&&(i=a?n:r,l*=-1);var d=i.getTimezoneOffset();if(i=this.$gantt.date.add(i,l,e),i=this.$gantt._correct_dst_change(i,d,l,e),this.$gantt.date[e+"_start"]&&(i=this.$gantt.date[e+"_start"](i)),o&&(a?n=i:r=i),a=!a,++s>3e3)return this.$gantt.assert(!1,"Invalid working time check"),!1}return i!=r&&"past"!=t.dir||(i=this.$gantt.date.add(i,1,e)),i}},t.exports=n},function(t,e){function i(){this._cache={}}i.prototype={get:function(t,e){var i=-1,n=this._cache;if(n&&n[t]){var r=n[t],a=e.getTime();void 0!==r[a]&&(i=r[a])}return i},put:function(t,e,i){if(!t||!e)return!1;var n=this._cache,r=e.getTime();return i=!!i,!!n&&(n[t]||(n[t]={}),n[t][r]=i,!0)},clear:function(){this._cache={}}},t.exports=i},function(t,e,i){function n(t){this.$gantt=t.$gantt,this.argumentsHelper=r(this.$gantt),this.calendarManager=t,this.$disabledCalendar=new a(this.$gantt,this.argumentsHelper)}var r=i(18),a=i(77);n.prototype={_getCalendar:function(t){var e;if(this.$gantt.$services.config().work_time){var i=this.calendarManager;t.task?e=i.getTaskCalendar(t.task):t.id?e=i.getTaskCalendar(t):t.calendar&&(e=t.calendar),e||(e=i.getTaskCalendar())}else e=this.$disabledCalendar;return e},getWorkHours:function(t){return t=this.argumentsHelper.getWorkHoursArguments.apply(this.argumentsHelper,arguments),this._getCalendar(t).getWorkHours(t.date)},setWorkTime:function(t,e){return t=this.argumentsHelper.setWorkTimeArguments.apply(this.argumentsHelper,arguments),e||(e=this.calendarManager.getCalendar()),e.setWorkTime(t)},unsetWorkTime:function(t,e){return t=this.argumentsHelper.unsetWorkTimeArguments.apply(this.argumentsHelper,arguments),e||(e=this.calendarManager.getCalendar()),e.unsetWorkTime(t)},isWorkTime:function(t,e,i,n){var r=this.argumentsHelper.isWorkTimeArguments.apply(this.argumentsHelper,arguments);return n=this._getCalendar(r),n.isWorkTime(r)},getClosestWorkTime:function(t){return t=this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper,arguments),this._getCalendar(t).getClosestWorkTime(t)},calculateDuration:function(){var t=this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper,arguments);return this._getCalendar(t).calculateDuration(t)},hasDuration:function(){var t=this.argumentsHelper.hasDurationArguments.apply(this.argumentsHelper,arguments);return this._getCalendar(t).hasDuration(t)},calculateEndDate:function(t){var t=this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper,arguments);return this._getCalendar(t).calculateEndDate(t)}},t.exports=n},function(t,e){function i(t,e){this.argumentsHelper=e,this.$gantt=t}i.prototype={getWorkHours:function(){return[0,24]},setWorkTime:function(){return!0},unsetWorkTime:function(){return!0},isWorkTime:function(){return!0},getClosestWorkTime:function(t){return this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper,arguments).date},calculateDuration:function(){var t=this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper,arguments),e=t.start_date,i=t.end_date,n=t.unit,r=t.step;return this._calculateDuration(e,i,n,r)},_calculateDuration:function(t,e,i,n){var r=this.$gantt.date,a={week:6048e5,day:864e5,hour:36e5,minute:6e4},s=0;if(a[i])s=Math.round((e-t)/(n*a[i]));else{for(var o=new Date(t),l=new Date(e);o.valueOf()<l.valueOf();)s+=1,o=r.add(o,n,i);o.valueOf()!=e.valueOf()&&(s+=(l-o)/(r.add(o,n,i)-o))}return Math.round(s)},hasDuration:function(){var t=this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper,arguments),e=t.start_date,i=t.end_date,n=t.unit;t.step;return!!n&&(e=new Date(e),i=new Date(i),e.valueOf()<i.valueOf())},calculateEndDate:function(){var t=this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper,arguments),e=t.start_date,i=t.duration,n=t.unit,r=t.step;return this.$gantt.date.add(e,r*i,n)}},t.exports=i},function(t,e,i){var n=i(0),r=function(t,e){return{getWorkHours:function(t){return e.getWorkHours(t)},setWorkTime:function(t){return e.setWorkTime(t)},unsetWorkTime:function(t){e.unsetWorkTime(t)},isWorkTime:function(t,i,n){return e.isWorkTime(t,i,n)},getClosestWorkTime:function(t){return e.getClosestWorkTime(t)},calculateDuration:function(t,i,n){return e.calculateDuration(t,i,n)},_hasDuration:function(t,i,n){return e.hasDuration(t,i,n)},calculateEndDate:function(t,i,n,r){return e.calculateEndDate(t,i,n,r)},createCalendar:n.bind(t.createCalendar,t),addCalendar:n.bind(t.addCalendar,t),getCalendar:n.bind(t.getCalendar,t),getCalendars:n.bind(t.getCalendars,t),getTaskCalendar:n.bind(t.getTaskCalendar,t),deleteCalendar:n.bind(t.deleteCalendar,t)}};t.exports={create:r}},function(t,e,i){var n=i(3);t.exports=function(t){t.isUnscheduledTask=function(t){return!!t.unscheduled||!t.start_date},t._isAllowedUnscheduledTask=function(e){return!(!e.unscheduled||!t.config.show_unscheduled)},t.isTaskVisible=function(e){if(!this.isTaskExists(e))return!1;var i=this.getTask(e);this.getTaskType(i.type);return!!(+i.start_date<=+this._max_date&&+i.end_date>=+this._min_date||t._isAllowedUnscheduledTask(i))&&!!(t.getGlobalTaskIndex(e)>=0)},t._defaultTaskDate=function(e,i){var n=!(!i||i==this.config.root_id)&&this.getTask(i),r="";if(n)r=n.start_date;else{var a=this.getTaskByIndex(0);r=a?a.start_date?a.start_date:a.end_date?this.calculateEndDate({start_date:a.end_date,duration:-this.config.duration_step}):"":this.config.start_date||this.getState().min_date}return t.assert(r,"Invalid dates"),new Date(r)},t._set_default_task_timing=function(e){e.start_date=e.start_date||t._defaultTaskDate(e,this.getParent(e)),e.duration=e.duration||this.config.duration_step,e.end_date=e.end_date||this.calculateEndDate(e)},t.createTask=function(e,i,n){if(e=e||{},t.defined(e.id)||(e.id=t.uid()),e.start_date||(e.start_date=t._defaultTaskDate(e,i)),void 0===e.text&&(e.text=t.locale.labels.new_task),void 0===e.duration&&(e.duration=1),i){this.setParent(e,i);this.getTask(i).$open=!0}return this.callEvent("onTaskCreated",[e])?(this.config.details_on_create?(e.$new=!0,this.silent(function(){t.$data.tasksStore.addItem(e,n)}),this.selectTask(e.id),this.refreshData(),this.showLightbox(e.id)):this.addTask(e,i,n)&&(this.showTask(e.id),this.selectTask(e.id)),e.id):null},t._getChildLinks=function(t){var e=this.getTask(t);if(!e)return[];for(var i=e.$source.concat(e.$target),n=this.getChildren(e.id),r=0;r<n.length;r++)i=i.concat(this._getChildLinks(n[r]));for(var a={},r=0;r<i.length;r++)a[i[r]]=!0;i=[];for(var r in a)this.isLinkExists(r)&&i.push(r);return i},t._getTaskTree=function(t){var e=this.getTask(t);if(!e)return[];for(var i=[],n=this.getChildren(e.id),r=0;r<n.length;r++)i.push(n[r]),i=i.concat(this._getTaskTree(n[r]));return i},t._deleteRelatedLinks=function(t,e){var i=this._dp&&!e&&this.config.cascade_delete,n="",r=!!i&&"off"!=this._dp.updateMode;i&&(n=this._dp.updateMode,this._dp.setUpdateMode("off"));for(var a=0;a<t.length;a++)i&&(this._dp.setGanttMode("links"),this._dp.setUpdated(t[a],!0,"deleted"));this.$data.linksStore.silent(function(){for(var e=0;e<t.length;e++)this.$data.linksStore.removeItem(t[e])},this),i&&(this._dp.setUpdateMode(n),r&&this._dp.sendAllData())},t._deleteRelatedTasks=function(t,e){var i=this._dp&&!e&&this.config.cascade_delete,n="";i&&(n=this._dp.updateMode,this._dp.setGanttMode("tasks"),this._dp.setUpdateMode("off"));for(var r=this._getTaskTree(t),a=0;a<r.length;a++){var s=r[a];this.$data.tasksStore.silent(function(){this.$data.tasksStore.removeItem(s)}),i&&this._dp.setUpdated(s,!0,"deleted")}i&&this._dp.setUpdateMode(n)},t._update_flags=function(t,e){void 0===t?(this._lightbox_id=this._selected_task=null,this._tasks_dnd&&this._tasks_dnd.drag&&(this._tasks_dnd.drag.id=null)):(this._lightbox_id==t&&(this._lightbox_id=e),this._selected_task==t&&(this._selected_task=e),this._tasks_dnd&&this._tasks_dnd.drag&&this._tasks_dnd.drag.id==t&&(this._tasks_dnd.drag.id=e))},t._get_duration_unit=function(){return 1e3*t._get_line(this.config.duration_unit)||this.config.duration_unit},t.getTaskType=function(t){return"task"},t._get_type_name=function(t){for(var e in this.config.types)if(this.config.types[e]==t)return e;return"task"},t._get_task_timing_mode=function(t,e){var i=this.getTaskType(t.type),n={type:i,$no_start:!1,$no_end:!1};return e||i!=t.$rendered_type?(i==this.config.types.project?n.$no_end=n.$no_start=!0:i!=this.config.types.milestone&&(n.$no_end=!(t.end_date||t.duration),n.$no_start=!t.start_date,this._isAllowedUnscheduledTask(t)&&(n.$no_end=n.$no_start=!1)),n):(n.$no_start=t.$no_start,n.$no_end=t.$no_end,n)},t._init_task_timing=function(e){var i=t._get_task_timing_mode(e,!0),n=e.$rendered_type!=i.type,r=i.type;n&&(e.$no_start=i.$no_start,e.$no_end=i.$no_end,e.$rendered_type=i.type),n&&r!=this.config.types.milestone&&r==this.config.types.project&&this._set_default_task_timing(e),r==this.config.types.milestone&&(e.end_date=e.start_date),e.start_date&&e.end_date&&(e.duration=this.calculateDuration(e)),e.duration=e.duration||0},t.isSummaryTask=function(e){var i=t._get_task_timing_mode(e);return!(!i.$no_end&&!i.$no_start)},t.resetProjectDates=function(t){var e=this._get_task_timing_mode(t);if(e.$no_end||e.$no_start){var i=this.getSubtaskDates(t.id);this._assign_project_dates(t,i.start_date,i.end_date)}},t.getSubtaskDates=function(e){var i=null,n=null,r=void 0!==e?e:t.config.root_id;return this.eachTask(function(e){this.getTaskType(e.type)==t.config.types.project||this.isUnscheduledTask(e)||(e.start_date&&!e.$no_start&&(!i||i>e.start_date.valueOf())&&(i=e.start_date.valueOf()),e.end_date&&!e.$no_end&&(!n||n<e.end_date.valueOf())&&(n=e.end_date.valueOf()))},r),{start_date:i?new Date(i):null,end_date:n?new Date(n):null}},t._assign_project_dates=function(t,e,i){var n=this._get_task_timing_mode(t);n.$no_start&&(t.start_date=e&&e!=1/0?new Date(e):this._defaultTaskDate(t,this.getParent(t))),n.$no_end&&(t.end_date=i&&i!=-1/0?new Date(i):this.calculateEndDate({start_date:t.start_date,duration:this.config.duration_step,task:t})),(n.$no_start||n.$no_end)&&this._init_task_timing(t)},t._update_parents=function(e,i){if(e){var n=this.getTask(e),r=this.getParent(n),a=this._get_task_timing_mode(n),s=!0;if(a.$no_start||a.$no_end){var o=n.start_date.valueOf(),l=n.end_date.valueOf();t.resetProjectDates(n),o==n.start_date.valueOf()&&l==n.end_date.valueOf()&&(s=!1),s&&!i&&this.refreshTask(n.id,!0)}s&&r&&this.isTaskExists(r)&&this._update_parents(r,i)}},t.roundDate=function(e){n.isDate(e)&&(e={date:e,unit:t.getScale().unit,step:t.getScale().step});var i,r,a,s=e.date,o=e.step,l=e.unit;if(l==t.getScale().unit&&o==t.getScale().step&&+s>=+t._min_date&&+s<=+t._max_date)a=Math.floor(t.columnIndexByDate(s)),t.getScale().trace_x[a]||(a-=1),r=new Date(t.getScale().trace_x[a]),i=new Date(r),i=t.getScale().trace_x[a+1]?new Date(t.getScale().trace_x[a+1]):t.date.add(r,o,l);else{for(a=Math.floor(t.columnIndexByDate(s)),i=t.date[l+"_start"](new Date(this._min_date)),t.getScale().trace_x[a]&&(i=t.date[l+"_start"](t.getScale().trace_x[a]));+i<+s;){i=t.date[l+"_start"](t.date.add(i,o,l));var d=i.getTimezoneOffset();i=t._correct_dst_change(i,d,i,l),t.date[l+"_start"]&&(i=t.date[l+"_start"](i))}r=t.date.add(i,-1*o,l)}return e.dir&&"future"==e.dir?i:e.dir&&"past"==e.dir?r:Math.abs(s-r)<Math.abs(i-s)?r:i},t.correctTaskWorkTime=function(e){t.config.work_time&&t.config.correct_work_time&&(this.isWorkTime(e.start_date,void 0,e)?this.isWorkTime(new Date(+e.end_date-1),void 0,e)||(e.end_date=this.calculateEndDate(e)):(e.start_date=this.getClosestWorkTime({date:e.start_date,dir:"future",task:e}),e.end_date=this.calculateEndDate(e)))},t.attachEvent("onBeforeTaskUpdate",function(e,i){return t._init_task_timing(i),!0}),t.attachEvent("onBeforeTaskAdd",function(e,i){return t._init_task_timing(i),!0}),t.sort=function(t,e,i,n){var r=!n;this.isTaskExists(i)||(i=this.config.root_id),t||(t="order");var a="string"==typeof t?function(e,i){return e[t]==i[t]?0:e[t]>i[t]?1:-1}:t;if(e){var s=a;a=function(t,e){return s(e,t)}}var o=this.getChildren(i);if(o){for(var l=[],d=o.length-1;d>=0;d--)l[d]=this.getTask(o[d]);l.sort(a);for(var d=0;d<l.length;d++)o[d]=l[d].id,this.sort(t,e,o[d],!0)}r&&this.render()},t._isTask=function(e){var i=this._get_task_timing_mode(e);return!(e.type&&e.type==t.config.types.project||i.$no_start||i.$no_end)},t._isProject=function(t){return!this._isTask(t)}}},function(t,e,i){t.exports=function(t){var e=i(1);t._lightbox_methods={},t._lightbox_template="<div class='gantt_cal_ltitle'><span class='gantt_mark'>&nbsp;</span><span class='gantt_time'></span><span class='gantt_title'></span></div><div class='gantt_cal_larea'></div>",t.$services.getService("state").registerProvider("lightbox",function(){return{lightbox:t._lightbox_id}}),t.showLightbox=function(e){if(e&&!t.isReadonly(this.getTask(e))&&this.callEvent("onBeforeLightbox",[e])){var i=this.getTask(e),n=this.getLightbox(this.getTaskType(i.type));this._center_lightbox(n),this.showCover(),this._fill_lightbox(e,n),this._waiAria.lightboxVisibleAttr(n),this.callEvent("onLightbox",[e])}},t._get_timepicker_step=function(){if(this.config.round_dnd_dates){var e=t.getScale(),i=this._get_line(e.unit)*e.step/60;return(i>=1440||!this._is_chart_visible())&&(i=this.config.time_step),i}return this.config.time_step},t.getLabel=function(t,e){for(var i=this._get_typed_lightbox_config(),n=0;n<i.length;n++)if(i[n].map_to==t)for(var r=i[n].options,a=0;a<r.length;a++)if(r[a].key==e)return r[a].label;return""},t.updateCollection=function(e,i){i=i.slice(0);var n=t.serverList(e);if(!n)return!1;n.splice(0,n.length),n.push.apply(n,i||[]),t.resetLightbox()},t.getLightboxType=function(){return this.getTaskType(this._lightbox_type)},t.getLightbox=function(e){if(void 0===e&&(e=this.getLightboxType()),!this._lightbox||this.getLightboxType()!=this.getTaskType(e)){this._lightbox_type=this.getTaskType(e);var i=document.createElement("DIV");i.className="gantt_cal_light";var n=this._is_lightbox_timepicker();(t.config.wide_form||n)&&(i.className+=" gantt_cal_light_wide"),n&&(t.config.wide_form=!0,i.className+=" gantt_cal_light_full"),i.style.visibility="hidden";for(var r,a=this._lightbox_template,s=this.config.buttons_left,o=0;o<s.length;o++){var l=this.config._migrate_buttons[s[o]]?this.config._migrate_buttons[s[o]]:s[o];r=this._waiAria.lightboxButtonAttrString(l),a+="<div "+r+" class='gantt_btn_set gantt_left_btn_set "+l+"_set'><div dhx_button='1' class='"+l+"'></div><div>"+this.locale.labels[l]+"</div></div>"}s=this.config.buttons_right;for(var o=0;o<s.length;o++){var l=this.config._migrate_buttons[s[o]]?this.config._migrate_buttons[s[o]]:s[o];r=this._waiAria.lightboxButtonAttrString(l),a+="<div "+r+" class='gantt_btn_set gantt_right_btn_set "+l+"_set' style='float:right;'><div dhx_button='1' class='"+l+"'></div><div>"+this.locale.labels[l]+"</div></div>"}a+="</div>",i.innerHTML=a,t._waiAria.lightboxAttr(i),t.config.drag_lightbox&&(i.firstChild.onmousedown=t._ready_to_dnd,i.firstChild.onselectstart=function(){return!1},i.firstChild.style.cursor="pointer",t._init_dnd_events()),document.body.insertBefore(i,document.body.firstChild),this._lightbox=i;var d=this._get_typed_lightbox_config(e);a=this._render_sections(d);for(var c=i.getElementsByTagName("div"),o=0;o<c.length;o++){var h=c[o];if("gantt_cal_larea"==h.className){h.innerHTML=a;break}}for(var o=0;o<d.length;o++){var u=d[o];if(u.id&&document.getElementById(u.id)){var _=document.getElementById(u.id),g=_.querySelector("label"),f=_.nextSibling;if(f){var p=f.querySelector("input, select, textarea");p&&(u.inputId=p.id||"input_"+t.uid(),p.id||(p.id=u.inputId),g.setAttribute("for",u.inputId))}}}this.resizeLightbox(),this._init_lightbox_events(this),i.style.display="none",i.style.visibility="visible"}return this._lightbox},t._render_sections=function(t){for(var e="",i=0;i<t.length;i++){var n=this.form_blocks[t[i].type];if(n){t[i].id="area_"+this.uid();var r=t[i].hidden?" style='display:none'":"",a="";t[i].button&&(a="<div class='gantt_custom_button' index='"+i+"'><div class='gantt_custom_button_"+t[i].button+"'></div><div class='gantt_custom_button_label'>"+this.locale.labels["button_"+t[i].button]+"</div></div>"),this.config.wide_form&&(e+="<div class='gantt_wrap_section' "+r+">"),e+="<div id='"+t[i].id+"' class='gantt_cal_lsection'><label>"+a+this.locale.labels["section_"+t[i].name]+"</label></div>"+n.render.call(this,t[i]),e+="</div>"}}return e},t.resizeLightbox=function(){var t=this._lightbox;if(t){var e=t.childNodes[1];e.style.height="0px",e.style.height=e.scrollHeight+"px",t.style.height=e.scrollHeight+this.config.lightbox_additional_height+"px",e.style.height=e.scrollHeight+"px"}},t._center_lightbox=function(t){if(t){t.style.display="block";var e=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,i=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,n=window.innerHeight||document.documentElement.clientHeight;t.style.top=e?Math.round(e+Math.max((n-t.offsetHeight)/2,0))+"px":Math.round(Math.max((n-t.offsetHeight)/2,0)+9)+"px",document.documentElement.scrollWidth>document.body.offsetWidth?t.style.left=Math.round(i+(document.body.offsetWidth-t.offsetWidth)/2)+"px":t.style.left=Math.round((document.body.offsetWidth-t.offsetWidth)/2)+"px"}},t.showCover=function(){if(!this._cover){this._cover=document.createElement("DIV"),this._cover.className="gantt_cal_cover";var t=void 0!==document.height?document.height:document.body.offsetHeight,e=document.documentElement?document.documentElement.scrollHeight:0;this._cover.style.height=Math.max(t,e)+"px",document.body.appendChild(this._cover)}},t._init_lightbox_events=function(){t.lightbox_events={},t.lightbox_events.gantt_save_btn=function(e){t._save_lightbox()},t.lightbox_events.gantt_delete_btn=function(e){t.callEvent("onLightboxDelete",[t._lightbox_id])&&(t.isTaskExists(t._lightbox_id)?t.$click.buttons.delete(t._lightbox_id):t.hideLightbox())},t.lightbox_events.gantt_cancel_btn=function(e){t._cancel_lightbox()},t.lightbox_events.default=function(i,n){if(n.getAttribute("dhx_button"))t.callEvent("onLightboxButton",[n.className,n,i]);else{var r,a,s,o=e.getClassName(n);if(-1!=o.indexOf("gantt_custom_button"))if(-1!=o.indexOf("gantt_custom_button_"))for(r=n.parentNode.getAttribute("index"),s=n;s&&-1==e.getClassName(s).indexOf("gantt_cal_lsection");)s=s.parentNode;else r=n.getAttribute("index"),s=n.parentNode,n=n.firstChild;var l=t._get_typed_lightbox_config();r&&(r*=1,a=t.form_blocks[l[1*r].type],a.button_click(r,n,s,s.nextSibling))}},this.event(t.getLightbox(),"click",function(i){i=i||window.event;var n=i.target?i.target:i.srcElement,r=e.getClassName(n);return r||(n=n.previousSibling,r=e.getClassName(n)),n&&r&&0===r.indexOf("gantt_btn_set")&&(n=n.firstChild,r=e.getClassName(n)),!(!n||!r)&&(t.defined(t.lightbox_events[n.className])?t.lightbox_events[n.className]:t.lightbox_events.default)(i,n)}),t.getLightbox().onkeydown=function(i){var n=i||window.event,r=i.target||i.srcElement,a=!!(e.getClassName(r).indexOf("gantt_btn_set")>-1);switch((i||n).keyCode){case 32:if((i||n).shiftKey)return;a&&r.click&&r.click();break;case t.keys.edit_save:if((i||n).shiftKey)return;a&&r.click?r.click():t._save_lightbox();break;case t.keys.edit_cancel:t._cancel_lightbox()}}},t._cancel_lightbox=function(){var e=this.getLightboxValues();this.callEvent("onLightboxCancel",[this._lightbox_id,e.$new]),t.isTaskExists(e.id)&&e.$new&&this.silent(function(){t.$data.tasksStore.removeItem(e.id),t._update_flags(e.id,null)}),this.refreshData(),this.hideLightbox()},t._save_lightbox=function(){var t=this.getLightboxValues();this.callEvent("onLightboxSave",[this._lightbox_id,t,!!t.$new])&&(t.$new?(delete t.$new,this.addTask(t)):this.isTaskExists(t.id)&&(this.mixin(this.getTask(t.id),t,!0),this.refreshTask(t.id),this.updateTask(t.id)),this.refreshData(),this.hideLightbox())},t._resolve_default_mapping=function(t){var e=t.map_to;return{time:!0,time_optional:!0,duration:!0,duration_optional:!0}[t.type]&&("auto"==t.map_to?e={start_date:"start_date",end_date:"end_date",duration:"duration"}:"string"==typeof t.map_to&&(e={start_date:t.map_to})),e},t.getLightboxValues=function(){var e={};t.isTaskExists(this._lightbox_id)&&(e=this.mixin({},this.getTask(this._lightbox_id)));for(var i=this._get_typed_lightbox_config(),n=0;n<i.length;n++){var r=document.getElementById(i[n].id);r=r?r.nextSibling:r;var a=this.form_blocks[i[n].type];if(a){var s=a.get_value.call(this,r,e,i[n]),o=t._resolve_default_mapping(i[n]);if("string"==typeof o&&"auto"!=o)e[o]=s;else if("object"==typeof o)for(var l in o)o[l]&&(e[o[l]]=s[l])}}return e},t.hideLightbox=function(){var t=this.getLightbox();t&&(t.style.display="none"),this._waiAria.lightboxHiddenAttr(t),this._lightbox_id=null,this.hideCover(),this.callEvent("onAfterLightbox",[])},t.hideCover=function(){this._cover&&this._cover.parentNode.removeChild(this._cover),this._cover=null},t.resetLightbox=function(){t._lightbox&&!t._custom_lightbox&&t._lightbox.parentNode.removeChild(t._lightbox),t._lightbox=null},t._set_lightbox_values=function(e,i){var n=e,r=i.getElementsByTagName("span"),a=[];t.templates.lightbox_header?(a.push(""),a.push(t.templates.lightbox_header(n.start_date,n.end_date,n)),r[1].innerHTML="",r[2].innerHTML=t.templates.lightbox_header(n.start_date,n.end_date,n)):(a.push(this.templates.task_time(n.start_date,n.end_date,n)),a.push((this.templates.task_text(n.start_date,n.end_date,n)||"").substr(0,70)),r[1].innerHTML=this.templates.task_time(n.start_date,n.end_date,n),r[2].innerHTML=(this.templates.task_text(n.start_date,n.end_date,n)||"").substr(0,70)),r[1].innerHTML=a[0],r[2].innerHTML=a[1],t._waiAria.lightboxHeader(i,a.join(" "));for(var s=this._get_typed_lightbox_config(this.getLightboxType()),o=0;o<s.length;o++){var l=s[o];if(this.form_blocks[l.type]){var d=document.getElementById(l.id).nextSibling,c=this.form_blocks[l.type],h=t._resolve_default_mapping(s[o]),u=this.defined(n[h])?n[h]:l.default_value;c.set_value.call(t,d,u,n,l),l.focus&&c.focus.call(t,d)}}e.id&&(t._lightbox_id=e.id)},t._fill_lightbox=function(t,e){var i=this.getTask(t);this._set_lightbox_values(i,e)},t.getLightboxSection=function(e){var i=this._get_typed_lightbox_config(),n=0;for(n;n<i.length&&i[n].name!=e;n++);var r=i[n];if(!r)return null;this._lightbox||this.getLightbox();var a=document.getElementById(r.id),s=a.nextSibling,o={section:r,header:a,node:s,getValue:function(e){return t.form_blocks[r.type].get_value.call(t,s,e||{},r)},setValue:function(e,i){return t.form_blocks[r.type].set_value.call(t,s,e,i||{},r)}},l=this._lightbox_methods["get_"+r.type+"_control"];return l?l(o):o},t._lightbox_methods.get_template_control=function(t){return t.control=t.node,t},t._lightbox_methods.get_select_control=function(t){return t.control=t.node.getElementsByTagName("select")[0],t},t._lightbox_methods.get_textarea_control=function(t){return t.control=t.node.getElementsByTagName("textarea")[0],t},t._lightbox_methods.get_time_control=function(t){return t.control=t.node.getElementsByTagName("select"),t},t._init_dnd_events=function(){this.event(document.body,"mousemove",t._move_while_dnd),this.event(document.body,"mouseup",t._finish_dnd),t._init_dnd_events=function(){}},t._move_while_dnd=function(e){if(t._dnd_start_lb){document.gantt_unselectable||(document.body.className+=" gantt_unselectable",document.gantt_unselectable=!0);var i=t.getLightbox(),n=e&&e.target?[e.pageX,e.pageY]:[event.clientX,event.clientY];i.style.top=t._lb_start[1]+n[1]-t._dnd_start_lb[1]+"px",i.style.left=t._lb_start[0]+n[0]-t._dnd_start_lb[0]+"px"}},t._ready_to_dnd=function(e){var i=t.getLightbox();t._lb_start=[parseInt(i.style.left,10),parseInt(i.style.top,10)],t._dnd_start_lb=e&&e.target?[e.pageX,e.pageY]:[event.clientX,event.clientY]},t._finish_dnd=function(){t._lb_start&&(t._lb_start=t._dnd_start_lb=!1,document.body.className=document.body.className.replace(" gantt_unselectable",""),document.gantt_unselectable=!1)},t._focus=function(e,i){if(e&&e.focus)if(t.config.touch);else try{i&&e.select&&e.select(),e.focus()}catch(t){}},t.form_blocks={getTimePicker:function(e,i){var n=e.time_format;if(!n){var n=["%d","%m","%Y"];t._get_line(t.getScale().unit)<t._get_line("day")&&n.push("%H:%i")}e._time_format_order={size:0};var r=this.config,a=this.date.date_part(new Date(t._min_date.valueOf())),s=1440,o=0;t.config.limit_time_select&&(s=60*r.last_hour+1,o=60*r.first_hour,a.setHours(r.first_hour));for(var l="",d=0;d<n.length;d++){var c=n[d];d>0&&(l+=" ");var h="";switch(c){case"%Y":e._time_format_order[2]=d,e._time_format_order.size++;var u,_,g,f;e.year_range&&(isNaN(e.year_range)?e.year_range.push&&(g=e.year_range[0],f=e.year_range[1]):u=e.year_range),u=u||10,_=_||Math.floor(u/2),g=g||a.getFullYear()-_,f=f||g+u;for(var p=g;p<f;p++)h+="<option value='"+p+"'>"+p+"</option>";break;case"%m":e._time_format_order[1]=d,e._time_format_order.size++;for(var p=0;p<12;p++)h+="<option value='"+p+"'>"+this.locale.date.month_full[p]+"</option>";break;case"%d":e._time_format_order[0]=d,e._time_format_order.size++;for(var p=1;p<32;p++)h+="<option value='"+p+"'>"+p+"</option>";break;case"%H:%i":e._time_format_order[3]=d,e._time_format_order.size++;var p=o,v=a.getDate();for(e._time_values=[];p<s;)h+="<option value='"+p+"'>"+this.templates.time_picker(a)+"</option>",e._time_values.push(p),a.setTime(a.valueOf()+60*this._get_timepicker_step()*1e3),p=24*(a.getDate()!=v?1:0)*60+60*a.getHours()+a.getMinutes()}if(h){var m=t._waiAria.lightboxSelectAttrString(c);l+="<select "+(e.readonly?"disabled='disabled'":"")+(i?" style='display:none' ":"")+m+">"+h+"</select>"}}return l},_fill_lightbox_select:function(e,i,n,r,a){if(e[i+r[0]].value=n.getDate(),e[i+r[1]].value=n.getMonth(),e[i+r[2]].value=n.getFullYear(),t.defined(r[3])){var s=60*n.getHours()+n.getMinutes();s=Math.round(s/t._get_timepicker_step())*t._get_timepicker_step();var o=e[i+r[3]];o.value=s,o.setAttribute("data-value",s)}},template:{render:function(t){return"<div class='gantt_cal_ltext gantt_cal_template' style='height:"+(t.height||"30")+"px;'></div>"},set_value:function(t,e,i,n){t.innerHTML=e||""},get_value:function(t,e,i){return t.innerHTML||""},focus:function(t){}},textarea:{render:function(t){return"<div class='gantt_cal_ltext' style='height:"+(t.height||"130")+"px;'><textarea></textarea></div>"},set_value:function(t,e,i){this.form_blocks.textarea._get_input(t).value=e||""},get_value:function(t,e){return this.form_blocks.textarea._get_input(t).value},focus:function(e){var i=this.form_blocks.textarea._get_input(e);t._focus(i,!0)},_get_input:function(t){return t.querySelector("textarea")}},select:{render:function(t){for(var e=(t.height||"23")+"px",i="<div class='gantt_cal_ltext' style='height:"+e+";'><select style='width:100%;'>",n=0;n<t.options.length;n++)i+="<option value='"+t.options[n].key+"'>"+t.options[n].label+"</option>";return i+="</select></div>"},set_value:function(t,e,i,n){var r=t.firstChild;!r._dhx_onchange&&n.onchange&&(r.onchange=n.onchange,r._dhx_onchange=!0),void 0===e&&(e=(r.options[0]||{}).value),r.value=e||""},get_value:function(t,e){return t.firstChild.value},focus:function(e){var i=e.firstChild;t._focus(i,!0)}},time:{render:function(t){var e=this.form_blocks.getTimePicker.call(this,t),i=["<div style='height:"+(t.height||30)+"px;padding-top:0px;font-size:inherit;text-align:center;' class='gantt_section_time'>"];return i.push(e),t.single_date?(e=this.form_blocks.getTimePicker.call(this,t,!0),i.push("<span></span>")):i.push("<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>"),i.push(e),i.push("</div>"),i.join("")},set_value:function(e,i,n,r){var a=r,s=e.getElementsByTagName("select"),o=r._time_format_order;if(r._time_format_size,a.auto_end_date)for(var l=function(){h=new Date(s[o[2]].value,s[o[1]].value,s[o[0]].value,0,0),u=t.calculateEndDate({start_date:h,duration:1,task:n}),this.form_blocks._fill_lightbox_select(s,o.size,u,o,a)},d=0;d<4;d++)s[d].onchange=l;var c=t._resolve_default_mapping(r);"string"==typeof c&&(c={start_date:c});var h=n[c.start_date]||new Date,u=n[c.end_date]||t.calculateEndDate({start_date:h,duration:1,task:n});this.form_blocks._fill_lightbox_select(s,0,h,o,a),this.form_blocks._fill_lightbox_select(s,o.size,u,o,a)},get_value:function(e,i,n){var r=e.getElementsByTagName("select"),a=n._time_format_order,s=0,o=0;if(t.defined(a[3])){var l=parseInt(r[a[3]].value,10);s=Math.floor(l/60),o=l%60}var d=new Date(r[a[2]].value,r[a[1]].value,r[a[0]].value,s,o);if(s=o=0,t.defined(a[3])){var l=parseInt(r[a.size+a[3]].value,10);s=Math.floor(l/60),o=l%60}var c=new Date(r[a[2]+a.size].value,r[a[1]+a.size].value,r[a[0]+a.size].value,s,o);c<=d&&(c=t.date.add(d,t._get_timepicker_step(),"minute"));var h=t._resolve_default_mapping(n),u={start_date:new Date(d),end_date:new Date(c)};return"string"==typeof h?u.start_date:u},focus:function(e){t._focus(e.getElementsByTagName("select")[0])}},duration:{render:function(t){var e=this.form_blocks.getTimePicker.call(this,t);e="<div class='gantt_time_selects'>"+e+"</div>";var i=this.locale.labels[this.config.duration_unit+"s"],n=t.single_date?' style="display:none"':"",r=t.readonly?" disabled='disabled'":"",a=this._waiAria.lightboxDurationInputAttrString(t),s="<div class='gantt_duration' "+n+"><input type='button' class='gantt_duration_dec' value='−'"+r+"><input type='text' value='5' class='gantt_duration_value'"+r+" "+a+"><input type='button' class='gantt_duration_inc' value='+'"+r+"> "+i+" <span></span></div>";return"<div style='height:"+(t.height||30)+"px;padding-top:0px;font-size:inherit;' class='gantt_section_time'>"+e+" "+s+"</div>"},set_value:function(e,i,n,r){function a(){var i=t.form_blocks.duration._get_start_date.call(t,e,r),a=t.form_blocks.duration._get_duration.call(t,e,r),s=t.calculateEndDate({start_date:i,duration:a,task:n});u.innerHTML=t.templates.task_date(s)}function s(t){var e=c.value;e=parseInt(e,10),window.isNaN(e)&&(e=0),e+=t,e<1&&(e=1),c.value=e,a()}var o=r,l=e.getElementsByTagName("select"),d=e.getElementsByTagName("input"),c=d[1],h=[d[0],d[2]],u=e.getElementsByTagName("span")[0],_=r._time_format_order;h[0].onclick=t.bind(function(){s(-1*this.config.duration_step)},this),h[1].onclick=t.bind(function(){s(1*this.config.duration_step)},this),l[0].onchange=a,l[1].onchange=a,l[2].onchange=a,l[3]&&(l[3].onchange=a),c.onkeydown=t.bind(function(t){t=t||window.event;var e=t.charCode||t.keyCode||t.which;return 40==e?(s(-1*this.config.duration_step),!1):38==e?(s(1*this.config.duration_step),!1):void window.setTimeout(function(t){a()},1)},this),c.onchange=t.bind(function(t){a()},this);var g=t._resolve_default_mapping(r);"string"==typeof g&&(g={start_date:g});var f=n[g.start_date]||new Date,p=n[g.end_date]||t.calculateEndDate({start_date:f,duration:1,task:n}),v=Math.round(n[g.duration])||t.calculateDuration({start_date:f,end_date:p,task:n});t.form_blocks._fill_lightbox_select(l,0,f,_,o),c.value=v,a()},_get_start_date:function(e,i){var n=e.getElementsByTagName("select"),r=i._time_format_order,a=0,s=0;if(t.defined(r[3])){var o=n[r[3]],l=parseInt(o.value,10);isNaN(l)&&o.hasAttribute("data-value")&&(l=parseInt(o.getAttribute("data-value"),10)),a=Math.floor(l/60),s=l%60}return new Date(n[r[2]].value,n[r[1]].value,n[r[0]].value,a,s)},_get_duration:function(t,e){var i=t.getElementsByTagName("input")[1];return i=parseInt(i.value,10),i&&!window.isNaN(i)||(i=1),i<0&&(i*=-1),i},get_value:function(e,i,n){var r=t.form_blocks.duration._get_start_date(e,n),a=t.form_blocks.duration._get_duration(e,n),s=t.calculateEndDate({start_date:r,duration:a,task:i}),o=t._resolve_default_mapping(n),l={start_date:new Date(r),end_date:new Date(s),duration:a};return"string"==typeof o?l.start_date:l},focus:function(e){t._focus(e.getElementsByTagName("select")[0])}},parent:{_filter:function(e,i,n){var r=i.filter||function(){return!0};e=e.slice(0);for(var a=0;a<e.length;a++){var s=e[a];(s.id==n||t.isChildOf(s.id,n)||!1===r(s.id,s))&&(e.splice(a,1),a--)}return e},_display:function(e,i){var n=[],r=[];i&&(n=t.getTaskByTime(),e.allow_root&&n.unshift({id:t.config.root_id,text:e.root_label||""}),n=this._filter(n,e,i),e.sort&&n.sort(e.sort));for(var a=e.template||t.templates.task_text,s=0;s<n.length;s++){var o=a.apply(t,[n[s].start_date,n[s].end_date,n[s]]);void 0===o&&(o=""),r.push({key:n[s].id,label:o})}return e.options=r,e.map_to=e.map_to||"parent",t.form_blocks.select.render.apply(this,arguments)},render:function(e){return t.form_blocks.parent._display(e,!1)},set_value:function(e,i,n,r){var a=document.createElement("div");a.innerHTML=t.form_blocks.parent._display(r,n.id);var s=a.removeChild(a.firstChild);return e.onselect=null,e.parentNode.replaceChild(s,e),t.form_blocks.select.set_value.apply(t,[s,i,n,r])},get_value:function(){return t.form_blocks.select.get_value.apply(t,arguments)},focus:function(){return t.form_blocks.select.focus.apply(t,arguments)}}},t._is_lightbox_timepicker=function(){for(var t=this._get_typed_lightbox_config(),e=0;e<t.length;e++)if("time"==t[e].name&&"time"==t[e].type)return!0;return!1},t._dhtmlx_confirm=function(e,i,n,r){if(!e)return n();var a={text:e};i&&(a.title=i),r&&(a.ok=r),n&&(a.callback=function(t){t&&n()}),t.confirm(a)},t._get_typed_lightbox_config=function(e){void 0===e&&(e=this.getLightboxType());var i=this._get_type_name(e);return t.config.lightbox[i+"_sections"]?t.config.lightbox[i+"_sections"]:t.config.lightbox.sections},t._silent_redraw_lightbox=function(t){var e=this.getLightboxType();if(this.getState().lightbox){var i=this.getState().lightbox,n=this.getLightboxValues(),r=this.copy(this.getTask(i));this.resetLightbox();var a=this.mixin(r,n,!0),s=this.getLightbox(t||void 0);this._center_lightbox(this.getLightbox()),this._set_lightbox_values(a,s)}else this.resetLightbox(),this.getLightbox(t||void 0);this.callEvent("onLightboxChange",[e,this.getLightboxType()])}}},function(t,e){t.exports=function(t){t._extend_to_optional=function(e){var i=e,n={render:i.render,focus:i.focus,set_value:function(e,r,a,s){var o=t._resolve_default_mapping(s);if(!a[o.start_date]||"start_date"==o.start_date&&this._isAllowedUnscheduledTask(a)){n.disable(e,s);var l={};for(var d in o)l[o[d]]=a[d];return i.set_value.call(t,e,r,l,s)}return n.enable(e,s),i.set_value.call(t,e,r,a,s)},get_value:function(e,n,r){return r.disabled?{start_date:null}:i.get_value.call(t,e,n,r)},update_block:function(e,i){if(t.callEvent("onSectionToggle",[t._lightbox_id,i]),e.style.display=i.disabled?"none":"block",i.button){var n=e.previousSibling.querySelector(".gantt_custom_button_label"),r=t.locale.labels,a=i.disabled?r[i.name+"_enable_button"]:r[i.name+"_disable_button"];n.innerHTML=a}t.resizeLightbox()},disable:function(t,e){e.disabled=!0,n.update_block(t,e)},enable:function(t,e){e.disabled=!1,n.update_block(t,e)},button_click:function(e,i,r,a){if(!1!==t.callEvent("onSectionButton",[t._lightbox_id,r])){var s=t._get_typed_lightbox_config()[e];s.disabled?n.enable(a,s):n.disable(a,s)}}};return n},t.form_blocks.duration_optional=t._extend_to_optional(t.form_blocks.duration),t.form_blocks.time_optional=t._extend_to_optional(t.form_blocks.time)}},function(t,e){t.exports=function(t){}},function(t,e){t.exports=function(t){function e(){return t._cached_functions.update_if_changed(t),t._cached_functions.active||t._cached_functions.activate(),!0}t._cached_functions={cache:{},mode:!1,critical_path_mode:!1,wrap_methods:function(t,e){if(e._prefetch_originals)for(var i in e._prefetch_originals)e[i]=e._prefetch_originals[i];e._prefetch_originals={};for(var i=0;i<t.length;i++)this.prefetch(t[i],e)},prefetch:function(t,e){var i=e[t];if(i){var n=this;e._prefetch_originals[t]=i,e[t]=function(){for(var e=new Array(arguments.length),r=0,a=arguments.length;r<a;r++)e[r]=arguments[r];if(n.active){var s=n.get_arguments_hash(Array.prototype.slice.call(e));n.cache[t]||(n.cache[t]={});var o=n.cache[t];if(n.has_cached_value(o,s))return n.get_cached_value(o,s);var l=i.apply(this,e);return n.cache_value(o,s,l),l}return i.apply(this,e)}}return i},cache_value:function(t,e,i){this.is_date(i)&&(i=new Date(i)),t[e]=i},has_cached_value:function(t,e){return t.hasOwnProperty(e)},get_cached_value:function(t,e){var i=t[e];return this.is_date(i)&&(i=new Date(i)),i},is_date:function(t){return t&&t.getUTCDate},get_arguments_hash:function(t){for(var e=[],i=0;i<t.length;i++)e.push(this.stringify_argument(t[i]));return"("+e.join(";")+")"},stringify_argument:function(t){return(t.id?t.id:this.is_date(t)?t.valueOf():t)+""},activate:function(){this.clear(),this.active=!0},deactivate:function(){this.clear(),this.active=!1},clear:function(){this.cache={}},setup:function(t){var e=[],i=["_isCriticalTask","isCriticalLink","_isProjectEnd","_getProjectEnd","_getSlack"];"auto"==this.mode?t.config.highlight_critical_path&&(e=i):!0===this.mode&&(e=i),this.wrap_methods(e,t)},update_if_changed:function(t){(this.critical_path_mode!=t.config.highlight_critical_path||this.mode!==t.config.optimize_render)&&(this.critical_path_mode=t.config.highlight_critical_path,this.mode=t.config.optimize_render,this.setup(t))}},t.attachEvent("onBeforeGanttRender",e),t.attachEvent("onBeforeDataRender",e),t.attachEvent("onBeforeSmartRender",function(){e()}),t.attachEvent("onBeforeParse",e),t.attachEvent("onDataRender",function(){t._cached_functions.deactivate()});var i=null;t.attachEvent("onSmartRender",function(){i&&clearTimeout(i),i=setTimeout(function(){t._cached_functions.deactivate()},1e3)}),t.attachEvent("onBeforeGanttReady",function(){return t._cached_functions.update_if_changed(t),!0})}},function(t,e){function i(t,e,i){for(var n in e)(void 0===t[n]||i)&&(t[n]=e[n])}function n(t,e){var n=e.skin;if(!n||t)for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var s=r[a].href.match("dhtmlxgantt_([a-z_]+).css");if(s&&(e.skins[s[1]]||!n)){n=s[1];break}}e.skin=n||"terrace";var o=e.skins[e.skin]||e.skins.terrace;i(e.config,o.config,t);var l=e.getGridColumns();l[1]&&void 0===l[1].width&&(l[1].width=o._second_column_width),l[2]&&void 0===l[2].width&&(l[2].width=o._third_column_width),o.config.task_height&&(e.config.task_height=o.config.task_height||"full"),o._lightbox_template&&(e._lightbox_template=o._lightbox_template),o._redefine_lightbox_buttons&&(e.config.buttons_right=o._redefine_lightbox_buttons.buttons_right,e.config.buttons_left=o._redefine_lightbox_buttons.buttons_left),e.resetLightbox()}t.exports=function(t){t.resetSkin||(t.resetSkin=function(){this.skin="",n(!0,this)},t.skins={},t.attachEvent("onGanttLayoutReady",function(){n(!1,this)}))}},function(t,e){t.exports=function(t){t.skins.skyblue={config:{grid_width:350,row_height:27,scale_height:27,link_line_width:1,link_arrow_size:8,lightbox_additional_height:75},_second_column_width:95,_third_column_width:80}}},function(t,e){t.exports=function(t){t.skins.meadow={config:{grid_width:350,row_height:27,scale_height:30,link_line_width:2,link_arrow_size:6,lightbox_additional_height:72},_second_column_width:95,_third_column_width:80}}},function(t,e){t.exports=function(t){t.skins.terrace={config:{grid_width:360,row_height:35,scale_height:35,link_line_width:2,link_arrow_size:6,lightbox_additional_height:75},_second_column_width:90,_third_column_width:70}}},function(t,e){t.exports=function(t){t.skins.broadway={config:{grid_width:360,row_height:35,scale_height:35,link_line_width:1,link_arrow_size:7,lightbox_additional_height:86},_second_column_width:90,_third_column_width:80,_lightbox_template:"<div class='gantt_cal_ltitle'><span class='gantt_mark'>&nbsp;</span><span class='gantt_time'></span><span class='gantt_title'></span><div class='gantt_cancel_btn'></div></div><div class='gantt_cal_larea'></div>",_config_buttons_left:{},_config_buttons_right:{gantt_delete_btn:"icon_delete",gantt_save_btn:"icon_save"}}}},function(t,e){t.exports=function(t){t.skins.material={config:{grid_width:411,row_height:34,task_height_offset:6,scale_height:36,link_line_width:2,link_arrow_size:6,lightbox_additional_height:80},_second_column_width:110,_third_column_width:75,_redefine_lightbox_buttons:{buttons_left:["dhx_delete_btn"],buttons_right:["dhx_save_btn","dhx_cancel_btn"]}},t.attachEvent("onAfterTaskDrag",function(e){var i=t.getTaskNode(e);i&&(i.className+=" gantt_drag_animation",setTimeout(function(){var t=i.className.indexOf(" gantt_drag_animation");t>-1&&(i.className=i.className.slice(0,t))},200))})}},function(t,e){t.exports=function(t){t.skins.contrast_black={config:{grid_width:360,row_height:35,scale_height:35,link_line_width:2,link_arrow_size:6,lightbox_additional_height:75},_second_column_width:100,_third_column_width:80}}},function(t,e){t.exports=function(t){t.skins.contrast_white={config:{grid_width:360,row_height:35,scale_height:35,link_line_width:2,link_arrow_size:6,lightbox_additional_height:75},_second_column_width:100,_third_column_width:80}}},function(t,e){t.exports=function(t){function e(){var e;return t.$ui.getView("timeline")&&(e=t.$ui.getView("timeline")._tasks_dnd),e}t.config.touch_drag=500,t.config.touch=!0,t.config.touch_feedback=!0,t.config.touch_feedback_duration=1,t._prevent_touch_scroll=!1,t._touch_feedback=function(){t.config.touch_feedback&&navigator.vibrate&&navigator.vibrate(t.config.touch_feedback_duration)},t.attachEvent("onGanttReady",t.bind(function(){if("force"!=this.config.touch&&(this.config.touch=this.config.touch&&(-1!=navigator.userAgent.indexOf("Mobile")||-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("Android")||-1!=navigator.userAgent.indexOf("Touch"))),this.config.touch){var t=!0;try{document.createEvent("TouchEvent")}catch(e){t=!1}t?this._touch_events(["touchmove","touchstart","touchend"],function(t){return t.touches&&t.touches.length>1?null:t.touches[0]?{target:t.target,pageX:t.touches[0].pageX,pageY:t.touches[0].pageY,clientX:t.touches[0].clientX,clientY:t.touches[0].clientY}:t},function(){return!1}):window.navigator.pointerEnabled?this._touch_events(["pointermove","pointerdown","pointerup"],function(t){return"mouse"==t.pointerType?null:t},function(t){return!t||"mouse"==t.pointerType}):window.navigator.msPointerEnabled&&this._touch_events(["MSPointerMove","MSPointerDown","MSPointerUp"],function(t){return t.pointerType==t.MSPOINTER_TYPE_MOUSE?null:t},function(t){return!t||t.pointerType==t.MSPOINTER_TYPE_MOUSE})}},t));var i=[];t._touch_events=function(n,r,a){function s(t){return t&&t.preventDefault&&t.preventDefault(),(t||event).cancelBubble=!0,!1}function o(e){var i=t._getTaskLayers(),n=t.getTask(e);if(n&&t.isTaskVisible(e))for(var r=0;r<i.length;r++)if((n=i[r].rendered[e])&&n.getAttribute("task_id")&&n.getAttribute("task_id")==e){var a=n.cloneNode(!0);g=n,i[r].rendered[e]=a,n.style.display="none",a.className+=" gantt_drag_move ",n.parentNode.appendChild(a)}}for(var l,d=0,c=!1,h=!1,u=null,_=null,g=null,f=0;f<i.length;f++)t.eventRemove(i[f][0],i[f][1],i[f][2]);i=[],i.push([t.$container,n[0],function(i){var n=e();if(!a(i)&&c){_&&clearTimeout(_);var o=r(i);if(n&&(n.drag.id||n.drag.start_drag))return n.on_mouse_move(o),i.preventDefault&&i.preventDefault(),i.cancelBubble=!0,!1;if(!t._prevent_touch_scroll){if(o&&u){var g=u.pageX-o.pageX,f=u.pageY-o.pageY;if(!h&&(Math.abs(g)>5||Math.abs(f)>5)&&(t._touch_scroll_active=h=!0,d=0,l=t.getScrollState()),h){t.scrollTo(l.x+g,l.y+f);var p=t.getScrollState();if(l.x!=p.x&&f>2*g||l.y!=p.y&&g>2*f)return s(i)}}return s(i)}return!0}}]),i.push([this.$container,"contextmenu",function(t){if(c)return s(t)}]),i.push([this.$container,n[1],function(i){if(!a(i)){if(i.touches&&i.touches.length>1)return void(c=!1);u=r(i),t._locate_css(u,"gantt_hor_scroll")||t._locate_css(u,"gantt_ver_scroll")||(c=!0);var n=e();_=setTimeout(function(){var e=t.locate(u);n&&e&&!t._locate_css(u,"gantt_link_control")&&!t._locate_css(u,"gantt_grid_data")&&(n.on_mouse_down(u),n.drag&&n.drag.start_drag&&(o(e),n._start_dnd(u),t._touch_drag=!0,t.refreshTask(e),t._touch_feedback())),_=null},t.config.touch_drag)}}]),i.push([this.$container,n[2],function(i){if(!a(i)){_&&clearTimeout(_),t._touch_drag=!1,c=!1;var n=r(i),o=e();if(o&&o.on_mouse_up(n),g&&(t.refreshTask(t.locate(g)),g.parentNode&&(g.parentNode.removeChild(g),t._touch_feedback())),t._touch_scroll_active=c=h=!1,g=null,u&&d){var l=new Date;if(l-d<500){t.$services.getService("mouseEvents").onDoubleClick(u),s(i)}else d=l}else d=new Date}}]);for(var f=0;f<i.length;f++)t.event(i[f][0],i[f][1],i[f][2])}}},function(t,e){t.exports=function(t){t.locale={date:{month_full:["January","February","March","April","May","June","July","August","September","October","November","December"],month_short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day_full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},labels:{new_task:"New task",icon_save:"Save",icon_cancel:"Cancel",icon_details:"Details",icon_edit:"Edit",icon_delete:"Delete",confirm_closing:"",confirm_deleting:"Task will be deleted permanently, are you sure?",section_description:"Description",section_time:"Time period",section_type:"Type",column_wbs:"WBS",column_text:"Task name",column_start_date:"Start time",column_duration:"Duration",column_add:"",link:"Link",confirm_link_deleting:"will be deleted",link_start:" (start)",link_end:" (end)",type_task:"Task",type_project:"Project",type_milestone:"Milestone",minutes:"Minutes",hours:"Hours",days:"Days",weeks:"Week",months:"Months",years:"Years",message_ok:"OK",message_cancel:"Cancel"}}}},function(t,e,i){var n=i(1);t.exports=function(t){var e=i(17);t.assert=i(95)(t),t.init=function(e,i,r){i&&r&&(this.config.start_date=this._min_date=new Date(i),this.config.end_date=this._max_date=new Date(r)),this.date.init(),this.config.scroll_size||(this.config.scroll_size=n.getScrollSize()||1);var a;t.event(window,"resize",function(){clearTimeout(a),a=setTimeout(function(){t.render()},300)}),this.init=function(t){this.$container&&this.$container.parentNode&&(this.$container.parentNode.removeChild(this.$container),this.$container=null),this.$layout&&this.$layout.clear(),this._reinit(t)},this._reinit(e)},t._reinit=function(i){this.callEvent("onBeforeGanttReady",[]),this.resetLightbox(),this._update_flags(),this.$services.getService("templateLoader").initTemplates(this),this._clearTaskLayers(),this._clearLinkLayers(),this.$layout&&(this.$layout.destructor(),this.$ui.reset()),this.$root=n.toNode(i),this.$root&&(this.$root.innerHTML=""),i.gantt=this,e(this),this.config.layout.id="main",this.$layout=this.$ui.createView("layout",i,this.config.layout),this.$layout.attachEvent("onBeforeResize",function(){for(var e=t.$services.getService("datastores"),i=0;i<e.length;i++)t.getDatastore(e[i]).filter()}),this.$layout.attachEvent("onResize",function(){t.refreshData()}),this.callEvent("onGanttLayoutReady",[]),this.$layout.render(),t.$container=this.$layout.$container.firstChild,this.callEvent("onTemplatesReady",[]),this.$mouseEvents.reset(this.$root),this.callEvent("onGanttReady",[]),this.render()},t.$click={buttons:{edit:function(e){t.showLightbox(e)},delete:function(e){var i=t.locale.labels.confirm_deleting,n=t.locale.labels.confirm_deleting_title;t._dhtmlx_confirm(i,n,function(){if(!t.isTaskExists(e))return void t.hideLightbox();t.getTask(e).$new?(t.silent(function(){t.deleteTask(e,!0)}),t.refreshData()):t.deleteTask(e),t.hideLightbox()})}}},t.getScrollState=function(){var t=this._scroll_state();return{x:t.x_pos,y:t.y_pos,inner_width:t.x,inner_height:t.y,width:t.x_inner,height:t.y_inner}},t.scrollTo=function(t,e){var i=this._getVerticalScrollbar(),n=this._getHorizontalScrollbar(),r=i.getScrollState(),a=n.getScrollState();1*t==t&&n.scroll(t),1*e==e&&i.scroll(e);var s=i.getScrollState(),o=n.getScrollState();this.callEvent("onGanttScroll",[a.position,r.position,o.position,s.position])},t.showDate=function(t){var e=this.posFromDate(t),i=Math.max(e-this.config.task_scroll_offset,0);this.scrollTo(i)},t.showTask=function(t){var e,i=this.getTaskPosition(this.getTask(t)),n=Math.max(i.left-this.config.task_scroll_offset,0),r=this._scroll_state().y;e=r?i.top-(r-this.config.row_height)/2:i.top,this.scrollTo(n,e)},t.render=function(){this.callEvent("onBeforeGanttRender",[]);var i=this.getScrollState(),n=i?i.x:0;if(this._getHorizontalScrollbar()){n=this._getHorizontalScrollbar().$config.codeScrollLeft||n||0}var r=null;if(n&&(r=t.dateFromPos(n+this.config.task_scroll_offset)),e(this),this.$layout.$config.autosize=this.config.autosize,this.$layout.resize(),this.config.preserve_scroll&&i&&n){var a=t.getScrollState();+r==+t.dateFromPos(a.x)&&a.y==i.y||(r&&this.showDate(r),i.y&&t.scrollTo(void 0,i.y))}this.callEvent("onGanttRender",[])},t.setSizes=t.render,t._scroll_state=function(){var e={x:!1,y:!1,x_pos:0,y_pos:0,scroll_size:this.config.scroll_size+1,x_inner:0,y_inner:0},i=t._getVerticalScrollbar(),n=t._getHorizontalScrollbar();if(n){var r=n.getScrollState();r.visible&&(e.x=r.size,e.x_inner=r.scrollSize),e.x_pos=r.position||0}if(i){var a=i.getScrollState();a.visible&&(e.y=a.size,e.y_inner=a.scrollSize),e.y_pos=a.position||0}return e},t.locate=function(t){var e=n.getTargetNode(t);if((n.getClassName(e)||"").indexOf("gantt_task_cell")>=0)return null;var i=arguments[1]||this.config.task_attribute,r=n.locateAttribute(e,i);return r?r.getAttribute(i):null},t._locate_css=function(t,e,i){return n.locateClassName(t,e,i)},t._locateHTML=function(t,e){return n.locateAttribute(t,e||this.config.task_attribute)},t.getTaskRowNode=function(t){for(var e=this.$grid_data.childNodes,i=this.config.task_attribute,n=0;n<e.length;n++)if(e[n].getAttribute){var r=e[n].getAttribute(i);if(r==t)return e[n]}return null},t.selectTask=function(t){if(!this.config.select_task)return!1;if(t){if(this._selected_task==t)return this._selected_task;if(!this.callEvent("onBeforeTaskSelected",[t]))return!1;this.unselectTask(),this._selected_task=t,this.refreshTask(t),this.callEvent("onTaskSelected",[t])}return this._selected_task},t.unselectTask=function(t){var t=t||this._selected_task;t&&(this._selected_task=null,this.refreshTask(t),this.callEvent("onTaskUnselected",[t]))},t.getSelectedId=function(){return this.defined(this._selected_task)?this._selected_task:null},t.changeLightboxType=function(e){if(this.getLightboxType()==e)return!0;t._silent_redraw_lightbox(e)},t._get_link_type=function(e,i){var n=null;return e&&i?n=t.config.links.start_to_start:!e&&i?n=t.config.links.finish_to_start:e||i?e&&!i&&(n=t.config.links.start_to_finish):n=t.config.links.finish_to_finish,n},t.isLinkAllowed=function(t,e,i,n){var r=null;if(!(r="object"==typeof t?t:{source:t,target:e,type:this._get_link_type(i,n)}))return!1;if(!(r.source&&r.target&&r.type))return!1;if(r.source==r.target)return!1;var a=!0;return this.checkEvent("onLinkValidation")&&(a=this.callEvent("onLinkValidation",[r])),a},t._correct_dst_change=function(e,i,n,r){var a=t._get_line(r)*n;if(a>3600&&a<86400){var s=e.getTimezoneOffset()-i;s&&(e=t.date.add(e,s,"minute"))}return e}}},function(t,e){t.exports=function(t){return function(e,i){e||t.config.show_errors&&!1!==t.callEvent("onError",[i])&&t.message({type:"error",text:i,expire:-1})}}},function(t,e){t.exports=function(t){function e(e,i){var n=t.env.isIE?"":"%c",r=[n,'"',e,'"',n," has been deprecated in dhtmlxGantt v4.0 and will stop working in v6.0. Use ",n,'"',i,'"',n," instead. \nSee more details at http://docs.dhtmlx.com/gantt/migrating.html "].join(""),a=window.console.warn||window.console.log,s=[r];t.env.isIE||(s=s.concat(["font-weight:bold","font-weight:normal","font-weight:bold","font-weight:normal"])),a.apply(window.console,s)}window.dhtmlx||(window.dhtmlx={});for(var i=["message","alert","confirm","modalbox","uid","copy","mixin","defined","bind","assert"],n=0;n<i.length;n++)window.dhtmlx[i[n]]||(dhtmlx[i[n]]=function(i){return function(){return e("dhtmlx."+i,"gantt."+i),t[i].apply(t,arguments)}}(i[n]));window.dataProcessor||(window.dataProcessor=function(i){return e("new dataProcessor(url)","new gantt.dataProcessor(url)"),new t.dataProcessor(i)})}}]);
//# sourceMappingURL=dhtmlxgantt.js.map

/***/ })

});
//# sourceMappingURL=project-management.module.chunk.js.map