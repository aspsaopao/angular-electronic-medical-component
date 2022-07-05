import { Field, HyperlinkInfo } from '../../../core/model/fields/field';
import { Stack } from '@devexpress/utils/lib/class/stack';
import { Data } from '../data';
import { ImportFieldInfo } from '../model/import-field-info';
export declare class FieldImporter {
    get fieldInfoStack(): Stack<ImportFieldInfo>;
    get lastField(): ImportFieldInfo;
    data: Data;
    currIndex: number;
    constructor(data: Data);
    applyToLastField(action: (field: ImportFieldInfo) => void): void;
    finishImport(): void;
    processFieldBegin(fieldInfo: ImportFieldInfo): void;
    processFieldSeparator(fieldInfo: ImportFieldInfo): void;
    processFieldEnd(fieldInfo: ImportFieldInfo): Field;
    insertHyperlinkInstruction(info: HyperlinkInfo): void;
    deleteInvalidFieldsInfo(): void;
    private finishField;
    insertFullField(insertCode: () => void, insertResult: () => void, hyperlinkInfo?: HyperlinkInfo): void;
}
//# sourceMappingURL=field-importer.d.ts.map