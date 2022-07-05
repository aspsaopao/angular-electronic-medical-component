import { Data } from '../../data';
import { RelationCollectionExporter } from './relation-collection';
export declare class DocumentRelationsExporter extends RelationCollectionExporter {
    headerRelationsTable: Record<string, string>;
    footerRelationsTable: Record<string, string>;
    footNoteRelationsTable: Record<string, string>;
    endNoteRelationsTable: Record<string, string>;
    commentRelationsTable: Record<string, string>;
    commentsExtendedRelationsTable: Record<string, string>;
    constructor(data: Data);
    protected fillWriter(): void;
}
//# sourceMappingURL=document-relations.d.ts.map