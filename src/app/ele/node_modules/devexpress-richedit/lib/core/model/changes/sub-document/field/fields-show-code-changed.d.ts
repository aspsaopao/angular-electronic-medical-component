import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { SubDocumentChangeBase } from '../../change-base';
import { ModelChangeType } from '../../enums';
export declare class FieldsShowCodeChangedSubDocumentChange implements SubDocumentChangeBase {
    subDocumentId: number;
    fieldInterval: FixedInterval;
    readonly type = ModelChangeType.FieldsShowCodeChanged;
    constructor(subDocumentId: number, fieldInterval: FixedInterval);
}
//# sourceMappingURL=fields-show-code-changed.d.ts.map