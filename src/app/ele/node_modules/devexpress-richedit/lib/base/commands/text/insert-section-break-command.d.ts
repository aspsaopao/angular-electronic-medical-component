import { SectionStartType } from '../../../core/model/section/enums';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class InsertSectionBreakCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
    abstract getStartType(): SectionStartType;
}
export declare class InsertSectionBreakNextPageCommand extends InsertSectionBreakCommand {
    getStartType(): SectionStartType;
}
export declare class InsertSectionBreakEvenPageCommand extends InsertSectionBreakCommand {
    getStartType(): SectionStartType;
}
export declare class InsertSectionBreakOddPageCommand extends InsertSectionBreakCommand {
    getStartType(): SectionStartType;
}
//# sourceMappingURL=insert-section-break-command.d.ts.map