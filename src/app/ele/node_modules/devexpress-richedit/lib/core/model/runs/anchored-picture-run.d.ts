import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { AnchorInfo } from '../floating-objects/anchor-info';
import { AnchorPictureInfo } from '../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { Paragraph } from '../paragraph/paragraph';
import { SubDocument } from '../sub-document';
import { PictureRun } from './run-base';
import { RunType } from './run-type';
export declare class AnchoredPictureRun extends PictureRun<AnchorPictureInfo> implements ISupportCopyFrom<AnchoredPictureRun>, ICloneable<AnchoredPictureRun> {
    get anchorInfo(): AnchorInfo;
    set anchorInfo(val: AnchorInfo);
    anchoredObjectID: number;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle, info: AnchorPictureInfo, objectId: number);
    getType(): RunType;
    clone(): AnchoredPictureRun;
    cloneToNewSubDocument(subDocument: SubDocument): AnchoredPictureRun;
}
//# sourceMappingURL=anchored-picture-run.d.ts.map