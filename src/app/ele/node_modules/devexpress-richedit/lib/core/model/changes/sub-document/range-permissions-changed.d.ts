import { ConstRangePermission } from '../../range-permissions';
import { ModelChangeBase, SubDocumentChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class RangePermissionsChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    permission: ConstRangePermission;
    readonly type = ModelChangeType.RangePermissionsChanged;
    constructor(subDocumentId: number, permission: ConstRangePermission);
}
export declare class RangePermissionsPropertiesChange implements ModelChangeBase {
    readonly type = ModelChangeType.RangePermissionsPropertiesChanged;
    constructor();
}
//# sourceMappingURL=range-permissions-changed.d.ts.map