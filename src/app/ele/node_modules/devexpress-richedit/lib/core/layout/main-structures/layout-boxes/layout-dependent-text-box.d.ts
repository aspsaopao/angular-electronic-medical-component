import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { FormatterManager } from '../../../layout-formatter/managers/formatter-manager';
import { LayoutBoxType } from './layout-box';
import { LayoutTextBox } from './layout-text-box';
export declare enum LayoutDependentBoxType {
    Page = 0,
    Numpages = 1
}
export declare class LayoutDependentTextBox extends LayoutTextBox implements ICloneable<LayoutDependentTextBox>, ISupportCopyFrom<LayoutDependentTextBox> {
    private type;
    clone(): LayoutDependentTextBox;
    copyFrom(obj: LayoutDependentTextBox): void;
    getType(): LayoutBoxType;
    setType(type: LayoutDependentBoxType): void;
    calculateText(manager: FormatterManager): void;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-dependent-text-box.d.ts.map