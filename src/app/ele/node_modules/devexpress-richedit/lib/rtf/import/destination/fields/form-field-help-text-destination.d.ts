import { UnicodeStringValueDestination } from '../base/unicode-string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare class FormFieldHelpTextDestination extends UnicodeStringValueDestination {
    get destinationType(): DestinationType;
    afterPopRtfState(): void;
    protected createEmptyClone(): UnicodeStringValueDestination;
}
//# sourceMappingURL=form-field-help-text-destination.d.ts.map