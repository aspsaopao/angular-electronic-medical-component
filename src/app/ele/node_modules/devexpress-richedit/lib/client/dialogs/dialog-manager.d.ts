import { ClientRichEditCore } from '../client-rich-edit-core';
import { IDialog } from './i-dialog';
export declare class DialogManager {
    private dialogsMap;
    private dialogElement;
    private richedit;
    constructor(container: HTMLElement, richedit: ClientRichEditCore);
    dispose(): void;
    getDialog<T extends IDialog>(name: string): T;
    private getDialogByType;
}
//# sourceMappingURL=dialog-manager.d.ts.map