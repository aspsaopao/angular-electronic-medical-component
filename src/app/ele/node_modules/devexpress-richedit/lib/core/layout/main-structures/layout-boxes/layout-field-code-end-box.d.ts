import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { LayoutBoxType } from './layout-box';
import { LayoutFieldCodeStartBox } from './layout-field-code-start-box';
export declare class LayoutFieldCodeEndBox extends LayoutFieldCodeStartBox implements ICloneable<LayoutFieldCodeEndBox>, ISupportCopyFrom<LayoutFieldCodeEndBox> {
    clone(): LayoutFieldCodeEndBox;
    getType(): LayoutBoxType;
    getBoxChar(): string;
}
//# sourceMappingURL=layout-field-code-end-box.d.ts.map