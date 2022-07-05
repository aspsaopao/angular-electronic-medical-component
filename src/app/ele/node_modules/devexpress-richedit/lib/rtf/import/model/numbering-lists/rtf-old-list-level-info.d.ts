import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { ListLevelProperties } from '../../../../core/model/numbering-lists/list-level-properties';
export declare class RtfOldListLevelInfo {
    clone(): RtfOldListLevelInfo;
    copyFrom(_obj: RtfOldListLevelInfo): void;
    skipNumbering: boolean;
    includeInformationFromPreviousLevel: boolean;
    characterProperties: MaskedCharacterProperties;
    listLevelProperties: ListLevelProperties;
    textBefore: string;
    textAfter: string;
    indent: number;
    constructor();
}
//# sourceMappingURL=rtf-old-list-level-info.d.ts.map