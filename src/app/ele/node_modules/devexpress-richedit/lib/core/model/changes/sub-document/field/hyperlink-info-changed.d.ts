import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { HyperlinkInfo } from '../../../fields/field';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class HyperlinkInfoChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    fieldResultInterval: FixedInterval;
    fieldCodeInterval: FixedInterval;
    newHyperlinkInfo: HyperlinkInfo;
    readonly type = ModelChangeType.HyperlinkInfoChanged;
    constructor(subDocumentId: number, fieldResultInterval: FixedInterval, fieldCodeInterval: FixedInterval, newHyperlinkInfo: HyperlinkInfo);
}
//# sourceMappingURL=hyperlink-info-changed.d.ts.map