'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Menu;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Menu', Menu = (_dec = customAttribute(constants.attributePrefix + 'menu'), _dec2 = generateBindables('kendoMenu'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Menu(element, widgetBase) {
          _classCallCheck(this, Menu);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMenu').useElement(this.element).linkViewModel(this);
        }

        Menu.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Menu.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Menu.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Menu.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Menu.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Menu.prototype.detached = function detached() {
          this.destroy();
        };

        return Menu;
      }()) || _class) || _class) || _class));

      _export('Menu', Menu);
    }
  };
});