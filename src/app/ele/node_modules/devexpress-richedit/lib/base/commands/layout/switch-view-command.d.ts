import { ViewType } from '../../../core/view-settings/views-settings';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeViewTypeCommand extends CommandBase<SimpleCommandState> {
    protected getRelatedCommands(): Record<number, boolean>;
    isEnabledInReadOnlyMode(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<ViewType>): boolean;
    getState(): SimpleCommandState;
    updateControlState(): void;
}
export declare class SwitchToPrintLayoutViewCommand extends ChangeViewTypeCommand {
    DEPRECATEDConvertOptionsParameter(_parameter: any): ViewType;
    getState(): SimpleCommandState;
}
export declare class SwitchToSimpleViewCommand extends ChangeViewTypeCommand {
    DEPRECATEDConvertOptionsParameter(_parameter: any): ViewType;
    getState(): SimpleCommandState;
}
//# sourceMappingURL=switch-view-command.d.ts.map