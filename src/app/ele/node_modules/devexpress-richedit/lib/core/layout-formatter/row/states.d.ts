import { RowFormatter, TextRowFormatterState } from './formatter';
export declare class RowBaseFormatterState {
    rowFormatter: RowFormatter;
    constructor(rowFormatter: RowFormatter);
    protected addBoxAnyway(isFinishRow?: boolean, nextState?: TextRowFormatterState, ...setFlags: number[]): void;
    addAnchorObject(): void;
    addTextBox(): void;
    addDashBox(): void;
    addPictureBox(): void;
    addSpaceBox(): void;
    addTabulationBox(): void;
    addSectionBox(): void;
    addLineBreakBox(): void;
    addPageBreakBox(): void;
    addColumnBreakBox(): void;
    addParagraphBox(): void;
}
export declare class RowEndedWithParagraphMarkFormatterState extends RowBaseFormatterState {
    constructor(rowFormatter: RowFormatter);
    addAnchorObject(): void;
    addTextBox(): void;
    addDashBox(): void;
    addPictureBox(): void;
    addSpaceBox(): void;
    addTabulationBox(): void;
    addLineBreakBox(): void;
    addPageBreakBox(): void;
    addColumnBreakBox(): void;
    addParagraphBox(): void;
}
export declare class RowEndedWithPageBreakState extends RowEndedWithParagraphMarkFormatterState {
    constructor(rowFormatter: RowFormatter);
    addParagraphBox(): void;
}
//# sourceMappingURL=states.d.ts.map