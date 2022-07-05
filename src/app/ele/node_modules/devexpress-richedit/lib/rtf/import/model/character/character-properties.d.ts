import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { FontInfo } from '../../../../core/model/fonts/font-info';
import { RtfFontType } from './enums';
import { RtfFontInfo } from './rtf-font-info';
import { RtfFormattingInfo } from './rtf-formatting-info';
export declare class RtfCharacterProperties {
    coreProperties: MaskedCharacterProperties;
    parentStyleIndex: number;
    fontType: RtfFontType;
    doubleByteCharactersFontName: string;
    lowAnsiCharactersFontName: string;
    highAnsiCharactersFontName: string;
    useDoubleByteCharactersFontName: boolean;
    useLowAnsiCharactersFontName: boolean;
    useHighAnsiCharactersFontName: boolean;
    rtfFormattingInfo: RtfFormattingInfo;
    setFont(rtfFontInfo: RtfFontInfo, fontInfo: FontInfo): void;
    resetUseAssociatedProperties(): void;
    private recalcUseAssociatedProperties;
    clone(): RtfCharacterProperties;
    copyFrom(obj: RtfCharacterProperties): void;
}
//# sourceMappingURL=character-properties.d.ts.map