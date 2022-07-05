import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { ButtonClickHandler, ButtonInitializedHandler } from '../../../../dxt-utils/dxt-utils/devextreme-types';
import { IToolbarButtonItemOptions } from '../../i-toolbar-item-options';
import { ToolbarItemTemplateCreator } from './base-types';
export interface IButtonToolbarItemTemplateCreatorOptions {
    itemOptions: IToolbarButtonItemOptions;
    onInitialized?: ButtonInitializedHandler;
    onClick?: ButtonClickHandler;
}
export declare class ButtonToolbarItemTemplateCreator extends ToolbarItemTemplateCreator {
    private options;
    constructor(options: IButtonToolbarItemTemplateCreatorOptions);
    createTemplate(): dxToolbarItem;
    private getButtonOptions;
}
//# sourceMappingURL=button-toolbar-item-template-creator.d.ts.map