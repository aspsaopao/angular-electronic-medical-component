import { LayoutPosition } from '../../layout/layout-position';
import { SubDocument } from '../../model/sub-document';
import { RestartPreparer } from '../formatter/utils/restart-preparer';
import { FormatterManager } from '../managers/formatter-manager';
export interface IRestartFromPositionSaver {
    restartOtherSubDocument(subDocument: SubDocument, pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromPage(pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromRow(lp: LayoutPosition, modelPosition: number): IRestartFromPositionSaver;
    restart(): any;
}
export declare class RestartFromPositionSaver_Base implements IRestartFromPositionSaver {
    protected manager: FormatterManager;
    constructor(manager: FormatterManager);
    protected get restartPreparer(): RestartPreparer;
    restartOtherSubDocument(subDocument: SubDocument, pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromPage(pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromRow(lp: LayoutPosition, modelPosition: number): IRestartFromPositionSaver;
    restart(): void;
    static isNeedRestartFromPage(lp: LayoutPosition): boolean;
}
export declare class RestartFromPositionSaver_OherSubDocument extends RestartFromPositionSaver_Base implements IRestartFromPositionSaver {
    private subDocument;
    private pageIndex;
    constructor(manager: FormatterManager, subDocument: SubDocument, pageIndex: number);
    restartOtherSubDocument(_subDocument: SubDocument, pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromPage(pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromRow(layoutPosition: LayoutPosition, _modelPosition: number): IRestartFromPositionSaver;
    restart(): void;
    private getNextState;
}
export declare class RestartFromPositionSaver_MainSubDocumentFromPage extends RestartFromPositionSaver_Base implements IRestartFromPositionSaver {
    private pageIndex;
    constructor(manager: FormatterManager, pageIndex: number);
    restartOtherSubDocument(_subDocument: SubDocument, pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromPage(pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromRow(layoutPosition: LayoutPosition, modelPosition: number): IRestartFromPositionSaver;
    restart(): void;
    private getNextState;
}
export declare class RestartFromPositionSaver_AllLayout extends RestartFromPositionSaver_Base implements IRestartFromPositionSaver {
    restartOtherSubDocument(_subDocument: SubDocument, _pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromPage(_pageIndex: number): IRestartFromPositionSaver;
    restartMainSubDocumentFromRow(_layoutPosition: LayoutPosition, _modelPosition: number): IRestartFromPositionSaver;
    restart(): void;
}
//# sourceMappingURL=position-savers.d.ts.map