import { DestinationType } from '../utils/destination-type';
import { DestinationBase } from './destination';
import { StringValueDestinationBase } from './string-value-destination-base';
export declare abstract class StringValueDestination extends StringValueDestinationBase {
    protected get destinationType(): DestinationType;
    protected _value: string;
    get value(): string;
    protected processCharCore(ch: string): void;
    protected createClone(): DestinationBase;
    protected abstract createEmptyClone(): StringValueDestination;
}
//# sourceMappingURL=string-value-destination.d.ts.map