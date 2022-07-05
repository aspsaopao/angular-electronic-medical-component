import { ConditionalTableStyleFormatting } from '../../../../core/model/tables/secondary-structures/table-base-structures';
import { TableConditionalStyle } from '../../../../core/model/tables/styles/table-conditional-style';
import { RtfImportData } from '../../rtf-import-data';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationSubDocument } from '../sub-document/destination-sub-document';
import { DestinationType } from '../utils/destination-type';
export declare class TableStyleDestination extends DestinationSubDocument {
    styleName: string;
    conditionalTableStyleFormattingType: ConditionalTableStyleFormatting;
    qFormat: boolean;
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static onStyleQFormatKeyword(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onParentStyleIndex(importer: RtfImportData, parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleFirstRow(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleLastRow(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleFirstColumn(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleLastColumn(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleOddRowBanding(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleEvenRowBanding(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleOddColumnBanding(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleEvenColumnBanding(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleTopLeftCell(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleTopRightCell(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleBottomLeftCell(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static onConditionalStyleBottomRightCell(importer: RtfImportData, _parameterValue: number, _hasParameter: boolean): void;
    static getThis(rtfImporter: RtfImportData): TableStyleDestination;
    get canAppendText(): boolean;
    get rtfStyleIndex(): number;
    set rtfStyleIndex(value: number);
    get rtfParentStyleIndex(): number;
    constructor(importer: RtfImportData, styleIndex: number);
    beforePopRtfState(): void;
    addConditionalStyle(): TableConditionalStyle;
    protected createClone(): DestinationBase;
    protected processCharCore(ch: string): void;
    finalizePieceTableCreation(): void;
}
//# sourceMappingURL=table-style-destination.d.ts.map