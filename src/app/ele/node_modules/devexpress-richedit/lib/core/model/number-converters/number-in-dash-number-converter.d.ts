import { SimpleFormattersManager } from '@devexpress/utils/lib/formatters/manager';
import { OrdinalBasedNumberConverter } from './ordinal-based-number-converter';
export declare class NumberInDashNumberConverter extends OrdinalBasedNumberConverter {
    protected simpleFormattersManager: SimpleFormattersManager;
    constructor(simpleFormattersManager: SimpleFormattersManager);
    convertNumberCore(value: number): string;
}
//# sourceMappingURL=number-in-dash-number-converter.d.ts.map