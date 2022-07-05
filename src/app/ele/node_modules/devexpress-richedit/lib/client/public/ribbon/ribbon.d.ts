import { RibbonTab, RibbonTabId } from './tab';
export declare class Ribbon {
    visible: boolean;
    activeTabIndex: number;
    protected tabs: RibbonTab[];
    clearTabs(): void;
    removeTab(tab: RibbonTab): RibbonTab | null;
    removeTab(id: RibbonTabId): RibbonTab | null;
    insertTab(tab: RibbonTab, index?: number): RibbonTab;
    insertTabBefore(tab: RibbonTab, target: RibbonTab | RibbonTabId): RibbonTab;
    insertTabAfter(tab: RibbonTab, target: RibbonTab | RibbonTabId): RibbonTab;
    getTab(id: RibbonTabId): RibbonTab | null;
}
//# sourceMappingURL=ribbon.d.ts.map