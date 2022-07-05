import { RichEditClientCommand } from '../../../../commands/client-command';
import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerBaseMarginControl } from './base';
export declare class RulerRightMarginDragHandle extends RulerBaseMarginControl {
    get viewStateRelativeLeft(): number;
    protected getRootClassName(): string;
    protected get commandType(): RichEditClientCommand;
    constructor(modelData: RulerModelData, controls: RulerControls, maxPageWidth: number);
    protected setViewStateToElement(element: HTMLElement): void;
    protected getViewState(): number;
    protected lineControlSetPosition(): void;
    protected calculateNewModelState(distance: number): void;
}
//# sourceMappingURL=right.d.ts.map