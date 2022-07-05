import { ICloneable } from '@devexpress/utils/lib/types';
import { RulerControls } from '../manager';
import { RulerModelData } from '../model-data';
export interface IRulerSubControl {
    dispose(): void;
    showShadow(): void;
    hideShadow(): void;
    lineControlSetPosition(): void;
}
export declare abstract class RulerMultiControl<TSubControl extends IRulerSubControl, TModelState extends ICloneable<TModelState>, TVisualState> {
    protected modelData: RulerModelData;
    protected controls: RulerControls;
    protected subControls: TSubControl[];
    currModelState: TModelState;
    protected prevModelState: TModelState;
    protected handleControlIndex: number;
    protected get activeSubControl(): TSubControl;
    protected viewState: TVisualState[];
    protected abstract getModelState(): TModelState;
    abstract updateView(): void;
    protected abstract createSubControl(): TSubControl;
    protected abstract calculateNewModelState(distance: number): void;
    constructor(modelData: RulerModelData, controls: RulerControls);
    dispose(): void;
    update(): void;
    updateModelState(): void;
    onMouseMove(distance: number, _source: HTMLElement): void;
    onEscPress(): void;
    protected finishHandle(): void;
    protected setCount(count: number): void;
}
//# sourceMappingURL=owner.d.ts.map