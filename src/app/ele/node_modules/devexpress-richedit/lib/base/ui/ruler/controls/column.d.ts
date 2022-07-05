import { RulerControls } from '../manager';
import { RulerMultiControl } from './owner';
export declare enum ColumnAction {
    None = 0,
    ColumnMove = 1,
    ColumnSpace = 2,
    ColumnWidth = 3
}
export declare class RulerColumnModelState {
    leftPos: number;
    width: number;
    space: number;
    get rightPos(): number;
    constructor(leftPos: number, width: number, space: number);
    clone(): RulerColumnModelState;
    equals(obj: RulerColumnModelState): boolean;
}
export declare class RulerColumnsModelState {
    columns: RulerColumnModelState[];
    equalWidth: boolean;
    columnActiveIndex: number;
    enabled: boolean;
    constructor(columns: RulerColumnModelState[], equalWidth: boolean, columnActiveIndex: number, enabled: boolean);
    get activeColumn(): RulerColumnModelState;
    clone(): RulerColumnsModelState;
}
export declare class RulerColumnsControl extends RulerMultiControl<RulerColumnState, RulerColumnsModelState, RulerColumnModelState> {
    action: ColumnAction;
    protected getModelState(): RulerColumnsModelState;
    updateView(): void;
    protected createSubControl(): RulerColumnState;
    marginsChanged(diff: number): void;
    onMouseDown(source: HTMLElement, _evt: MouseEvent): boolean;
    onMouseUp(): void;
    protected calculateNewModelState(distance: number): void;
    protected calculateNewModelStateColumnMove(distance: number): void;
    protected calculateNewModelStateColumnSpace(distance: number, leftEdge: boolean): void;
}
declare class RulerColumnState {
    private rootElement;
    private leftElement;
    private rightElement;
    private viewState;
    protected controls: RulerControls;
    constructor(controls: RulerControls);
    dispose(): void;
    showShadow(): void;
    hideShadow(): void;
    lineControlSetPosition(): void;
    setValue(viewState: RulerColumnModelState): void;
    getAction(source: HTMLElement): ColumnAction;
}
export {};
//# sourceMappingURL=column.d.ts.map