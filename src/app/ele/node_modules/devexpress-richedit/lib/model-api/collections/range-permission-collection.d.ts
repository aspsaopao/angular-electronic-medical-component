import { RangePermission } from '../../core/model/range-permissions';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { IInterval } from '../interval';
import { RangePermissionApi } from '../range-permission';
import { Collection } from './collection';
export interface IRangePermissionSearchOptions {
    position?: number | IInterval | IInterval[];
    userName?: string | RegExp;
    group?: string | RegExp;
}
export declare class RangePermissionCollection extends Collection<RangePermissionApi, RangePermission> {
    protected _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument);
    protectRange(intervals: IInterval[], userName?: string, group?: string): RangePermissionApi[];
    find(options: IRangePermissionSearchOptions): RangePermissionApi[];
    isAllowEdit(position: number | IInterval | IInterval[]): boolean;
    create(interval: IInterval, userName?: string, group?: string): RangePermissionApi;
    protected _getItem(coreItem: RangePermission): RangePermissionApi;
    protected _getCoreItems(): RangePermission[];
}
//# sourceMappingURL=range-permission-collection.d.ts.map