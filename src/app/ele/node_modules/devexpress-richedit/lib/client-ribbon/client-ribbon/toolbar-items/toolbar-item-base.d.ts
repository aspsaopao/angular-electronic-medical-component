import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
export declare abstract class ToolbarItemBase {
    private _toolbarItemTemplateCreator;
    protected get toolbarItemTemplateCreator(): IToolbarItemTemplateCreator;
    createToolbarItemTemplate(): dxToolbarItem;
    protected abstract getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
}
//# sourceMappingURL=toolbar-item-base.d.ts.map