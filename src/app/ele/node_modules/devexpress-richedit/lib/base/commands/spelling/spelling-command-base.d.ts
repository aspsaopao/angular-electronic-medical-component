import { MisspelledInterval } from '../../../core/spelling/intervals';
import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class SpellingCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    protected isVisible(selectedMisspelledInterval: MisspelledInterval): boolean;
}
//# sourceMappingURL=spelling-command-base.d.ts.map