import dxButton from 'devextreme/ui/button';
import dxButtonGroup from 'devextreme/ui/button_group';
import dxColorBox from 'devextreme/ui/color_box';
import dxMenu from 'devextreme/ui/menu';
import dxNumberBox from 'devextreme/ui/number_box';
import dxSelectBox from 'devextreme/ui/select_box';
import { IToolbarButtonGroupItemOptions, IToolbarButtonItemOptions, IToolbarColorBoxItemOptions, IToolbarMenuItemOptions, IToolbarNumberBoxItemOptions, IToolbarSelectBoxItemOptions } from '../i-toolbar-item-options';
import { IRibbonItem, OnCommandExecutedHandler } from '../ribbon';
import { ToolbarItemBase } from './toolbar-item-base';
export declare type InteractiveItemOptions = IToolbarButtonItemOptions | IToolbarButtonGroupItemOptions | IToolbarSelectBoxItemOptions | IToolbarMenuItemOptions | IToolbarNumberBoxItemOptions | IToolbarColorBoxItemOptions;
declare type WidgetTypeByOptionsType<T extends InteractiveItemOptions> = T extends IToolbarButtonItemOptions ? dxButton : T extends IToolbarButtonItemOptions ? dxButtonGroup : T extends IToolbarSelectBoxItemOptions ? dxSelectBox : T extends IToolbarNumberBoxItemOptions ? dxNumberBox : T extends IToolbarColorBoxItemOptions ? dxColorBox : dxMenu;
export declare abstract class ToolbarInteractiveItem<OptionsType extends InteractiveItemOptions> extends ToolbarItemBase implements IRibbonItem {
    protected options: OptionsType;
    protected onCommandExecuted: OnCommandExecutedHandler;
    protected widget: WidgetTypeByOptionsType<OptionsType>;
    readonly name: string | number;
    constructor(options: OptionsType, onCommandExecuted: OnCommandExecutedHandler);
    setEnabled(enabled: boolean): void;
    setVisible(visible: boolean): void;
    abstract setValue(_value: any): void;
    protected getOnInitializedHandler(): (e: {
        component: WidgetTypeByOptionsType<OptionsType>;
    }) => void;
    protected applyWidget(e: any): void;
}
export {};
//# sourceMappingURL=toolbar-interactive-item.d.ts.map