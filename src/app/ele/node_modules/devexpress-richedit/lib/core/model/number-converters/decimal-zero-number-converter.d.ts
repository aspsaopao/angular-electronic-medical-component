import { SimpleFormattersManager } from '@devexpress/utils/lib/formatters/manager';
import { OrdinalBasedNumberConverter } from './ordinal-based-number-converter';
export declare class DecimalZeroNumberConverter extends OrdinalBasedNumberConverter {
    protected simpleFormattersManager: SimpleFormattersManager;
    constructor(simpleFormattersManager: SimpleFormattersManager);
    convertNumberCore(value: number): string;
}
//# sourceMappingURL=decimal-zero-number-converter.d.ts.map