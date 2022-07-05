import { HtmlTagImporterBase } from './base';
export declare class HtmlPTagImporter extends HtmlTagImporterBase {
    private listInfo;
    private importChilds;
    elementTag(): string;
    importBefore(): void;
    isImportChilds(): boolean;
    importAfter(): void;
}
export declare class HtmlH1TagImporter extends HtmlPTagImporter {
    elementTag(): string;
}
export declare class HtmlH2TagImporter extends HtmlPTagImporter {
    elementTag(): string;
}
export declare class HtmlH3TagImporter extends HtmlPTagImporter {
    elementTag(): string;
}
export declare class HtmlH4TagImporter extends HtmlPTagImporter {
    elementTag(): string;
}
export declare class HtmlH5TagImporter extends HtmlPTagImporter {
    elementTag(): string;
}
export declare class HtmlH6TagImporter extends HtmlPTagImporter {
    elementTag(): string;
}
//# sourceMappingURL=p.d.ts.map