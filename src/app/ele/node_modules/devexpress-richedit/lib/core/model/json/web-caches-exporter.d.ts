import { DocumentCache } from '../caches/caches';
import { DocumentModel } from '../document-model';
import { DocumentProtectionSettings } from '../options/protection';
export declare class WebCachesExporter {
    private documentModel;
    private cache;
    private jsonSubDocs;
    constructor(cache: DocumentCache, caches: any, documentModel: DocumentModel);
    importSubDocuments(documentProtectionSettings: DocumentProtectionSettings, imageCorrespondence: Record<number, number> | null): void;
    exportSubDocuments(): any;
    private static getInfoBySubDocumentId;
    dispose(): void;
}
//# sourceMappingURL=web-caches-exporter.d.ts.map