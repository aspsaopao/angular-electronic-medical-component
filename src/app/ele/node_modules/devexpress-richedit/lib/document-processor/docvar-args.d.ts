import { IntervalApi } from '../model-api/interval';
import { DocumentProcessorBaseApi } from './public/processor';
export declare class EventArgs {
}
export declare class CalculateDocumentVariableEventArgs extends EventArgs {
    variableName: string;
    args: string[];
    value: null | string | DocumentProcessorBaseApi;
    keepLastParagraph: boolean;
    readonly fieldInterval: IntervalApi;
    constructor(fieldInterval: IntervalApi, variableName: string, args: string[]);
}
export declare class DocumentVariableData {
    callback: (value: null | string | DocumentProcessorBaseApi, keepLastParagraph?: boolean) => void;
    variableName: string;
    args: string[];
    readonly fieldInterval: IntervalApi;
    constructor(callback: (value: null | string | DocumentProcessorBaseApi, keepLastParagraph?: boolean) => void, fieldInterval: IntervalApi, variableName: string, args: string[]);
}
export declare class CalculateDocumentVariableAsyncEventArgs extends EventArgs {
    readonly data: DocumentVariableData[];
    constructor(data: DocumentVariableData[]);
}
//# sourceMappingURL=docvar-args.d.ts.map