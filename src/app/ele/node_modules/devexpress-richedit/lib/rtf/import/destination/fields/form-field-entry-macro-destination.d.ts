import { UnicodeStringValueDestination } from '../base/unicode-string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare class FormFieldEntryMacroDestination extends UnicodeStringValueDestination {
    protected get destinationType(): DestinationType;
    afterPopRtfState(): void;
    protected createEmptyClone(): UnicodeStringValueDestination;
}
//# sourceMappingURL=form-field-entry-macro-destination.d.ts.map