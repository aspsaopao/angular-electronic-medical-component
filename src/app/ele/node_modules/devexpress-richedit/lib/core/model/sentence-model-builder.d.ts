import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { FormatterManager } from '../layout-formatter/managers/formatter-manager';
import { DocumentLayout } from '../layout/document-layout';
import { LayoutBoxType } from '../layout/main-structures/layout-boxes/layout-box';
import { ISelectionBase } from '../selection/selection-base';
import { ModelManipulator } from './manipulators/model-manipulator';
import { SubDocument } from './sub-document';
export declare class SwitchTextCaseManipulator {
    dispatcher: ModelManipulator;
    constructor(dispatcher: ModelManipulator);
}
export declare class WordPart {
    position: number;
    text: string;
    type: LayoutBoxType;
    constructor(position: number, text: string, type: LayoutBoxType);
    merge(pos: number, text: string, type: LayoutBoxType): boolean;
    getEndPosition(): number;
}
export declare class SentenceWord {
    parts: WordPart[];
    getLastWordPart(): WordPart;
}
export declare class Sentence {
    words: SentenceWord[];
    getLastWord(): SentenceWord;
}
export declare class SentenceStructureBuilder {
    sentences: Sentence[];
    interval: FixedInterval;
    layout: DocumentLayout;
    subDocument: SubDocument;
    selection: ISelectionBase;
    private layoutBoxIterator;
    private currSentence;
    private currWord;
    private currWordPart;
    private isSentenceEnd;
    private isWordEnd;
    private findEndLastSentence;
    private lastBox;
    constructor(subDocument: SubDocument, layout: DocumentLayout, selection: ISelectionBase, interval: FixedInterval);
    static getBuilder(layoutFormatterManager: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, interval: FixedInterval, splitByInterval: boolean): SentenceStructureBuilder;
    private static correctFirstSentence;
    static splitPartsByInterval(sentences: Sentence[], interval: FixedInterval): void;
    static splitPartsByPosition(sentences: Sentence[], position: number): void;
    build(): boolean;
    private collect;
    private addNewSentence;
    private addNewWord;
    private addNewWordPart;
    private needCalculateMoreLayout;
    private findFirstSentenceStartPosition;
}
//# sourceMappingURL=sentence-model-builder.d.ts.map