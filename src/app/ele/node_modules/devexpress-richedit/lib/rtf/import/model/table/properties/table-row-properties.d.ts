import { ColorModelInfo } from '../../../../../core/model/color/color-model-info';
import { ShadingPattern } from '../../../../../core/model/shadings/shading-pattern';
import { TableRow } from '../../../../../core/model/tables/main-structures/table-row';
import { TableRowProperties } from '../../../../../core/model/tables/properties/table-row-properties';
import { TableHeightUnit, TableWidthUnit } from '../../../../../core/model/tables/secondary-structures/table-units';
import { TableFloatingPositionInfo } from './table-floating-position-info';
export declare class RtfTableRowProperties {
    coreProperties: TableRowProperties;
    left: number;
    foreColorIndex: number;
    backColorIndex: number;
    readonly cellSpacing: TableWidthUnit;
    floatingPosition: TableFloatingPositionInfo;
    shadingPattern: ShadingPattern;
    foreColor: ColorModelInfo;
    backColor: ColorModelInfo;
    widthBefore: TableWidthUnit;
    widthAfter: TableWidthUnit;
    gridBefore: number;
    gridAfter: number;
    height: TableHeightUnit;
    constructor();
    copyFrom(obj: RtfTableRowProperties): void;
    apply(row: TableRow): void;
}
//# sourceMappingURL=table-row-properties.d.ts.map