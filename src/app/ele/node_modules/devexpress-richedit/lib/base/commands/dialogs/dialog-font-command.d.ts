import { CharacterProperties } from '../../../core/model/character/character-properties';
import { CharacterFormattingScript, StrikeoutType, UnderlineType } from '../../../core/model/character/enums';
import { ColorProvider } from '../../../core/model/color/color-provider';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandSimpleOptions, ICommandOptions } from '../command-base';
import { IntervalCommandState, IntervalCommandStateEx } from '../command-states';
import { ICommandState } from '../i-command';
import { CustomListlevel, DialogCustomNumberingListParameters } from './dialog-custom-numbering-list-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare abstract class DialogFontCommandBase<InitialParametersT extends DialogParametersBase> extends ShowDialogCommandBase<InitialParametersT> {
    getDialogName(): string;
    isEnabled(): boolean;
}
export declare class DialogFontCommand extends DialogFontCommandBase<FontDialogParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    getActualIntervals(): FixedInterval[];
    createParameters(_options: ICommandOptions): FontDialogParameters;
    applyParameters(_state: IntervalCommandStateEx, newParams: FontDialogParameters, initParams: FontDialogParameters): boolean;
}
export declare class DialogServiceFontCommand extends DialogFontCommandBase<FontDialogParameters> {
    dialogCustomNumberingListParameters: DialogCustomNumberingListParameters;
    createParameters(options: CommandSimpleOptions<DialogCustomNumberingListParameters>): FontDialogParameters;
    applyParameters(_state: IntervalCommandState, params: FontDialogParameters): boolean;
    afterClosing(): void;
}
export declare class FontDialogParameters extends DialogParametersBase implements ISupportCopyFrom<FontDialogParameters>, ICloneable<FontDialogParameters> {
    fontName: string;
    fontStyle: number;
    fontSize: number;
    fontColor: string;
    backColor: string;
    fontUnderlineType: UnderlineType;
    fontUnderlineColor: string;
    fontStrikeoutType: StrikeoutType;
    underlineWordsOnly: boolean;
    script: CharacterFormattingScript;
    allCaps: boolean;
    smallCaps: boolean;
    hidden: boolean;
    init(colorProvider: ColorProvider, rawCharProps: CharacterProperties): void;
    static getColor(color: number): string;
    initServicePart(level: CustomListlevel): void;
    copyFrom(obj: FontDialogParameters): void;
    clone(): FontDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
//# sourceMappingURL=dialog-font-command.d.ts.map