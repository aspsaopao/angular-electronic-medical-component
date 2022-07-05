import { FormatImagesImporter } from '../../core/formats/utils/images-import';
import { DocumentModel } from '../../core/model/document-model';
import { ControlOptions } from '../../core/model/options/control';
import { Paragraph } from '../../core/model/paragraph/paragraph';
import { SubDocument } from '../../core/model/sub-document';
import { ChunkedText } from '@devexpress/utils/lib/class/chunked-text';
import { Stack } from '@devexpress/utils/lib/class/stack';
import { DestinationBase } from './destination/base/destination';
import { FieldDestination } from './destination/fields/field-destination';
import { TableContentFieldDestination } from './destination/fields/table-content-field-destination';
import { ShapeDestination } from './destination/shape/shape-destination';
import { DefaultDestination } from './destination/sub-document/default-destination';
import { RtfImporterOptions } from './importer-options';
import { ImportersCollection } from './importers/importers-collection';
import { KeywordTableHolder } from './keyword-tables/keyword-table-holder';
import { ImportBookmarkInfo } from './model/bookmark/import-bookmark-info';
import { RtfParsingState } from './model/enums';
import { RtfFieldInfo } from './model/fields/rtf-field-info';
import { ImportRangePermissionInfo } from './model/range-permission/import-range-permission-info';
import { RtfDocumentProperties } from './model/rtf-document-properties';
import { RtfSectionProperties } from './model/section/rtf-section-properties';
import { RtfTableReader } from './table/table-reader';
export declare class RtfPositionState {
    subDocument: SubDocument;
    paragraph: Paragraph;
    fields: Stack<RtfFieldInfo>;
    bookmarks: Record<string, ImportBookmarkInfo>;
    rangePermissions: Record<string, ImportRangePermissionInfo>;
    sectionProperties: Stack<RtfSectionProperties>;
    tableReader: RtfTableReader;
    constructor(subDocument: SubDocument, paragraph: Paragraph, fields: Stack<RtfFieldInfo>, bookmarks: Record<string, ImportBookmarkInfo>, rangePermissions: Record<string, ImportRangePermissionInfo>, sectionProperties: Stack<RtfSectionProperties>, tableReader: RtfTableReader);
}
export declare class RtfImportData {
    readonly documentModel: DocumentModel;
    readonly formatImagesImporter: FormatImagesImporter;
    readonly importerOptions: RtfImporterOptions;
    readonly controlOptions: ControlOptions;
    readonly rtfText: ChunkedText;
    readonly importers: ImportersCollection;
    readonly documentProperties: RtfDocumentProperties;
    readonly keywordHTHolder: KeywordTableHolder;
    readonly positionStates: Stack<RtfPositionState>;
    subDocument: SubDocument;
    parsingState: RtfParsingState;
    binCharCount: number;
    optionalGroupLevel: number;
    rtfDocumentModelType: RtfDocumentModelType;
    private skipCount;
    private readonly savedDestinations;
    private _destination;
    get destination(): DestinationBase;
    set destination(newDestination: DestinationBase);
    get savedStatesCount(): number;
    constructor(rtfText: ChunkedText, options: RtfImporterOptions, documentModel: DocumentModel, controlOptions: ControlOptions);
    private beforeChangeSubDocument;
    private onChangeSubDocument;
    private addEmptyPositionState;
    import(): void;
    protected parseRtfKeyword(): string;
    flushDecoder(): void;
    private throwUnexpectedEndOfFile;
    throwInvalidRtfFile(): void;
    static throwInvalidRtfFile(): void;
    private beforeImport;
    private translateControlChar;
    protected translateKeyword(keyword: string, parameterValue: number | null, hasParameter: boolean): void;
    private parseBinChar;
    decreaseSkipCount(): void;
    protected popRtfState(): void;
    private parseHexChar;
    private parseChar;
    readChar(): string;
    hexToInt(ch: string, throwException: boolean): number;
    parseUnicodeChar(ch: string): void;
    processChar(ch: string): void;
    setCodePage(codePage: number): void;
    get codePage(): number;
    parseCharWithoutDecoding(ch: string): void;
    createTableContentFieldDestination(createField: boolean): TableContentFieldDestination;
    createShapeDestination(): ShapeDestination;
    createFieldDestination(): FieldDestination;
    createDefaultDestination(): DefaultDestination;
    private pushState;
    private popState;
}
export declare enum RtfDocumentModelType {
    None = 0,
    WithoutStyle = 1,
    WithStyle = 2
}
//# sourceMappingURL=rtf-import-data.d.ts.map