import { ConstRangePermission } from '../range-permissions';
import { SubDocument } from '../sub-document';
import { BaseManipulator } from './base-manipulator';
export declare class RangePermissionManipulator extends BaseManipulator {
    createRangePermission(subDocument: SubDocument, permissionTemplate: ConstRangePermission): void;
    deleteRangePermission(subDocument: SubDocument, permissionTemplate: ConstRangePermission, permissionIndex?: number): void;
}
//# sourceMappingURL=range-permission-manipulator.d.ts.map