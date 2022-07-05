import { MisspelledInterval } from '../../../core/spelling/intervals';
import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ChangeSpellingErrorCommandBase } from './change-spelling-error-command-base';
export declare class ChangeAllSpellingErrorsCommand extends ChangeSpellingErrorCommandBase {
    isEnabled(): boolean;
    protected isVisible(selectedMisspelledInterval: MisspelledInterval): boolean;
    executeCore(state: SimpleCommandState, options: CommandSimpleOptions<string>): boolean;
}
//# sourceMappingURL=change-all-spelling-errors-command.d.ts.map