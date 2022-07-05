import { ClientRichEdit } from '../../client-rich-edit';
import { RichEdit } from '../rich-edit';
import { NusaCommandSet, NusaCustomContainerType, NusaCustomControlType, NusaPlaceholder } from './external-types';
export interface NusaRegisterOptions {
    customControlType?: string;
    customContainerType?: string;
    conceptName?: string;
}
export declare class NusaSettings {
    private _richEditsHolder;
    private _native;
    private _registered;
    get registered(): boolean;
    constructor(native: ClientRichEdit);
    getFocusedRichEdit(): RichEdit | null;
    registerCommands(options?: {
        customizeCommands?: (commandSets: NusaCommandSet[], placeholders: NusaPlaceholder[]) => void;
    }): void;
    getCommandHandler(): (commandId: string, placeholderIds: string[], placeholderValues: string[]) => boolean;
    getCustomControl(): NusaCustomControlType | null;
    getCustomContainer(): NusaCustomContainerType | null;
    unregister(): void;
    register(options?: NusaRegisterOptions): void;
}
//# sourceMappingURL=settings.d.ts.map