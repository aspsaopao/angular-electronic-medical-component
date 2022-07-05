import { Table } from '../../../tables/main-structures/table';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class TableStartPositionShiftedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    table: Table;
    oldPosition: number;
    newPosition: number;
    readonly type = ModelChangeType.TableStartPositionShifted;
    constructor(subDocumentId: number, table: Table, oldPosition: number, newPosition: number);
}
//# sourceMappingURL=start-position-shifted.d.ts.map