import { IHashAlgorithm } from './hash-algorithm';
export declare class RIPEMD160 implements IHashAlgorithm {
    private _hash;
    private _zl;
    private _zr;
    private _sl;
    private _sr;
    private _hl;
    private _hr;
    private computeHashCore;
    private f1;
    private f2;
    private f3;
    private f4;
    private f5;
    private rotl;
    private resetCache;
    computeHash(source: number[]): number[];
}
//# sourceMappingURL=ripemd160.d.ts.map