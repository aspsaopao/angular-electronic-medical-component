import { ColumnChange } from '../changes/column-change';
import { LayoutChangeBase, LayoutChangeType, ParagraphFrameChange, RowChange, TableChange } from '../changes/layout-change-base';
import { PageAreaChange } from '../changes/page-area-change';
import { PageChange } from '../changes/page-change';
export declare abstract class ChangesMerger {
    private infos;
    private resultChanges;
    merge(changes: LayoutChangeBase[]): LayoutChangeBase[];
    protected abstract changeConstructor(index: number, changeType: LayoutChangeType): LayoutChangeBase;
    private fillTo;
    private handleDeletedChange;
    private handleInsertedChange;
    private handleReplacedChange;
    private collectFinalChanges;
}
export declare class LayoutPageChangesMerger extends ChangesMerger {
    protected changeConstructor(index: number, changeType: LayoutChangeType): PageChange;
}
export declare class LayoutPageAreaChangesMerger extends ChangesMerger {
    protected changeConstructor(index: number, changeType: LayoutChangeType): PageAreaChange;
}
export declare class LayoutColumnChangesMerger extends ChangesMerger {
    protected changeConstructor(index: number, changeType: LayoutChangeType): ColumnChange;
}
export declare class LayoutRowChangesMerger extends ChangesMerger {
    protected changeConstructor(index: number, changeType: LayoutChangeType): RowChange;
}
export declare class LayoutTableChangesMerger extends ChangesMerger {
    protected changeConstructor(index: number, changeType: LayoutChangeType): TableChange;
}
export declare class LayoutParagraphFrameChangesMerger extends ChangesMerger {
    protected changeConstructor(index: number, changeType: LayoutChangeType): ParagraphFrameChange;
}
//# sourceMappingURL=changes-merger.d.ts.map