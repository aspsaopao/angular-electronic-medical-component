import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { SaveFileDialogParameters } from '../dialogs/dialog-save-file-command';
export declare class DownloadDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<SaveFileDialogParameters>): boolean;
    isEnabled(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=download-document-command.d.ts.map