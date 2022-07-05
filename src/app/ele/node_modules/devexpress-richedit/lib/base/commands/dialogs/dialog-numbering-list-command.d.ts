import { AbstractNumberingList } from '../../../core/model/numbering-lists/numbering-list';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogNumberingListCommand extends ShowDialogCommandBase<DialogNumberingListParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    createParameters(options: CommandSimpleOptions<AbstractNumberingList>): DialogNumberingListParameters;
    areThereParagraphsInDifferentLists(): boolean;
    getSelectedAbstractNumberingList(): AbstractNumberingList;
    getFirstNumberingListIndex(): number;
    applyParameters(_state: IntervalCommandState, params: DialogNumberingListParameters): boolean;
    getDialogName(): string;
}
export declare class DialogNumberingListParameters extends DialogParametersBase implements ISupportCopyFrom<DialogNumberingListParameters>, ICloneable<DialogNumberingListParameters> {
    selectedAbstractNumberingList: AbstractNumberingList;
    currentLevel: number;
    copyFrom(obj: DialogNumberingListParameters): void;
    clone(): DialogNumberingListParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-numbering-list-command.d.ts.map