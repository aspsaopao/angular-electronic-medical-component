import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare abstract class RemoveWordCommandBase extends CommandBase<SimpleCommandState> {
    getState(): ICommandState;
    executeCore(_state: ICommandState, _options: CommandOptions): boolean;
    protected abstract getDeleteInterval(subDocument: SubDocument, position: number, parIndex: number): FixedInterval;
}
export declare class RemovePrevWordCommand extends RemoveWordCommandBase {
    protected getDeleteInterval(subDocument: SubDocument, position: number, parIndex: number): FixedInterval;
    static getPrevWordInterval(control: IRichEditControl, subDocument: SubDocument, position: number, parIndex: number): FixedInterval;
}
export declare class RemoveNextWordCommand extends RemoveWordCommandBase {
    protected getDeleteInterval(subDocument: SubDocument, position: number, parIndex: number): FixedInterval;
    static getNextWordInterval(control: IRichEditControl, subDocument: SubDocument, position: number, parIndex: number): FixedInterval;
}
//# sourceMappingURL=remove-word-command.d.ts.map