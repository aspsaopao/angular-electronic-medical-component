import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { LayoutBoxIteratorBase } from '../layout-engine/layout-box-iterator/layout-box-iterator-base';
import { FormatterManager } from '../layout-formatter/managers/formatter-manager';
import { DocumentLayout } from '../layout/document-layout';
import { IModelManager } from '../model-manager';
import { SubDocument } from './sub-document';
export declare enum FindReplaceState {
    Start = 0,
    Found = 1,
    DocumentBegin = 2,
    DocumentEnd = 3,
    SearchEnd = 4
}
export declare enum SearchDirection {
    Up = 1,
    Down = 2,
    All = 3
}
export declare class FindReplaceHelper {
    private subDocument;
    private layout;
    private modelManager;
    private template;
    private replaceWith;
    private searchDirection;
    private matchCase;
    private regularExpression;
    private wholeWordsOnly;
    private findWithPosition;
    private currentPos;
    private lastFound;
    private supportFunction;
    private templateLength;
    private state;
    private beginOrStartDocumentReach;
    private layoutFormatterManager;
    private pageIndex;
    private storeSelection;
    constructor(modelManager: IModelManager, layoutFormatterManager: FormatterManager, pageIndex: number, subDocument: SubDocument, layout: DocumentLayout, storeSelection: (interval: FixedInterval) => void);
    setSearchParams(whatFind: string, replaceWith: string, searchDirection: SearchDirection, matchCase: boolean, regularExpression: boolean, findWithPosition: number, wholeWordsOnly: boolean): void;
    static isCanSetWholeWordsOnlyForThisExpression(expression: string): number;
    findNext(): FindReplaceState;
    private shouldSkipSearchInterval;
    private findNextDown;
    private findNextUp;
    private findNextAll;
    private findNextDownInternal;
    private findNextDownWholeWordsOnly;
    private findNextUpInternal;
    private findNextUpWholeWordsOnly;
    private isCharCanBeInWord;
    getLastFound(): FixedInterval;
    replaceLastFound(): void;
    replaceAll(startWithPos: number): number;
    private crateSupportFunction;
    private static calcOneElemSuppFunc;
}
export declare class CharacterIteratorBase {
    subDocument: SubDocument;
    iterator: LayoutBoxIteratorBase;
    modelManager: IModelManager;
    char: string;
    charIndexInBox: number;
    constructor(modelManager: IModelManager, layoutFormatterManager: FormatterManager, pageIndex: number, subDocument: SubDocument, startPosition: number, endPosition: number);
    getCurrLogPosition(): number;
    getCharInternal(): void;
}
export declare class ForwardCharacterIterator extends CharacterIteratorBase {
    getCharInternal(): boolean;
    nextChar(): boolean;
}
export declare class BackwardCharacterIterator extends CharacterIteratorBase {
    getCharInternal(): boolean;
    prevChar(): boolean;
}
//# sourceMappingURL=find-replace-helper.d.ts.map