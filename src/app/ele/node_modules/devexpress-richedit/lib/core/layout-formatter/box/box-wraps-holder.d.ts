import { Flag } from '@devexpress/utils/lib/class/flag';
import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocument } from '../../model/sub-document';
import { FormatterManager } from '../managers/formatter-manager';
import { BracketInfo } from './box-iterator';
import { BoxWrap } from './box-wrap';
export declare enum IteratorFlags {
    None = 0,
    DocumentEnd = 1
}
export declare class BoxWrapsHolder {
    static AVERAGE_BOXES_ON_PAGE: number;
    private static MAX_BOXES_IN_LIST_MULTIPLIER;
    private static MAX_BOXES_IN_LIST;
    private boxGenerator;
    private wrappers;
    private wrapIndex;
    private currPos;
    manager: FormatterManager;
    subDocument: SubDocument;
    flags: Flag;
    bracketsInfo: BracketInfo[];
    paragraphBoundsInfo: Record<number, MinMaxNumber>;
    constructor(manager: FormatterManager, subDocumentId: number);
    reset(pos: number): void;
    getWrap(): BoxWrap;
    get position(): number;
    setPosition(pos: number, forceResetBoxInfos: boolean): void;
    toNextWrap(): void;
    private setParagraphsWidthInfo;
    setNewWrappers(newLayoutBoxes: BoxWrap[], generateFrom: number): void;
    setNextValidWrapPosition(pos: number, nestedLevel: number): void;
    trySetPosition(pos: number): boolean;
    private splitBoxByPosition;
    get interval(): FixedInterval;
}
//# sourceMappingURL=box-wraps-holder.d.ts.map