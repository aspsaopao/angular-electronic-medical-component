import { DestinationType } from '../utils/destination-type';
import { DestinationBase } from './destination';
import { StringValueDestinationBase } from './string-value-destination-base';
export declare abstract class UnicodeStringValueDestination extends StringValueDestinationBase {
    protected get destinationType(): DestinationType;
    _value: string[];
    static emptyChar: string;
    static lowbar: string;
    get value(): string;
    protected processCharCore(ch: string): void;
    protected createClone(): DestinationBase;
    protected abstract createEmptyClone(): UnicodeStringValueDestination;
}
//# sourceMappingURL=unicode-string-value-destination.d.ts.map