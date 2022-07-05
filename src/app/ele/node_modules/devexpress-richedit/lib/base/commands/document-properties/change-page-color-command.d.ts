import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare class ChangePageColorCommand extends CommandBase<SimpleCommandState> {
    getState(): ICommandState;
    executeCore(_state: ICommandState, parameter: CommandSimpleOptions<number>): boolean;
    isEnabled(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
}
//# sourceMappingURL=change-page-color-command.d.ts.map