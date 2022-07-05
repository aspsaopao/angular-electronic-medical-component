import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class CreateStyleLinkModelChange implements ModelChangeBase {
    paragraphStyleName: string;
    readonly type = ModelChangeType.CreateStyleLink;
    constructor(paragraphStyleName: string);
}
//# sourceMappingURL=create-style-link.d.ts.map