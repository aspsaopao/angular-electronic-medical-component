import { FieldRequestData } from '../field-request-manager';
import { FieldName } from '../names';
import { FieldCodeParser, FieldMailMergeType } from './field-code-parser';
export declare class FieldCodeParserDocVariable extends FieldCodeParser {
    protected fieldID: number;
    get name(): FieldName;
    getMailMergeType(): FieldMailMergeType;
    parseCodeCurrentFieldInternal(responce: any): boolean;
    protected insertDefaultText(): boolean;
    protected placeRequest(): boolean;
    protected getRequestData(): FieldRequestData;
    protected getFormattedResult(value: string): string;
    protected applyResponse(response: any): boolean;
}
//# sourceMappingURL=field-code-parser-doc-variable.d.ts.map