import { MinMaxNumber } from '@devexpress/utils/lib/class/min-max';
import { SHA512 } from './sha512';
export declare class SHA384 extends SHA512 {
    constructor();
    protected getDefaultCache(): MinMaxNumber[];
    computeHash(source: number[]): number[];
}
//# sourceMappingURL=sha384.d.ts.map