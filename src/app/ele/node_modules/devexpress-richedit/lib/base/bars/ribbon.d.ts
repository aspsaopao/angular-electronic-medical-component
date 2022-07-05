import { ModelChange } from '../../core/model/changes/change';
import { RichEditClientCommand } from '../commands/client-command';
import { Selection } from '../selection/selection';
import { BarBase } from './base';
export declare enum RibbonEventType {
    None = 0,
    FullReset = 1,
    CheckSelectionChange = 2,
    ActivateHeaderFooter = 4
}
export declare abstract class RibbonBarBase extends BarBase {
    private selection;
    protected updateContextItem(commandKey: RichEditClientCommand): void;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    protected checkActivateHeaderFooter(selection: Selection): boolean;
    protected activateHeaderFooter(): void;
    protected abstract setContextItemVisible(key: RichEditClientCommand, visible: boolean): void;
    protected abstract activateContextItem(clientCommand: RichEditClientCommand): void;
    onUpdateUnlocked(occurredEvents: RibbonEventType): void;
    modelChanged(change: ModelChange): void;
    NotifySelectionChanged(selection: Selection): void;
    private applyEvent;
    private getSelectionChangeEvent;
    private getModelChangeEvent;
}
//# sourceMappingURL=ribbon.d.ts.map