import { CommandBase, CommandSimpleOptions } from '../../base/commands/command-base';
import { SimpleCommandState } from '../../base/commands/command-states';
import { DocumentFormat } from '../../core/document-format';
export declare class ExportDocumentCommandOptions {
    documentFormat?: DocumentFormat;
    reason?: string;
    documentName?: string;
    constructor(documentFormat?: DocumentFormat, reason?: string, documentName?: string);
}
export declare class ExportDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    DEPRECATEDConvertOptionsParameter(parameter: ExportDocumentCommandOptions | any): any;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<ExportDocumentCommandOptions>): boolean;
    private getExportDocumentFormat;
    base64: string;
    private exportCore;
    isEnabled(): boolean;
    canModify(): boolean;
}
//# sourceMappingURL=export-document-command.d.ts.map