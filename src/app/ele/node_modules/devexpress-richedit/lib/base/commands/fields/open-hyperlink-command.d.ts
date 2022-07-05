import { Field } from '../../../core/model/fields/field';
import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { HyperlinkCommandBase } from './hyperlink-command-base';
export declare class OpenHyperlinkCommand extends HyperlinkCommandBase {
    executeCore(state: SimpleCommandState, options: CommandSimpleOptions<Field>): boolean;
    isEnabledInReadOnlyMode(): boolean;
}
//# sourceMappingURL=open-hyperlink-command.d.ts.map