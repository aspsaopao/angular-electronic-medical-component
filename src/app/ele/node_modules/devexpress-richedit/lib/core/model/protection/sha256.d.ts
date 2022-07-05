import { IHashAlgorithm } from './hash-algorithm';
export declare class SHA256 implements IHashAlgorithm {
    private _hash;
    private _constants;
    private computeHashCore;
    private resetCache;
    computeHash(source: number[]): number[];
}
//# sourceMappingURL=sha256.d.ts.map