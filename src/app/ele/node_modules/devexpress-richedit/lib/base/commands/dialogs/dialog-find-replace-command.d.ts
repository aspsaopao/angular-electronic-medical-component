import { SubDocument } from '../../../core/model/sub-document';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { SearchManager } from '../../ui/search-manager';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogFindReplaceCommand extends ShowDialogCommandBase<FindReplaceDialogParameters> {
    getState(): ICommandState;
    createParameters(_options: ICommandOptions): FindReplaceDialogParameters;
    applyParameters(_state: SimpleCommandState, _params: FindReplaceDialogParameters): boolean;
    getDialogName(): string;
    isEnabledInReadOnlyMode(): boolean;
    isModal(): boolean;
    static getTextForResult(control: IRichEditControl, subDocument: SubDocument, interval: FixedInterval): string;
    static getTextForward(control: IRichEditControl, subDocument: SubDocument, startPosition: number, endPosition: number, length: number): string;
    static getTextBackward(control: IRichEditControl, subDocument: SubDocument, startPosition: number, endPosition: number, length: number): string;
}
export declare class FindReplaceDialogParameters extends DialogParametersBase implements ISupportCopyFrom<FindReplaceDialogParameters>, ICloneable<FindReplaceDialogParameters> {
    controller: SearchManager;
    copyFrom(obj: FindReplaceDialogParameters): void;
    clone(): FindReplaceDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-find-replace-command.d.ts.map