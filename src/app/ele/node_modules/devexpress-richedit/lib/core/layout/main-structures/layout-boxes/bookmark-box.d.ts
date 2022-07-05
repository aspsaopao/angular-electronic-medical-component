import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
export declare enum LayoutBookmarkBoxType {
    StartBox = 0,
    EndBox = 1
}
export declare class BookmarkBox extends Rectangle {
    boxType: LayoutBookmarkBoxType;
    color: string;
    static DEFAULT_WIDTH: number;
    static DEFAULT_BORDER_WIDTH: number;
    constructor(boxType: LayoutBookmarkBoxType);
    equals(obj: BookmarkBox): boolean;
}
//# sourceMappingURL=bookmark-box.d.ts.map