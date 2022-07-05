import { ICloneable } from '@devexpress/utils/lib/types';
import { CharacterProperties } from '../../character/character-properties';
import { StyleBase } from '../../style-base';
import { TableCellProperties } from '../properties/table-cell-properties';
export declare class TableCellStyle extends StyleBase<TableCellStyle> implements ICloneable<TableCellStyle> {
    static DEFAULT_STYLENAME: string;
    tableCellProperties: TableCellProperties;
    characterProperties: CharacterProperties;
    constructor(styleName: string, localizedName: string, deleted: boolean, hidden: boolean, semihidden: boolean, isDefault: boolean, tableCellProperties: TableCellProperties, characterProperties: CharacterProperties);
    clone(): TableCellStyle;
}
//# sourceMappingURL=table-cell-style.d.ts.map