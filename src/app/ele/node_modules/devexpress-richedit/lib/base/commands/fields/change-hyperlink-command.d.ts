import { HyperlinkInfo } from '../../../core/model/fields/field';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class ChangeHyperlinkCommandOptions extends CommandOptions {
    fieldIndex: number;
    hyperlinkInfo: HyperlinkInfo;
    text: string;
    constructor(control: IRichEditControl, fieldIndex: number, hyperlinkInfo: HyperlinkInfo, text: string);
}
export declare class ChangeHyperlinkCommand extends CommandBase<SimpleCommandState> {
    getState(options?: ChangeHyperlinkCommandOptions): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: ChangeHyperlinkCommandOptions): boolean;
}
//# sourceMappingURL=change-hyperlink-command.d.ts.map