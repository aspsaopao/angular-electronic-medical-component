import { TableStyle } from '../../../../../core/model/tables/styles/table-style';
import { StyleBaseExporter } from './style-base';
export declare class TableStyleExporter extends StyleBaseExporter<TableStyle> {
    getStyleId(styleIndex: number): string;
    getStyleIndexByName(name: string): number;
    protected getType(): string;
    protected exportCore(style: TableStyle): void;
    private exportTableConditionalStyle;
}
//# sourceMappingURL=table-style.d.ts.map