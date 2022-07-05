import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { zIndexCssClassType } from '../../canvas/renderes/z-index-helper';
import { LayoutPosition } from '../layout-position';
export declare class LayoutSelectionItem extends Rectangle {
    static mainPageAreaSelection: number;
    static headerFooterPageAreaSelection: number;
    floatingObjectId: number;
    constructor();
    isCursor(): boolean;
    get zIndexClassType(): zIndexCssClassType;
    get baseClassName(): string;
    static create<T extends LayoutSelectionItem>(pos: LayoutPosition, size: Size, floatingObjectId: number, constr: new () => T): T;
    equals(obj: LayoutSelectionItem): boolean;
}
export declare class LayoutSelectionCursorItem extends LayoutSelectionItem {
    isCursor(): boolean;
    get zIndexClassType(): zIndexCssClassType;
    get baseClassName(): string;
}
export declare class LayoutSelectionMisspelledItem extends LayoutSelectionItem {
    get zIndexClassType(): zIndexCssClassType;
    get baseClassName(): string;
}
export declare class LayoutSelectionSearchItem extends LayoutSelectionItem {
    get zIndexClassType(): zIndexCssClassType;
    get baseClassName(): string;
}
export declare class LayoutRangePermissionItem extends LayoutSelectionItem {
    color: string;
    get zIndexClassType(): zIndexCssClassType;
    get baseClassName(): string;
    equals(obj: LayoutRangePermissionItem): boolean;
}
export declare class LayoutSelectionFloatingObjectItem extends LayoutSelectionItem {
    get zIndexClassType(): zIndexCssClassType;
    get baseClassName(): string;
}
//# sourceMappingURL=layout-selection-items.d.ts.map