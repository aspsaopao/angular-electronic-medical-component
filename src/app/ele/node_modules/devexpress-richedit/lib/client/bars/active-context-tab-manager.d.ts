import { ISelectionChangesListener } from '../../base/selection/i-selection-changes-listener';
import { Selection } from '../../base/selection/selection';
import { Ribbon as ApiRibbon } from '../public/ribbon/ribbon';
import { ClientBarHolder } from './bar-holder';
export declare class ActiveContextTabManager implements ISelectionChangesListener {
    private static readonly categoryToInitialTabId;
    private static readonly categoryToContextTabItemId;
    private static readonly selectionOrder;
    private readonly barHolder;
    private apiTabs;
    private readonly categories;
    private currCategoryType;
    private ribbonVisible;
    forbidChangeActiveTabIndex: boolean;
    constructor(barHolder: ClientBarHolder);
    init(apiRibbon: ApiRibbon): void;
    NotifySelectionChanged(selection: Selection): void;
    private setActiveTab;
    private setState;
}
//# sourceMappingURL=active-context-tab-manager.d.ts.map