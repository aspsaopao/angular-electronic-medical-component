import { IMeasurer } from '../core/measurer/measurer';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { ViewManager } from './canvas/renderes/view-manager';
import { IControlOwner } from './interfaces/i-control-owner';
import { IPopupMenuManager } from './interfaces/i-rich-edit-core';
import { Selection } from './selection/selection';
export declare class PopupMenuManager implements IPopupMenuManager {
    private controlOwner;
    private measurer;
    private selection;
    private viewManager;
    private rejectNextShowContextMenuId;
    constructor(controlOwner: IControlOwner, viewManager: ViewManager, measurer: IMeasurer, selection: Selection);
    setSelection(selection: Selection): void;
    rejectNextShowContextMenu(): void;
    showByKey(): void;
    showByMouseClick(point: Point): void;
    showByTouchClick(): void;
    private undefinedPoint;
    private getContextMenuAbsPoint;
}
//# sourceMappingURL=popup-menu-manager.d.ts.map