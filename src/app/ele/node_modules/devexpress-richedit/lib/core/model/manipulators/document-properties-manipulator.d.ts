import { DocumentModel } from '../document-model';
import { BaseManipulator } from './base-manipulator';
export declare class DocumentPropertiesManipulator extends BaseManipulator {
    setDefaultTabWidth(documentModel: DocumentModel, newDefaultTabWidth: number): number;
    changePageColor(documentModel: DocumentModel, newPageColor: number): number;
    changeDifferentOddAndEvenPages(documentModel: DocumentModel, newValue: boolean): boolean;
}
//# sourceMappingURL=document-properties-manipulator.d.ts.map