import { RibbonItemId } from '../item-ids';
import { RibbonItemBase, RibbonItemType } from './base';
export interface RibbonButtonItemOptions {
    showText?: boolean;
    toggleMode?: boolean;
    selected?: boolean;
    icon?: string;
    beginGroup?: boolean;
    localizationId?: string;
}
export declare class RibbonButtonItem extends RibbonItemBase {
    readonly type = RibbonItemType.Button;
    text: string;
    showText: boolean;
    toggleMode: boolean;
    selected: boolean;
    icon?: string;
    localizationId?: string;
    constructor(id: RibbonItemId, text: string, options?: RibbonButtonItemOptions);
}
//# sourceMappingURL=button.d.ts.map