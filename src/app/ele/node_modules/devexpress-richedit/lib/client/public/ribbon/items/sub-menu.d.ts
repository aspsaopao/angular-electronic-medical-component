import { RibbonItemId } from '../item-ids';
import { RibbonItemBase, RibbonItemType } from './base';
import { RibbonButtonItem } from './button';
export interface RibbonSubMenuItemOptions {
    icon?: string;
    beginGroup?: boolean;
    localizationId?: string;
}
export declare class RibbonSubMenuItem extends RibbonItemBase {
    readonly type = RibbonItemType.SubMenu;
    text: string;
    items: RibbonSubMenuItem[];
    icon?: string;
    localizationId?: string;
    constructor(id: RibbonItemId, text: string, items?: RibbonSubMenuItem[], options?: RibbonSubMenuItemOptions);
    convertToButton(): RibbonButtonItem;
}
//# sourceMappingURL=sub-menu.d.ts.map