import { DestinationBase } from '../base/destination';
import { DestinationType } from '../utils/destination-type';
import { ShapePropertiesDestinationBase } from './shape-properties-destination-base';
export declare class ShapeInstanceDestination extends ShapePropertiesDestinationBase {
    protected get destinationType(): DestinationType;
    protected createClone(): DestinationBase;
    nestedGroupFinished(_nestedDestination: DestinationBase): void;
}
//# sourceMappingURL=shape-instance-destination.d.ts.map