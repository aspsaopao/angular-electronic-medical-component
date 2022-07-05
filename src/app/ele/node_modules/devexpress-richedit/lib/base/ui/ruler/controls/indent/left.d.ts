import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerModelState } from '../base';
import { RulerBaseIndentControl } from './base';
export declare class RulerLeftIndentDragHandle extends RulerBaseIndentControl {
    private topElement;
    private bodyElement;
    private isActionLeftIndent;
    readonly leftCorrection: number;
    private readonly _heightOfProtrudingPart;
    get heightOfProtrudingPart(): number;
    protected getRootClassName(): string;
    constructor(modelData: RulerModelData, controls: RulerControls);
    private adjustByTop;
    protected getModelState(): RulerModelState;
    updateView(): void;
    protected canHandle(source: HTMLElement): boolean;
    onMouseUp(): void;
    onEscPress(): void;
    protected calculateNewModelState(distance: number): void;
}
//# sourceMappingURL=left.d.ts.map