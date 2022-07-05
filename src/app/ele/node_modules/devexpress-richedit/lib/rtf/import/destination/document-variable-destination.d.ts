import { DestinationBase } from './base/destination';
import { StringValueDestination } from './base/string-value-destination';
import { DestinationType } from './utils/destination-type';
export declare class DocumentVariableDestination extends StringValueDestination {
    protected get destinationType(): DestinationType;
    name: string;
    ownValue: string;
    isNameRead: boolean;
    protected createEmptyClone(): StringValueDestination;
    afterPopRtfState(): void;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
}
//# sourceMappingURL=document-variable-destination.d.ts.map