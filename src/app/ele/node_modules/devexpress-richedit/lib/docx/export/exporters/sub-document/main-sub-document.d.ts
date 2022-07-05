import { RelationCollectionExporter } from '../relations/relation-collection';
import { BaseSubDocumentExporter } from './base-sub-document';
export declare class MainSubDocumentExporter extends BaseSubDocumentExporter {
    protected createRelationExporter(): RelationCollectionExporter;
    get rootElement(): string;
    protected fillWriterCore(): void;
    private exportDocumentBackground;
}
//# sourceMappingURL=main-sub-document.d.ts.map