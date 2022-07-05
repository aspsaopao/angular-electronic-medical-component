import { DocumentFormat } from '../../../core/document-format';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogFinishAndMergeCommand extends ShowDialogCommandBase<FinishAndMergeDialogParameters> {
    getState(): ICommandState;
    isEnabledInReadOnlyMode(): boolean;
    isEnabled(): boolean;
    protected canModify(): boolean;
    createParameters(_options: ICommandOptions): FinishAndMergeDialogParameters;
    getDialogName(): string;
}
export declare class FinishAndMergeDialogParameters extends DialogParametersBase implements ISupportCopyFrom<FinishAndMergeDialogParameters>, ICloneable<FinishAndMergeDialogParameters> {
    range: MailMergeExportRange;
    exportFrom: number;
    exportRecordsCount: number;
    mergeMode: MergeMode;
    documentFormat: DocumentFormat;
    copyFrom(obj: FinishAndMergeDialogParameters): void;
    clone(): FinishAndMergeDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare enum MergeMode {
    NewParagraph = 0,
    NewSection = 1,
    JoinTables = 2
}
export declare enum MailMergeExportRange {
    AllRecords = 0,
    CurrentRecord = 1,
    Range = 2
}
//# sourceMappingURL=dialog-finish-and-merge-command.d.ts.map