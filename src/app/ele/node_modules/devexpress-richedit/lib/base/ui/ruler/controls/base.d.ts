import { RulerControls } from '../manager';
import { RulerModelData } from '../model-data';
export declare class RulerModelState {
    modelValue: number;
    enabled: boolean;
    constructor(modelValue: number, enabled: boolean);
    clone(): RulerModelState;
}
export declare abstract class RulerBase {
    protected modelData: RulerModelData;
    protected controls: RulerControls;
    private _visible;
    rootElement: HTMLElement;
    get visible(): boolean;
    protected abstract getRootClassName(): string;
    constructor(modelData: RulerModelData, controls: RulerControls);
    dispose(): void;
    setVisible(visible: boolean): void;
}
//# sourceMappingURL=base.d.ts.map