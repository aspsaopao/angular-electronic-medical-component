import { Margins } from '@devexpress/utils/lib/geometry/margins';
import { ICloneable, IEquatable, SimpleConverter } from '@devexpress/utils/lib/types';
import { DrawingTextAnchoringType } from './enums';
export declare class TextBoxProperties implements ICloneable<TextBoxProperties>, IEquatable<TextBoxProperties> {
    resizeShapeToFitText: boolean;
    upright: boolean;
    verticalAlignment: DrawingTextAnchoringType;
    wrapText: boolean;
    leftMargin: number;
    rightMargin: number;
    topMargin: number;
    bottomMargin: number;
    constructor(contentMargins?: Margins);
    clone(): TextBoxProperties;
    equals(obj: TextBoxProperties): boolean;
    getContentMargins(): Margins;
    setMarginsToAnotherMeasuringSystem(converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=text-box-properties.d.ts.map