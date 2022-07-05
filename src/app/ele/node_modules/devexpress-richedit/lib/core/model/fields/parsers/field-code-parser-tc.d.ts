import { FieldName } from '../names';
import { FieldCodeParserClientUpdatingBase } from './field-code-parser-client-updating-base';
export declare class FieldCodeParserTc extends FieldCodeParserClientUpdatingBase {
    get name(): FieldName;
    protected fillResult(): boolean;
    private updateTcInfo;
    protected needUpdateInfo(): boolean;
    protected updateInfoCore(): void;
}
//# sourceMappingURL=field-code-parser-tc.d.ts.map