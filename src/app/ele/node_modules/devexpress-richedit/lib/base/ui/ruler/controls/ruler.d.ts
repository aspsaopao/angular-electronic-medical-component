import { RulerControls } from '../manager';
import { RulerModelData } from '../model-data';
import { RulerBase } from './base';
export declare class RulerControl extends RulerBase {
    protected getRootClassName(): string;
    private canHandleScroll;
    private initialMarginLeftElement;
    private currPageWidth;
    private prevPageWidth;
    get pageWidth(): number;
    constructor(modelData: RulerModelData, controls: RulerControls);
    init(): void;
    private setPaddings;
    updateModelState(): void;
    updateView(): void;
    adjust(): void;
    onScroll(): void;
    calculateLeftOffset(): string;
}
//# sourceMappingURL=ruler.d.ts.map