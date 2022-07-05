import { RtfShapePropertiesInfo } from '../../model/shape/shape-properties-info';
import { RtfImportData } from '../../rtf-import-data';
import { DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
import { ShapeDestinationBase } from './shape-destination-base';
export declare class ShapeDestination extends ShapeDestinationBase {
    protected get destinationType(): DestinationType;
    constructor(importer: RtfImportData, shapeProperties?: RtfShapePropertiesInfo);
    protected createClone(): DestinationBase;
    beforePopRtfState(): void;
}
//# sourceMappingURL=shape-destination.d.ts.map