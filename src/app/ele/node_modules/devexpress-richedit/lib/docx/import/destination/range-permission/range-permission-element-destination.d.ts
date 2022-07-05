import { Table } from '../../../../core/model/tables/main-structures/table';
import { XmlReader } from '../../../zip/xml-reader';
import { ImportRangePermissionInfo } from '../../model/import-range-permission-info';
import { LeafElementDestination } from '../destination';
export declare abstract class RangePermissionElementDestination extends LeafElementDestination {
    static predefinedGroupNames: Record<string, string>;
    static actualGroupNames: Record<string, string>;
    private static createActualGroupNames;
    processElementOpen(reader: XmlReader): Promise<void>;
    protected getActualGroupName(value: string): string;
    protected getLastRowIndexFromTable(table: Table): number;
    protected abstract assignRangePermissionProperties(rangePermission: ImportRangePermissionInfo, reader: XmlReader): any;
}
//# sourceMappingURL=range-permission-element-destination.d.ts.map