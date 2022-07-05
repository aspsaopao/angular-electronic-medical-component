import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare class InsertRtfCommandOptions extends CommandOptions {
    rtfText: string;
    get position(): number;
    callback: (interval: FixedInterval, isRtfValid: boolean) => void;
    constructor(rtfText: string, position: number, subDocument: SubDocument, callback: (interval: FixedInterval, isRtfValid: boolean) => void);
}
export declare class InsertRtfCommand extends CommandBase<SimpleCommandState> {
    getState(): ICommandState;
    executeCore(_state: ICommandState, options: InsertRtfCommandOptions): boolean;
    handleResponce(response: any): void;
}
//# sourceMappingURL=insert-rtf-command.d.ts.map