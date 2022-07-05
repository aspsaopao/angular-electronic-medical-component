import { Rectangle } from '@devexpress/utils/lib/geometry/rectangle';
import { SubDocument } from '../../model/sub-document';
import { LayoutColumn } from './layout-column';
export declare class LayoutPageArea extends Rectangle {
    subDocument: SubDocument;
    columns: LayoutColumn[];
    pageOffset: number;
    constructor(subDocument: SubDocument);
    getEndPosition(): number;
    getLastColumn(): LayoutColumn;
    deepCopy(): LayoutPageArea;
}
//# sourceMappingURL=layout-page-area.d.ts.map