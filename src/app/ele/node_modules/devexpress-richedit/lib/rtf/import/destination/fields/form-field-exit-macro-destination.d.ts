import { UnicodeStringValueDestination } from '../base/unicode-string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare class FormFieldExitMacroDestination extends UnicodeStringValueDestination {
    get destinationType(): DestinationType;
    afterPopRtfState(): void;
    protected createEmptyClone(): UnicodeStringValueDestination;
}
//# sourceMappingURL=form-field-exit-macro-destination.d.ts.map