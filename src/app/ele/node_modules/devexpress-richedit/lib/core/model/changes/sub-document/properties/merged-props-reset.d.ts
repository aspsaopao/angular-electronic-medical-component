import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class ParagraphAndCharacterMergedPropertiesResetSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    interval: FixedInterval;
    readonly type = ModelChangeType.ParagraphAndCharacterMergedPropertiesReset;
    constructor(subDocumentId: number, interval: FixedInterval);
}
//# sourceMappingURL=merged-props-reset.d.ts.map