(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/ng-sidebar/lib/close.directive.js":
/*!********************************************************!*\
  !*** ./node_modules/ng-sidebar/lib/close.directive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar.component */ "./node_modules/ng-sidebar/lib/sidebar.component.js");
var CloseSidebar = /** @class */ (function () {
    function CloseSidebar(_sidebar) {
        this._sidebar = _sidebar;
    }
    /** @internal */
    CloseSidebar.prototype._onClick = function () {
        if (this._sidebar) {
            this._sidebar.close();
        }
    };
    CloseSidebar = __decorate([
        core_1.Directive({
            selector: '[closeSidebar]',
            host: {
                '(click)': '_onClick()'
            }
        }),
        __metadata("design:paramtypes", [sidebar_component_1.Sidebar])
    ], CloseSidebar);
    return CloseSidebar;
}());
exports.CloseSidebar = CloseSidebar;


/***/ }),

/***/ "./node_modules/ng-sidebar/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ng-sidebar/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sidebar_container_component_1 = __webpack_require__(/*! ./sidebar-container.component */ "./node_modules/ng-sidebar/lib/sidebar-container.component.js");
exports.SidebarContainer = sidebar_container_component_1.SidebarContainer;
var sidebar_component_1 = __webpack_require__(/*! ./sidebar.component */ "./node_modules/ng-sidebar/lib/sidebar.component.js");
exports.Sidebar = sidebar_component_1.Sidebar;
var close_directive_1 = __webpack_require__(/*! ./close.directive */ "./node_modules/ng-sidebar/lib/close.directive.js");
exports.CloseSidebar = close_directive_1.CloseSidebar;
var sidebar_module_1 = __webpack_require__(/*! ./sidebar.module */ "./node_modules/ng-sidebar/lib/sidebar.module.js");
exports.SidebarModule = sidebar_module_1.SidebarModule;


/***/ }),

/***/ "./node_modules/ng-sidebar/lib/sidebar-container.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-sidebar/lib/sidebar-container.component.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
// Based on https://github.com/angular/material2/tree/master/src/lib/sidenav
var SidebarContainer = /** @class */ (function () {
    function SidebarContainer(_ref, platformId) {
        this._ref = _ref;
        this.animate = true;
        this.allowSidebarBackdropControl = true;
        this.showBackdrop = false;
        this.showBackdropChange = new core_1.EventEmitter();
        this.onBackdropClicked = new core_1.EventEmitter();
        this._sidebars = [];
        this._isBrowser = common_1.isPlatformBrowser(platformId);
    }
    SidebarContainer.prototype.ngAfterContentInit = function () {
        if (!this._isBrowser) {
            return;
        }
        this._onToggle();
    };
    SidebarContainer.prototype.ngOnChanges = function (changes) {
        if (!this._isBrowser) {
            return;
        }
        if (changes['showBackdrop']) {
            this.showBackdropChange.emit(changes['showBackdrop'].currentValue);
        }
    };
    SidebarContainer.prototype.ngOnDestroy = function () {
        if (!this._isBrowser) {
            return;
        }
        this._unsubscribe();
    };
    /**
     * @internal
     *
     * Adds a sidebar to the container's list of sidebars.
     *
     * @param sidebar {Sidebar} A sidebar within the container to register.
     */
    SidebarContainer.prototype._addSidebar = function (sidebar) {
        this._sidebars.push(sidebar);
        this._subscribe(sidebar);
    };
    /**
     * @internal
     *
     * Removes a sidebar from the container's list of sidebars.
     *
     * @param sidebar {Sidebar} The sidebar to remove.
     */
    SidebarContainer.prototype._removeSidebar = function (sidebar) {
        var index = this._sidebars.indexOf(sidebar);
        if (index !== -1) {
            this._sidebars.splice(index, 1);
        }
    };
    /**
     * @internal
     *
     * Computes `margin` value to push page contents to accommodate open sidebars as needed.
     *
     * @return {CSSStyleDeclaration} margin styles for the page content.
     */
    SidebarContainer.prototype._getContentStyle = function () {
        var left = 0, right = 0, top = 0, bottom = 0;
        var transformStyle = '';
        var heightStyle = '';
        var widthStyle = '';
        for (var _i = 0, _a = this._sidebars; _i < _a.length; _i++) {
            var sidebar = _a[_i];
            // Slide mode: we need to translate the entire container
            if (sidebar._isModeSlide) {
                if (sidebar.opened) {
                    var transformDir = sidebar._isLeftOrRight ? 'X' : 'Y';
                    var transformAmt = "" + (sidebar._isLeftOrTop ? '' : '-') + (sidebar._isLeftOrRight ? sidebar._width : sidebar._height);
                    transformStyle = "translate" + transformDir + "(" + transformAmt + "px)";
                }
            }
            // Create a space for the sidebar
            if ((sidebar._isModePush && sidebar.opened) || sidebar.dock) {
                var paddingAmt = 0;
                if (sidebar._isModeSlide && sidebar.opened) {
                    if (sidebar._isLeftOrRight) {
                        widthStyle = '100%';
                    }
                    else {
                        heightStyle = '100%';
                    }
                }
                else {
                    if (sidebar._isDocked || (sidebar._isModeOver && sidebar.dock)) {
                        paddingAmt = sidebar._dockedSize;
                    }
                    else {
                        paddingAmt = sidebar._isLeftOrRight ? sidebar._width : sidebar._height;
                    }
                }
                switch (sidebar.position) {
                    case 'left':
                        left = Math.max(left, paddingAmt);
                        break;
                    case 'right':
                        right = Math.max(right, paddingAmt);
                        break;
                    case 'top':
                        top = Math.max(top, paddingAmt);
                        break;
                    case 'bottom':
                        bottom = Math.max(bottom, paddingAmt);
                        break;
                }
            }
        }
        return {
            padding: top + "px " + right + "px " + bottom + "px " + left + "px",
            webkitTransform: transformStyle,
            transform: transformStyle,
            height: heightStyle,
            width: widthStyle
        };
    };
    /**
     * @internal
     *
     * Closes sidebars when the backdrop is clicked, if they have the
     * `closeOnClickBackdrop` option set.
     */
    SidebarContainer.prototype._onBackdropClicked = function () {
        var backdropClicked = false;
        for (var _i = 0, _a = this._sidebars; _i < _a.length; _i++) {
            var sidebar = _a[_i];
            if (sidebar.opened && sidebar.showBackdrop && sidebar.closeOnClickBackdrop) {
                sidebar.close();
                backdropClicked = true;
            }
        }
        if (backdropClicked) {
            this.onBackdropClicked.emit();
        }
    };
    /**
     * Subscribes from a sidebar events to react properly.
     */
    SidebarContainer.prototype._subscribe = function (sidebar) {
        var _this = this;
        sidebar.onOpenStart.subscribe(function () { return _this._onToggle(); });
        sidebar.onOpened.subscribe(function () { return _this._markForCheck(); });
        sidebar.onCloseStart.subscribe(function () { return _this._onToggle(); });
        sidebar.onClosed.subscribe(function () { return _this._markForCheck(); });
        sidebar.onModeChange.subscribe(function () { return _this._markForCheck(); });
        sidebar.onPositionChange.subscribe(function () { return _this._markForCheck(); });
        sidebar._onRerender.subscribe(function () { return _this._markForCheck(); });
    };
    /**
     * Unsubscribes from all sidebars.
     */
    SidebarContainer.prototype._unsubscribe = function () {
        for (var _i = 0, _a = this._sidebars; _i < _a.length; _i++) {
            var sidebar = _a[_i];
            sidebar.onOpenStart.unsubscribe();
            sidebar.onOpened.unsubscribe();
            sidebar.onCloseStart.unsubscribe();
            sidebar.onClosed.unsubscribe();
            sidebar.onModeChange.unsubscribe();
            sidebar.onPositionChange.unsubscribe();
            sidebar._onRerender.unsubscribe();
        }
    };
    /**
     * Check if we should show the backdrop when a sidebar is toggled.
     */
    SidebarContainer.prototype._onToggle = function () {
        var _this = this;
        if (this._sidebars.length > 0 && this.allowSidebarBackdropControl) {
            // Show backdrop if a single open sidebar has it set
            var hasOpen = this._sidebars.some(function (sidebar) { return sidebar.opened && sidebar.showBackdrop; });
            this.showBackdrop = hasOpen;
            this.showBackdropChange.emit(hasOpen);
        }
        setTimeout(function () {
            _this._markForCheck();
        });
    };
    /**
     * Triggers change detection to recompute styles.
     */
    SidebarContainer.prototype._markForCheck = function () {
        this._ref.markForCheck();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SidebarContainer.prototype, "animate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SidebarContainer.prototype, "allowSidebarBackdropControl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SidebarContainer.prototype, "showBackdrop", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarContainer.prototype, "showBackdropChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SidebarContainer.prototype, "onBackdropClicked", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SidebarContainer.prototype, "contentClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SidebarContainer.prototype, "backdropClass", void 0);
    SidebarContainer = __decorate([
        core_1.Component({
            selector: 'ng-sidebar-container',
            template: "\n    <div *ngIf=\"showBackdrop\"\n      aria-hidden=\"true\"\n      class=\"ng-sidebar__backdrop\"\n      [ngClass]=\"backdropClass\"\n      (click)=\"_onBackdropClicked()\"></div>\n\n    <ng-content select=\"ng-sidebar,[ng-sidebar]\"></ng-content>\n\n    <div class=\"ng-sidebar__content\"\n      [class.ng-sidebar__content--animate]=\"animate\"\n      [ngClass]=\"contentClass\"\n      [ngStyle]=\"_getContentStyle()\">\n      <ng-content select=\"[ng-sidebar-content]\"></ng-content>\n    </div>\n  ",
            styles: ["\n    :host {\n      box-sizing: border-box;\n      display: block;\n      position: relative;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n    }\n\n    .ng-sidebar__backdrop {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: #000;\n      opacity: 0.75;\n      pointer-events: auto;\n      z-index: 1;\n    }\n\n    .ng-sidebar__content {\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n\n    .ng-sidebar__content--animate {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1), padding 0.3s cubic-bezier(0, 0, 0.3, 1);\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1), padding 0.3s cubic-bezier(0, 0, 0.3, 1);\n    }\n  "],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(1, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            Object])
    ], SidebarContainer);
    return SidebarContainer;
}());
exports.SidebarContainer = SidebarContainer;


/***/ }),

/***/ "./node_modules/ng-sidebar/lib/sidebar.component.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng-sidebar/lib/sidebar.component.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var sidebar_container_component_1 = __webpack_require__(/*! ./sidebar-container.component */ "./node_modules/ng-sidebar/lib/sidebar-container.component.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/ng-sidebar/lib/utils.js");
var Sidebar = /** @class */ (function () {
    function Sidebar(_container, _ref, platformId) {
        this._container = _container;
        this._ref = _ref;
        // `openedChange` allows for "2-way" data binding
        this.opened = false;
        this.openedChange = new core_1.EventEmitter();
        this.mode = 'over';
        this.dock = false;
        this.dockedSize = '0px';
        this.position = 'start';
        this.animate = true;
        this.autoCollapseOnInit = true;
        this.trapFocus = false;
        this.autoFocus = true;
        this.showBackdrop = false;
        this.closeOnClickBackdrop = false;
        this.closeOnClickOutside = false;
        this.keyClose = false;
        this.keyCode = 27; // Default to ESC key
        this.onOpenStart = new core_1.EventEmitter();
        this.onOpened = new core_1.EventEmitter();
        this.onCloseStart = new core_1.EventEmitter();
        this.onClosed = new core_1.EventEmitter();
        this.onTransitionEnd = new core_1.EventEmitter();
        this.onModeChange = new core_1.EventEmitter();
        this.onPositionChange = new core_1.EventEmitter();
        /** @internal */
        this._onRerender = new core_1.EventEmitter();
        this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]),' +
            'textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
        this._tabIndexAttr = '__tabindex__';
        this._tabIndexIndicatorAttr = '__ngsidebar-tabindex__';
        this._clickEvent = 'click';
        this._onClickOutsideAttached = false;
        this._onKeyDownAttached = false;
        this._onResizeAttached = false;
        if (!this._container) {
            throw new Error('<ng-sidebar> must be inside a <ng-sidebar-container>. ' +
                'See https://github.com/arkon/ng-sidebar#usage for more info.');
        }
        this._isBrowser = common_1.isPlatformBrowser(platformId);
        // Handle taps in iOS
        if (this._isBrowser && utils_1.isIOS() && 'ontouchstart' in window) {
            this._clickEvent = 'touchstart';
        }
        this._normalizePosition();
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._onTransitionEnd = this._onTransitionEnd.bind(this);
        this._onFocusTrap = this._onFocusTrap.bind(this);
        this._onClickOutside = this._onClickOutside.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._collapse = this._collapse.bind(this);
    }
    Sidebar.prototype.ngOnInit = function () {
        if (!this._isBrowser) {
            return;
        }
        if (this.animate) {
            this._shouldAnimate = true;
            this.animate = false;
        }
        this._container._addSidebar(this);
        if (this.autoCollapseOnInit) {
            this._collapse();
        }
    };
    Sidebar.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        if (changes['animate'] && this._shouldAnimate) {
            this._shouldAnimate = changes['animate'].currentValue;
        }
        if (changes['closeOnClickOutside']) {
            if (changes['closeOnClickOutside'].currentValue) {
                this._initCloseClickListener();
            }
            else {
                this._destroyCloseClickListener();
            }
        }
        if (changes['keyClose']) {
            if (changes['keyClose'].currentValue) {
                this._initCloseKeyDownListener();
            }
            else {
                this._destroyCloseKeyDownListener();
            }
        }
        if (changes['position']) {
            // Handle "start" and "end" aliases
            this._normalizePosition();
            // Emit change in timeout to allow for position change to be rendered first
            setTimeout(function () {
                _this.onPositionChange.emit(changes['position'].currentValue);
            });
        }
        if (changes['mode']) {
            setTimeout(function () {
                _this.onModeChange.emit(changes['mode'].currentValue);
            });
        }
        if (changes['dock']) {
            this.triggerRerender();
        }
        if (changes['autoCollapseHeight'] || changes['autoCollapseWidth']) {
            this._initCollapseListeners();
        }
        if (changes['opened']) {
            if (this._shouldAnimate) {
                this.animate = true;
                this._shouldAnimate = false;
            }
            if (changes['opened'].currentValue) {
                this.open();
            }
            else {
                this.close();
            }
        }
    };
    Sidebar.prototype.ngOnDestroy = function () {
        if (!this._isBrowser) {
            return;
        }
        this._destroyCloseListeners();
        this._destroyCollapseListeners();
        this._container._removeSidebar(this);
    };
    // Sidebar toggling
    // ==============================================================================================
    /**
     * Opens the sidebar and emits the appropriate events.
     */
    Sidebar.prototype.open = function () {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        this.opened = true;
        this.openedChange.emit(true);
        this.onOpenStart.emit();
        this._ref.detectChanges();
        setTimeout(function () {
            if (_this.animate && !_this._isModeSlide) {
                _this._elSidebar.nativeElement.addEventListener('transitionend', _this._onTransitionEnd);
            }
            else {
                _this._setFocused();
                _this._initCloseListeners();
                if (_this.opened) {
                    _this.onOpened.emit();
                }
            }
        });
    };
    /**
     * Closes the sidebar and emits the appropriate events.
     */
    Sidebar.prototype.close = function () {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        this.opened = false;
        this.openedChange.emit(false);
        this.onCloseStart.emit();
        this._ref.detectChanges();
        setTimeout(function () {
            if (_this.animate && !_this._isModeSlide) {
                _this._elSidebar.nativeElement.addEventListener('transitionend', _this._onTransitionEnd);
            }
            else {
                _this._setFocused();
                _this._destroyCloseListeners();
                if (!_this.opened) {
                    _this.onClosed.emit();
                }
            }
        });
    };
    /**
     * Manually trigger a re-render of the container. Useful if the sidebar contents might change.
     */
    Sidebar.prototype.triggerRerender = function () {
        var _this = this;
        if (!this._isBrowser) {
            return;
        }
        setTimeout(function () {
            _this._onRerender.emit();
        });
    };
    /**
     * @internal
     *
     * Computes the transform styles for the sidebar template.
     *
     * @return {CSSStyleDeclaration} The transform styles, with the WebKit-prefixed version as well.
     */
    Sidebar.prototype._getStyle = function () {
        var transformStyle = '';
        // Hides sidebar off screen when closed
        if (!this.opened) {
            var transformDir = 'translate' + (this._isLeftOrRight ? 'X' : 'Y');
            var translateAmt = (this._isLeftOrTop ? '-' : '') + "100%";
            transformStyle = transformDir + "(" + translateAmt + ")";
            // Docked mode: partially remains open
            // Note that using `calc(...)` within `transform(...)` doesn't work in IE
            if (this.dock && this._dockedSize > 0 && !(this._isModeSlide && this.opened)) {
                transformStyle += " " + transformDir + "(" + (this._isLeftOrTop ? '+' : '-') + this.dockedSize + ")";
            }
        }
        return {
            webkitTransform: transformStyle,
            transform: transformStyle
        };
    };
    /**
     * @internal
     *
     * Handles the `transitionend` event on the sidebar to emit the onOpened/onClosed events after the transform
     * transition is completed.
     */
    Sidebar.prototype._onTransitionEnd = function (e) {
        if (e.target === this._elSidebar.nativeElement && e.propertyName.endsWith('transform')) {
            this._setFocused();
            if (this.opened) {
                this._initCloseListeners();
                this.onOpened.emit();
            }
            else {
                this._destroyCloseListeners();
                this.onClosed.emit();
            }
            this.onTransitionEnd.emit();
            this._elSidebar.nativeElement.removeEventListener('transitionend', this._onTransitionEnd);
        }
    };
    Object.defineProperty(Sidebar.prototype, "_shouldTrapFocus", {
        // Focus on open/close
        // ==============================================================================================
        /**
         * Returns whether focus should be trapped within the sidebar.
         *
         * @return {boolean} Trap focus inside sidebar.
         */
        get: function () {
            return this.opened && this.trapFocus;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets focus to the first focusable element inside the sidebar.
     */
    Sidebar.prototype._focusFirstItem = function () {
        if (this._focusableElements && this._focusableElements.length > 0) {
            this._focusableElements[0].focus();
        }
    };
    /**
     * Loops focus back to the start of the sidebar if set to do so.
     */
    Sidebar.prototype._onFocusTrap = function (e) {
        if (this._shouldTrapFocus && !this._elSidebar.nativeElement.contains(e.target)) {
            this._focusFirstItem();
        }
    };
    /**
     * Handles the ability to focus sidebar elements when it's open/closed to ensure that the sidebar is inert when
     * appropriate.
     */
    Sidebar.prototype._setFocused = function () {
        this._focusableElements = Array.from(this._elSidebar.nativeElement.querySelectorAll(this._focusableElementsString));
        if (this.opened) {
            this._focusedBeforeOpen = document.activeElement;
            // Restore focusability, with previous tabindex attributes
            for (var _i = 0, _a = this._focusableElements; _i < _a.length; _i++) {
                var el = _a[_i];
                var prevTabIndex = el.getAttribute(this._tabIndexAttr);
                var wasTabIndexSet = el.getAttribute(this._tabIndexIndicatorAttr) !== null;
                if (prevTabIndex !== null) {
                    el.setAttribute('tabindex', prevTabIndex);
                    el.removeAttribute(this._tabIndexAttr);
                }
                else if (wasTabIndexSet) {
                    el.removeAttribute('tabindex');
                    el.removeAttribute(this._tabIndexIndicatorAttr);
                }
            }
            if (this.autoFocus) {
                this._focusFirstItem();
            }
            document.addEventListener('focus', this._onFocusTrap, true);
        }
        else {
            // Manually make all focusable elements unfocusable, saving existing tabindex attributes
            for (var _b = 0, _c = this._focusableElements; _b < _c.length; _b++) {
                var el = _c[_b];
                var existingTabIndex = el.getAttribute('tabindex');
                el.setAttribute('tabindex', '-1');
                el.setAttribute(this._tabIndexIndicatorAttr, '');
                if (existingTabIndex !== null) {
                    el.setAttribute(this._tabIndexAttr, existingTabIndex);
                }
            }
            document.removeEventListener('focus', this._onFocusTrap, true);
            // Set focus back to element before the sidebar was opened
            if (this._focusedBeforeOpen && this.autoFocus && this._isModeOver) {
                this._focusedBeforeOpen.focus();
                this._focusedBeforeOpen = null;
            }
        }
    };
    // Close event handlers
    // ==============================================================================================
    /**
     * Initializes event handlers for the closeOnClickOutside and keyClose options.
     */
    Sidebar.prototype._initCloseListeners = function () {
        this._initCloseClickListener();
        this._initCloseKeyDownListener();
    };
    Sidebar.prototype._initCloseClickListener = function () {
        var _this = this;
        // In a timeout so that things render first
        setTimeout(function () {
            if (_this.opened && _this.closeOnClickOutside && !_this._onClickOutsideAttached) {
                document.addEventListener(_this._clickEvent, _this._onClickOutside);
                _this._onClickOutsideAttached = true;
            }
        });
    };
    Sidebar.prototype._initCloseKeyDownListener = function () {
        var _this = this;
        // In a timeout so that things render first
        setTimeout(function () {
            if (_this.opened && _this.keyClose && !_this._onKeyDownAttached) {
                document.addEventListener('keydown', _this._onKeyDown);
                _this._onKeyDownAttached = true;
            }
        });
    };
    /**
     * Destroys all event handlers from _initCloseListeners.
     */
    Sidebar.prototype._destroyCloseListeners = function () {
        this._destroyCloseClickListener();
        this._destroyCloseKeyDownListener();
    };
    Sidebar.prototype._destroyCloseClickListener = function () {
        if (this._onClickOutsideAttached) {
            document.removeEventListener(this._clickEvent, this._onClickOutside);
            this._onClickOutsideAttached = false;
        }
    };
    Sidebar.prototype._destroyCloseKeyDownListener = function () {
        if (this._onKeyDownAttached) {
            document.removeEventListener('keydown', this._onKeyDown);
            this._onKeyDownAttached = false;
        }
    };
    /**
     * Handles `click` events on anything while the sidebar is open for the closeOnClickOutside option.
     * Programatically closes the sidebar if a click occurs outside the sidebar.
     *
     * @param e {MouseEvent} Mouse click event.
     */
    Sidebar.prototype._onClickOutside = function (e) {
        if (this._onClickOutsideAttached && this._elSidebar && !this._elSidebar.nativeElement.contains(e.target)) {
            this.close();
        }
    };
    /**
     * Handles the `keydown` event for the keyClose option.
     *
     * @param e {KeyboardEvent} Normalized keydown event.
     */
    Sidebar.prototype._onKeyDown = function (e) {
        e = e || window.event;
        if (e.keyCode === this.keyCode) {
            this.close();
        }
    };
    // Auto collapse handlers
    // ==============================================================================================
    Sidebar.prototype._initCollapseListeners = function () {
        var _this = this;
        if (this.autoCollapseHeight || this.autoCollapseWidth) {
            // In a timeout so that things render first
            setTimeout(function () {
                if (!_this._onResizeAttached) {
                    window.addEventListener('resize', _this._collapse);
                    _this._onResizeAttached = true;
                }
            });
        }
    };
    Sidebar.prototype._destroyCollapseListeners = function () {
        if (this._onResizeAttached) {
            window.removeEventListener('resize', this._collapse);
            this._onResizeAttached = false;
        }
    };
    Sidebar.prototype._collapse = function () {
        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;
        if (this.autoCollapseHeight) {
            if (winHeight <= this.autoCollapseHeight && this.opened) {
                this._wasCollapsed = true;
                this.close();
            }
            else if (winHeight > this.autoCollapseHeight && this._wasCollapsed) {
                this.open();
                this._wasCollapsed = false;
            }
        }
        if (this.autoCollapseWidth) {
            if (winWidth <= this.autoCollapseWidth && this.opened) {
                this._wasCollapsed = true;
                this.close();
            }
            else if (winWidth > this.autoCollapseWidth && this._wasCollapsed) {
                this.open();
                this._wasCollapsed = false;
            }
        }
    };
    Object.defineProperty(Sidebar.prototype, "_height", {
        // Helpers
        // ==============================================================================================
        /**
         * @internal
         *
         * Returns the rendered height of the sidebar (or the docked size).
         * This is used in the sidebar container.
         *
         * @return {number} Height of sidebar.
         */
        get: function () {
            if (this._elSidebar.nativeElement) {
                return this._isDocked ? this._dockedSize : this._elSidebar.nativeElement.offsetHeight;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_width", {
        /**
         * @internal
         *
         * Returns the rendered width of the sidebar (or the docked size).
         * This is used in the sidebar container.
         *
         * @return {number} Width of sidebar.
         */
        get: function () {
            if (this._elSidebar.nativeElement) {
                return this._isDocked ? this._dockedSize : this._elSidebar.nativeElement.offsetWidth;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_dockedSize", {
        /**
         * @internal
         *
         * Returns the docked size as a number.
         *
         * @return {number} Docked size.
         */
        get: function () {
            return parseFloat(this.dockedSize);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isModeOver", {
        /**
         * @internal
         *
         * Returns whether the sidebar is over mode.
         *
         * @return {boolean} Sidebar's mode is "over".
         */
        get: function () {
            return this.mode === 'over';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isModePush", {
        /**
         * @internal
         *
         * Returns whether the sidebar is push mode.
         *
         * @return {boolean} Sidebar's mode is "push".
         */
        get: function () {
            return this.mode === 'push';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isModeSlide", {
        /**
         * @internal
         *
         * Returns whether the sidebar is slide mode.
         *
         * @return {boolean} Sidebar's mode is "slide".
         */
        get: function () {
            return this.mode === 'slide';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isDocked", {
        /**
         * @internal
         *
         * Returns whether the sidebar is "docked" -- i.e. it is closed but in dock mode.
         *
         * @return {boolean} Sidebar is docked.
         */
        get: function () {
            return this.dock && this.dockedSize && !this.opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isLeftOrTop", {
        /**
         * @internal
         *
         * Returns whether the sidebar is positioned at the left or top.
         *
         * @return {boolean} Sidebar is positioned at the left or top.
         */
        get: function () {
            return this.position === 'left' || this.position === 'top';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isLeftOrRight", {
        /**
         * @internal
         *
         * Returns whether the sidebar is positioned at the left or right.
         *
         * @return {boolean} Sidebar is positioned at the left or right.
         */
        get: function () {
            return this.position === 'left' || this.position === 'right';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sidebar.prototype, "_isInert", {
        /**
         * @internal
         *
         * Returns whether the sidebar is inert -- i.e. the contents cannot be focused.
         *
         * @return {boolean} Sidebar is inert.
         */
        get: function () {
            return !this.opened && !this.dock;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * "Normalizes" position. For example, "start" would be "left" if the page is LTR.
     */
    Sidebar.prototype._normalizePosition = function () {
        var ltr = utils_1.isLTR();
        if (this.position === 'start') {
            this.position = ltr ? 'left' : 'right';
        }
        else if (this.position === 'end') {
            this.position = ltr ? 'right' : 'left';
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "opened", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "openedChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "mode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "dock", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "dockedSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "position", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "animate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "autoCollapseHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "autoCollapseWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "autoCollapseOnInit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "sidebarClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "ariaLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "trapFocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "showBackdrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "closeOnClickBackdrop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "closeOnClickOutside", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "keyClose", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "keyCode", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onOpenStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onOpened", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onCloseStart", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onClosed", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onTransitionEnd", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onModeChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "onPositionChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], Sidebar.prototype, "_onRerender", void 0);
    __decorate([
        core_1.ViewChild('sidebar', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], Sidebar.prototype, "_elSidebar", void 0);
    Sidebar = __decorate([
        core_1.Component({
            selector: 'ng-sidebar',
            template: "\n    <aside #sidebar\n      role=\"complementary\"\n      [attr.aria-hidden]=\"!opened\"\n      [attr.aria-label]=\"ariaLabel\"\n      class=\"ng-sidebar ng-sidebar--{{opened ? 'opened' : 'closed'}} ng-sidebar--{{position}} ng-sidebar--{{mode}}\"\n      [class.ng-sidebar--docked]=\"_isDocked\"\n      [class.ng-sidebar--inert]=\"_isInert\"\n      [class.ng-sidebar--animate]=\"animate\"\n      [ngClass]=\"sidebarClass\"\n      [ngStyle]=\"_getStyle()\">\n      <ng-content></ng-content>\n    </aside>\n  ",
            styles: ["\n    .ng-sidebar {\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      pointer-events: auto;\n      position: absolute;\n      touch-action: auto;\n      will-change: initial;\n      z-index: 2;\n    }\n\n    .ng-sidebar--left {\n      bottom: 0;\n      left: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--right {\n      bottom: 0;\n      right: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--top {\n      left: 0;\n      right: 0;\n      top: 0;\n    }\n\n    .ng-sidebar--bottom {\n      bottom: 0;\n      left: 0;\n      right: 0;\n    }\n\n    .ng-sidebar--inert {\n      pointer-events: none;\n      touch-action: none;\n      will-change: transform;\n    }\n\n    .ng-sidebar--animate {\n      -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.3, 1);\n      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);\n    }\n  "],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __param(0, core_1.Optional()),
        __param(2, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [sidebar_container_component_1.SidebarContainer,
            core_1.ChangeDetectorRef,
            Object])
    ], Sidebar);
    return Sidebar;
}());
exports.Sidebar = Sidebar;


/***/ }),

/***/ "./node_modules/ng-sidebar/lib/sidebar.module.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng-sidebar/lib/sidebar.module.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var sidebar_container_component_1 = __webpack_require__(/*! ./sidebar-container.component */ "./node_modules/ng-sidebar/lib/sidebar-container.component.js");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar.component */ "./node_modules/ng-sidebar/lib/sidebar.component.js");
var close_directive_1 = __webpack_require__(/*! ./close.directive */ "./node_modules/ng-sidebar/lib/close.directive.js");
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule_1 = SidebarModule;
    SidebarModule.forRoot = function () {
        return {
            ngModule: SidebarModule_1
        };
    };
    var SidebarModule_1;
    SidebarModule = SidebarModule_1 = __decorate([
        core_1.NgModule({
            declarations: [sidebar_container_component_1.SidebarContainer, sidebar_component_1.Sidebar, close_directive_1.CloseSidebar],
            imports: [common_1.CommonModule],
            exports: [sidebar_container_component_1.SidebarContainer, sidebar_component_1.Sidebar, close_directive_1.CloseSidebar]
        })
    ], SidebarModule);
    return SidebarModule;
}());
exports.SidebarModule = SidebarModule;


/***/ }),

/***/ "./node_modules/ng-sidebar/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/ng-sidebar/lib/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns whether the page is in LTR mode. Defaults to `true` if it can't be computed.
 *
 * @return {boolean} Page's language direction is left-to-right.
 */
function isLTR() {
    var dir = 'ltr';
    if (typeof window !== 'undefined') {
        if (window.getComputedStyle) {
            dir = window.getComputedStyle(document.body, null).getPropertyValue('direction');
        }
        else {
            dir = document.body.currentStyle.direction;
        }
    }
    return dir === 'ltr';
}
exports.isLTR = isLTR;
/**
 * Returns whether or not the current device is an iOS device.
 *
 * @return {boolean} Device is an iOS device (i.e. iPod touch/iPhone/iPad).
 */
function isIOS() {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    }
    return false;
}
exports.isIOS = isIOS;


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark  lighten-1\" [containerInside]=\"false\">\n\n  <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">\n\n      <img class=\"logo\" src=\"assets/logo.PNG\">\n    </a></mdb-navbar-brand>\n\n  <links>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/home\"]' mdbWavesEffect><img src=\"assets/home.PNG\"> </a>\n      </li>\n\n      <li class=\"nav-item active\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/home\"]' mdbWavesEffect><img src=\"assets/update.PNG\"></a>\n      </li>\n\n      <li class=\"nav-item active\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/home\"]' mdbWavesEffect><img src=\"assets/help.PNG\"> </a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link waves-light\" [routerLink]='[\"/home\"]' mdbWavesEffect><img src=\"assets/profile.PNG\"> </a>\n      </li>\n\n\n    </ul>\n\n\n  </links>\n\n</mdb-navbar>\n\n\n\n<!-- \nhttps://mdbootstrap.com/img/Photos/Others/architecture.jpg -->\n\n<div class=\"wcontainer\">\n  <div class=\"welcome\">\n    Hi {{name}},\n  </div>\n\n  <div class=\"DOB\">\n    <div>DOB : {{dob}}</div>\n    <div>Parent/Guardian : {{name}}</div>\n\n  </div>\n</div>\n\n\n<div class=\"table-container\">\n  <div class=\"table1-title\"> Immunization Recorded To Date </div>\n  <table class=\"table1\">\n    <thead>\n      <tr>\n        <th>Date</th>\n        <th>Vaccination</th>\n        <th>Hospital</th>\n        <th>Comments</th>\n        <th width=\"80px\">Update</th>\n        <th width=\"80px\">Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let record of records\">\n        <td data-column=\"Date\">{{record[4]}}</td>\n        <td data-column=\"Vaccine Name\">{{record[2]}}</td>\n        <td data-column=\"Hospital Name\">{{record[3]}}</td>\n        <td data-column=\"Comments\">{{record[5]}}</td>\n        <td width=\"80px\"><button (click)=\"UpdateRecord(record)\">Update</button></td>\n        <td width=\"80px\"><button (click)=\"DeleteRecord(record)\">Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n\n\n\n\n</div>\n\n\n<div class=\"table-container\">\n  <div class=\"table1-title\"> Recommeneded Vaccinations Based on your Age </div>\n  <table class=\"table2\">\n    <thead>\n      <tr>\n        <th>Vaccination</th>\n        <th>Recommeneded Age</th>\n        <th>Purpose</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let record of records\">\n        <td data-column=\"Vaccination\">{{record[4]}}</td>\n        <td data-column=\"Recommeneded Age\">{{record[2]}}</td>\n        <td data-column=\"Purpose\">{{record[3]}}</td>\n\n      </tr>\n    </tbody>\n  </table>\n\n\n\n\n</div>\n\n\n<div class=\"container\" *ngIf=\"update\">\n  <div class=\"row\">\n    <section class=\"col-xs-12\">\n      <form>\n\n        <div class=\"form-group\">\n          <label for=\"selectSite\">Select Vaccine</label>\n          <select id=\"selectSite\" class=\"form-control\" name=\"vaccine\" [(ngModel)]=\"vaccine\">\n            <option>Polio</option>\n            <option>Rota</option>\n            <option>TDAP</option>\n            <option>Rubella</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputName\">Hospital Name</label>\n          <input class=\"form-control\" type=\"text\" id=\"inputName\" placeholder=\"Name\" name=\"hospital\"\n            [(ngModel)]=\"hospital\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputName\">Date</label>\n          <input class=\"form-control\" type=\"date\" id=\"inputDate\" placeholder=\"Date\" name=\"date\" [(ngModel)]=\"date\">\n        </div>\n\n        <div class=\"checkbox\">\n          <label>\n            <input id=\"inputAddList\" type=\"checkbox\" (change)=\"changeCheckU($event)\">\n            i confirm that the information i have provided is correct</label>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputComments\">Comments</label>\n          <textarea id=\"inputComments\" class=\"form-control\" name=\"comments\" [(ngModel)]=\"comments\"></textarea>\n        </div>\n\n        <input type=\"button\" [disabled]=\"disabledAgreementU\" (click)=\"Update()\" value=\"Update\"\n          class=\"btn btn-default pull-right\">\n      </form>\n\n\n    </section>\n  </div>\n</div>\n\n\n\n\n  <div class=\"container\" *ngIf=\"!update\">\n    <div class=\"row\">\n      <section class=\"col-xs-12\">\n        <form>\n\n          <div class=\"form-group\">\n            <label for=\"selectSite\">Select Vaccine</label>\n            <select id=\"selectSite\" class=\"form-control\" name=\"vaccine\" [(ngModel)]=\"vaccine\">\n              <option>Polio</option>\n              <option>Rota</option>\n              <option>TDAP</option>\n              <option>Rubella</option>\n            </select>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputName\">Hospital Name</label>\n            <input class=\"form-control\" type=\"text\" id=\"inputName\" placeholder=\"Name\" name=\"hospital\"\n              [(ngModel)]=\"hospital\">\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"inputName\">Date</label>\n            <input class=\"form-control\" type=\"date\" id=\"inputDate\" placeholder=\"Date\" name=\"date\" [(ngModel)]=\"date\">\n          </div>\n\n\n\n          <div class=\"checkbox\">\n            <label>\n              <input id=\"inputAddList\" type=\"checkbox\" (change)=\"changeCheck($event)\">\n              i confirm that the information i have provided is correct</label>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"inputComments\">Comments</label>\n            <textarea id=\"inputComments\" class=\"form-control\" name=\"comments\" [(ngModel)]=\"comments\"></textarea>\n          </div>\n\n          <input type=\"button\" [disabled]=\"disabledAgreement\" (click)=\"submit()\" value=\"Submit\"\n            class=\"btn btn-default pull-right\">\n        </form>\n\n\n      </section>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_8__);









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBBootstrapModule"].forRoot(),
            ng_sidebar__WEBPACK_IMPORTED_MODULE_8__["SidebarModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  color: black !important;\n}\n\nhtml,\nbody,\nheader,\n.view {\n  min-height: 100vh;\n}\n\n@media (max-width: 740px) {\n  html,\nbody,\nheader,\n.view {\n    height: 1000px;\n  }\n}\n\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\nbody,\nheader,\n.view {\n    height: 600px;\n  }\n}\n\n.btn .fa {\n  margin-left: 3px;\n}\n\n.top-nav-collapse {\n  background-color: #424f95 !important;\n}\n\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n\n@media (max-width: 991px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #424f95 !important;\n  }\n}\n\n.btn-white {\n  color: black !important;\n}\n\nh6 {\n  line-height: 1.7;\n}\n\n.rgba-gradient {\n  background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));\n  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n}\n\n.view.mask {\n  overflow: auto !important;\n}\n\n.mask {\n  height: -webkit-fill-available;\n}\n\n.name {\n  color: white;\n  font-weight: bold;\n  position: absolute;\n  right: 150px;\n  top: 15px;\n}\n\n.welcome {\n  font-size: x-large;\n  font-weight: bold;\n  margin: 0px 20px;\n}\n\n.wcontainer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.DOB {\n  margin: 0 10px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n@media only screen and (max-width: 600px) {\n  .container {\n    margin-top: 70px;\n  }\n\n  .name {\n    display: none;\n  }\n\n  .navbar {\n    background-color: brown !important;\n  }\n}\n\n.table-container {\n  margin: 5px 50px;\n  background-color: #e6e6e6;\n}\n\n.table1-title {\n  background-color: #b4c7e8;\n  padding: 5px 10px;\n}\n\n.table1, .table2 {\n  margin: 10px 20px 20px 20px;\n}\n\n.table1 th, .table2 th {\n  background-color: #4273c2;\n}\n\n.table1 td, .table2 td {\n  border: 1px solid #f8f9fa;\n}\n\n.table1 tbody tr:nth-child(odd), .table2 tbody tr:nth-child(odd) {\n  background-color: #cfd3ee;\n}\n\n.table1 tbody tr:nth-child(even), .table2 tbody tr:nth-child(even) {\n  background-color: #eaeaf4;\n}\n\ntable {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  table-layout: fixed;\n}\n\ntable caption {\n  font-size: 1.5em;\n  margin: 0.5em 0 0.75em;\n}\n\ntable tr {\n  background-color: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: 0.35em;\n}\n\ntable th,\ntable td {\n  padding: 2px;\n  text-align: center;\n}\n\ntable th {\n  font-size: 1em;\n  font-weight: bolder;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\ntable tbody {\n  display: block;\n  max-height: 120px;\n  overflow-y: scroll;\n}\n\ntable tbody tr td:nth-child(1) {\n  font-weight: bold;\n}\n\ntable thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n@media screen and (max-width: 600px) {\n  table {\n    border: 0;\n  }\n\n  table caption {\n    font-size: 1.3em;\n  }\n\n  table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: 0.625em;\n  }\n\n  table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 0.8em;\n    text-align: right;\n  }\n\n  table td::before {\n    /*\n     * aria-label has no advantage, it won't be read inside a table\n     content: attr(aria-label);\n     */\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  table td:last-child {\n    border-bottom: 0;\n  }\n}\n\n.footer {\n  min-height: 50px;\n  background-color: #99999954;\n  margin-top: 25px;\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table,\nthead,\ntbody,\nth,\ntd,\ntr {\n    display: block;\n  }\n\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n\n  tr {\n    border: 1px solid #ccc;\n  }\n\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 50%;\n  }\n\n  td:before {\n    /* Now like a table header */\n    /* Top/left values mimic padding */\n    top: 6px;\n    left: 6px;\n    padding-right: 10px;\n    white-space: nowrap;\n  }\n\n  /*\n    Label the data\n  */\n  .table1 td:nth-of-type(1):before {\n    content: \"DATE\";\n  }\n  .table1 td:nth-of-type(2):before {\n    content: \"VACINATION\";\n  }\n  .table1 td:nth-of-type(3):before {\n    content: \"HOSPITAL\";\n  }\n  .table1 td:nth-of-type(4):before {\n    content: \"COMMENTS\";\n  }\n  .table1 td:nth-of-type(5):before {\n    content: \"UPDATE\";\n  }\n  .table1 td:nth-of-type(6):before {\n    content: \"DELETE\";\n  }\n\n  .table2 td:nth-of-type(1):before {\n    content: \"Vaccination\";\n  }\n  .table2 td:nth-of-type(2):before {\n    content: \"Recommeneded Age\";\n  }\n  .table2 td:nth-of-type(3):before {\n    content: \"Purpose\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXHdpbjEwXFxEZXNrdG9wXFx2YWNjaW5lL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNDLHVCQUFBO0FDSkQ7O0FEVUE7Ozs7RUFJQyxpQkFBQTtBQ1BEOztBRFVBO0VBRUM7Ozs7SUFJQyxjQUFBO0VDUkE7QUFDRjs7QURXQTtFQUVDOzs7O0lBSUMsYUFBQTtFQ1ZBO0FBQ0Y7O0FEYUE7RUFDQyxnQkFBQTtBQ1hEOztBRGNBO0VBQ0Msb0NBQUE7QUNYRDs7QURjQTtFQUNDLGtDQUFBO0FDWEQ7O0FEY0E7RUFDQztJQUNDLDhCQUFBO0VDWEE7QUFDRjs7QURjQTtFQUNDLHVCQUFBO0FDWkQ7O0FEZUE7RUFDQyxnQkFBQTtBQ1pEOztBRGVBO0VBS0Msc0dBQUE7RUFBQSwyRkFBQTtFQUNBLGdHQUFBO0FDWkQ7O0FEZUE7RUFDQyx5QkFBQTtBQ1pEOztBRGdCQTtFQUNDLDhCQUFBO0FDYkQ7O0FEaUJBO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ2REOztBRGlCQTtFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2REOztBRG1CQTtFQUVDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNqQkQ7O0FEb0JBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2pCRDs7QURxQkE7RUFDQztJQUNDLGdCQUFBO0VDbEJBOztFRHFCRDtJQUNDLGFBQUE7RUNsQkE7O0VEcUJEO0lBQ0Msa0NBQUE7RUNsQkE7QUFDRjs7QUR3QkE7RUFDQyxnQkFBQTtFQUNBLHlCQUFBO0FDdEJEOztBRHlCQTtFQUNDLHlCQUFBO0VBQ0EsaUJBQUE7QUN0QkQ7O0FEeUJBO0VBQ0MsMkJBQUE7QUN0QkQ7O0FEd0JDO0VBQ0MseUJBQUE7QUN0QkY7O0FEeUJDO0VBQ0MseUJBQUE7QUN2QkY7O0FEMEJDO0VBQ0MseUJBQUE7QUN4QkY7O0FEMkJDO0VBQ0MseUJBQUE7QUN6QkY7O0FENkJBO0VBQ0Msc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUMxQkQ7O0FENkJBO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBQzFCRDs7QUQ2QkE7RUFDQyx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQzFCRDs7QUQ2QkE7O0VBRUMsWUFBQTtFQUNBLGtCQUFBO0FDMUJEOztBRDhCQTtFQUNDLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUMzQkQ7O0FEOEJBO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMzQkQ7O0FENkJDO0VBQ0MsaUJBQUE7QUMzQkY7O0FEK0JBOztFQUVDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUM1QkQ7O0FEK0JBO0VBQ0M7SUFDQyxTQUFBO0VDNUJBOztFRCtCRDtJQUNDLGdCQUFBO0VDNUJBOztFRCtCRDtJQUNDLFlBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDNUJBOztFRCtCRDtJQUNDLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VDNUJBOztFRCtCRDtJQUNDLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUM1QkE7O0VEK0JEO0lBQ0M7OztNQUFBO0lBSUEsV0FBQTtJQUNBLGlCQUFBO0lBQ0EseUJBQUE7RUM1QkE7O0VEK0JEO0lBQ0MsZ0JBQUE7RUM1QkE7QUFDRjs7QUQrQkE7RUFDQyxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUM3QkQ7O0FEeUNBO0VBR0MsOENBQUE7RUFDQTs7Ozs7O0lBTUMsY0FBQTtFQ3hDQTs7RUQyQ0QsbUVBQUE7RUFDQTtJQUNDLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUN4Q0E7O0VEMkNEO0lBQ0Msc0JBQUE7RUN4Q0E7O0VEMkNEO0lBQ0MseUJBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VDeENBOztFRDJDRDtJQUNDLDRCQUFBO0lBQ0Esa0NBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUN4Q0E7O0VEMkNEOztHQUFBO0VBTUM7SUFDQyxlQUFBO0VDM0NEO0VEOENBO0lBQ0MscUJBQUE7RUM1Q0Q7RUQrQ0E7SUFDQyxtQkFBQTtFQzdDRDtFRGdEQTtJQUNDLG1CQUFBO0VDOUNEO0VEZ0RBO0lBQ0MsaUJBQUE7RUM5Q0Q7RURnREE7SUFDQyxpQkFBQTtFQzlDRDs7RURvREE7SUFDQyxzQkFBQTtFQ2pERDtFRG9EQTtJQUNDLDJCQUFBO0VDbEREO0VEcURBO0lBQ0Msa0JBQUE7RUNuREQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbWd7XG4vLyAgIGhlaWdodDogMzBweDtcbi8vIH1cblxuXG4ubmF2LWxpbmsge1xuXHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuXG5cblxuaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcblxuXHRodG1sLFxuXHRib2R5LFxuXHRoZWFkZXIsXG5cdC52aWV3IHtcblx0XHRoZWlnaHQ6IDEwMDBweDtcblx0fVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuXG5cdGh0bWwsXG5cdGJvZHksXG5cdGhlYWRlcixcblx0LnZpZXcge1xuXHRcdGhlaWdodDogNjAwcHg7XG5cdH1cbn1cblxuLmJ0biAuZmEge1xuXHRtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udG9wLW5hdi1jb2xsYXBzZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0MjRmOTUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG5cdC5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XG5cdFx0YmFja2dyb3VuZDogIzQyNGY5NSAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5idG4td2hpdGUge1xuXHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaDYge1xuXHRsaW5lLWhlaWdodDogMS43O1xufVxuXG4ucmdiYS1ncmFkaWVudCB7XG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcblx0YmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgNDVkZWcsIGZyb20ocmdiYSg0MiwgMjcsIDE2MSwgMC43KSksIHRvKHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpKSk7XG5cdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byA0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKVxufVxuXG4udmlldy5tYXNrIHtcblx0b3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcblxufVxuXG4ubWFzayB7XG5cdGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuXG4ubmFtZSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDE1MHB4O1xuXHR0b3A6IDE1cHg7XG59XG5cbi53ZWxjb21lIHtcblx0Zm9udC1zaXplOiB4LWxhcmdlO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luOiAwcHggMjBweDtcbn1cblxuXG5cbi53Y29udGFpbmVyIHtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ET0Ige1xuXHRtYXJnaW46IDAgMTBweDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdC5jb250YWluZXIge1xuXHRcdG1hcmdpbi10b3A6IDcwcHg7XG5cdH1cblxuXHQubmFtZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5uYXZiYXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IGJyb3duICFpbXBvcnRhbnQ7XG5cdH1cblxuXG59XG5cblxuLnRhYmxlLWNvbnRhaW5lciB7XG5cdG1hcmdpbjogNXB4IDUwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi50YWJsZTEtdGl0bGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjRjN2U4O1xuXHRwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuLnRhYmxlMSAsLnRhYmxlMntcblx0bWFyZ2luOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuXG5cdHRoIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDI3M2MyO1xuXHR9XG5cblx0dGQge1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmOGY5ZmE7XG5cdH1cblxuXHR0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2NmZDNlZTtcblx0fVxuXG5cdHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VhZWFmNDtcblx0fVxufVxuXG50YWJsZSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0dGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGFibGUgY2FwdGlvbiB7XG5cdGZvbnQtc2l6ZTogMS41ZW07XG5cdG1hcmdpbjogMC41ZW0gMCAwLjc1ZW07XG59XG5cbnRhYmxlIHRyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZDtcblx0cGFkZGluZzogMC4zNWVtO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcblx0cGFkZGluZzogMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxudGFibGUgdGgge1xuXHRmb250LXNpemU6IDFlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG50YWJsZSB0Ym9keSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRtYXgtaGVpZ2h0OiAxMjBweDtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXG5cdHRyIHRkOm50aC1jaGlsZCgxKSB7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cbn1cblxudGFibGUgdGhlYWQsXG50Ym9keSB0ciB7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHR3aWR0aDogMTAwJTtcblx0dGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcblx0dGFibGUge1xuXHRcdGJvcmRlcjogMDtcblx0fVxuXG5cdHRhYmxlIGNhcHRpb24ge1xuXHRcdGZvbnQtc2l6ZTogMS4zZW07XG5cdH1cblxuXHR0YWJsZSB0aGVhZCB7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cdFx0aGVpZ2h0OiAxcHg7XG5cdFx0bWFyZ2luOiAtMXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cGFkZGluZzogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDFweDtcblx0fVxuXG5cdHRhYmxlIHRyIHtcblx0XHRib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkZDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW4tYm90dG9tOiAwLjYyNWVtO1xuXHR9XG5cblx0dGFibGUgdGQge1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdH1cblxuXHR0YWJsZSB0ZDo6YmVmb3JlIHtcblx0XHQvKlxuXHQgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG5cdCAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcblx0ICAqL1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdH1cblxuXHR0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcblx0XHRib3JkZXItYm90dG9tOiAwO1xuXHR9XG59XG5cbi5mb290ZXIge1xuXHRtaW4taGVpZ2h0OiA1MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5NTQ7XG5cdG1hcmdpbi10b3A6IDI1cHg7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxuKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuXG5cdC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG5cdHRhYmxlLFxuXHR0aGVhZCxcblx0dGJvZHksXG5cdHRoLFxuXHR0ZCxcblx0dHIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cblx0LyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cblx0dGhlYWQgdHIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IC05OTk5cHg7XG5cdFx0bGVmdDogLTk5OTlweDtcblx0fVxuXG5cdHRyIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHR9XG5cblx0dGQge1xuXHRcdC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHBhZGRpbmctbGVmdDogNTAlO1xuXHR9XG5cblx0dGQ6YmVmb3JlIHtcblx0XHQvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuXHRcdC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXG5cdFx0dG9wOiA2cHg7XG5cdFx0bGVmdDogNnB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0fVxuXG5cdC8qXG5cdCAgTGFiZWwgdGhlIGRhdGFcblx0Ki9cblxuXHQudGFibGUxIHtcblxuXHRcdHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIkRBVEVcIjtcblx0XHR9XG5cblx0XHR0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJWQUNJTkFUSU9OXCI7XG5cdFx0fVxuXG5cdFx0dGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwiSE9TUElUQUxcIjtcblx0XHR9XG5cblx0XHR0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJDT01NRU5UU1wiO1xuXHRcdH1cblx0XHR0ZDpudGgtb2YtdHlwZSg1KTpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJVUERBVEVcIjtcblx0XHR9XG5cdFx0dGQ6bnRoLW9mLXR5cGUoNik6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6IFwiREVMRVRFXCI7XG5cdFx0fVxuXG5cdH1cblxuXHQudGFibGUyIHtcblx0XHR0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJWYWNjaW5hdGlvblwiO1xuXHRcdH1cblxuXHRcdHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG5cdFx0XHRjb250ZW50OiBcIlJlY29tbWVuZWRlZCBBZ2VcIjtcblx0XHR9XG5cblx0XHR0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogXCJQdXJwb3NlXCI7XG5cdFx0fVxuXG5cdH1cbn0iLCIubmF2LWxpbmsge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIGh0bWwsXG5ib2R5LFxuaGVhZGVyLFxuLnZpZXcge1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbn1cbi5idG4gLmZhIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnRvcC1uYXYtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0Zjk1ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xuICAgIGJhY2tncm91bmQ6ICM0MjRmOTUgIWltcG9ydGFudDtcbiAgfVxufVxuLmJ0bi13aGl0ZSB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5yZ2JhLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCA0NWRlZywgZnJvbShyZ2JhKDQyLCAyNywgMTYxLCAwLjcpKSwgdG8ocmdiYSgyOSwgMjEwLCAxNzcsIDAuNykpKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xufVxuXG4udmlldy5tYXNrIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1hc2sge1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUwcHg7XG4gIHRvcDogMTVweDtcbn1cblxuLndlbGNvbWUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4ud2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLkRPQiB7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cblxuICAubmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi50YWJsZS1jb250YWluZXIge1xuICBtYXJnaW46IDVweCA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4udGFibGUxLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0YzdlODtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi50YWJsZTEsIC50YWJsZTIge1xuICBtYXJnaW46IDEwcHggMjBweCAyMHB4IDIwcHg7XG59XG4udGFibGUxIHRoLCAudGFibGUyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNzNjMjtcbn1cbi50YWJsZTEgdGQsIC50YWJsZTIgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xufVxuLnRhYmxlMSB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSwgLnRhYmxlMiB0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQzZWU7XG59XG4udGFibGUxIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSwgLnRhYmxlMiB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWY0O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGFibGUgY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMC41ZW0gMCAwLjc1ZW07XG59XG5cbnRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogMC4zNWVtO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUgdGJvZHkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbnRhYmxlIHRib2R5IHRyIHRkOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG50YWJsZSB0aGVhZCxcbnRib2R5IHRyIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICB0YWJsZSB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgdGFibGUgY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxuXG4gIHRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuICB9XG5cbiAgdGFibGUgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07XG4gIH1cblxuICB0YWJsZSB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIHRhYmxlIHRkOjpiZWZvcmUge1xuICAgIC8qXG4gICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG4gICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XG4gICAgICovXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gIH1cbn1cbi5mb290ZXIge1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5NTQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG4gIHRhYmxlLFxudGhlYWQsXG50Ym9keSxcbnRoLFxudGQsXG50ciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBIaWRlIHRhYmxlIGhlYWRlcnMgKGJ1dCBub3QgZGlzcGxheTogbm9uZTssIGZvciBhY2Nlc3NpYmlsaXR5KSAqL1xuICB0aGVhZCB0ciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTk5OTlweDtcbiAgICBsZWZ0OiAtOTk5OXB4O1xuICB9XG5cbiAgdHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cblxuICB0ZCB7XG4gICAgLyogQmVoYXZlICBsaWtlIGEgXCJyb3dcIiAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiA1MCU7XG4gIH1cblxuICB0ZDpiZWZvcmUge1xuICAgIC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG4gICAgLyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiA2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLypcbiAgICBMYWJlbCB0aGUgZGF0YVxuICAqL1xuICAudGFibGUxIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJEQVRFXCI7XG4gIH1cbiAgLnRhYmxlMSB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiVkFDSU5BVElPTlwiO1xuICB9XG4gIC50YWJsZTEgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkhPU1BJVEFMXCI7XG4gIH1cbiAgLnRhYmxlMSB0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQ09NTUVOVFNcIjtcbiAgfVxuICAudGFibGUxIHRkOm50aC1vZi10eXBlKDUpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJVUERBVEVcIjtcbiAgfVxuICAudGFibGUxIHRkOm50aC1vZi10eXBlKDYpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJERUxFVEVcIjtcbiAgfVxuXG4gIC50YWJsZTIgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlZhY2NpbmF0aW9uXCI7XG4gIH1cbiAgLnRhYmxlMiB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5lZGVkIEFnZVwiO1xuICB9XG4gIC50YWJsZTIgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlB1cnBvc2VcIjtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/api.service */ "./src/app/_service/api.service.ts");



let HomePage = class HomePage {
    // public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor(api) {
        // for (let i = 1; i < 11; i++) {
        //   this.items.push({
        //     title: 'Item ' + i,
        //     note: 'This is item #' + i,
        //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        //   });
        // }
        this.api = api;
        this._opened = false;
        this.update = false;
        this.data = {
            action: "getrecord",
            email_id: sessionStorage.getItem('email_id'),
            password: sessionStorage.getItem('password')
        };
        this.Updatedata = {
            vaccine_name: "",
            hospital: "",
            vaccine_taken_date: "",
            comment: "",
            action: "",
            email_id: "",
            password: ""
        };
        this.vaccine = "";
        this.hospital = "";
        this.date = "";
        this.comments = "";
        this.disabledAgreement = true;
        this.disabledAgreementU = true;
    }
    _toggleSidebar() {
        this._opened = !this._opened;
    }
    changeCheck(event) {
        this.disabledAgreement = !this.disabledAgreement;
    }
    changeCheckU(event) {
        this.disabledAgreementU = !this.disabledAgreementU;
    }
    submit() {
        this.Updatedata.vaccine_name = this.vaccine;
        this.Updatedata.hospital = this.hospital;
        this.Updatedata.vaccine_taken_date = this.date;
        this.Updatedata.comment = this.comments;
        this.Updatedata.action = "insert";
        this.Updatedata.email_id = sessionStorage.getItem("email_id");
        this.Updatedata.password = sessionStorage.getItem("password");
        if (this.Updatedata.vaccine_name == "" || this.Updatedata.hospital == "" || this.Updatedata.vaccine_taken_date == "") {
            alert("Enter all details");
        }
        else {
            this.api.addRecord(this.Updatedata).subscribe((res) => {
                if (res) {
                    alert("Record added succesfully");
                    this.vaccine = "";
                    this.hospital = "";
                    this.date = "";
                    this.comments = "";
                    this.api.getRecords(this.data).subscribe((res) => {
                        this.records = res;
                    });
                }
                else {
                    alert("Something went wrong please try later");
                }
            });
        }
    }
    ngOnInit() {
        this.api.getName().subscribe((res) => {
            console.log(res);
            this.name = res[0][0].toString();
            this.dob = res[0][1].toString();
        });
        this.api.getRecords(this.data).subscribe((res) => {
            this.records = res;
        });
    }
    DeleteRecord(record) {
        let data = {
            action: "delete",
            email_id: sessionStorage.getItem('email_id'),
            password: sessionStorage.getItem('password'),
            vaccine_name: record[2],
            hospital: record[3],
            vaccine_taken_date: record[4],
            comment: record[5]
        };
        this.api.delete(data).subscribe((res) => {
            if (res) {
                alert("Record Deleted");
                this.api.getRecords(this.data).subscribe((res) => {
                    this.records = res;
                });
            }
        });
    }
    UpdateRecord(record) {
        this.update = true;
        this.oldRecord = {
            action: "delete",
            email_id: sessionStorage.getItem('email_id'),
            password: sessionStorage.getItem('password'),
            vaccine_name: record[2],
            hospital: record[3],
            vaccine_taken_date: record[4],
            comment: record[5]
        };
        this.vaccine = record[2];
        this.hospital = record[3];
        this.date = record[4];
        this.comments = record[5];
    }
    Update() {
        this.Updatedata.vaccine_name = this.vaccine;
        this.Updatedata.hospital = this.hospital;
        this.Updatedata.vaccine_taken_date = this.date;
        this.Updatedata.comment = this.comments;
        this.Updatedata.action = "insert";
        this.Updatedata.email_id = sessionStorage.getItem("email_id");
        this.Updatedata.password = sessionStorage.getItem("password");
        this.api.delete(this.oldRecord).subscribe((res) => {
            console.log(res);
        });
        if (this.Updatedata.vaccine_name == "" || this.Updatedata.hospital == "" || this.Updatedata.vaccine_taken_date == "") {
            alert("Enter all details");
        }
        else {
            this.api.addRecord(this.Updatedata).subscribe((res) => {
                if (res) {
                    alert("Record updated succesfully");
                    this.vaccine = "";
                    this.hospital = "";
                    this.date = "";
                    this.comments = "";
                    this.update = false;
                    this.api.getRecords(this.data).subscribe((res) => {
                        this.records = res;
                    });
                }
                else {
                    alert("Something went wrong please try later");
                }
            });
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map