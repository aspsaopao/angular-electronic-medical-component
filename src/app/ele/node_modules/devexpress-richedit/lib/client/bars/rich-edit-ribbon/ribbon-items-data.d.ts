import { IRibbonItemOptions } from '../../../client-ribbon/client-ribbon/i-ribbon-item-options';
import { IRibbonContextItemsCategory } from '../../../client-ribbon/client-ribbon/ribbon';
export declare type RibbonFontBoxData = {
    text: string;
    value: string;
}[];
export declare type RibbonFontSizeData = {
    text: string;
    value: number;
}[];
export declare class RibbonItemsData {
    static getDefaultItems(): IRibbonItemOptions[];
    static getDefaultContextItemsCategories(): IRibbonContextItemsCategory[];
}
//# sourceMappingURL=ribbon-items-data.d.ts.map