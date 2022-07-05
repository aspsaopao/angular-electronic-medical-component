import { DocumentFormat } from '../../../core/document-format';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { FinishAndMergeDialogParameters, MergeMode } from './dialog-finish-and-merge-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogSaveFileCommand extends ShowDialogCommandBase<SaveFileDialogParameters> {
    getState(): ICommandState;
    createParameters(_options: ICommandOptions): SaveFileDialogParameters;
    executeCore(state: ICommandState, parameter?: any): boolean;
    applyParameters(_state: ICommandState, params: SaveFileDialogParameters): boolean;
    getDialogName(): string;
    executeShowErrorMessageCommand(): boolean;
    isEnabled(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class SaveFileDialogParameters extends DialogParametersBase implements ISupportCopyFrom<SaveFileDialogParameters>, ICloneable<SaveFileDialogParameters> {
    fileName: string;
    folderPath: string;
    documentFormat: DocumentFormat;
    fileSavedToServer: boolean;
    copyFrom(obj: SaveFileDialogParameters): void;
    clone(): SaveFileDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare class DialogSaveMergedDocumentCommand extends DialogSaveFileCommand {
    createParameters(options: CommandSimpleOptions<FinishAndMergeDialogParameters>): SaveMergedDocumentDialogParameters;
    applyParameters(_state: IntervalCommandState, params: SaveMergedDocumentDialogParameters): boolean;
}
export declare class SaveMergedDocumentDialogParameters extends SaveFileDialogParameters implements ISupportCopyFrom<SaveMergedDocumentDialogParameters>, ICloneable<SaveMergedDocumentDialogParameters> {
    firstRecordIndex: number;
    lastRecordIndex: number;
    mergeMode: MergeMode;
    copyFrom(obj: SaveMergedDocumentDialogParameters): void;
    clone(): SaveMergedDocumentDialogParameters;
    applyConverter(converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-save-file-command.d.ts.map