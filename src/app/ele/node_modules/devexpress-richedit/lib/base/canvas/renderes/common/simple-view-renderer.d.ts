import { LayoutChangeBase, LayoutChangeType } from '../../../../core/layout-formatter/changes/changes/layout-change-base';
import { PageChange } from '../../../../core/layout-formatter/changes/changes/page-change';
import { LayoutAnchoredObjectBox } from '../../../../core/layout/main-structures/layout-boxes/layout-anchored-object-box';
import { LayoutAnchoredPictureBox } from '../../../../core/layout/main-structures/layout-boxes/layout-anchored-picture-box';
import { LayoutAnchoredTextBox } from '../../../../core/layout/main-structures/layout-boxes/layout-anchored-text-box';
import { LayoutColumn } from '../../../../core/layout/main-structures/layout-column';
import { LayoutPage } from '../../../../core/layout/main-structures/layout-page';
import { BoundaryInterval } from '@devexpress/utils/lib/intervals/boundary';
import { ConstInterval } from '@devexpress/utils/lib/intervals/const';
import { VisibleCanvasObjectsInfo } from '../canvas-listener/simple-view-canvas-listener';
import { DocumentRenderer } from './document-renderer';
export declare class SimpleViewRenderer extends DocumentRenderer {
    protected rowIndexInterval: BoundaryInterval;
    protected paragraphFramesIndexInterval: BoundaryInterval;
    protected tableIndexInterval: BoundaryInterval;
    protected updateDataChunk: VisibleCanvasObjectsInfo;
    pageInserted(layoutPage: LayoutPage, updateDataChunk: VisibleCanvasObjectsInfo): void;
    protected renderPageContentGetFloatingObjects(page: LayoutPage): LayoutAnchoredObjectBox[];
    collectScrollChanges<ResultChangesT extends LayoutChangeBase>(oldInterval: ConstInterval, newInterval: ConstInterval, isAddUpdateChange: boolean, getConstructor: new (layoutIndex: number, canvasIndex: number, changeType: LayoutChangeType) => ResultChangesT): ResultChangesT[];
    collectScrollChangesMap<ObjectT extends LayoutAnchoredPictureBox | LayoutAnchoredTextBox, ResultChangesT extends LayoutChangeBase>(oldObjects: Record<number, ObjectT>, newObjects: Record<number, ObjectT>, isAddUpdateChange: boolean, isTextBoxes: boolean, getConstructor: new (layoutIndex: number, changeType: LayoutChangeType) => ResultChangesT): ResultChangesT[];
    private collectAllScrollChanges;
    pageScrolled(layoutPage: LayoutPage, newUpdateDataChunk: VisibleCanvasObjectsInfo): void;
    applyFormatterChanges<FormatterChangeT extends LayoutChangeBase, ScrollChangeT extends FormatterChangeT>(formatterChanges: FormatterChangeT[], scrollChanges: ScrollChangeT[]): void;
    private applyFormatterChangesMap;
    private makePageChange;
    pageUpdated(pageChange: PageChange, newUpdateDataChunk: VisibleCanvasObjectsInfo): void;
    protected renderColumn(column: LayoutColumn, level: number, isMainPageArea: boolean): HTMLElement;
}
//# sourceMappingURL=simple-view-renderer.d.ts.map