import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare abstract class ParagraphIndentCommandBase extends CommandBase<SimpleCommandState> {
    getState(options?: CommandOptions): ICommandState;
    isEnabled(_options: CommandOptions): boolean;
    protected getIntervalsForModifying(): FixedInterval[];
    getTabs(paragraphIndices: number[], subDocument: SubDocument): number[];
    getNearRightDefaultTab(leftIndent: number): number;
    getNearLeftDefaultTab(leftIndent: number): number;
    getNearRightTab(leftIndent: number, tabs: number[]): number;
    getNearLeftTab(leftIndent: number, tabs: number[]): number;
    private getParagraphTabs;
}
//# sourceMappingURL=paragraph-indent-command-base.d.ts.map