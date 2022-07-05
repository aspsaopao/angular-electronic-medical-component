import { IModelManager } from '../core/model-manager';
import { AnchorInfo } from '../core/model/floating-objects/anchor-info';
import { AnchoredTextBoxRun } from '../core/model/runs/anchored-text-box-run';
import { PictureRunType } from '../core/model/runs/inline-picture-run';
import { SubDocument } from '../core/model/sub-document';
import { AnchorInfoApi } from './anchor-info';
import { SizeApi } from './size';
export declare class DrawingObjectBase<TRun extends PictureRunType | AnchoredTextBoxRun> {
    protected _native: IModelManager;
    protected _subDocument: SubDocument;
    protected _run: TRun;
    protected _position: number;
    constructor(modelManager: IModelManager, subDocument: SubDocument, run: TRun, position: number);
    delete(): void;
    get anhorInfo(): AnchorInfoApi;
    set anchorInfo(info: AnchorInfoApi);
    protected _getAnchorInfo(): AnchorInfoApi;
    protected _setAnchorInfo(info: AnchorInfoApi): void;
    protected _checkParameters(info: AnchorInfoApi): AnchorInfo;
}
export declare class PictureApi extends DrawingObjectBase<PictureRunType> {
    get size(): PictureSizeApi;
    set size(size: PictureSizeApi);
    protected _getAnchorInfo(): AnchorInfoApi;
    protected setAnchorInfo(info: AnchorInfoApi): void;
    private _getScale;
}
export declare class PictureSizeApi {
    originalSize: SizeApi;
    actualSize: SizeApi;
    lockAspectRatio: boolean;
    constructor(originalSize: SizeApi, actualSize: SizeApi, lockAspectRatio: boolean);
}
//# sourceMappingURL=picture.d.ts.map