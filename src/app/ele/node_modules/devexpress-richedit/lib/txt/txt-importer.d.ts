import { FormatImportCallback, FormatImportReject, IDocumentImporter } from '../core/formats/i-document-importer';
import { IModelOptions } from '../core/model/document-model';
import { MaskedCharacterPropertiesBundle, MaskedParagraphPropertiesBundle } from '../core/rich-utils/properties-bundle';
export declare class TxtImporter implements IDocumentImporter {
    private model;
    private formatImagesImporter;
    private reject;
    importFromFile(blob: Blob, modelOptions: IModelOptions, callback: FormatImportCallback, reject: FormatImportReject): void;
    importFromString(text: string, modelOptions: IModelOptions, callback: FormatImportCallback, reject: FormatImportReject, charPropsBundle?: MaskedCharacterPropertiesBundle, parPropsBundle?: MaskedParagraphPropertiesBundle): void;
    private createModel;
    static splitByLines(text: string): string[];
    private fillModel;
}
//# sourceMappingURL=txt-importer.d.ts.map