import { MisspelledInterval } from '../../../core/spelling/intervals';
import { CommandBase, CommandOptions, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ChangeSpellingErrorCommandBase } from './change-spelling-error-command-base';
export declare class ChangeSpellingErrorCommand extends ChangeSpellingErrorCommandBase {
    isEnabled(): boolean;
    protected isVisible(selectedMisspelledInterval: MisspelledInterval): boolean;
    executeCore(state: SimpleCommandState, options: CommandSimpleOptions<string>): boolean;
}
export declare class NoSpellingSuggestionsCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, _options: CommandOptions): boolean;
}
//# sourceMappingURL=change-spelling-error-command.d.ts.map