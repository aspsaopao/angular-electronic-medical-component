import { ICloneable } from '@devexpress/utils/lib/types';
import { StyleBase } from '../../style-base';
import { TableConditionalStyle } from './table-conditional-style';
export declare class TableStyle extends StyleBase<TableStyle> implements ICloneable<TableStyle> {
    static SIMPLE_STYLENAME: string;
    static DEFAULT_STYLENAME: string;
    static DEFAULT_STYLENAME_2: string;
    baseConditionalStyle: TableConditionalStyle;
    conditionalStyles: Record<number, TableConditionalStyle>;
    constructor(styleName: string, localizedName: string, deleted: boolean, hidden: boolean, semihidden: boolean, isDefault: boolean, conditionalStyles: Record<number, TableConditionalStyle>, baseConditionalStyle: TableConditionalStyle, base64EncodedImage: string, id?: string);
    clone(): TableStyle;
}
//# sourceMappingURL=table-style.d.ts.map