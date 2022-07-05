import { LayoutBoxIteratorBase } from '../../../core/layout-engine/layout-box-iterator/layout-box-iterator-base';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommand } from '../i-command';
export declare abstract class InsertTabCommandBase extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    private setNextObj;
    executeCore(_state: SimpleCommandState, options: CommandOptions): boolean;
    private addTableRowIfRequired;
    private needProcessFirstParagraphRow;
    private needProcessParagraphLeftIndent;
    abstract createIndentNumberingParagraphCommand(): ICommand;
    abstract createChangeParagraphIndentFromFirstRowCommand(): ICommand;
    abstract createChangeIndentCommand(): ICommand;
    abstract performCellIteratorAction(boxIterator: LayoutBoxIteratorBase): any;
    abstract getBoxIterator(pos: number, endPos: number): LayoutBoxIteratorBase;
    private performCellIteratorActionIfRequired;
    private getTablePos;
    private isIntervalStartInParagraphStart;
    private isIntervalEndOnRowEnd;
    private isIntervalIncludesWholeRow;
}
export declare class InsertTabCommand extends InsertTabCommandBase {
    createIndentNumberingParagraphCommand(): ICommand;
    createChangeParagraphIndentFromFirstRowCommand(): ICommand;
    createChangeIndentCommand(): ICommand;
    performCellIteratorAction(boxIterator: LayoutBoxIteratorBase): boolean;
    getBoxIterator(pos: number, endPos: number): LayoutBoxIteratorBase;
}
export declare class InsertShiftTabCommand extends InsertTabCommandBase {
    createIndentNumberingParagraphCommand(): ICommand;
    createChangeParagraphIndentFromFirstRowCommand(): ICommand;
    createChangeIndentCommand(): ICommand;
    performCellIteratorAction(boxIterator: LayoutBoxIteratorBase): boolean;
    getBoxIterator(pos: number, _endPos: number): LayoutBoxIteratorBase;
}
//# sourceMappingURL=insert-tab-command.d.ts.map