import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { RunBase } from '../../../../core/model/runs/run-base';
import { BaseExporter } from '../base';
export declare class CharacterPropertiesExporter extends BaseExporter {
    private get colorProvider();
    private static convertScript;
    exportRunPropertiesCore(props: MaskedCharacterProperties): void;
    exportStyleCharacterProperties(props: MaskedCharacterProperties): void;
    exportRunProperties(run: RunBase): void;
    shouldExportRunProperties(run: RunBase): boolean;
    private fontName;
    private bold;
    private italic;
    private allCaps;
    private smallCaps;
    private strikeout;
    private noProof;
    private hidden;
    private doubleFontSize;
    private fontScript;
    private rightToLeft;
    private langInfo;
    private fontUnderline;
    private backColor;
    private foreColor;
}
//# sourceMappingURL=character-properties.d.ts.map