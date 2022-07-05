import { XmlWriter } from '../../zip/xml-writer';
import { Data } from '../data';
export declare abstract class BaseExporter {
    protected data: Data;
    protected get writer(): XmlWriter;
    constructor(data: Data);
}
export declare abstract class ExporterBaseWithRootElement extends BaseExporter {
    export(): void;
    get rootNSPrefix(): string;
    get rootNSValue(): string;
    abstract get filePath(): string;
    abstract get rootElement(): string;
    protected abstract fillWriter(): any;
    protected isWriteToZip(): boolean;
    protected writeToZip(filePath: string, writer: XmlWriter): void;
}
//# sourceMappingURL=base.d.ts.map