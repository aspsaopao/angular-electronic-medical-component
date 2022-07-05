import { IRichEditUnitConverter } from '../../../base-utils/unit-converter';
import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { ICloneable, ISupportCopyFrom, SimpleConverter } from '@devexpress/utils/lib/types';
import { ICommandOptions } from '../command-base';
import { IntervalCommandStateEx } from '../command-states';
import { SectionPropertiesApplyType } from './dialog-page-setup-command';
import { DialogParametersBase, ShowDialogCommandBase } from './show-dialog-command-base';
export declare class DialogColumnsCommand extends ShowDialogCommandBase<ColumnsDialogParameters> {
    isEnabled(): boolean;
    createParameters(_options: ICommandOptions): ColumnsDialogParameters;
    applyParameters(_state: IntervalCommandStateEx, newParams: ColumnsDialogParameters): boolean;
    getInterval(applyTo: SectionPropertiesApplyType): FixedInterval;
    getDialogName(): string;
}
export declare class ColumnsDialogParameters extends DialogParametersBase implements ISupportCopyFrom<ColumnsDialogParameters>, ICloneable<ColumnsDialogParameters> {
    columnsInfo: ColumnsInfoUI;
    unitConverter: IRichEditUnitConverter;
    init(columnsInfo: ColumnsInfoUI, unitConverter: IRichEditUnitConverter): ColumnsDialogParameters;
    copyFrom(obj: ColumnsDialogParameters): void;
    clone(): ColumnsDialogParameters;
    applyConverter(_converter: SimpleConverter<number>): this;
}
export declare class ColumnsInfoUI implements ICloneable<ColumnsInfoUI>, ISupportCopyFrom<ColumnsInfoUI> {
    static minColumnWidth: number;
    static minSpacingWidth: number;
    columns: ColumnInfoUI[];
    columnCount: number;
    equalColumnWidth: boolean;
    pageWidth: number;
    applyType: SectionPropertiesApplyType;
    getMaxColumnCount(): number;
    hasColumnsNull(): boolean;
    hasColumnsInfoUINull(): boolean;
    changeColumnCount(count: number): void;
    calculateEqualColumnsOnChangeCount(): void;
    calculateNotEqualColumnsOnChangeCount(previousCount: number): void;
    correctColumns(): void;
    disableTheLastSpacing(): void;
    recalculateColumnsByWidthAfterIndex(index: number): void;
    recalculateColumnsBySpacingAfterIndex(index: number): void;
    calculateUniformColumnsCore(columnWidth: number, columnSpacing: number, restWidth: number, restSpacing: number): void;
    calculateColumnWidthForUniformColumns(): void;
    calculateUniformColumnsByColumnWidth(columnWidth: number): void;
    calculateColumnSpacingForUniformColumns(): void;
    calculateUniformColumnsByColumnSpacing(columnSpacing: number): void;
    calculateAvailableSpace(): number;
    changeColumnsNotEqualByWidthAfterIndex(index: number): void;
    changeColumnsNotEqualBySpacingAfterIndex(index: number): void;
    clone(): ColumnsInfoUI;
    copyFrom(info: ColumnsInfoUI): void;
}
export declare class ColumnInfoUI {
    num: number;
    width: number;
    spacing: number;
    constructor(num: number);
}
export declare class ColumnsDistributionCalculator {
    private columns;
    constructor(columns: ColumnInfoUI[]);
    calculateTotal(from: number, to: number): number;
    hasEnoughSpaceForDistribution(from: number, to: number, space: number): boolean;
    setMinValues(from: number, to: number, space: number): number;
    correctValue(index: number): void;
    distributeRemainder(from: number, to: number, remainder: number): number;
    distributeSpaceCore(from: number, to: number, space: number): number;
    distributeSpace(from: number, to: number, space: number): number;
    setAllValues(value: number, rest: number): void;
    getMinValue(): number;
    getValue(_column: ColumnInfoUI): number;
    setValue(_column: ColumnInfoUI, _value: number): void;
}
export declare class ColumnsDistributionWidthPriorityCalculator extends ColumnsDistributionCalculator {
    getMinValue(): number;
    getValue(column: ColumnInfoUI): number;
    setValue(column: ColumnInfoUI, value: number): void;
}
export declare class ColumnsDistributionSpacingPriorityCalculator extends ColumnsDistributionCalculator {
    getMinValue(): number;
    getValue(column: ColumnInfoUI): number;
    setValue(column: ColumnInfoUI, value: number): void;
}
export declare class ColumnsEditorController {
    columnsInfo: ColumnsInfoUI;
    unitConverter: IRichEditUnitConverter;
    presets: Array<ColumnsInfoPreset>;
    constructor(parameters: ColumnsDialogParameters);
    changeColumnCount(count: number): void;
    setEqualColumnWidth(value: boolean): void;
    applyPreset(index: number): void;
    matchPreset(index: number): boolean;
    getWidth(index: number): number;
    getSpacing(index: number): number;
    setWidth(index: number, value: number): void;
    setSpacing(index: number, value: number): void;
}
export declare abstract class ColumnsInfoPreset {
    getSpacing(): number;
    abstract applyTo(columnsInfo: ColumnsInfoUI): any;
    matchTo(_columnsInfo: ColumnsInfoUI): boolean;
}
export declare class UniformColumnsInfoPreset extends ColumnsInfoPreset {
    getColumnCount(): number;
    matchTo(columnsInfo: ColumnsInfoUI): boolean;
    applyTo(columnsInfo: ColumnsInfoUI): void;
}
export declare class SingleColumnsInfoPreset extends UniformColumnsInfoPreset {
    getColumnCount(): number;
}
export declare class TwoColumnsInfoPreset extends UniformColumnsInfoPreset {
    getColumnCount(): number;
}
export declare class ThreeColumnsInfoPreset extends UniformColumnsInfoPreset {
    getColumnCount(): number;
}
export declare class TwoNonUniformColumnsInfoPreset extends ColumnsInfoPreset {
    getFirstColumnRelativeWidth(): number;
    matchTo(columnsInfo: ColumnsInfoUI): boolean;
    applyTo(columnsInfo: ColumnsInfoUI): void;
}
export declare class LeftNarrowColumnsInfoPreset extends TwoNonUniformColumnsInfoPreset {
    getFirstColumnRelativeWidth(): number;
}
export declare class RightNarrowColumnsInfoPreset extends TwoNonUniformColumnsInfoPreset {
    getFirstColumnRelativeWidth(): number;
}
//# sourceMappingURL=dialog-columns-command.d.ts.map