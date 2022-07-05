import { SimpleFormattersManager } from '@devexpress/utils/lib/formatters/manager';
import { NumberingFormat } from '../numbering-lists/list-level-properties';
import { OrdinalBasedNumberConverter } from './ordinal-based-number-converter';
export declare class NumberConverterCreator {
    static createConverter(type: NumberingFormat, simpleFormattersManager: SimpleFormattersManager, langId?: string): OrdinalBasedNumberConverter;
    static getOrdinalBasedNumberConverter(simpleFormattersManager: SimpleFormattersManager, langId: string): OrdinalBasedNumberConverter;
    static createConverterByTypeName(typeName: string, simpleFormattersManager: SimpleFormattersManager): OrdinalBasedNumberConverter;
}
//# sourceMappingURL=number-converter-creator.d.ts.map