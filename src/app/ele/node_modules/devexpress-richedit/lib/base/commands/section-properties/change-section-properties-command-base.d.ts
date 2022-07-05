import { ISectionPropertyDescriptor } from '../../../core/model/section/section-property-descriptor';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { SectionPropertiesCommandBase } from './section-properties-command-base';
export declare abstract class ChangeSectionPropertiesCommandBase<T, StateT> extends SectionPropertiesCommandBase<T, StateT> {
    getStateValue(_options: CommandSimpleOptions<T>): StateT;
    executeCore(_state: IntervalCommandStateEx, options: CommandSimpleOptions<T>): boolean;
    protected getCurrentValue(): T;
    protected abstract getDescriptor(): ISectionPropertyDescriptor<T>;
}
//# sourceMappingURL=change-section-properties-command-base.d.ts.map