import { dxElement } from 'devextreme/core/element';
import dxButton from 'devextreme/ui/button';
import { Properties as dxButtonOptions } from 'devextreme/ui/button';
import dxMenu from 'devextreme/ui/menu';
import { Properties as dxMenuOptions } from 'devextreme/ui/menu';
import { Properties as dxNumberBoxOptions } from 'devextreme/ui/number_box';
import { Properties as dxSelectBoxOptions } from 'devextreme/ui/select_box';
import dxTabPanel from 'devextreme/ui/tab_panel';
import { event } from 'devextreme/events/index';
import { Properties as dxColorBoxOptions } from 'devextreme/ui/color_box';
import Widget from 'devextreme/ui/widget/ui.widget';
declare type ComponentInitialized<TProperties> = (e: {
    component?: Widget<TProperties>;
    element?: dxElement;
}) => any;
export declare type EditorValueChangedHandler<TProperties> = (e: {
    component?: Widget<TProperties>;
    element?: dxElement;
    model?: any;
    value?: any;
    previousValue?: any;
    event?: event;
}) => any;
export declare type EditorStateChangedHandler<TProperties> = (e: {
    component?: Widget<TProperties>;
    element?: dxElement;
    model?: any;
}) => any;
export declare type ButtonClickHandler = (e: {
    component?: dxButton;
    element?: dxElement;
    model?: any;
    event?: event;
    validationGroup?: any;
}) => any | string;
export declare type ButtonInitializedHandler = ComponentInitialized<dxButtonOptions>;
export declare type MenuItemRenderedHandler = (e: {
    component?: dxMenu;
    element?: dxElement;
    model?: any;
    itemData?: any;
    itemElement?: dxElement;
    itemIndex?: number;
}) => any;
export declare type MenuItemClickHandler = (e: {
    component?: dxMenu;
    element?: dxElement;
    model?: any;
    itemData?: any;
    itemElement?: dxElement;
    itemIndex?: number;
    event?: event;
}) => any | string;
export declare type MenuInitializedHandler = ComponentInitialized<dxMenuOptions>;
export declare type SelectBoxInitializedHandler = ComponentInitialized<dxSelectBoxOptions>;
export declare type SelectBoxValueChangedHandler = EditorValueChangedHandler<dxSelectBoxOptions>;
export declare type TabPanelTitleClickHandler = (e: {
    component?: dxTabPanel;
    element?: dxElement;
    model?: any;
    itemData?: any;
    itemElement?: dxElement;
}) => any | string;
export declare type TabPanelSelectionChangedHandler = (e: {
    component?: dxTabPanel;
    element?: dxElement;
    model?: any;
    addedItems?: Array<any>;
    removedItems?: Array<any>;
}) => any;
export declare type NumberBoxInitializedHandler = ComponentInitialized<dxNumberBoxOptions>;
export declare type NumberBoxValueChangedHandler = EditorValueChangedHandler<dxNumberBoxOptions>;
export declare type ColorBoxInitializedHandler = ComponentInitialized<dxColorBoxOptions>;
export declare type ColorBoxValueChangedHandler = EditorValueChangedHandler<dxColorBoxOptions>;
export declare type ColorBoxStateChangedHandler = EditorStateChangedHandler<dxColorBoxOptions>;
export {};
//# sourceMappingURL=devextreme-types.d.ts.map