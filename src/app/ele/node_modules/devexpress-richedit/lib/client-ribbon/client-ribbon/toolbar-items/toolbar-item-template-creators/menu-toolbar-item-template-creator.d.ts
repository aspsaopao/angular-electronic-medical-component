import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { MenuInitializedHandler, MenuItemClickHandler, MenuItemRenderedHandler } from '../../../../dxt-utils/dxt-utils/devextreme-types';
import { IToolbarMenuItemOptions } from '../../i-toolbar-item-options';
import { ToolbarItemTemplateCreator } from './base-types';
export interface IMenuToolbarItemTemplateCreatorOptions {
    itemOptions: IToolbarMenuItemOptions;
    onInitialized?: MenuInitializedHandler;
    onItemClick?: MenuItemClickHandler;
    onItemRendered?: MenuItemRenderedHandler;
}
export declare class MenuToolbarItemTemplateCreator extends ToolbarItemTemplateCreator {
    private options;
    static readonly ShowTextInMenuClassName = "dx-showTextInMenu";
    constructor(options: IMenuToolbarItemTemplateCreatorOptions);
    createTemplate(): dxToolbarItem;
    private getMenuOptions;
}
//# sourceMappingURL=menu-toolbar-item-template-creator.d.ts.map