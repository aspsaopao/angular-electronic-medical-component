import { RichMouseEvent } from '../../event-manager';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { BoxVisualizerManager } from '../../layout-engine/visualizers/box-visualizer-manager';
import { ManipulatorHandlerBase } from '../base/manipulator-handler-base';
import { MouseHandlerStateBase } from './mouse-handler-state-base';
export declare class MouseHandler extends ManipulatorHandlerBase<MouseHandlerStateBase> {
    constructor(control: IRichEditControl, boxVisualizerManager: BoxVisualizerManager);
    static LEFT_AREA_COMMANDS_OFFSET: number;
    static WAIT_FOR_DBLCLICK_INTERVAL: number;
    onMouseDoubleClick(evt: RichMouseEvent): void;
    onMouseDown(evt: RichMouseEvent): void;
    onMouseUp(evt: RichMouseEvent): void;
    onMouseMove(evt: RichMouseEvent): void;
    onMouseWheel(evt: RichMouseEvent): void;
    onShortcut(shortcutCode: number): void;
    setCursorPointer(pointer: CursorPointer): void;
    restoreCursorPointer(): void;
}
export declare enum CursorPointer {
    Default = 0,
    Move = 1,
    Copy = 2,
    NoDrop = 3,
    EResize = 4,
    NResize = 5,
    SResize = 6,
    WResize = 7,
    SEResize = 8,
    SWResize = 9,
    NWResize = 10,
    NEResize = 11,
    EWResize = 12,
    NSResize = 13,
    Auto = 14
}
//# sourceMappingURL=mouse-handler.d.ts.map