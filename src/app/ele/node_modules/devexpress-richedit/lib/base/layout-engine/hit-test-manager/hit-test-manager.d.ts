import { DocumentLayout } from '../../../core/layout/document-layout';
import { DocumentLayoutDetailsLevel } from '../../../core/layout/document-layout-details-level';
import { LayoutPoint } from '../../../core/layout/layout-point';
import { IMeasurer } from '../../../core/measurer/measurer';
import { SubDocument } from '../../../core/model/sub-document';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { Rectangle, RectangleDeviation } from '@devexpress/utils/lib/geometry/rectangle';
import { HitTestResult } from './hit-test-result';
export declare class HitTestManager {
    private documentLayout;
    private measurer;
    private result;
    private point;
    private subDocument;
    private excludeTextBoxesFromSubDocuments;
    constructor(documentLayout: DocumentLayout, measurer: IMeasurer);
    calculate(point: LayoutPoint, requestDetailsLevel: DocumentLayoutDetailsLevel, subDocument: SubDocument, excludeTextBoxesFromSubDocuments?: boolean): HitTestResult;
    private calcPage;
    private calcFloatingObject;
    private calcPageArea;
    private calcColumn;
    private calcRow;
    private calcBox;
    private calcCharacter;
    private static getDeviation;
    private static findNearest;
    private getClosestTable;
    private static choiseClosestTable;
    private getLayoutRowIndexCaseInTable;
    private static getCellInRow;
    private getCell;
    static isPointInTexBoxArea(point: Point, box: Rectangle, angle: number): boolean;
    private static hitTestRectangles;
}
export declare class HitTestOfRectanglesResult {
    obj: Rectangle;
    deviation: RectangleDeviation;
    constructor(obj: Rectangle, deviation: RectangleDeviation);
}
//# sourceMappingURL=hit-test-manager.d.ts.map