import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { UpdateFieldCommandBase } from './update-field-command-base';
export declare class UpdateAllFieldsCommand extends UpdateFieldCommandBase {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<() => void>): boolean;
}
//# sourceMappingURL=update-all-fields-command.d.ts.map