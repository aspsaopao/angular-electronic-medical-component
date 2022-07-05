import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
export declare class ParagraphMergedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    removedInterval: FixedInterval;
    position: number;
    getPropertiesFromNext: boolean;
    readonly type = ModelChangeType.ParagraphMerged;
    constructor(subDocumentId: number, removedInterval: FixedInterval, position: number, getPropertiesFromNext: boolean);
}
//# sourceMappingURL=paragraph-merged.d.ts.map