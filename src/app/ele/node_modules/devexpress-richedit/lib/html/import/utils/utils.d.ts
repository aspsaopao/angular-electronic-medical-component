import { BorderInfo } from '../../../core/model/borders/border-info';
import { TableBordersBase } from '../../../core/model/borders/table-border-base';
import { ColorProvider } from '../../../core/model/color/color-provider';
import { IMaskedProperties } from '../../../core/model/interfaces';
import { TableWidthUnit } from '../../../core/model/tables/secondary-structures/table-units';
export declare class HtmlImportUtils {
    static getTableWidthUnit(stringValue: string): TableWidthUnit;
    static getValueInTwips(stringValue: string): number;
    static getBorderInfo(colorProvider: ColorProvider, borderWidth: string, borderStyle: string, borderColor: string): BorderInfo;
    static importBorder<TMask, TProps extends IMaskedProperties<TMask>>(colorProvider: ColorProvider, props: TProps, borders: TableBordersBase, mask: TMask, setBorder: (brds: TableBordersBase, brd: BorderInfo) => void, borderWidth: string, borderStyle: string, borderColor: string): void;
    static setBorders<TMask, TProps extends IMaskedProperties<TMask>>(colorProvider: ColorProvider, props: TProps, borders: TableBordersBase, style: CSSStyleDeclaration, topMask: TMask, rightMask: TMask, bottomMask: TMask, leftMask: TMask): void;
    private static MapBorderStyleToType;
    static getPropertyByMap<T>(map: {
        [key: string]: T;
    }, elementBy: string, defaultValue: T): T;
}
//# sourceMappingURL=utils.d.ts.map