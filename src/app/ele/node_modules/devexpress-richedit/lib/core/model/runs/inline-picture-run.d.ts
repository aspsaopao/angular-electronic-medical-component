import { ICloneable, ISupportCopyFrom } from '@devexpress/utils/lib/types';
import { MaskedCharacterPropertiesBundle } from '../../rich-utils/properties-bundle';
import { InlinePictureInfo } from '../manipulators/picture-manipulator/insert-picture-manipulator-params';
import { Paragraph } from '../paragraph/paragraph';
import { SubDocument } from '../sub-document';
import { AnchoredPictureRun } from './anchored-picture-run';
import { PictureRun } from './run-base';
import { RunType } from './run-type';
export declare type PictureRunType = InlinePictureRun | AnchoredPictureRun;
export declare class InlinePictureRun extends PictureRun<InlinePictureInfo> implements ISupportCopyFrom<InlinePictureRun>, ICloneable<InlinePictureRun> {
    private static nextPublicAPIId;
    get publicAPIId(): number;
    constructor(startOffset: number, paragraph: Paragraph, charPropsBundle: MaskedCharacterPropertiesBundle, info: InlinePictureInfo);
    getType(): RunType;
    clone(): InlinePictureRun;
    cloneToNewSubDocument(subDocument: SubDocument): InlinePictureRun;
    private getNextPublicAPIId;
}
//# sourceMappingURL=inline-picture-run.d.ts.map