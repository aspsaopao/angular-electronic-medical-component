import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ShapePropertyValueDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    buffer: string[];
    value: any;
    protected processCharCore(ch: string): void;
    beforePopRtfState(): void;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=shape-property-value-destination.d.ts.map