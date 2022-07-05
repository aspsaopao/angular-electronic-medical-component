import { AnchorObjectHorizontalPositionAlignment, AnchorObjectHorizontalPositionType, AnchorObjectTextWrapSide, AnchorObjectTextWrapType, AnchorObjectVerticalPositionAlignment, AnchorObjectVerticalPositionType } from '../../floating-objects/enums';
import { BaseManipulator } from '../base-manipulator';
import { IIntervalPropertyManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class AnchorInfoManipulator extends BaseManipulator {
    allowOverlap: IIntervalPropertyManipulator<boolean>;
    hidden: IIntervalPropertyManipulator<boolean>;
    layoutTableCell: IIntervalPropertyManipulator<boolean>;
    locked: IIntervalPropertyManipulator<boolean>;
    isBehindDoc: IIntervalPropertyManipulator<boolean>;
    leftDistance: IIntervalPropertyManipulator<number>;
    rightDistance: IIntervalPropertyManipulator<number>;
    topDistance: IIntervalPropertyManipulator<number>;
    bottomDistance: IIntervalPropertyManipulator<number>;
    zOrder: IIntervalPropertyManipulator<number>;
    wrapType: IIntervalPropertyManipulator<AnchorObjectTextWrapType>;
    wrapSide: IIntervalPropertyManipulator<AnchorObjectTextWrapSide>;
    horizontalPositionType: IIntervalPropertyManipulator<AnchorObjectHorizontalPositionType>;
    horizontalPositionAlignment: IIntervalPropertyManipulator<AnchorObjectHorizontalPositionAlignment>;
    verticalPositionType: IIntervalPropertyManipulator<AnchorObjectVerticalPositionType>;
    verticalPositionAlignment: IIntervalPropertyManipulator<AnchorObjectVerticalPositionAlignment>;
    offsetX: IIntervalPropertyManipulator<number>;
    offsetY: IIntervalPropertyManipulator<number>;
    percentOffsetX: IIntervalPropertyManipulator<number>;
    percentOffsetY: IIntervalPropertyManipulator<number>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=anchor-info-manipulator.d.ts.map