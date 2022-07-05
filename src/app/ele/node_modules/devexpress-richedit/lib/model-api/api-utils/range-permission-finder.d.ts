import { RangePermission } from '../../core/model/range-permissions';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
export declare function findRangePermissionsByIntervals(sourceCollection: RangePermission[], intervals: FixedInterval[]): RangePermission[];
export declare function findRangePermissions(sourceCollection: RangePermission[], check: (permission: RangePermission) => boolean): any[];
export declare function findRangePermission(sourceCollection: RangePermission[], coreInterval: FixedInterval, userName: string, group: string): RangePermission;
//# sourceMappingURL=range-permission-finder.d.ts.map