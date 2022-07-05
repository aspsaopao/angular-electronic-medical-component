import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { EqualFunc } from '@devexpress/utils/lib/types';
import { SectionPropertiesHistoryItemBase } from '../history/items/section-properties-history-items';
import { JSONSectionProperty } from '../json/enums/json-section-enums';
import { ModelManipulator } from '../manipulators/model-manipulator';
import { SectionStartType } from './enums';
import { PaperKind } from './paper-kind';
import { SectionColumnProperties } from './section-column-properties';
import { SectionProperties } from './section-properties';
export declare type SectionPropertiesHistoryItemType<T> = new (modelManipulator: ModelManipulator, interval: FixedInterval, newValue: T) => SectionPropertiesHistoryItemBase<T>;
export interface ISectionPropertyDescriptor<T> {
    setProp(props: SectionProperties, newValue: T): any;
    getProp(props: SectionProperties): T;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<T>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<T>;
    defaultValue: T;
}
export declare class SectionPropertiesMarginLeftDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesMarginTopDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesMarginRightDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesMarginBottomDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesFooterOffsetDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesHeaderOffsetDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesColumnCountDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesSpaceDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesEqualWidthColumnsDescriptor implements ISectionPropertyDescriptor<boolean> {
    setProp(props: SectionProperties, newValue: boolean): void;
    getProp(props: SectionProperties): boolean;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class SectionPropertiesColumnsInfoDescriptor implements ISectionPropertyDescriptor<SectionColumnProperties[]> {
    setProp(props: SectionProperties, newValue: SectionColumnProperties[]): void;
    getProp(props: SectionProperties): SectionColumnProperties[];
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<SectionColumnProperties[]>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<SectionColumnProperties[]>;
    defaultValue: SectionColumnProperties[];
}
export declare class SectionPropertiesPageWidthDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesPageHeightDescriptor implements ISectionPropertyDescriptor<number> {
    setProp(props: SectionProperties, newValue: number): void;
    getProp(props: SectionProperties): number;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<number>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<number>;
    defaultValue: number;
}
export declare class SectionPropertiesStartTypeDescriptor implements ISectionPropertyDescriptor<SectionStartType> {
    setProp(props: SectionProperties, newValue: SectionStartType): void;
    getProp(props: SectionProperties): SectionStartType;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<SectionStartType>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<SectionStartType>;
    defaultValue: SectionStartType;
}
export declare class SectionPropertiesLandscapeDescriptor implements ISectionPropertyDescriptor<boolean> {
    setProp(props: SectionProperties, newValue: boolean): void;
    getProp(props: SectionProperties): boolean;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class SectionPropertiesDifferentFirstPageDescriptor implements ISectionPropertyDescriptor<boolean> {
    setProp(props: SectionProperties, newValue: boolean): void;
    getProp(props: SectionProperties): boolean;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<boolean>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<boolean>;
    defaultValue: boolean;
}
export declare class SectionPropertiesPaperKindDescriptor implements ISectionPropertyDescriptor<PaperKind> {
    setProp(props: SectionProperties, newValue: PaperKind): void;
    getProp(props: SectionProperties): PaperKind;
    getHistoryItemConstructor(): SectionPropertiesHistoryItemType<PaperKind>;
    getJSONProperty(): JSONSectionProperty;
    binaryEquals: EqualFunc<PaperKind>;
    defaultValue: PaperKind;
}
export declare class SectionPropertyDescriptor {
    static marginLeft: SectionPropertiesMarginLeftDescriptor;
    static marginTop: SectionPropertiesMarginTopDescriptor;
    static marginRight: SectionPropertiesMarginRightDescriptor;
    static marginBottom: SectionPropertiesMarginBottomDescriptor;
    static footerOffset: SectionPropertiesFooterOffsetDescriptor;
    static headerOffset: SectionPropertiesHeaderOffsetDescriptor;
    static columnCount: SectionPropertiesColumnCountDescriptor;
    static space: SectionPropertiesSpaceDescriptor;
    static equalWidthColumns: SectionPropertiesEqualWidthColumnsDescriptor;
    static columnsInfo: SectionPropertiesColumnsInfoDescriptor;
    static pageWidth: SectionPropertiesPageWidthDescriptor;
    static pageHeight: SectionPropertiesPageHeightDescriptor;
    static startType: SectionPropertiesStartTypeDescriptor;
    static landscape: SectionPropertiesLandscapeDescriptor;
    static differentFirstPage: SectionPropertiesDifferentFirstPageDescriptor;
    static paperKind: SectionPropertiesPaperKindDescriptor;
    static ALL_FIELDS: ISectionPropertyDescriptor<any>[];
}
//# sourceMappingURL=section-property-descriptor.d.ts.map