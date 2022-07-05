import { MaskedCharacterPropertiesBundle } from '../../../rich-utils/properties-bundle';
import { SubDocumentPosition } from '../../sub-document';
export declare abstract class ManipulatorParamsBase {
    needCheckParams: boolean;
    needCorrectParams: boolean;
    constructor(needCorrectParams: boolean, needCheckParams: boolean);
    protected abstract checkParams(): boolean;
    protected abstract correctParams(): any;
    protected fail(exceptionString: string): boolean;
    correctAndCheckParams(): boolean;
    protected innerCheck(paramOk: boolean, exceptionString: string): boolean;
}
export declare class ManipulatorParamsPositionBased extends ManipulatorParamsBase {
    subDocPos: SubDocumentPosition;
    constructor(subDocPos: SubDocumentPosition);
    protected correctParams(): void;
    protected checkParams(): boolean;
}
export declare class ManipulatorParamsCharacterPropertiesBased extends ManipulatorParamsPositionBased {
    charPropsBundle: MaskedCharacterPropertiesBundle;
    constructor(subDocPos: SubDocumentPosition, charPropsBundle: MaskedCharacterPropertiesBundle);
    protected checkParams(): boolean;
}
//# sourceMappingURL=manipulator-params-base.d.ts.map