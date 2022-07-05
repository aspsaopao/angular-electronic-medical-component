import { IModelManager } from '../../../model-manager';
import { MaskedCharacterPropertiesBundle, MaskedParagraphPropertiesBundleFull } from '../../../rich-utils/properties-bundle';
import { InputPositionBase } from '../../../selection/input-position-base';
import { SubDocumentPosition } from '../../sub-document';
import { ManipulatorParamsCharacterPropertiesBased } from '../utils/manipulator-params-base';
export declare class InsertParagraphManipulatorParams extends ManipulatorParamsCharacterPropertiesBased {
    parPropsBundle: MaskedParagraphPropertiesBundleFull;
    applyDirectlyToNewParagraph: boolean;
    actionAfter: (modelManager: IModelManager) => void;
    constructor(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, parPropsBundle?: MaskedParagraphPropertiesBundleFull, applyDirectlyToNewParagraph?: boolean, actionAfter?: (modelManager: IModelManager) => void);
    protected correctParams(): void;
    protected checkParams(): boolean;
    clone(): InsertParagraphManipulatorParams;
    static makeParamsByPosition(subDocPosition: SubDocumentPosition, inpPos?: InputPositionBase): InsertParagraphManipulatorParams;
}
//# sourceMappingURL=insert-paragraph-manipulator-params.d.ts.map