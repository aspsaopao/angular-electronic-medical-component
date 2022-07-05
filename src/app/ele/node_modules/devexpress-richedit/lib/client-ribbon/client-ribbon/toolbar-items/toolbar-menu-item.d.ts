import dxMenu from 'devextreme/ui/menu';
import { IToolbarMenuItemOptions } from '../i-toolbar-item-options';
import { OnCommandExecutedHandler } from '../ribbon';
import { ToolbarInteractiveItem } from './toolbar-interactive-item';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
import { ToolbarSubMenuItem } from './toolbar-sub-menu-item';
export declare class ToolbarMenuItem extends ToolbarInteractiveItem<IToolbarMenuItemOptions> {
    private onSubMenuItemCreated;
    private items;
    constructor(options: IToolbarMenuItemOptions, onCommandExecuted: OnCommandExecutedHandler, onSubMenuItemCreated: (item: ToolbarSubMenuItem) => void);
    getWidget(): dxMenu;
    getOptions(): IToolbarMenuItemOptions;
    private createSubMenuItems;
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
    setValue(_value: any): void;
    private getOnItemClickHandler;
    private closeSubMenuIfRequired;
    private getOnItemRenderedHandler;
}
//# sourceMappingURL=toolbar-menu-item.d.ts.map