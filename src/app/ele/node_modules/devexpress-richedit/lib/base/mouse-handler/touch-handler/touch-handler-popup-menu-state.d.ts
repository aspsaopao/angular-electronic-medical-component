import { RichMouseEvent } from '../../event-manager';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerPopupMenuState extends TouchHandlerStateBase {
    onTouchStart(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(_evt: RichMouseEvent): void;
    private getNextState;
    private canExtendSelection;
    private canExtendSelectionOnOneSide;
    private getLayoutPosition;
    private isLeftOrRightEdge;
    private isHitPoints;
}
//# sourceMappingURL=touch-handler-popup-menu-state.d.ts.map