import { Offset } from '@devexpress/utils/lib/geometry/point';
import { ICloneable, IEquatable } from '@devexpress/utils/lib/types';
import { LayoutPositionCreatorConflictFlags } from '../layout-engine/layout-position-creator';
import { FormatterManager } from '../layout-formatter/managers/formatter-manager';
import { IMeasurer } from '../measurer/measurer';
import { SubDocument } from '../model/sub-document';
import { ISelectionBase } from '../selection/selection-base';
import { DocumentLayout } from './document-layout';
import { DocumentLayoutDetailsLevel } from './document-layout-details-level';
import { LayoutPoint } from './layout-point';
import { LayoutBox } from './main-structures/layout-boxes/layout-box';
import { LayoutColumn } from './main-structures/layout-column';
import { LayoutPage } from './main-structures/layout-page';
import { LayoutPageArea } from './main-structures/layout-page-area';
import { LayoutRow } from './main-structures/layout-row';
export declare class LayoutAndModelPositions {
    layoutPosition: LayoutPosition;
    modelPosition: number;
    constructor(layoutPosition: LayoutPosition, modelPosition: number);
}
export declare class LayoutRowPosition {
    row: LayoutRow;
    box: LayoutBox;
    boxIndex: number;
    charOffset: number;
}
export declare class LayoutPositionBase extends LayoutRowPosition implements IEquatable<LayoutPositionBase> {
    detailsLevel: DocumentLayoutDetailsLevel;
    rowIndex: number;
    column: LayoutColumn;
    columnIndex: number;
    pageArea: LayoutPageArea;
    pageAreaIndex: number;
    page: LayoutPage;
    pageIndex: number;
    getRelatedSubDocumentPagePosition(): number;
    equals(obj: LayoutPositionBase): boolean;
    getOffsetRelativeColumn(): Offset;
    stepBackRow(): boolean;
    stepForwardRow(): boolean;
    getPositionRelativePage(measurer: IMeasurer): LayoutPoint;
    getLayoutX(measurer: IMeasurer, detailsLevel?: DocumentLayoutDetailsLevel): number;
    getLayoutY(detailsLevel?: DocumentLayoutDetailsLevel): number;
    getPageAreaBySubDocument(subDocument: SubDocument): LayoutPageArea;
    advanceToPrevRow(layout: DocumentLayout): boolean;
    advanceToNextBoxInRow(): boolean;
    advanceToPrevBoxInRow(): boolean;
    advanceToNextRow(layout: DocumentLayout): boolean;
}
export declare class LayoutPosition extends LayoutPositionBase implements ICloneable<LayoutPosition> {
    constructor(detailsLevel: DocumentLayoutDetailsLevel);
    static ensure(formatterController: FormatterManager, selection: ISelectionBase, subDocument: SubDocument, logPosition: number, detailsLevel: DocumentLayoutDetailsLevel, endRowConflictFlags: LayoutPositionCreatorConflictFlags, middleRowConflictFlags: LayoutPositionCreatorConflictFlags): LayoutPosition;
    getLogPosition(detailsLevel?: DocumentLayoutDetailsLevel): number;
    isPositionBoxEnd(): boolean;
    isLastBoxInRow(): boolean;
    isPositionAfterLastBoxInRow(): boolean;
    isPositionBeforeFirstBoxInRow(): boolean;
    switchToEndPrevBoxInRow(): boolean;
    switchToStartNextBoxInRow(): void;
    copyFrom(source: LayoutPosition): void;
    clone(): LayoutPosition;
    initByIndexes(pageIndex: number, pageAreaIndex?: number, columnIndex?: number, rowIndex?: number, boxIndex?: number, charOffset?: number): LayoutPosition;
    applyObjectsAsMainSubDocument(layout: DocumentLayout, idOtherSubDoc: number): this;
    posIsStartPage(): boolean;
    isFirstRowOnPage(): boolean;
}
export declare class LayoutPositionDiscardHelper {
    static onStartCharLevel(lp: LayoutPosition): void;
    static onStartBoxLevel(lp: LayoutPosition): void;
    static onStartRowLevel(lp: LayoutPosition): void;
    static onStartColumnLevel(lp: LayoutPosition): void;
    static onStartPageAreaLevel(lp: LayoutPosition): void;
    static onStartPageLevel(pages: LayoutPage[], lp: LayoutPosition): void;
    static onEndCharLevel(lp: LayoutPosition): void;
    static onEndBoxLevel(lp: LayoutPosition): void;
    static onEndRowLevel(lp: LayoutPosition): void;
    static onEndColumnLevel(lp: LayoutPosition): void;
    static onEndPageAreaLevel(lp: LayoutPosition): void;
    static onEndPageLevel(layout: DocumentLayout, lp: LayoutPosition): void;
}
//# sourceMappingURL=layout-position.d.ts.map