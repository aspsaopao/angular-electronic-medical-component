import { SizeApi } from '../size';
import { FloatingImageApi } from './floating-image';
import { FloatingObjectHorizontalAlignmentApi, FloatingObjectHorizontalAnchorElementApi, FloatingObjectHorizontalPositionTypeApi, FloatingObjectVerticalAlignmentApi, FloatingObjectVerticalAnchorElementApi, FloatingObjectVerticalPositionTypeApi, WrapSideApi, WrapTypeApi } from './image-enums';
import { InlineImageApi } from './inline-image';
export interface IFloatingObjectDistanceApi {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
}
export interface IHorizontalAlignedPositionApi {
    relativeTo: FloatingObjectHorizontalAnchorElementApi;
    alignment: FloatingObjectHorizontalAlignmentApi;
}
export declare class HorizontalAlignedPositionApi {
    readonly type = FloatingObjectHorizontalPositionTypeApi.Aligned;
    relativeTo: FloatingObjectHorizontalAnchorElementApi;
    alignment: FloatingObjectHorizontalAlignmentApi;
    constructor(relativeTo: FloatingObjectHorizontalAnchorElementApi, alignment: FloatingObjectHorizontalAlignmentApi);
}
export interface IHorizontalAbsolutePositionApi {
    relativeTo: FloatingObjectHorizontalAnchorElementApi;
    position: number;
}
export declare class HorizontalAbsolutePositionApi {
    readonly type = FloatingObjectHorizontalPositionTypeApi.Absolute;
    relativeTo: FloatingObjectHorizontalAnchorElementApi;
    position: number;
    constructor(relativeTo: FloatingObjectHorizontalAnchorElementApi, position: number);
}
export interface IHorizontalRelativePositionApi {
    relativeTo: FloatingObjectHorizontalAnchorElementApi.Margin | FloatingObjectHorizontalAnchorElementApi.Page | FloatingObjectHorizontalAnchorElementApi.LeftMargin | FloatingObjectHorizontalAnchorElementApi.RightMargin | FloatingObjectHorizontalAnchorElementApi.InsideMargin | FloatingObjectHorizontalAnchorElementApi.OutsideMargin;
    relativePosition: number;
}
export declare class HorizontalRelativePositionApi {
    readonly type = FloatingObjectHorizontalPositionTypeApi.Relative;
    relativeTo: FloatingObjectHorizontalAnchorElementApi.Margin | FloatingObjectHorizontalAnchorElementApi.Page | FloatingObjectHorizontalAnchorElementApi.LeftMargin | FloatingObjectHorizontalAnchorElementApi.RightMargin | FloatingObjectHorizontalAnchorElementApi.InsideMargin | FloatingObjectHorizontalAnchorElementApi.OutsideMargin;
    relativePosition: number;
    constructor(relativeTo: FloatingObjectHorizontalAnchorElementApi.Margin | FloatingObjectHorizontalAnchorElementApi.Page | FloatingObjectHorizontalAnchorElementApi.LeftMargin | FloatingObjectHorizontalAnchorElementApi.RightMargin | FloatingObjectHorizontalAnchorElementApi.InsideMargin | FloatingObjectHorizontalAnchorElementApi.OutsideMargin, relativePosition: number);
}
export interface IVerticalAlignedPositionApi {
    relativeTo: FloatingObjectVerticalAnchorElementApi.Page | FloatingObjectVerticalAnchorElementApi.Line | FloatingObjectVerticalAnchorElementApi.Margin | FloatingObjectVerticalAnchorElementApi.TopMargin | FloatingObjectVerticalAnchorElementApi.BottomMargin | FloatingObjectVerticalAnchorElementApi.InsideMargin | FloatingObjectVerticalAnchorElementApi.OutsideMargin;
    alignment: FloatingObjectVerticalAlignmentApi;
}
export declare class VerticalAlignedPositionApi {
    readonly type = FloatingObjectVerticalPositionTypeApi.Aligned;
    relativeTo: FloatingObjectVerticalAnchorElementApi.Page | FloatingObjectVerticalAnchorElementApi.Line | FloatingObjectVerticalAnchorElementApi.Margin | FloatingObjectVerticalAnchorElementApi.TopMargin | FloatingObjectVerticalAnchorElementApi.BottomMargin | FloatingObjectVerticalAnchorElementApi.InsideMargin | FloatingObjectVerticalAnchorElementApi.OutsideMargin;
    alignment: FloatingObjectVerticalAlignmentApi;
    constructor(relativeTo: FloatingObjectVerticalAnchorElementApi.Page | FloatingObjectVerticalAnchorElementApi.Line | FloatingObjectVerticalAnchorElementApi.Margin | FloatingObjectVerticalAnchorElementApi.TopMargin | FloatingObjectVerticalAnchorElementApi.BottomMargin | FloatingObjectVerticalAnchorElementApi.InsideMargin | FloatingObjectVerticalAnchorElementApi.OutsideMargin, alignment: FloatingObjectVerticalAlignmentApi);
}
export interface IVerticalAbsolutePositionApi {
    relativeTo: FloatingObjectVerticalAnchorElementApi;
    position: number;
}
export declare class VerticalAbsolutePositionApi {
    readonly type = FloatingObjectVerticalPositionTypeApi.Absolute;
    relativeTo: FloatingObjectVerticalAnchorElementApi;
    position: number;
    constructor(relativeTo: FloatingObjectVerticalAnchorElementApi, position: number);
}
export interface IVerticalRelativePositionApi {
    relativeTo: FloatingObjectVerticalAnchorElementApi.Page | FloatingObjectVerticalAnchorElementApi.Margin | FloatingObjectVerticalAnchorElementApi.TopMargin | FloatingObjectVerticalAnchorElementApi.BottomMargin | FloatingObjectVerticalAnchorElementApi.InsideMargin | FloatingObjectVerticalAnchorElementApi.OutsideMargin;
    relativePosition: number;
}
export declare class VerticalRelativePositionApi {
    readonly type = FloatingObjectVerticalPositionTypeApi.Relative;
    relativeTo: FloatingObjectVerticalAnchorElementApi.Page | FloatingObjectVerticalAnchorElementApi.Margin | FloatingObjectVerticalAnchorElementApi.TopMargin | FloatingObjectVerticalAnchorElementApi.BottomMargin | FloatingObjectVerticalAnchorElementApi.InsideMargin | FloatingObjectVerticalAnchorElementApi.OutsideMargin;
    relativePosition: number;
    constructor(relativeTo: FloatingObjectVerticalAnchorElementApi.Page | FloatingObjectVerticalAnchorElementApi.Margin | FloatingObjectVerticalAnchorElementApi.TopMargin | FloatingObjectVerticalAnchorElementApi.BottomMargin | FloatingObjectVerticalAnchorElementApi.InsideMargin | FloatingObjectVerticalAnchorElementApi.OutsideMargin, relativePosition: number);
}
export interface IInsertedFloatingImageOptionsApi {
    base64?: string;
    url?: string;
    actualSize: SizeApi;
    callback?: (image: FloatingImageApi) => void;
    description?: string;
    outlineColor?: string;
    outlineWidth?: number;
    wrapSide?: WrapSideApi;
    wrapType?: WrapTypeApi;
    distance?: IFloatingObjectDistanceApi;
    horizontalPosition?: IHorizontalAlignedPositionApi | IHorizontalAbsolutePositionApi | IHorizontalRelativePositionApi;
    verticalPosition?: IVerticalAlignedPositionApi | IVerticalAbsolutePositionApi | IVerticalRelativePositionApi;
}
export interface IInsertedInlineImageOptionsApi {
    base64?: string;
    url?: string;
    actualSize: SizeApi;
    callback?: (image: InlineImageApi) => void;
    description?: string;
}
//# sourceMappingURL=image-interfaces.d.ts.map