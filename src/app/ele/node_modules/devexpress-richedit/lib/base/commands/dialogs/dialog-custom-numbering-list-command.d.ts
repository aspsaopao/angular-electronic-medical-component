import { ColorProvider } from '../../../core/model/color/color-provider';
import { ListLevel } from '../../../core/model/numbering-lists/list-level';
import { ListNumberAlignment, NumberingFormat } from '../../../core/model/numbering-lists/list-level-properties';
import { AbstractNumberingList, NumberingType } from '../../../core/model/numbering-lists/numbering-list';
import { ParagraphFirstLineIndent } from '../../../core/model/paragraph/paragraph-properties';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { RichEditCore } from '../../rich-edit-core';
import { CommandSimpleOptions } from '../command-base';
import { IntervalCommandState } from '../command-states';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogCustomNumberingListCommand extends ShowDialogCommandBase<DialogCustomNumberingListParameters> {
    listType: NumberingType;
    createParameters(options: CommandSimpleOptions<DialogCustomNumberingListParameters>): DialogCustomNumberingListParameters;
    private applyToCustomListLevels;
    private applyToListLevels;
    applyCustomNumberingListParameters(initParams: DialogCustomNumberingListParameters, newParams: DialogCustomNumberingListParameters): void;
    applyParameters(_state: IntervalCommandState, newParams: DialogCustomNumberingListParameters): boolean;
    getDialogName(): "BulletedList" | "SimpleNumberingList" | "MultiLevelNumberingList";
}
export declare class DialogCustomNumberingListParameters extends DialogParametersBase implements ISupportCopyFrom<DialogCustomNumberingListParameters>, ICloneable<DialogCustomNumberingListParameters> {
    currentLevel: number;
    listType: NumberingType;
    levels: CustomListlevel[];
    coreInitialFontColors: number[];
    initAbstractNumberingList: AbstractNumberingList;
    applyToParagraph: boolean;
    init(colorProvider: ColorProvider, abstractNumberingList?: AbstractNumberingList, currentLevel?: number): void;
    initLevel(colorProvider: ColorProvider, listLevel: ListLevel): CustomListlevel;
    copyFrom(obj: DialogCustomNumberingListParameters): void;
    clone(): DialogCustomNumberingListParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
    copyLevelsFrom(levels: CustomListlevel[]): void;
    equals(obj: DialogCustomNumberingListParameters): boolean;
}
export declare class CustomListlevel implements ISupportCopyFrom<CustomListlevel> {
    displayFormatString: string;
    format: NumberingFormat;
    start: number;
    alignment: ListNumberAlignment;
    separator: string;
    leftIndent: number;
    firstLineIndent: number;
    firstLineIndentType: ParagraphFirstLineIndent;
    fontName: string;
    fontColor: string;
    fontSize: number;
    fontStyle: number;
    copyFrom(obj: CustomListlevel): void;
    equals(obj: CustomListlevel): boolean;
}
export declare class NumberingListFormPreviewHelper {
    private abstractNumberingList;
    private richEdit;
    private currentLevel;
    constructor(richEdit: RichEditCore, abstractNumberingList: AbstractNumberingList, currentLevel: number);
    createPreview(): HTMLElement;
    private createRowElement;
    private getNumberingListBoxText;
}
//# sourceMappingURL=dialog-custom-numbering-list-command.d.ts.map