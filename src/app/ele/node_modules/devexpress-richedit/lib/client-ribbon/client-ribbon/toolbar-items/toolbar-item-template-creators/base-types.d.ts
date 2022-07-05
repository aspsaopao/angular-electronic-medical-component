import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { IToolbarItemTextOptionsBase } from '../../i-ribbon-text-content-options';
export interface IToolbarItemTemplateCreator {
    createTemplate(): dxToolbarItem;
}
export declare abstract class ToolbarItemTemplateCreator implements IToolbarItemTemplateCreator {
    createTemplate(): dxToolbarItem;
    protected getCssClass(): string;
    shouldCreateTextContentTemplate(textOptions: IToolbarItemTextOptionsBase): boolean;
    createTextContentTemplate(textOptions: IToolbarItemTextOptionsBase, widgetOptions: any, type: any): any | (() => string | Element);
}
export declare abstract class ToolbarDropDownItemTemplateCreator extends ToolbarItemTemplateCreator {
    protected getOnFocusOut(): (e: any) => any;
    protected getOnKeyDown(): (e: any) => void;
}
//# sourceMappingURL=base-types.d.ts.map