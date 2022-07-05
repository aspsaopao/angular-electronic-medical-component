import { CheckBoxProperties } from '../../../core/model/fields/check-box-properties';
import { Field, HyperlinkInfo } from '../../../core/model/fields/field';
import { FormFieldProperties } from '../../../core/model/fields/form-field-properties';
export declare class ImportFieldInfo {
    index: number;
    startPos: number;
    codeEndPos: number;
    resultEndIndexPos: number;
    formFieldProperties: FormFieldProperties;
    checkBoxProperties: CheckBoxProperties;
    nestedFields: Field[];
    hyperlinkInfo: HyperlinkInfo;
    disableUpdate: boolean;
    hideByParent: boolean;
    locked: boolean;
}
//# sourceMappingURL=import-field-info.d.ts.map