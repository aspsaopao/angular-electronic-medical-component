import { CharacterStyle } from '../../../core/model/character/character-style';
import { ParagraphStyle } from '../../../core/model/paragraph/paragraph-style';
import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
export declare class ApplyStyleCommand extends CommandBase<IntervalCommandState> {
    getState(): IntervalCommandState;
    private getStyleName;
    executeCore(state: IntervalCommandState, options: CommandSimpleOptions<string>): boolean;
    applyCharacterStyle(interval: FixedInterval, style: CharacterStyle, isPresetStyle: boolean, subDocument: SubDocument): void;
    applyParagraphStyle(interval: FixedInterval, style: ParagraphStyle, isPresetStyle: boolean, subDocument: SubDocument): void;
    applyParagraphLinkedStyle(interval: FixedInterval, style: ParagraphStyle, isPresetStyle: boolean, subDocument: SubDocument): void;
    private createCharacterStyle;
    calculateAffectedParagraphCount(interval: FixedInterval, subDocument: SubDocument): number;
    isEnabled(): boolean;
    protected getIntervalsForModifying(): FixedInterval[];
}
//# sourceMappingURL=apply-style-command.d.ts.map