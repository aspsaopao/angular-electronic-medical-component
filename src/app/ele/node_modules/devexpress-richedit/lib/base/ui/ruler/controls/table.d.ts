import { TableColumnSeparatorStruct } from '../../../commands/ruler/ruler-table-column-separators-command';
import { RulerControls } from '../manager';
import { RulerModelData } from '../model-data';
import { RulerMultiControl } from './owner';
export declare class RulerTableModelState {
    columnSeparators: TableColumnSeparatorStruct;
    tableIndex: number;
    enabled: boolean;
    constructor(columnSeparators: TableColumnSeparatorStruct, tableIndex: number, enabled: boolean);
    clone(): RulerTableModelState;
}
export declare class RulerTableColumnViewState {
    leftMargin: number;
    rightMarginOfPrevColumn: number;
    position: number;
    constructor(leftMargin: number, rightMarginOfPrevColumn: number, position: number);
    equals(obj: RulerTableColumnViewState): boolean;
    clone(): RulerTableColumnViewState;
}
export declare class RulerTablesControl extends RulerMultiControl<RulerTableColumnState, RulerTableModelState, RulerTableColumnViewState> {
    protected getModelState(): RulerTableModelState;
    updateView(): void;
    protected createSubControl(): RulerTableColumnState;
    onMouseDown(source: HTMLElement, _evt: MouseEvent): boolean;
    onMouseUp(): void;
    protected calculateNewModelState(distance: number): void;
}
declare class RulerTableColumnState {
    private rootElement;
    private separatorElement;
    private viewState;
    private readonly corectionValue;
    private readonly controls;
    constructor(modelData: RulerModelData, controls: RulerControls);
    dispose(): void;
    showShadow(): void;
    hideShadow(): void;
    lineControlSetPosition(): void;
    canHandle(source: HTMLElement): boolean;
    setValue(viewState: RulerTableColumnViewState): void;
}
export {};
//# sourceMappingURL=table.d.ts.map