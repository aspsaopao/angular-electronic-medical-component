import { FontInfo } from '../../fonts/font-info';
import { ModelChangeBase } from '../change-base';
import { ModelChangeType } from '../enums';
export declare class LoadFontInfoModelChange implements ModelChangeBase {
    fontInfo: FontInfo;
    readonly type = ModelChangeType.LoadFontInfo;
    constructor(fontInfo: FontInfo);
}
//# sourceMappingURL=load-font.d.ts.map