import {inject} from 'aurelia-dependency-injection';
import {customElement, bindable, children, ViewResources} from 'aurelia-templating';
import {WidgetBase} from '../common/widget-base';
import {generateBindables} from '../common/decorators';
import {constants} from '../common/constants';
import {PDF} from '../pdf/pdf'; //eslint-disable-line no-unused-vars
import 'kendo.pivotgrid.min';
import 'kendo.pivot.fieldmenu.min';


@customElement(`${constants.elementPrefix}pivot-grid`)
@generateBindables('kendoPivotGrid')
@inject(Element, WidgetBase, ViewResources)
export class PivotGrid {

  @bindable options = {};
  @children(`${constants.elementPrefix}template`) templates;

  constructor(element, widgetBase, viewResources) {
    this.element = element;
    this.widgetBase = widgetBase
                        .control('kendoPivotGrid')
                        .linkViewModel(this)
                        .useViewResources(viewResources);
  }

  bind(ctx) {
    this.$parent = ctx;
    this.widgetBase.useTemplates(this, 'kendoPivotGrid', this.templates);
  }

  attached() {
    this.recreate();
  }

  recreate() {
    this.kWidget = this.widgetBase.createWidget({
      element: this.element,
      parentCtx: this.$parent
    });
  }

  detached() {
    this.widgetBase.destroy(this.kWidget);
  }
}
