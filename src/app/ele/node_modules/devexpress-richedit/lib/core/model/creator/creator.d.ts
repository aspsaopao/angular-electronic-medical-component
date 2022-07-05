import { MaskedCharacterProperties } from '../character/character-properties';
import { DocumentModel, IModelOptions } from '../document-model';
import { MaskedParagraphProperties } from '../paragraph/paragraph-properties';
import { TabProperties } from '../paragraph/paragraph-style';
import { SectionProperties } from '../section/section-properties';
import { TableCellProperties } from '../tables/properties/table-cell-properties';
import { TableProperties } from '../tables/properties/table-properties';
import { TableRowProperties } from '../tables/properties/table-row-properties';
import { ModelCreatorOptions } from './options';
export declare class ModelCreator {
    private model;
    private options;
    constructor(options: ModelCreatorOptions);
    static createTemplateCharProps(model: DocumentModel): MaskedCharacterProperties;
    static createDefaultCharProps(model: DocumentModel): MaskedCharacterProperties;
    static createTemplateParProps(): MaskedParagraphProperties;
    static createDefaultParProps(): MaskedParagraphProperties;
    static createTemplateTableProps(): TableProperties;
    static createDefaultTableProps(): TableProperties;
    static createTemplateTableRowProps(): TableRowProperties;
    static createDefaultTableRowProps(): TableRowProperties;
    static createTemplateTableCellProps(): TableCellProperties;
    static createDefaultTableCellProps(): TableCellProperties;
    static createHyperlinkStyleCharProps(model: DocumentModel): MaskedCharacterProperties;
    static createTemplateSecProps(): SectionProperties;
    static createTemplateTabProps(): TabProperties;
    createModel(modelOptions: IModelOptions): this;
    setModel(model: DocumentModel): this;
    fillModel(): DocumentModel;
    private initOfficeTheme;
    private initFontScheme;
    private getDrawingColorAsRgb;
    private getDrawingColorAsSystem;
    private initNumberingListTemplates;
}
//# sourceMappingURL=creator.d.ts.map