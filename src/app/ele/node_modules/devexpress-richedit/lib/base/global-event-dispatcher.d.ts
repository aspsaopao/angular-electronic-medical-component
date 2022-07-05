import { ILayoutChangesListener } from '../core/interfaces/i-document-layout-changes-listener';
import { IModelChangesListener } from '../core/interfaces/model-changes-listener';
import { PageChange } from '../core/layout-formatter/changes/changes/page-change';
import { ModelChange } from '../core/model/changes/change';
import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { IRichEditControl } from './interfaces/i-rich-edit-core';
import { ISelectionChangesListener } from './selection/i-selection-changes-listener';
import { Selection } from './selection/selection';
import { ContentInsertedSubDocumentChange } from '../core/model/changes/change-base';
declare type EventAction = () => void;
declare enum PublicApiEventType {
    None = 0,
    DocumentLoaded = 1,
    ModelChanged = 2,
    SelectionChanged = 3,
    DocumentFormatted = 4
}
declare class PublicEvent {
    type: PublicApiEventType;
    action: EventAction;
    change: ModelChange | null;
    constructor(type: PublicApiEventType, action: EventAction, change: ModelChange | null);
}
export declare class GlobalEventDispatcher extends BatchUpdatableObject implements ISelectionChangesListener, ILayoutChangesListener, IModelChangesListener {
    rich: IRichEditControl;
    onModelChanged: () => void;
    private deferredEvents;
    private locked;
    constructor(rich: IRichEditControl, onModelChanged: () => void);
    private addDeferredEvent;
    private isCharacterPropertiesChangedType;
    private equals;
    private handleDeferredEvents;
    tryAppendInsertingEvent(prevEvent: PublicEvent, modelChange: ContentInsertedSubDocumentChange): boolean;
    onUpdateUnlocked(_occurredEvents: number): void;
    private processModelChanged;
    NotifyDocumentLoaded(): void;
    NotifyPagesReady(_pageChanges: PageChange[]): void;
    NotifyFullyFormatted(pageCount: number): void;
    NotifySelectionChanged(selection: Selection): void;
    NotifyScrollPositionChanged(): void;
    modelChanged(change: ModelChange): void;
}
export {};
//# sourceMappingURL=global-event-dispatcher.d.ts.map