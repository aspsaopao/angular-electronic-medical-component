import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { SelectBoxInitializedHandler, SelectBoxValueChangedHandler } from '../../../../dxt-utils/dxt-utils/devextreme-types';
import { IToolbarSelectBoxItemOptions } from '../../i-toolbar-item-options';
import { ToolbarDropDownItemTemplateCreator } from './base-types';
export interface ISelectBoxToolbarItemTemplateCreatorOptions {
    itemOptions: IToolbarSelectBoxItemOptions;
    onInitialized?: SelectBoxInitializedHandler;
    onValueChanged?: SelectBoxValueChangedHandler;
}
export declare class SelectBoxToolbarItemTemplateCreator extends ToolbarDropDownItemTemplateCreator {
    private options;
    constructor(options: ISelectBoxToolbarItemTemplateCreatorOptions);
    createTemplate(): dxToolbarItem;
    private getOnCustomItemCreating;
    private getWidgetOptions;
}
//# sourceMappingURL=select-box-toolbar-item-template-creator.d.ts.map