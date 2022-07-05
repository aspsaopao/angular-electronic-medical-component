import { RichEditClientCommand } from '../../../../commands/client-command';
import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerBaseMarginControl } from './base';
export declare const RulerMinDistanceBetweenMargins = 50;
export declare class RulerLeftMarginDragHandle extends RulerBaseMarginControl {
    private readonly initialLeft;
    protected getRootClassName(): string;
    protected get commandType(): RichEditClientCommand;
    constructor(modelData: RulerModelData, controls: RulerControls, maxPageWidth: number);
    protected setViewStateToElement(element: HTMLElement): void;
    protected getViewState(): number;
    protected lineControlSetPosition(): void;
    protected calculateNewModelState(distance: number): void;
}
//# sourceMappingURL=left.d.ts.map