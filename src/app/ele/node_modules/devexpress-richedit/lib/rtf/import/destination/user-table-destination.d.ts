import { DestinationBase } from './base/destination';
import { StringValueDestination } from './base/string-value-destination';
import { DestinationType } from './utils/destination-type';
export declare class UserTableDestination extends StringValueDestination {
    protected get destinationType(): DestinationType;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    protected createEmptyClone(): StringValueDestination;
}
//# sourceMappingURL=user-table-destination.d.ts.map