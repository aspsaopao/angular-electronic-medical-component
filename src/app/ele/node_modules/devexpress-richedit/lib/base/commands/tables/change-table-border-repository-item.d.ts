import { BorderLineStyle } from '../../../core/model/borders/enums';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTableBorderColorRepositoryItemCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    DEPRECATEDConvertOptionsParameter(parameter: any): number;
}
export declare class ChangeTableBorderWidthRepositoryItemCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
}
export declare class ChangeTableBorderStyleRepositoryItemCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<BorderLineStyle>): boolean;
}
//# sourceMappingURL=change-table-border-repository-item.d.ts.map