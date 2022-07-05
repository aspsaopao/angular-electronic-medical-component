import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class DeleteStyleLinkModelChange implements ModelChangeBase {
    paragraphStyleName: string;
    readonly type = ModelChangeType.DeleteStyleLink;
    constructor(paragraphStyleName: string);
}
//# sourceMappingURL=delete-style-link.d.ts.map