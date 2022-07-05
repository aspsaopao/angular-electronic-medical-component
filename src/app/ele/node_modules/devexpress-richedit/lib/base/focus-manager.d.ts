import { CanvasManager } from './canvas/canvas-manager';
import { EventManager } from './event-manager';
import { InputController } from './input-controller';
import { IControlOwner } from './interfaces/i-control-owner';
export declare class FocusManager {
    private isFocus;
    private canvasManager;
    private owner;
    private inputController;
    private eventManager;
    constructor(canvasManager: CanvasManager, owner: IControlOwner, inputController: InputController, eventManager: EventManager);
    set isInFocus(focused: boolean);
    get isInFocus(): boolean;
    captureFocus(): void;
}
//# sourceMappingURL=focus-manager.d.ts.map