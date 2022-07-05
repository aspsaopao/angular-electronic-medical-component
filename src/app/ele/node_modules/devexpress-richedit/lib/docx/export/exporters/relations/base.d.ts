import { ExporterBaseWithRootElement } from '../base';
export declare abstract class RelationsBaseExporter extends ExporterBaseWithRootElement {
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    get rootElement(): string;
    protected numRels: number;
    protected addRel(id: string, type: string, target: string, external?: boolean): void;
    protected urlEncodeAsciiSpecialSymbols(url: string): string;
}
//# sourceMappingURL=base.d.ts.map