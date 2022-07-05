import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { ColorBoxInitializedHandler, ColorBoxStateChangedHandler, ColorBoxValueChangedHandler } from '../../../../dxt-utils/dxt-utils/devextreme-types';
import { IToolbarColorBoxItemOptions } from '../../i-toolbar-item-options';
import { ToolbarItemTemplateCreator } from './base-types';
export interface IColorBoxToolbarItemTemplateCreatorOptions {
    itemOptions: IToolbarColorBoxItemOptions;
    onInitialized?: ColorBoxInitializedHandler;
    onValueChanged?: ColorBoxValueChangedHandler;
    onOpened?: ColorBoxStateChangedHandler;
    onClosed?: ColorBoxStateChangedHandler;
}
export declare class ColorBoxToolbarItemTemplateCreator extends ToolbarItemTemplateCreator {
    private options;
    constructor(options: IColorBoxToolbarItemTemplateCreatorOptions);
    createTemplate(): dxToolbarItem;
    private getWidgetOptions;
}
//# sourceMappingURL=color-box-toolbar-item-template-creator.d.ts.map