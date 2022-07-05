import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IModelManager } from '../../../model-manager';
import { DocumentModel } from '../../document-model';
export declare class ServerModelInserter {
    static insertDocumentModelFromServer(modelManager: IModelManager, response: any, insertToPos: number, insertToSubDocumentId: number): FixedInterval;
    static processNewDocumentResponse(documentModel: DocumentModel, imageCorrespondence: Record<number, number>, obj: any): void;
}
//# sourceMappingURL=server-model-inserter.d.ts.map