import { RichMouseEvent } from '../../event-manager';
import { RotateBoxHelper } from '../rotate-box-helper';
import { TouchHandlerStateBase } from './touch-handler-state-base';
export declare class TouchHandlerRotateBoxState extends TouchHandlerStateBase {
    rotateBoxHelper: RotateBoxHelper;
    onTouchStart(evt: RichMouseEvent): void;
    onTouchMove(evt: RichMouseEvent): boolean;
    onTouchEnd(evt: RichMouseEvent): void;
}
//# sourceMappingURL=touch-handler-rotate-box-state.d.ts.map