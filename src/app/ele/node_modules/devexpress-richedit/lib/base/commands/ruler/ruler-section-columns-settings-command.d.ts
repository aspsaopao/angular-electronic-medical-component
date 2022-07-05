import { SectionColumnProperties } from '../../../core/model/section/section-column-properties';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
export declare class RulerSectionColumnsSettingsCommand extends CommandBase<RulerSectionColumnsSettingsState> {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    getState(options?: CommandOptions): RulerSectionColumnsSettingsState;
    executeCore(state: RulerSectionColumnsSettingsState, options: CommandSimpleOptions<SectionColumnProperties[]>): boolean;
}
export declare class RulerSectionColumnsSettingsState extends IntervalCommandState {
    equalWidth: boolean;
    activeIndex: number;
    constructor(enabled: boolean, interval: FixedInterval, columns: SectionColumnProperties[], equalWidth: boolean, activeIndex: number);
}
//# sourceMappingURL=ruler-section-columns-settings-command.d.ts.map