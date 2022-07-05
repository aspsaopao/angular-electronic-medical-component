import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { FieldSubDestination } from './field-sub-destination';
export declare class TableContentFieldDestination extends FieldSubDestination {
    get destinationType(): DestinationType;
    static tcFieldName: string;
    static quote: string;
    static space: string;
    constructor(importer: RtfImportData, createField: boolean);
    protected tableOfContentsEntryLevelNumberKeyword(parameterValue: number, hasParameter: boolean): void;
    protected tableOfContentsEntryTypeTableKeyword(parameterValue: number, hasParameter: boolean): void;
    protected processTextCore(text: string): void;
    protected createInstance(): FieldSubDestination;
    onDestinationClose(): void;
    openQuotes(): void;
    closeQuotes(): void;
    insertSpace(): void;
}
//# sourceMappingURL=table-content-field-destination.d.ts.map