import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { Paragraph } from '../../paragraph/paragraph';
import { FieldName } from '../names';
import { FieldCodeParserClientUpdatingBase } from './field-code-parser-client-updating-base';
import { SubDocument } from '../../sub-document';
export declare class FieldCodeParserToc extends FieldCodeParserClientUpdatingBase {
    get name(): FieldName;
    protected fillResult(): boolean;
    private createTocElements;
    private createTocElementsByTc;
    private createTocElementsBySeq;
    private createTocElementsByOutlineLevel;
    static getParagraphInterval(subDocument: SubDocument, paragraph: Paragraph): FixedInterval;
    private getParagraphInterval;
    private static isWhiteSpace;
    private createToc;
    private insertNoTocText;
    private resetParagraphTabs;
    private setParagraphStyle;
    private insertHeading;
    private insertSeparator;
    private insertDotTabInfo;
    private insertTocNumberingTabInfo;
    private insertTabInfo;
    private insetPageRef;
    private getTocParserParams;
    private isValidHeading;
    private get interval();
    private getBookmarkName;
    private createNewBookmark;
    private generateNewBookmarkName;
}
export declare class TocParserParameters {
    asHyperlink: boolean;
    fromOutlineLevel: boolean;
    fromTc: boolean;
    tcIdentifier: string;
    fromSeq: boolean;
    seqIdentifier: string;
    useCustomSeparator: boolean;
    separator: string;
    useSpecifiedLevels: boolean;
    specifiedLevelStart: number;
    specifiedLevelEnd: number;
    omitsPageNumbers: boolean;
    omitsPageNumbersStart: number;
    omitsPageNumbersEnd: number;
    useSpecifiedTcLevels: boolean;
    tcLevelStart: number;
    tcLevelEnd: number;
}
export declare class TocElement {
    readonly bookmarkName: string;
    readonly text: string;
    readonly level: number;
    readonly hasNumbering: boolean;
    constructor(bookmarkName: string, text: string, level: number, hasNumbering: boolean);
}
export declare class RangedArg {
    private start;
    private end;
    constructor(arg: string);
    getStart(): number;
    getEnd(): number;
    isValid(): boolean;
}
//# sourceMappingURL=field-code-parser-toc.d.ts.map