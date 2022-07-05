import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { FormatterManager } from '../layout-formatter/managers/formatter-manager';
import { DocumentLayout } from '../layout/document-layout';
import { DocumentLayoutDetailsLevel } from '../layout/document-layout-details-level';
import { LayoutPosition, LayoutRowPosition } from '../layout/layout-position';
import { SubDocument } from '../model/sub-document';
export declare class LayoutPositionCreatorConflictFlags implements ISupportCopyFrom<LayoutPositionCreatorConflictFlags>, ICloneable<LayoutPositionCreatorConflictFlags> {
    left: boolean;
    middle: boolean;
    right: boolean;
    simple: boolean;
    setDefault(defaultVal: boolean): LayoutPositionCreatorConflictFlags;
    setCustom(left: boolean, middle: boolean, right: boolean, simple: boolean): LayoutPositionCreatorConflictFlags;
    allIsTrue(): boolean;
    atLeastOneIsTrue(): boolean;
    atLeastOneIsFalse(): boolean;
    copyFrom(obj: LayoutPositionCreatorConflictFlags): LayoutPositionCreatorConflictFlags;
    clone(): LayoutPositionCreatorConflictFlags;
}
export declare class LayoutPositionCreator {
    protected layout: DocumentLayout;
    protected subDocument: SubDocument;
    result: LayoutPosition;
    startPosition: number;
    protected endRowConflictFlags: LayoutPositionCreatorConflictFlags;
    protected middleRowConflictFlags: LayoutPositionCreatorConflictFlags;
    protected position: number;
    protected detailsLevel: DocumentLayoutDetailsLevel;
    constructor(documentLayout: DocumentLayout, subDocument: SubDocument, logPosition: number, detailsLevel: DocumentLayoutDetailsLevel);
    create(endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
    static createLightLayoutPosition(documentLayout: DocumentLayout, subDocument: SubDocument, logPosition: number, pageIndex: number, detailsLevel: DocumentLayoutDetailsLevel, endOfLine: boolean, closerToTheRightEdgeHiddenBox: boolean): LayoutRowPosition;
    updateRowInfo(): void;
    updateBoxInfo(): void;
    protected static conflictResolver<T>(position: number, conflictFlags: LayoutPositionCreatorConflictFlags, objects: T[], object: T, objectIndex: number, getObjectStartPos: (obj: T) => number, getObjectEndPos: (obj: T) => number): [T, number];
}
export declare class LayoutPositionMainSubDocumentCreator extends LayoutPositionCreator {
    isUseMoreHardAlgorithm: boolean;
    constructor(documentLayout: DocumentLayout, subDocument: SubDocument, logPosition: number, detailsLevel: DocumentLayoutDetailsLevel, isUseMoreHardAlgorithm?: boolean);
    create(endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
    static ensureLayoutPosition(formatterController: FormatterManager, subDocument: SubDocument, logPosition: number, detailsLevel: DocumentLayoutDetailsLevel, endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
    private updatePageInfoInterval;
    private getPageResolvedFlag;
    private updatePageInfo;
    private updatePageAreaInfo;
    private updateColumnInfo;
}
export declare class LayoutPositionOtherSubDocumentCreator extends LayoutPositionCreator {
    constructor(documentLayout: DocumentLayout, subDocument: SubDocument, logPosition: number, pageIndex: number, detailsLevel: DocumentLayoutDetailsLevel);
    create(endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
}
//# sourceMappingURL=layout-position-creator.d.ts.map