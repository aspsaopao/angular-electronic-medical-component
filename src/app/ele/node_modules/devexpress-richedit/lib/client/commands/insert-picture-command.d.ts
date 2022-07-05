import { CommandBase } from '../../base/commands/command-base';
import { SimpleCommandState } from '../../base/commands/command-states';
export declare class InsertPictureCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(): boolean;
    private onFileChange;
}
//# sourceMappingURL=insert-picture-command.d.ts.map