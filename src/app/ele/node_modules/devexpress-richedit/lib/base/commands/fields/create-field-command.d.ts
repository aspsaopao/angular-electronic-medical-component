import { SubDocument, SubDocumentInterval } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
export declare abstract class CreateFieldCommandBase extends CommandBase<IntervalCommandState> {
    getState(): IntervalCommandState;
    static isTableProtectionOk(subDocumentInreval: SubDocumentInterval): boolean;
    isEnabled(): boolean;
    abstract executeCore(state: IntervalCommandState, parameter: any): boolean;
    static getIntervalWithoutLastParagraphMark(interval: FixedInterval, subDocument: SubDocument): FixedInterval;
}
export declare class CreateFieldCommand extends CreateFieldCommandBase {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: IntervalCommandState, options: ICommandOptions): boolean;
}
export declare abstract class CreatePredefinedFieldCommand extends CreateFieldCommandBase {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: IntervalCommandState, options: CommandSimpleOptions<string>): boolean;
    abstract getInsertedText(parameter: string): string;
    needUpdate(): boolean;
    needNewParagraph(): boolean;
    getPrefix(): string;
}
export declare class CreateFieldWithCodeCommand extends CreatePredefinedFieldCommand {
    getInsertedText(code: string): string;
}
export declare class CreatePageFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
}
export declare class CreatePageCountFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
}
export declare class CreateDateFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
}
export declare class CreateTimeFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
}
export declare class CreateMergeFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(parameter: string): string;
}
export declare class CreateEmptyMergeFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
    needUpdate(): boolean;
}
export declare class CreateEmptyDocVariableFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
    needUpdate(): boolean;
}
export declare abstract class CreateTableOfContentCommandBase extends CreatePredefinedFieldCommand {
    isEnabled(): boolean;
    getInsertedText(_parameter: string): string;
    needNewParagraph(): boolean;
}
export declare class CreateTocFieldCommand extends CreateTableOfContentCommandBase {
    getInsertedText(_parameter: string): string;
}
export declare class CreateTableOfEquationsFieldCommand extends CreateTableOfContentCommandBase {
    getInsertedText(_parameter: string): string;
}
export declare class CreateTableOfFiguresFieldCommand extends CreateTableOfContentCommandBase {
    getInsertedText(_parameter: string): string;
}
export declare class CreateTableOfTablesFieldCommand extends CreateTableOfContentCommandBase {
    getInsertedText(_parameter: string): string;
}
export declare class CreateEquationCaptionFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
    getPrefix(): string;
}
export declare class CreateFigureCaptionFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
    getPrefix(): string;
}
export declare class CreateTableCaptionFieldCommand extends CreatePredefinedFieldCommand {
    getInsertedText(_parameter: string): string;
    getPrefix(): string;
}
//# sourceMappingURL=create-field-command.d.ts.map