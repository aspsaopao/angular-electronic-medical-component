import { Field } from '../../../core/model/fields/field';
import { InlinePictureRun } from '../../../core/model/runs/inline-picture-run';
import { RunBase } from '../../../core/model/runs/run-base';
import { Stack } from '@devexpress/utils/lib/class/stack';
import { TCFieldState } from '../destination/fields/enums';
import { RtfFieldInfo } from '../model/fields/rtf-field-info';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfFieldImporter extends RtfBaseImporter {
    TCFieldState: TCFieldState;
    updateFieldsOnPaste: boolean;
    get fields(): Stack<RtfFieldInfo>;
    get currentField(): RtfFieldInfo;
    constructor(data: RtfImportData);
    startField(): void;
    ensureStartMarkAdded(): void;
    ensureSeparatorMarkAdded(): void;
    ensureEndMarkAdded(): void;
    private addMarkRun;
    endField(): void;
    protected getFormattingSourceRun(_field: Field): RunBase;
    protected setFieldRunFormatting(_fieldCodeStart: RunBase, _sourceRun: RunBase): void;
    calculateFieldIndex(fields: Field[], newFieldStartPosition: number): number;
    createFieldWithResult(fieldInfo: RtfFieldInfo): void;
    processShapeFieldContentCore(drawingObjectRun: any, inlinePicture: InlinePictureRun, _inlinePictureRunIndex: number): void;
    processMixedShapeFieldContent(): void;
    processShapeFieldContent(): void;
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
}
//# sourceMappingURL=field-importer.d.ts.map