import { AnchorObjectTextWrapType } from '../../../core/model/floating-objects/enums';
import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class SetFloatingObjectTextWrapTypeCommandBase extends CommandBase<SimpleCommandState> {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
    isBehindDoc: boolean;
    protected getRelatedCommands(): Record<number, boolean>;
    getState(): SimpleCommandState;
    getStateValue(): boolean;
    canModify(): boolean;
    isEnabled(): boolean;
    isEnabledCore(): boolean;
    executeCore(_state: SimpleCommandState, _parameter: ICommandOptions): boolean;
}
export declare class SetFloatingObjectSquareTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
}
export declare class SetFloatingObjectTightTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
}
export declare class SetFloatingObjectThroughTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
}
export declare class SetFloatingObjectTopAndBottomTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
}
export declare class SetFloatingObjectInFrontOfTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
}
export declare class SetFloatingObjectBehindTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    anchorObjectTextWrapType: AnchorObjectTextWrapType;
    isBehindDoc: boolean;
}
export declare class SetFloatingObjectInlineTextWrapTypeCommand extends SetFloatingObjectTextWrapTypeCommandBase {
    getStateValue(): boolean;
    isEnabledCore(): boolean;
    executeCore(_state: SimpleCommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=set-floating-object-text-wrap-type-command.d.ts.map