import { MaskedCharacterProperties } from '../../../core/model/character/character-properties';
import { CharacterStyle } from '../../../core/model/character/character-style';
import { RunBase } from '../../../core/model/runs/run-base';
import { MaskedCharacterPropertiesBundle } from '../../../core/rich-utils/properties-bundle';
import { Data } from '../data';
export declare class CharacterImporter {
    data: Data;
    _style: CharacterStyle;
    get style(): CharacterStyle;
    set style(value: CharacterStyle);
    properties: MaskedCharacterProperties;
    get charPropsBundle(): MaskedCharacterPropertiesBundle;
    constructor(data: Data);
    resetProperties(): this;
    resetStyle(): this;
    insertText(text: string): void;
    addRun(run: RunBase, text: string): void;
    addRunAtPos(run: RunBase, text: string, pos: number): void;
    deleteOneSimpleRun(_start: number): void;
}
//# sourceMappingURL=character-importer.d.ts.map