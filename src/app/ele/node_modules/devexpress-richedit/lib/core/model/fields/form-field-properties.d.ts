import { IHashBasedCacheType } from '../caches/hash-based-cache';
import { IMaskedProperties } from '../interfaces';
import { FormFieldTextType } from './check-box-properties';
export declare class FormFieldProperties implements IHashBasedCacheType<FormFieldProperties> {
    name: string;
    enabled: boolean;
    calculateOnExit: boolean;
    helpTextType: FormFieldTextType;
    helpText: string;
    statusTextType: FormFieldTextType;
    statusText: string;
    entryMacro: string;
    exitMacro: string;
    hash: number;
    protected calculateHash(): number;
    equals(obj: FormFieldProperties): boolean;
    getHashCode(): number;
    copyFrom(obj: FormFieldProperties): void;
    clone(): FormFieldProperties;
}
export declare enum FormFieldPropertiesMask {
    UseNone = 0,
    UseName = 4,
    UseEnabled = 8,
    UseCalculateOnExit = 16,
    UseHelpTextType = 32,
    UseHelpText = 64,
    UseStatusTextType = 128,
    UseStatusText = 256,
    UseEntryMacro = 512,
    UseExitMacro = 1024,
    UseAll = 2147483647
}
export declare class MaskedFormFieldProperties extends FormFieldProperties implements IMaskedProperties<FormFieldPropertiesMask>, IHashBasedCacheType<MaskedFormFieldProperties> {
    useValue: FormFieldPropertiesMask;
    protected calculateHash(): number;
    getUseValue(value: FormFieldPropertiesMask): boolean;
    setUseValue(mask: FormFieldPropertiesMask, value: boolean): void;
    equals(obj: MaskedFormFieldProperties): boolean;
    clone(): MaskedFormFieldProperties;
}
//# sourceMappingURL=form-field-properties.d.ts.map