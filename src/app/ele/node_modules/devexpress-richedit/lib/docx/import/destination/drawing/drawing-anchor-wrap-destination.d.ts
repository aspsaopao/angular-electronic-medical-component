import { XmlReader } from '../../../zip/xml-reader';
import { Data } from '../../data';
import { LeafElementDestination } from '../destination';
import { DrawingAnchorDestination } from './drawing-destination';
export declare class DrawingAnchorWrapNoneDestination extends LeafElementDestination {
    anchorDestination: DrawingAnchorDestination;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
export declare class DrawingAnchorWrapTopAndBottomDestination extends LeafElementDestination {
    anchorDestination: DrawingAnchorDestination;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    processElementOpen(_reader: XmlReader): Promise<void>;
}
export declare class DrawingAnchorPolygonDestinationBase extends LeafElementDestination {
    anchorDestination: DrawingAnchorDestination;
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class DrawingAnchorWrapSquareDestination extends DrawingAnchorPolygonDestinationBase {
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class DrawingAnchorWrapThroughDestination extends DrawingAnchorPolygonDestinationBase {
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    processElementOpen(reader: XmlReader): Promise<void>;
}
export declare class DrawingAnchorWrapTightDestination extends DrawingAnchorPolygonDestinationBase {
    constructor(data: Data, anchorDestination: DrawingAnchorDestination);
    processElementOpen(reader: XmlReader): Promise<void>;
}
//# sourceMappingURL=drawing-anchor-wrap-destination.d.ts.map