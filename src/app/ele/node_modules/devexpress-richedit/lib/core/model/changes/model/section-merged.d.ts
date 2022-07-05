import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class SectionMergedSubDocumentChange implements ModelChangeBase {
    sectionIndex: number;
    removedInterval: FixedInterval;
    getPropertiesFromNext: boolean;
    readonly type = ModelChangeType.SectionMerged;
    constructor(sectionIndex: number, removedInterval: FixedInterval, getPropertiesFromNext: boolean);
}
//# sourceMappingURL=section-merged.d.ts.map