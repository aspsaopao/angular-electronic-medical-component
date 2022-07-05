import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { ColorProvider } from '../../../core/model/color/color-provider';
import { ShadingInfo } from '../../../core/model/shadings/shading-info';
import { RtfBuilder } from '../rtf-builder';
import { RtfExportHelper } from './rtf-export-helper';
export declare class RtfShadingInfoExportHelper {
    static exportShadingPattern(rtfBuilder: RtfBuilder, colorProvider: ColorProvider, info: ShadingInfo, command: string): void;
    static exportShadingForeColorIndex(rtfBuilder: RtfBuilder, helper: RtfExportHelper, colorProvider: ColorProvider, info: ShadingInfo, command: string): void;
    static exportShadingBackColorIndex(rtfBuilder: RtfBuilder, helper: RtfExportHelper, colorProvider: ColorProvider, info: ShadingInfo, command: string): void;
    static exportShadingColorIndexCore(rtfBuilder: RtfBuilder, helper: RtfExportHelper, colorProvider: ColorProvider, color: ColorModelInfo, command: string): void;
}
//# sourceMappingURL=rtf-shading-info-export-helper.d.ts.map