import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
export declare class SearchSettings {
    filterInterval?: (subDocumentId: number, interval: FixedInterval) => boolean;
    copyFrom(obj: SearchSettings): void;
    clone(): SearchSettings;
}
//# sourceMappingURL=search.d.ts.map