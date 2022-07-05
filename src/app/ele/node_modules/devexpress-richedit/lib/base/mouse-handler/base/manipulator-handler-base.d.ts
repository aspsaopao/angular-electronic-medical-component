import { Field } from '../../../core/model/fields/field';
import { RichMouseEvent } from '../../event-manager';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { BoxVisualizerManager } from '../../layout-engine/visualizers/box-visualizer-manager';
import { ManipulatorHandlerStateBase } from './manipulator-handler-state-base';
export declare class ManipulatorHandlerBase<StateT extends ManipulatorHandlerStateBase<ManipulatorHandlerBase<StateT>>> {
    private defaultState;
    control: IRichEditControl;
    state: StateT;
    boxVisualizerManager: BoxVisualizerManager;
    mouseWheelEvent: boolean;
    constructor(control: IRichEditControl, defaultStateConstructor: new (handler: ManipulatorHandlerBase<StateT>) => StateT, boxVisualizerManager: BoxVisualizerManager);
    dispose(): void;
    switchToDefaultState(): void;
    switchState(state: StateT): void;
    getHyperlinkFieldResult(evt: RichMouseEvent): Field | null;
}
//# sourceMappingURL=manipulator-handler-base.d.ts.map