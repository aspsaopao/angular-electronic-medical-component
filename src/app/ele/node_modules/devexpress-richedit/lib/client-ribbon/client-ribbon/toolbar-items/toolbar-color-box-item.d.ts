import { IToolbarColorBoxItemOptions } from '../i-toolbar-item-options';
import { ToolbarInteractiveItem } from './toolbar-interactive-item';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
import { OnCommandExecutedHandler, OnToolbarItemStateChangedHandler } from '../ribbon';
export declare class ToolbarColorBoxItem extends ToolbarInteractiveItem<IToolbarColorBoxItemOptions> {
    protected onOpened: OnToolbarItemStateChangedHandler;
    protected onClosed: OnToolbarItemStateChangedHandler;
    constructor(options: IToolbarColorBoxItemOptions, onCommandExecuted: OnCommandExecutedHandler, onOpened: OnToolbarItemStateChangedHandler, onClosed: OnToolbarItemStateChangedHandler);
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
    setValue(value: any): void;
    private getOnOpenedHandler;
    private getOnClosedHandler;
    private getOnValueChangedHandler;
}
//# sourceMappingURL=toolbar-color-box-item.d.ts.map