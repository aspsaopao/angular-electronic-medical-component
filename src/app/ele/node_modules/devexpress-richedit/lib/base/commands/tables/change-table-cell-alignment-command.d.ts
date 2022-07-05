import { ParagraphAlignment } from '../../../core/model/paragraph/paragraph-properties';
import { SubDocument } from '../../../core/model/sub-document';
import { TableCellVerticalAlignment } from '../../../core/model/tables/secondary-structures/table-base-structures';
import { CommandBase, ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare abstract class ChangeTableCellAlignmentCommandBase extends CommandBase<SimpleCommandState> {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
    protected getRelatedCommands(): Record<number, boolean>;
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    isChecked(subDocument: SubDocument): boolean;
    executeCore(_state: SimpleCommandState, options: ICommandOptions): boolean;
}
export declare class ChangeTableCellTopLeftAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellTopCenterAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellTopRightAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellMiddleLeftAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellMiddleCenterAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellMiddleRightAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellBottomLeftAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellBottomCenterAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
export declare class ChangeTableCellBottomRightAlignmentCommand extends ChangeTableCellAlignmentCommandBase {
    horizontalAlignment: ParagraphAlignment;
    verticalAlignment: TableCellVerticalAlignment;
}
//# sourceMappingURL=change-table-cell-alignment-command.d.ts.map