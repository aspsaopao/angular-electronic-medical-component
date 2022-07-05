import { CommandBase, CommandSimpleOptions } from '../../base/commands/command-base';
import { SimpleCommandState } from '../../base/commands/command-states';
import { MergeMode } from '../../base/commands/dialogs/dialog-finish-and-merge-command';
import { DocumentFormat } from '../../core/document-format';
import { IModelManager } from '../../core/model-manager';
export declare class MailMergeCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabledInReadOnlyMode(): boolean;
    isEnabled(): boolean;
    canModify(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<MailMergeCommandParameters>): boolean;
    prepareMergedDocument(modelManager: IModelManager, param: MailMergeCommandParameters): void;
    private getDataSource;
    private replaceMergeFieldsInModel;
    private replaceMergeFieldsInSubDocument;
    private getResultByFieldName;
    private insertSeparator;
    private createModelManager;
}
export declare class MailMergeCommandParameters {
    callback: (blob: Blob) => void;
    exportFrom: number;
    exportRecordsCount: number;
    mergeMode: MergeMode;
    documentFormat: DocumentFormat;
    constructor(callback: (blob: Blob) => void, mergeMode: MergeMode, documentFormat: DocumentFormat, exportFrom?: number, exportRecordsCount?: number);
}
//# sourceMappingURL=mail-merge-command.d.ts.map