import { PictureSize } from '../../../core/model/floating-objects/sizes';
import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeAnchoredPictureSizeCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    canModify(): boolean;
    isEnabled(): boolean;
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<PictureSize>): boolean;
}
//# sourceMappingURL=change-anchored-picture-scale-command.d.ts.map