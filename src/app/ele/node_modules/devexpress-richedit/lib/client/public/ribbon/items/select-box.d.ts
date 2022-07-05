import { RibbonItemId } from '../item-ids';
import { RibbonItemBase, RibbonItemTextOptions, RibbonItemType } from './base';
export interface RibbonSelectBoxItemOptions {
    beginGroup?: boolean;
    width?: any;
    displayExpr?: string;
    valueExpr?: string;
    value?: any;
    textOptions?: RibbonItemTextOptions;
    showClearButton?: boolean;
    placeholder?: string;
    acceptCustomValue?: boolean;
    _localizeDataSourceItems?: boolean;
    onCustomItemCreating?: any;
}
export declare class RibbonSelectBoxItem extends RibbonItemBase {
    readonly type = RibbonItemType.SelectBox;
    dataSource: any[];
    displayExpr?: string;
    valueExpr?: string;
    width?: any;
    value?: any;
    textOptions: RibbonItemTextOptions;
    showClearButton: boolean;
    placeholder?: string;
    acceptCustomValue?: boolean;
    _localizeDataSourceItems?: boolean;
    onCustomItemCreating?: any;
    constructor(id: RibbonItemId, dataSource: any[] | any, options?: RibbonSelectBoxItemOptions);
}
//# sourceMappingURL=select-box.d.ts.map