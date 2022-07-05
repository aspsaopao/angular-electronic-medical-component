import { DocumentLayoutDetailsLevel } from '../../../core/layout/document-layout-details-level';
import { LayoutPosition } from '../../../core/layout/layout-position';
import { LayoutAnchoredObjectBox } from '../../../core/layout/main-structures/layout-boxes/layout-anchored-object-box';
import { SubDocument } from '../../../core/model/sub-document';
import { HitTestDeviation } from '@devexpress/utils/lib/geometry/rectangle';
export declare type HitTestResultDeviations = Record<number, HitTestDeviation>;
export declare class HitTestResult extends LayoutPosition {
    subDocument: SubDocument;
    deviations: HitTestResultDeviations;
    exactlyDetailLevel: DocumentLayoutDetailsLevel;
    floatingObject: LayoutAnchoredObjectBox;
    constructor(subDocument: SubDocument);
    correctAsVisibleBox(): void;
    getPosition(): number;
}
//# sourceMappingURL=hit-test-result.d.ts.map