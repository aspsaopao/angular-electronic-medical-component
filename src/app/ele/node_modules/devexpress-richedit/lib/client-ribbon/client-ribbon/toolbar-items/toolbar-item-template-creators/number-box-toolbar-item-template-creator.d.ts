import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { NumberBoxInitializedHandler, NumberBoxValueChangedHandler } from '../../../../dxt-utils/dxt-utils/devextreme-types';
import { IToolbarNumberBoxItemOptions } from '../../i-toolbar-item-options';
import { ToolbarItemTemplateCreator } from './base-types';
export interface INumberBoxToolbarItemTemplateCreatorOptions {
    itemOptions: IToolbarNumberBoxItemOptions;
    onInitialized?: NumberBoxInitializedHandler;
    onValueChanged?: NumberBoxValueChangedHandler;
}
export declare class NumberBoxToolbarItemTemplateCreator extends ToolbarItemTemplateCreator {
    private options;
    constructor(options: INumberBoxToolbarItemTemplateCreatorOptions);
    createTemplate(): dxToolbarItem;
    private getWidgetOptions;
}
//# sourceMappingURL=number-box-toolbar-item-template-creator.d.ts.map