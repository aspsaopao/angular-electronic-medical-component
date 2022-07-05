import { ModelManipulator } from '../../manipulators/model-manipulator';
import { ConstRangePermission } from '../../range-permissions';
import { SubDocument } from '../../sub-document';
import { HistoryItem } from '../base/history-item';
export declare abstract class RangePermissionHistoryItemBase extends HistoryItem {
    permissionTemplate: ConstRangePermission;
    boundSubDocument: SubDocument;
    constructor(modelManipulator: ModelManipulator, boundSubDocument: SubDocument, bkmTemplate: ConstRangePermission);
}
export declare class CreateRangePermissionHistoryItem extends RangePermissionHistoryItemBase {
    redo(): void;
    undo(): void;
}
export declare class DeleteRangePermissionHistoryItem extends RangePermissionHistoryItemBase {
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=range-permission-history-item.d.ts.map