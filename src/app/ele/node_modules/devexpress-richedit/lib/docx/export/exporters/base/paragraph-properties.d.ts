import { Paragraph } from '../../../../core/model/paragraph/paragraph';
import { MaskedParagraphProperties } from '../../../../core/model/paragraph/paragraph-properties';
import { TabProperties } from '../../../../core/model/paragraph/paragraph-style';
import { Section } from '../../../../core/model/section/section';
import { SubDocument } from '../../../../core/model/sub-document';
import { BaseExporter } from '../base';
import { RunBase } from '../../../../core/model/runs/run-base';
export declare class ParagraphPropertiesExporter extends BaseExporter {
    private static convertLineSpacingValue;
    private static shouldExportParagraphBorder;
    exportParagraphPropertiesCore(props: MaskedParagraphProperties, numberingListId: number, levelIndex: number, tabsExporter: () => void, defaultParagraphProperties: boolean): void;
    exportStyleParagraphProperties(paragraphProperties: MaskedParagraphProperties, tabInfo: TabProperties, ownNumberingListIndex: number, listLevelIndex: number): void;
    exportParagraphProperties(subDocument: SubDocument, section: Section, paragraph: Paragraph, paragraphRun: RunBase): void;
    exportTabProperties(tabs: TabProperties): void;
    private exportParagraphNumbering;
    private shouldExportParagraphNumbering;
    private exportParagraphOutlineLevel;
    private exportParagraphSpacing;
    private exportParagraphIndentation;
    private exportParagraphBorders;
    private exportParagraphBorder;
    private getNumberingListIndexForExport;
    private exportTab;
    private shouldExportTabProperties;
    private shouldExportParagraphProperties;
    private shouldExportSectionProperties;
}
//# sourceMappingURL=paragraph-properties.d.ts.map