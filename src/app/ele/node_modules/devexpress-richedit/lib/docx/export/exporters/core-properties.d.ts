import { ExporterBaseWithRootElement } from './base';
export declare class CorePropertiesExporter extends ExporterBaseWithRootElement {
    get filePath(): string;
    get rootElement(): string;
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    protected fillWriter(): void;
    private registerNamespaces;
    private getDateTime;
    private getLastTwoSlice;
}
//# sourceMappingURL=core-properties.d.ts.map