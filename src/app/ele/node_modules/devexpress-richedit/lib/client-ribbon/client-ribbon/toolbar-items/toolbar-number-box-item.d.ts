import { IToolbarNumberBoxItemOptions } from '../i-toolbar-item-options';
import { ToolbarInteractiveItem } from './toolbar-interactive-item';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
export declare class ToolbarNumberBoxItem extends ToolbarInteractiveItem<IToolbarNumberBoxItemOptions> {
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
    setValue(value: any): void;
    private getOnValueChangedHandler;
}
//# sourceMappingURL=toolbar-number-box-item.d.ts.map