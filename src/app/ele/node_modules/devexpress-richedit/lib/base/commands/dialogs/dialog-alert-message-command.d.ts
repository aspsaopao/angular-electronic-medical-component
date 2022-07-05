import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare abstract class DialogAlertMessageCommand extends ShowDialogCommandBase<AlertMessageDialogParameters> {
    createParameters(_options: ICommandOptions): AlertMessageDialogParameters;
    abstract getMessageTextId(): AlertMessageText;
    isEnabledInReadOnlyMode(): boolean;
}
export declare abstract class DialogErrorMessageCommand extends DialogAlertMessageCommand {
    getDialogName(): string;
}
export declare abstract class DialogInformationMessageCommand extends DialogAlertMessageCommand {
    getDialogName(): string;
}
export declare abstract class DialogWarningMessageCommand extends DialogAlertMessageCommand {
    getDialogName(): string;
}
export declare class ShowErrorModelIsChangedMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
    afterClosing(): void;
}
export declare class ShowErrorSessionHasExpiredMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowErrorOpeningAndOverstoreImpossibleMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowErrorCantSaveToEmptyPathMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowWarningClipboardAccessDeniedMessageCommand extends DialogWarningMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowErrorInnerExceptionMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
    afterClosing(): void;
}
export declare class ShowErrorInvalidDocumentMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowErrorAuthExceptionMessageCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
    afterClosing(): void;
}
export declare class ShowErrorCantOpenDocument extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
    isEnabledInClosedDocument(): boolean;
}
export declare class ShowErrorCantSaveDocument extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowErrorPathTooLong extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowErrorDocVariableExceptionCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowInsertContentFromServerErrorDialogCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowLoadPictureErrorDialogCommand extends DialogErrorMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class ShowSpellingCheckCompletedCommand extends DialogInformationMessageCommand {
    getMessageTextId(): AlertMessageText;
}
export declare class AlertMessageDialogParameters extends DialogParametersBase implements ISupportCopyFrom<AlertMessageDialogParameters>, ICloneable<AlertMessageDialogParameters> {
    messageTextId: AlertMessageText;
    copyFrom(obj: AlertMessageDialogParameters): void;
    clone(): AlertMessageDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare enum AlertMessageText {
    ModelIsChanged = 0,
    SessionHasExpired = 1,
    OpeningAndOverstoreImpossible = 2,
    ClipboardAccessDenied = 3,
    InnerException = 4,
    AuthException = 5,
    CantOpenFile = 6,
    CantSaveFile = 7,
    DocVariableException = 8,
    PathTooLongException = 9,
    InvalidDocumentFormat = 10,
    SpellingCheckCompleted = 11,
    ClipboardAccessDeniedTouch = 12,
    CantSaveToEmptyPath = 13,
    InsertContentFromServerException = 14,
    LoadPictureError = 15,
    DocumentImportError = 16
}
//# sourceMappingURL=dialog-alert-message-command.d.ts.map