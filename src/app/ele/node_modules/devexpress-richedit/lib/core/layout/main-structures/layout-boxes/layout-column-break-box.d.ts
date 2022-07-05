import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { LayoutBoxType } from './layout-box';
import { LayoutPageBreakBox } from './layout-page-break-box';
export declare class LayoutColumnBreakBox extends LayoutPageBreakBox implements ICloneable<LayoutColumnBreakBox>, ISupportCopyFrom<LayoutColumnBreakBox> {
    clone(): LayoutColumnBreakBox;
    getType(): LayoutBoxType;
    getHiddenText(): string;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-column-break-box.d.ts.map