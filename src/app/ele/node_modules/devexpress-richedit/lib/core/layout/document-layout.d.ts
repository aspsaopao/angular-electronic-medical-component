import { DocumentModel } from '../model/document-model';
import { PositionManager } from '../model/position/position-manager';
import { LayoutAnchoredObjectBox } from './main-structures/layout-boxes/layout-anchored-object-box';
import { LayoutPage } from './main-structures/layout-page';
export declare class ModelPositionHolder {
    private pos;
    private posManager;
    constructor(pos: number, posManager: PositionManager);
    get modelPosition(): number;
    destructor(): void;
}
export declare class AnchorObjectsPositionInfo {
    private model;
    cache: Record<number, ModelPositionHolder>;
    constructor(model: DocumentModel);
    add(obj: LayoutAnchoredObjectBox, modelPosition: number): void;
    delete(id: number): void;
    getPosition(objectId: number): number;
    clear(): void;
}
export declare class DocumentLayout {
    pages: LayoutPage[];
    validPageCount: number;
    lastMaxNumPages: number;
    isFullyFormatted: boolean;
    anchorObjectsPositionInfo: AnchorObjectsPositionInfo;
    pageColor: number;
    constructor(anchorObjectsPositionInfo: AnchorObjectsPositionInfo);
    setEmptyLayout(pageColor: number): void;
    getLastValidPage(): LayoutPage;
    isPageValid(pageIndex: number): boolean;
}
//# sourceMappingURL=document-layout.d.ts.map