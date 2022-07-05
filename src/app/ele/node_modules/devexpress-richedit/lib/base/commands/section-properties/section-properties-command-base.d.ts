import { Section } from '../../../core/model/section/section';
import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SparseObjectsIterator } from '@devexpress/utils/lib/intervals/sparse/objects-iterator';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
export declare abstract class SectionPropertiesCommandBase<T, StateT> extends CommandBase<IntervalCommandStateEx> {
    protected DEPRECATEDCorrectlMainCommandOptions(options: ICommandOptions): void;
    getState(options?: CommandSimpleOptions<T>): IntervalCommandStateEx;
    protected getStateCore(enabled: boolean, intervals: FixedInterval[], value: StateT): IntervalCommandStateEx;
    isEnabled(options: ICommandOptions): boolean;
    protected getAffectedSectionsIterator(intervals: FixedInterval[]): SparseObjectsIterator<FixedInterval, Section>;
    static rangePermissionIncludeFullSection(control: IRichEditControl, subDoc: SubDocument, intervals: FixedInterval[]): boolean;
    abstract getStateValue(options: CommandSimpleOptions<T>): StateT;
    static getIntervals(control: IRichEditControl, subDocument: SubDocument): FixedInterval[];
}
//# sourceMappingURL=section-properties-command-base.d.ts.map