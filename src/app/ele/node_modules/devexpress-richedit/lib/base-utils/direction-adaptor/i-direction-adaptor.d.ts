import { IPoint, IRectangle, ISize } from '@devexpress/utils/lib/geometry/interfaces';
export interface IPointDirectionAdaptor {
    isXDirection(): boolean;
    init(obj: IPoint): IPointDirectionAdaptor;
    position: number;
    anotherPosition: number;
}
export interface ISizeDirectionAdaptor {
    isXDirection(): boolean;
    init(obj: ISize): ISizeDirectionAdaptor;
    length: number;
    anotherLength: number;
}
export interface IRectangleDirectionAdaptor extends IPointDirectionAdaptor, ISizeDirectionAdaptor {
    init(obj: IRectangle): IRectangleDirectionAdaptor;
}
//# sourceMappingURL=i-direction-adaptor.d.ts.map