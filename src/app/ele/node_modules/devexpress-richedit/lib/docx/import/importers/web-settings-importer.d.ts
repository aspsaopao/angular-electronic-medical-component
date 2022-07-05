import { XmlReader } from '../../zip/xml-reader';
import { Data } from '../data';
export declare class WebSettingsImporter {
    data: Data;
    constructor(data: Data);
    import(): void;
    importWebSettingsCore(_reader: XmlReader): void;
}
//# sourceMappingURL=web-settings-importer.d.ts.map