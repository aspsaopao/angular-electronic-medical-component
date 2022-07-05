import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { LayoutBox } from '../../layout/main-structures/layout-boxes/layout-box';
import { LayoutRow } from '../../layout/main-structures/layout-row';
import { SubDocumentNumberingListCountersManager } from '../../model/numbering-lists/piece-table-numbering-list-counters-manager';
import { Paragraph } from '../../model/paragraph/paragraph';
import { ParagraphProperties } from '../../model/paragraph/paragraph-properties';
import { SubDocument } from '../../model/sub-document';
import { BoxIterator } from '../box/box-iterator';
import { BoxWrap, BoxWrapInfo } from '../box/box-wrap';
import { FormatterManager } from '../managers/formatter-manager';
import { RowFormatterResult } from './result';
import { RowSizesManager } from './size-engine/row-sizes-manager';
import { RowBaseFormatterState } from './states';
import { RowTabInfo } from './tab-info';
import { IRowSpacingBeforeApplier } from './utils/row-spacing-before-applier';
import { WordHolderInfo } from './word-holder';
export declare enum TextRowFormatterState {
    None = 0,
    Base = 1,
    EndedWithPageBreak = 2,
    EndedWithParagraphMark = 3
}
export declare class RowFormatter {
    private static addBoxFunctionMap;
    private stateMap;
    iterator: BoxIterator;
    currentState: RowBaseFormatterState;
    private rowFormatting;
    currWrapInfo: BoxWrapInfo;
    currBox: LayoutBox;
    rowSizesManager: RowSizesManager;
    tabInfo: RowTabInfo;
    wordHolder: WordHolderInfo;
    paragraphHorizontalBounds: FixedInterval;
    manager: FormatterManager;
    numberingListCountersManager: SubDocumentNumberingListCountersManager;
    result: RowFormatterResult;
    private startPos;
    constructor(formatterManager: FormatterManager, subDocumentId: number);
    get subDocument(): SubDocument;
    get row(): LayoutRow;
    get paragraph(): Paragraph;
    get paragraphProps(): ParagraphProperties;
    getNextBoxWrapInfo(): BoxWrap;
    setPosition(position: number, forceResetBoxInfos: boolean, checkStartTable: boolean): void;
    getPosition(): number;
    documentStart(): void;
    formatRow(minY: number, paragraphHorizontalBounds: FixedInterval, rowSpacingBeforeApplier: IRowSpacingBeforeApplier): void;
    private innerFormatRow;
    finishRow(): void;
    setState(state: TextRowFormatterState): void;
    addAnchorObject(): void;
    private initResult;
    setBoxInfo(getNextWrap: boolean): void;
}
//# sourceMappingURL=formatter.d.ts.map