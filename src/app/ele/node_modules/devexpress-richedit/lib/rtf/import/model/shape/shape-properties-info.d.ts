export declare class RtfShapePropertiesInfo {
    readonly shapeComplexProperties: Record<string, any>;
    addProperty<T>(keyword: string, value: T): void;
    trySetProperty<T>(keyword: string, action: (prop: T) => void): boolean;
    getProperty<T>(keyword: string, defaultValue: T): T;
    getNullableColorProperty(name: string): number | null;
    getPropertyOrNull<T>(keyword: string): T | null;
    private setIfPropertyExist;
}
//# sourceMappingURL=shape-properties-info.d.ts.map