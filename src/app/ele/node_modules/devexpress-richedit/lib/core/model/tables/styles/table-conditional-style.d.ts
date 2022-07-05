import { MaskedCharacterProperties } from '../../character/character-properties';
import { MaskedParagraphProperties } from '../../paragraph/paragraph-properties';
import { TabProperties } from '../../paragraph/paragraph-style';
import { TableCellProperties } from '../properties/table-cell-properties';
import { TableProperties } from '../properties/table-properties';
import { TableRowProperties } from '../properties/table-row-properties';
export declare class TableConditionalStyle {
    tableProperties: TableProperties;
    tableRowProperties: TableRowProperties;
    tableCellProperties: TableCellProperties;
    maskedParagraphProperties: MaskedParagraphProperties;
    maskedCharacterProperties: MaskedCharacterProperties;
    tabs: TabProperties;
    constructor(tableProperties: TableProperties, tableRowProperties: TableRowProperties, tableCellProperties: TableCellProperties, maskedParagraphProperties: MaskedParagraphProperties, maskedCharacterProperties: MaskedCharacterProperties, tabs: TabProperties);
    clone(): TableConditionalStyle;
}
//# sourceMappingURL=table-conditional-style.d.ts.map