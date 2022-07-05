import { IRulerMouseListener } from '../../mouse-handler';
import { RulerBase, RulerModelState } from '../base';
import { RulerShadow } from '../shadow';
export declare const RulerMinDistanceBetweenIndents = 10;
export declare abstract class RulerBaseIndentControl extends RulerBase implements IRulerMouseListener {
    currModelState: RulerModelState;
    prevModelState: RulerModelState;
    viewState: number;
    protected shadow: RulerShadow | null;
    protected abstract getModelState(): RulerModelState;
    protected abstract updateView(): any;
    protected abstract canHandle(source: HTMLElement): boolean;
    protected abstract calculateNewModelState(distance: number): any;
    abstract onMouseUp(): any;
    updateModelState(): void;
    onMouseDown(source: HTMLElement, _evt: MouseEvent): boolean;
    onMouseMove(distance: number, _source: HTMLElement): void;
    onEscPress(): void;
    protected finishHandle(): void;
    protected lineControlSetPosition(): void;
}
//# sourceMappingURL=base.d.ts.map