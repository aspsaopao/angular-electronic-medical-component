import { DocumentModel } from '../document-model';
import { DocumentProtectionType } from '../json/enums/json-document-enums';
import { DocumentProtectionProperties } from '../options/document-protection';
import { BaseManipulator } from './base-manipulator';
export declare class DocumentProtectionPropertiesManipulator extends BaseManipulator {
    changeProtectionProperties(documentModel: DocumentModel, newProtectionProperties: DocumentProtectionProperties): DocumentProtectionProperties;
    raiseProtectionPropertiesChanged(): void;
    raiseRangePermissionPropertiesChanged(): void;
    filterRangePermissions(): void;
    enforceDocumentProtection(password: string, protectionType?: DocumentProtectionType): void;
    forceRemoveDocumentProtection(): void;
}
//# sourceMappingURL=document-protection-properties-manipulator.d.ts.map