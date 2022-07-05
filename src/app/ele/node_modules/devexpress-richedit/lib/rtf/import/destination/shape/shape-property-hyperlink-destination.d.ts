import { HyperlinkInfo } from '../../../../core/model/fields/field';
import { ControlCharTranslatorTable, DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
export declare class ShapePropertyHyperlinkDestination extends DestinationBase {
    protected get destinationType(): DestinationType;
    protected get controlCharHT(): ControlCharTranslatorTable;
    hyperlinkInfo: HyperlinkInfo;
    nestedGroupFinished(nestedDestination: DestinationBase): void;
    protected createClone(): DestinationBase;
}
//# sourceMappingURL=shape-property-hyperlink-destination.d.ts.map