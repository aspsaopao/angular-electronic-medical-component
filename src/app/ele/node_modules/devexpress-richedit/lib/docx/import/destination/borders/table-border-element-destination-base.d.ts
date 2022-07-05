import { BorderInfo } from '../../../../core/model/borders/border-info';
import { BorderLineStyle } from '../../../../core/model/borders/enums';
import { ColorModelInfo } from '../../../../core/model/color/color-model-info';
import { ISetMaskedPropertySupport } from '../../../../core/rich-utils/common-interfaces';
import { XmlReader } from '../../../zip/xml-reader';
import { LeafSetMaskedPropertyDestination } from '../destination';
export declare class TableBorderElementDestinationBase<TProperties extends ISetMaskedPropertySupport<number, BorderInfo, TProperties>> extends LeafSetMaskedPropertyDestination<number, BorderInfo, TProperties> {
    get border(): BorderInfo;
    protected getColor(reader: XmlReader): ColorModelInfo;
    protected setBorderOffset(space: number): void;
    protected setBorderWidth(size: number): void;
    protected setBorderLineStyle(borderLineStyle: BorderLineStyle): void;
}
//# sourceMappingURL=table-border-element-destination-base.d.ts.map