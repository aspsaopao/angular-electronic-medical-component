import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { IHashAlgorithm } from './hash-algorithm';
export declare class SHA512 implements IHashAlgorithm {
    private _hash;
    private _k;
    private _w;
    constructor();
    protected resetCache(): void;
    initialize(): void;
    private computeHashCore;
    protected getDefaultCache(): MinMaxNumber[];
    computeHash(source: number[]): number[];
    private toX32Words;
}
//# sourceMappingURL=sha512.d.ts.map