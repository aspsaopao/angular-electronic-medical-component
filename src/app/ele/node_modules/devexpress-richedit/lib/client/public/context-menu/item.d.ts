import { CommandId } from '../commands/enum';
export interface IContextMenuItemOptions {
    text?: string;
    localizationId?: string;
    beginGroup?: boolean;
    icon?: string;
    disabled?: boolean;
    visible?: boolean;
    items?: ContextMenuItem[];
}
export declare class ContextMenuItem {
    text: string;
    localizationId?: string;
    id: CommandId | string;
    disabled: boolean;
    visible: boolean;
    beginGroup: boolean;
    items?: ContextMenuItem[];
    icon?: string;
    constructor(id: CommandId | string, options: IContextMenuItemOptions);
}
export declare function cloneContextMenuItem(item: ContextMenuItem): ContextMenuItem;
//# sourceMappingURL=item.d.ts.map