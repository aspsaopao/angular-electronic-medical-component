import { FormatterManager } from '../../layout-formatter/managers/formatter-manager';
import { IModelManager } from '../../model-manager';
import { ModelIterator } from '../model-iterator';
import { SubDocument, SubDocumentIntervals } from '../sub-document';
import { Field } from './field';
import { FieldRequestManager } from './field-request-manager';
import { FieldCodeParser } from './parsers/field-code-parser';
export declare class FieldUpdateResult {
    subDocIntervals: SubDocumentIntervals;
    constructor(subDocIntervals: SubDocumentIntervals);
}
export declare class UpdateFieldsOptions {
    updateToc: boolean;
    updateFillIn: boolean;
    constructor(updateToc?: boolean, updateFillIn?: boolean);
}
export declare class FieldsWaitingForUpdate {
    static TOC_NAME: string;
    private static parsersMap;
    callback: (result: FieldUpdateResult) => void;
    subDocument: SubDocument;
    private get fields();
    private infoForFutureUpdate;
    private savedSelectionIntervals;
    private modelManager;
    private layoutFormatterManager;
    requestManager: FieldRequestManager;
    private options;
    constructor(modelManager: IModelManager, layoutFormatterManager: FormatterManager, requestManager: FieldRequestManager, subDocumentIntervals: SubDocumentIntervals, options: UpdateFieldsOptions, callback: (result: FieldUpdateResult) => void);
    update(response: any, immediateSendRequest?: boolean): void;
    endAction(): void;
    private continueUpdateCurrentInterval;
    static getParser(modelManager: IModelManager, layoutFormatterManager: FormatterManager, requestManager: FieldRequestManager, subDocument: SubDocument, field: Field): FieldCodeParser | null;
    static findName(modelIterator: ModelIterator): FindFieldNameResult;
}
export declare class FindFieldNameResult {
    fieldName: string;
    fieldNameFirstLetterPosition: number;
    constructor(fieldName: string, fieldNameFirstLetterPosition: number);
}
//# sourceMappingURL=tree-creator.d.ts.map