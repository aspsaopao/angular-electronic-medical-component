import { ColorModelInfoCache } from '../../../core/model/caches/hashed-caches/color-model-info-cache';
import { ThemeColorValues } from '../../../core/model/color/enums';
import { ControlCharTranslatorTable, DestinationBase } from './base/destination';
import { DestinationType } from './utils/destination-type';
export declare class ColorTableDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static readonly maxTintValue: number;
    static readonly minTintValue: number;
    static autoColor: number;
    r: number;
    g: number;
    b: number;
    wasColor: boolean;
    themeColorValue: ThemeColorValues;
    tint: number;
    shade: number;
    protected get cache(): ColorModelInfoCache;
    reset(): void;
    protected processKeywordCore(keyword: string, parameterValue: number, hasParameter: boolean): boolean;
    protected createClone(): DestinationBase;
    isColorValid(): boolean;
    calculateTintOrShade(value: number): number;
    protected processCharCore(ch: string): void;
}
//# sourceMappingURL=color-table-destination.d.ts.map