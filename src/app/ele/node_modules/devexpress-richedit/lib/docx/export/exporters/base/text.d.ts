import { BaseExporter } from '../base';
export declare class TextExporter extends BaseExporter {
    private static lastLowSpecial;
    private static firstHighSpecial;
    exportTextRunCore(runText: string): void;
    removeSpecialSymbols(text: string): string;
    private exportTextCorePartial;
    private exportTextCore;
    private exportBreak;
    private getTextTag;
    private containsSpecialSymbols;
}
//# sourceMappingURL=text.d.ts.map