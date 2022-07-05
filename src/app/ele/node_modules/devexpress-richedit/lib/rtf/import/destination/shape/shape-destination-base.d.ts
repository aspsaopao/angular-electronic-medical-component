import { RtfShapePropertiesInfo } from '../../model/shape/shape-properties-info';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
import { ShapePropertiesDestinationBase } from './shape-properties-destination-base';
export declare abstract class ShapeDestinationBase extends ShapePropertiesDestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    constructor(importer: RtfImportData, shapeProperties: RtfShapePropertiesInfo);
    static getThis(rtfImporter: RtfImportData): ShapeDestinationBase;
    static onShapeInstanceKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    protected processControlCharCore(_ch: string): void;
    protected processCharCore(_ch: string): void;
}
//# sourceMappingURL=shape-destination-base.d.ts.map