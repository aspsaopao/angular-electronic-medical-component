import { EqualFunc } from '@devexpress/utils/lib/types';
import { IMaskedProperties } from '../interfaces';
export interface IMergerPropertyDescriptor<TProps, TMask, T> {
    setProp(props: TProps, newValue: T): any;
    getProp(props: TProps): T;
    maskValue(): TMask;
    readonly binaryEquals: EqualFunc<T>;
}
export declare abstract class PropertiesMergerBase<TMask, TProps, TMaskedProps extends TProps & IMaskedProperties<TMask>> {
    innerProperties: TMaskedProps;
    private descriptors;
    constructor(initialialProperties: TMaskedProps, descriptors: IMergerPropertyDescriptor<TProps, TMask, any>[]);
    protected mergeInternal(properties: TMaskedProps, mask: TMask, setValue: () => void): void;
    protected mergeOnlyOwnInternal(properties: TMaskedProps, parentProperties: TMaskedProps, mask: TMask, setValue: () => void, equals: () => boolean): void;
    protected mergeTableProperties<T>(descriptor: IMergerPropertyDescriptor<TProps, TMask, T>, getValue: () => T): void;
    abstract getMergedProperties(): TProps;
    protected mergeAll(from: TMaskedProps): void;
    protected mergeOnlyOwnProperties(from: TMaskedProps, parent: TMaskedProps): void;
}
//# sourceMappingURL=properties-merger-base.d.ts.map