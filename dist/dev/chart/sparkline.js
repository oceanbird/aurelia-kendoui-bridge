'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', '../common/widget-base', '../common/decorators', '../common/constants', '../pdf/pdf'], function (_export, _context) {
  "use strict";

  var inject, customElement, WidgetBase, generateBindables, constants, PDF, _dec, _dec2, _dec3, _class, Sparkline;

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
    }, function (_pdfPdf) {
      PDF = _pdfPdf.PDF;
    }],
    execute: function () {
      _export('Sparkline', Sparkline = (_dec = customElement(constants.elementPrefix + 'sparkline'), _dec2 = generateBindables('kendoSparkline'), _dec3 = inject(Element, WidgetBase), _dec(_class = _dec2(_class = _dec3(_class = function () {
        function Sparkline(element, widgetBase) {
          _classCallCheck(this, Sparkline);

          this.element = element;
          this.widgetBase = widgetBase.control('kendoSparkline').useElement(this.element).linkViewModel(this);
        }

        Sparkline.prototype.subscribe = function subscribe(event, callback) {
          return this.widgetBase.subscribe(event, callback);
        };

        Sparkline.prototype.bind = function bind(ctx, overrideCtx) {
          this.widgetBase.useParentCtx(overrideCtx);
        };

        Sparkline.prototype.attached = function attached() {
          if (!this.kNoInit) {
            this.recreate();
          }
        };

        Sparkline.prototype.recreate = function recreate() {
          this.kWidget = this.widgetBase.recreate();
        };

        Sparkline.prototype.destroy = function destroy() {
          this.widgetBase.destroy(this.kWidget);
        };

        Sparkline.prototype.detached = function detached() {
          this.destroy();
        };

        return Sparkline;
      }()) || _class) || _class) || _class));

      _export('Sparkline', Sparkline);
    }
  };
});
//# sourceMappingURL=../dist/dev/chart/sparkline.js.map
