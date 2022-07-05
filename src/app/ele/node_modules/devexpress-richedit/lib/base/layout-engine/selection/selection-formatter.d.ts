import { EventDispatcher } from '../../../base-utils/event-dispatcher';
import { ILayoutChangesListener } from '../../../core/interfaces/i-document-layout-changes-listener';
import { IModelChangesListener } from '../../../core/interfaces/model-changes-listener';
import { PageChange } from '../../../core/layout-formatter/changes/changes/page-change';
import { LayoutPage } from '../../../core/layout/main-structures/layout-page';
import { LayoutSelection } from '../../../core/layout/selection/layout-selection';
import { IMeasurer } from '../../../core/measurer/measurer';
import { ModelChange } from '../../../core/model/changes/change';
import { DocumentProtectionSettings } from '../../../core/model/options/protection';
import { SubDocument } from '../../../core/model/sub-document';
import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { ISelectionLayoutChangesListener } from '../../interfaces/i-selection-layout-changes-listener';
import { IMisspelledSelectionChangesListener, ISearchSelectionChangesListener, ISelectionChangesListener } from '../../selection/i-selection-changes-listener';
import { Selection } from '../../selection/selection';
export declare enum SimpleSelectionLayoutType {
    Search = 0,
    Misspelled = 1,
    RangePermission = 2
}
export declare class SelectionFormatter extends BatchUpdatableObject implements ILayoutChangesListener, ISelectionChangesListener, ISearchSelectionChangesListener, IMisspelledSelectionChangesListener, IModelChangesListener {
    private measurer;
    private selection;
    layoutSelection: LayoutSelection;
    private documentProtectionSettings;
    onSelectionLayoutChanged: EventDispatcher<ISelectionLayoutChangesListener>;
    private static itemConstructorsMap;
    private get highlightRanges();
    constructor(selection: Selection, measurer: IMeasurer, layoutSelection: LayoutSelection, documentProtectionSettings: DocumentProtectionSettings);
    modelChanged(change: ModelChange): void;
    onRangePermissionPropertiesChanged(): void;
    NotifySelectionChanged(_selection: Selection): void;
    NotifySearchSelectionChanged(): void;
    NotifyMisspelledSelectionChanged(): void;
    NotifyPagesReady(pageChanges: PageChange[]): void;
    NotifyFullyFormatted(_pageCount: number): void;
    onUpdateUnlocked(_occurredEvents: number): void;
    private selectionChanged;
    private updateSubDocumentInfo;
    private buildContiniousSelection;
    private buildPageSelection;
    private buildRangePermissionSelection;
    private createCollapsedSelectionLayout;
    private createExtendedSelectionLayout;
    private static isCellFullySelected;
    private static translateInteralsToIterators;
    private intersectModelIntervalsWithValidPageIntervals;
    private createSimpleLayout;
    private raiseSelectionLayoutChanged;
    private raiseSearchSelectionLayoutChanged;
    private raiseMisspelledSelectionLayoutChanged;
    private raiseRangePermissionLayoutChanged;
    private static setPositionOnVisibleBox;
    static getFloatingObjId(subDocument: SubDocument, page: LayoutPage): number;
}
//# sourceMappingURL=selection-formatter.d.ts.map