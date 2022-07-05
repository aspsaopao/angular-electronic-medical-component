import { SubDocument } from '../../../../core/model/sub-document';
import { Data } from '../../data';
import { RelationCollectionExporter } from '../relations/relation-collection';
import { BaseSubDocumentExporter } from './base-sub-document';
export declare class HeaderFooterSubDocumentExporter extends BaseSubDocumentExporter {
    private relsFilePath;
    get rootElement(): string;
    constructor(data: Data, subDocument: SubDocument, filePath: string, relsFilePath: string);
    protected createRelationExporter(): RelationCollectionExporter;
    protected fillWriterCore(): void;
}
//# sourceMappingURL=header-footer-sub-document-exporter.d.ts.map