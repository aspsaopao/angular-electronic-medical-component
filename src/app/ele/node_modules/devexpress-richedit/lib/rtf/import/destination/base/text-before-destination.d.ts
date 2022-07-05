import { DestinationType } from '../utils/destination-type';
import { StringValueDestination } from './string-value-destination';
export declare class TextBeforeDestination extends StringValueDestination {
    protected get destinationType(): DestinationType;
    protected createEmptyClone(): StringValueDestination;
}
//# sourceMappingURL=text-before-destination.d.ts.map