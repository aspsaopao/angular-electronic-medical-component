import { BatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { RichEditClientCommand } from '../commands/client-command';
import { IControlOwner } from '../interfaces/i-control-owner';
import { RichEditCore } from '../rich-edit-core';
export declare abstract class BarBase extends BatchUpdatableObject {
    protected core: RichEditCore;
    protected owner: IControlOwner;
    updateEnabled: boolean;
    protected get isInitialized(): boolean;
    constructor(owner: IControlOwner);
    initialize(core: RichEditCore): void;
    abstract onUpdateUnlocked(occurredEvents: number): void;
    protected abstract setItemVisible(command: RichEditClientCommand, visible: boolean): void;
    protected abstract setItemEnabled(key: RichEditClientCommand | string, enabled: boolean): void;
    protected abstract getCommandKeys(): (RichEditClientCommand | string)[];
    updateItemsState(queryCommands?: Record<number, boolean>): void;
    protected updateBarItem(commandKey: RichEditClientCommand | string): void;
    protected raiseBarCommandExecuted(command: RichEditClientCommand | string, parameter: any): void;
    isVisible(): boolean;
    protected setItemSubItems(_key: RichEditClientCommand, _subItems: any[]): any;
    protected setItemValue(_key: RichEditClientCommand, _value: any): any;
    protected getContextKeys(): RichEditClientCommand[];
    protected updateContextItem(_commandKey: RichEditClientCommand): void;
    private getItemValue;
}
//# sourceMappingURL=base.d.ts.map