import { IHashBasedCacheType } from '../caches/hash-based-cache';
import { IMaskedProperties } from '../interfaces';
export declare enum CheckBoxState {
    Unchecked = 0,
    Checked = 1,
    Undefined = 25
}
export declare enum CheckBoxSizeMode {
    Auto = 0,
    Exact = 1
}
export declare enum FormFieldTextType {
    Auto = 0,
    Custom = 1
}
export declare class CheckBoxProperties implements IHashBasedCacheType<CheckBoxProperties> {
    checkBoxState: CheckBoxState;
    defaultState: boolean;
    size: number;
    sizeType: CheckBoxSizeMode;
    hash: number;
    protected calculateHash(): number;
    getHashCode(): number;
    equals(obj: CheckBoxProperties): boolean;
    copyFrom(obj: CheckBoxProperties): void;
    clone(): CheckBoxProperties;
}
export declare enum MaskedCheckBoxPropertiesMask {
    UseNone = 0,
    UseState = 4,
    UseDefaultState = 8,
    UseSize = 16,
    UseSizeMode = 32,
    UseAll = 2147483647
}
export declare class MaskedCheckBoxProperties extends CheckBoxProperties implements IMaskedProperties<MaskedCheckBoxPropertiesMask>, IHashBasedCacheType<MaskedCheckBoxProperties> {
    useValue: MaskedCheckBoxPropertiesMask;
    protected calculateHash(): number;
    getUseValue(value: MaskedCheckBoxPropertiesMask): boolean;
    setUseValue(mask: MaskedCheckBoxPropertiesMask, value: boolean): void;
    equals(obj: MaskedCheckBoxProperties): boolean;
    clone(): MaskedCheckBoxProperties;
}
//# sourceMappingURL=check-box-properties.d.ts.map