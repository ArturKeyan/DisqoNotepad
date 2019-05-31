(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notepad_notepad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notepad/notepad.component */ "./src/app/notepad/notepad.component.ts");




var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _notepad_notepad_component__WEBPACK_IMPORTED_MODULE_3__["NotepadComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <h1>\n        Notepad Application\n    </h1>\n\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'disqo-notepad';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notepad_notepad_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notepad/notepad.module */ "./src/app/notepad/notepad.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _notepad_notepad_module__WEBPACK_IMPORTED_MODULE_7__["NotepadModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/notepad/add-note/add-note.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notepad/add-note/add-note.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"noteForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group form-group-default required\">\n    <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n  </div>\n\n  <div class=\"form-group form-group-default required\">\n    <textarea formControlName=\"note\"></textarea>\n  </div>\n  \n  <button class=\"button green\" type=\"submit\" [disabled]=\"!noteForm.valid\">Add</button>\n</form>\n"

/***/ }),

/***/ "./src/app/notepad/add-note/add-note.component.less":
/*!**********************************************************!*\
  !*** ./src/app/notepad/add-note/add-note.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVwYWQvYWRkLW5vdGUvYWRkLW5vdGUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/notepad/add-note/add-note.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notepad/add-note/add-note.component.ts ***!
  \********************************************************/
/*! exports provided: AddNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoteComponent", function() { return AddNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AddNoteComponent = /** @class */ (function () {
    function AddNoteComponent(fb) {
        this.fb = fb;
        this.addNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddNoteComponent.prototype.ngOnInit = function () {
        this.noteForm = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    AddNoteComponent.prototype.onSubmit = function () {
        var note = {
            id: null,
            note: this.noteForm.get('note').value,
            title: this.noteForm.get('title').value
        };
        this.addNote.emit(note);
        this.noteForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddNoteComponent.prototype, "addNote", void 0);
    AddNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-note',
            template: __webpack_require__(/*! ./add-note.component.html */ "./src/app/notepad/add-note/add-note.component.html"),
            styles: [__webpack_require__(/*! ./add-note.component.less */ "./src/app/notepad/add-note/add-note.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddNoteComponent);
    return AddNoteComponent;
}());



/***/ }),

/***/ "./src/app/notepad/edit-note/edit-note.component.html":
/*!************************************************************!*\
  !*** ./src/app/notepad/edit-note/edit-note.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form novalidate [formGroup]=\"noteForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group form-group-default required\">\n    <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n  </div>\n\n  <div class=\"form-group form-group-default required\">\n    <textarea formControlName=\"note\"></textarea>\n  </div>\n  \n  <button class=\"button red\" (click)=\"onDelete()\" *ngIf=\"showDeleteButton\">Delete</button>\n</form>\n"

/***/ }),

/***/ "./src/app/notepad/edit-note/edit-note.component.less":
/*!************************************************************!*\
  !*** ./src/app/notepad/edit-note/edit-note.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVwYWQvZWRpdC1ub3RlL2VkaXQtbm90ZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/notepad/edit-note/edit-note.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notepad/edit-note/edit-note.component.ts ***!
  \**********************************************************/
/*! exports provided: EditNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteComponent", function() { return EditNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var EditNoteComponent = /** @class */ (function () {
    function EditNoteComponent(fb) {
        this.fb = fb;
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateNote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditNoteComponent.prototype.ngOnInit = function () {
        this.noteForm = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.note.title, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, updateOn: 'blur' }),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.note.note, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, updateOn: 'blur' })
        });
        this.onChanges();
    };
    EditNoteComponent.prototype.onDelete = function () {
        this.deleteNote.emit(this.note);
    };
    EditNoteComponent.prototype.onChanges = function () {
        var _this = this;
        this.noteForm.valueChanges.subscribe(function (val) {
            var note = {
                title: val.title,
                note: val.note,
            };
            _this.updateNote.emit({ note: note, title: _this.note.title });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditNoteComponent.prototype, "deleteNote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditNoteComponent.prototype, "updateNote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditNoteComponent.prototype, "note", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], EditNoteComponent.prototype, "showDeleteButton", void 0);
    EditNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-note',
            template: __webpack_require__(/*! ./edit-note.component.html */ "./src/app/notepad/edit-note/edit-note.component.html"),
            styles: [__webpack_require__(/*! ./edit-note.component.less */ "./src/app/notepad/edit-note/edit-note.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditNoteComponent);
    return EditNoteComponent;
}());



/***/ }),

/***/ "./src/app/notepad/notepad.component.html":
/*!************************************************!*\
  !*** ./src/app/notepad/notepad.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notepad-block\">\n  <form *ngIf=\"notepadForm\" [formGroup]=\"notepadForm\" (ngSubmit)=\"onSubmit()\">\n    <label class=\"input-lable\">Notepad Tite</label>\n    <div class=\"form-group form-group-default required\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n    </div>\n\n    <button class=\"button blue\" type=\"submit\" [disabled]=\"!notepadForm.valid || !isTitleUnique || notepad.notes.length > 0\">Save</button>\n  </form>\n\n  <app-add-note (addNote)=\"addNote($event)\"></app-add-note>\n\n  <ng-container *ngIf=\"notepad\">\n    <app-edit-note\n      (deleteNote)=\"deleteNote($event)\" \n      (updateNote)=\"updateNote($event)\" \n      *ngFor=\"let note of notepad.notes\"\n      [note]=\"note\" \n      [showDeleteButton]=\"notepad.notes.length > 1\"\n    > </app-edit-note>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/notepad/notepad.component.less":
/*!************************************************!*\
  !*** ./src/app/notepad/notepad.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVwYWQvbm90ZXBhZC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/notepad/notepad.component.ts":
/*!**********************************************!*\
  !*** ./src/app/notepad/notepad.component.ts ***!
  \**********************************************/
/*! exports provided: NotepadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadComponent", function() { return NotepadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_notepad_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http/notepad-http.service */ "./src/app/services/http/notepad-http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var NotepadComponent = /** @class */ (function () {
    function NotepadComponent(notepadHttpService, fb) {
        this.notepadHttpService = notepadHttpService;
        this.fb = fb;
        this.notepad = {
            id: null,
            notes: [],
            title: '',
        };
        this.isTitleUnique = true;
    }
    NotepadComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loadJson = this.notepadHttpService.getJson();
        this.subscription = loadJson.subscribe(function (res) {
            var notes = [];
            _this.notepad = (JSON.parse(res.files['notepads.json'].content)).notepad;
            _this.notepadForm = _this.fb.group({
                title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_this.notepad.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            });
        });
    };
    NotepadComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NotepadComponent.prototype.onSubmit = function () {
        this.notepad.title = this.notepadForm.get('title').value;
        this.notepadHttpService.save(this.notepad).subscribe(function (res) {
        });
    };
    NotepadComponent.prototype.addNote = function (note) {
        var sameNameNotes = this.notepad.notes.filter(function (n) { return note.title === n.title; });
        if (sameNameNotes.length > 0) {
            console.error('note title must be unique');
        }
        else if (sameNameNotes.length === 0) {
            this.notepad.notes.push(note);
        }
    };
    NotepadComponent.prototype.deleteNote = function (note) {
        this.notepad.notes = this.notepad.notes.filter(function (n) { return n.title !== note.title; });
    };
    NotepadComponent.prototype.updateNote = function (_a) {
        var _this = this;
        var note = _a.note, title = _a.title;
        var sameNameNotes = this.notepad.notes.filter(function (n) { return note.title === n.title; });
        if (sameNameNotes.length > 0) {
            this.isTitleUnique = false;
            console.error('note title must be unique');
        }
        else if (sameNameNotes.length === 0) {
            this.isTitleUnique = true;
            this.notepad.notes.forEach(function (n, i) {
                if (title === n.title) {
                    _this.notepad.notes[i].title = note.title;
                    _this.notepad.notes[i].note = note.note;
                }
            });
        }
    };
    NotepadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notepad',
            template: __webpack_require__(/*! ./notepad.component.html */ "./src/app/notepad/notepad.component.html"),
            providers: [_services_http_notepad_http_service__WEBPACK_IMPORTED_MODULE_2__["NotepadHttpService"]],
            styles: [__webpack_require__(/*! ./notepad.component.less */ "./src/app/notepad/notepad.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_http_notepad_http_service__WEBPACK_IMPORTED_MODULE_2__["NotepadHttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], NotepadComponent);
    return NotepadComponent;
}());



/***/ }),

/***/ "./src/app/notepad/notepad.module.ts":
/*!*******************************************!*\
  !*** ./src/app/notepad/notepad.module.ts ***!
  \*******************************************/
/*! exports provided: NotepadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadModule", function() { return NotepadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notepad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notepad.component */ "./src/app/notepad/notepad.component.ts");
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-note/add-note.component */ "./src/app/notepad/add-note/add-note.component.ts");
/* harmony import */ var _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-note/edit-note.component */ "./src/app/notepad/edit-note/edit-note.component.ts");







var NotepadModule = /** @class */ (function () {
    function NotepadModule() {
    }
    NotepadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_notepad_component__WEBPACK_IMPORTED_MODULE_4__["NotepadComponent"], _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_5__["AddNoteComponent"], _edit_note_edit_note_component__WEBPACK_IMPORTED_MODULE_6__["EditNoteComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], NotepadModule);
    return NotepadModule;
}());



/***/ }),

/***/ "./src/app/services/http/base-http.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/http/base-http.service.ts ***!
  \****************************************************/
/*! exports provided: BaseHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseHttpService", function() { return BaseHttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


var BaseHttpService = /** @class */ (function () {
    function BaseHttpService() {
    }
    BaseHttpService.prototype.getHeaders = function (contentType) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Accept', contentType || 'application/json')
            .set('Content-Type', contentType || 'application/json')
            .set('Authorization', "token " + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].token);
        return headers;
    };
    return BaseHttpService;
}());



/***/ }),

/***/ "./src/app/services/http/notepad-http.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/http/notepad-http.service.ts ***!
  \*******************************************************/
/*! exports provided: NotepadHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadHttpService", function() { return NotepadHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-http.service */ "./src/app/services/http/base-http.service.ts");





var NotepadHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NotepadHttpService, _super);
    function NotepadHttpService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    NotepadHttpService.prototype.getJson = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].notepadUrl + "?v=" + Math.floor(Date.now() / 1000));
    };
    NotepadHttpService.prototype.save = function (notepad) {
        var gist = {
            description: 'disqo gist',
            files: {
                'notepads.json': {
                    filename: 'notepads.json',
                    content: JSON.stringify({ notepad: notepad })
                }
            },
        };
        return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].notepadUrl, gist, { headers: this.getHeaders() });
    };
    NotepadHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NotepadHttpService);
    return NotepadHttpService;
}(_base_http_service__WEBPACK_IMPORTED_MODULE_4__["BaseHttpService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    notepadUrl: 'https://api.github.com/gists/65e2020398b65dab55f5f73c344db223',
    token: '4f446ecdcc1dd29450c513f40be273f10beefe52'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DisqoNotepad\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map