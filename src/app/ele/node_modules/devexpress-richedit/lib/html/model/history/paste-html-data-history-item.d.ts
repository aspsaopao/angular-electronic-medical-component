import { HistoryRun } from '../../../core/model/character/history-runs';
import { IntervalBasedHistoryItem } from '../../../core/model/history/base/interval-based-history-item';
import { ModelManipulator } from '../../../core/model/manipulators/model-manipulator';
import { SubDocumentInterval } from '../../../core/model/sub-document';
import { Table } from '../../../core/model/tables/main-structures/table';
import { MaskedCharacterPropertiesBundle } from '../../../core/rich-utils/properties-bundle';
import { TableInfo } from '../../import/containers/tables';
export declare class PasteHtmlDataHistoryItem extends IntervalBasedHistoryItem {
    historyRuns: HistoryRun[];
    historyTables: Table[];
    tablesInfo: TableInfo[];
    charPropsBundle: MaskedCharacterPropertiesBundle;
    constructor(modelManipulator: ModelManipulator, subDocInterval: SubDocumentInterval, historyRuns: HistoryRun[], tablesInfo: TableInfo[], charPropsBundle: MaskedCharacterPropertiesBundle);
    redo(): void;
    undo(): void;
    private insertRuns;
    private insertTables;
}
//# sourceMappingURL=paste-html-data-history-item.d.ts.map