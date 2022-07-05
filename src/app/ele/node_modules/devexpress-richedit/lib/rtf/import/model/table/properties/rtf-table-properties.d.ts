import { Table } from '../../../../../core/model/tables/main-structures/table';
import { TableProperties } from '../../../../../core/model/tables/properties/table-properties';
import { TableLookTypes } from '../../../../../core/model/tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../../../core/model/tables/secondary-structures/table-units';
export declare class RtfTableProperties {
    coreProperties: TableProperties;
    _halfSpace: number;
    useHalfSpace: boolean;
    rightToLeft: boolean;
    style: number;
    preferredWidth: TableWidthUnit;
    lookTypes: TableLookTypes;
    constructor();
    get halfSpace(): number;
    set halfSpace(value: number);
    isChanged(): boolean;
    copyFrom(obj: RtfTableProperties): void;
    apply(table: Table): void;
}
//# sourceMappingURL=rtf-table-properties.d.ts.map