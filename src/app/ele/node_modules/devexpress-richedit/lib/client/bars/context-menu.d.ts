import { ContextMenuBarBase } from '../../base/bars/context-menu';
import { IContextMenuBar } from '../../base/bars/interfaces';
import { RichEditClientCommand } from '../../base/commands/client-command';
import { IControlOwner } from '../../base/interfaces/i-control-owner';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { ContextMenuItem } from '../public/context-menu/item';
export declare class ClientContextMenuBar extends ContextMenuBarBase implements IContextMenuBar {
    private menu;
    initialItems: ContextMenuItem[];
    private targetElement;
    private cache;
    private menuShowTimerId;
    private ownerElement;
    constructor(ownerControl: IControlOwner, ownerElement: HTMLElement, initialItems?: ContextMenuItem[]);
    onCanvasMouseDown(): void;
    dispose(): void;
    static getInitialItems(): ContextMenuItem[];
    private createControl;
    getCommandKeys(): (RichEditClientCommand | string)[];
    setItemEnabled(key: RichEditClientCommand | string, enabled: boolean): void;
    setItemVisible(key: RichEditClientCommand, visible: boolean): void;
    setItemValue(_key: RichEditClientCommand, _value: any): void;
    hide(): void;
    private createTargetElement;
    private getItemsCache;
    private fillCache;
    show(getPoint: (contextMenuBar: ContextMenuBarBase) => Point): void;
    private addSuggestionItems;
}
//# sourceMappingURL=context-menu.d.ts.map