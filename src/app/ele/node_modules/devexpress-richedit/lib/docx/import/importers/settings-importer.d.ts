import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare class SettingsImporter {
    data: Data;
    constructor(data: Data);
    import(): void;
    protected importSettingsCore(_reader: XmlReader): void;
}
//# sourceMappingURL=settings-importer.d.ts.map