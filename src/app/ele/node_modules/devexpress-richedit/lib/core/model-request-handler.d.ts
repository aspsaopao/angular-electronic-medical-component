import { RequestParams, ServerCommandRequest } from './model/json/command-request';
export interface IModelRequestHandler {
    pushRequest(request: ServerCommandRequest, requestParams: RequestParams): any;
}
//# sourceMappingURL=model-request-handler.d.ts.map