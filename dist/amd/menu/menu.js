define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', 'kendo.menu.min'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _widgetBase, _decorators, _constants) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Menu = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _dec3, _class;

  var Menu = exports.Menu = (_dec = (0, _aureliaTemplating.customAttribute)(_constants.constants.attributePrefix + 'menu'), _dec2 = (0, _decorators.generateBindables)('kendoMenu'), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _widgetBase.WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
    function Menu(element, widgetBase) {
      _classCallCheck(this, Menu);

      this.element = element;
      this.widgetBase = widgetBase.control('kendoMenu').linkViewModel(this);
    }

    Menu.prototype.bind = function bind(ctx) {
      this.$parent = ctx;
    };

    Menu.prototype.attached = function attached() {
      if (!this.kNoInit) {
        this.recreate();
      }
    };

    Menu.prototype.recreate = function recreate() {
      this.kWidget = this.widgetBase.createWidget({
        element: this.element,
        parentCtx: this.$parent
      });
    };

    Menu.prototype.unbind = function unbind() {
      this.widgetBase.destroy(this.kWidget);
    };

    return Menu;
  }()) || _class) || _class) || _class);
});