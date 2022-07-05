import { HsvInfo } from '../../model/color-collections';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ShapePropertyHsvValueDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    readonly hsvInfo: HsvInfo;
    constructor(importer: RtfImportData, hsvInfo?: HsvInfo);
    static getThis(importer: RtfImportData): ShapePropertyHsvValueDestination;
    static onAccentOneKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onAccentTwoKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onAccentThreeKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onAccentFourKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onAccentFiveKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onAccentSixKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onTintKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static onShadeKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    createClone(): DestinationBase;
}
//# sourceMappingURL=shape-property-hsv-value-destination.d.ts.map