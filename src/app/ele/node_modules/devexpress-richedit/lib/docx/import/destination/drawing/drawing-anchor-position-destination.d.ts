import { AnchorObjectHorizontalPositionAlignment, AnchorObjectVerticalPositionAlignment } from '../../../../core/model/floating-objects/enums';
import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { ElementDestination, ElementHandler, ElementHandlerTable, LeafElementDestination } from '../destination';
import { DrawingAnchorDestination } from './drawing-destination';
export declare abstract class DrawingAnchorPositionBaseDestination extends ElementDestination {
    protected get elementHandlerTable(): Record<string, ElementHandler>;
    offset: number;
    percentOffset: number;
    protected anchorDestination: DrawingAnchorDestination;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    static getThis(data: Data): DrawingAnchorPositionBaseDestination;
    protected static onPositionOffset(data: Data, _reader: XmlReader): ElementDestination;
    protected static onPositionPercentOffset(data: Data, _reader: XmlReader): ElementDestination;
    processElementClose(reader: XmlReader): void;
    protected processElementCloseCore(_reader: XmlReader): void;
}
export declare class DrawingAnchorHorizontalPositionDestination extends DrawingAnchorPositionBaseDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    alignment: AnchorObjectHorizontalPositionAlignment;
    private relativeTo;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    static getThis(data: Data): DrawingAnchorHorizontalPositionDestination;
    static onHorizontalAlignment(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    protected processElementCloseCore(_reader: XmlReader): void;
}
export declare class DrawingAnchorVerticalPositionDestination extends DrawingAnchorPositionBaseDestination {
    protected get elementHandlerTable(): ElementHandlerTable;
    static handlerTable: ElementHandlerTable;
    alignment: AnchorObjectVerticalPositionAlignment;
    private relativeTo;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    static getThis(data: Data): DrawingAnchorVerticalPositionDestination;
    static onVerticalAlignment(data: Data, _reader: XmlReader): ElementDestination;
    processElementOpen(reader: XmlReader): Promise<void>;
    protected processElementCloseCore(_reader: XmlReader): void;
}
export declare class DrawingAnchorPositionOffsetDestination extends LeafElementDestination {
    positionDestination: DrawingAnchorPositionBaseDestination;
    constructor(data: Data, positionDestination: DrawingAnchorPositionBaseDestination);
    processText(reader: XmlReader): boolean;
}
export declare class DrawingAnchorPositionPercentOffsetDestination extends LeafElementDestination {
    positionDestination: DrawingAnchorPositionBaseDestination;
    constructor(data: Data, positionDestination: DrawingAnchorPositionBaseDestination);
    processText(reader: XmlReader): boolean;
}
export declare class DrawingAnchorPositionHorizontalAlignmentDestination extends LeafElementDestination {
    positionDestination: DrawingAnchorHorizontalPositionDestination;
    constructor(data: Data, positionDestination: DrawingAnchorHorizontalPositionDestination);
    processText(reader: XmlReader): boolean;
}
export declare class DrawingAnchorPositionVerticalAlignmentDestination extends LeafElementDestination {
    positionDestination: DrawingAnchorVerticalPositionDestination;
    constructor(data: Data, positionDestination: DrawingAnchorVerticalPositionDestination);
    processText(reader: XmlReader): boolean;
}
//# sourceMappingURL=drawing-anchor-position-destination.d.ts.map