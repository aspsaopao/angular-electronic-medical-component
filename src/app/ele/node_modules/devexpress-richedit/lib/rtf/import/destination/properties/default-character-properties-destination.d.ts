import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationSubDocument } from '../sub-document/destination-sub-document';
import { DestinationType } from '../utils/destination-type';
export declare class DefaultCharacterPropertiesDestination extends DestinationSubDocument {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    constructor(importer: RtfImportData);
    get canAppendText(): boolean;
    beforePopRtfState(): void;
    protected createClone(): DestinationBase;
    protected processCharCore(_ch: string): void;
    finalizeSubDocumentCreation(): void;
}
//# sourceMappingURL=default-character-properties-destination.d.ts.map