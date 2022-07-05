import { TableWidthUnit } from '../../../../../../core/model/tables/secondary-structures/table-units';
import { ISetMaskedPropertyDescriptor, ISetMaskedPropertySupport } from '../../../../../../core/rich-utils/common-interfaces';
import { Data } from '../../../../data';
import { ElementDestination, ElementHandler, ElementHandlerTable } from '../../../destination';
declare type DescType<TProperties extends ISetMaskedPropertySupport<number, TableWidthUnit, TProperties>> = ISetMaskedPropertyDescriptor<number, TableWidthUnit, TProperties>;
interface IDescriptors<TProperties extends ISetMaskedPropertySupport<number, TableWidthUnit, TProperties>> {
    top: DescType<TProperties>;
    right: DescType<TProperties>;
    bottom: DescType<TProperties>;
    left: DescType<TProperties>;
}
export declare class TableCellMarginsDestination<TProperties extends ISetMaskedPropertySupport<number, TableWidthUnit, TProperties>> extends ElementDestination {
    protected properties: TProperties;
    protected descriptors: IDescriptors<TProperties>;
    constructor(data: Data, properties: TProperties, descriptors: IDescriptors<TProperties>);
    protected get elementHandlerTable(): ElementHandlerTable;
    getHandler(desc: DescType<TProperties>): ElementHandler;
}
export {};
//# sourceMappingURL=table-cell-margins-destination.d.ts.map