import { RtfShapePropertiesInfo } from '../model/shape/shape-properties-info';
import { RtfImportData } from '../rtf-import-data';
import { RtfBaseImporter } from './importer-base';
export declare class RtfShapeImporter extends RtfBaseImporter {
    pushState(): void;
    popState(): void;
    startImportSubDocument(): void;
    finalizeSubDocument(): void;
    insertShape(importer: RtfImportData, shapeProperties: RtfShapePropertiesInfo): void;
}
//# sourceMappingURL=shape-importer.d.ts.map