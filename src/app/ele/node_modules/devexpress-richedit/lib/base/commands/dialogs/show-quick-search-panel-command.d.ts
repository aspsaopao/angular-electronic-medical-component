import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ShowQuickSearchPanelCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=show-quick-search-panel-command.d.ts.map