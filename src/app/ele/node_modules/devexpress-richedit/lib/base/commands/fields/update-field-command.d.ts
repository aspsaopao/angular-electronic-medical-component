import { UpdateFieldsOptions } from '../../../core/model/fields/tree-creator';
import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { UpdateFieldCommandBase } from './update-field-command-base';
export declare class UpdateFieldCommandParameters {
    callbackFunc: () => void;
    subDocument: SubDocument;
    intervals: FixedInterval[];
    readonly options: UpdateFieldsOptions;
    constructor(subDocument: SubDocument, intervals: FixedInterval[], callbackFunc: () => void);
}
export declare class UpdateFieldCommand extends UpdateFieldCommandBase {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    executeCore(_state: SimpleCommandState, options: CommandSimpleOptions<UpdateFieldCommandParameters>): boolean;
}
//# sourceMappingURL=update-field-command.d.ts.map