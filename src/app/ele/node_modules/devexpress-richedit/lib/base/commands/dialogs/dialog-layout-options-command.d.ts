import { AnchorInfo } from '../../../core/model/floating-objects/anchor-info';
import { AnchorObjectHorizontalPositionAlignment, AnchorObjectHorizontalPositionType, AnchorObjectTextWrapSide, AnchorObjectTextWrapType, AnchorObjectVerticalPositionAlignment, AnchorObjectVerticalPositionType, RelativeHeightType, RelativeWidthType } from '../../../core/model/floating-objects/enums';
import { AnchorInlineBaseSize } from '../../../core/model/floating-objects/sizes';
import { TextBoxProperties } from '../../../core/model/floating-objects/text-box-properties';
import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { IRichEditControl } from '../../interfaces/i-rich-edit-core';
import { ICommandOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogLayoutOptionsCommand extends ShowDialogCommandBase<LayoutOptionsDialogParameters> {
    getState(): ICommandState;
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): LayoutOptionsDialogParameters;
    applyParameters(_state: SimpleCommandState, params: LayoutOptionsDialogParameters, initParams: LayoutOptionsDialogParameters): boolean;
    getDialogName(): string;
}
export declare class LayoutOptionsDialogParameters extends DialogParametersBase implements ISupportCopyFrom<LayoutOptionsDialogParameters>, ICloneable<LayoutOptionsDialogParameters> {
    horizontalPositionType: AnchorObjectHorizontalPositionType;
    horizontalPositionAlignment: AnchorObjectHorizontalPositionAlignment;
    verticalPositionType: AnchorObjectVerticalPositionType;
    verticalPositionAlignment: AnchorObjectVerticalPositionAlignment;
    offsetX: number;
    offsetY: number;
    percentOffsetX: number;
    percentOffsetY: number;
    locked: boolean;
    wrapType: AnchorObjectTextWrapType;
    wrapSide: AnchorObjectTextWrapSide;
    isBehindDoc: boolean;
    leftDistance: number;
    rightDistance: number;
    topDistance: number;
    bottomDistance: number;
    originalWidth: number;
    originalHeight: number;
    absoluteHeight: number;
    absoluteWidth: number;
    useAbsoluteHeight: boolean;
    useAbsoluteWidth: boolean;
    relativeHeight: number;
    relativeWidth: number;
    relativeHeightType: RelativeHeightType;
    relativeWidthType: RelativeWidthType;
    rotation: number;
    lockAspectRatio: boolean;
    horizontalAligmentType: LayoutDialogAlignmentType;
    verticalAligmentType: LayoutDialogAlignmentType;
    textBoxProperties: TextBoxProperties;
    init(anchorInfo: AnchorInfo, size: AnchorInlineBaseSize, textBoxProperties: TextBoxProperties, control: IRichEditControl): void;
    copyFrom(obj: LayoutOptionsDialogParameters): void;
    clone(): LayoutOptionsDialogParameters;
    applyConverter(converterFunc: (val: any) => any): this;
}
export declare enum LayoutDialogAlignmentType {
    Alignment = 0,
    BookLayout = 1,
    Absolute = 2,
    Relative = 3
}
//# sourceMappingURL=dialog-layout-options-command.d.ts.map