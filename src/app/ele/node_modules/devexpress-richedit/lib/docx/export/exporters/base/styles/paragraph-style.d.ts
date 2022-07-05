import { ParagraphStyle } from '../../../../../core/model/paragraph/paragraph-style';
import { StyleBaseExporter } from './style-base';
export declare class ParagraphStyleExporter extends StyleBaseExporter<ParagraphStyle> {
    getStyleId(styleIndex: number): string;
    getStyleIndexByName(name: string): number;
    protected getType(): string;
    protected exportCore(style: ParagraphStyle): void;
}
//# sourceMappingURL=paragraph-style.d.ts.map