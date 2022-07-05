import { MisspelledInterval } from '../../../core/spelling/intervals';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { SpellingCommandBase } from './spelling-command-base';
export declare class DeleteRepeatedWordCommand extends SpellingCommandBase {
    protected isVisible(selectedMisspelledInterval: MisspelledInterval): boolean;
    executeCore(state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=delete-repeated-word-command.d.ts.map