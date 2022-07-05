import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerModelState } from '../base';
import { RulerBaseIndentControl } from './base';
export declare class RulerRightIndentDragHandle extends RulerBaseIndentControl {
    get viewStateRelativeLeft(): number;
    private readonly leftCorrection;
    protected getRootClassName(): string;
    constructor(modelData: RulerModelData, controls: RulerControls);
    private adjustByTop;
    protected getModelState(): RulerModelState;
    updateView(): void;
    private correctRelativeLeftIndents;
    protected canHandle(source: HTMLElement): boolean;
    onMouseUp(): void;
    protected lineControlSetPosition(): void;
    protected calculateNewModelState(distance: number): void;
}
//# sourceMappingURL=right.d.ts.map