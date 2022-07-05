import { CommandBase, CommandSimpleOptions } from '../../base/commands/command-base';
import { SimpleCommandState } from '../../base/commands/command-states';
import { DocumentFormat } from '../../core/document-format';
export declare class DownloadDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabledInReadOnlyMode(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<DownloadDocumentParameters>): boolean;
    protected download(fileName: string, documentFormat: DocumentFormat): void;
    isEnabled(): boolean;
    canModify(): boolean;
    protected getFileName(options: CommandSimpleOptions<DownloadDocumentParameters>): string;
}
export declare class DownloadDocxCommand extends DownloadDocumentCommand {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<DownloadDocumentParameters>): boolean;
}
export declare class DownloadRtfCommand extends DownloadDocumentCommand {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<DownloadDocumentParameters>): boolean;
}
export declare class DownloadTxtCommand extends DownloadDocumentCommand {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<DownloadDocumentParameters>): boolean;
}
export declare class DownloadDocumentParameters {
    fileName: string;
    documentFormat: DocumentFormat;
    constructor(documentFormat: DocumentFormat, fileName?: string);
}
//# sourceMappingURL=download-document-command.d.ts.map