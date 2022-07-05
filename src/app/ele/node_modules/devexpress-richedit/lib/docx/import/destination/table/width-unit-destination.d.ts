import { TableWidthUnit } from '../../../../core/model/tables/secondary-structures/table-units';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
export declare class WidthUnitDestination extends LeafElementDestination {
    protected setMaskTrue: () => void;
    protected widthUnit: TableWidthUnit;
    constructor(data: Data, widthUnit: TableWidthUnit, setMaskTrue: () => void);
    processElementOpen(reader: XmlReader): Promise<void>;
    protected isValid(value: number): boolean;
}
export declare class WidthUnitNonNegativeDestination extends WidthUnitDestination {
    protected isValid(value: number): boolean;
}
//# sourceMappingURL=width-unit-destination.d.ts.map