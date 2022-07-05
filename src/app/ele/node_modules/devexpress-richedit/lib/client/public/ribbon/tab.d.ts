import { CommandId } from '../commands/enum';
import { RibbonItemId } from './item-ids';
import { RibbonButtonItem } from './items/button';
import { RibbonColorBoxItem } from './items/color-box';
import { RibbonMenuItem } from './items/menu';
import { RibbonNumberBoxItem } from './items/number-box';
import { RibbonSelectBoxItem } from './items/select-box';
import { RibbonSubMenuItem } from './items/sub-menu';
export declare type RibbonTabId = string | RibbonTabType;
export declare enum RibbonTabType {
    File = 0,
    Home = 1,
    Insert = 2,
    PageLayout = 3,
    References = 4,
    MailMerge = 5,
    View = 6,
    HeadersFooters = 7,
    TableDesign = 8,
    TableLayout = 9,
    FloatingObjectsFormat = 10
}
export declare type FirstLevelRibbonItem = RibbonButtonItem | RibbonMenuItem | RibbonSelectBoxItem | RibbonNumberBoxItem | RibbonColorBoxItem;
export declare type RibbonItem = FirstLevelRibbonItem | RibbonSubMenuItem;
export declare type RibbonItemParent = RibbonMenuItem | RibbonSubMenuItem | RibbonTab;
export declare class RibbonTab {
    id: RibbonTabId;
    title: string;
    items: FirstLevelRibbonItem[];
    localizationId?: string;
    get contextTab(): boolean;
    constructor(title: string, id: RibbonTabId, items?: FirstLevelRibbonItem[], localizationId?: string);
    removeItem(id: RibbonItemId): void;
    removeItem(item: RibbonItem): void;
    getItem(id: RibbonItemId): RibbonItem | null;
    insertItem(item: RibbonItem, index?: number): FirstLevelRibbonItem;
    insertItemBefore(item: RibbonItem, target: RibbonItem | RibbonItemId | CommandId): RibbonItem;
    insertItemAfter(item: RibbonItem, target: RibbonItem | RibbonItemId | CommandId): RibbonItem;
    forEachItem(callback: (item: RibbonItem, index: number, parent: RibbonItemParent) => void, recursive?: boolean): void;
}
export declare class RibbonContextTab extends RibbonTab {
    category: string | number;
    get contextTab(): boolean;
    constructor(title: string, id: RibbonTabId, category: string | number, items: FirstLevelRibbonItem[], localizationId?: string);
}
//# sourceMappingURL=tab.d.ts.map