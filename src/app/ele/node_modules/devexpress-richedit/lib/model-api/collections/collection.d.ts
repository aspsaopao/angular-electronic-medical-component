import { IProcessor } from '../../core/processor';
export declare abstract class Collection<T, CoreType> {
    protected readonly _processor: IProcessor;
    constructor(processor: IProcessor);
    get count(): number;
    getByIndex(index: number): T | null;
    protected abstract _getItem(_internalItem: CoreType): T;
    protected abstract _getCoreItems(): CoreType[];
}
//# sourceMappingURL=collection.d.ts.map