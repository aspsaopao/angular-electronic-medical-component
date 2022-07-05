import { NumberingListStyle } from '../../../../../core/model/numbering-lists/numbering-list-style';
import { StyleBaseExporter } from './style-base';
export declare class NumberingStyleExporter extends StyleBaseExporter<NumberingListStyle> {
    getStyleId(styleIndex: number): string;
    getStyleIndexByName(name: string): number;
    protected getType(): string;
    protected exportCore(_style: NumberingListStyle): void;
}
//# sourceMappingURL=numbering-style.d.ts.map