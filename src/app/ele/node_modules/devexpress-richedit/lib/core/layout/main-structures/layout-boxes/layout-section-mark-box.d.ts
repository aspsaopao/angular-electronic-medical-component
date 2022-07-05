import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { LayoutBoxType } from './layout-box';
import { LayoutPageBreakBox } from './layout-page-break-box';
export declare class LayoutSectionMarkBox extends LayoutPageBreakBox implements ICloneable<LayoutSectionMarkBox>, ISupportCopyFrom<LayoutSectionMarkBox> {
    get isSectionBreakBox(): boolean;
    clone(): LayoutSectionMarkBox;
    getType(): LayoutBoxType;
    getHiddenText(): string;
}
//# sourceMappingURL=layout-section-mark-box.d.ts.map