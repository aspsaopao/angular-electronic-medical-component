import { CharacterStyle } from '../../../../../core/model/character/character-style';
import { StyleBaseExporter } from './style-base';
export declare class CharacterStyleExporter extends StyleBaseExporter<CharacterStyle> {
    getStyleId(styleIndex: number): string;
    getStyleIndexByName(name: string): number;
    protected getType(): string;
    protected exportCore(style: CharacterStyle): void;
}
//# sourceMappingURL=character-style.d.ts.map