import { IModelManager } from '../../core/model-manager';
import { DocumentModel } from '../../core/model/document-model';
import { FieldRequestManager } from '../../core/model/fields/field-request-manager';
import { RichOptions } from '../../core/model/options/rich-options';
import { DocumentProcessorBase } from '../../document-processor/processor';
import { DocumentProcessorBaseApi } from '../../document-processor/public/processor';
export declare class DocumentProcessorClient extends DocumentProcessorBase {
    createFieldRequestManager(): FieldRequestManager;
    protected createModelManager(model: DocumentModel, richOptions: RichOptions): IModelManager;
}
export declare class DocumentProcessorApi extends DocumentProcessorBaseApi {
    protected _processor: DocumentProcessorClient;
    constructor(options: RichOptions);
}
//# sourceMappingURL=document-processor.d.ts.map