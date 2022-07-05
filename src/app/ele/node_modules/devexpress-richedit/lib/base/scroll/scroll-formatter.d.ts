import { EventDispatcher } from '../../base-utils/event-dispatcher';
import { ILayoutChangesListener } from '../../core/interfaces/i-document-layout-changes-listener';
import { PageChange } from '../../core/layout-formatter/changes/changes/page-change';
import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { IScrollLayoutChangesListener } from '../interfaces/i-selection-layout-changes-listener';
import { IScrollChangesListener } from '../selection/i-selection-changes-listener';
import { Selection } from '../selection/selection';
export declare class ScrollFormatter extends BatchUpdatableObject implements ILayoutChangesListener, IScrollChangesListener {
    private selection;
    onScrollLayoutChanged: EventDispatcher<IScrollLayoutChangesListener>;
    private canvasState;
    constructor(selection: Selection);
    NotifyPagesReady(_pageChanges: PageChange[]): void;
    NotifyFullyFormatted(_pageCount: number): void;
    NotifyScrollChanged(): void;
    onUpdateUnlocked(_occurredEvents: number): void;
    private process;
    private raiseScrollChanged;
}
//# sourceMappingURL=scroll-formatter.d.ts.map