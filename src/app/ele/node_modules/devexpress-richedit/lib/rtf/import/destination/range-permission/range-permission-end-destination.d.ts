import { ImportRangePermissionInfo } from '../../model/range-permission/import-range-permission-info';
import { StringValueDestination } from '../base/string-value-destination';
import { DestinationType } from '../utils/destination-type';
import { RangePermissionDestinationBase } from './range-permission-destination-base';
export declare class RangePermissionEndDestination extends RangePermissionDestinationBase {
    protected get destinationType(): DestinationType;
    protected createEmptyClone(): StringValueDestination;
    protected assignRangePermissionPosition(rangePermission: ImportRangePermissionInfo): void;
}
//# sourceMappingURL=range-permission-end-destination.d.ts.map