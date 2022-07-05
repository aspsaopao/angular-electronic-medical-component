import { DocumentLayout } from '../../layout/document-layout';
import { LayoutBox } from '../../layout/main-structures/layout-boxes/layout-box';
import { DocumentCache } from '../caches/caches';
import { HashBasedCacheCore, IHashBasedCacheTypeCore } from '../caches/hash-based-cache';
import { CharacterProperties } from '../character/character-properties';
import { ControlFont } from './control-font';
export declare class LayoutFontsCollectorElement implements IHashBasedCacheTypeCore<LayoutFontsCollectorElement> {
    readonly charProps: CharacterProperties;
    private textCache;
    constructor(charProps: CharacterProperties);
    getHashCode(): number;
    equals(obj: LayoutFontsCollectorElement): boolean;
    addFont(symbol: string, font: ControlFont): void;
    getFont(symbol: string): ControlFont | undefined;
    replaceUnloadedFonts(defaultFontMap: Record<number, ControlFont>): LayoutFontsCollectorElement;
}
export declare class LayoutFontsCollectorCache extends HashBasedCacheCore<LayoutFontsCollectorElement> {
    replaceUnloadedFonts(defaultFontMap: Record<number, ControlFont>): LayoutFontsCollectorCache;
}
export declare class LayoutFontsCollector {
    private controlFontsCache;
    private layout;
    private defaultFont;
    private fonts;
    cache: LayoutFontsCollectorCache;
    constructor(cache: DocumentCache, layout: DocumentLayout, defaultFontName?: string);
    private addDefaultFont;
    collect(): ControlFont[];
    private grabFromPageArea;
    addFont(box: LayoutBox): void;
    mustHaveFontsForRenderText(charProps: CharacterProperties, text: string): void;
    static boxContent(box: LayoutBox): string;
}
//# sourceMappingURL=grabber.d.ts.map