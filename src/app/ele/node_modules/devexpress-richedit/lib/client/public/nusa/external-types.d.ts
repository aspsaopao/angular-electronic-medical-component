export interface NusaCustomControlType {
    newlineFormat: string;
    paragraphFormat: string;
    replaceText(element: HTMLElement, text: string, fromPos: number, length: number): void;
    getText(element: HTMLElement): string;
    getSelectionText(element: HTMLElement): string;
    getSelection(element: HTMLElement): {
        start: number;
        length: number;
    };
    setSelection(element: HTMLElement, start: number, length: number): void;
}
export interface NusaCustomContainerType {
    getFocussedElement(containerElement: HTMLElement): HTMLElement;
    setFocussedElement(element: HTMLElement): void;
}
export declare type NusaRichEditPlaceholderId = 'DxReColorName';
export declare type NusaCommandId = 'DxReFontColor' | 'DxReFontSize';
export interface NusaCommand {
    commandId: NusaCommandId;
    phrase: string;
    title: string | null;
    description: string;
}
export interface NusaCommandSet {
    title: string;
    description: string;
    commands: NusaCommand[];
}
export interface NusaPlaceholder {
    id: NusaRichEditPlaceholderId;
    description: string;
    values: ({
        spokenForm: string;
        value: string;
    } | string[])[];
}
export declare function WRE_registerCommands(commandSets: NusaCommandSet[], placeholders: NusaPlaceholder[]): void;
export declare function WRE_NUSA_registerCustomControlType(customControlTypeName: string, callback: (control: NusaCustomControlType) => void): void;
export declare function WRE_NUSA_reinitializeVuiForm(): void;
export declare function WRE_NUSA_registerCustomContainerType(customContainerTypeName: string, callback: (control: NusaCustomContainerType) => void): void;
export declare const WRE_NUSA_controlTypeAttr: string;
export declare const WRE_NUSA_containerTypeAttr: string;
export declare const WRE_NUSA_enabledAttr: string;
export declare const WRE_NUSA_conceptNameAttr: string;
//# sourceMappingURL=external-types.d.ts.map