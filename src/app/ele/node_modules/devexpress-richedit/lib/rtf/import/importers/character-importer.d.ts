import { MaskedCharacterProperties } from '../../../core/model/character/character-properties';
import { CharacterStyle } from '../../../core/model/character/character-style';
import { SimpleRunConstructor } from '../../../core/model/json/importers/sub-document/run-importers';
import { RunBase } from '../../../core/model/runs/run-base';
import { MaskedCharacterPropertiesBundle } from '../../../core/rich-utils/properties-bundle';
import { CharType } from '../../utils/unicode-char-helper';
import { RtfCharacterProperties } from '../model/character/character-properties';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfCharacterImporter extends RtfBaseImporter {
    private states;
    logPosition: number;
    get characterFormatting(): RtfCharacterProperties;
    constructor(data: RtfImportData);
    static getOnlyOwnCharacterProperties(source: MaskedCharacterProperties, parentCharacterStyle: CharacterStyle): MaskedCharacterProperties;
    getPropsBundle(): MaskedCharacterPropertiesBundle;
    insertText(text: string): void;
    setFontNameAndInsertText(text: string, charType: CharType): void;
    getLastRunProperties(): MaskedCharacterPropertiesBundle;
    addSimpleRun(runConstr: SimpleRunConstructor, text: string, useLastProperties: boolean): RunBase;
    addRun(run: RunBase, text: string): RunBase;
    insertSpace(): void;
    splitByCharTypeAndInsertText(text: string): void;
    appendChar(ch: string): void;
    onPlainKeyword(): void;
    applyDefaultCharacterProperties(): void;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=character-importer.d.ts.map