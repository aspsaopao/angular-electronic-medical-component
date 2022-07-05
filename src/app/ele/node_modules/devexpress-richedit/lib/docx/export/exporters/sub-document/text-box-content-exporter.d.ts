import { SubDocument } from '../../../../core/model/sub-document';
import { Data } from '../../data';
import { RelationCollectionExporter } from '../relations/relation-collection';
import { BaseSubDocumentExporter } from './base-sub-document';
export declare class TextBoxSubDocumentExporter extends BaseSubDocumentExporter {
    get rootElement(): string;
    constructor(data: Data, subDocument: SubDocument);
    exportTextBoxContent(): void;
    protected createRelationExporter(): RelationCollectionExporter;
    protected fillWriter(): void;
    protected fillWriterCore(): void;
}
//# sourceMappingURL=text-box-content-exporter.d.ts.map