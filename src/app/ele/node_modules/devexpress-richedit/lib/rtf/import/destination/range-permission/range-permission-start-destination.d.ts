import { ImportRangePermissionInfo } from '../../model/range-permission/import-range-permission-info';
import { StringValueDestination } from '../base/string-value-destination';
import { DestinationType } from '../utils/destination-type';
import { RangePermissionDestinationBase } from './range-permission-destination-base';
export declare class RangePermissionStartDestination extends RangePermissionDestinationBase {
    protected get destinationType(): DestinationType;
    protected createEmptyClone(): StringValueDestination;
    protected assignRangePermissionPosition(rangePermission: ImportRangePermissionInfo): void;
}
//# sourceMappingURL=range-permission-start-destination.d.ts.map