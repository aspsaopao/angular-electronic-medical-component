import { ClientRichEdit } from '../../client-rich-edit';
import { CommandId } from '../commands/enum';
import { RibbonItemId } from '../ribbon/item-ids';
import { ContextMenuItem } from './item';
export interface IContextMenu {
    enabled: boolean;
    items: ContextMenuItem[];
    getItem(id: CommandId | RibbonItemId): ContextMenuItem | null;
    removeItem(item: ContextMenuItem): ContextMenuItem | null;
    removeItem(id: CommandId | RibbonItemId): ContextMenuItem | null;
    insertItem(item: ContextMenuItem, index?: number): ContextMenuItem;
    insertItemBefore(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
    insertItemAfter(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
}
export declare class ContextMenuRuntime implements IContextMenu {
    private _native;
    get enabled(): boolean;
    set enabled(value: boolean);
    get items(): ContextMenuItem[];
    constructor(native: ClientRichEdit);
    getItem(id: CommandId | RibbonItemId): ContextMenuItem | null;
    removeItem(itemOrId: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem | null;
    insertItem(item: ContextMenuItem, index?: number): ContextMenuItem;
    insertItemBefore(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
    insertItemAfter(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
}
export declare class SimpleContextMenu implements IContextMenu {
    _items?: ContextMenuItem[];
    private readonly _getItems;
    enabled: boolean;
    get items(): ContextMenuItem[];
    set items(value: ContextMenuItem[]);
    constructor(enabled?: boolean, getItems?: (() => ContextMenuItem[]));
    getItem(id: CommandId | RibbonItemId): ContextMenuItem | null;
    removeItem(itemOrId: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem | null;
    insertItem(item: ContextMenuItem, index?: number): ContextMenuItem;
    insertItemBefore(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
    insertItemAfter(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
}
//# sourceMappingURL=menu.d.ts.map