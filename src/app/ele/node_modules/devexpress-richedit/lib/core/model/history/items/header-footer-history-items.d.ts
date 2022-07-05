import { HeaderFooterManipulatorBase } from '../../manipulators/header-footer-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { HeaderFooterType } from '../../section/enums';
import { FooterSubDocumentInfo, HeaderFooterSubDocumentInfoBase, HeaderSubDocumentInfo } from '../../sub-document-infos';
import { HistoryItem } from '../base/history-item';
export declare abstract class ChangeHeaderFooterIndexHistoryItemBase<T extends HeaderFooterSubDocumentInfoBase> extends HistoryItem {
    sectionIndex: number;
    type: HeaderFooterType;
    newIndex: number;
    oldIndex: number;
    actionAfterUndo: (oldIndex: number) => void;
    constructor(modelManipulator: ModelManipulator, sectionIndex: number, type: HeaderFooterType, newIndex: number, actionAfterUndo: (oldIndex: number) => void);
    redo(): void;
    undo(): void;
    protected abstract getManipulator(): HeaderFooterManipulatorBase<T>;
}
export declare class ChangeHeaderIndexHistoryItem extends ChangeHeaderFooterIndexHistoryItemBase<HeaderSubDocumentInfo> {
    protected getManipulator(): HeaderFooterManipulatorBase<HeaderSubDocumentInfo>;
}
export declare class ChangeFooterIndexHistoryItem extends ChangeHeaderFooterIndexHistoryItemBase<FooterSubDocumentInfo> {
    protected getManipulator(): HeaderFooterManipulatorBase<FooterSubDocumentInfo>;
}
//# sourceMappingURL=header-footer-history-items.d.ts.map