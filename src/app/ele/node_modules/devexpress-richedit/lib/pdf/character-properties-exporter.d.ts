import { LayoutBox } from '../core/layout/main-structures/layout-boxes/layout-box';
import { Point } from '@devexpress/utils/lib/geometry/point';
import { Size } from '@devexpress/utils/lib/geometry/size';
import { IPdfKitDocument } from './interfaces';
export declare class PdfCharacterPropertiesExporter {
    exportCharacterProperties(doc: IPdfKitDocument, box: LayoutBox, pos: Point, size: Size, needUnderlineAndStrikeout: boolean): void;
}
//# sourceMappingURL=character-properties-exporter.d.ts.map