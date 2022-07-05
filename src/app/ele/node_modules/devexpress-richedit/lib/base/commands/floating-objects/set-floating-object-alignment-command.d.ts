import { AnchorObjectHorizontalPositionAlignment, AnchorObjectHorizontalPositionType, AnchorObjectVerticalPositionAlignment, AnchorObjectVerticalPositionType } from '../../../core/model/floating-objects/enums';
import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class SetFloatingObjectAlignmentCommandBase extends CommandBase<SimpleCommandState> {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
    anchorObjectHorizontalPositionType: AnchorObjectHorizontalPositionType;
    anchorObjectVerticalPositionType: AnchorObjectVerticalPositionType;
    protected getRelatedCommands(): Record<number, boolean>;
    getState(): SimpleCommandState;
    getStateValue(): boolean;
    canModify(): boolean;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class SetFloatingObjectTopLeftAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectTopCenterAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectTopRightAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectMiddleLeftAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectMiddleCenterAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectMiddleRightAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectBottomLeftAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectBottomCenterAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
export declare class SetFloatingObjectBottomRightAlignmentCommand extends SetFloatingObjectAlignmentCommandBase {
    anchorObjectHorizontalAlignment: AnchorObjectHorizontalPositionAlignment;
    anchorObjectVerticalAlignment: AnchorObjectVerticalPositionAlignment;
}
//# sourceMappingURL=set-floating-object-alignment-command.d.ts.map