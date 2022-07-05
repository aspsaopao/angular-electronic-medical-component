import { SubDocument } from '../core/model/sub-document';
import { IProcessor } from '../core/processor';
import { BookmarkApi } from './bookmark';
import { CharacterPropertiesApi, ICharacterProperties } from './character-properties';
import { BookmarkCollection } from './collections/bookmark-collection';
import { FieldCollection } from './collections/field-collection';
import { HyperlinkCollection } from './collections/hyperlink-collection';
import { ParagraphCollection } from './collections/paragraph-collection';
import { RangePermissionCollection } from './collections/range-permission-collection';
import { TableCollection } from './collections/table/table-collection';
import { DocumentFormatApi } from './formats/enum';
import { ImagesApi } from './images/images';
import { IInterval, IntervalApi } from './interval';
import { IParagraphProperties, ParagraphApi, ParagraphPropertiesApi } from './paragraph';
import { SectionApi } from './section';
import { SizeApi } from './size';
export declare enum SubDocumentTypeApi {
    Main = 0,
    Header = 1,
    Footer = 2,
    TextBox = 3
}
export declare enum HeaderFooterTypeApi {
    First = 0,
    Odd = 1,
    Even = 2,
    Primary = 1
}
export declare enum SectionBreakTypeApi {
    NextPage = 0,
    OddPage = 1,
    EvenPage = 2,
    Continuous = 3
}
export declare class SubDocumentApi {
    protected _subDocument: SubDocument;
    protected _processor: IProcessor;
    constructor(processor: IProcessor, subDocument: SubDocument);
    get paragraphs(): ParagraphCollection;
    get bookmarks(): BookmarkCollection<BookmarkApi>;
    get rangePermissions(): RangePermissionCollection;
    get tables(): TableCollection;
    get fields(): FieldCollection;
    get hyperlinks(): HyperlinkCollection;
    get images(): ImagesApi;
    get parentSubDocument(): SubDocumentApi | null;
    get id(): number;
    get type(): SubDocumentTypeApi;
    get interval(): IntervalApi;
    get length(): number;
    insertText(position: number, text: string): IntervalApi;
    insertLineBreak(position: number): IntervalApi;
    insertColumnBreak(position: number): IntervalApi;
    insertPageBreak(position: number): IntervalApi;
    insertSectionBreak(position: number, type: SectionBreakTypeApi): SectionApi;
    insertPicture(position: number, base64: string, size?: SizeApi, callback?: (interval: IntervalApi) => void): void;
    insertParagraph(position: number): ParagraphApi;
    insertRtf(position: number, rtfText: string, callback?: (interval: IntervalApi, isRtfValid: boolean) => void): void;
    getRtf(interval?: IInterval): string;
    insertContent(position: number, content: string | File | Blob | ArrayBuffer, documentFormat: DocumentFormatApi, callback?: (interval: IntervalApi, success: boolean) => void): void;
    deleteText(interval: IInterval): void;
    getText(interval?: IInterval): string;
    getCharacterProperties(interval: IInterval): CharacterPropertiesApi;
    setCharacterProperties(interval: IInterval, characterProperties: ICharacterProperties): void;
    getParagraphProperties(interval: IInterval): ParagraphPropertiesApi;
    setParagraphProperties(interval: IInterval, paragraphProperties: IParagraphProperties): void;
}
//# sourceMappingURL=sub-document.d.ts.map