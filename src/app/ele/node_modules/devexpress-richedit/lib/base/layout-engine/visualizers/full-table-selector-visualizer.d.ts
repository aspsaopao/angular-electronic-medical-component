import { ILayoutChangesListener } from '../../../core/interfaces/i-document-layout-changes-listener';
import { PageChange } from '../../../core/layout-formatter/changes/changes/page-change';
import { ISelectionChangesListener } from '../../selection/i-selection-changes-listener';
import { Selection } from '../../selection/selection';
import { HitTestResult } from '../hit-test-manager/hit-test-result';
import { BaseVisualizer } from './base-visualizer';
export declare class FullTableSelectorVisualizer extends BaseVisualizer implements ISelectionChangesListener, ILayoutChangesListener {
    private static SIZE;
    private static OFFSET;
    NotifyPagesReady(pageChanges: PageChange[]): void;
    NotifyFullyFormatted(_pageCount: number): void;
    NotifySelectionChanged(selection: Selection): void;
    show(htr: HitTestResult): void;
}
//# sourceMappingURL=full-table-selector-visualizer.d.ts.map