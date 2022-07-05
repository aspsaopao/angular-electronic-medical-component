import { FieldName } from '../names';
import { FieldCodeParserClientUpdatingBase } from './field-code-parser-client-updating-base';
export declare class FieldCodeParserHyperlink extends FieldCodeParserClientUpdatingBase {
    get name(): FieldName;
    parseCodeCurrentFieldInternal(_responce: any): boolean;
    protected fillResult(): boolean;
    private updateHyperlinkInfo;
}
//# sourceMappingURL=field-code-parser-hyperlink.d.ts.map