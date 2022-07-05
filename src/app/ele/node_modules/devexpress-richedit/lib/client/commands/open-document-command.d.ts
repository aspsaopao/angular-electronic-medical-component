import { CommandBase, CommandSimpleOptions } from '../../base/commands/command-base';
import { SimpleCommandState } from '../../base/commands/command-states';
import { DocumentFormat } from '../../core/document-format';
export declare class OpenDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<FileInfo>): boolean;
    private suppressUpdateFields;
    private executeOpening;
    private showErrorDialog;
    updateSomeFields(): void;
    private beforeOpen;
    private openCore;
    isEnabled(): boolean;
    isEnabledInClosedDocument(): boolean;
    isEnabledInReadOnlyMode(): boolean;
    private static getFileAndDocumentFormat;
    private static getDocumentFormatByFileName;
    static getFileNameWithoutExtension(fileName: string, format: DocumentFormat): string;
}
export declare type ImportDocumentCallback = (importSuccess: boolean, importFailReason: string | null) => void;
export declare class FileInfo {
    fileContent: File | Blob | ArrayBuffer | string;
    fileName: string;
    documentFormat: DocumentFormat;
    callback: ImportDocumentCallback | null;
    constructor(callback: ImportDocumentCallback | null, fileContent: File | Blob | ArrayBuffer | string, fileName?: string, documentFormat?: DocumentFormat);
}
//# sourceMappingURL=open-document-command.d.ts.map