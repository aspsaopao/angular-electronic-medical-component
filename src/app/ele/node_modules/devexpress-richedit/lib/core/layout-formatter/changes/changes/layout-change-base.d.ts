export declare enum LayoutChangeType {
    Deleted = 0,
    Replaced = 1,
    Updated = 2,
    Inserted = 3
}
export declare abstract class LayoutChangeBase {
    changeType: LayoutChangeType;
    index: number;
    get layoutIndex(): number;
    get canvasIndex(): number;
    constructor(index: number, changeType?: LayoutChangeType);
    summarizeChanges(_change: LayoutChangeBase): void;
    abstract reduceChanges(): this;
}
export declare class AnchoredPictureChange extends LayoutChangeBase {
    reduceChanges(): this;
}
export declare class ParagraphFrameChange extends LayoutChangeBase {
    reduceChanges(): this;
}
export declare class RowChange extends LayoutChangeBase {
    reduceChanges(): this;
}
export declare class TableChange extends LayoutChangeBase {
    reduceChanges(): this;
}
export declare class RowChangeSV extends RowChange {
    private _layoutIndex;
    get layoutIndex(): number;
    get canvasIndex(): number;
    constructor(layoutIndex: number, canvasIndex: number, changeType: LayoutChangeType);
}
export declare class TableChangeSV extends TableChange {
    private _layoutIndex;
    get layoutIndex(): number;
    get canvasIndex(): number;
    constructor(layoutIndex: number, canvasIndex: number, changeType: LayoutChangeType);
}
export declare class ParagraphFrameChangeSV extends ParagraphFrameChange {
    private _layoutIndex;
    get layoutIndex(): number;
    get canvasIndex(): number;
    constructor(layoutIndex: number, canvasIndex: number, changeType: LayoutChangeType);
}
//# sourceMappingURL=layout-change-base.d.ts.map