import { RichEditClientCommand } from '../../../../commands/client-command';
import { RulerBase, RulerModelState } from '../base';
export declare const RulerMinDistanceBetweenMargins = 50;
export declare abstract class RulerBaseMarginControl extends RulerBase {
    prevModelState: RulerModelState;
    currModelState: RulerModelState;
    viewState: number;
    protected marginPanelElement: HTMLElement;
    protected handlePanelElement: HTMLElement;
    protected abstract setViewStateToElement(element: HTMLElement): any;
    protected abstract getViewState(): number;
    protected abstract lineControlSetPosition(): void;
    protected abstract calculateNewModelState(distance: number): any;
    protected abstract get commandType(): RichEditClientCommand;
    updateModelState(): void;
    updateView(): void;
    canHandle(source: HTMLElement): boolean;
    onMouseDown(source: HTMLElement, _evt: MouseEvent): boolean;
    onMouseMove(distance: number, _source: HTMLElement): void;
    onMouseUp(): void;
    onEscPress(): void;
    protected getModelState(): RulerModelState;
    private finishHandle;
}
//# sourceMappingURL=base.d.ts.map