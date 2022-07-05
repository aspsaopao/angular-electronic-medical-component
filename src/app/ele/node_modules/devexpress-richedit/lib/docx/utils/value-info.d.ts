export declare class ValueInfo {
    static readonly empty: ValueInfo;
    unit: string;
    value: number;
    private isValidNumber;
    constructor(unit?: string, value?: number);
    get isEmpty(): boolean;
    equals(obj: ValueInfo): boolean;
}
//# sourceMappingURL=value-info.d.ts.map