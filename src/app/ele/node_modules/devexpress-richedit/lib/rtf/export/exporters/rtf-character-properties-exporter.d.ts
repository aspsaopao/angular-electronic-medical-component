import { CharacterProperties } from '../../../core/model/character/character-properties';
import { CharacterStyle } from '../../../core/model/character/character-style';
import { UnderlineType } from '../../../core/model/character/enums';
import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { DocumentModel } from '../../../core/model/document-model';
import { ParagraphStyle } from '../../../core/model/paragraph/paragraph-style';
import { ShadingInfo } from '../../../core/model/shadings/shading-info';
import { RtfExportHelper } from '../helpers/rtf-export-helper';
import { RtfBuilder } from '../rtf-builder';
import { RtfDocumentExporterOptions, RtfRunBackColorExportMode } from '../rtf-document-exporter-options';
import { RtfPropertiesExporter } from './rtf-properties-exporter';
export declare class RtfCharacterPropertiesExporter extends RtfPropertiesExporter {
    emptyColorIndex: number;
    defaultRtfFontSize: number;
    static defaultUnderlineTypes: Record<number, string>;
    private options;
    constructor(documentModel: DocumentModel, rtfExportHelper: RtfExportHelper, rtfBuilder: RtfBuilder, options: RtfDocumentExporterOptions);
    exportCharacterStyle(characterStyle: CharacterStyle, paragraphStyle: ParagraphStyle): void;
    private shouldWriteRunCharacterStyle;
    private writeCharacterStyle;
    exportCharacterProperties(characterProperties: CharacterProperties, checkDefaultColor?: boolean, suppressExportFontSize?: boolean, suppressExportFontName?: boolean): void;
    exportCharacterPropertiesCore(characterProperties: CharacterProperties, suppressExportFontSize: boolean, suppressExportFontName: boolean): void;
    exportParagraphCharacterProperties(characterProperties: CharacterProperties): void;
    protected registerFontCharset(_characterProperties: CharacterProperties, _fontNameIndex: number): void;
    protected writeFontUnderline(underlineType: UnderlineType): void;
    protected writeFontName(fontName: string): number;
    protected writeFontSize(rtfFontSize: number): void;
    private calculateColorIndex;
    protected writeBackgroundColor(colorIndex: number, mode: RtfRunBackColorExportMode): void;
    writeRunShading(shadingInfo: ShadingInfo): void;
    protected writeForegroundColor(foreColor: ColorModelInfo, checkDefaultColor?: boolean): void;
    protected writeHighlightColor(highlightColor: ColorModelInfo): void;
    protected writeUnderlineColor(underlineColor: ColorModelInfo): void;
}
//# sourceMappingURL=rtf-character-properties-exporter.d.ts.map