import { ArgsCheckerParameterIndex } from '../api-utils/api-utils/parameter-checker';
import { ColorProvider } from '../core/model/color/color-provider';
import { Paragraph as CoreParagraph } from '../core/model/paragraph/paragraph';
import { ParagraphProperties } from '../core/model/paragraph/paragraph-properties';
import { IProcessor } from '../core/processor';
import { IntervalApi } from './interval';
import { ListApi } from './lists/lists';
export declare class ParagraphApi {
    private _processor;
    private _paragraph;
    constructor(processor: IProcessor, paragraph: CoreParagraph);
    get index(): number;
    get interval(): IntervalApi;
    get properties(): IParagraphProperties;
    set properties(properties: IParagraphProperties);
    get list(): ListApi | null;
    get listLevel(): number;
    addToList(list: ListApi, targetListLevel?: number): void;
}
export declare enum ParagraphAlignmentApi {
    Left = 0,
    Right = 1,
    Center = 2,
    Justify = 3
}
export declare enum ParagraphLineSpacingTypeApi {
    Single = 0,
    Sesquialteral = 1,
    Double = 2,
    Multiple = 3,
    Exactly = 4,
    AtLeast = 5
}
export declare enum ParagraphFirstLineIndentApi {
    None = 0,
    Indented = 1,
    Hanging = 2
}
export declare class ParagraphPropertiesApi {
    alignment: ParagraphAlignmentApi;
    outlineLevel: number;
    rightIndent: number;
    spacingBefore: number;
    spacingAfter: number;
    lineSpacingType: ParagraphLineSpacingTypeApi;
    firstLineIndentType: ParagraphFirstLineIndentApi;
    firstLineIndent: number;
    contextualSpacing: boolean;
    keepLinesTogether: boolean;
    pageBreakBefore: boolean;
    leftIndent: number;
    lineSpacing: number;
    backColor: string;
}
export interface IParagraphProperties {
    alignment?: ParagraphAlignmentApi;
    outlineLevel?: number;
    rightIndent?: number;
    spacingBefore?: number;
    spacingAfter?: number;
    lineSpacingType?: ParagraphLineSpacingTypeApi;
    firstLineIndentType?: ParagraphFirstLineIndentApi;
    firstLineIndent?: number;
    contextualSpacing?: boolean;
    keepLinesTogether?: boolean;
    pageBreakBefore?: boolean;
    leftIndent?: number;
    lineSpacing?: number;
    backColor?: string;
}
export declare function convertToParagraphPropertiesApi(properties: ParagraphProperties, colorProvider: ColorProvider): ParagraphPropertiesApi;
export declare function convertFromParagraphPropertiesApi(properties: IParagraphProperties, parameterIndex?: ArgsCheckerParameterIndex): ParagraphProperties;
//# sourceMappingURL=paragraph.d.ts.map