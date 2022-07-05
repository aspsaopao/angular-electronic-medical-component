import { MaskedCharacterProperties } from '../../../core/model/character/character-properties';
import { MaskedParagraphProperties } from '../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../core/model/paragraph/paragraph-style';
import { TableCellProperties } from '../../../core/model/tables/properties/table-cell-properties';
import { TableProperties } from '../../../core/model/tables/properties/table-properties';
import { TableRowProperties } from '../../../core/model/tables/properties/table-row-properties';
import { ConditionalTableStyleFormatting } from '../../../core/model/tables/secondary-structures/table-base-structures';
export declare class OpenXmlStyleConditionalTableFormattingInfo {
    conditionType: ConditionalTableStyleFormatting;
    characterFormatting: MaskedCharacterProperties;
    paragraphFormatting: MaskedParagraphProperties;
    tabs: TabProperties;
    tableProperties: TableProperties;
    tableRowProperties: TableRowProperties;
    tableCellProperties: TableCellProperties;
}
//# sourceMappingURL=open-xml-style-conditional-table-formatting-info.d.ts.map