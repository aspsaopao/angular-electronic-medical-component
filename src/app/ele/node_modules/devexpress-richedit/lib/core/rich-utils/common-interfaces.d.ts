import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
export interface IIntervalHolder {
    interval(): FixedInterval;
}
export interface ISetMaskedPropertyDescriptor<TMask extends number, TValue, TProperties> {
    setProp(props: TProperties, newValue: TValue): any;
    getProp(props: TProperties): TValue;
    maskValue(): TMask;
}
export interface ISetMaskedPropertySupport<TMask extends number, TValue, TProperties> {
    setValue(desc: ISetMaskedPropertyDescriptor<TMask, TValue, TProperties>, value: TValue): any;
}
//# sourceMappingURL=common-interfaces.d.ts.map