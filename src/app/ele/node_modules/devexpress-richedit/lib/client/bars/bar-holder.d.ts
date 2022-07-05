import { IBarHolder } from '../../base/bars/interfaces';
import { RichEditCore } from '../../base/rich-edit-core';
import { HorizontalRulerControl } from '../../base/ui/ruler/ruler';
import { CommandId } from '../public/commands/enum';
import { ClientPublicUiChangesListener } from '../public/commands/ui-changes-listener';
import { ClientContextMenuBar } from './context-menu';
import { ClientRibbonBar } from './ribbon';
export declare class ClientBarHolder implements IBarHolder {
    ribbon: ClientRibbonBar | null;
    contextMenu: ClientContextMenuBar;
    horizontalRuler: HorizontalRulerControl;
    publicUiChangesListener: ClientPublicUiChangesListener;
    constructor(ribbon: ClientRibbonBar | null, contextMenu: ClientContextMenuBar, raiseUpdatePublicUi: (commands: null | CommandId[]) => void);
    initialize(core: RichEditCore): void;
    updateItemsState(queryCommands?: Record<number, boolean>): void;
    setEnabled(_value: boolean): void;
    removeRibbonBar(): void;
    dispose(): void;
    forceUpdate(queryCommands?: Record<number, boolean>): void;
    enableUpdate(value: boolean): void;
}
//# sourceMappingURL=bar-holder.d.ts.map