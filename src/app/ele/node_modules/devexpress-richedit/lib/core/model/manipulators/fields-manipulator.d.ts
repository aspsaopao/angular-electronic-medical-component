import { FormatterManager } from '../../layout-formatter/managers/formatter-manager';
import { DocumentModel } from '../document-model';
import { Field, HyperlinkInfo } from '../fields/field';
import { FieldRequestManager } from '../fields/field-request-manager';
import { UpdateFieldsOptions } from '../fields/tree-creator';
import { SubDocument, SubDocumentIntervals } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class UpdateFieldsManipulatorParams {
    subDocsInfo: SubDocumentIntervals[];
    callback: (result: UpdateFieldsManipulatorResult) => void;
    updateOptions: UpdateFieldsOptions;
    constructor(subDocsInfo: SubDocumentIntervals[], callback?: (result: UpdateFieldsManipulatorResult) => void, updateOptions?: UpdateFieldsOptions);
}
export declare class UpdateFieldsManipulatorResult {
    subDocsInfo: SubDocumentIntervals[];
    constructor(subDocsInfo: SubDocumentIntervals[]);
}
export declare class FieldsManipulator extends BaseManipulator {
    private currentlyUpdatedSubDocumentsInfo;
    private requestId;
    setHyperlinkInfoViaHistory(subDocument: SubDocument, fieldIndex: number, newHyperlinkInfo: HyperlinkInfo): void;
    setHyperlinkInfoInner(subDocument: SubDocument, fieldIndex: number, newHyperlinkInfo: HyperlinkInfo): HyperlinkInfo;
    setHyperlinkInfoWithReplaceResultAndCode(subDocument: SubDocument, fieldIndex: number, newHyperlinkInfo: HyperlinkInfo, shownText: string): void;
    setAllFieldsShowCode(showCode: boolean, subDocuments: SubDocument[]): void;
    setFieldShowCode(subDocument: SubDocument, field: Field, showCode: boolean): void;
    continueUpdateFields(model: DocumentModel, responce: any): void;
    updateFields(layoutFormatterManager: FormatterManager, requestManager: FieldRequestManager, options: UpdateFieldsManipulatorParams): boolean;
    get isBusy(): boolean;
    private allSubDocsByRequestUpdated;
    private collectResult;
    removeHyperlink(subDocument: SubDocument, field: Field): void;
    changeHyperlinkInfo(subDocument: SubDocument, field: Field | undefined | null, hyperlinkInfo: HyperlinkInfo, resultText?: string): boolean;
}
//# sourceMappingURL=fields-manipulator.d.ts.map