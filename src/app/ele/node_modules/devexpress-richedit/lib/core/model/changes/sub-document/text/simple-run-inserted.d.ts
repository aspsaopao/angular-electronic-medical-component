import { MaskedCharacterProperties } from '../../../character/character-properties';
import { CharacterStyle } from '../../../character/character-style';
import { RunType } from '../../../runs/run-type';
import { ContentInsertedSubDocumentChange } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class SimpleRunInsertedSubDocumentChange extends ContentInsertedSubDocumentChange {
    subDocumentId: number;
    position: number;
    length: number;
    characterProperties: MaskedCharacterProperties;
    characterStyle: CharacterStyle;
    runType: RunType;
    text: string;
    readonly type = ModelChangeType.SimpleRunInserted;
    constructor(subDocumentId: number, position: number, length: number, characterProperties: MaskedCharacterProperties, characterStyle: CharacterStyle, runType: RunType, text: string);
}
//# sourceMappingURL=simple-run-inserted.d.ts.map