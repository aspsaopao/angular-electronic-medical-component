import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { StringValueDestination } from '../base/string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare class ListLevelTextDestination extends StringValueDestination {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    levelTemplateId: number;
    protected createEmptyClone(): StringValueDestination;
    protected createClone(): DestinationBase;
    beforeNestedGroupFinished(nestedDestination: StringValueDestination): void;
    static onListLevelTemplateIdKeyword(importer: RtfImportData, parameterValue: number, hasParameter: boolean): void;
    static fixLevelTemplateId(levelTemplateId: number): number;
}
//# sourceMappingURL=list-level-text-destination.d.ts.map