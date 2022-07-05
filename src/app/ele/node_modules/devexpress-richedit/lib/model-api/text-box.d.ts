import { AnchoredTextBoxRun } from '../core/model/runs/anchored-text-box-run';
import { DrawingObjectBase } from './picture';
import { MarginsApi, SizeApi } from './size';
export declare class TextBoxApi extends DrawingObjectBase<AnchoredTextBoxRun> {
    get size(): TextBoxSizeApi;
    set size(size: TextBoxSizeApi);
    get properties(): TextBoxPropertiesApi;
    set properties(properties: TextBoxPropertiesApi);
}
export declare class TextBoxSizeApi {
    absoluteSize?: SizeApi;
    relativeSize?: SizeApi;
    relativeHeightType?: RelativeHeightTypeApi;
    relativeWidthType?: RelativeWidthTypeApi;
    constructor(absoluteSize?: SizeApi, relativeSize?: SizeApi, relativeWidthType?: RelativeWidthTypeApi, relativeHeightType?: RelativeHeightTypeApi);
}
export declare class TextBoxPropertiesApi {
    verticalAlignment: DrawingTextAnchoringTypeApi;
    margins: MarginsApi;
}
export declare enum DrawingTextAnchoringTypeApi {
    Bottom = 1,
    Center = 2,
    Distributed = 3,
    Justified = 4,
    Top = 5
}
export declare enum RelativeWidthTypeApi {
    Margin = 0,
    Page = 1,
    LeftMargin = 2,
    RightMargin = 3,
    InsideMargin = 4,
    OutsideMargin = 5
}
export declare enum RelativeHeightTypeApi {
    Margin = 0,
    Page = 1,
    TopMargin = 2,
    BottomMargin = 3,
    InsideMargin = 4,
    OutsideMargin = 5
}
//# sourceMappingURL=text-box.d.ts.map