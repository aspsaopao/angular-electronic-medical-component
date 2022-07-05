import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { FloatingImageApi } from './floating-image';
import { InlineImageApi } from './inline-image';
export declare class ImageIteratorApi {
    private _iterator;
    private _processor;
    private _subDocument;
    private _currImage;
    get image(): InlineImageApi | FloatingImageApi | null;
    constructor(processor: IProcessor, subDocument: SubDocument, pos: number);
    next(): boolean;
}
//# sourceMappingURL=image-iterator.d.ts.map