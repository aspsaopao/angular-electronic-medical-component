import { ControlCharTranslatorTable, DestinationBase } from './base/destination';
import { DestinationType } from './utils/destination-type';
export declare class PageBackgroundDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    protected createClone(): DestinationBase;
    protected beforeNestedGroupFinishedCore(nestedDestination: DestinationBase): void;
}
//# sourceMappingURL=page-background-destination.d.ts.map