export declare class MapCreator<TKey extends string | number, T> {
    private result;
    constructor(result?: Record<TKey, T>);
    add(key: TKey, value: T): MapCreator<TKey, T>;
    append(map: Record<TKey, T>): MapCreator<TKey, T>;
    getByKey(key: TKey): T | undefined;
    get(): Record<TKey, T>;
}
//# sourceMappingURL=map-creator.d.ts.map