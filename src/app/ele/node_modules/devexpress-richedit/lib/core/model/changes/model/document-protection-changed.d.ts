import { DocumentProtectionProperties } from '../../options/document-protection';
import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class DocumentProtectionChangedModelChange implements ModelChangeBase {
    documentProtectionProperties: DocumentProtectionProperties;
    readonly type = ModelChangeType.DocumentProtectionChanged;
    constructor(documentProtectionProperties: DocumentProtectionProperties);
}
//# sourceMappingURL=document-protection-changed.d.ts.map