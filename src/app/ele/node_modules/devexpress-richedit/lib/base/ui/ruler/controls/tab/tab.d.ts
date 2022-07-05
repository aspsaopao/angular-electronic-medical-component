import { TabAlign } from '../../../../../core/model/paragraph/paragraph';
import { TabInfo } from '../../../../../core/model/paragraph/paragraph-style';
import { RulerControls } from '../../manager';
import { RulerModelData } from '../../model-data';
import { RulerMultiControl } from '../owner';
import { RulerShadow } from '../shadow';
export declare class RulerTabsControlState {
    tabs: TabInfo[];
    enabled: boolean;
    constructor(tabs: TabInfo[], enabled: boolean);
    clone(): RulerTabsControlState;
}
export declare class RulerTabViewState {
    position: number;
    align: TabAlign;
    constructor(position: number, align: TabAlign);
    equals(obj: RulerTabViewState): boolean;
    clone(): RulerTabViewState;
}
export declare class RulerTabsControl extends RulerMultiControl<RulerTabControl, RulerTabsControlState, RulerTabViewState> {
    private tabAction;
    private newTab;
    private deleteTab;
    protected getModelState(): RulerTabsControlState;
    updateView(): void;
    protected createSubControl(): RulerTabControl;
    private isTabMarkZone;
    onMouseDown(source: HTMLElement, evt: MouseEvent): boolean;
    calculateExactHit(source: HTMLElement): boolean;
    updatePresentation(): void;
    tryInsertNewTab(evt: MouseEvent): boolean;
    onMouseMove(distance: number, source: HTMLElement): void;
    onMouseUp(): void;
    protected finishHandle(): void;
    private minPosition;
    private maxPosition;
    protected calculateNewModelState(distance: number): void;
}
declare class RulerTabControl {
    private rootElement;
    private viewState;
    private leftCorrection;
    protected readonly modelData: RulerModelData;
    protected controls: RulerControls;
    protected shadow: RulerShadow | null;
    constructor(modelData: RulerModelData, controls: RulerControls);
    dispose(): void;
    setVisible(visible: boolean): void;
    canHandle(source: HTMLElement): boolean;
    showShadow(): void;
    hideShadow(): void;
    lineControlSetPosition(): void;
    setValue(viewState: RulerTabViewState): void;
    private setCorrection;
    private changeAlign;
    private applyTemplate;
}
export {};
//# sourceMappingURL=tab.d.ts.map