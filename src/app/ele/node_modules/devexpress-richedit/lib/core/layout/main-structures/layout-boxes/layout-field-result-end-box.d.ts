import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
export declare class LayoutFieldResultEndBox extends LayoutBox implements ICloneable<LayoutFieldResultEndBox>, ISupportCopyFrom<LayoutFieldResultEndBox> {
    getType(): LayoutBoxType;
    clone(): LayoutFieldResultEndBox;
    isWhitespace(): boolean;
    renderGetContent(_renderer: IPictureRenderer): string;
    pushInfoForMeasure(_info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    popInfoForMeasure(_info: MeasureInfo[], _showHiddenSymbols: boolean): void;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-field-result-end-box.d.ts.map