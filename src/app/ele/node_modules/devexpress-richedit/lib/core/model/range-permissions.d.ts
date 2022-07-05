import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IEquatable } from '@devexpress/utils/lib/types';
import { BookmarkBase } from './bookmarks';
import { DocumentModel } from './document-model';
import { DocumentProtectionSettings } from './options/protection';
import { PositionManager } from './position/position-manager';
export declare class RangePermission extends BookmarkBase {
    static Everyone_GROUP_NAME: string;
    static Current_GROUP_NAME: string;
    static Editors_GROUP_NAME: string;
    static Owners_GROUP_NAME: string;
    static Contributors_GROUP_NAME: string;
    static Administrators_GROUP_NAME: string;
    userName: string;
    group: string;
    constructor(positionManager: PositionManager, interval: ConstInterval, userName: string, group: string);
    isGranted(settings: DocumentProtectionSettings): boolean;
    private static allow;
    get end(): number;
    get length(): number;
    get interval(): FixedInterval;
    get constRangePermission(): ConstRangePermission;
    getRangePermissionColor(model: DocumentModel, documentProtection: DocumentProtectionSettings): string;
    clone(positionManager: PositionManager): RangePermission;
    equals(obj: RangePermission): boolean;
}
export declare class ConstRangePermission extends ConstInterval implements IEquatable<ConstRangePermission> {
    get start(): number;
    get length(): number;
    get end(): number;
    interval: BoundaryInterval;
    userName: string;
    group: string;
    constructor(interval: ConstInterval, userName: string, group: string);
    equals(obj: ConstRangePermission): boolean;
    static comparer<TA extends RangePermission | ConstRangePermission, TB extends RangePermission | ConstRangePermission>(a: TA, b: TB): number;
}
//# sourceMappingURL=range-permissions.d.ts.map