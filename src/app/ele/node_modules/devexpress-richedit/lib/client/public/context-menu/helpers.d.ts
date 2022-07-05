import { CommandId } from '../commands/enum';
import { RibbonItemId } from '../ribbon/item-ids';
import { ContextMenuItem } from './item';
export declare function removeContextMenuItem(items: ContextMenuItem[], id: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem | null;
export declare function getContextMenuItem(items: ContextMenuItem[], id: CommandId | RibbonItemId): ContextMenuItem | null;
export declare function insertItemBefore(items: ContextMenuItem[], item: ContextMenuItem, targetBefore: ContextMenuItem | CommandId | RibbonItemId): void;
export declare function insertItemAfter(items: ContextMenuItem[], item: ContextMenuItem, targetAfter: ContextMenuItem | CommandId | RibbonItemId): void;
//# sourceMappingURL=helpers.d.ts.map