import { MisspelledInterval } from '../../../core/spelling/intervals';
import { SpellChecker } from '../../../core/spelling/spell-checker';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogSpellCheckerCommand extends ShowDialogCommandBase<SpellCheckerDialogParameters> {
    getState(): SimpleCommandState;
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): SpellCheckerDialogParameters;
    applyParameters(_state: SimpleCommandState, _newParameters: SpellCheckerDialogParameters): boolean;
    getDialogName(): string;
}
export declare class SpellCheckerDialogParameters extends DialogParametersBase implements ISupportCopyFrom<SpellCheckerDialogParameters>, ICloneable<SpellCheckerDialogParameters> {
    controller: SpellCheckerDialogController;
    copyFrom(obj: SpellCheckerDialogParameters): void;
    clone(): SpellCheckerDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare class SpellCheckerDialogController {
    private control;
    private spellChecker;
    misspelledInterval: MisspelledInterval;
    get isRepeatingError(): boolean;
    get canAddToDictionary(): boolean;
    get suggestions(): string[];
    constructor(control: IRichEditControl, spellChecker: SpellChecker);
    tryFindNextError(): boolean;
    getContext(): string;
    ignoreOnce(): void;
    ignoreAll(): void;
    addToDictionary(): void;
    delete(): void;
    change(text: string): void;
    changeAll(text: string): void;
}
//# sourceMappingURL=dialog-spell-checker-command.d.ts.map