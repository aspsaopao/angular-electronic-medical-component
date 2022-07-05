import { ILayoutChangesListener } from '../../../core/interfaces/i-document-layout-changes-listener';
import { PageChange } from '../../../core/layout-formatter/changes/changes/page-change';
import { LayoutBox } from '../../../core/layout/main-structures/layout-boxes/layout-box';
import { LayoutColumn } from '../../../core/layout/main-structures/layout-column';
import { LayoutPageArea } from '../../../core/layout/main-structures/layout-page-area';
import { LayoutRow } from '../../../core/layout/main-structures/layout-row';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { RichMouseEvent } from '../../event-manager';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { ISelectionChangesListener } from '../../selection/i-selection-changes-listener';
import { Selection } from '../../selection/selection';
import { BaseVisualizer } from './base-visualizer';
export declare class ResizeBoxVisualizer extends BaseVisualizer implements ISelectionChangesListener, ILayoutChangesListener {
    private initBounds;
    NotifySelectionChanged(selection: Selection): void;
    NotifyScrollPositionChanged(): void;
    NotifyFullyFormatted(_pageCount: number): void;
    NotifyPagesReady(pageChanges: PageChange[]): void;
    private setBox;
    protected reset(): void;
    show(pageIndex: number, pageArea: LayoutPageArea, column: LayoutColumn, row: LayoutRow, box: LayoutBox): void;
    showAtPos(pageIndex: number, position: Point): void;
    recalculate(size: Size, positionDelta: Size, newRotation: number): void;
    isResizeBoxVisible(): boolean;
    shouldCapture(evt: RichMouseEvent): boolean;
    static shouldRotate(evt: RichMouseEvent, control: IRichEditControl): boolean;
    static shouldHandleTextBoxAreaClick(evt: RichMouseEvent): boolean;
    private static isEventSourceHasClassName;
    private static shouldCaptureEvents;
}
//# sourceMappingURL=resize-box-visualizer.d.ts.map