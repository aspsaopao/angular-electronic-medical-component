import { CodePageCharacterDecoder } from '../../encoding/code-page-character-decoder';
import { RtfImportData } from '../../rtf-import-data';
import { DestinationType } from '../utils/destination-type';
import { ControlCharTranslatorTable, DestinationBase } from './destination';
export declare class SkipDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    oldDecoder: CodePageCharacterDecoder;
    constructor(importer?: RtfImportData);
    beforePopRtfState(): void;
    protected processControlCharCore(_ch: string): void;
    protected processKeywordCore(keyword: string, parameterValue: number, hasParameter: boolean): boolean;
    protected processCharCore(_ch: string): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=skip-destination.d.ts.map