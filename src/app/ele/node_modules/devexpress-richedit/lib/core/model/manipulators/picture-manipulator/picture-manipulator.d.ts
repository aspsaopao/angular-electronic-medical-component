import { FixedInterval } from '@devexpress/utils/lib/intervals/fixed';
import { MaskedCharacterPropertiesBundle } from '../../../rich-utils/properties-bundle';
import { AnchorInfo } from '../../floating-objects/anchor-info';
import { AnchorObjectTextWrapSide, AnchorObjectTextWrapType } from '../../floating-objects/enums';
import { PictureSize } from '../../floating-objects/sizes';
import { HistoryItemIntervalState } from '../../history/states/history-item-state';
import { HistoryItemIntervalStateObject } from '../../history/states/history-item-state-object';
import { SubDocument, SubDocumentPosition } from '../../sub-document';
import { BaseManipulator } from '../base-manipulator';
import { IIntervalPropertyManipulator } from '../i-properties-manipulator';
import { ModelManipulator } from '../model-manipulator';
import { RunsBaseManipulator } from '../runs-base-manipulator';
import { AnchorPictureInfo, InlinePictureInfo } from './insert-picture-manipulator-params';
import { ImageLoadingOptions } from './loader/image-loading-options';
import { PictureLoader } from './loader/picture-loader';
import { NonVisualDrawingObjectInfo } from './non-visual-drawing-object-info';
import { Size as SizeCore } from '@devexpress/utils/lib/geometry/size';
export declare class InsertPictureViaHistoryResult {
    inserted: boolean;
    insertedInterval: FixedInterval;
    constructor(inserted: boolean, insertedInterval: FixedInterval);
}
export declare class InsertAnchoredPictureViaHistoryResult {
    inserted: boolean;
    insertedInterval: FixedInterval;
    anchoredObjectID: number;
    constructor(inserted: boolean, insertedInterval: FixedInterval, anchoredObjectID: number);
}
export declare class PictureManipulator extends RunsBaseManipulator {
    loader: PictureLoader;
    descriptionManipulator: IIntervalPropertyManipulator<string>;
    constructor(manipulator: ModelManipulator);
    changeHorizontalPosition(subDocument: SubDocument, position: number, newValue: AnchorInfo): void;
    changeVerticalPosition(subDocument: SubDocument, position: number, newValue: AnchorInfo): void;
    changeDescription(subDocument: SubDocument, position: number, newValue: string): void;
    changeWrapSide(subDocument: SubDocument, position: number, newValue: AnchorObjectTextWrapSide): void;
    changeShapeOutlineWidth(subDocument: SubDocument, position: number, newValue: number): void;
    changeShapeOutlineColor(subDocument: SubDocument, position: number, newColor: number): void;
    changeShapeFillColor(subDocument: SubDocument, position: number, newColor: number): void;
    changeNumberedShapeProperty(subDocument: SubDocument, position: number, newValue: number, manipulator: IIntervalPropertyManipulator<number>): void;
    changePictureSize(subDocument: SubDocument, position: number, size: PictureSize): void;
    setFloatingObjectInlineTextWrapType(subDocument: SubDocument, position: number, charPropsBundle: MaskedCharacterPropertiesBundle): void;
    setFloatingObjectTextWrapType(subDocument: SubDocument, position: number, charPropsBundle: MaskedCharacterPropertiesBundle, isBehindDoc: boolean, anchorObjectTextWrapType: AnchorObjectTextWrapType): void;
    insertInlinePictureViaHistory(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: InlinePictureInfo, options?: ImageLoadingOptions): InsertPictureViaHistoryResult;
    insertAnchoredPictureViaHistory(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: AnchorPictureInfo, options?: ImageLoadingOptions): InsertPictureViaHistoryResult;
    reloadPicture(subDocument: SubDocument, position: number, base64: string, size?: SizeCore): void;
    insertInlinePictureInner(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: InlinePictureInfo, options?: ImageLoadingOptions): number;
    insertAnchoredPictureInner(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, picInfo: AnchorPictureInfo, options?: ImageLoadingOptions): InsertAnchoredPictureViaHistoryResult;
}
export declare class NonVisualDrawingObjectInfoManipulator<T> extends BaseManipulator implements IIntervalPropertyManipulator<T> {
    constructor(manipulator: ModelManipulator, setPropertyValue: (constainerPRoperties: NonVisualDrawingObjectInfo, value: T) => void, getPropertyValue: (constainerProperties: NonVisualDrawingObjectInfo) => T);
    setPropertyValue: (constainerProperties: NonVisualDrawingObjectInfo, value: T) => void;
    getPropertyValue: (constainerProperties: NonVisualDrawingObjectInfo) => T;
    setValue(subDocument: SubDocument, interval: FixedInterval, newValue: T): HistoryItemIntervalState<HistoryItemIntervalStateObject>;
    restoreValue(subDocument: SubDocument, state: HistoryItemIntervalState<HistoryItemIntervalStateObject>): void;
}
//# sourceMappingURL=picture-manipulator.d.ts.map