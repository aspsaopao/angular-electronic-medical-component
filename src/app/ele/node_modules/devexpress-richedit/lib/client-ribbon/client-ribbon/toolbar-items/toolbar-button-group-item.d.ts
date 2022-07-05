import { IToolbarButtonGroupItemOptions } from '../i-toolbar-item-options';
import { ToolbarInteractiveItem } from './toolbar-interactive-item';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
export declare class ToolbarButtonGroupItem extends ToolbarInteractiveItem<IToolbarButtonGroupItemOptions> {
    static readonly ToggleStateClassName = "dx-r-toggle";
    static readonly ToggleButtonDataProperty = "dx-ri-value";
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
    setValue(_value: any): void;
    private getOnClickHandler;
}
//# sourceMappingURL=toolbar-button-group-item.d.ts.map