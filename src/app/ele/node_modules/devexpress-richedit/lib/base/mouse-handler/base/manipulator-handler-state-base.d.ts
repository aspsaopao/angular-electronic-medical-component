import { ManipulatorHandlerBase } from './manipulator-handler-base';
export declare abstract class ManipulatorHandlerStateBase<HandlerT extends ManipulatorHandlerBase<ManipulatorHandlerStateBase<HandlerT>>> {
    start(): void;
    finish(): void;
    handler: HandlerT;
    constructor(handler: HandlerT);
    dispose(): void;
    protected resizeRotationChecker(action: () => void): boolean;
}
//# sourceMappingURL=manipulator-handler-state-base.d.ts.map