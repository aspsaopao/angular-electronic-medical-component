import { ILayoutChangesListener } from '../../../core/interfaces/i-document-layout-changes-listener';
import { PageChange } from '../../../core/layout-formatter/changes/changes/page-change';
import { ISelectionChangesListener } from '../../selection/i-selection-changes-listener';
import { Selection } from '../../selection/selection';
import { BaseVisualizer } from './base-visualizer';
export declare class AnchorVisualizer extends BaseVisualizer implements ISelectionChangesListener, ILayoutChangesListener {
    NotifySelectionChanged(_selection: Selection): void;
    NotifyScrollPositionChanged(): void;
    NotifyPagesReady(_pageChanges: PageChange[]): void;
    NotifyFullyFormatted(_pageCount: number): void;
    show(): void;
    private isFloatingObjectSelected;
}
//# sourceMappingURL=anchor-visualizer.d.ts.map