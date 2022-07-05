import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { Table } from '../../../tables/main-structures/table';
import { TableBasedHistoryItem } from './create-table-history-item';
export declare class RemoveTableHistoryItem extends TableBasedHistoryItem {
    cellsRanges: FixedInterval[][];
    table: Table;
    redo(): void;
    undo(): void;
}
//# sourceMappingURL=remove-table-history-item.d.ts.map