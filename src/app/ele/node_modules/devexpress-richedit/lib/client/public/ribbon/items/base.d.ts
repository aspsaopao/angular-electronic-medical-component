import { RibbonItemId } from '../item-ids';
export declare enum RibbonItemType {
    Button = 0,
    SelectBox = 1,
    Menu = 2,
    NumberBox = 3,
    ColorBox = 4,
    SubMenu = 5
}
export declare abstract class RibbonItemBase {
    abstract readonly type: RibbonItemType;
    beginGroup: boolean;
    id: RibbonItemId;
    constructor(id: RibbonItemId, beginGroup?: boolean);
}
export interface RibbonItemTextOptions {
    text?: string;
    displayAfterEditor?: boolean;
}
//# sourceMappingURL=base.d.ts.map