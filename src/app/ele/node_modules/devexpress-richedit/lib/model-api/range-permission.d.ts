import { RangePermission } from '../core/model/range-permissions';
import { SubDocument } from '../core/model/sub-document';
import { IProcessor } from '../core/processor';
import { IntervalApi } from './interval';
import { SubDocumentApi } from './sub-document';
export declare class RangePermissionApi {
    protected _processor: IProcessor;
    protected _subDocument: SubDocument;
    protected _rangePermission: RangePermission;
    constructor(processor: IProcessor, subDocument: SubDocument, rangePermission: RangePermission);
    get index(): number;
    get subDocument(): SubDocumentApi;
    get interval(): IntervalApi;
    get userName(): string;
    get group(): string;
    delete(): void;
}
//# sourceMappingURL=range-permission.d.ts.map