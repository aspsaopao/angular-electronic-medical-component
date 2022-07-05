import { ControlFont } from '../../core/model/fonts/control-font';
import { IProcessor } from '../../core/processor';
import { IControlFontFaceDescriptorsApi } from './control-font-face-descriptors';
export declare class ControlFontApi {
    private readonly _font;
    private _processor;
    get fontFamily(): string;
    get status(): 'unloaded' | 'loading' | 'loaded' | 'error';
    get descriptors(): IControlFontFaceDescriptorsApi;
    get data(): ArrayBuffer | null;
    get sourceUrls(): string[];
    set sourceUrls(val: string[]);
    set sourceUrl(val: string);
    constructor(processor: IProcessor, font: ControlFont);
    load(reloadFailed?: boolean, callback?: () => void): void;
    delete(): void;
}
//# sourceMappingURL=control-font.d.ts.map