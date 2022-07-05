import { FormatterManager } from '../../../core/layout-formatter/managers/formatter-manager';
import { ChangeCaseHistoryItemBase } from '../../../core/model/history/items/text-run-change-case-history-item';
import { ModelManipulator } from '../../../core/model/manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../core/model/sub-document';
import { ISelectionBase } from '../../../core/selection/selection-base';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
declare type HistItemConstructor = new (modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, selection: ISelectionBase, layoutFormatterManager: FormatterManager) => ChangeCaseHistoryItemBase;
export declare class ChangeTextCaseCommandBaseBase extends CommandBase<IntervalCommandStateEx> {
    getActualIntervals(): FixedInterval[];
    getState(): IntervalCommandStateEx;
    isEnabled(): boolean;
}
export declare abstract class ChangeTextCaseCommandBase extends ChangeTextCaseCommandBaseBase {
    getActualInterval(): FixedInterval;
    getState(): IntervalCommandStateEx;
    isEnabled(): boolean;
    executeCore(state: IntervalCommandStateEx, _options: CommandOptions): boolean;
    protected abstract getHistoryItemName(): HistItemConstructor;
}
export declare class CapitalizeEachWordCaseCommand extends ChangeTextCaseCommandBase {
    protected getHistoryItemName(): HistItemConstructor;
}
export declare class MakeTextLowerCaseCommand extends ChangeTextCaseCommandBase {
    protected getHistoryItemName(): HistItemConstructor;
}
export declare class MakeTextUpperCaseCommand extends ChangeTextCaseCommandBase {
    protected getHistoryItemName(): HistItemConstructor;
}
export declare class ToggleTextCaseCommand extends ChangeTextCaseCommandBase {
    protected getHistoryItemName(): HistItemConstructor;
}
export declare class SentenceCaseCommand extends ChangeTextCaseCommandBase {
    protected getHistoryItemName(): HistItemConstructor;
}
export declare class SwitchTextCaseCommand extends ChangeTextCaseCommandBaseBase {
    executeCore(state: IntervalCommandStateEx, options: CommandOptions): boolean;
    private getCommand;
}
export {};
//# sourceMappingURL=change-text-case-commands.d.ts.map