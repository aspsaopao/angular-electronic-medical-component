import { DestinationType } from '../utils/destination-type';
import { ControlCharTranslatorTable, DestinationBase } from './destination';
export declare abstract class HexContentDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    val: number;
    firstPosition: boolean;
    protected processCharCore(ch: string): void;
}
//# sourceMappingURL=hex-content-destination.d.ts.map