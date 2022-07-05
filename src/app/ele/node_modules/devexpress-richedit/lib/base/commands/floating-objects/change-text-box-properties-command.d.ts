import { TextBoxProperties } from '../../../core/model/floating-objects/text-box-properties';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeTextBoxPropertiesCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    canModify(): boolean;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<TextBoxProperties>): boolean;
    getValue(): TextBoxProperties;
}
//# sourceMappingURL=change-text-box-properties-command.d.ts.map