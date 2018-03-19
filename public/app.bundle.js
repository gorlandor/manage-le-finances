/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app.bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.entry.tsx","vendors.bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.entry.tsx":
/*!***************************!*\
  !*** ./src/app.entry.tsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Login */ "./src/components/Login.tsx");
/* harmony import */ var _components_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Logout */ "./src/components/Logout.tsx");
/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Register */ "./src/components/Register.tsx");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/List */ "./src/components/List.tsx");
/* harmony import */ var _components_ExpenseForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ExpenseForm */ "./src/components/ExpenseForm.tsx");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/PrivateRoute */ "./src/components/PrivateRoute.tsx");










var AppShell = function () { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null,
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "full-width" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { exact: true, path: "/", component: _components_App__WEBPACK_IMPORTED_MODULE_3__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/login", component: _components_Login__WEBPACK_IMPORTED_MODULE_4__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], { path: "/register", component: _components_Register__WEBPACK_IMPORTED_MODULE_6__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_9__["default"], { path: "/expense-list", component: _components_List__WEBPACK_IMPORTED_MODULE_7__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_9__["default"], { path: "/expense-form", component: _components_ExpenseForm__WEBPACK_IMPORTED_MODULE_8__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_9__["default"], { path: "/logout", component: _components_Logout__WEBPACK_IMPORTED_MODULE_5__["default"] })))); };
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](AppShell, null), document.getElementById('app'));


/***/ }),

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List */ "./src/components/List.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = JSON.parse(window.localStorage.getItem("authState")) || {
            'email': '',
            'signedIn': false
        };
        return _this;
    }
    /**
     * render
     */
    App.prototype.render = function () {
        return this.state.signedIn ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_List__WEBPACK_IMPORTED_MODULE_2__["default"], null)) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/login" }));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./src/components/Excel.tsx":
/*!**********************************!*\
  !*** ./src/components/Excel.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Excel = /** @class */ (function (_super) {
    __extends(Excel, _super);
    function Excel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: props.data,
            sortby: null,
            descending: false
        };
        return _this;
    }
    /**
     * componentWillReceiveProps
     */
    Excel.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ data: nextProps.data });
    };
    /**
     * render
     */
    Excel.prototype.render = function () {
        var _a = this.props, headers = _a.headers, data = _a.data;
        var headerCells = headers.map(function (header, i, arr) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("th", { key: "th--" + i }, header)); });
        var rows = data.map(function (row, rowId, arr) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", { key: row.key }, row.values.map(function (cell, cellId) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", { key: cellId }, cell)); }))); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", { className: 'table' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", { className: 'table__header' },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null, headerCells)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", { className: 'table__body' }, rows)));
    };
    return Excel;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Excel);


/***/ }),

/***/ "./src/components/ExpenseForm.tsx":
/*!****************************************!*\
  !*** ./src/components/ExpenseForm.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.config */ "./src/firebase.config.ts");
/* harmony import */ var _models_Expense_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Expense.interface */ "./src/models/Expense.interface.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ExpenseForm = /** @class */ (function (_super) {
    __extends(ExpenseForm, _super);
    function ExpenseForm(props) {
        var _this = _super.call(this, props) || this;
        _this.toList = false;
        _this._onSubmit = function (event) {
            event.preventDefault();
            var _a = _this.state, amount = _a.amount, due_date = _a.due_date, expense_title = _a.expense_title, recurrence = _a.recurrence, shared_with = _a.shared_with;
            _this.setState({ loading: true });
            var transaction = _firebase_config__WEBPACK_IMPORTED_MODULE_2__["expensesRef"]('').push();
            transaction.set({ amount: amount, due_date: due_date, expense_title: expense_title, recurrence: recurrence, shared_with: shared_with })
                .then(function () { return _this.setState(_this.baseState); })
                .catch(function (err) { return console.warn({ err: err }); });
            if (transaction !== undefined) {
                var uid = JSON.parse(window.localStorage.getItem("authState") || "" + {
                    'email': '',
                    'password': '',
                    'signedIn': false
                }).uid;
                _firebase_config__WEBPACK_IMPORTED_MODULE_2__["userExpensesRef"](uid, transaction.key || "")
                    .set({ amount: amount, due_date: due_date, expense_title: expense_title, recurrence: recurrence, shared_with: shared_with });
            }
            _this.toList = true;
        };
        _this.state = {
            'amount': 0,
            'due_date': '',
            'expense_title': '',
            'recurrence': _models_Expense_interface__WEBPACK_IMPORTED_MODULE_3__["ExpenseRecurrence"].Once,
            'shared_with': 'myself',
            'loading': false
        };
        _this.baseState = _this.state;
        return _this;
    }
    ExpenseForm.prototype.render = function () {
        var _this = this;
        if (this.toList === true) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/expense-list' });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "flex-around" },
                "Expenses",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/expense-list" }, "View list"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/logout" }, "Logout")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "login-form flex-container", autoComplete: "off", onSubmit: this._onSubmit },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                    "Title",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "text", id: "expense_title", name: "expense_title", placeholder: "Expense Title", onChange: function (event) { return _this.setState({ 'expense_title': event.target.value }); }, required: true, value: this.state.expense_title })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                    "Amount",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "number", step: "0.01", id: "amount", name: "amount", placeholder: "Amount", onChange: function (event) {
                            var amount = Number(event.target.value);
                            _this.setState({ amount: amount });
                        }, required: true, value: this.state.amount })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                    "Due Date",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "date", id: "due_date", name: "due_date", placeholder: "Due Date", onChange: function (event) { return _this.setState({ 'due_date': event.target.value }); }, required: true, value: this.state.due_date })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                    "Shared with?",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "text", id: "shared_with", name: "shared_with", placeholder: "Shared with...", onChange: function (event) { return _this.setState({ 'shared_with': event.target.value }); }, required: true, value: this.state.shared_with })),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                    "Recurrence",
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", { className: "form-control", name: "recurrence", id: "recurrence", onChange: function (event) { return _this.setState({ 'recurrence': event.target.value }); }, value: this.state.recurrence },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "once", selected: true }, "once"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "daily" }, "daily"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "weekly" }, "weekly"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "monthly" }, "monthly"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "quarterly" }, "quarterly"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "semiannually" }, "semiannually"),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", { value: "annually" }, "annually"))),
                this.state.loading
                    ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn login-btn", disabled: true }, "Submit")
                    : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn login-btn" }, "Submit"))));
    };
    return ExpenseForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ExpenseForm);


/***/ }),

/***/ "./src/components/List.tsx":
/*!*********************************!*\
  !*** ./src/components/List.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.config */ "./src/firebase.config.ts");
/* harmony import */ var _Excel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Excel */ "./src/components/Excel.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        /**
         * _removeRow
         */
        _this._removeRow = function (key, i) {
            if (window.confirm("Delete item from list? This cannot be undone.")) {
                var rows_1 = _this.state.rows;
                _firebase_config__WEBPACK_IMPORTED_MODULE_2__["expensesRef"](key).remove()
                    .catch(function (error) { return console.warn("Error removing entry", error); });
                var uid_1 = JSON.parse(window.localStorage.getItem("authState")).uid;
                _firebase_config__WEBPACK_IMPORTED_MODULE_2__["userExpensesRef"](uid_1, key).remove()
                    .then(function () {
                    _this.setState({
                        'rows': rows_1.slice(0, i).concat(rows_1.slice(i + 1))
                    });
                    console.log("Deleted entry " + uid_1 + "/" + key);
                })
                    .catch(function (error) { return console.warn("Error removing entry", error); });
            }
        };
        _this.state = {
            headers: ['Amount', 'DueDate', 'Name', 'Recurrence', 'SharedWith', 'Delete'],
            rows: []
        };
        return _this;
    }
    /**
     * componentDidMount
     */
    List.prototype.componentDidMount = function () {
        var _this = this;
        var uid = JSON.parse(window.localStorage.getItem("authState")).uid;
        _firebase_config__WEBPACK_IMPORTED_MODULE_2__["userExpensesRef"](uid, '').on('value', function (snapshot) {
            var keys = Object.keys(snapshot.val());
            var expenses = keys.map(function (key) { return snapshot.val()[key]; });
            var dataRows;
            dataRows = keys.map(function (uid, rowId, arr) {
                return {
                    key: uid,
                    values: Object.keys(expenses[rowId])
                        .map(function (key) { return expenses[rowId][key]; }).concat([
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn-delete", onClick: function () { return _this._removeRow(uid, rowId); } }, "x")
                    ]),
                    editable: true,
                    removable: true
                };
            });
            _this.setState({ rows: dataRows });
        });
    };
    /**
     * render
     */
    List.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: 'list-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", { className: "flex-around" },
                "Expenses",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/expense-form" }, "Add new"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { to: "/logout" }, "Logout")),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Excel__WEBPACK_IMPORTED_MODULE_3__["default"], { headers: this.state.headers, data: this.state.rows })));
    };
    return List;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (List);


/***/ }),

/***/ "./src/components/Login.tsx":
/*!**********************************!*\
  !*** ./src/components/Login.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.config */ "./src/firebase.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this._onEmailChange = function (event) {
            _this.setState({ 'email': event.target.value });
        };
        _this._onPasswordChange = function (event) {
            _this.setState({ 'password': event.target.value });
        };
        _this._login = function (event) {
            event.preventDefault();
            _firebase_config__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(_this.state.email, _this.state.password)
                .then(function () {
                var uid = _firebase_config__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
                localStorage.setItem('authState', JSON.stringify({
                    'email': _this.state.email,
                    'signedIn': true,
                    uid: uid
                }));
                _this.setState({
                    'signedIn': true
                });
            })
                .catch(function (error) {
                // Handle Errors here.
                alert(error.message);
                console.warn({ error: error });
            });
        };
        _this.state = JSON.parse(window.localStorage.getItem("authState")) || {
            'email': '',
            'password': '',
            'signedIn': false
        };
        return _this;
    }
    Login.prototype.render = function () {
        return this.state.signedIn ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: {
                'pathname': '/',
                'state': { 'email': this.state.email, 'signedIn': this.state.signedIn }
            } })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "login-form flex-vertically", autoComplete: "off", onSubmit: this._login },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                "Email",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "email", id: "email", name: "email", placeholder: "Email", autoComplete: "email", onChange: this._onEmailChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                "Password",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "password", id: "password", name: "password", placeholder: "Password", autoComplete: "current-password", onChange: this._onPasswordChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn login-btn" }, "Login"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "actionLink", to: "/register" }, "Not an User? Register to continue.")));
    };
    return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ "./src/components/Logout.tsx":
/*!***********************************!*\
  !*** ./src/components/Logout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");


var Logout = function () {
    window.localStorage.clear();
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/login" }));
};
/* harmony default export */ __webpack_exports__["default"] = (Logout);


/***/ }),

/***/ "./src/components/PrivateRoute.tsx":
/*!*****************************************!*\
  !*** ./src/components/PrivateRoute.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.config */ "./src/firebase.config.ts");



var PrivateRoute = function (_a) {
    var Component = _a.component, Path = _a.path;
    return _firebase_config__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser === null
        ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/login" })
        : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: Path, component: Component });
};
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);


/***/ }),

/***/ "./src/components/Register.tsx":
/*!*************************************!*\
  !*** ./src/components/Register.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.config */ "./src/firebase.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register(props) {
        var _this = _super.call(this, props) || this;
        _this._onEmailChange = function (event) {
            _this.setState({ 'email': event.target.value });
        };
        _this._onPasswordChange = function (event) {
            _this.setState({ 'password': event.target.value });
        };
        _this._register = function (event) {
            event.preventDefault();
            _firebase_config__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(_this.state.email, _this.state.password)
                .then(function () {
                // Handle Success here.        
                var uid = _firebase_config__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
                localStorage.setItem('authState', JSON.stringify({
                    'email': _this.state.email,
                    'signedIn': true,
                    uid: uid
                }));
                _this.setState({
                    'registered': true
                });
            })
                .catch(function (error) {
                // Handle Errors here.
                alert(error.message);
                console.warn({ error: error });
            });
        };
        _this.state = {
            'email': '',
            'password': '',
            'registered': false
        };
        return _this;
    }
    Register.prototype.render = function () {
        return this.state.registered ? (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: "/login" })) : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", { className: "login-form flex-vertically", autoComplete: "off", onSubmit: this._register },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                "Email",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "email", id: "email", name: "email", placeholder: "Email", autoComplete: "email", onChange: this._onEmailChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", { className: "form-label flex-vertically" },
                "Password",
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { className: "form-control", type: "password", id: "password", name: "password", placeholder: "Password", autoComplete: "current-password", onChange: this._onPasswordChange }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null)),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", { className: "btn login-btn" }, "Register"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], { className: "actionLink", to: "/login" }, "Already an User? Login to continue.")));
    };
    return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Register);


/***/ }),

/***/ "./src/firebase.config.ts":
/*!********************************!*\
  !*** ./src/firebase.config.ts ***!
  \********************************/
/*! exports provided: expensesRef, userRef, userExpensesRef, auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expensesRef", function() { return expensesRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRef", function() { return userRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userExpensesRef", function() { return userExpensesRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/index.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);



var config = {
    apiKey: "AIzaSyD8zpRHrTURhNjPrBgj_VoqKEI_v5-E3cE",
    authDomain: "manage-le-finances.firebaseapp.com",
    databaseURL: "https://manage-le-finances.firebaseio.com",
    projectId: "manage-le-finances",
    storageBucket: "manage-le-finances.appspot.com",
    messagingSenderId: "199442396161"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config);
var version = '/v0';
var api = firebase_app__WEBPACK_IMPORTED_MODULE_0__["database"]().ref(version);
// Database Refs
var expensesRef = function (expenseId) {
    if (expenseId === void 0) { expenseId = ""; }
    return api.child("expenses/" + expenseId);
};
var userRef = function (userId) {
    if (userId === void 0) { userId = ""; }
    return api.child("users/" + userId);
};
var userExpensesRef = function (userId, expenseId) {
    if (expenseId === void 0) { expenseId = ""; }
    return api.child("user-expenses/" + userId + "/" + expenseId);
};
// firebase module
var auth = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"];


/***/ }),

/***/ "./src/models/Expense.interface.ts":
/*!*****************************************!*\
  !*** ./src/models/Expense.interface.ts ***!
  \*****************************************/
/*! exports provided: ExpenseRecurrence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseRecurrence", function() { return ExpenseRecurrence; });
var ExpenseRecurrence;
(function (ExpenseRecurrence) {
    ExpenseRecurrence["Once"] = "once";
    ExpenseRecurrence["Daily"] = "daily";
    ExpenseRecurrence["Weekly"] = "weekly";
    ExpenseRecurrence["Biweekly"] = "biweekly";
    ExpenseRecurrence["Monthly"] = "monthly";
    ExpenseRecurrence["Quarterly"] = "quarterly";
    ExpenseRecurrence["Semiannually"] = "semiannually";
    ExpenseRecurrence["Annually"] = "annually";
})(ExpenseRecurrence || (ExpenseRecurrence = {}));


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map