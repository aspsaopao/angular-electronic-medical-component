import { BorderInfo } from '../../borders/border-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { TableCellVerticalAlignment, TextDirection } from '../../tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../tables/secondary-structures/table-units';
import { ITableCellComplexPropertyWithUseManipulator, ITableCellPropertyManipulator, ITableCellPropertyWithUseManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class TableCellPropertiesManipulator {
    cellMargins: ITableCellComplexPropertyWithUseManipulator<TableWidthUnit>;
    borders: ITableCellComplexPropertyWithUseManipulator<BorderInfo>;
    preferredWidth: ITableCellPropertyManipulator<TableWidthUnit>;
    hideCellMark: ITableCellPropertyWithUseManipulator<boolean>;
    noWrap: ITableCellPropertyWithUseManipulator<boolean>;
    fitText: ITableCellPropertyWithUseManipulator<boolean>;
    textDirection: ITableCellPropertyWithUseManipulator<TextDirection>;
    verticalAlignment: ITableCellPropertyWithUseManipulator<TableCellVerticalAlignment>;
    shadingInfo: ITableCellPropertyWithUseManipulator<ShadingInfo>;
    columnSpan: ITableCellPropertyManipulator<number>;
    verticalMerging: ITableCellPropertyManipulator<number>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=table-cell-properties-manipulator.d.ts.map