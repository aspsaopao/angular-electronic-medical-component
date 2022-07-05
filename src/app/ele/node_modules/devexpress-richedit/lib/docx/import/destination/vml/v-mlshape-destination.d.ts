import { AnchorInfo } from '../../../../core/model/floating-objects/anchor-info';
import { AnchorTextBoxSize } from '../../../../core/model/floating-objects/sizes';
import { Shape } from '../../../../core/model/shapes/shape';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { FloatingObjectImportInfo } from '../../model/floating-object-import-info';
import { ElementDestination, ElementHandlerTable, LeafElementDestination } from '../destination';
import { InlineObjectDestination } from '../runs/inline-object-destination';
export declare class VMLShapeDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    get floatingObjectImportInfo(): FloatingObjectImportInfo;
    get style(): string;
    static handlerTable: ElementHandlerTable;
    isStroked: boolean;
    isFilled: boolean;
    outlineColor: number;
    fillColor: number;
    outlineWidth: number;
    inlineObjectDestination: InlineObjectDestination;
    constructor(data: Data, inlineObjectDestination: InlineObjectDestination);
    static getThis(data: Data): VMLShapeDestination;
    static onWrap(data: Data, _reader: XmlReader): ElementDestination;
    static onLock(data: Data, _reader: XmlReader): ElementDestination;
    static onTextBox(data: Data, _reader: XmlReader): ElementDestination;
    static onAnchorLock(data: Data, _reader: XmlReader): ElementDestination;
    static onImageData(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    readFlatingObjectHyperlinkInfo(reader: XmlReader): void;
    processElementClose(reader: XmlReader): void;
    applyShapeProperties(shape: Shape): void;
    applyTextBoxShapeProperties(shape: Shape): void;
    applyPictureShapeProperties(shape: Shape): void;
    readFloatingObjectProperties(reader: XmlReader): void;
    readShapeProperties(reader: XmlReader): void;
    readFloatingObjectPropertiesCore(reader: XmlReader, properties: AnchorInfo): void;
    readShapePropertiesCore(reader: XmlReader): void;
    getBoolValue(value: string): boolean;
}
export declare class WrapDestination extends LeafElementDestination {
    floatingObject: AnchorInfo;
    constructor(data: Data, floatingObjectProperties: AnchorInfo);
    importTextWrapType(reader: XmlReader): void;
    importTextWrapSide(reader: XmlReader): void;
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class ShapeLockDestination extends LeafElementDestination {
    size: AnchorTextBoxSize;
    constructor(data: Data, size: AnchorTextBoxSize);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class AnchorLockDestination extends LeafElementDestination {
    floatingObjectProperties: AnchorInfo;
    constructor(data: Data, floatingObjectProperties: AnchorInfo);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
export declare class VMLTextBoxDestination extends ElementDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    floatingObjectImportInfo: FloatingObjectImportInfo;
    constructor(data: Data, floatingObjectImportInfo: FloatingObjectImportInfo);
    static onTextBoxContent(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    processElementClose(_reader: XmlReader): void;
    getMargins(strMargins: string): number[];
    getResizeShapeToFitText(style: string): boolean;
    getValidMarginValue(value: number, defaultValue: number): number;
    getFloatValue(numb: string): number;
}
export declare class VmlShapeImageDataDestination extends LeafElementDestination {
    floatingObjectImportInfo: FloatingObjectImportInfo;
    constructor(data: Data, floatingObjectImportInfo: FloatingObjectImportInfo);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=v-mlshape-destination.d.ts.map