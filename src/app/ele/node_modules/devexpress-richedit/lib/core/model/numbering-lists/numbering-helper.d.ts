import { IModelManager } from '../../model-manager';
import { DocumentModel } from '../document-model';
import { SubDocument } from '../sub-document';
import { NumberingType } from './numbering-list';
export declare class NumberingHelper {
    static templateCodeStart: number;
    static templateCodeEnd: number;
    static generateNewTemplateCode(documentModel: DocumentModel): number;
    static isNewTemplateCode(documentModel: DocumentModel, templateCode: number): boolean;
    static getNumberingListTemplateIndex(documentModel: DocumentModel, type: NumberingType): number;
    static deleteNumberingList(modelManager: IModelManager, subDocument: SubDocument, paragraphIndices: number[]): void;
    private static resetParagraphLeftIndent;
    private static deleteNumberingListCore;
}
//# sourceMappingURL=numbering-helper.d.ts.map