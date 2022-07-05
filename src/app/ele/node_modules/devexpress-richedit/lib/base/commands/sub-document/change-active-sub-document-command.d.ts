import { HeaderFooterType } from '../../../core/model/section/enums';
import { SubDocument } from '../../../core/model/sub-document';
import { SubDocumentInfoBase } from '../../../core/model/sub-document-infos';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare class ChangeActiveSubDocumentToHeaderFooterByPageIndexCommandParameters extends CommandOptions {
    pageIndex: number;
    isHeader: boolean;
    constructor(control: IRichEditControl, pageIndex: number, isHeader: boolean);
}
export declare class ChangeActiveSubDocumentCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    protected finishChanges(newPageIndex: number, newActiveSubDoc: SubDocument, startSelection: number): boolean;
    private canSetSelectionBeforeRun;
    private validateSelectionPosition;
    protected invalidatePages(targetPageIndex: number, currActiveSubDocInfo: SubDocumentInfoBase): void;
    private setNewSelectionProps;
    protected isNeedScrollAfter(): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
export declare class ChangeActiveSubDocumentToMainCommand extends ChangeActiveSubDocumentCommandBase {
    executeCore(_state: ICommandState, options: ICommandOptions): boolean;
}
export declare class ChangeActiveSubDocumentToHeaderFooterByPageIndexCommand extends ChangeActiveSubDocumentCommandBase {
    executeCore(_state: ICommandState, params: ChangeActiveSubDocumentToHeaderFooterByPageIndexCommandParameters): boolean;
    private getNewSubDocument;
    private insertSubDocument;
    protected createHeaderFooter(isHeader: boolean, sectionIndex: number, type: HeaderFooterType): number;
    protected changeHeaderFooterObjectIndex(isHeader: boolean, sectionIndex: number, headerFooterType: HeaderFooterType, newIndex: number): void;
    protected isNeedScrollAfter(): boolean;
    isEnabled(): boolean;
}
export declare class ChangeActiveSubDocumentToHeaderFooterOrTextBoxBySubDocumentCommand extends ChangeActiveSubDocumentCommandBase {
    private static MapTypeToPageIndexHelper;
    executeCore(_state: ICommandState, options: CommandSimpleOptions<SubDocument>): boolean;
    protected isNeedScrollAfter(): boolean;
}
export declare class ChangeActiveSubDocumentToHeaderFooterBySubDocumentCommand extends ChangeActiveSubDocumentToHeaderFooterOrTextBoxBySubDocumentCommand {
    isEnabled(): boolean;
}
export declare class ChangeActiveSubDocumentToTextBoxCommand extends ChangeActiveSubDocumentToHeaderFooterOrTextBoxBySubDocumentCommand {
    getState(): SimpleCommandState;
    executeCore(state: ICommandState, _options: ICommandOptions): boolean;
}
//# sourceMappingURL=change-active-sub-document-command.d.ts.map