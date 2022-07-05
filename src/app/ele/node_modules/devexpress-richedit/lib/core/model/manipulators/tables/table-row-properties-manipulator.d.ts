import { TableRowAlignment } from '../../tables/secondary-structures/table-base-structures';
import { TableHeightUnit, TableWidthUnit } from '../../tables/secondary-structures/table-units';
import { ITableRowPropertyManipulator, ITableRowPropertyWithUseManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class TableRowPropertiesManipulator {
    height: ITableRowPropertyManipulator<TableHeightUnit>;
    cellSpacing: ITableRowPropertyWithUseManipulator<TableWidthUnit>;
    cantSplit: ITableRowPropertyWithUseManipulator<boolean>;
    hideCellMark: ITableRowPropertyWithUseManipulator<boolean>;
    header: ITableRowPropertyWithUseManipulator<boolean>;
    tableRowAlignment: ITableRowPropertyWithUseManipulator<TableRowAlignment>;
    gridAfter: ITableRowPropertyManipulator<number>;
    gridBefore: ITableRowPropertyManipulator<number>;
    widthAfter: ITableRowPropertyManipulator<TableWidthUnit>;
    widthBefore: ITableRowPropertyManipulator<TableWidthUnit>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=table-row-properties-manipulator.d.ts.map