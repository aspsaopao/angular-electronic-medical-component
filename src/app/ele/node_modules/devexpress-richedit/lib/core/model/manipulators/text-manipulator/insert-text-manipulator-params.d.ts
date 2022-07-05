import { MaskedCharacterPropertiesBundle } from '../../../rich-utils/properties-bundle';
import { RunType } from '../../runs/run-type';
import { SubDocumentPosition } from '../../sub-document';
import { ManipulatorParamsCharacterPropertiesBased } from '../utils/manipulator-params-base';
export declare class InsertTextManipulatorParams extends ManipulatorParamsCharacterPropertiesBased {
    text: string;
    runType: RunType;
    constructor(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle, runType: RunType, text: string);
    clone(): InsertTextManipulatorParams;
}
export declare class InsertLayoutDependentTextManipulatorParams extends InsertTextManipulatorParams {
    constructor(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle);
}
//# sourceMappingURL=insert-text-manipulator-params.d.ts.map