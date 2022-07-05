import { ILocalizedRibbonItemOptions } from './i-localized-ribbon-item-options';
import { IToolbarItemOptions } from './i-toolbar-item-options';
export interface IRibbonItemOptions extends ILocalizedRibbonItemOptions {
    id?: string | number;
    title: string;
    visible?: boolean;
    items: IToolbarItemOptions[];
}
//# sourceMappingURL=i-ribbon-item-options.d.ts.map