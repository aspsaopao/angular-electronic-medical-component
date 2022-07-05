import { DocumentModel } from '../document-model';
import { ModelManipulator } from '../manipulators/model-manipulator';
import { FontsSettings } from '../options/fonts';
export declare class FontCorrector {
    private modelManipulator;
    private model;
    private fonts;
    private get fontInfoCache();
    private get controlFontsCache();
    constructor(modelManipulator: ModelManipulator, model: DocumentModel, fonts: FontsSettings);
    correct(): void;
    private addAndLoad;
    private removeRedundant;
}
//# sourceMappingURL=font-corrector.d.ts.map