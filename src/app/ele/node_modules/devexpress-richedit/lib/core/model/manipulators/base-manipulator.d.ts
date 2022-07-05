import { DocumentModel } from '../document-model';
import { IHistory } from '../history/base/i-history';
import { ModelManipulator } from './model-manipulator';
export declare class BaseManipulator {
    modelManipulator: ModelManipulator;
    get history(): IHistory;
    get model(): DocumentModel;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=base-manipulator.d.ts.map