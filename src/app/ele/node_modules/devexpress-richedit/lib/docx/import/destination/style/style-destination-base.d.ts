import { MaskedCharacterProperties } from '../../../../core/model/character/character-properties';
import { MaskedParagraphProperties } from '../../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../../core/model/paragraph/paragraph-style';
import { TableCellProperties } from '../../../../core/model/tables/properties/table-cell-properties';
import { TableProperties } from '../../../../core/model/tables/properties/table-properties';
import { TableRowProperties } from '../../../../core/model/tables/properties/table-row-properties';
import { Data } from '../../data';
import { ElementDestination, ElementHandler } from '../destination';
export declare abstract class StyleDestinationBase extends ElementDestination {
    protected static handlerTable: Record<string, ElementHandler>;
    readonly characterFormatting: MaskedCharacterProperties;
    readonly paragraphFormatting: MaskedParagraphProperties;
    readonly tabs: TabProperties;
    readonly tableProperties: TableProperties;
    readonly tableRowProperties: TableRowProperties;
    readonly tableCellProperties: TableCellProperties;
    numberingId: number;
    listLevelIndex: number;
    constructor(data: Data);
    protected static getThis<T extends StyleDestinationBase>(data: Data): T;
}
//# sourceMappingURL=style-destination-base.d.ts.map