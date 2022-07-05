import { RtfImportData } from '../../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../../base/destination';
import { DestinationType } from '../../utils/destination-type';
export declare class ShapePictureDestination extends DestinationBase {
    static readonly trueIntValue: number;
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static onPictKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    private imageInfo;
    private shapeProperties;
    protected createClone(): DestinationBase;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    beforePopRtfState(): void;
    private prepareInfo;
}
//# sourceMappingURL=shape-picture-destination.d.ts.map