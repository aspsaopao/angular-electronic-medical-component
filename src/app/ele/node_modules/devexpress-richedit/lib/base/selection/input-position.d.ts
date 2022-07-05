import { SectionProperties } from '../../core/model/section/section-properties';
import { InputPositionBase } from '../../core/selection/input-position-base';
import { Selection } from './selection';
export declare class InputPosition extends InputPositionBase {
    private selection;
    private mergedSectionPropertiesRaw;
    private mergedSectionPropertiesFull;
    constructor(selection: Selection);
    reset(): void;
    resetSectionMergedProperties(): void;
    getMergedSectionPropertiesRaw(): SectionProperties;
    getMergedSectionPropertiesFull(): SectionProperties;
    protected resetReturnValues(): void;
}
//# sourceMappingURL=input-position.d.ts.map