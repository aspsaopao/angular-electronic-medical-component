import { AnchorInfo } from '../../core/model/floating-objects/anchor-info';
import { AnchoredPictureRun } from '../../core/model/runs/anchored-picture-run';
import { SubDocument } from '../../core/model/sub-document';
import { IProcessor } from '../../core/processor';
import { ImageApi } from './image';
import { WrapSideApi, WrapTypeApi } from './image-enums';
import { HorizontalAbsolutePositionApi, HorizontalAlignedPositionApi, HorizontalRelativePositionApi, IFloatingObjectDistanceApi, IHorizontalAbsolutePositionApi, IHorizontalAlignedPositionApi, IHorizontalRelativePositionApi, IVerticalAbsolutePositionApi, IVerticalAlignedPositionApi, IVerticalRelativePositionApi, VerticalAbsolutePositionApi, VerticalAlignedPositionApi, VerticalRelativePositionApi } from './image-interfaces';
export declare function applyHorizontalPosition(position: IHorizontalAlignedPositionApi | IHorizontalAbsolutePositionApi | IHorizontalRelativePositionApi, anchorInfo: AnchorInfo): boolean;
export declare function applyVerticalPosition(position: IVerticalAlignedPositionApi | IVerticalAbsolutePositionApi | IVerticalRelativePositionApi, anchorInfo: AnchorInfo): boolean;
export declare class FloatingImageApi extends ImageApi {
    constructor(processor: IProcessor, subDocument: SubDocument, position: number, run: AnchoredPictureRun);
    get outlineColor(): string;
    set outlineColor(value: string);
    get outlineWidth(): number;
    set outlineWidth(value: number);
    get wrapSide(): WrapSideApi;
    set wrapSide(wrapSide: WrapSideApi);
    get distance(): IFloatingObjectDistanceApi;
    set distance(value: IFloatingObjectDistanceApi);
    getHorizontalPosition(): HorizontalAlignedPositionApi | HorizontalAbsolutePositionApi | HorizontalRelativePositionApi;
    setHorizontalPosition(position: IHorizontalAlignedPositionApi | IHorizontalAbsolutePositionApi | IHorizontalRelativePositionApi): void;
    getVerticalPosition(): VerticalAlignedPositionApi | VerticalAbsolutePositionApi | VerticalRelativePositionApi;
    setVerticalPosition(position: IVerticalAlignedPositionApi | IVerticalAbsolutePositionApi | IVerticalRelativePositionApi): void;
    getWrapType(): WrapTypeApi;
}
//# sourceMappingURL=floating-image.d.ts.map