import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IPictureRenderer } from '../../../canvas/picture-renderer';
import { MeasureInfo } from '../../../measurer/measure-info';
import { LayoutBox, LayoutBoxType } from './layout-box';
export declare class LayoutNonBreakingSpaceBox extends LayoutBox implements ICloneable<LayoutNonBreakingSpaceBox>, ISupportCopyFrom<LayoutNonBreakingSpaceBox> {
    static SYMBOL: string;
    spaceWidth: number;
    hiddenSpaceWidth: number;
    equals(obj: LayoutNonBreakingSpaceBox): boolean;
    clone(): LayoutNonBreakingSpaceBox;
    copyFrom(obj: LayoutNonBreakingSpaceBox): void;
    getType(): LayoutBoxType;
    pushInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    popInfoForMeasure(info: MeasureInfo[], showHiddenSymbols: boolean): void;
    isVisible(): boolean;
    isVisibleForRowAlign(): boolean;
    renderGetContent(_renderer: IPictureRenderer): string;
    renderIsWordBox(): boolean;
    isWhitespace(): boolean;
    isLineBreak(): boolean;
}
//# sourceMappingURL=layout-non-breaking-space-box.d.ts.map