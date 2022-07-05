import { IRibbonItem } from '../ribbon';
import { ToolbarMenuItem } from './toolbar-menu-item';
export declare class ToolbarSubMenuItem implements IRibbonItem {
    readonly name: string | number;
    readonly menuItem: ToolbarMenuItem;
    static readonly SelectedItemClassName = "dx-menu-item-selected";
    private element?;
    private dataOptionName?;
    private selected?;
    constructor(name: string | number, menuItem: ToolbarMenuItem);
    setValue(value: any): void;
    setElement(element: HTMLElement): void;
    setEnabled(enabled: boolean): void;
    setVisible(visible: boolean): void;
    private setValueCore;
    private setDataOption;
    private getDataOptionName;
    private getDataOptionNameCore;
}
//# sourceMappingURL=toolbar-sub-menu-item.d.ts.map