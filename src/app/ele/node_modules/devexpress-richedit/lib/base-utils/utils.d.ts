import { Point } from '@devexpress/utils/lib/geometry/point';
export declare function rotatePoint(point: Point, angle: number, center: Point): Point;
export declare class SearchTreeItemResult<T> {
    readonly parentList: T[];
    readonly itemIndex: number;
    readonly item: T;
    constructor(parentList: T[], itemIndex: number, item: T);
}
export declare function searchTreeItem<T extends {
    items?: T[];
}>(items: T[], comparer: (item: T) => boolean): SearchTreeItemResult<T> | null;
export declare function convertToFunction(func: any): any | null;
//# sourceMappingURL=utils.d.ts.map