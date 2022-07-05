import { IHashAlgorithm } from './hash-algorithm';
export declare class MD5 implements IHashAlgorithm {
    private _hash;
    private _t;
    private computeHashCore;
    private FF;
    private GG;
    private HH;
    private II;
    private resetCache;
    computeHash(source: number[]): number[];
}
//# sourceMappingURL=md5.d.ts.map