import { IModelManager } from '../../core/model-manager';
import { NumberingList } from '../../core/model/numbering-lists/numbering-list';
import { ListTypeApi } from './enums';
import { ListLevelSettingsApi } from './list-level-settings';
export declare class ListApi {
    private _native;
    private _list;
    constructor(native: IModelManager, list: NumberingList);
    get index(): number;
    get type(): ListTypeApi;
    get levelProperties(): ListLevelSettingsApi[];
    set levelProperties(settings: ListLevelSettingsApi[]);
}
//# sourceMappingURL=lists.d.ts.map