import { Shape } from '../../../core/model/shapes/shape';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeFloatingObjectShapeCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    canModify(): boolean;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<Shape>): boolean;
    getValue(): Shape;
}
export declare abstract class ChangeShapePropertyCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    abstract getValue(shape: Shape): any;
}
export declare class ChangeShapeFillColorCommand extends ChangeShapePropertyCommandBase {
    getState(): SimpleCommandState;
    DEPRECATEDConvertOptionsParameter(parameter: any): any;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    getValue(shape: Shape): number;
}
export declare class ChangeShapeOutlineColorCommand extends ChangeShapePropertyCommandBase {
    getState(): SimpleCommandState;
    DEPRECATEDConvertOptionsParameter(parameter: any): any;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    getValue(shape: Shape): number;
}
export declare class ChangeShapeOutlineWidthCommand extends ChangeShapePropertyCommandBase {
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<number>): boolean;
    getValue(shape: Shape): number;
}
//# sourceMappingURL=change-shape-property-command.d.ts.map