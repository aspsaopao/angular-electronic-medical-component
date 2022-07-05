import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class GoToRecordCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    canModify(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): any;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    protected canNavigate(): boolean;
    protected calculateNextRecordIndex(recordIndex: number): number;
}
export declare class GoToFirstDataRecordCommand extends GoToRecordCommandBase {
    protected canNavigate(): boolean;
    protected calculateNextRecordIndex(_recordIndex: number): number;
}
export declare class GoToPreviousDataRecordCommand extends GoToRecordCommandBase {
    protected canNavigate(): boolean;
    protected calculateNextRecordIndex(recordIndex: number): number;
}
export declare class GoToNextDataRecordCommand extends GoToRecordCommandBase {
    protected canNavigate(): boolean;
    protected calculateNextRecordIndex(recordIndex: number): number;
}
export declare class GoToLastDataRecordCommand extends GoToRecordCommandBase {
    protected canNavigate(): boolean;
    protected calculateNextRecordIndex(_recordIndex: number): number;
}
//# sourceMappingURL=go-to-record-command.d.ts.map