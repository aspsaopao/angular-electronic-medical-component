import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class RulerParagraphLeftIndentsCommandValue extends CommandOptions {
    hanging: number;
    firstLine: number;
    constructor(control: IRichEditControl, hanging: number, firstLine: number);
}
export declare class RulerParagraphLeftIndentsCommand extends CommandBase<SimpleCommandState> {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    getState(options?: CommandOptions): SimpleCommandState;
    protected getIntervalsForModifying(): FixedInterval[];
    executeCore(_state: SimpleCommandState, options: RulerParagraphLeftIndentsCommandValue): boolean;
}
export declare class RulerParagraphRightIndentCommand extends CommandBase<SimpleCommandState> {
    getState(options?: CommandOptions): SimpleCommandState;
    protected getIntervalsForModifying(): FixedInterval[];
    executeCore(state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
}
//# sourceMappingURL=ruler-paragraph-indents-command.d.ts.map