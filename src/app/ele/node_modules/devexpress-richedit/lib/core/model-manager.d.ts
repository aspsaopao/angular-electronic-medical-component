import { IBatchUpdatableObject } from '@devexpress/utils/lib/class/batch-updatable';
import { DocumentModel } from './model/document-model';
import { IHistory } from './model/history/base/i-history';
import { ModelManipulator } from './model/manipulators/model-manipulator';
import { RichOptions } from './model/options/rich-options';
export interface IModelManager {
    model: DocumentModel;
    modelManipulator: ModelManipulator;
    history: IHistory;
    richOptions: RichOptions;
    readonly clientMode: boolean;
}
export declare abstract class ModelManager implements IModelManager {
    model: DocumentModel;
    modelManipulator: ModelManipulator;
    history: IHistory;
    richOptions: RichOptions;
    abstract get clientMode(): boolean;
    constructor(model: DocumentModel | null, options: RichOptions, batchUpdatableObject: IBatchUpdatableObject);
}
export declare class ClientModelManager extends ModelManager {
    get clientMode(): boolean;
}
export declare class ServerModelManager extends ModelManager {
    get clientMode(): boolean;
}
//# sourceMappingURL=model-manager.d.ts.map