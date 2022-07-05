import { FieldName } from '../names';
import { FieldCodeParserClientUpdatingBase } from './field-code-parser-client-updating-base';
export declare class FieldCodeParserSeq extends FieldCodeParserClientUpdatingBase {
    get name(): FieldName;
    protected fillResult(): boolean;
    private updateSequenceInfo;
    protected needUpdateInfo(): boolean;
    protected updateInfoCore(): void;
}
//# sourceMappingURL=field-code-parser-seq.d.ts.map