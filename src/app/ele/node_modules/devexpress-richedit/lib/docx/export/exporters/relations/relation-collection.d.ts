import { OpenXmlRelation } from '../../../utils/open-xml-relation';
import { Data } from '../../data';
import { RelationsBaseExporter } from './base';
export declare class RelationCollectionExporter extends RelationsBaseExporter {
    get filePath(): string;
    collection: OpenXmlRelation[];
    imageRelationsTable: Record<string, string>;
    hyperlinkRelationsTable: Record<string, string>;
    exportedExternalImageRelationsTable: Record<string, string>;
    private _filePath;
    constructor(data: Data, filePath: string);
    protected fillWriter(): void;
    protected generateFileRelationCore(relationTable: Record<string, string>, relationType: string, external?: boolean): void;
    protected isWriteToZip(): boolean;
    private generateHyperlinkRelationsCore;
}
//# sourceMappingURL=relation-collection.d.ts.map