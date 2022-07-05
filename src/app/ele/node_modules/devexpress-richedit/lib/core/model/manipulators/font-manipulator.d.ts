import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IMeasurer } from '../../measurer/measurer';
import { FontInfo } from '../fonts/font-info';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class FontManipulator extends BaseManipulator {
    private loadingFontInfosHashtable;
    loadFontInfo(fontInfo: FontInfo, subDocument: SubDocument, applyNewFontOnIntervalsAfterLoad: FixedInterval[], measurer: IMeasurer): void;
    applyFontInfoLoadedOnPaste(measurer: IMeasurer, jsonServerParams: any, jsonFontInfoCache: any): FontInfo | null;
    addFontByName(name: string, cssName?: string): FontInfo;
    removeFont(font: FontInfo): void;
}
//# sourceMappingURL=font-manipulator.d.ts.map