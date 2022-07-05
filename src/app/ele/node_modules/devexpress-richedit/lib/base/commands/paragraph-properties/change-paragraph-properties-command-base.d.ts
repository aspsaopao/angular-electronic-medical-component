import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
export declare abstract class ChangeParagraphPropertiesCommandBase<T, StateT> extends CommandBase<IntervalCommandStateEx> {
    getState(options?: ICommandOptions): IntervalCommandStateEx;
    isEnabled(): boolean;
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<T>): boolean;
    isLockUpdateValue(): boolean;
    protected abstract getDescriptor(): IParagraphPropertyDescriptor<T>;
    protected getCurrentValue(): T;
    protected getValueForState(val: T): StateT;
    protected getIntervalsForModifying(): FixedInterval[];
    convertValue(val: T): T;
    getActualValue(): T;
    protected convertBooleanParameterToEnumType(parameter: any, ifTrue: T, ifFalse: T): T;
}
//# sourceMappingURL=change-paragraph-properties-command-base.d.ts.map