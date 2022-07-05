import { CharacterProperties } from '../../character/character-properties';
import { FontMeasurer } from '../../fonts/measurer';
import { HashBasedCache } from '../hash-based-cache';
export declare class CharacterPropertiesCache extends HashBasedCache<CharacterProperties> {
    private static _rareCharProperty;
    static getRareCharProperty(fontMeasurer: FontMeasurer): CharacterProperties;
    resetSizes(): void;
    copyFrom(obj: CharacterPropertiesCache): void;
    clone(): CharacterPropertiesCache;
}
//# sourceMappingURL=character-properties-cache.d.ts.map