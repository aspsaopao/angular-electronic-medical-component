import { IToolbarButtonItemOptions } from '../i-toolbar-item-options';
import { ToolbarInteractiveItem } from './toolbar-interactive-item';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
export declare class ToolbarButtonItem extends ToolbarInteractiveItem<IToolbarButtonItemOptions> {
    static readonly ToggleStateClassName = "dx-r-toggle";
    static readonly ButtonGroupItemClassName = "dx-buttongroup-item";
    static readonly ItemSelectedClassName = "dx-item-selected";
    static readonly ToggleButtonDataProperty = "dx-ri-value";
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
    setValue(value: any): void;
    private getValue;
    private getElement;
    private getOnClickHandler;
}
//# sourceMappingURL=toolbar-button-item.d.ts.map