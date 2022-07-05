import { FormatterManager } from '../../managers/formatter-manager';
export declare class LayoutDependentRunCache {
    private manager;
    private cache;
    constructor(manager: FormatterManager);
    reset(): void;
    add(pageIndex: number, subDocId: number): void;
    recalculateHeaderFooterPageAreas(): void;
}
//# sourceMappingURL=layout-dependent-cache.d.ts.map