import { DestinationBase } from '../base/destination';
import { StringValueDestinationBase } from '../base/string-value-destination-base';
import { DestinationType } from '../utils/destination-type';
export declare abstract class HyperlinkPropertyValueDestination extends StringValueDestinationBase {
    protected get destinationType(): DestinationType;
    _value: string[];
    get value(): string;
    protected processCharCore(ch: string): void;
    protected createClone(): DestinationBase;
    protected abstract createEmptyClone(): HyperlinkPropertyValueDestination;
}
//# sourceMappingURL=hyperlink-property-value-destination.d.ts.map