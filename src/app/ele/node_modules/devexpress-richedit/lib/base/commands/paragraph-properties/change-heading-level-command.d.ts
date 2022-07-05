import { IParagraphPropertyDescriptor } from '../../../core/model/paragraph/paragraph-property-descriptors';
import { ChangeParagraphPropertiesCommandBase } from './change-paragraph-properties-command-base';
export declare class ChangeHeadingLevelCommand extends ChangeParagraphPropertiesCommandBase<number, number> {
    getDescriptor(): IParagraphPropertyDescriptor<number>;
    isLockUpdateValue(): boolean;
}
//# sourceMappingURL=change-heading-level-command.d.ts.map