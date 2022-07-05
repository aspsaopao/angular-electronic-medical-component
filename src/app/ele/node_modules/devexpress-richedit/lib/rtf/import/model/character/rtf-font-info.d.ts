import { FontInfoCache } from '../../../../core/model/caches/hashed-caches/font-info-cache';
import { DocumentModel } from '../../../../core/model/document-model';
import { FontInfo } from '../../../../core/model/fonts/font-info';
import { RtfFontFamily } from './enums';
export declare class RtfFontInfo {
    id: number;
    charset: number;
    name: string;
    fontFamily: RtfFontFamily;
    private _shouldLoad;
    private _cachedInfo;
    get shouldLoad(): boolean;
    get cachedInfo(): FontInfo;
    getCoreObjectByName(documentModel: DocumentModel): FontInfo;
    static createDefaultRtfFontInfo(): RtfFontInfo;
    static getFontInfo(fontInfoCache: FontInfoCache, name: string): FontInfo;
}
//# sourceMappingURL=rtf-font-info.d.ts.map