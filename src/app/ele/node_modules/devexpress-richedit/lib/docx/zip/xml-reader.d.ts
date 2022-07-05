import { ImporterOptions } from '../import/importer-options';
export declare enum XmlReaderState {
    Ok = 0,
    Error = 1,
    EndOfFile = 2
}
export declare enum XmlNodeType {
    None = 0,
    Element = 1,
    EndElement = 2,
    Text = 3,
    CDATA = 4,
    SignificantWhitespace = 5,
    Whitespace = 6,
    Comment = 7
}
export declare class XmlReader {
    private get elementInfo();
    get nodeType(): XmlNodeType;
    get localName(): string;
    get name(): string;
    get namespaceURI(): string;
    get attributes(): NamedNodeMap;
    get value(): string;
    state: XmlReaderState;
    filePath: string;
    private elementStack;
    private options;
    private document;
    constructor(str: string, options: ImporterOptions, filePath: string);
    getAttribute(name: string): string;
    getAttributeNS(name: string, namespaceUri: string): string;
    skipElement(): void;
    readToFollowingNS(name: string, ns: string): boolean;
    readToFollowing(name: string): boolean;
    read(): boolean;
    private handleNewNode;
}
//# sourceMappingURL=xml-reader.d.ts.map