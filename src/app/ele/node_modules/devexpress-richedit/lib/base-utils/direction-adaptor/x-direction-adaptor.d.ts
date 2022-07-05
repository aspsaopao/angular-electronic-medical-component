import { IPoint, IRectangle, ISize } from '@devexpress/utils/lib/geometry/interfaces';
import { IPointDirectionAdaptor, IRectangleDirectionAdaptor, ISizeDirectionAdaptor } from './i-direction-adaptor';
export declare abstract class XDirectionAdaptor {
    isXDirection(): boolean;
}
export declare class PointDirectionAdaptorX<TObj extends IPoint = IPoint> extends XDirectionAdaptor implements IPointDirectionAdaptor {
    obj: TObj;
    init(obj: TObj): PointDirectionAdaptorX<TObj>;
    get position(): number;
    set position(x: number);
    get anotherPosition(): number;
    set anotherPosition(y: number);
}
export declare class SizeDirectionAdaptorX extends XDirectionAdaptor implements ISizeDirectionAdaptor {
    obj: ISize;
    init(obj: ISize): SizeDirectionAdaptorX;
    get length(): number;
    set length(width: number);
    get anotherLength(): number;
    set anotherLength(height: number);
}
export declare class RectangleDirectionAdaptorX extends PointDirectionAdaptorX<IRectangle> implements IRectangleDirectionAdaptor {
    init(obj: IRectangle): RectangleDirectionAdaptorX;
    get length(): number;
    set length(width: number);
    get anotherLength(): number;
    set anotherLength(height: number);
}
//# sourceMappingURL=x-direction-adaptor.d.ts.map