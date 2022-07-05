import { LayoutPosition } from '../../../core/layout/layout-position';
import { IListLevel } from '../../../core/model/numbering-lists/list-level';
import { NumberingType } from '../../../core/model/numbering-lists/numbering-list';
import { SubDocument } from '../../../core/model/sub-document';
import { NumberingListCommandBase } from './numbering-list-command-base';
export declare class ToggleNumberingListCommand extends NumberingListCommandBase {
    getNumberingListType(): NumberingType;
    isEnabled(): boolean;
    getParagraphsLevelIndices(paragraphIndices: number[], layoutPositions: LayoutPosition[], continueNumberingList: boolean, listIndex: number, listLevelIndex: number, subDocument: SubDocument): number[];
    equalLeftIndent(paragraphIndices: number[], layoutPositions: LayoutPosition[], listIndex: number): boolean;
    assignLevelsIndentsCore(paragraphIndex: number, listIndex: number, listLevels: IListLevel[], subDocument: SubDocument): void;
}
//# sourceMappingURL=toggle-numbering-list-command.d.ts.map