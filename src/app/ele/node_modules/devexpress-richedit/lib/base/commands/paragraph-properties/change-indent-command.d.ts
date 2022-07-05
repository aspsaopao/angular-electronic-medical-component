import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { RichEditClientCommand } from '../client-command';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class ChangeIndentCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
    protected getIntervalsForModifying(): FixedInterval[];
    abstract processParagraphIndentsCommandId(): RichEditClientCommand;
    abstract processNumberingIndentsCommandId(): RichEditClientCommand;
    private shouldProcessAsNumberingParagraphs;
}
export declare class DecrementIndentCommand extends ChangeIndentCommandBase {
    processParagraphIndentsCommandId(): RichEditClientCommand;
    processNumberingIndentsCommandId(): RichEditClientCommand;
}
export declare class IncrementIndentCommand extends ChangeIndentCommandBase {
    processParagraphIndentsCommandId(): RichEditClientCommand;
    processNumberingIndentsCommandId(): RichEditClientCommand;
}
//# sourceMappingURL=change-indent-command.d.ts.map