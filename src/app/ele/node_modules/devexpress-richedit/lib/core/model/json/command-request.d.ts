import { HistoryItemIntervalState } from '../history/states/history-item-state';
import { HistoryItemTextBufferStateObject } from '../history/states/history-item-state-object';
import { RunType } from '../runs/run-type';
import { CommandType } from './command-type';
export declare abstract class ServerCommandRequest {
    protected subDocumentId: number;
    protected type: CommandType;
    params: {
        [key: string]: any;
    };
    id: number;
    processOnCallback: boolean;
    constructor(requestType: CommandType, subDocumentId: number, commandParams: {
        [key: string]: any;
    });
    getJsonObject(withPostData: boolean): any;
    private prepareParams;
    static isEditRequest(request: ServerCommandRequest): boolean;
    static isEditCommandType(type: CommandType): boolean;
    static isLoadCommandType(type: CommandType): boolean;
    static isUIBlockingCommandType(type: CommandType): boolean;
    isOpenDocumentRequest(): boolean;
    isSaveDocumentRequest(): boolean;
    isSpellCheckerRequest(): boolean;
    isLoadNextChunksRequest(): boolean;
    isGetSetRtfRequest(): boolean;
    isForcePushRequest(): boolean;
    isPdfExportRequest(): boolean;
    extendTextRequest(_subDocumentId: number, _position: number, _textLength: number, _characterPropertiesJSON: any, _characterStyleName: string, _type: RunType, _text: string): boolean;
}
export declare class EditCommandRequest extends ServerCommandRequest {
    editIncId: number;
    getJsonObject(withPostData: boolean): any;
}
export declare class LoadCommandRequest extends ServerCommandRequest {
    isOpenDocumentRequest(): boolean;
    isSaveDocumentRequest(): boolean;
    isSpellCheckerRequest(): boolean;
    isGetSetRtfRequest(): boolean;
    isLoadNextChunksRequest(): boolean;
    isForcePushRequest(): boolean;
    isPdfExportRequest(): boolean;
}
export declare class EditTextBufferCommandRequest extends EditCommandRequest {
    text: string;
    constructor(requestType: CommandType, subDocumentId: number, text: string, commandParams: {
        [key: string]: any;
    });
    getJsonObject(withPostData: boolean): any;
    extendTextRequest(subDocumentId: number, position: number, textLength: number, characterPropertiesJSON: any, characterStyleName: string, type: RunType, text: string): boolean;
}
export declare class ClientServerTextBufferChangedCommandRequest extends EditCommandRequest {
    state: HistoryItemIntervalState<HistoryItemTextBufferStateObject>;
    constructor(requestType: CommandType, subDocumentId: number, state: HistoryItemIntervalState<HistoryItemTextBufferStateObject>, commandParams: {
        [key: string]: any;
    });
    getJsonObject(withPostData: boolean): any;
}
export declare class RequestParams {
    lockQueue: boolean;
    immediateSend: boolean;
    processOnCallback: boolean;
    constructor(lockQueue?: boolean, immediateSend?: boolean, processOnCallback?: boolean);
}
//# sourceMappingURL=command-request.d.ts.map