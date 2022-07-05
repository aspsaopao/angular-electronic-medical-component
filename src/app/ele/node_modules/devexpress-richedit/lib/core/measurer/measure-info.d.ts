import { Size } from '@devexpress/utils/lib/geometry/size';
import { CharacterProperties } from '../model/character/character-properties';
export declare abstract class MeasureInfo {
    text: string;
    charProp: CharacterProperties;
    resultSize: Size;
    nodeIndex: number;
    sbInfo: MeasureInfo;
    constructor(text: string, charProp: CharacterProperties);
    get signCssString(): string;
    abstract getEncodedText(): string;
}
export declare class MeasureInfoText extends MeasureInfo {
    getEncodedText(): string;
}
export declare class MeasureInfoNonText extends MeasureInfo {
    getEncodedText(): string;
}
//# sourceMappingURL=measure-info.d.ts.map