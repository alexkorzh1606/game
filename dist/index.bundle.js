/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./classes/dwarf.ts":
/*!**************************!*\
  !*** ./classes/dwarf.ts ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./classes/enemy.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Dwarf = /** @class */ (function (_super) {
    __extends(Dwarf, _super);
    function Dwarf(name, hp, damage) {
        var _this = _super.call(this, name, hp, damage) || this;
        _this.range = 10;
        _this.color = "grey";
        return _this;
    }
    Dwarf.prototype.ThrowAxe = function (target) {
        this.range = 30;
        this.damage = 50;
        target.hp -= this.damage;
        console.log(this.range);
        console.log("Слышится свист топора");
    };
    return Dwarf;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dwarf);


/***/ }),

/***/ "./classes/elf.ts":
/*!************************!*\
  !*** ./classes/elf.ts ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./classes/enemy.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Elf = /** @class */ (function (_super) {
    __extends(Elf, _super);
    function Elf(name, hp, damage) {
        var _this = _super.call(this, name, hp, damage) || this;
        _this.range = 30;
        _this.color = "blue";
        return _this;
    }
    Elf.prototype.MagicAttack = function (target) {
        this.damage = 50;
        this.range = 20;
        target.hp -= this.damage;
        console.log(this.range);
        console.log("Mabuhi ang kangitngit!");
    };
    return Elf;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Elf);


/***/ }),

/***/ "./classes/enemy.ts":
/*!**************************!*\
  !*** ./classes/enemy.ts ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

var Enemy = /** @class */ (function () {
    function Enemy(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    Enemy.prototype.Attack = function (target) {
        target.hp -= this.damage;
        console.log(this.range);
    };
    Enemy.prototype.getDamage = function (damage) {
        this.hp -= damage;
    };
    Enemy.prototype.Scream = function () {
        return console.log(this.name);
    };
    return Enemy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);


/***/ }),

/***/ "./classes/knight.ts":
/*!***************************!*\
  !*** ./classes/knight.ts ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./classes/enemy.ts");

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight(name, hp, damage) {
        var _this = _super.call(this, name, hp, damage) || this;
        _this.range = 20;
        _this.color = "red";
        return _this;
    }
    Knight.prototype.AttackAll = function (targets) {
        this.damage = 30;
        for (var _i = 0, targets_1 = targets; _i < targets_1.length; _i++) {
            var target = targets_1[_i];
            target.hp -= this.damage;
            console.log(this.range);
            console.log("К рыцарю лучше не подходить");
        }
    };
    return Knight;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);


/***/ }),

/***/ "./game.ts":
/*!*****************!*\
  !*** ./game.ts ***!
  \*****************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/knight */ "./classes/knight.ts");
/* harmony import */ var _classes_elf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/elf */ "./classes/elf.ts");
/* harmony import */ var _classes_dwarf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/dwarf */ "./classes/dwarf.ts");




var galeot = new _classes_knight__WEBPACK_IMPORTED_MODULE_0__.default("Galeot", 200, 10);
var legolas = new _classes_elf__WEBPACK_IMPORTED_MODULE_1__.default("Legolas", 100, 15);
var gimli = new _classes_dwarf__WEBPACK_IMPORTED_MODULE_2__.default("Gimli", 150, 20);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./game.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZV93aXRoX3RocmVlX2NsYXNzZXMvLi9jbGFzc2VzL2R3YXJmLnRzIiwid2VicGFjazovL2dhbWVfd2l0aF90aHJlZV9jbGFzc2VzLy4vY2xhc3Nlcy9lbGYudHMiLCJ3ZWJwYWNrOi8vZ2FtZV93aXRoX3RocmVlX2NsYXNzZXMvLi9jbGFzc2VzL2VuZW15LnRzIiwid2VicGFjazovL2dhbWVfd2l0aF90aHJlZV9jbGFzc2VzLy4vY2xhc3Nlcy9rbmlnaHQudHMiLCJ3ZWJwYWNrOi8vZ2FtZV93aXRoX3RocmVlX2NsYXNzZXMvLi9nYW1lLnRzIiwid2VicGFjazovL2dhbWVfd2l0aF90aHJlZV9jbGFzc2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWVfd2l0aF90aHJlZV9jbGFzc2VzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1lX3dpdGhfdGhyZWVfY2xhc3Nlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhbWVfd2l0aF90aHJlZV9jbGFzc2VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FtZV93aXRoX3RocmVlX2NsYXNzZXMvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xudmFyIER3YXJmID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEd2FyZiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEd2FyZihuYW1lLCBocCwgZGFtYWdlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUsIGhwLCBkYW1hZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnJhbmdlID0gMTA7XG4gICAgICAgIF90aGlzLmNvbG9yID0gXCJncmV5XCI7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRHdhcmYucHJvdG90eXBlLlRocm93QXhlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLnJhbmdlID0gMzA7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gNTA7XG4gICAgICAgIHRhcmdldC5ocCAtPSB0aGlzLmRhbWFnZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5nZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi0KHQu9GL0YjQuNGC0YHRjyDRgdCy0LjRgdGCINGC0L7Qv9C+0YDQsFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBEd2FyZjtcbn0oRW5lbXkpKTtcbmV4cG9ydCBkZWZhdWx0IER3YXJmO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG52YXIgRWxmID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFbGYsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRWxmKG5hbWUsIGhwLCBkYW1hZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSwgaHAsIGRhbWFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmFuZ2UgPSAzMDtcbiAgICAgICAgX3RoaXMuY29sb3IgPSBcImJsdWVcIjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBFbGYucHJvdG90eXBlLk1hZ2ljQXR0YWNrID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDUwO1xuICAgICAgICB0aGlzLnJhbmdlID0gMjA7XG4gICAgICAgIHRhcmdldC5ocCAtPSB0aGlzLmRhbWFnZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5nZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWFidWhpIGFuZyBrYW5naXRuZ2l0IVwiKTtcbiAgICB9O1xuICAgIHJldHVybiBFbGY7XG59KEVuZW15KSk7XG5leHBvcnQgZGVmYXVsdCBFbGY7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBFbmVteSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFbmVteShuYW1lLCBocCwgZGFtYWdlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaHAgPSBocDtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgfVxuICAgIEVuZW15LnByb3RvdHlwZS5BdHRhY2sgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5ocCAtPSB0aGlzLmRhbWFnZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5nZSk7XG4gICAgfTtcbiAgICBFbmVteS5wcm90b3R5cGUuZ2V0RGFtYWdlID0gZnVuY3Rpb24gKGRhbWFnZSkge1xuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZTtcbiAgICB9O1xuICAgIEVuZW15LnByb3RvdHlwZS5TY3JlYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIEVuZW15O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEVuZW15O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG52YXIgS25pZ2h0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhLbmlnaHQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gS25pZ2h0KG5hbWUsIGhwLCBkYW1hZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSwgaHAsIGRhbWFnZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmFuZ2UgPSAyMDtcbiAgICAgICAgX3RoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEtuaWdodC5wcm90b3R5cGUuQXR0YWNrQWxsID0gZnVuY3Rpb24gKHRhcmdldHMpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAzMDtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB0YXJnZXRzXzEgPSB0YXJnZXRzOyBfaSA8IHRhcmdldHNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0YXJnZXRzXzFbX2ldO1xuICAgICAgICAgICAgdGFyZ2V0LmhwIC09IHRoaXMuZGFtYWdlO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5nZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcItCaINGA0YvRhtCw0YDRjiDQu9GD0YfRiNC1INC90LUg0L/QvtC00YXQvtC00LjRgtGMXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gS25pZ2h0O1xufShFbmVteSkpO1xuZXhwb3J0IGRlZmF1bHQgS25pZ2h0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgS25pZ2h0IGZyb20gXCIuL2NsYXNzZXMva25pZ2h0XCI7XG5pbXBvcnQgRWxmIGZyb20gXCIuL2NsYXNzZXMvZWxmXCI7XG5pbXBvcnQgRHdhcmYgZnJvbSBcIi4vY2xhc3Nlcy9kd2FyZlwiO1xudmFyIGdhbGVvdCA9IG5ldyBLbmlnaHQoXCJHYWxlb3RcIiwgMjAwLCAxMCk7XG52YXIgbGVnb2xhcyA9IG5ldyBFbGYoXCJMZWdvbGFzXCIsIDEwMCwgMTUpO1xudmFyIGdpbWxpID0gbmV3IER3YXJmKFwiR2ltbGlcIiwgMTUwLCAyMCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2dhbWUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==