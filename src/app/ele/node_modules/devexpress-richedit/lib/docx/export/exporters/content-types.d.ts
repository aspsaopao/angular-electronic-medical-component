import { Data } from '../data';
import { ExporterBaseWithRootElement } from './base';
export declare class ContentTypesExporter extends ExporterBaseWithRootElement {
    get filePath(): string;
    get rootElement(): string;
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    private usedContentTypes;
    private overriddenContentTypes;
    constructor(data: Data);
    registerContentTypeOverride(partName: string, contentType: string): void;
    registerContentType(partName: string, contentType: string): void;
    protected fillWriter(): void;
}
//# sourceMappingURL=content-types.d.ts.map