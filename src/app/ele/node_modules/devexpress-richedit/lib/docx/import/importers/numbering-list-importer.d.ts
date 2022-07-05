import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare class NumberingListImporter {
    data: Data;
    constructor(data: Data);
    import(): void;
    protected importNumberingCore(_reader: XmlReader): void;
}
//# sourceMappingURL=numbering-list-importer.d.ts.map