import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandBase, CommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
export declare class GetRtfCommandOptions extends CommandOptions {
    interval: FixedInterval;
    callback: (rtf: string) => void;
    constructor(interval: FixedInterval, callback: (rtf: string) => void, subDocument: SubDocument);
}
export declare class GetRtfCommand extends CommandBase<SimpleCommandState> {
    getState(): ICommandState;
    executeCore(_state: ICommandState, options: GetRtfCommandOptions): boolean;
    handleResponce(responce: any): void;
}
//# sourceMappingURL=get-rtf-command.d.ts.map