import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class SelectionCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=selection-command-base.d.ts.map