import { RibbonItemId } from '../item-ids';
import { RibbonItemBase, RibbonItemType } from './base';
import { RibbonSubMenuItem } from './sub-menu';
export interface RibbonMenuItemOptions {
    icon?: string;
    showText?: boolean;
    beginGroup?: boolean;
    localizationId?: string;
}
export declare class RibbonMenuItem extends RibbonItemBase {
    readonly type = RibbonItemType.Menu;
    text: string;
    items: RibbonSubMenuItem[];
    showText: boolean;
    icon?: string;
    localizationId?: string;
    constructor(id: RibbonItemId, text: string, items: RibbonSubMenuItem[], options?: RibbonMenuItemOptions);
}
//# sourceMappingURL=menu.d.ts.map