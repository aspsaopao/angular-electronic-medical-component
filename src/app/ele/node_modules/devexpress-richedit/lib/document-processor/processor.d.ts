import { DocumentFormat } from '../core/document-format';
import { FormatImagesImporter } from '../core/formats/utils/images-import';
import { FormatterManager } from '../core/layout-formatter/managers/formatter-manager';
import { IModelManager } from '../core/model-manager';
import { DocumentModel } from '../core/model/document-model';
import { FieldRequestManager } from '../core/model/fields/field-request-manager';
import { RichOptions } from '../core/model/options/rich-options';
import { IProcessor } from '../core/processor';
import { ISelectionBase } from '../core/selection/selection-base';
import { CalculateDocumentVariableEventArgs } from './docvar-args';
export declare abstract class DocumentProcessorBase implements IProcessor {
    readonly selection: ISelectionBase;
    modelManager: IModelManager;
    layoutFormatterManager: FormatterManager;
    onCalculateDocumentVariable: null | ((e: CalculateDocumentVariableEventArgs) => void);
    private readonly innerClientProperties;
    private readonly measurer;
    private activeDocumentImporter;
    constructor(richOptions: RichOptions);
    abstract createFieldRequestManager(): FieldRequestManager;
    protected abstract createModelManager(model: DocumentModel, richOptions: RichOptions): IModelManager;
    dispose(): void;
    openDocument(source: string | File, documentFormat: DocumentFormat, callback: (importSuccess: boolean) => void): void;
    openInnerDocument(model: DocumentModel): void;
    exportDocumentToBase64(callback: (base64: string) => void, documentFormat?: DocumentFormat): void;
    exportDocumentToBlob(callback: (blob: Blob) => void, documentFormat?: DocumentFormat): void;
    protected openDocumentInner(file: File, format: DocumentFormat, callback: (importSuccess: boolean) => void): void;
    protected importImages(formatImagesImporter: FormatImagesImporter): void;
    protected exportFormat(documentFormat?: DocumentFormat): DocumentFormat;
    protected createModel(model: DocumentModel): void;
    beginUpdate(): void;
    endUpdate(): void;
    invalidateLayoutAfterFontsLoaded(): void;
}
//# sourceMappingURL=processor.d.ts.map