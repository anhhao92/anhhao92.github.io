module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utilities = function () {
	function Utilities() {
		_classCallCheck(this, Utilities);
	}

	_createClass(Utilities, [{
		key: 'isRoot',
		value: function isRoot(employee) {
			return !employee.superiorId;
		}
	}, {
		key: 'findRoot',
		value: function findRoot(arr) {
			for (var i in arr) {
				if (this.isRoot(arr[i])) {
					return arr[i];
				}
			}
		}
		/**
   * get max id
   * @returns {*}
   */

	}, {
		key: 'getMaxId',
		value: function getMaxId(arr) {
			var employeeWithMaxId = arr.reduce(function (employeeWithMaxId, currentEmp) {
				return currentEmp.id > employeeWithMaxId.id ? currentEmp : employeeWithMaxId;
			});
			return employeeWithMaxId.id;
		}
		/**
   * input fullId and output the index of employee
   * @param id
   * @returns {*}
   */

	}, {
		key: 'findEmployeeIndexByFullId',
		value: function findEmployeeIndexByFullId(id, arr) {
			if (!!id) {
				for (var index in arr) {
					// Matched Id
					if (arr[index].fullId === id) {
						return index;
					}
				}
			}
			return -1;
		}

		/**
   * Group the list by superior id
   * @param arr
   * @returns {*}
   */

	}, {
		key: 'groupBySuperiorId',
		value: function groupBySuperiorId(arr) {
			return arr.reduce(function (group, currentItem) {
				group[currentItem['superiorId']] = group[currentItem['superiorId']] || [];
				group[currentItem['superiorId']].push(currentItem);
				return group;
			}, {});
		}

		/**
   * event delegation
   * @param elementSelector
   * @param eventName
   * @param selector
   * @param callback
   * @returns {*}
   */

	}, {
		key: 'bindEvent',
		value: function bindEvent(elementSelector, eventName, selector, callback) {
			var element = document.querySelector(elementSelector);
			element.addEventListener(eventName, function (event) {
				var possibleTargets = element.querySelectorAll(selector);
				var target = event.target;

				for (var i = 0, l = possibleTargets.length; i < l; i++) {
					var el = target;
					var p = possibleTargets[i];
					while (el && el !== element) {
						if (el === p) {
							return callback.call(p, event);
						}
						el = el.parentNode;
					}
				}
			});
		}
		/**
   * Debounce function
   * @param func
   * @param wait set limit time which a func can fire
   * @param immedite trigger func on the edge, instead of trailing
   */

	}, {
		key: 'debounce',
		value: function debounce(func, wait, immediate) {
			var timeout = void 0;
			return function () {
				var context = this,
				    args = arguments;
				var later = function later() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		}
	}]);

	return Utilities;
}();

exports.default = Utilities;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utilities = __webpack_require__(0);

var _Utilities2 = _interopRequireDefault(_Utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utilities = new _Utilities2.default();
var superiorInfoList = [];
var externalCallback = null;

var Breadcrumbs = function () {
	function Breadcrumbs() {
		_classCallCheck(this, Breadcrumbs);
	}

	_createClass(Breadcrumbs, [{
		key: 'initBreadcrumbs',

		/**
   * Init breadcrumbs
   * @param nodeId
   */
		value: function initBreadcrumbs(elementId) {
			var rootElement = document.getElementById('breadcrumbs');
			rootElement.innerHTML = this.createBreadcrumbs();
			this.createActionsForBreadcrumbs();
		}
	}, {
		key: 'createBreadcrumbs',
		value: function createBreadcrumbs() {
			return '<ul class="breadcrumbs__container" name="breadcrumbs_container">\n\t\t\t\t\t<li><a class="fas fa-sitemap"></a></li>\n\t\t\t\t</ul>';
		}

		/**
   * Get id and name of all superior nodes
   * @param node
   * @returns {Array}
   */

	}, {
		key: 'getSuperiorInfo',
		value: function getSuperiorInfo(node) {
			var superiorInfo = [];
			while (!!node && !!node.parentElement) {
				// If parent node has id
				if (node.parentElement.nodeName === 'LI' && !!node.parentElement.id) {
					// get name and id
					var name = node.parentElement.querySelector('[name=\'fullName\']').innerHTML;
					superiorInfo = [{ id: node.parentElement.id, name: name }].concat(_toConsumableArray(superiorInfo));
				}
				node = node.parentElement;
			}
			superiorInfoList = [].concat(_toConsumableArray(superiorInfoList), _toConsumableArray(superiorInfo));
			return superiorInfoList;
		}

		/**
   * Create Breadcrumbs by SuperiorInfo
   * @param superiorInfo
   * @param displayName name of the last item in breadcrumbs
   */

	}, {
		key: 'createBreadcrumbsBySuperiorInfo',
		value: function createBreadcrumbsBySuperiorInfo(superiorInfo, displayName) {
			var breadcrumbs = document.querySelector('#breadcrumbs [name=\'breadcrumbs_container\']');
			breadcrumbs.innerHTML = '<li><a class="fas fa-sitemap"></a></li>';
			for (var index in superiorInfo) {
				breadcrumbs.insertAdjacentHTML('beforeend', '<li><a data-id="' + superiorInfo[index].id + '" class="link">' + superiorInfo[index].name + '</a></li>');
			}
			breadcrumbs.insertAdjacentHTML('beforeend', '<li><a class="selected">' + displayName + '</a></li>');
		}

		/**
   * Update Breadcrumbs by Id
   * @param id
   */

	}, {
		key: 'updateBreadcrumbs',
		value: function updateBreadcrumbs(id) {
			var node = document.querySelector('#' + id);
			var name = node && node.querySelector('[name=\'fullName\']').innerHTML;
			var superiorInfo = this.getSuperiorInfo(node);
			this.createBreadcrumbsBySuperiorInfo(superiorInfo, name);
		}

		/**
   * Re-render breadcrumbs when user selects a superior
   * @param id
   */

	}, {
		key: 'renderBreadcrumbs',
		value: function renderBreadcrumbs(id) {
			var selectedCard = superiorInfoList.find(function (e) {
				return e.id === id;
			});
			var selectedIndex = superiorInfoList.findIndex(function (e) {
				return e.id === id;
			});
			superiorInfoList.splice(selectedIndex, superiorInfoList.length);
			this.createBreadcrumbsBySuperiorInfo(superiorInfoList, selectedCard.name);
		}

		/**
   *	Add actions to breadcrumbs
   */

	}, {
		key: 'createActionsForBreadcrumbs',
		value: function createActionsForBreadcrumbs() {
			var _this = this;

			utilities.bindEvent('#breadcrumbs', 'click', 'li', function (e) {
				var id = e.target.getAttribute('data-id');
				if (id) {
					_this.renderBreadcrumbs(id);
					externalCallback && externalCallback(id);
				}
			});
		}

		/**
   * set callback after rendering breadcrums
   * @param callback
   */

	}, {
		key: 'callbackWhenBreadcrumbsChanged',
		value: function callbackWhenBreadcrumbsChanged(callback) {
			externalCallback = callback;
		}
	}]);

	return Breadcrumbs;
}();

exports.default = Breadcrumbs;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dialog = function () {
	function Dialog() {
		_classCallCheck(this, Dialog);

		this.overlay = document.getElementById('overlay');
	}

	_createClass(Dialog, [{
		key: 'closeDialog',
		value: function closeDialog(id, onDelete, onCancel) {
			var deleteButton = document.querySelector('#dialog-' + id + ' [name=\'dialog-delete\']');
			var cancelButton = document.querySelector('#dialog-' + id + ' [name=\'dialog-cancel\']');
			deleteButton.removeEventListener('click', onDelete);
			cancelButton.removeEventListener('click', onCancel);
			this.overlay.style.display = 'none';
		}
	}, {
		key: 'createDialog',
		value: function createDialog(id) {
			this.overlay.innerHTML = '';
			var htmlDialog = '<div id="dialog-' + id + '" class="dialog">\n\t\t\t\t\t\t\t\t<div class="dialog__content">\n\t\t\t\t\t\t\t\t\t<strong>Do you want to delete the selected card?</strong>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="dialog__footer">\n\t\t\t\t\t\t\t\t\t<button class="btn--primary" name="dialog-delete">Delete</button>\n\t\t\t\t\t\t\t\t\t<button class="btn--default" name="dialog-cancel">Cancel</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>';
			this.overlay.innerHTML += htmlDialog;
		}
	}, {
		key: 'openDialog',
		value: function openDialog(id, successCallback, cancelCallback) {
			var _this = this;

			var dialog = this.createDialog(id);
			var deleteButton = document.querySelector('#dialog-' + id + ' [name=\'dialog-delete\']');
			var cancelButton = document.querySelector('#dialog-' + id + ' [name=\'dialog-cancel\']');
			this.overlay.style.display = 'block';
			this.overlay.style.width = document.querySelector('body').scrollWidth + 'px';
			this.overlay.style.height = document.querySelector('body').scrollHeight + 'px';
			//cancel button handler
			var onCancel = function onCancel(e) {
				cancelCallback && cancelCallback();
				_this.closeDialog(id, onDelete, onCancel);
			};
			//delete button handler
			var onDelete = function onDelete(e) {
				successCallback && successCallback();
				_this.closeDialog(id, onDelete, onCancel);
			};
			deleteButton.addEventListener('click', onDelete);
			cancelButton.addEventListener('click', onCancel);
		}
	}]);

	return Dialog;
}();

exports.default = Dialog;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
	function Api() {
		_classCallCheck(this, Api);
	}

	_createClass(Api, [{
		key: "apiCall",
		value: function apiCall() {
			var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'GET';
			var url = arguments[1];
			var isAsync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			return new Promise(function (resolve, reject) {
				var xhttp = new XMLHttpRequest();
				xhttp.open(method, url, isAsync);
				xhttp.onload = function () {
					if (this.readyState == 4 && this.status == 200) {
						resolve(this.responseText);
					} else {
						reject(this.responseText);
					}
				};
				xhttp.send();
			});
		}
	}, {
		key: "get",
		value: function get(url, isAsync) {
			return this.apiCall("GET", url, isAsync);
		}
	}]);

	return Api;
}();

exports.default = Api;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isExistInStorage = isExistInStorage;
exports.saveData = saveData;
exports.getData = getData;
function isExistInStorage(key) {
	if (typeof Storage !== 'undefined') {
		return localStorage[key];
	}
}
function saveData(content) {
	if (typeof Storage !== 'undefined') {
		if (!!content && (typeof content === 'undefined' ? 'undefined' : _typeof(content)) == 'object') {
			localStorage.setItem('contacts', JSON.stringify(content));
		} else {
			localStorage.setItem('contacts', content);
		}
	}
}
function getData(key) {
	if (typeof Storage !== 'undefined') {
		return localStorage.getItem(key);
	}
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Api = __webpack_require__(3);

var _Api2 = _interopRequireDefault(_Api);

var _Dialog = __webpack_require__(2);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _LocalStorage = __webpack_require__(4);

var _Utilities = __webpack_require__(0);

var _Utilities2 = _interopRequireDefault(_Utilities);

var _Breadcrumbs = __webpack_require__(1);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = new _Api2.default();
var dialog = new _Dialog2.default();
var utilities = new _Utilities2.default();
var breadcrumbs = new _Breadcrumbs2.default();
var imagePath = '../images/';
var defaultAvatar = 'avatar.png';
var idPrefix = 'id-';
var currentEmpList = [];
var currentEditingEmpId = void 0;
var dragSrcEl = null;

var Chart = function () {
	function Chart() {
		var employeeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var rootEmployee = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		_classCallCheck(this, Chart);

		this.rootEmployee = rootEmployee;
		this.employeeList = employeeList;
	}

	/**
  * Parse raw data
  * @param empList
  * @returns {*}
  */


	_createClass(Chart, [{
		key: 'parseRawEmpList',
		value: function parseRawEmpList(empList) {
			for (var index in empList) {
				empList[index].fullId = idPrefix + empList[index].id;
				empList[index].fullSuperiorId = !!empList[index].superiorId ? idPrefix + empList[index].superiorId : undefined;
				empList[index].fullName = empList[index].firstName + ' ' + empList[index].lastName;
				empList[index].avatarFullPath = '' + imagePath + empList[index].avatar;
			}
			return empList;
		}
	}, {
		key: 'initEmployeeTree',
		value: function initEmployeeTree(elementId) {
			var _this = this;

			// Build tree form existing data or get from server
			if (this.employeeList) {
				currentEmpList = this.parseRawEmpList(this.employeeList);
				this.buildEmployeeTree(currentEmpList, elementId);
			} else {
				this.getEmployee().then(function (successRes) {
					var employeeList = successRes || [];
					if (employeeList.length) {
						_this.buildEmployeeTree(employeeList, elementId);
					}
				});
			}
		}
	}, {
		key: 'buildEmployeeTree',
		value: function buildEmployeeTree(employeeList, elementId) {
			var rootEmployee = utilities.findRoot(employeeList);
			var rootElement = document.getElementById(elementId);
			rootElement.innerHTML = '<ul>' + this.createNode(rootEmployee) + '</ul>';
			this.insertAllNodes(rootEmployee);
			!this.employeeList && this.createActionForAllNodes(employeeList);
		}

		/**
   * Get Employee list from Json
   */

	}, {
		key: 'getEmployee',
		value: function getEmployee() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				if (!(0, _LocalStorage.isExistInStorage)('contacts')) {
					api.get('data/contacts.json').then(function (rawData) {
						currentEmpList = _this2.parseRawEmpList(JSON.parse(rawData));
						(0, _LocalStorage.saveData)(currentEmpList);
					}).finally(function () {
						resolve(currentEmpList);
					});
				} else {
					currentEmpList = JSON.parse((0, _LocalStorage.getData)('contacts'));
					resolve(currentEmpList);
				}
			});
		}

		/**
   * Create a new node
   * @param employee
   * @returns {*}
   */

	}, {
		key: 'createNode',
		value: function createNode(employee) {
			var roles = ['Management', 'Technology Services', 'IT', 'Vonage', 'Delivery', 'MarketLive', 'LexisNexis', 'LexisNexis Lizard'];
			var buildDropDown = function buildDropDown(department) {
				return '<select type="text" name="department" value="' + employee.department + '">\n\t\t\t\t\t\t' + roles.map(function (element) {
					return '<option ' + (element === department ? 'selected' : '') + '>' + element + '</option>';
				}) + '\n\t\t\t\t\t</select>';
			};
			return '\t<li id="' + employee.fullId + '">\t  \t\t\t\n\t\t\t\t\t\t<a name="profile" draggable="true">\n\t\t\t\t\t\t\t<div class="profile__container">\n\t\t\t\t\t\t\t\t<div name="info" class="profile__container__basic">\n\t\t\t\t\t\t\t\t\t<div name="avatar" class="profile__container__basic__avatar"><img src=' + employee.avatarFullPath + '></div>\n\t\t\t\t\t\t\t\t\t<div  class="profile__container__basic__info">\n\t\t\t\t\t\t\t\t\t\t<div class="name" name="fullName">' + employee.fullName + ' </div>\n\t\t\t\t\t\t\t\t\t\t<div class="role" name="department">' + employee.department + ' </div>\n\t\t\t\t\t\t\t\t\t\t<div class="nickname" name="employeeId">' + employee.employeeId + ' </div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<i><small>@kms-technology.com</small></i>\n\t\t\t\t\t\t\t\t\t\t</div>                                                                        \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div  name="info_edit" class="profile__container__basic--edit">\n\t\t\t\t\t\t\t\t\t<input type="file" name="avatar_upload" class="profile__container__basic__avatar-upload--edit">\n\t\t\t\t\t\t\t\t\t<div name="avatar" class="profile__container__basic__avatar--edit"><img src=' + employee.avatarFullPath + '></div>\n\t\t\t\t\t\t\t\t\t<div class="profile__container__basic__info--edit">\n\t\t\t\t\t\t\t\t\t\t<div class="name">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" name="fullName" value="' + employee.fullName + '">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="role">\n\t\t\t\t\t\t\t\t\t\t\t' + buildDropDown(employee.department) + '\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="nickname">\n\t\t\t\t\t\t\t\t\t\t\t<input type="text" name="employeeId" value="' + employee.employeeId + '">\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t<i><small>@kms-technology.com</small></i>\n\t\t\t\t\t\t\t\t\t\t</div>                                                                        \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div name="action" class="profile__container__action">\n\t\t\t\t\t\t\t\t\t<i class="far fa-edit" name="edit_button"></i>\n\t\t\t\t\t\t\t\t\t' + (!utilities.isRoot(employee) ? '<i class="fas fa-arrow-right" name="create_peer_button"></i>' : '') + '\n\t\t\t\t\t\t\t\t\t<i class="fas fa-arrow-down" name="create_child_button"></i>\n\t\t\t\t\t\t\t\t\t' + (!utilities.isRoot(employee) ? '<i class="fas fa-trash-alt" name="delete_button"></i>' : '') + '\t\n\t\t\t\t\t\t\t\t\t \t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="toggle-tree">                            \n                                <i name="expand_button" class="fas fa-plus-circle"></i>\n                                <i name="collapse_button" class="fas fa-minus-circle"></i>\n                            </div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>';
		}

		/**
   * Show/hide info and info_edit
   * @param id
   * @param nameToShow
   * @param nameToHide
   */

	}, {
		key: 'showHideInfo',
		value: function showHideInfo(id, nameToShow, nameToHide) {
			document.querySelector('#' + id + ' [name=' + nameToShow + ']').style.display = 'flex';
			document.querySelector('#' + id + ' [name=' + nameToHide + ']').style.display = 'none';
		}

		/**
   * Get infomation into the card
   * @param id
   * @returns {{fullName: string, department: string, employeeId: string, avatarFullPath: string}}
   */

	}, {
		key: 'getEditedInfo',
		value: function getEditedInfo(id) {
			var fullName = document.querySelector('#' + id + ' [name=\'info_edit\'] [name=\'fullName\']').value;
			var department = document.querySelector('#' + id + ' [name=\'info_edit\'] [name=\'department\']').value;
			var employeeId = document.querySelector('#' + id + ' [name=\'info_edit\'] [name=\'employeeId\']').value;
			var avatarFullPath = document.querySelector('#' + id + ' [name=\'info_edit\'] [name=\'avatar\'] img').getAttribute('src');
			return { fullName: fullName, department: department, employeeId: employeeId, avatarFullPath: avatarFullPath };
		}

		/**
   * Update html after editing the card
   * @param id
   * @param editedInfo
   */

	}, {
		key: 'displayEditedInfo',
		value: function displayEditedInfo(id, editedInfo) {
			document.querySelector('#' + id + ' [name=\'info\'] [name=\'fullName\']').innerHTML = editedInfo.fullName;
			document.querySelector('#' + id + ' [name=\'info\'] [name=\'department\']').innerHTML = editedInfo.department;
			document.querySelector('#' + id + ' [name=\'info\'] [name=\'employeeId\']').innerHTML = editedInfo.employeeId;
			document.querySelector('#' + id + ' [name=\'info\'] [name=\'avatar\'] img').src = editedInfo.avatarFullPath;
		}

		/**
   * Save data to localstorage after editing the card
   * @param id
   * @param editedInfo
   */

	}, {
		key: 'saveEditedInfo',
		value: function saveEditedInfo(id, editedInfo) {
			var index = utilities.findEmployeeIndexByFullId(id, currentEmpList);
			if (index >= 0) {
				currentEmpList[index].fullName = editedInfo.fullName;
				currentEmpList[index].department = editedInfo.department;
				currentEmpList[index].employeeId = editedInfo.employeeId;
				currentEmpList[index].avatarFullPath = editedInfo.avatarFullPath;
				(0, _LocalStorage.saveData)(currentEmpList);
			}
		}

		/**
   * Get all child of card
   * @param element
   * @returns {Array}
   */

	}, {
		key: 'getAllChildIds',
		value: function getAllChildIds(element) {
			var childNodes = element && element.querySelectorAll('li');
			var idList = [];
			if (childNodes.length) {
				for (var index = 0, len = childNodes.length; index < len; index++) {
					idList.push(childNodes[index].id);
				}
			}
			return idList;
		}

		// get child of first level only

	}, {
		key: 'getFirstLevelChilds',
		value: function getFirstLevelChilds(element) {
			var childNodes = element && element.querySelector('ul');
			var idList = [];
			if (childNodes && childNodes.children.length) {
				for (var index = 0, len = childNodes.children.length; index < len; index++) {
					idList.push(childNodes.children[index].id);
				}
			}
			return idList;
		}

		/**
   * Create an Employee Infomation from a selected node
   * @param id
   * @param selectedNodeInfo
   */

	}, {
		key: 'createEmpInfo',
		value: function createEmpInfo(id, selectedNodeInfo) {
			var empInfo = {},
			    maxId = void 0;
			if (!!selectedNodeInfo) {
				maxId = utilities.getMaxId(currentEmpList) + 1;
				empInfo = {
					fullName: '',
					department: selectedNodeInfo.department,
					employeeId: '',
					avatarFullPath: imagePath + defaultAvatar,
					id: maxId,
					fullId: idPrefix + maxId
				};

				return empInfo;
			}
		}

		/**
   * Create a peer card
   * @param selectedId
   */

	}, {
		key: 'createPeerNode',
		value: function createPeerNode(selectedId) {
			var selectedNodeInfo = currentEmpList[utilities.findEmployeeIndexByFullId(selectedId, currentEmpList)];
			var peerInfo = this.createEmpInfo(selectedId, selectedNodeInfo);
			peerInfo.superiorId = selectedNodeInfo.superiorId;
			peerInfo.fullSuperiorId = selectedNodeInfo.fullSuperiorId;
			currentEmpList.push(peerInfo);
			var peerNode = this.createNode(peerInfo);
			document.querySelector('#' + selectedId).insertAdjacentHTML('afterend', peerNode);
		}

		/**
   * Create a child card
   * @param selectedId
   */

	}, {
		key: 'createChildNode',
		value: function createChildNode(selectedId) {
			var selectedNodeInfo = currentEmpList[utilities.findEmployeeIndexByFullId(selectedId, currentEmpList)];
			var childInfo = this.createEmpInfo(selectedId, selectedNodeInfo);
			childInfo.superiorId = selectedNodeInfo.id;
			childInfo.fullSuperiorId = selectedNodeInfo.fullId;
			currentEmpList.push(childInfo);
			var childNode = this.createNode(childInfo);
			this.insertNode(childNode, selectedId);
		}

		/**
   * Delete node by id
   * @param id
   */

	}, {
		key: 'deleteNode',
		value: function deleteNode(id) {
			var selectedNode = document.querySelector('li#' + id);
			if (!!selectedNode) {
				var parentNode = selectedNode.parentElement;
				if (parentNode.childElementCount === 1) {
					parentNode.parentElement.removeChild(parentNode);
				} else {
					parentNode.removeChild(selectedNode);
				}
				this.deleteNodeTree(id);
				(0, _LocalStorage.saveData)(currentEmpList);
			}
		}

		/**
   * Delete node tree by fullId
   * @param id
  */

	}, {
		key: 'deleteNodeTree',
		value: function deleteNodeTree(id) {
			var grouped = utilities.groupBySuperiorId(currentEmpList);
			var idx = utilities.findEmployeeIndexByFullId(id, currentEmpList);
			var employee = currentEmpList[idx];
			if (grouped[employee.id]) {
				for (var index in grouped[employee.id]) {
					var empInfo = grouped[employee.id][index];
					this.deleteNodeTree(empInfo.fullId);
				}
			}
			currentEmpList.splice(idx, 1);
		}

		/**
   * set some actions when clicking out side selected card
   */

	}, {
		key: 'handleClickOutSideSelectedNode',
		value: function handleClickOutSideSelectedNode() {
			var editedInfo = this.getEditedInfo(currentEditingEmpId);
			document.querySelector('#' + currentEditingEmpId + ' [name=\'action\']').style.display = 'none';
			this.showHideInfo(currentEditingEmpId, 'info', 'info_edit');
			this.saveEditedInfo(currentEditingEmpId, editedInfo);
			this.displayEditedInfo(currentEditingEmpId, editedInfo);
		}

		/**
   * set actions when clicking inside the card
   * @param id
   */

	}, {
		key: 'handleClickInsideNode',
		value: function handleClickInsideNode(id) {
			if (currentEditingEmpId !== id) {
				document.querySelector('#' + id + ' [name=\'action\']').style.display = 'flex';
				currentEditingEmpId && this.handleClickOutSideSelectedNode();
				currentEditingEmpId = id;
			}
		}

		/**
   * click to browse image
   * @param id
   */

	}, {
		key: 'handleClickAvatar',
		value: function handleClickAvatar(id) {
			if (currentEditingEmpId === id) {
				var avatarUpload = document.querySelector('#' + id + ' [name=\'info_edit\'] [name=\'avatar_upload\']');
				avatarUpload && avatarUpload.click();
			}
		}

		/**
   * On click edit
   * @param id
   */

	}, {
		key: 'handleClickEdit',
		value: function handleClickEdit(id) {
			if (currentEditingEmpId === id) {
				this.showHideInfo(id, 'info_edit', 'info');
			}
		}

		/**
   * Create peer card
   * @param id
   */

	}, {
		key: 'handleClickCreatePeer',
		value: function handleClickCreatePeer(id) {
			var employee = currentEmpList[utilities.findEmployeeIndexByFullId(id, currentEmpList)];
			if (!utilities.isRoot(employee)) {
				this.createPeerNode(id);
			}
		}

		/**
   * Create child card
   * @param id
   */

	}, {
		key: 'handleClickCreateChild',
		value: function handleClickCreateChild(id) {
			this.createChildNode(id);
		}

		/**
   * Delete card by id
   * @param id
   */

	}, {
		key: 'handleClickDelete',
		value: function handleClickDelete(id) {
			var _this3 = this;

			var employee = currentEmpList[utilities.findEmployeeIndexByFullId(id, currentEmpList)];
			if (!utilities.isRoot(employee)) {
				dialog.openDialog(id, function (e) {
					_this3.deleteNode(id);
					currentEditingEmpId = undefined;
				});
			}
		}

		/**
   * Toggle the tree
   * @param id
   */

	}, {
		key: 'handleClickToggle',
		value: function handleClickToggle(id) {
			var isCollapsed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

			var expandButton = document.querySelector('#' + id + ' >a .toggle-tree [name=\'expand_button\']');
			var collapseButton = document.querySelector('#' + id + ' >a .toggle-tree [name=\'collapse_button\']');
			var childNodes = document.querySelector('#' + id + ' >ul');
			if (!childNodes) {
				return;
			}
			if (isCollapsed) {
				expandButton.style.display = 'block';
				collapseButton.style.display = 'none';
				childNodes.style.display = 'none';
			} else {
				expandButton.style.display = 'none';
				collapseButton.style.display = 'block';
				childNodes.style.display = 'flex';
			}
		}
	}, {
		key: 'handleDoubleClick',
		value: function handleDoubleClick() {
			var _this4 = this;

			utilities.bindEvent('#tree', 'dblclick', '[name="profile"]', function (e) {
				console.log('Double click =', e.target);
				var id = e.target.closest('li').id;
				breadcrumbs.updateBreadcrumbs(id);
				_this4.renderTreeByRootId(id);
			});
		}
	}, {
		key: 'handleActionsOnNode',
		value: function handleActionsOnNode() {
			var _this5 = this;

			utilities.bindEvent('#tree', 'click', '[name="profile"]', function (e) {
				var element = e.target;
				var currentElement = element.closest('li');
				var srcElement = element.closest('div[name="info_edit"]');
				var id = currentElement.id;
				var elementActions = {
					'edit_button': function edit_button(id) {
						return _this5.handleClickEdit(id);
					},
					'create_peer_button': function create_peer_button(id) {
						return _this5.handleClickCreatePeer(id);
					},
					'create_child_button': function create_child_button(id) {
						return _this5.handleClickCreateChild(id);
					},
					'delete_button': function delete_button(id) {
						return _this5.handleClickDelete(id);
					},
					'collapse_button': function collapse_button(id) {
						return _this5.handleClickToggle(id, true);
					},
					'expand_button': function expand_button(id) {
						return _this5.handleClickToggle(id, false);
					}
				};

				if (element.tagName == 'IMG' && srcElement) {
					_this5.handleClickAvatar(id);
				} else if (elementActions[element.getAttribute('name')]) {
					elementActions[element.getAttribute('name')](id);
				} else {
					_this5.handleClickInsideNode(id);
				}
				// prevent window click
				e.stopPropagation();
			});
		}
		/**
  * handle uploading avatar
  */

	}, {
		key: 'handleUploadingAvatar',
		value: function handleUploadingAvatar() {
			utilities.bindEvent('#tree', 'change', '[name="info_edit"] [name="avatar_upload"]', function (e) {
				if (this.files && this.files[0]) {
					var id = this.closest('li').id;
					var img = document.querySelector('#' + id + ' [name=\'info_edit\'] [name=\'avatar\'] img');
					var reader = new FileReader();
					reader.readAsDataURL(this.files[0]);
					reader.onload = function (e) {
						img.setAttribute('src', reader.result);
					};
				}
			});
		}

		/**
  * handle drag and drop an item
  */

	}, {
		key: 'handleDragAndDrop',
		value: function handleDragAndDrop() {
			var _this6 = this;

			utilities.bindEvent('#tree', 'dragstart', 'a[name="profile"]', function (e) {
				dragSrcEl = e.target.closest('li');
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('text/html', this.innerHTML);
				this.style.opacity = 0.3;
			});
			utilities.bindEvent('#tree', 'dragend', 'a[name="profile"]', function (e) {
				this.style.opacity = '';
			});
			utilities.bindEvent('#tree', 'dragleave', 'a[name="profile"]', function (e) {
				e.preventDefault();
				this.style.border = '';
			});
			utilities.bindEvent('#tree', 'dragover', 'a[name="profile"]', function (e) {
				e.preventDefault();
				e.dataTransfer.dropEffect = 'move';
				this.style.border = '2px dashed black';
				return false;
			});
			utilities.bindEvent('#tree', 'drop', 'a[name="profile"]', function (e) {
				var dropEl = e.target.closest('li');
				var dropProfile = dropEl.querySelector('a[name=\'profile\']');
				var dragToChild = _this6.getAllChildIds(dragSrcEl).includes(dropEl.id);
				var dragToParent = _this6.getFirstLevelChilds(dropEl).includes(dragSrcEl.id);
				dropProfile.style.border = '';
				e.preventDefault();
				// A user cannot select a subordinate card of selected card to make it as a superior card
				if (dragSrcEl != dropEl && !dragToChild && !dragToParent) {
					var firstLevelChildsOfSrcEl = _this6.getFirstLevelChilds(dragSrcEl);
					var prevParentofSrc = dragSrcEl.parentElement;
					if (!dropEl.getElementsByTagName('ul').length) {
						dropEl.insertAdjacentHTML('beforeend', '<ul></ul>');
					}
					// if source node has child
					if (firstLevelChildsOfSrcEl.length) {
						// first level childs of source node up to 1 level
						for (var index = 0; index < firstLevelChildsOfSrcEl.length; index++) {
							dragSrcEl.parentElement.appendChild(document.getElementById(firstLevelChildsOfSrcEl[index]));
						}
						//then remove empty ul of src node
						var emptyChildNode = dragSrcEl.querySelector('ul');
						emptyChildNode.parentElement.removeChild(emptyChildNode);
					}
					dropEl.querySelector('ul').appendChild(dragSrcEl);

					// if source node is the single child
					if (prevParentofSrc.childElementCount < 1) {
						prevParentofSrc.parentElement.removeChild(prevParentofSrc);
					}
					var idxSrc = utilities.findEmployeeIndexByFullId(dragSrcEl.id, currentEmpList);
					var idxDest = utilities.findEmployeeIndexByFullId(dropEl.id, currentEmpList);
					currentEmpList[idxSrc].superiorId = currentEmpList[idxDest].id;
					currentEmpList[idxSrc].fullSuperiorId = currentEmpList[idxDest].fullId;
					(0, _LocalStorage.saveData)(currentEmpList);
				}
			});
		}

		/**
   * render tree by rootId
   */

	}, {
		key: 'renderTreeByRootId',
		value: function renderTreeByRootId(id) {
			var rootEmployee = currentEmpList[utilities.findEmployeeIndexByFullId(id, currentEmpList)];
			document.getElementById('tree').innerHTML = '<ul>' + this.createNode(rootEmployee) + '</ul>';
			this.insertAllNodes(rootEmployee);
		}

		/**
   * Add actions to all nodes
   */

	}, {
		key: 'createActionForAllNodes',
		value: function createActionForAllNodes() {
			var _this7 = this;

			// Re-render tree when breadcrumbs changed
			breadcrumbs.callbackWhenBreadcrumbsChanged(this.renderTreeByRootId.bind(this));
			// Delegate click event
			this.handleActionsOnNode();
			// Delegate double-click and render tree
			this.handleDoubleClick();
			// Delegate change event
			this.handleUploadingAvatar();
			// Delegate drag & drop event
			this.handleDragAndDrop();
			// handle when clicking on Window
			window.onclick = function (e) {
				if (currentEditingEmpId) {
					_this7.handleClickOutSideSelectedNode();
					currentEditingEmpId = undefined;
				}
			};
		}

		/**
   * Insert node under node
   * @param node
   * @param superiorId
   */

	}, {
		key: 'insertNode',
		value: function insertNode(node, superiorId) {
			var parentNode = document.getElementById(superiorId);
			var childNodes = parentNode && parentNode.getElementsByTagName('ul');
			// Insert child node to parent node
			if (childNodes[0]) {
				childNodes[0].insertAdjacentHTML('beforeend', node);
			} else {
				parentNode.insertAdjacentHTML('beforeend', '<ul>' + node + '</ul>');
			}
		}

		/**
   * Insert all node to the tree
   * @param rootEmployeInfo
   * @param grouped
   */

	}, {
		key: 'insertAllNodes',
		value: function insertAllNodes(rootEmployeInfo) {
			var grouped = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : utilities.groupBySuperiorId(currentEmpList);

			for (var index in grouped[rootEmployeInfo.id]) {
				var empInfo = grouped[rootEmployeInfo.id][index];
				var node = this.createNode(empInfo);
				// Insert the node if it has superiorId
				if (empInfo.superiorId) {
					this.insertNode(node, empInfo.fullSuperiorId);
					this.insertAllNodes(empInfo, grouped);
				}
			}
		}
	}]);

	return Chart;
}();

exports.default = Chart;

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map