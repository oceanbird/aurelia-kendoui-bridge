'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, _dec, _dec2, _dec3, _class, Map;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_commonWidgetBase) {
      WidgetBase = _commonWidgetBase.WidgetBase;
    }, function (_commonDecorators) {
      generateBindables = _commonDecorators.generateBindables;
    }, function (_commonConstants) {
      constants = _commonConstants.constants;
    }],
    execute: function () {
      _export('Map', Map = (_dec = customElement(constants.elementPrefix + 'map'), _dec2 = generateBindables('kendoMap'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Map(element, widgetBase) {
          _classCallCheck(this, Map);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoMap').useElement(this.element).linkViewModel(this);
        }

        Map.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Map.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Map.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Map.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Map.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
          this.widgetBase.handlePropertyChanged(this.kWidget, property, newValue, oldValue);
        };

        Map.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Map.prototype.detached = function detached() {
          this.destroy();
        };

        return Map;
      }()) || _class) || _class) || _class));

      _export('Map', Map);
    }
  };
});
//# sourceMappingURL=../dist/dev/map/map.js.map
