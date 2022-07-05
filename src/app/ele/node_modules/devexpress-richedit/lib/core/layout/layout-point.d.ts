import { IPoint } from '@devexpress/utils/lib/geometry/interfaces';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { ICloneable } from '@devexpress/utils/lib/types';
export declare class LayoutPoint extends Point implements ICloneable<LayoutPoint>, IPoint {
    pageIndex: number;
    constructor(pageIndex: number, pageX: number, pageY: number);
    isEmpty(): boolean;
    static Empty(): LayoutPoint;
    clone(): LayoutPoint;
    get point(): Point;
}
//# sourceMappingURL=layout-point.d.ts.map