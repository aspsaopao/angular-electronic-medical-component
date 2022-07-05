import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class InsertHeaderFooterCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabledInReadOnlyMode(): boolean;
    isEnabled(): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): any;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    protected abstract isHeader(): boolean;
}
export declare class InsertHeaderCommand extends InsertHeaderFooterCommandBase {
    protected isHeader(): boolean;
}
export declare class InsertFooterCommand extends InsertHeaderFooterCommandBase {
    protected isHeader(): boolean;
}
//# sourceMappingURL=insert-header-footer-commands.d.ts.map