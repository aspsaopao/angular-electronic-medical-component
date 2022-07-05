import { IPointDirectionAdaptor, IRectangleDirectionAdaptor, ISizeDirectionAdaptor } from '../../base-utils/direction-adaptor/i-direction-adaptor';
import { LayoutTableColumnInfo } from '../../core/layout/table/layout-table-info';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { RichMouseEvent } from '../event-manager';
import { IRichEditControl } from '../interfaces/i-rich-edit-core';
import { ResizeTableVisualizer } from '../layout-engine/visualizers/resize-table-visualizer';
export declare abstract class ResizeTableHelperBase {
    static DIFFERENT_BY_PIXELS_ALLOW_CHANGE_MODEL: number;
    static TABLE_SEPARATOR_DIVISION_MARGIN_X: number;
    static TABLE_SEPARATOR_DIVISION_MARGIN_Y: number;
    protected rectDirAdp: IRectangleDirectionAdaptor;
    protected pointDirAdp: IPointDirectionAdaptor;
    protected sizeDirAdp: ISizeDirectionAdaptor;
    private resizeTableVisualizer;
    protected control: IRichEditControl;
    protected tableIndex: number;
    protected layoutTable: LayoutTableColumnInfo;
    protected columnBoundsRelativePage: Rectangle;
    protected sourceElementSize: Size;
    protected startPositionRelativeTable: Point;
    protected currPositionRelativeTable: Point;
    protected minValueRelativeTable: number;
    protected maxValueRelativeTable: number;
    constructor(control: IRichEditControl, resizeTableVisualizer: ResizeTableVisualizer, evt: RichMouseEvent);
    protected isInited(): boolean;
    move(evt: RichMouseEvent): void;
    end(evt: RichMouseEvent): void;
    private updateVisualizer;
    private getPartialLayoutPosition;
    private static getLayoutTable;
    protected abstract setAdaptors(): any;
    protected abstract applyChanges(): any;
    protected abstract setSpecific(): any;
    protected setIndexes(sourceElement: HTMLElement): void;
}
export declare class ResizeRowTableHelper extends ResizeTableHelperBase {
    private layoutRowIndex;
    protected setAdaptors(): void;
    static canHandleResize(evt: RichMouseEvent): boolean;
    protected isInited(): boolean;
    protected setIndexes(sourceElement: HTMLElement): void;
    protected setSpecific(): void;
    protected applyChanges(): void;
}
export declare class ResizeColumnTableHelper extends ResizeTableHelperBase {
    protected setAdaptors(): void;
    static canHandleResize(evt: RichMouseEvent): boolean;
    protected applyChanges(): void;
    protected setSpecific(): void;
    static findNearestColumnIndex(columnsXPositions: number[], xPosRelativeTable: number): number;
}
//# sourceMappingURL=resize-table-helper.d.ts.map