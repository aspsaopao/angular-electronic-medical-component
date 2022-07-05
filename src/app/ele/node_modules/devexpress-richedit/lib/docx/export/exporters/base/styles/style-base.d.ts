import { StyleBase } from '../../../../../core/model/style-base';
import { BaseExporter } from '../../base';
export declare abstract class StyleBaseExporter<TParent extends StyleBase<TParent>> extends BaseExporter {
    export(style: TParent, styleIndex: number): void;
    abstract getStyleId(styleIndex: number): string;
    abstract getStyleIndexByName(name: string): number;
    protected abstract getType(): string;
    protected abstract exportCore(style: TParent): any;
    protected exportStyleName(style: TParent): void;
    protected exportParentStyle(style: TParent): void;
}
//# sourceMappingURL=style-base.d.ts.map