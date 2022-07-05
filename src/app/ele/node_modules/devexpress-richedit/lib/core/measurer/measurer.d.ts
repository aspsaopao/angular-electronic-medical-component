import { CharacterPropertiesCache } from '../model/caches/hashed-caches/character-properties-cache';
import { MeasureInfo } from './measure-info';
export interface IMeasurer {
    measure(measureInfos: MeasureInfo[]): any;
    setCharacterPropertiesCache(charPropsCache: CharacterPropertiesCache): any;
    clearCache(): any;
    dispose(): any;
    resultsIsInvalid: boolean;
}
export declare class Measurer implements IMeasurer {
    private measureContainer;
    private charPropsCache;
    private nodeIndex;
    private htmlParts;
    private nonCachedMeasureInfos;
    resultsIsInvalid: boolean;
    constructor(id: string);
    dispose(): void;
    setCharacterPropertiesCache(charPropsCache: CharacterPropertiesCache): void;
    clearCache(): void;
    measure(measureInfos: MeasureInfo[]): void;
    private checkResult;
    private incorrectInfo;
    private pushInfoToQueue;
    private createSpaceMeasureInfo;
    applyCalculatedSize(info: MeasureInfo, nodes: NodeList): void;
    private getNormalHeight;
}
//# sourceMappingURL=measurer.d.ts.map