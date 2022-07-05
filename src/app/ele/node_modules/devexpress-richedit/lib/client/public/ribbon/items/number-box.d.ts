import { RibbonItemId } from '../item-ids';
import { RibbonItemBase, RibbonItemType } from './base';
export interface RibbonNumberBoxItemOptions {
    beginGroup?: boolean;
    min?: number;
    max?: number;
    step?: number;
    width?: any;
    localizationId?: string;
    format?: string;
    value?: number;
}
export declare class RibbonNumberBoxItem extends RibbonItemBase {
    readonly type = RibbonItemType.NumberBox;
    text: string;
    min?: number;
    max?: number;
    step: number;
    width?: any;
    localizationId?: string;
    format?: string;
    value?: number;
    constructor(id: RibbonItemId, text: string, options?: RibbonNumberBoxItemOptions);
}
//# sourceMappingURL=number-box.d.ts.map