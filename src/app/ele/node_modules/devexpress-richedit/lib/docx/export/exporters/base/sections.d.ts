import { Section } from '../../../../core/model/section/section';
import { BaseExporter } from '../base';
export declare class SectionExporter extends BaseExporter {
    private static readonly defaultProps;
    private static createDefaultProperties;
    exportProperties(section: Section): void;
    private exportHeaderFooter;
    private exportSectionHeadersFootersCore;
    private exportSectionPropertiesCore;
    private exportSectionPage;
    private shouldExportSectionPage;
    private exportSectionMargins;
    private exportSectionLineNumbering;
    private exportSectionPageNumbering;
    private shouldExportPageNumbering;
    private exportSectionColumns;
    private shouldExportSectionColumns;
    private exportEqualWidthColumns;
    private exportNonUniformColumns;
    private exportSectionGeneralSettings;
}
//# sourceMappingURL=sections.d.ts.map