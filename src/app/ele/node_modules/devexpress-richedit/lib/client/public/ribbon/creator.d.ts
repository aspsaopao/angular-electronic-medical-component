import { IRibbonItemOptions } from '../../../client-ribbon/client-ribbon/i-ribbon-item-options';
import { IToolbarItemOptions } from '../../../client-ribbon/client-ribbon/i-toolbar-item-options';
import { IRibbonContextItemsCategory } from '../../../client-ribbon/client-ribbon/ribbon';
import { Ribbon } from './ribbon';
import { RibbonItem, RibbonTab } from './tab';
export declare function createRibbon(): Ribbon;
export declare function addTabs(ribbon: Ribbon, tabs?: IRibbonItemOptions[]): void;
export declare function addContextTabCategories(ribbon: Ribbon, contextTabCategories?: IRibbonContextItemsCategory[]): void;
export declare function createInnerTab(tab: RibbonTab): IRibbonItemOptions;
export declare function createInnerItems(items: RibbonItem[]): IToolbarItemOptions[];
//# sourceMappingURL=creator.d.ts.map