import { FullChunkAndRunInfo } from '../../core/model/full-chunk-and-run-info';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { IntervalApi } from '../interval';
import { FloatingImageApi } from './floating-image';
import { IInsertedFloatingImageOptionsApi, IInsertedInlineImageOptionsApi } from './image-interfaces';
import { ImageIteratorApi } from './image-iterator';
import { InlineImageApi } from './inline-image';
export declare function getInlineImageApiFromRun(processor: IProcessor, subDocument: SubDocument, runInfo: FullChunkAndRunInfo): InlineImageApi;
export declare function getFloatingImageApiFromRun(processor: IProcessor, subDocument: SubDocument, runInfo: FullChunkAndRunInfo): FloatingImageApi;
export declare function getImageApiFromRun(processor: IProcessor, subDocument: SubDocument, runInfo: FullChunkAndRunInfo): InlineImageApi | FloatingImageApi | null;
export declare class ImagesApi {
    protected _subDocument: SubDocument;
    protected _processor: IProcessor;
    constructor(processor: IProcessor, subDocument: SubDocument);
    createInline(position: number, options: IInsertedInlineImageOptionsApi): InlineImageApi;
    createFloating(position: number, options: IInsertedFloatingImageOptionsApi): FloatingImageApi;
    getIterator(startPosition?: number): ImageIteratorApi;
    getAllImages(): (InlineImageApi | FloatingImageApi)[];
    find(position: number | IntervalApi | IntervalApi[]): (InlineImageApi | FloatingImageApi)[];
}
//# sourceMappingURL=images.d.ts.map