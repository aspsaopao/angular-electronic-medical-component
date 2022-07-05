import { RichMouseEvent } from '../../event-manager';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { ResizeTableVisualizer } from '../../layout-engine/visualizers/resize-table-visualizer';
import { ResizeTableHelperBase } from '../resize-table-helper';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare type MouseHandlerDragResizeTableBaseHelperConstructorType = new (control: IRichEditControl, resizeTableVisualizer: ResizeTableVisualizer, evt: RichMouseEvent) => ResizeTableHelperBase;
export declare class MouseHandlerDragResizeTableBase extends MouseHandlerStateBase {
    private helper;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
    protected getHelperConstructor(): MouseHandlerDragResizeTableBaseHelperConstructorType;
}
export declare class MouseHandlerDragTableRowState extends MouseHandlerDragResizeTableBase {
    protected getHelperConstructor(): MouseHandlerDragResizeTableBaseHelperConstructorType;
}
export declare class MouseHandlerDragTableColumnState extends MouseHandlerDragResizeTableBase {
    protected getHelperConstructor(): MouseHandlerDragResizeTableBaseHelperConstructorType;
}
//# sourceMappingURL=mouse-handler-drag-column-or-row-state.d.ts.map