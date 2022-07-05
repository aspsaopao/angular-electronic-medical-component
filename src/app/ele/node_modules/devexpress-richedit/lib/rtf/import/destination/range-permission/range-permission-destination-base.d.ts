import { ImportRangePermissionInfo } from '../../model/range-permission/import-range-permission-info';
import { StringValueDestination } from '../base/string-value-destination';
import { DestinationType } from '../utils/destination-type';
export declare abstract class RangePermissionDestinationBase extends StringValueDestination {
    protected get destinationType(): DestinationType;
    afterPopRtfState(): void;
    protected obtainUserName(data: string): string;
    protected obtainGroupName(data: string): string;
    protected obtainUserId(data: string): number;
    protected abstract assignRangePermissionPosition(rangePermission: ImportRangePermissionInfo): any;
}
//# sourceMappingURL=range-permission-destination-base.d.ts.map