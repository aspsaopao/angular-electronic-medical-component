import { LayoutSelection } from '../../../../core/layout/selection/layout-selection';
import { DocumentRendererPageCache } from '../common/document-renderer';
export declare class TouchSelectionCircleElementsManager {
    private static BAR_CLASS_NAME;
    private firstElement;
    private secondElement;
    private radius;
    layoutSelection: LayoutSelection;
    private cache;
    constructor(cache: DocumentRendererPageCache[], layoutSelection: LayoutSelection);
    getSecondElement(): HTMLElement;
    update(): void;
    setVisibilityTouchBars(visible: boolean): void;
    setFirstTouchBarVisibility(visible: boolean): void;
    setSecondTouchBarVisibility(visible: boolean): void;
    private setVisible;
    private isElementVisible;
    private isCreated;
}
//# sourceMappingURL=touch-selection-circle-elements-manager.d.ts.map