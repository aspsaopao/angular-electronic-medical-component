import { MaskedCharacterPropertiesBundle } from '../../../../rich-utils/properties-bundle';
import { MaskedCharacterPropertiesCache } from '../../../caches/hashed-caches/masked-character-properties-cache';
import { ImageCache } from '../../../caches/images';
import { CharacterStyle } from '../../../character/character-style';
import { Paragraph } from '../../../paragraph/paragraph';
import { RunBase } from '../../../runs/run-base';
export declare type SimpleRunConstructor = new (startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle) => RunBase;
export declare abstract class BaseRunImporter {
    private maskedCharacterPropertiesCache;
    private charStyles;
    protected imageCorrespondence: Record<number, number> | null;
    protected imageCache: ImageCache;
    getRun(paragraph: Paragraph, startOffset: number, jsonRun: any): RunBase;
    init(maskedCharacterPropertiesCache: MaskedCharacterPropertiesCache, charStyles: CharacterStyle[], imageCache: ImageCache, imageCorrespondence: Record<number, number> | null): void;
    protected abstract makeRun(jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
export declare class SimpleRunImporter extends BaseRunImporter {
    runConstructor: SimpleRunConstructor;
    constructor(runConstructor: SimpleRunConstructor);
    protected makeRun(_jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
export declare class TextRunImporter extends BaseRunImporter {
    protected makeRun(jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
export declare class AnchoredPictureRunImporter extends BaseRunImporter {
    protected makeRun(jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
export declare class AnchoredTextBoxRunImporter extends BaseRunImporter {
    protected makeRun(jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
export declare class InlinePictureRunImporter extends BaseRunImporter {
    protected makeRun(jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
export declare class InlineTextBoxRunImporter extends BaseRunImporter {
    protected makeRun(jsonRun: any, startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle): RunBase;
}
//# sourceMappingURL=run-importers.d.ts.map