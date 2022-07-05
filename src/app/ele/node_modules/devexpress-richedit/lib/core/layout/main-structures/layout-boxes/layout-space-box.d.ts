import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
export declare class LayoutSpaceBox extends LayoutBox implements ICloneable<LayoutSpaceBox>, ISupportCopyFrom<LayoutSpaceBox> {
    spaceWidth: number;
    hiddenSpaceWidth: number;
    equals(obj: LayoutSpaceBox): boolean;
    clone(): LayoutSpaceBox;
    copyFrom(obj: LayoutSpaceBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    isVisible(): boolean;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderNoStrikeoutAndNoUnderlineIfBoxInEndRow(): boolean;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-space-box.d.ts.map