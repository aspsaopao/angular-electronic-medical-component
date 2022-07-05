import { MisspelledInterval } from '../../../core/spelling/intervals';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { SpellingCommandBase } from './spelling-command-base';
export declare class AddWordToDictionary extends SpellingCommandBase {
    isEnabled(): boolean;
    protected isVisible(selectedMisspelledInterval: MisspelledInterval): boolean;
    executeCore(state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=add-word-to-dictionary-command.d.ts.map