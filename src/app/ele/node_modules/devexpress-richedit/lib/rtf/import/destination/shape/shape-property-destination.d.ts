import { RtfShapePropertiesInfo } from '../../model/shape/shape-properties-info';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ShapePropertyDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    properties: RtfShapePropertiesInfo;
    propertyName: string;
    value: any;
    constructor(rtfImporter: RtfImportData, properties: RtfShapePropertiesInfo);
    protected processControlCharCore(_ch: string): void;
    protected processKeywordCore(keyword: string, parameterValue: number, hasParameter: boolean): boolean;
    protected processCharCore(_ch: string): void;
    protected createClone(): DestinationBase;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    beforePopRtfState(): void;
}
//# sourceMappingURL=shape-property-destination.d.ts.map