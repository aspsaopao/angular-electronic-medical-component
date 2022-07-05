import { IModelChangesListener } from '../../core/interfaces/model-changes-listener';
import { IBatchUpdatableObject, IBatchUpdatableObjectExtend } from '@devexpress/utils/lib/class/batch-updatable';
import { RichEditClientCommand } from '../commands/client-command';
import { RichEditCore } from '../rich-edit-core';
import { ISelectionChangesListener } from '../selection/i-selection-changes-listener';
import { IRulerControl } from '../ui/ruler/ruler';
export interface IRibbonBar extends IBatchUpdatableObjectExtend, ISelectionChangesListener, IModelChangesListener {
    activate?(): void;
    onCanvasMouseDown(): void;
    updateItemsState(queryCommands?: Record<number, boolean>): void;
    getItem?(command: RichEditClientCommand): any | null;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    updateEnabled: boolean;
}
export interface IContextMenuBar extends IBatchUpdatableObject, ISelectionChangesListener, IModelChangesListener {
    onCanvasMouseDown(): void;
    updateItemsState(queryCommands?: Record<number, boolean>): void;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    updateEnabled: boolean;
}
export interface IPublicUiChangesListener extends IBatchUpdatableObject, ISelectionChangesListener, IModelChangesListener {
    forceUpdate(queryCommands?: Record<number, boolean>): void;
}
export interface IBarHolder {
    ribbon: IRibbonBar | null;
    contextMenu: IContextMenuBar;
    horizontalRuler: IRulerControl;
    publicUiChangesListener: IPublicUiChangesListener;
    updateItemsState(queryCommands?: Record<number, boolean>): void;
    setEnabled(value: boolean): void;
    initialize(core: RichEditCore): void;
    dispose?(): void;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    enableUpdate(value: boolean): void;
}
//# sourceMappingURL=interfaces.d.ts.map