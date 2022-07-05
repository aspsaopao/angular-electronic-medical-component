import { SubDocumentInfoBase } from '../../model/sub-document-infos';
import { InnerClientProperties } from '../../rich-utils/inner-client-properties';
import { LayoutSelectionInfo } from './layout-selection-info';
export declare class LayoutSelection {
    searchInfo: LayoutSelectionInfo;
    misspelledInfo: LayoutSelectionInfo;
    selectionInfo: LayoutSelectionInfo;
    rangePermissionInfo: LayoutSelectionInfo;
    subDocumentInfo: SubDocumentInfoBase;
    pageIndex: number;
    firstPageIndexWithSelection: number;
    lastPageIndexWithSelection: number;
    constructor(subDocumentInfo: SubDocumentInfoBase, pageIndex: number, innerClientProperties: InnerClientProperties);
    updatePageIndexWithSelection(): void;
}
//# sourceMappingURL=layout-selection.d.ts.map