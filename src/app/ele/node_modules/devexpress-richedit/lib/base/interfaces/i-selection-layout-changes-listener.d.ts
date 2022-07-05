import { IEventListener } from '../../base-utils/event-dispatcher';
import { ICanvasState } from '../scroll/canvas-states';
export interface ISelectionLayoutChangesListener extends IEventListener {
    NotifySelectionLayoutChanged(): any;
    NotifySearchSelectionLayoutChanged(): any;
    NotifyMisspelledSelectionLayoutChanged(): any;
    NotifyRangePermissionLayoutChanged(): any;
}
export interface IScrollLayoutChangesListener extends IEventListener {
    NotifyScrollPositionChanged(canvasState: ICanvasState): any;
}
//# sourceMappingURL=i-selection-layout-changes-listener.d.ts.map