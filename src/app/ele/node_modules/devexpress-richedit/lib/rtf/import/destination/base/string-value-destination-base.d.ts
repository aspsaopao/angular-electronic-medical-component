import { DestinationType } from '../utils/destination-type';
import { ControlCharTranslatorTable, DestinationBase } from './destination';
export declare abstract class StringValueDestinationBase extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    static controlCharHT: ControlCharTranslatorTable;
    abstract get value(): string;
}
//# sourceMappingURL=string-value-destination-base.d.ts.map