import { DocumentProtectionSettings } from '../../../options/protection';
import { SubDocument } from '../../../sub-document';
export declare class JSONSubDocumentImporter {
    private static runTypeToRunImporter;
    static importSubDocument(subDocument: SubDocument, documentProtectionSettings: DocumentProtectionSettings, content: any, imageCorrespondence: Record<number, number> | null): void;
    private static importFields;
    private static importBookmarks;
    private static importRangePermissions;
    private static importParagraphs;
    private static importChunks;
}
//# sourceMappingURL=json-sub-document-importer.d.ts.map