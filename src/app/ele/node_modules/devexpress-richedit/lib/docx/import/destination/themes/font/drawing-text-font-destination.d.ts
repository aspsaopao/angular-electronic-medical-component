import { DrawingTextFont } from '../../../../../core/model/drawing/drawing-text-font';
import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { LeafElementDestination } from '../../destination';
export declare class DrawingTextFontDestination extends LeafElementDestination {
    textFont: DrawingTextFont;
    constructor(data: Data, textFont: DrawingTextFont);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=drawing-text-font-destination.d.ts.map