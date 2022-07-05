import * as JSZip from 'jszip';
import { ImporterOptions } from '../import/importer-options';
import { XmlReader } from './xml-reader';
export declare class ArchiveData {
    entryMap: Record<string, JSZip.JSZipObject>;
    private options;
    constructor(options: ImporterOptions);
    init(blob: Blob): Promise<void>;
    getXmlReader(filePath: string): Promise<XmlReader | null>;
    getBase64(filePath: string): Promise<string | null>;
}
//# sourceMappingURL=zip-reader.d.ts.map