import { EqualFunc } from '@devexpress/utils/lib/types';
import { BorderInfo } from '../borders/border-info';
import { ParagraphPropertiesHistoryItemBase } from '../history/items/paragraph-properties-history-items';
import { JSONParagraphFormattingProperty } from '../json/enums/json-paragraph-enums';
import { ModelManipulator } from '../manipulators/model-manipulator';
import { ShadingInfo } from '../shadings/shading-info';
import { SubDocumentInterval } from '../sub-document';
import { ParagraphAlignment, ParagraphFirstLineIndent, ParagraphLineSpacingType, ParagraphProperties, ParagraphPropertiesMask } from './paragraph-properties';
export declare type ParagraphPropertiesHistoryItemType<T> = new (modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, newValue: T, newUse: boolean) => ParagraphPropertiesHistoryItemBase<T>;
export interface IParagraphPropertyDescriptor<T> {
    setProp(props: ParagraphProperties, newValue: T): any;
    getProp(props: ParagraphProperties): T;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<T>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    readonly binaryEquals: EqualFunc<T>;
    readonly defaultValue: T;
}
export declare class ParagraphPropertiesFirstLineIndentDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesWidowOrphanControlDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesFirstLineIndentTypeDescriptor implements IParagraphPropertyDescriptor<ParagraphFirstLineIndent> {
    setProp(props: ParagraphProperties, newValue: ParagraphFirstLineIndent): void;
    getProp(props: ParagraphProperties): ParagraphFirstLineIndent;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<ParagraphFirstLineIndent>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<ParagraphFirstLineIndent>;
    defaultValue: ParagraphFirstLineIndent;
}
export declare class ParagraphPropertiesAfterAutoSpacingDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesOutlineLevelDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesBeforeAutoSpacingDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesPageBreakBeforeDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesRightIndentDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesSuppressHyphenationDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesLineSpacingDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesSuppressLineNumbersDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesKeepLinesTogetherDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesKeepWithNextDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesShadingInfoIndexDescriptor implements IParagraphPropertyDescriptor<ShadingInfo> {
    setProp(props: ParagraphProperties, newValue: ShadingInfo): void;
    getProp(props: ParagraphProperties): ShadingInfo;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<ShadingInfo>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<ShadingInfo>;
    defaultValue: ShadingInfo;
}
export declare class ParagraphPropertiesLeftIndentDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesLineSpacingTypeDescriptor implements IParagraphPropertyDescriptor<ParagraphLineSpacingType> {
    setProp(props: ParagraphProperties, newValue: ParagraphLineSpacingType): void;
    getProp(props: ParagraphProperties): ParagraphLineSpacingType;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<ParagraphLineSpacingType>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<ParagraphLineSpacingType>;
    defaultValue: ParagraphLineSpacingType;
}
export declare class ParagraphPropertiesAlignmentDescriptor implements IParagraphPropertyDescriptor<ParagraphAlignment> {
    setProp(props: ParagraphProperties, newValue: ParagraphAlignment): void;
    getProp(props: ParagraphProperties): ParagraphAlignment;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<ParagraphAlignment>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<ParagraphAlignment>;
    defaultValue: ParagraphAlignment;
}
export declare class ParagraphPropertiesContextualSpacingDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesSpacingBeforeDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesSpacingAfterDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class ParagraphPropertiesRightToLeftDescriptor implements IParagraphPropertyDescriptor<boolean> {
    setProp(props: ParagraphProperties, newValue: boolean): void;
    getProp(props: ParagraphProperties): boolean;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class ParagraphPropertiesLeftBorderDescriptor implements IParagraphPropertyDescriptor<BorderInfo> {
    setProp(props: ParagraphProperties, newValue: BorderInfo): void;
    getProp(props: ParagraphProperties): BorderInfo;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<BorderInfo>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<BorderInfo>;
    defaultValue: BorderInfo;
}
export declare class ParagraphPropertiesRightBorderDescriptor implements IParagraphPropertyDescriptor<BorderInfo> {
    setProp(props: ParagraphProperties, newValue: BorderInfo): void;
    getProp(props: ParagraphProperties): BorderInfo;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<BorderInfo>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<BorderInfo>;
    defaultValue: BorderInfo;
}
export declare class ParagraphPropertiesTopBorderDescriptor implements IParagraphPropertyDescriptor<BorderInfo> {
    setProp(props: ParagraphProperties, newValue: BorderInfo): void;
    getProp(props: ParagraphProperties): BorderInfo;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<BorderInfo>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<BorderInfo>;
    defaultValue: BorderInfo;
}
export declare class ParagraphPropertiesBottomBorderDescriptor implements IParagraphPropertyDescriptor<BorderInfo> {
    setProp(props: ParagraphProperties, newValue: BorderInfo): void;
    getProp(props: ParagraphProperties): BorderInfo;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<BorderInfo>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<BorderInfo>;
    defaultValue: BorderInfo;
}
export declare class ParagraphPropertiesBetweenBorderDescriptor implements IParagraphPropertyDescriptor<BorderInfo> {
    setProp(props: ParagraphProperties, newValue: BorderInfo): void;
    getProp(props: ParagraphProperties): BorderInfo;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<BorderInfo>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<BorderInfo>;
    defaultValue: BorderInfo;
}
export declare class ParagraphPropertiesDivIdDescriptor implements IParagraphPropertyDescriptor<number> {
    setProp(props: ParagraphProperties, newValue: number): void;
    getProp(props: ParagraphProperties): number;
    maskValue(): ParagraphPropertiesMask;
    getHistoryItemConstructor(): ParagraphPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONParagraphFormattingProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
//# sourceMappingURL=paragraph-property-descriptors.d.ts.map