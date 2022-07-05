import { DestinationType } from '../utils/destination-type';
import { StringValueDestination } from './string-value-destination';
export declare class TextAfterDestination extends StringValueDestination {
    protected get destinationType(): DestinationType;
    protected createEmptyClone(): StringValueDestination;
}
//# sourceMappingURL=text-after-destination.d.ts.map