import { SubDocumentPosition } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { CommandBase, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
export declare class InsertContentFromServerCommand extends CommandBase<SimpleCommandState> {
    getState(): SimpleCommandState;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<InsertContentFromServerCommandOptions>): boolean;
}
export declare class InsertContentFromServerCommandOptions {
    requestId: string;
    subDocPos: SubDocumentPosition;
    callback: (interval: FixedInterval) => void;
    constructor(requestId: string, subDocPos: SubDocumentPosition, callback: (interval: FixedInterval) => void);
}
export declare class InsertContentFromServerRequestManager {
    private static id;
    private map;
    constructor();
    reset(): void;
    addCallback(control: IRichEditControl, options: InsertContentFromServerCommandOptions): void;
    handleResponce(control: IRichEditControl, responce: any): void;
}
//# sourceMappingURL=insert-content-from-server-command.d.ts.map