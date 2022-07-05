import { IDocumentExporter } from '../../core/formats/i-document-exporter';
import { ColorModelInfo } from '../../core/model/color/color-model-info';
import { DocumentModel } from '../../core/model/document-model';
import { ModelManipulator } from '../../core/model/manipulators/model-manipulator';
import { RtfContentExporter } from './exporters/rtf-content-exporter';
import { RtfExportHelper } from './helpers/rtf-export-helper';
import { RtfBuilder } from './rtf-builder';
import { RtfDocumentExporterOptions } from './rtf-document-exporter-options';
export declare class RtfExporter implements IDocumentExporter {
    documentModel: DocumentModel;
    options: RtfDocumentExporterOptions;
    rtfExportHelper: RtfExportHelper;
    rtfBuilder: RtfBuilder;
    contentExporter: RtfContentExporter;
    private modelManipulator;
    constructor(modelManipulator: ModelManipulator, options: RtfDocumentExporterOptions);
    exportToBlob(callback: (blob: Blob) => void): void;
    exportToBase64(callback: (base64: string) => void): void;
    exportAsString(): string;
    private exportCore;
    exportListTable(): void;
    exportListOverrideTable(): void;
    protected exportDefaultProperties(): void;
    protected exportDefaultCharacterProperties(): void;
    protected exportDefaultParagraphProperties(): void;
    protected exportStyleTable(): void;
    protected exportUsersTable(): void;
    protected exportDocumentVariables(): void;
    protected exportParagraphGroupProperties(): void;
    exportColorTable(): void;
    exportColorIndexTableEntry(colorIndex: number): void;
    exportRgbColor(color: number): void;
    exportColorInfo(colorInfo: ColorModelInfo): void;
    exportFontTable(): void;
    exportFontTableEntry(fontName: string, fontIndex: number): void;
}
//# sourceMappingURL=exporter.d.ts.map