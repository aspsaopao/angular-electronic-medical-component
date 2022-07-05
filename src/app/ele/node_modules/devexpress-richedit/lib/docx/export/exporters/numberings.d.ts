import { DocumentModel } from '../../../core/model/document-model';
import { ExporterBaseWithRootElement } from './base';
export declare class NumberingsExporter extends ExporterBaseWithRootElement {
    get filePath(): string;
    get rootElement(): string;
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    static shouldExportNumbering(model: DocumentModel): boolean;
    export(): void;
    protected fillWriter(): void;
    private exportOverrideLevels;
    private exportLevelOverride;
    private exportStartOverride;
    private exportLevel;
    private exportLevels;
    private exportLevelProperties;
    private exportLevelParagraphProperties;
    private exportLevelCharacterProperties;
    private convertFormatString;
    private exportNumberFormatValue;
    private exportAbstractLevelProperties;
}
//# sourceMappingURL=numberings.d.ts.map