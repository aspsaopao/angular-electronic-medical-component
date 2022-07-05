import { IToolbarSelectBoxItemOptions } from '../i-toolbar-item-options';
import { ToolbarInteractiveItem } from './toolbar-interactive-item';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
export declare class ToolbarSelectBoxItem extends ToolbarInteractiveItem<IToolbarSelectBoxItemOptions> {
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
    setValue(value: any): void;
    private getOnValueChangedHandler;
}
//# sourceMappingURL=toolbar-select-box-item.d.ts.map