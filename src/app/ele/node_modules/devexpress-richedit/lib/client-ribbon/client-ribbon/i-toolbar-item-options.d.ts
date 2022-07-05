import { ILocalizedRibbonItemOptions } from './i-localized-ribbon-item-options';
import { IToolbarItemTextOptions } from './i-ribbon-text-content-options';
export declare type IToolbarItemOptions = IToolbarButtonItemOptions | IToolbarButtonGroupItemOptions | IToolbarSelectBoxItemOptions | IToolbarMenuItemOptions | IToolbarNumberBoxItemOptions | IToolbarColorBoxItemOptions;
interface IToolbarItemOptionsBase {
    type: 'Button' | 'ButtonGroup' | 'SelectBox' | 'Menu' | 'NumberBox' | 'ColorBox';
    name?: string | number;
    beginGroup?: boolean;
}
interface IToolbarButtonItemOptionsBase extends IToolbarItemOptionsBase, ILocalizedRibbonItemOptions {
    type: 'Button' | 'Menu';
    text: string;
    icon?: string;
    alwaysShowText?: boolean;
}
export interface IToolbarButtonItemOptions extends IToolbarButtonItemOptionsBase {
    type: 'Button';
    isToggleMode?: boolean;
    selected?: boolean;
}
export interface IToolbarButtonGroupItemOptions extends IToolbarItemOptionsBase {
    type: 'ButtonGroup';
    alwaysShowText?: boolean;
    items: {
        text: string;
        icon: string;
        name: string | number;
    }[];
}
export interface IToolbarSubMenuItemOptions extends ILocalizedRibbonItemOptions {
    text: string;
    name?: string | number;
    icon?: string;
    items?: IToolbarSubMenuItemOptions[];
    beginGroup?: boolean;
}
export interface IToolbarMenuItemOptions extends IToolbarButtonItemOptionsBase {
    type: 'Menu';
    items: IToolbarSubMenuItemOptions[];
}
export interface IToolbarSelectBoxItemOptions extends IToolbarItemOptionsBase, IToolbarItemTextOptions {
    type: 'SelectBox';
    dataSource: any;
    icon?: string;
    width?: any;
    displayExpr?: string;
    valueExpr?: string;
    value?: any;
    showClearButton?: boolean;
    placeholder?: string;
    acceptCustomValue?: boolean;
    onCustomItemCreating?: any;
    _localizeDataSourceItems?: boolean;
}
export interface IToolbarNumberBoxItemOptions extends IToolbarItemOptionsBase, ILocalizedRibbonItemOptions {
    type: 'NumberBox';
    min?: number;
    max?: number;
    step?: number;
    text: string;
    width?: any;
    format?: string;
    value?: number;
}
export interface IToolbarColorBoxItemOptions extends IToolbarItemOptionsBase, ILocalizedRibbonItemOptions, IToolbarItemTextOptions {
    type: 'ColorBox';
    text: string;
    value: string;
}
export {};
//# sourceMappingURL=i-toolbar-item-options.d.ts.map