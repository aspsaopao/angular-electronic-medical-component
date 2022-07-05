import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
export declare class LayoutFieldCodeStartBox extends LayoutBox implements ICloneable<LayoutFieldCodeStartBox>, ISupportCopyFrom<LayoutFieldCodeStartBox> {
    clone(): LayoutFieldCodeStartBox;
    copyFrom(obj: LayoutFieldCodeStartBox): void;
    getType(): LayoutBoxType;
    getBoxChar(): string;
    pushInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    isVisibleForRowAlign(): boolean;
    isVisible(): boolean;
    renderGetContent(_renderer: IPictureRenderer): string;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-field-code-start-box.d.ts.map