import { CommandBase } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class PrintDocumentCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState): boolean;
    sendPrintRequest(): void;
    isEnabledInReadOnlyMode(): boolean;
    isEnabled(): boolean;
}
export declare enum DownloadRequestType {
    PrintCurrentDocument = 0,
    DownloadCurrentDocument = 1
}
//# sourceMappingURL=print-document-command.d.ts.map