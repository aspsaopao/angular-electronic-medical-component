import { InlinePictureRun } from '../../core/model/runs/inline-picture-run';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { ImageApi } from './image';
import { WrapTypeApi } from './image-enums';
export declare class InlineImageApi extends ImageApi {
    constructor(processor: IProcessor, subDocument: SubDocument, position: number, run: InlinePictureRun);
    getWrapType(): WrapTypeApi;
}
//# sourceMappingURL=inline-image.d.ts.map