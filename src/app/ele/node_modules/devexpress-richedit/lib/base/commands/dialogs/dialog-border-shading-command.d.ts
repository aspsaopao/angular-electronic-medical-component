import { BorderInfo } from '../../../core/model/borders/border-info';
import { BorderLineStyle } from '../../../core/model/borders/enums';
import { ColorProvider } from '../../../core/model/color/color-provider';
import { DocumentModel } from '../../../core/model/document-model';
import { SelectedTableInfo } from '../../../core/selection/selected-cells-engine';
import { ICloneable, IEquatable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { CommandOptions, CommandSimpleOptions } from '../command-base';
import { SimpleCommandState } from '../command-states';
import { ICommandState } from '../i-command';
import { ToggleSingleTableCellsBorderCommand } from '../tables/toggle-table-cells-border-command';
import { TablePropertiesDialogParameters } from './dialog-table-properties-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare abstract class DialogBorderShadingCommandBase<OptionsType extends CommandOptions> extends ShowDialogCommandBase<BorderShadingDialogParameters> {
    topBorderCommand: ToggleSingleTableCellsBorderCommand;
    rightBorderCommand: ToggleSingleTableCellsBorderCommand;
    bottomBorderCommand: ToggleSingleTableCellsBorderCommand;
    leftBorderCommand: ToggleSingleTableCellsBorderCommand;
    insideHorizontalBordersCommand: ToggleSingleTableCellsBorderCommand;
    insideVerticalBordersCommand: ToggleSingleTableCellsBorderCommand;
    getState(): ICommandState;
    abstract createParameters(options: OptionsType): BorderShadingDialogParameters;
    protected makeParams(applyToWholeTable: boolean, colorProvider: ColorProvider): BorderShadingDialogParameters;
    applyParameters(_state: SimpleCommandState, newParams: BorderShadingDialogParameters, initParams: BorderShadingDialogParameters): boolean;
    private isNoFullSelectedCell;
    getDialogName(): string;
}
export declare class DialogBorderShadingCommand extends DialogBorderShadingCommandBase<CommandSimpleOptions<boolean>> {
    createParameters(options: CommandSimpleOptions<boolean>): BorderShadingDialogParameters;
}
export declare class DialogServiceBorderShadingCommand extends DialogBorderShadingCommandBase<CommandSimpleOptions<TablePropertiesDialogParameters>> {
    createParameters(_options: CommandSimpleOptions<TablePropertiesDialogParameters>): BorderShadingDialogParameters;
    afterClosing(options: CommandSimpleOptions<TablePropertiesDialogParameters>): void;
}
export declare class BorderShadingDialogParameters extends DialogParametersBase implements ISupportCopyFrom<BorderShadingDialogParameters>, ICloneable<BorderShadingDialogParameters> {
    static gridWidth: number;
    top: DialogBorderInfo;
    right: DialogBorderInfo;
    bottom: DialogBorderInfo;
    left: DialogBorderInfo;
    insideHorizontal: DialogBorderInfo;
    insideVertical: DialogBorderInfo;
    backgroundColor: string;
    borderLineHorizontalInVisible: boolean;
    borderLineVerticalInVisible: boolean;
    setModeButton: SetModeButtons;
    applyToWholeTable: boolean;
    init(colorProvider: ColorProvider, tableInfo: SelectedTableInfo, model: DocumentModel): void;
    getModeState(): SetModeButtons;
    isModeStateNone(): boolean;
    isModeStateAll(): boolean;
    isModeStateBox(): boolean;
    isModeStateGrid(): boolean;
    getColor(color: number): string;
    copyFrom(obj: BorderShadingDialogParameters): void;
    clone(): BorderShadingDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare class DialogBorderInfo implements IEquatable<DialogBorderInfo>, ISupportCopyFrom<DialogBorderInfo>, ICloneable<DialogBorderInfo> {
    color: string;
    width: number;
    style: BorderLineStyle;
    static create(borderInfo: BorderInfo, colorProvider: ColorProvider): DialogBorderInfo;
    getBorderInfo(): BorderInfo;
    equals(obj: DialogBorderInfo): boolean;
    copyFrom(obj: DialogBorderInfo): void;
    clone(): DialogBorderInfo;
}
export declare enum SetModeButtons {
    None = 0,
    Box = 1,
    All = 2,
    Grid = 3,
    Custom = 4
}
//# sourceMappingURL=dialog-border-shading-command.d.ts.map