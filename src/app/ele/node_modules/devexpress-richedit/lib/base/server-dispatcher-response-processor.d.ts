import { CommandType } from '../core/model/json/command-type';
import { WebCachesExporter } from '../core/model/json/web-caches-exporter';
import { ServerDispatcher } from './server-dispatcher';
export declare class ServerDispatcherResponseProcessor {
    static processCommandResponce(dispatcher: ServerDispatcher, commandType: CommandType, isNewWorkSession: boolean, jsonServerParams: any, jsonCacheData: any): void;
    private static processDocumentLoaded;
    private static processNewWorkSessionResponse;
    static processAfterHibernationResponce(dispatcher: ServerDispatcher, cachesExporter: WebCachesExporter): {};
}
//# sourceMappingURL=server-dispatcher-response-processor.d.ts.map