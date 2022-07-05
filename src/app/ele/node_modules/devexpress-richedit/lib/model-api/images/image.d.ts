import { AnchoredPictureRun } from '../../core/model/runs/anchored-picture-run';
import { InlinePictureRun } from '../../core/model/runs/inline-picture-run';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { IntervalApi } from '../interval';
import { SizeApi } from '../size';
import { FloatingImageApi } from './floating-image';
import { WrapTypeApi } from './image-enums';
import { InlineImageApi } from './inline-image';
export declare abstract class ImageApi {
    protected readonly _run: InlinePictureRun | AnchoredPictureRun;
    protected readonly _position: number;
    protected readonly _processor: IProcessor;
    protected readonly _subDocument: SubDocument;
    constructor(processor: IProcessor, subDocument: SubDocument, position: number, run: InlinePictureRun | AnchoredPictureRun);
    get base64(): string;
    get url(): string | undefined;
    get interval(): IntervalApi;
    get isLoaded(): boolean;
    get extension(): string;
    get originalSize(): SizeApi;
    get actualSize(): SizeApi;
    set actualSize(value: SizeApi);
    get description(): string;
    set description(value: string);
    abstract getWrapType(): WrapTypeApi;
    changeWrapType(wrapType: WrapTypeApi): InlineImageApi | FloatingImageApi;
    delete(): void;
    onLoaded(callback: (image: ImageApi) => void): void;
    reload(base64: string, size?: SizeApi): void;
    private getSizeCore;
}
//# sourceMappingURL=image.d.ts.map