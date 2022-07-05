import { ToolbarItemBase } from './toolbar-item-base';
import { IToolbarItemTemplateCreator } from './toolbar-item-template-creators/base-types';
export declare class ToolbarSeparatorItem extends ToolbarItemBase {
    static readonly SeparatorContainerClassName = "dx-r-separator-container";
    static prepareElement(element: any): void;
    protected getBuildTemplateStrategy(): IToolbarItemTemplateCreator;
}
//# sourceMappingURL=toolbar-separator-item.d.ts.map