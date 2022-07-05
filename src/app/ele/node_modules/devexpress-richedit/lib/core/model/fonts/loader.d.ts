import { ControlFontsCache } from '../caches/control-fonts';
import { FontsSettings } from '../options/fonts';
import { ControlFont, FontLoadStatus } from './control-font';
export declare class ControlFontsLoader {
    private readonly fontsCache;
    private readonly showConsoleMessage;
    private readonly fontsSettings;
    needInvalidateLayout: boolean;
    constructor(controlFontsCache: ControlFontsCache, fontsSettings: FontsSettings, showConsoleMessage: boolean);
    loadFonts(fonts: ControlFont[], loadWithStatus: FontLoadStatus[], callback: () => void): void;
    private makeRequest;
}
//# sourceMappingURL=loader.d.ts.map