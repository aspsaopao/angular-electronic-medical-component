import { Flag } from '@devexpress/utils/lib/class/flag';
import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { SubDocument } from '../../model/sub-document';
import { FormatterManager } from '../managers/formatter-manager';
import { BoxBracketsType } from '../row/result';
import { BoxWrap } from './box-wrap';
export declare class BoxIterator {
    private boxWrapsHolder;
    constructor(manager: FormatterManager, subDocumentId: number);
    get subDocument(): SubDocument;
    setNextValidWrapPosition(pos: number, nestedLevel: number): void;
    allBoxesGiven(): boolean;
    getPosition(): number;
    setPosition(position: number, forceResetBoxInfos: boolean, checkStartTable: boolean): void;
    documentStart(): void;
    getWrap(getNextWrap: boolean): BoxWrap;
    getBracketInfo(rowStartPos: number, rowLength: number): BracketInfo[];
    getParagraphBounds(parIndex: number): MinMaxNumber;
}
export declare class BracketInfo {
    absPos: number;
    flags: Flag;
    color: string;
    length: number;
    constructor(absPos: number, flags: Flag, color: string, length: number);
    addFlagValue(type: BoxBracketsType): void;
}
//# sourceMappingURL=box-iterator.d.ts.map