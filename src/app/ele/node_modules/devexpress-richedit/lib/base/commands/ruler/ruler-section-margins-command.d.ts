import { LayoutAnchoredTextBox } from '../../../core/layout/main-structures/layout-boxes/layout-anchored-text-box';
import { CommandBase, CommandOptions, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
export declare abstract class RulerSectionMarginCommandBase extends CommandBase<IntervalCommandState> {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    getLayoutTextBox(): LayoutAnchoredTextBox;
    isEnabled(_options: ICommandOptions): boolean;
}
export declare class RulerSectionMarginLeftCommand extends RulerSectionMarginCommandBase {
    getState(options?: CommandOptions): IntervalCommandState;
    executeCore(_state: IntervalCommandState, options: CommandSimpleOptions<number>): boolean;
}
export declare class RulerSectionMarginRightCommand extends RulerSectionMarginCommandBase {
    getState(options?: CommandOptions): IntervalCommandState;
    executeCore(state: IntervalCommandState, options: CommandSimpleOptions<number>): boolean;
}
//# sourceMappingURL=ruler-section-margins-command.d.ts.map