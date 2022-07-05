export declare class ApiParameterDescriptor<T, TResult> {
    parameterName: string;
    parameterType: string;
    typeAssertion: (value: any) => boolean;
    getResult: (value: T) => TResult;
    constructor(parameterName: string, parameterType: string, typeAssertion: (value: any) => boolean, getResult: (value: T) => TResult);
    getStringRepresentation(canBeUndefined: boolean): string;
}
export declare type ArgsCheckerParameterIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export declare class ApiParametersChecker {
    static check<TResult>(value: any, parameterIndex: ArgsCheckerParameterIndex, canBeUndefined: boolean, pairs: Array<ApiParameterDescriptor<any, TResult>>): TResult;
    static showErrorString<TResult>(parameterIndex: number, canBeUndefined: boolean, pairs: Array<ApiParameterDescriptor<any, TResult>>): string;
    static defaultDescriptor<TResult>(getResult: () => TResult): ApiParameterDescriptor<any, TResult>;
    static numberDescriptor<TResult>(parameterName: string, getResult: (value: number) => TResult, minBound?: number, maxBound?: number): ApiParameterDescriptor<number, TResult>;
    static booleanDescriptor<TResult>(parameterName: string, getResult: (value: boolean) => TResult): ApiParameterDescriptor<boolean, TResult>;
    static arrayDescriptor<TResult, ArrayContentType>(parameterName: string, getResult: (value: ArrayContentType[]) => TResult): ApiParameterDescriptor<ArrayContentType[], TResult>;
    static functionDescriptor<TResult>(parameterName: string, getResult: (value: any) => TResult): ApiParameterDescriptor<() => void, TResult>;
    static stringDescriptor<TResult>(parameterName: string, getResult: (value: string) => TResult, canBeEmpty: boolean): ApiParameterDescriptor<string, TResult>;
    static stringDescriptorPredefined<TResult>(parameterName: string, map: Record<string, TResult>, canBeEmpty: boolean): ApiParameterDescriptor<string, TResult>;
    static regExpDescriptor<TResult>(parameterName: string, getResult: (value: RegExp) => TResult): ApiParameterDescriptor<RegExp, TResult>;
    static enumDescriptor<TResult>(parameterName: string, getResult: (value: number) => TResult, enumTypeObj: object, enumTypeName: string): ApiParameterDescriptor<number, TResult>;
    static objectDescriptor<TResult, TObject>(parameterName: string, objectTypeAsString: string, getResult: (value: TObject) => TResult): ApiParameterDescriptor<TObject, TResult>;
}
//# sourceMappingURL=parameter-checker.d.ts.map