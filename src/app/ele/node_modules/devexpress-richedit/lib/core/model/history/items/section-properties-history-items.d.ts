import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ISectionPropertyManipulator } from '../../manipulators/i-properties-manipulator';
import { ModelManipulator } from '../../manipulators/model-manipulator';
import { SectionStartType } from '../../section/enums';
import { SectionColumnProperties } from '../../section/section-column-properties';
import { HistoryItem } from '../base/history-item';
import { HistoryItemState } from '../states/history-item-state';
import { HistoryItemSectionStateObject } from '../states/history-item-state-object';
import { PaperKind } from '../../section/paper-kind';
export declare abstract class SectionPropertiesHistoryItemBase<T> extends HistoryItem {
    interval: FixedInterval;
    oldState: HistoryItemState<HistoryItemSectionStateObject>;
    newValue: T;
    constructor(modelManipulator: ModelManipulator, interval: FixedInterval, newValue: T);
    redo(): void;
    undo(): void;
    abstract getPropertiesManipulator(): ISectionPropertyManipulator<T>;
}
export declare class SectionMarginLeftHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionMarginTopHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionMarginRightHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionMarginBottomHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionColumnCountHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionSpaceHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionEqualWidthColumnsHistoryItem extends SectionPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): ISectionPropertyManipulator<boolean>;
}
export declare class SectionColumnsInfoHistoryItem extends SectionPropertiesHistoryItemBase<SectionColumnProperties[]> {
    getPropertiesManipulator(): ISectionPropertyManipulator<SectionColumnProperties[]>;
}
export declare class SectionPageWidthHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionPageHeightHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionStartTypeHistoryItem extends SectionPropertiesHistoryItemBase<SectionStartType> {
    getPropertiesManipulator(): ISectionPropertyManipulator<SectionStartType>;
}
export declare class SectionLandscapeHistoryItem extends SectionPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): ISectionPropertyManipulator<boolean>;
}
export declare class SectionDifferentFirstPageHistoryItem extends SectionPropertiesHistoryItemBase<boolean> {
    getPropertiesManipulator(): ISectionPropertyManipulator<boolean>;
}
export declare class SectionHeaderOffsetHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionFooterOffsetHistoryItem extends SectionPropertiesHistoryItemBase<number> {
    getPropertiesManipulator(): ISectionPropertyManipulator<number>;
}
export declare class SectionPaperKindHistoryItem extends SectionPropertiesHistoryItemBase<PaperKind> {
    getPropertiesManipulator(): ISectionPropertyManipulator<PaperKind>;
}
//# sourceMappingURL=section-properties-history-items.d.ts.map