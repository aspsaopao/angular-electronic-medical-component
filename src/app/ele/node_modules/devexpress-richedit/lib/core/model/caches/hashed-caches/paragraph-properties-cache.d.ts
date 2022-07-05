import { ParagraphProperties } from '../../paragraph/paragraph-properties';
import { HashBasedCache } from '../hash-based-cache';
export declare class ParagraphPropertiesCache extends HashBasedCache<ParagraphProperties> {
    copyFrom(obj: ParagraphPropertiesCache): void;
    clone(): ParagraphPropertiesCache;
}
//# sourceMappingURL=paragraph-properties-cache.d.ts.map