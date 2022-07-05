import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { MaskedCharacterProperties } from '../../character/character-properties';
import { AnchorInfo } from '../../floating-objects/anchor-info';
import { MaskedParagraphProperties } from '../../paragraph/paragraph-properties';
import { TabInfo } from '../../paragraph/paragraph-style';
import { Shape } from '../../shapes/shape';
import { StyleBase } from '../../style-base';
export interface IHistoryItemStateObject {
    value: any;
    toJSON(withPostData?: boolean): any;
    canMerge(obj: IHistoryItemStateObject): any;
    merge(obj: IHistoryItemStateObject): any;
}
export declare class HistoryItemIntervalStateObject implements IHistoryItemStateObject {
    value: any;
    interval: FixedInterval;
    constructor(interval: FixedInterval, value: any);
    merge(object: HistoryItemIntervalStateObject): void;
    canMerge(object: HistoryItemIntervalStateObject): boolean;
    isEqualValue(object: HistoryItemIntervalStateObject): boolean;
    toJSON(withPostData?: boolean): any[];
    getPropertyValueForJSON(value: any, _withPostData?: boolean): any;
}
export declare class HistoryItemTabStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, tabInfo: TabInfo);
    isEqualValue(object: HistoryItemTabStateObject): boolean;
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemTextBufferStateObject extends HistoryItemIntervalStateObject {
    constructor(startPosition: number, text: string);
    canMerge(_stateValue: HistoryItemIntervalStateObject): boolean;
}
export declare class HistoryItemIntervalStyleStateObject<TStyle extends StyleBase<TStyle>> extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, style: TStyle);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemIntervalParagraphPropertiesStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, properties: MaskedParagraphProperties);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemIntervalCharacterPropertiesStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, properties: MaskedCharacterProperties);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemIntervalUseStateObject extends HistoryItemIntervalStateObject {
    use: boolean;
    constructor(interval: FixedInterval, value: any, use: boolean);
    canMerge(stateValue: HistoryItemIntervalUseStateObject): boolean;
    toJSON(): any[];
}
export declare class HistoryItemSectionStateObject implements IHistoryItemStateObject {
    value: any;
    sectionIndex: number;
    constructor(sectionIndex: number, value: any);
    toJSON(): any[];
    getPropertyValueForJSON(value: any): any;
    canMerge(_obj: IHistoryItemStateObject): boolean;
    merge(_obj: IHistoryItemStateObject): void;
}
export declare class HistoryItemListLevelStateObject implements IHistoryItemStateObject {
    value: any;
    listLevelIndex: number;
    numberingListIndex: number;
    isAbstractNumberingList: boolean;
    constructor(isAbstractNumberingList: boolean, numberingListIndex: number, listLevelIndex: number, value: any);
    toJSON(): any;
    canMerge(_obj: IHistoryItemStateObject): boolean;
    merge(_obj: IHistoryItemStateObject): void;
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemListLevelUseStateObject extends HistoryItemListLevelStateObject {
    use: boolean;
    constructor(isAbstractNumberingList: boolean, numberingListIndex: number, listLevelIndex: number, value: any, use: boolean);
    toJSON(): any;
}
export declare class HistoryItemTableStateObject implements IHistoryItemStateObject {
    value: any;
    tableIndex: number;
    tableStartPosition: number;
    tableNestedLevel: number;
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, value: any);
    toJSON(): any;
    canMerge(_obj: IHistoryItemStateObject): boolean;
    merge(_obj: IHistoryItemStateObject): void;
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemTableUseStateObject extends HistoryItemTableStateObject {
    use: boolean;
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, value: any, use: boolean);
    toJSON(): any[];
}
export declare class HistoryItemTableComplexUseStateObject extends HistoryItemTableStateObject {
    uses: boolean[];
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, value: any[], uses: boolean[]);
    toJSON(): any[];
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemTableCellStateObject implements IHistoryItemStateObject {
    value: any;
    tableIndex: number;
    rowIndex: number;
    cellIndex: number;
    tableStartPosition: number;
    tableNestedLevel: number;
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, rowIndex: number, cellIndex: number, value: any);
    toJSON(): any;
    canMerge(_obj: IHistoryItemStateObject): boolean;
    merge(_obj: IHistoryItemStateObject): void;
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemTableCellUseStateObject extends HistoryItemTableCellStateObject {
    use: boolean;
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, rowIndex: number, cellIndex: number, value: any, use: boolean);
    toJSON(): any[];
}
export declare class HistoryItemTableCellComplexUseStateObject extends HistoryItemTableCellStateObject {
    uses: boolean[];
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, rowIndex: number, cellIndex: number, value: any[], uses: boolean[]);
    toJSON(): any[];
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemTableRowStateObject implements IHistoryItemStateObject {
    value: any;
    tableIndex: number;
    rowIndex: number;
    tableStartPosition: number;
    tableNestedLevel: number;
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, rowIndex: number, value: any);
    toJSON(): any;
    canMerge(_obj: IHistoryItemStateObject): boolean;
    merge(_obj: IHistoryItemStateObject): void;
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemTableRowUseStateObject extends HistoryItemTableRowStateObject {
    use: boolean;
    constructor(tableStartPosition: number, tableNestedLevel: number, tableIndex: number, rowIndex: number, value: any, use: boolean);
    toJSON(): any[];
}
export declare class HistoryItemIntervalAnchorInfoStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, properties: AnchorInfo);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemIntervalAnchorSizeStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, properties: any);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemIntervalShapeStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, properties: Shape);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemIntervalAnchoredTextBoxPropertiesStateObject extends HistoryItemIntervalStateObject {
    constructor(interval: FixedInterval, properties: any);
    getPropertyValueForJSON(value: any): any;
}
export declare class HistoryItemInlineObjectPropertiesStateObject extends HistoryItemIntervalStateObject {
    getPropertyValueForJSON(value: any): any;
}
//# sourceMappingURL=history-item-state-object.d.ts.map