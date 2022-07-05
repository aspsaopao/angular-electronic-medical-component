import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerModelState } from '../base';
import { RulerBaseIndentControl } from './base';
export declare class RulerFirstLineIndentDragHandle extends RulerBaseIndentControl {
    private readonly _heightOfProtrudingPart;
    private readonly leftCorrection;
    get heightOfProtrudingPart(): number;
    protected getRootClassName(): string;
    constructor(modelData: RulerModelData, controls: RulerControls);
    private adjustByTop;
    protected getModelState(): RulerModelState;
    updateView(): void;
    protected canHandle(source: HTMLElement): boolean;
    onMouseUp(): void;
    protected calculateNewModelState(distance: number): void;
}
//# sourceMappingURL=first-line.d.ts.map