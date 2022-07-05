import { ColorProvider } from '../../../core/model/color/color-provider';
import { ParagraphAlignment, ParagraphFirstLineIndent, ParagraphLineSpacingType, ParagraphProperties } from '../../../core/model/paragraph/paragraph-properties';
import { SectionProperties } from '../../../core/model/section/section-properties';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogParagraphPropertiesCommand extends ShowDialogCommandBase<ParagraphDialogParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    protected getIntervalsForModifying(): FixedInterval[];
    createParameters(_options: ICommandOptions): ParagraphDialogParameters;
    applyParameters(_state: IntervalCommandStateEx, newParams: ParagraphDialogParameters, initParams: ParagraphDialogParameters): boolean;
    getDialogName(): string;
    private getLeftIndent;
    private getLeftIndentCore;
}
export declare class ParagraphDialogParameters extends DialogParametersBase implements ISupportCopyFrom<ParagraphDialogParameters>, ICloneable<ParagraphDialogParameters> {
    alignment: ParagraphAlignment;
    outlineLevel: number;
    rightIndent: number;
    spacingBefore: number;
    spacingAfter: number;
    lineSpacingType: ParagraphLineSpacingType;
    firstLineIndentType: ParagraphFirstLineIndent;
    firstLineIndent: number;
    contextualSpacing: boolean;
    keepLinesTogether: boolean;
    pageBreakBefore: boolean;
    pageWidth: number;
    leftIndent: number;
    lineSpacing: number;
    lineSpacingMultiple: number;
    backColor: string;
    widowOrphanControl: boolean;
    init(colorProvider: ColorProvider, parProps: ParagraphProperties, secProps: SectionProperties): void;
    copyFrom(obj: ParagraphDialogParameters): void;
    clone(): ParagraphDialogParameters;
    applyConverter(converter: SimpleConverter<number>): this;
    getColor(color: number): string;
    private getLeftIndent;
}
//# sourceMappingURL=dialog-paragraph-properties-command.d.ts.map