import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { FieldCodeParser, FieldMailMergeType } from './field-code-parser';
export declare abstract class FieldCodeParserClientUpdatingBase extends FieldCodeParser {
    getMailMergeType(): FieldMailMergeType;
    parseCodeCurrentFieldInternal(_responce: any): boolean;
    protected createLocalHyperLink(interval: FixedInterval, bookmarkName: string): void;
    protected fillResult(): boolean;
}
//# sourceMappingURL=field-code-parser-client-updating-base.d.ts.map