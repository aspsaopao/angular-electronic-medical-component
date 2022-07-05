import { ColorModelInfo } from '../../../../../core/model/color/color-model-info';
import { ShadingPattern } from '../../../../../core/model/shadings/shading-pattern';
import { TableCell } from '../../../../../core/model/tables/main-structures/table-cell';
import { TableCellProperties } from '../../../../../core/model/tables/properties/table-cell-properties';
import { TableCellMergingState } from '../../../../../core/model/tables/secondary-structures/table-base-structures';
import { TableWidthUnit } from '../../../../../core/model/tables/secondary-structures/table-units';
export declare class RtfTableCellProperties {
    coreProperties: TableCellProperties;
    right: number;
    horizontalMerging: TableCellMergingState;
    shadingPattern: ShadingPattern;
    foreColor: ColorModelInfo;
    backColor: ColorModelInfo;
    verticalMerging: TableCellMergingState;
    preferredWidth: TableWidthUnit;
    constructor();
    copyFrom(obj: RtfTableCellProperties): void;
    apply(cell: TableCell): void;
}
//# sourceMappingURL=rtf-table-cell-properties.d.ts.map