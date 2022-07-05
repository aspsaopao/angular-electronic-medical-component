import { FieldRequestData } from '../field-request-manager';
import { FieldName } from '../names';
import { FieldMailMergeType } from './field-code-parser';
import { FieldCodeParserDocVariable } from './field-code-parser-doc-variable';
export declare class FieldCodeParserMailMerge extends FieldCodeParserDocVariable {
    get name(): FieldName;
    getMailMergeType(): FieldMailMergeType;
    protected insertDefaultText(): boolean;
    protected getRequestData(): FieldRequestData;
    getMergeFieldName(): string;
    protected applyResponse(response: any): boolean;
}
//# sourceMappingURL=field-code-parser-merge-field.d.ts.map