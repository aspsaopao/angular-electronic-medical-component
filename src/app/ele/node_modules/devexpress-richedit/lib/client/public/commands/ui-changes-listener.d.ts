import { IPublicUiChangesListener } from '../../../base/bars/interfaces';
import { Selection } from '../../../base/selection/selection';
import { ModelChange } from '../../../core/model/changes/change';
import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { CommandId } from './enum';
export declare enum UiEventType {
    None = 0,
    FullReset = 1,
    CheckSelectionChange = 2,
    PartialReset = 4
}
export declare class ClientPublicUiChangesListener extends BatchUpdatableObject implements IPublicUiChangesListener {
    private _raiseUpdate;
    private selection;
    updateEnabled: boolean;
    private _occuredEvents;
    private queryCommands?;
    constructor(_raiseUpdate: (commands: null | CommandId[]) => void);
    onUpdateUnlocked(): void;
    modelChanged(change: ModelChange): void;
    NotifySelectionChanged(selection: Selection): void;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    private getModelChangeEvent;
    private applyEvents;
    private raiseUpdate;
    private getSelectionChangeEvent;
    protected checkActivateHeaderFooter(selection: Selection): boolean;
    private addCommands;
}
//# sourceMappingURL=ui-changes-listener.d.ts.map