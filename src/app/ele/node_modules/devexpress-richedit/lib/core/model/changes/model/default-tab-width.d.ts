import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class DefaultTabWidthModelChange implements ModelChangeBase {
    newDefaultTabWidth: number;
    readonly type = ModelChangeType.DefaultTabWidth;
    constructor(newDefaultTabWidth: number);
}
//# sourceMappingURL=default-tab-width.d.ts.map