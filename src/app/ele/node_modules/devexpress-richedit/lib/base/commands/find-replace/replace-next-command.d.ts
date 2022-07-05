import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ReplaceAllCommandOptions } from './replace-all-command';
export declare class ReplaceNextCommandOptions extends ReplaceAllCommandOptions {
}
export declare class ReplaceNextCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: ReplaceNextCommandOptions): boolean;
}
//# sourceMappingURL=replace-next-command.d.ts.map