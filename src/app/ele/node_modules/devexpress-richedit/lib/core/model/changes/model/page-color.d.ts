import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class PageColorModelChange implements ModelChangeBase {
    newColor: number;
    readonly type = ModelChangeType.PageColor;
    constructor(newColor: number);
}
//# sourceMappingURL=page-color.d.ts.map