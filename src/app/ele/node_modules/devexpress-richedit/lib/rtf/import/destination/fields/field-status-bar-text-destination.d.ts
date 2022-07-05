import { UnicodeStringValueDestination } from '../base/unicode-string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare class FieldStatusBarTextDestination extends UnicodeStringValueDestination {
    protected get destinationType(): DestinationType;
    afterPopRtfState(): void;
    protected createEmptyClone(): UnicodeStringValueDestination;
}
//# sourceMappingURL=field-status-bar-text-destination.d.ts.map