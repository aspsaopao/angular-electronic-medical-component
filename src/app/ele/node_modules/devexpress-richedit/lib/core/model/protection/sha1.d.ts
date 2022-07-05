import { IHashAlgorithm } from './hash-algorithm';
export declare class SHA1 implements IHashAlgorithm {
    private _hash;
    private computeHashCore;
    private resetCache;
    computeHash(source: number[]): number[];
}
//# sourceMappingURL=sha1.d.ts.map