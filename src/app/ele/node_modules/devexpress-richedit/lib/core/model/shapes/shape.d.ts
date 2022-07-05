import { ICloneable, IEquatable, ISupportConverting, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
export declare class Shape implements ICloneable<Shape>, ISupportCopyFrom<Shape>, ISupportConverting<number>, IEquatable<Shape> {
    fillColor: number;
    outlineColor: number;
    outlineWidth: number;
    constructor(fillColor?: number, outlineColor?: number, outlineWidth?: number);
    clone(): Shape;
    copyFrom(obj: Shape): void;
    applyConverter(converter: SimpleConverter<number>): this;
    equals(obj: Shape): boolean;
}
//# sourceMappingURL=shape.d.ts.map