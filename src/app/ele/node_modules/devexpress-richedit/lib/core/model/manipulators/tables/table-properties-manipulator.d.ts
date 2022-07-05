import { BorderInfo } from '../../borders/border-info';
import { ShadingInfo } from '../../shadings/shading-info';
import { TableLayoutType, TableLookTypes, TableRowAlignment } from '../../tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../tables/secondary-structures/table-units';
import { ITableComplexPropertyWithUseManipulator, ITablePropertyManipulator, ITablePropertyWithUseManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class TablePropertiesManipulator {
    cellMargins: ITableComplexPropertyWithUseManipulator<TableWidthUnit>;
    cellSpacing: ITablePropertyWithUseManipulator<TableWidthUnit>;
    indent: ITablePropertyWithUseManipulator<TableWidthUnit>;
    preferredWidth: ITablePropertyManipulator<TableWidthUnit>;
    borders: ITableComplexPropertyWithUseManipulator<BorderInfo>;
    tableStyleColumnBandSize: ITablePropertyWithUseManipulator<number>;
    tableStyleRowBandSize: ITablePropertyWithUseManipulator<number>;
    avoidDoubleBorders: ITablePropertyWithUseManipulator<boolean>;
    layoutType: ITablePropertyWithUseManipulator<TableLayoutType>;
    lookTypes: ITablePropertyManipulator<TableLookTypes>;
    shadingInfo: ITablePropertyWithUseManipulator<ShadingInfo>;
    tableRowAlignment: ITablePropertyWithUseManipulator<TableRowAlignment>;
    isTableOverlap: ITablePropertyWithUseManipulator<boolean>;
    constructor(manipulator: ModelManipulator);
}
//# sourceMappingURL=table-properties-manipulator.d.ts.map