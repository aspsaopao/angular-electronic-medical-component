import { XmlReader } from '../../../../zip/xml-reader';
import { Data } from '../../../data';
import { DrawingColorDestination } from './drawing-color-destination';
export declare class OfficeThemeColorDestination extends DrawingColorDestination {
    private themeColorIndex;
    constructor(data: Data, themeColorIndex: number);
    processElementClose(_reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=office-theme-color-destination.d.ts.map