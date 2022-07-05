import { DocumentModel } from '../document-model';
import { FontsSettings } from '../options/fonts';
export declare class ModelCacheFiller {
    private model;
    private fontsSettings;
    private fontMap;
    constructor(model: DocumentModel, fontsSettings: FontsSettings);
    fillCache(): void;
    private makeFontMap;
    private replaceCharProperties;
    private replaceInModelSubDocument;
}
//# sourceMappingURL=cache.d.ts.map