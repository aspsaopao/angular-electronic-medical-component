import { IModelChangesListener } from '../core/interfaces/model-changes-listener';
import { ModelChange } from '../core/model/changes/change';
import { ServerDispatcher } from './server-dispatcher';
export declare class ServerDispatcherModelChangesListener implements IModelChangesListener {
    private dispatcher;
    constructor(dispatcher: ServerDispatcher);
    modelChanged(change: ModelChange): void;
    private pushPropertyRequest;
    private pushStateBasedRequestNew;
    private pushStateBasedRequest;
}
//# sourceMappingURL=server-dispatcher-model-changes-listener.d.ts.map