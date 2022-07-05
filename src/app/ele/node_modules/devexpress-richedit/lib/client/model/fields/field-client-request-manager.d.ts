import { FieldRequestManager } from '../../../core/model/fields/field-request-manager';
import { SubDocument } from '../../../core/model/sub-document';
import { CalculateDocumentVariableAsyncEventArgs } from '../../../document-processor/docvar-args';
import { CalculateDocumentVariableEventArgs } from '../../public/events';
export interface IDataSource {
    items(): any[];
}
export declare class FieldClientRequestManagerOptions {
    readonly dataSource: IDataSource | null;
    readonly useAsyncVersion: () => boolean;
    readonly raiseCalculateDocumentVariable: (args: CalculateDocumentVariableEventArgs) => void;
    readonly raiseCalculateDocumentVariableAnync: (args: CalculateDocumentVariableAsyncEventArgs) => void;
    constructor(dataSource: IDataSource | null, useAsyncVersion: () => boolean, raiseCalculateDocumentVariable: (args: CalculateDocumentVariableEventArgs) => void, raiseCalculateDocumentVariableAnync: (args: CalculateDocumentVariableAsyncEventArgs) => void);
}
export declare class FieldClientRequestManager extends FieldRequestManager {
    private options;
    private currentRecord;
    private lastActiveRecord;
    constructor(options: FieldClientRequestManagerOptions);
    forceSendDelayedRequests(): void;
    sendRequest(subDocument: SubDocument, activeRecord: number, _immediateSendRequest: boolean): void;
    private asyncUpdate;
    private syncUpdate;
    private getDocumentVariableUpdateResult;
    private getRecordValue;
    private getRecord;
}
//# sourceMappingURL=field-client-request-manager.d.ts.map