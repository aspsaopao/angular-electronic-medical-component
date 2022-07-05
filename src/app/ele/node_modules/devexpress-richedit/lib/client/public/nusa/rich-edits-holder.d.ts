import { ClientRichEdit } from '../../client-rich-edit';
import { NusaCustomContainerType, NusaCustomControlType } from './external-types';
export declare class RichEditsHolder {
    private _registeredControlTypes;
    private _registeredContainerTypes;
    private _richEdits;
    private getRichEditGlobalObject;
    private getRichs;
    private getRegisteredControlTypes;
    private getRegisteredContainerTypes;
    registerRichEdit(richEdit: ClientRichEdit): void;
    unregisterRichEdit(richEdit: ClientRichEdit): void;
    registerControlType(controlTypeName: string): void;
    registerControlTypeObject(controlTypeName: string, object: NusaCustomControlType): void;
    isControlTypeRegistered(controlTypeName: string): boolean;
    getCustomControl(controlTypeName: string | null): null | NusaCustomControlType;
    registerContainerType(containerTypeName: string): void;
    registerContainerTypeObject(containerTypeName: string, object: NusaCustomContainerType): void;
    isContainerTypeRegistered(containerTypeName: string): boolean;
    getCustomContainer(containerTypeName: string | null): null | NusaCustomContainerType;
    getRichEditByElement(element: HTMLElement): ClientRichEdit | null;
    getFocusedRichEdit(): ClientRichEdit | null;
}
//# sourceMappingURL=rich-edits-holder.d.ts.map