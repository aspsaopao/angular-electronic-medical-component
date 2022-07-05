import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { RangePermission } from '../../../core/model/range-permissions';
export declare class RtfExportHelper {
    defaultFontIndex: number;
    fontNamesCollection: string[];
    numberingListCollection: Record<number, string>;
    listOverrideCollectionIndex: Record<number, number>;
    listOverrideCollection: string[];
    colorCollection: ColorModelInfo[];
    paragraphStylesCollectionIndex: Record<string, number>;
    characterStylesCollectionIndex: Record<string, number>;
    tableStylesCollectionIndex: Record<string, number>;
    fontCharsetTable: Record<number, number>;
    stylesCollection: string[];
    userCollection: string[];
    defaultCharacterProperties: string;
    defaultParagraphProperties: string;
    constructor();
    getFontNameIndex(fontName: string): number;
    getColorIndex(color: ColorModelInfo): number;
    blendColor(color: number): number;
    getUserIndex(rangePermission: RangePermission): number;
}
//# sourceMappingURL=rtf-export-helper.d.ts.map