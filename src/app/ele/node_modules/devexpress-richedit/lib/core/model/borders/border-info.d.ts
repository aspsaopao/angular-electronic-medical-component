import { ICloneable, IEquatable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { ColorModelInfo } from '../color/color-model-info';
import { ColorProvider } from '../color/color-provider';
import { BorderBase } from './border-base';
import { BorderLineStyle } from './enums';
import { LayoutBorder } from './layout-border';
export declare class BorderInfo implements IEquatable<BorderInfo>, ISupportCopyFrom<BorderInfo>, ICloneable<BorderInfo> {
    style: BorderLineStyle;
    color: ColorModelInfo;
    width: number;
    offset: number;
    frame: boolean;
    shadow: boolean;
    getHashCode(): number;
    getBorderBase(colorProvider: ColorProvider): BorderBase;
    getLayoutBorder(colorProvider: ColorProvider): LayoutBorder;
    equals(obj: BorderInfo): boolean;
    static equalsBinary(borderInfoA: BorderInfo, borderInfoB: BorderInfo): boolean;
    copyFrom(obj: BorderInfo): void;
    clone(): BorderInfo;
}
//# sourceMappingURL=border-info.d.ts.map