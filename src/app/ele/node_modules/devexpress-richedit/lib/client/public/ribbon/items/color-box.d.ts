import { RibbonItemId } from '../item-ids';
import { RibbonItemBase, RibbonItemTextOptions, RibbonItemType } from './base';
export interface RibbonColorBoxItemOptions {
    beginGroup?: boolean;
    localizationId?: string;
    textOptions?: RibbonItemTextOptions;
}
export declare class RibbonColorBoxItem extends RibbonItemBase {
    readonly type = RibbonItemType.ColorBox;
    text: string;
    value: string;
    textOptions: RibbonItemTextOptions;
    localizationId?: string;
    constructor(id: RibbonItemId, text: string, value: string, options?: RibbonColorBoxItemOptions);
}
//# sourceMappingURL=color-box.d.ts.map