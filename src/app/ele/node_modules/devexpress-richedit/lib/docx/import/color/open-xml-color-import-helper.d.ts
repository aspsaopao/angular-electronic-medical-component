import { ColorModelInfo } from '../../../core/model/color/color-model-info';
import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare class OpenXmlColorImportHelper {
    static createColorModelInfo(data: Data, reader: XmlReader, attribute: string, allowNoColor?: boolean): ColorModelInfo;
    static tryConvertAttributeToColor(data: Data, reader: XmlReader, attribute: string): number | null;
    static createFillInfo(data: Data, reader: XmlReader): ColorModelInfo;
    private static getTint;
}
//# sourceMappingURL=open-xml-color-import-helper.d.ts.map