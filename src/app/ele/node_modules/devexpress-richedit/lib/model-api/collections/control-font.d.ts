import { ControlFont } from '../../core/model/fonts/control-font';
import { ControlFontApi } from '../fonts/control-font';
import { IControlFontFaceDescriptorsApi } from '../fonts/control-font-face-descriptors';
import { Collection } from './collection';
export declare class ControlFontCollection extends Collection<ControlFontApi, ControlFont> {
    createAllFontsFromCurrentLayout(): void;
    load(reloadFailed?: boolean, callback?: () => void): void;
    create(fontFamily: string, descriptors?: IControlFontFaceDescriptorsApi): ControlFontApi;
    protected _getItem(font: ControlFont): ControlFontApi;
    protected _getCoreItems(): ControlFont[];
}
//# sourceMappingURL=control-font.d.ts.map