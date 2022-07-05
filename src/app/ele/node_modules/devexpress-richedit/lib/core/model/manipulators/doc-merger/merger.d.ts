import { SubDocumentInterval, SubDocumentPosition } from '../../sub-document';
import { Table } from '../../tables/main-structures/table';
import { BaseManipulator } from '../base-manipulator';
import { ModelManipulator } from '../model-manipulator';
export declare class DocumentMerger extends BaseManipulator {
    constructor(manipulator: ModelManipulator);
    mergeDocumentModel(sourceInfo: SubDocumentInterval, targetSubDocPos: SubDocumentPosition): Table[];
    private needInsertParagraphBeforeTable;
    private insertParagraph;
}
//# sourceMappingURL=merger.d.ts.map