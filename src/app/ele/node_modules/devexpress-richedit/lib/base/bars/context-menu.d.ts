import { ModelChange } from '../../core/model/changes/change';
import { Selection } from '../selection/selection';
import { BarBase } from './base';
export declare enum ContextMenuEventType {
    None = 0,
    FullReset = 1,
    CheckSelectionChange = 2
}
export declare abstract class ContextMenuBarBase extends BarBase {
    selection: Selection | null;
    isSpellingMenu: boolean;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    protected getSuggestions(): null | undefined | string[];
    onUpdateUnlocked(occurredEvents: ContextMenuEventType): void;
    modelChanged(change: ModelChange): void;
    NotifySelectionChanged(selection: Selection): void;
    private applyEvent;
    private getSelectionChangeEvent;
    private getModelChangeEvent;
}
//# sourceMappingURL=context-menu.d.ts.map