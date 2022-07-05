import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class SaveDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(): boolean;
    isEnabled(): boolean;
    needShowSaveAsDialog(): boolean;
    executeSaveAsCommand(): boolean;
    canModify(): boolean;
}
//# sourceMappingURL=save-document-command.d.ts.map