import { ICloneable } from '@devexpress/utils/lib/types';
import { BorderInfo } from '../borders/border-info';
import { IHashBasedCacheType } from '../caches/hash-based-cache';
import { DocumentModel } from '../document-model';
import { IMaskedProperties } from '../interfaces';
import { ShadingInfo } from '../shadings/shading-info';
import { IParagraphPropertyDescriptor, ParagraphPropertiesAfterAutoSpacingDescriptor, ParagraphPropertiesAlignmentDescriptor, ParagraphPropertiesBeforeAutoSpacingDescriptor, ParagraphPropertiesBetweenBorderDescriptor, ParagraphPropertiesBottomBorderDescriptor, ParagraphPropertiesContextualSpacingDescriptor, ParagraphPropertiesDivIdDescriptor, ParagraphPropertiesFirstLineIndentDescriptor, ParagraphPropertiesFirstLineIndentTypeDescriptor, ParagraphPropertiesKeepLinesTogetherDescriptor, ParagraphPropertiesKeepWithNextDescriptor, ParagraphPropertiesLeftBorderDescriptor, ParagraphPropertiesLeftIndentDescriptor, ParagraphPropertiesLineSpacingDescriptor, ParagraphPropertiesLineSpacingTypeDescriptor, ParagraphPropertiesOutlineLevelDescriptor, ParagraphPropertiesPageBreakBeforeDescriptor, ParagraphPropertiesRightBorderDescriptor, ParagraphPropertiesRightIndentDescriptor, ParagraphPropertiesRightToLeftDescriptor, ParagraphPropertiesShadingInfoIndexDescriptor, ParagraphPropertiesSpacingAfterDescriptor, ParagraphPropertiesSpacingBeforeDescriptor, ParagraphPropertiesSuppressHyphenationDescriptor, ParagraphPropertiesSuppressLineNumbersDescriptor, ParagraphPropertiesTopBorderDescriptor, ParagraphPropertiesWidowOrphanControlDescriptor } from './paragraph-property-descriptors';
export declare enum ParagraphPropertiesMask {
    UseNone = 0,
    UseAlignment = 1,
    UseLeftIndent = 2,
    UseRightIndent = 4,
    UseSpacingBefore = 8,
    UseSpacingAfter = 16,
    UseLineSpacing = 32,
    UseFirstLineIndent = 64,
    UseSuppressHyphenation = 128,
    UseSuppressLineNumbers = 256,
    UseContextualSpacing = 512,
    UsePageBreakBefore = 1024,
    UseBeforeAutoSpacing = 2048,
    UseAfterAutoSpacing = 4096,
    UseKeepWithNext = 8192,
    UseKeepLinesTogether = 16384,
    UseWidowOrphanControl = 32768,
    UseOutlineLevel = 65536,
    UseShadingInfoIndex = 131072,
    UseLeftBorder = 262144,
    UseRightBorder = 524288,
    UseTopBorder = 1048576,
    UseBottomBorder = 2097152,
    UseDivId = 4194304,
    UseBorders = 20709376,
    UseRightToLeft = 8388608,
    UseBetweenBorder = 16777216,
    UseAll = 2147483647
}
export declare enum ParagraphAlignment {
    Left = 0,
    Right = 1,
    Center = 2,
    Justify = 3,
    JustifyMedium = 4,
    JustifyHigh = 5,
    JustifyLow = 6,
    Distribute = 7,
    ThaiDistribute = 8
}
export declare enum ParagraphLineSpacingType {
    Single = 0,
    Sesquialteral = 1,
    Double = 2,
    Multiple = 3,
    Exactly = 4,
    AtLeast = 5
}
export declare enum ParagraphFirstLineIndent {
    None = 0,
    Indented = 1,
    Hanging = 2
}
export declare class ParagraphPropertyDescriptor {
    static firstLineIndent: ParagraphPropertiesFirstLineIndentDescriptor;
    static widowOrphanControl: ParagraphPropertiesWidowOrphanControlDescriptor;
    static firstLineIndentType: ParagraphPropertiesFirstLineIndentTypeDescriptor;
    static afterAutoSpacing: ParagraphPropertiesAfterAutoSpacingDescriptor;
    static outlineLevel: ParagraphPropertiesOutlineLevelDescriptor;
    static beforeAutoSpacing: ParagraphPropertiesBeforeAutoSpacingDescriptor;
    static pageBreakBefore: ParagraphPropertiesPageBreakBeforeDescriptor;
    static rightIndent: ParagraphPropertiesRightIndentDescriptor;
    static suppressHyphenation: ParagraphPropertiesSuppressHyphenationDescriptor;
    static lineSpacing: ParagraphPropertiesLineSpacingDescriptor;
    static suppressLineNumbers: ParagraphPropertiesSuppressLineNumbersDescriptor;
    static keepLinesTogether: ParagraphPropertiesKeepLinesTogetherDescriptor;
    static keepWithNext: ParagraphPropertiesKeepWithNextDescriptor;
    static shadingInfo: ParagraphPropertiesShadingInfoIndexDescriptor;
    static leftIndent: ParagraphPropertiesLeftIndentDescriptor;
    static lineSpacingType: ParagraphPropertiesLineSpacingTypeDescriptor;
    static alignment: ParagraphPropertiesAlignmentDescriptor;
    static contextualSpacing: ParagraphPropertiesContextualSpacingDescriptor;
    static spacingBefore: ParagraphPropertiesSpacingBeforeDescriptor;
    static spacingAfter: ParagraphPropertiesSpacingAfterDescriptor;
    static rightToLeft: ParagraphPropertiesRightToLeftDescriptor;
    static leftBorder: ParagraphPropertiesLeftBorderDescriptor;
    static rightBorder: ParagraphPropertiesRightBorderDescriptor;
    static topBorder: ParagraphPropertiesTopBorderDescriptor;
    static bottomBorder: ParagraphPropertiesBottomBorderDescriptor;
    static betweenBorder: ParagraphPropertiesBetweenBorderDescriptor;
    static divId: ParagraphPropertiesDivIdDescriptor;
    static ALL_FIELDS: IParagraphPropertyDescriptor<any>[];
}
export declare class ParagraphProperties implements ICloneable<ParagraphProperties>, IHashBasedCacheType<ParagraphProperties> {
    private hash;
    firstLineIndent: number;
    widowOrphanControl: boolean;
    firstLineIndentType: ParagraphFirstLineIndent;
    afterAutoSpacing: boolean;
    outlineLevel: number;
    beforeAutoSpacing: boolean;
    pageBreakBefore: boolean;
    rightIndent: number;
    suppressHyphenation: boolean;
    lineSpacing: number;
    suppressLineNumbers: boolean;
    keepLinesTogether: boolean;
    keepWithNext: boolean;
    shadingInfo: ShadingInfo;
    rightToLeft: boolean;
    leftIndent: number;
    lineSpacingType: ParagraphLineSpacingType;
    alignment: ParagraphAlignment;
    contextualSpacing: boolean;
    spacingBefore: number;
    spacingAfter: number;
    leftBorder: BorderInfo;
    rightBorder: BorderInfo;
    topBorder: BorderInfo;
    bottomBorder: BorderInfo;
    betweenBorder: BorderInfo;
    divId: number;
    protected calculateHash(): number;
    getHashCode(): number;
    copyFrom(obj: any): void;
    clone(): ParagraphProperties;
    equals(obj: ParagraphProperties): boolean;
    getLeftIndentForFirstRow(): number;
    getLeftIndentForOtherRow(): number;
    getLeftIndentForParagraphFrame(): number;
}
export declare class MaskedParagraphProperties extends ParagraphProperties implements IMaskedProperties<ParagraphPropertiesMask>, IHashBasedCacheType<MaskedParagraphProperties> {
    useValue: ParagraphPropertiesMask;
    getUseValue(value: ParagraphPropertiesMask): boolean;
    protected calculateHash(): number;
    setUseValue(mask: ParagraphPropertiesMask, value: boolean): void;
    copyFrom(obj: any): void;
    equals(obj: MaskedParagraphProperties): boolean;
    clone(): MaskedParagraphProperties;
    static createDefault(model: DocumentModel): MaskedParagraphProperties;
    setValue<T>(desc: IParagraphPropertyDescriptor<T>, value: T): void;
}
//# sourceMappingURL=paragraph-properties.d.ts.map