import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { ButtonClickHandler, ButtonInitializedHandler } from '../../../../dxt-utils/dxt-utils/devextreme-types';
import { IToolbarButtonGroupItemOptions } from '../../i-toolbar-item-options';
import { ToolbarItemTemplateCreator } from './base-types';
export interface IButtonGroupToolbarItemTemplateCreatorOptions {
    itemOptions: IToolbarButtonGroupItemOptions;
    onInitialized?: ButtonInitializedHandler;
    onClick?: ButtonClickHandler;
}
export declare class ButtonGroupToolbarItemTemplateCreator extends ToolbarItemTemplateCreator {
    private options;
    constructor(options: IButtonGroupToolbarItemTemplateCreatorOptions);
    createTemplate(): dxToolbarItem;
    private getButtonGroupOptions;
}
//# sourceMappingURL=button-group-toolbar-item-template-creator.d.ts.map