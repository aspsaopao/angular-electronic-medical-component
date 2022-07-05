import { IPoint, IRectangle, ISize } from '@devexpress/utils/lib/geometry/interfaces';
import { IPointDirectionAdaptor, IRectangleDirectionAdaptor, ISizeDirectionAdaptor } from './i-direction-adaptor';
export declare abstract class YDirectionAdaptor {
    isXDirection(): boolean;
}
export declare class PointDirectionAdaptorY<TObj extends IPoint = IPoint> extends YDirectionAdaptor implements IPointDirectionAdaptor {
    obj: TObj;
    init(obj: TObj): PointDirectionAdaptorY;
    get position(): number;
    set position(y: number);
    get anotherPosition(): number;
    set anotherPosition(x: number);
}
export declare class SizeDirectionAdaptorY extends YDirectionAdaptor implements ISizeDirectionAdaptor {
    obj: ISize;
    init(obj: ISize): SizeDirectionAdaptorY;
    get length(): number;
    set length(height: number);
    get anotherLength(): number;
    set anotherLength(width: number);
}
export declare class RectangleDirectionAdaptorY extends PointDirectionAdaptorY<IRectangle> implements IRectangleDirectionAdaptor {
    init(obj: IRectangle): RectangleDirectionAdaptorY;
    get length(): number;
    set length(height: number);
    get anotherLength(): number;
    set anotherLength(width: number);
}
//# sourceMappingURL=y-direction-adaptor.d.ts.map