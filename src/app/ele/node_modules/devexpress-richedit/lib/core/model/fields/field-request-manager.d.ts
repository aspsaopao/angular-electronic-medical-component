import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocument } from '../sub-document';
import { FieldParameter } from './parsers/field-code-parser';
export declare type FieldRequestHandler = (fieldRequestManager: FieldRequestManager) => void;
export declare abstract class FieldRequestManager {
    private static fieldId;
    protected activeRecord: number;
    protected updateMap: Record<number, Record<number, FieldRequestData>>;
    protected getSubDocumentData(subDocument: SubDocument): Record<number, FieldRequestData>;
    clear(subDocument: SubDocument): void;
    add(subDocument: SubDocument, data: FieldRequestData): number;
    checkResponse(subDocument: SubDocument, response: any): void;
    abstract sendRequest(subDocument: SubDocument, activeRecord: number, immediateSendRequest: boolean): any;
    abstract forceSendDelayedRequests(): any;
    requestAsJson(subDocument: SubDocument): any;
}
export declare class TocFieldRequestManager extends FieldRequestManager {
    sendRequest(_subDocument: SubDocument, _activeRecord: number, _immediateSendRequest: boolean): void;
    forceSendDelayedRequests(): void;
}
export declare abstract class FieldRequestData {
    abstract get serverUpdateFieldType(): ServerUpdateFieldType;
    abstract asJson(): any;
}
export declare class FieldDocVariableRequestData extends FieldRequestData {
    get serverUpdateFieldType(): ServerUpdateFieldType;
    fieldName: string;
    parameters: FieldParameter[];
    fieldInterval: FixedInterval;
    constructor(fieldInterval: FixedInterval, fieldName: string, parameters: FieldParameter[]);
    asJson(): any;
}
export declare class FieldMailMergeRequestData extends FieldRequestData {
    get serverUpdateFieldType(): ServerUpdateFieldType;
    fieldName: string;
    constructor(fieldName: string);
    asJson(): any;
}
export declare enum ServerUpdateFieldType {
    DocVariable = 1,
    MergeField = 2
}
//# sourceMappingURL=field-request-manager.d.ts.map