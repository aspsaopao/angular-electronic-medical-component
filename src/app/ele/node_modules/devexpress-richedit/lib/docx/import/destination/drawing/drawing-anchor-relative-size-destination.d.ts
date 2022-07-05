import { RelativeHeightType, RelativeWidthType } from '../../../../core/model/floating-objects/enums';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { ElementDestination, ElementHandlerTable, LeafElementDestination } from '../destination';
import { DrawingAnchorDestination } from './drawing-destination';
export declare abstract class DrawingAnchorRelativeSizeBaseDestination extends ElementDestination {
    value: number;
    protected anchorDestination: DrawingAnchorDestination;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    static getThis(data: Data): DrawingAnchorRelativeSizeBaseDestination;
    processElementClose(reader: XmlReader): Promise<void>;
    protected processElementCloseCore(_reader: XmlReader): void;
}
export declare class DrawingAnchorHorizontalRelativeSizeDestination extends DrawingAnchorRelativeSizeBaseDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    relativeFrom: RelativeWidthType;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    static getThis(data: Data): DrawingAnchorHorizontalRelativeSizeDestination;
    static onPictureWidth(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    protected processElementCloseCore(_reader: XmlReader): void;
}
export declare class DrawingAnchorVerticalRelativeSizeDestination extends DrawingAnchorRelativeSizeBaseDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    relativeFrom: RelativeHeightType;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    static getThis(data: Data): DrawingAnchorVerticalRelativeSizeDestination;
    static onPictureHeight(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    protected processElementCloseCore(_reader: XmlReader): void;
}
export declare class DrawingAnchorRelativeSizeValueDestination extends LeafElementDestination {
    sizeDestination: DrawingAnchorRelativeSizeBaseDestination;
    constructor(data: Data, positionDestination: DrawingAnchorRelativeSizeBaseDestination);
    processText(reader: XmlReader): boolean;
}
//# sourceMappingURL=drawing-anchor-relative-size-destination.d.ts.map